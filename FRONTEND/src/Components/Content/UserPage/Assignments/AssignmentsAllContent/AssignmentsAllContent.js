import React from "react";
import axios from "axios";
import Modal from "react-modal";

import AssignmentsAllUnfinishedList from "../AssignmentUnOrFinished/AssignmentsAllUnfinishedList";
import AssignmentsAllFinishedList from "../AssignmentUnOrFinished/AssignmentsAllFinishedList";

export default class AssignmentsAllContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkRenderUnfinished: false,
      checkRenderFinished: false,
      AssignmentChoiceID: "",
      checkTurnInAssignmentSuccessIsOpen: false,
      checkNonDidExcericseOfAssignmentIsOpen: false,
      checkHaveZeroScoreOfAssignmentIsOpen: false,
      checkHaveNonChoiceAssignmentToTurnInIsOpen: false
    };
  }

  openCheckTurnInAssignmentSuccessModal = () => {
    this.setState({
      checkTurnInAssignmentSuccessIsOpen: true
    });
  };

  closeCheckTurnInAssignmentSuccessModal = () => {
    this.setState({
      checkTurnInAssignmentSuccessIsOpen: false
    });
  };

  openCheckNonDidExcericseOfAssignmentModal = () => {
    this.setState({
      checkNonDidExcericseOfAssignmentIsOpen: true
    });
  };

  closeCheckNonDidExcericseOfAssignmentModal = () => {
    this.setState({
      checkNonDidExcericseOfAssignmentIsOpen: false
    });
  };

  openCheckHaveZeroScoreOfAssignmentModal = () => {
    this.setState({
      checkHaveZeroScoreOfAssignmentIsOpen: true
    });
  };

  closeCheckHaveZeroScoreOfAssignmentModal = () => {
    this.setState({
      checkHaveZeroScoreOfAssignmentIsOpen: false
    });
  };

  openCheckHaveNonChoiceAssignmentToTurnInModal = () => {
    this.setState({
      checkHaveNonChoiceAssignmentToTurnInIsOpen: true
    });
  };

  closeCheckHaveNonChoiceAssignmentToTurnInModal = () => {
    this.setState({
      checkHaveNonChoiceAssignmentToTurnInIsOpen: false
    });
  };

  setChangeRenderUnfinishedExcerciseContent = () => {
    if (this.state.checkRenderUnfinished) {
      this.setState({
        checkRenderUnfinished: false
      });
    } else {
      this.setState({
        checkRenderUnfinished: true
      });
    }
  };

  setChangeRenderFinishedExcerciseContent = () => {
    if (this.state.checkRenderFinished) {
      this.setState({
        checkRenderFinished: false
      });
    } else {
      this.setState({
        checkRenderFinished: true
      });
    }
  };

  setChooseAssignmentToTurnIn = assigmentChoiceID => {
    this.setState({
      AssignmentChoiceID: assigmentChoiceID
    });
  };

  sendToTurnInAssginment = () => {
    if (this.state.AssignmentChoiceID === "") {
      this.openCheckHaveNonChoiceAssignmentToTurnInModal();
    } else {
      axios
        .post("./sendtoturninassginmentofmember", {
          AssignmentID: this.state.AssignmentChoiceID,
          MemberID: this.props.MemberID
        })
        .then(res => {
          // console.log("v??? ????y ??i em ", res.data);
          if (res.data.checkResTurnIn === "turn-in-success") {
            this.props.socket.emit(
              "receive-to-update-assignment-unfinished-list",
              {
                MemberID: this.props.MemberID
              }
            );
            this.props.socket.emit(
              "receive-to-update-assignment-finished-list",
              {
                MemberID: this.props.MemberID
              }
            );
            this.openCheckTurnInAssignmentSuccessModal();
          } else if (res.data.checkResTurnIn === "non-did-excercise") {
            this.openCheckNonDidExcericseOfAssignmentModal();
          } else if (res.data.checkResTurnIn === "have-zero-score") {
            this.openCheckHaveZeroScoreOfAssignmentModal();
          }
        });
    }
  };

  sendToFinishAssignmentWithZeroScore = () => {
    axios
      .post("./sendtoturninassginmentofmemberwithzeroscore", {
        AssignmentID: this.state.AssignmentChoiceID,
        MemberID: this.props.MemberID
      })
      .then(res => {
        // console.log("v??? ????y ??i em ", res.data);
        if (res.data.checkResTurnIn === "turn-in-success") {
          this.props.socket.on("receive-to-update-assignment-unfinished-list", {
            MemberID: this.props.MemberID
          });
          this.props.socket.on("receive-to-update-assignment-finished-list", {
            MemberID: this.props.MemberID
          });
          this.closeCheckHaveZeroScoreOfAssignmentModal();
          this.openCheckTurnInAssignmentSuccessModal();
        }
      });
  };

  render() {
    return (
      <div className="user-assignments_all__list">
        <div className="user-assignments_all__list___title-and-turnin">
          <div className="user-assignments_all__list___title-and-turnin____title">
            <p>B??i t???p-B??? ????? ???????c giao</p>
          </div>
          <div className="user-assignments_all__list___title-and-turnin____turnin">
            <button onClick={() => this.sendToTurnInAssginment()}>
              N???p b??i
            </button>
          </div>
        </div>
        <div className="user-assignments_all__list___content">
          <div className="user-assignments_all__list___content_____unfinished">
            <div className="user-assignments_all__list___content____unfinished_____show-content-button">
              <div>
                <i className="material-icons">
                  {this.state.checkRenderUnfinished
                    ? "expand_more"
                    : "chevron_right"}
                </i>
              </div>
              <div
                onClick={() => this.setChangeRenderUnfinishedExcerciseContent()}
              >
                <p>Ch??a ho??n th??nh</p>
              </div>
            </div>

            {this.state.checkRenderUnfinished ? (
              <AssignmentsAllUnfinishedList
                MemberID={this.props.MemberID}
                socket={this.props.socket}
                updateRenderAssignmentsControl={
                  this.props.updateRenderAssignmentsControl
                }
                setChooseAssignmentAndExcerciseToDoExcericse={
                  this.props.setChooseAssignmentAndExcerciseToDoExcericse
                }
                setChooseAssignmentToTurnIn={this.setChooseAssignmentToTurnIn}
                AssignmentChoiceID={this.state.AssignmentChoiceID}
              />
            ) : (
              <div></div>
            )}
          </div>

          <div className="user-assignments_all__list___content_____finished">
            <div className="user-assignments_all__list___content____finished_____show-content-button">
              <div>
                <i className="material-icons">
                  {this.state.checkRenderFinished
                    ? "expand_more"
                    : "chevron_right"}
                </i>
              </div>
              <div
                onClick={() => this.setChangeRenderFinishedExcerciseContent()}
              >
                <p>???? ho??n th??nh</p>
              </div>
            </div>

            {this.state.checkRenderFinished ? (
              <AssignmentsAllFinishedList
                MemberID={this.props.MemberID}
                socket={this.props.socket}
                updateRenderAssignmentsControl={
                  this.props.updateRenderAssignmentsControl
                }
                setChooseAssignmentAndExcerciseToDoExcericse={
                  this.props.setChooseAssignmentAndExcerciseToDoExcericse
                }
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            overlay: { position: "fixed", zIndex: "1000" },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none",
              zIndex: "3"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkNonDidExcericseOfAssignmentIsOpen}
          onRequestClose={this.closeCheckNonDidExcericseOfAssignmentModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NH???C NH???</p>
            <p style={{ fontWeight: "bold" }}>
              B???n ch??a t???ng l??m B??i t???p-B??? ????? n??y !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckNonDidExcericseOfAssignmentModal()}
          >
            ???? r??
          </button>
        </Modal>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            overlay: { position: "fixed", zIndex: "1000" },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none",
              zIndex: "3"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkTurnInAssignmentSuccessIsOpen}
          onRequestClose={this.closeCheckTurnInAssignmentSuccessModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>TH??NG B??O</p>
            <p style={{ fontWeight: "bold" }}>B???n ???? n???p b??i th??nh c??ng !!!</p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckTurnInAssignmentSuccessModal()}
          >
            OKiii
          </button>
        </Modal>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            overlay: { position: "fixed", zIndex: "1000" },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none",
              zIndex: "3"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkHaveNonChoiceAssignmentToTurnInIsOpen}
          onRequestClose={this.closeCheckHaveNonChoiceAssignmentToTurnInModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NH???C NH???</p>
            <p style={{ fontWeight: "bold" }}>
              B???n ch??a ch???n B??i t???p n??o ????? n???p c??? !!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() =>
              this.closeCheckHaveNonChoiceAssignmentToTurnInModal()
            }
          >
            OKiii
          </button>
        </Modal>

        {/*============================================================================================================================= */}

        <Modal
          style={{
            overlay: { position: "fixed", zIndex: "1000" },
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none",
              zIndex: "3"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.checkHaveZeroScoreOfAssignmentIsOpen}
          onRequestClose={this.closeCheckHaveZeroScoreOfAssignmentModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NH???C NH???</p>
            <p style={{ fontWeight: "bold" }}>
              B???n ch??a l??m ????ng c??u n??o trong B??i t???p-B??? ????? n??y, b???n c?? mu???n l??m
              l???i kh??ng hay n???p lu??n????{" "}
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closeCheckHaveZeroScoreOfAssignmentModal()}
          >
            ????? l??m l???i
          </button>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.sendToFinishAssignmentWithZeroScore()}
          >
            V???n c??? n???p
          </button>
        </Modal>
      </div>
    );
  }
}
