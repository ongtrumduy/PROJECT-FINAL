import React from "react";

import Modal from "react-modal";

import de110 from "../../../../Main/Image-Icons/de110.PNG";
export default class ExcercisesOwnedDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkOwnedExcerciseItem: true,
      checkConfirmDoExcercisesChoiceIsOpen: false
    };
  }

  openConfirmDoExcercisesChoiceModal = () => {
    this.setState({
      checkConfirmDoExcercisesChoiceIsOpen: true
    });
  };

  closeConfirmDoExcercisesChoiceModal = () => {
    this.setState({
      checkConfirmDoExcercisesChoiceIsOpen: false
    });
  };

  changeCheckOwnedExcerciseItem = () => {
    if (this.state.checkOwnedExcerciseItem) {
      this.setState({
        checkOwnedExcerciseItem: false
      });
    } else {
      this.setState({
        checkOwnedExcerciseItem: true
      });
    }
  };

  renderExcerciseOWnedDetailItemContent = () => {
    return (
      <div>
        <div
          className="user-excercises_all-list__owned-list___owned-item_____backtoownedlist"
          onClick={() =>
            this.props.updateRenderExcerciseOwnedControl("ownedlist")
          }
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay lại</span>
          </div>
        </div>
        <div className="user-excercises_all-list__owned-list___owned-item_____excercise-logo-and-content">
          <div className="user-excercises_all-list__owned-list___owned-item_____excercise-logo">
            <img src={de110} />
            <p>Mô tả: fkasjfakakakakakakakak</p>
          </div>
          <div className="user-excercises_all-list__owned-list___owned-item_____excercise-content">
            <div>
              <p>Tên Bộ đề - Bài tập &nbsp;&nbsp; : Kiến quốc vĩ nghiệp</p>
              <p>Số lượng câu hỏi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 20</p>
              <p>Loại Bộ đề - Bài tập &nbsp; : Công khai</p>
            </div>
            <div>
              <button
                style={
                  this.state.checkOwnedExcerciseItem
                    ? { backgroundColor: "chocolate" }
                    : { backgroundColor: "white" }
                }
                onClick={() => this.changeCheckOwnedExcerciseItem()}
              >
                {(this.state.checkOwnedExcerciseItem && (
                  <div className="user-excercises_all-list__owned-list___owned-item____button-choose">
                    <div>
                      <i className="material-icons">{"done"}</i>
                    </div>
                    <div>
                      <span> Đã sở hữu</span>
                    </div>
                  </div>
                )) || (
                  <div className="user-excercises_all-list__owned-list___owned-item____button-choose">
                    <div>
                      <i className="material-icons">{"add"}</i>
                    </div>
                    <div>
                      <span> Thêm Bộ đề - Bài tập</span>
                    </div>
                  </div>
                )}
              </button>
              <button
                style={
                  this.state.checkOwnedExcerciseItem
                    ? {
                        backgroundColor: "white",
                        margin: "0 0 0 60px"
                      }
                    : { display: "none" }
                }
                onClick={() => this.openConfirmDoExcercisesChoiceModal()}
              >
                <div className="user-excercises_all-list__owned-list___owned-item____button-choose">
                  <div>
                    <i className="material-icons">{"border_color"}</i>
                  </div>
                  <div>
                    <span>&nbsp;Làm Bài tập - Bộ đề</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="user-excercises_all-list__owned-list___owned-item">
        {this.renderExcerciseOWnedDetailItemContent()}
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
          isOpen={this.state.checkConfirmDoExcercisesChoiceIsOpen}
          onRequestClose={this.closeConfirmDoExcercisesChoiceModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>THÔNG BÁO</p>
            <p style={{ fontWeight: "bold" }}>
              tên của Bộ đề - Bài tập này đã tồn tại. Vui lòng chọn một tên khác
              cho bộ đề
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeConfirmDoExcercisesChoiceModal()}
          >
            Đã hiểu!!!
          </button>
        </Modal>
      </div>
    );
  }
}
