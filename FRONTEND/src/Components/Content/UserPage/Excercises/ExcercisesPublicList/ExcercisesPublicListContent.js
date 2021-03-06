import React from "react";
import Modal from "react-modal";

import axios from "axios";

export default class ExcercisesPublicListContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentExcerciseChoicePublicList: [],
      NumberExcerciseOnPage: "3",
      NumberIndexExcerciseOnPage: "5",
      CurrentIndexExcercisePage: "1",
      CurrentIndexOfIndexExcercisePage: "1",
      AllNumberExcercise: "",
      AllNumberOfIndexExcerciseOnPageList: [],
      checkValidatePrevLeft: true,
      checkValidateNextRight: false,
      overIndexExcerciseIsOpen: false
    };
  }

  opencheckOverIndexExcerciseModal = () => {
    this.setState({
      overIndexExcerciseIsOpen: true
    });
  };

  closecheckOverIndexExcerciseModal = () => {
    this.setState({
      overIndexExcerciseIsOpen: false
    });
  };

  componentDidMount = () => {
    axios
      .post("./getexcercisepubliclist", {
        MemberID: this.props.MemberID,
        CurrentIndexExcercisePage: this.state.CurrentIndexExcercisePage,
        NumberExcerciseOnPage: this.state.NumberExcerciseOnPage,
        NumberIndexExcerciseOnPage: this.state.NumberIndexExcerciseOnPage
      })
      .then(res => {
        let allNumberOfIndexExcerciseOnPageList = [];
        let excerciselistlength = res.data.AllNumberExcercise;

        let allNumberOfExcercise = Math.ceil(
          excerciselistlength / Number(this.state.NumberExcerciseOnPage)
        );

        for (let i = 1; i <= allNumberOfExcercise; i++) {
          allNumberOfIndexExcerciseOnPageList.push(i + "");
        }
        this.setState({
          AllNumberOfIndexExcerciseOnPageList: allNumberOfIndexExcerciseOnPageList,
          AllNumberExcercise: res.data.AllNumberExcercise,
          CurrentExcerciseChoicePublicList:
            res.data.CurrentExcerciseChoicePublicList
        });
      })
      .catch(error => console.log(error));

    this.mounted = true;

    this.props.socket.on("send-to-update-excercise-public-list", data => {
      if (data.MemberID === this.props.MemberID) {
        this.props.socket.emit("receive-to-update-excercise-public-list", {
          MemberID: this.props.MemberID,
          CurrentIndexExcercisePage: this.state.CurrentIndexExcercisePage,
          NumberExcerciseOnPage: this.state.NumberExcerciseOnPage,
          NumberIndexExcerciseOnPage: this.state.NumberIndexExcerciseOnPage
        });
      }
    });

    this.props.socket.on("update-excercise-public-list", data => {
      if (this.mounted) {
        if (data.MemberID === this.props.MemberID) {
          let allNumberOfIndexExcerciseOnPageList = [];
          let excerciselistlength = data.AllNumberExcercise;

          let allNumberOfExcercise = Math.ceil(
            excerciselistlength / Number(this.state.NumberExcerciseOnPage)
          );

          for (let i = 1; i <= allNumberOfExcercise; i++) {
            allNumberOfIndexExcerciseOnPageList.push(i + "");
          }
          this.setState({
            AllNumberOfIndexExcerciseOnPageList: allNumberOfIndexExcerciseOnPageList,
            AllNumberExcercise: data.AllNumberExcercise,
            CurrentExcerciseChoicePublicList:
              data.CurrentExcerciseChoicePublicList
          });
        }
      }
    });
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  chooseIndexExcercisePage = event => {
    // console.log(" Ra c??i n??y coi ", event.target.id);
    let currentIndexExcercisePage = event.target.id;

    axios
      .post("./getexcercisepubliclist", {
        MemberID: this.props.MemberID,
        CurrentIndexExcercisePage: currentIndexExcercisePage,
        NumberExcerciseOnPage: this.state.NumberExcerciseOnPage,
        NumberIndexExcerciseOnPage: this.state.NumberIndexExcerciseOnPage
      })
      .then(res => {
        this.setState({
          CurrentIndexExcercisePage: currentIndexExcercisePage,
          CurrentExcerciseChoicePublicList:
            res.data.CurrentExcerciseChoicePublicList
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  choiceExcercisePublicItemToDetail = excerciseID => {
    this.props.getExcercisePublicIDMemberChoice(excerciseID);

    setTimeout(() => {
      this.props.updateRenderExcercisePublicControl("publicitem");
    }, 200);
  };

  renderIndexOfExcerciseItemList = () => {
    let currentIndexOfIndexExcercisePage = Number(
      this.state.CurrentIndexOfIndexExcercisePage
    );
    let numberIndexExcerciseOnPage = Number(
      this.state.NumberIndexExcerciseOnPage
    );

    let indexOfLastIndexExcerciseList =
      currentIndexOfIndexExcercisePage * numberIndexExcerciseOnPage;

    let indexOfFirstIndexExcerciseList =
      indexOfLastIndexExcerciseList - numberIndexExcerciseOnPage;

    let currentIndexOfChoiceIndexExcerciseList = this.state.AllNumberOfIndexExcerciseOnPageList.slice(
      indexOfFirstIndexExcerciseList,
      indexOfLastIndexExcerciseList
    );

    let allNumberOfIndexOfExcercise = Math.ceil(
      this.state.AllNumberOfIndexExcerciseOnPageList.length /
        numberIndexExcerciseOnPage
    );

    if (
      (this.state.AllNumberOfIndexExcerciseOnPageList.length %
        numberIndexExcerciseOnPage ===
        0 &&
        currentIndexOfIndexExcercisePage === allNumberOfIndexOfExcercise) ||
      currentIndexOfChoiceIndexExcerciseList.length < 5
    ) {
      return (
        <div className="user-excercises_all__public-list___control____index-item">
          {currentIndexOfChoiceIndexExcerciseList.map(numberindexitem => (
            <div
              style={
                this.state.CurrentIndexExcercisePage === numberindexitem
                  ? { color: "blue", border: "groove" }
                  : { color: "black" }
              }
              key={numberindexitem}
              id={numberindexitem}
              onClick={event => this.chooseIndexExcercisePage(event)}
            >
              {numberindexitem}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="user-excercises_all__public-list___control____index-item">
          {currentIndexOfChoiceIndexExcerciseList.map(numberindexitem => (
            <div
              style={
                this.state.CurrentIndexExcercisePage === numberindexitem
                  ? { color: "blue", border: "groove" }
                  : { color: "black" }
              }
              key={numberindexitem}
              id={numberindexitem}
              onClick={event => this.chooseIndexExcercisePage(event)}
            >
              {numberindexitem}
            </div>
          ))}
          <span>...</span>
        </div>
      );
    }
  };

  selectIndexForRenderExcerciseItem = () => {
    return (
      <div className="user-excercises_all__public-list___control">
        <div>
          <i
            style={
              this.state.checkValidatePrevLeft
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.prevToIndexExcerciseOnLeft()}
            className="material-icons"
          >
            &#xe5c4;
          </i>
        </div>
        {this.renderIndexOfExcerciseItemList()}
        <div>
          <i
            style={
              this.state.checkValidateNextRight
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.nextToIndexExcerciseOnRight()}
            className="material-icons"
          >
            &#xe5c8;
          </i>
        </div>
      </div>
    );
  };

  renderChooseIndexExcercisePublicList = () => {
    return (
      <div className="user-excercises_all__public-list___choice-index-content">
        {this.state.CurrentExcerciseChoicePublicList.map(
          (excerciseitem, excerciseindex) => (
            <div
              key={excerciseindex}
              onClick={() =>
                this.choiceExcercisePublicItemToDetail(
                  excerciseitem.ExcerciseID
                )
              }
            >
              <img
                style={{
                  height: "120px",
                  width: "120px",
                  margin: "32px 0 0 0"
                }}
                alt="team-logo"
                src={excerciseitem.ExcerciseLogo}
              />
              <p style={{ fontWeight: "bold" }}>
                {excerciseitem.ExcerciseName}
              </p>
            </div>
          )
        )}
      </div>
    );
  };

  prevToIndexExcerciseOnLeft = () => {
    let numberIndexExcerciseOnPage = Number(
      this.state.NumberIndexExcerciseOnPage
    );

    if (!this.state.checkValidatePrevLeft) {
      if (Number(this.state.CurrentIndexOfIndexExcercisePage) + "" === "1") {
        this.setState({
          checkValidatePrevLeft: true
        });
      } else {
        this.setState({
          CurrentIndexOfIndexExcercisePage:
            Number(this.state.CurrentIndexOfIndexExcercisePage) - 1 + "",
          checkValidateNextRight: false,
          CurrentIndexExcercisePage:
            (Number(this.state.CurrentIndexOfIndexExcercisePage) - 2) *
              numberIndexExcerciseOnPage +
            1 +
            ""
        });
      }
    } else {
      this.opencheckOverIndexExcerciseModal();
    }
  };

  nextToIndexExcerciseOnRight = () => {
    let numberIndexExcerciseOnPage = Number(
      this.state.NumberIndexExcerciseOnPage
    );

    let allNumberOfIndexOfExcercise = Math.ceil(
      this.state.AllNumberOfIndexExcerciseOnPageList.length /
        numberIndexExcerciseOnPage
    );

    if (!this.state.checkValidateNextRight) {
      if (
        Number(this.state.CurrentIndexOfIndexExcercisePage) ===
        allNumberOfIndexOfExcercise
      ) {
        this.setState({
          checkValidateNextRight: true
        });
      } else {
        this.setState({
          checkValidatePrevLeft: false,
          CurrentIndexOfIndexExcercisePage:
            Number(this.state.CurrentIndexOfIndexExcercisePage) + 1 + "",
          CurrentIndexExcercisePage:
            Number(this.state.CurrentIndexOfIndexExcercisePage) *
              numberIndexExcerciseOnPage +
            1 +
            ""
        });
      }
    } else {
      this.opencheckOverIndexExcerciseModal();
    }
  };

  renderExcercisePublicListContent = () => {
    if (this.state.AllNumberExcercise === 0) {
      return (
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          <p>Ch??a c?? B??? ????? - B??i t???p n??o trong danh s??ch</p>
        </div>
      );
    } else {
      return (
        <div className="user-excercises_all__public-list___content">
          {this.renderChooseIndexExcercisePublicList()}
          {this.selectIndexForRenderExcerciseItem()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="user-excercises_all__public-list">
        <div className="user-excercises_all__public-list___title">
          <p>B??? ????? - B??i t???p C??ng khai</p>
        </div>
        {this.renderExcercisePublicListContent()}
        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.overIndexExcerciseIsOpen}
          onRequestClose={this.closecheckOverIndexExcerciseModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NH???C NH???</p>
            <p style={{ fontWeight: "bold" }}>
              Kh??ng th??? v?????t qu?? s??? l?????ng B??? ????? - B??i t???p c??ng khai!!!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closecheckOverIndexExcerciseModal()}
          >
            ???? hi???u!!!
          </button>
        </Modal>
      </div>
    );
  }
}
