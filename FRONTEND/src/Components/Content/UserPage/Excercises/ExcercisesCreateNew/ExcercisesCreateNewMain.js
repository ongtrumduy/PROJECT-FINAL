import React from "react";
import axios from "axios";

import Modal from "react-modal";

import de111 from "../../../../Main/Image-Icons/de111.PNG";
import de222 from "../../../../Main/Image-Icons/de222.PNG";
import de333 from "../../../../Main/Image-Icons/de333.PNG";
import de444 from "../../../../Main/Image-Icons/de444.PNG";
import de555 from "../../../../Main/Image-Icons/de555.PNG";
import de666 from "../../../../Main/Image-Icons/de666.PNG";
import de777 from "../../../../Main/Image-Icons/de777.PNG";
import de888 from "../../../../Main/Image-Icons/de888.PNG";
import de999 from "../../../../Main/Image-Icons/de999.PNG";
import de110 from "../../../../Main/Image-Icons/de110.PNG";
import de120 from "../../../../Main/Image-Icons/de120.PNG";
import de130 from "../../../../Main/Image-Icons/de130.PNG";
import de140 from "../../../../Main/Image-Icons/de140.PNG";
import de150 from "../../../../Main/Image-Icons/de150.PNG";
import de160 from "../../../../Main/Image-Icons/de160.PNG";
import de170 from "../../../../Main/Image-Icons/de170.PNG";
import de180 from "../../../../Main/Image-Icons/de180.PNG";
import de190 from "../../../../Main/Image-Icons/de190.PNG";
import de211 from "../../../../Main/Image-Icons/de211.PNG";
import de212 from "../../../../Main/Image-Icons/de212.PNG";
import de213 from "../../../../Main/Image-Icons/de213.PNG";
import de214 from "../../../../Main/Image-Icons/de214.PNG";
import de215 from "../../../../Main/Image-Icons/de215.PNG";
import de216 from "../../../../Main/Image-Icons/de216.PNG";
import de217 from "../../../../Main/Image-Icons/de217.PNG";

export default class ExcercisesCreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setExcerciseLogoChoose: de111,
      ExcerciseName: "",
      ExcerciseDescription: "",
      ExcerciseNumberQuestion: "1",
      ExcerciseType: "public",
      ExcerciseID: ""
    };
  }

  openHavedExcerciseNameModal = () => {
    this.setState({ modalHavedExcerciseNameIsOpen: true });
  };

  closeHavedExcerciseNameModal = () => {
    this.setState({
      modalHavedExcerciseNameIsOpen: false
    });
  };

  openValidateExcerciseNameModal = () => {
    this.setState({ modalNonExcerciseNameIsOpen: true });
  };

  closeValidateExcerciseNameModal = () => {
    this.setState({ modalNonExcerciseNameIsOpen: false });
  };

  openConfirmCreateModal = () => {
    this.setState({ modalConfirmCreateIsOpen: true });
  };

  closeConfirmCreateModal = () => {
    this.setState({ modalConfirmCreateIsOpen: false });
  };

  openTooMoreModal = () => {
    this.setState({ modalTooMoreIsOpen: true });
  };

  closeTooMoreModal = () => {
    this.setState({ modalTooMoreIsOpen: false });
  };

  handleChooseExcerciseLogo = event => {
    this.setState({
      setExcerciseLogoChoose: event.target.value
    });
  };

  handleValueCreateNewExcercise = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (
      this.state.ExcerciseNumberQuestion >= 10 &&
      !this.state.checkTooMoreQuestion
    ) {
      this.openTooMoreModal();
      this.setState({
        checkTooMoreQuestion: true
      });
    }
  };

  sentToCreateNewReminder = () => {
    axios
      .post("/createnewexcercisecontent", {
        MemberID: this.props.MemberID,
        ExcerciseName: this.state.ExcerciseName,
        ExcerciseDescription: this.state.ExcerciseDescription,
        ExcerciseLogo: this.state.setExcerciseLogoChoose,
        ExcerciseCreateMemberID: this.props.MemberID,
        ExcerciseType: this.state.ExcerciseType,
        ExcerciseNumberQuestion: this.state.ExcerciseNumberQuestion
      })
      .then(res => {
        this.setState({
          checkValidate: res.data.checkValidate
        });
        if (res.data.checkValidate === "success-create-excercise") {
          this.setState({
            ExcerciseID: res.data.ExcerciseID
          });
          this.openConfirmCreateModal();
        } else if (res.data.checkValidate === "excercisename") {
          this.openValidateExcerciseNameModal();
        } else {
          this.openHavedExcerciseNameModal();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleCreateNewExcercise = event => {
    this.sentToCreateNewReminder();

    event.preventDefault();
  };

  changeToCreateNewQAContent = () => {
    this.props.setExcerciseContentToCreateQAContent(
      this.state.ExcerciseName,
      this.state.ExcerciseNumberQuestion,
      this.state.ExcerciseType,
      this.state.setExcerciseLogoChoose,
      this.state.ExcerciseID
    );
    setTimeout(() => {
      this.props.updateRenderExcerciseCreateNewControl("createnewQAcontent");
    }, 1000);
  };

  createNewExcerciseForm = () => {
    return (
      <div className="user-excercises_create-new__main">
        <div
          className="user-excercises_create-new__main___backtoexcerciseall"
          onClick={() =>
            this.props.updateRenderExcerciseControl("excerciseall")
          }
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay l???i</span>
          </div>
        </div>
        <form onSubmit={event => this.handleCreateNewExcercise(event)}>
          <div className="user-excercises_create-new__main___excercise">
            <div className="user-excercises_create-new__main___excercise____form">
              <div>
                <p>T??n B??? ????? - B??i t???p</p>
                <input
                  type="text"
                  name="ExcerciseName"
                  maxLength="120"
                  onChange={event => this.handleValueCreateNewExcercise(event)}
                  placeholder="Nh???p t??n nh??m..."
                />
                <p>M?? t??? n???i dung</p>
                <input
                  type="text"
                  name="ExcerciseDescription"
                  maxLength="120"
                  onChange={event => this.handleValueCreateNewExcercise(event)}
                  placeholder="Nh???p m?? t???..."
                />
                <p>
                  S??? l?????ng c??u h???i: &nbsp;
                  <span>{this.state.ExcerciseNumberQuestion}</span>
                </p>
                <input
                  type="range"
                  min="1"
                  max="20"
                  name="ExcerciseNumberQuestion"
                  onChange={event => this.handleValueCreateNewExcercise(event)}
                  value={this.state.ExcerciseNumberQuestion}
                />
                <p>Ch???n ch??? ????? hi???n th??? B??? ?????</p>
                <div className="user-excercises_create__excercise___form____radio-button">
                  <div>
                    <input
                      type="radio"
                      name="ExcerciseType"
                      value="public"
                      defaultChecked
                      onChange={event =>
                        this.handleValueCreateNewExcercise(event)
                      }
                    />
                  </div>
                  <span>C??ng khai</span>

                  <div>
                    <input
                      type="radio"
                      name="ExcerciseType"
                      value="private"
                      onChange={event =>
                        this.handleValueCreateNewExcercise(event)
                      }
                    />
                  </div>
                  <span>Ri??ng t??</span>
                </div>

                <p>Ch???n logo cho B??? ????? - B??i t???p </p>
                <select
                  value={this.state.setExcerciseLogoChoose}
                  onChange={event => this.handleChooseExcerciseLogo(event)}
                >
                  <option value={de111}>???nh 1</option>
                  <option value={de222}>???nh 2</option>
                  <option value={de333}>???nh 3</option>
                  <option value={de444}>???nh 4</option>
                  <option value={de555}>???nh 5</option>
                  <option value={de666}>???nh 6</option>
                  <option value={de777}>???nh 7</option>
                  <option value={de888}>???nh 8</option>
                  <option value={de999}>???nh 9</option>
                  <option value={de110}>???nh 10</option>
                  <option value={de120}>???nh 11</option>
                  <option value={de130}>???nh 12</option>
                  <option value={de140}>???nh 13</option>
                  <option value={de150}>???nh 14</option>
                  <option value={de160}>???nh 15</option>
                  <option value={de170}>???nh 16</option>
                  <option value={de180}>???nh 17</option>
                  <option value={de190}>???nh 18</option>
                  <option value={de211}>???nh 19</option>
                  <option value={de212}>???nh 20</option>
                  <option value={de213}>???nh 21</option>
                  <option value={de214}>???nh 22</option>
                  <option value={de215}>???nh 23</option>
                  <option value={de216}>???nh 24</option>
                  <option value={de217}>???nh 25</option>
                </select>
              </div>

              <div className="user-excercises_create__excercise___form____create-button">
                <input type="submit" value="X??c nh???n t???o" />
              </div>
            </div>

            <div className="user-excercises_create__excercise___excercise-logo">
              <div>
                <img
                  alt="excercise-excercise-logo"
                  src={this.state.setExcerciseLogoChoose}
                />
              </div>
              <div>
                <p>???nh logo c???a B??? ????? - B??i t???p</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.createNewExcerciseForm()}
        {this.allModalWillRender()}
      </div>
    );
  }

  allModalWillRender = () => {
    return (
      <div>
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.modalTooMoreIsOpen}
          onRequestClose={this.closeTooMoreModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>C???NH B??O</p>
            <p style={{ fontWeight: "bold" }}>
              S??? c??u h???i c???a B??i t???p l???a ch???n qu?? nhi???u c?? th??? khi???n b???n m???t
              nhi???u th???i gian cho qu?? tr??nh t???o. B???n n??n c??n nh???c khi l???a ch???n.
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeTooMoreModal()}
          >
            ???? r?? !!!
          </button>
        </Modal>
        {/*================================================================================================== */}
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.modalConfirmCreateIsOpen}
          onRequestClose={this.closeConfirmCreateModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>TH??NG B??O</p>
            <p style={{ fontWeight: "bold" }}>
              Sau khi X??c nh???n b???n s??? ?????n v???i qu?? tr??nh t???o n???i dung cho c??c C??u
              h???i v?? C??c ????p ??n c???a B??? ????? - B??i t???p n??y. ???n ?????ng ?? ????? ti???p t???c
              qu?? tr??nh !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeConfirmCreateModal()}
          >
            H???y b???
          </button>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.changeToCreateNewQAContent()}
          >
            ?????ng ??
          </button>
        </Modal>
        {/*================================================================================================== */}
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.modalNonExcerciseNameIsOpen}
          onRequestClose={this.closeValidateExcerciseNameModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NH???C NH???</p>
            <p style={{ fontWeight: "bold" }}>
              B???n ch??a nh???p t??n c???a B??? ????? - B??i t???p n??y. ???? l?? th??ng tin b???t
              bu???c !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeValidateExcerciseNameModal()}
          >
            ???? hi???u!!!
          </button>
        </Modal>
        {/*================================================================================================== */}
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.modalHavedExcerciseNameIsOpen}
          onRequestClose={this.closeHavedExcerciseNameModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>TH??NG B??O</p>
            <p style={{ fontWeight: "bold" }}>
              T??n c???a B??? ????? - B??i t???p n??y ???? t???n t???i. Vui l??ng ch???n m???t t??n kh??c
              cho b??? ?????
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeHavedExcerciseNameModal()}
          >
            ???? hi???u!!!
          </button>
        </Modal>
      </div>
    );
  };
}
