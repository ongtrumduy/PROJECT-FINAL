import React from "react";
import Modal from "react-modal";

import axios from "axios";

import de111 from "../../../../Main/Image-Icons/de111.PNG";

export default class ExcercisesOwnedListContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllExcerciseOwnedList: [],
      NumberExcerciseOnPage: "3",
      NumberIndexExcerciseOnPage: "5",
      CurrentIndexExcercisePage: "1",
      CurrentIndexOfIndexExcercisePage: "1",
      AllNumberOfExcerciseOnPageList: [],
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
      .post("./getexcerciseownedlist", {
        MemberID: this.props.MemberID,
        CurrentIndexExcercisePage: this.state.CurrentIndexExcercisePage,
        NumberExcerciseOnPage: this.state.NumberExcerciseOnPage,
        NumberIndexExcerciseOnPage: this.state.NumberIndexExcerciseOnPage
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => console.log(error));

    const allNumberOfExcerciseOnPageList = [];
    const ExcerciseListLength = this.state.AllExcerciseOwnedList.length;

    const allNumberOfExcercise = Math.ceil(
      ExcerciseListLength / Number(this.state.NumberExcerciseOnPage)
    );

    for (let i = 1; i <= allNumberOfExcercise; i++) {
      allNumberOfExcerciseOnPageList.push(i + "");
    }
    this.setState({
      AllNumberOfExcerciseOnPageList: allNumberOfExcerciseOnPageList
    });
  };

  chooseIndexExcercisePage = event => {
    this.setState({
      CurrentIndexExcercisePage: event.target.id
    });
  };

  choiceExcerciseOwnedItemToDetail = excerciseID => {
    this.props.updateRenderExcerciseOwnedControl("owneditem");
    this.props.getExcerciseOwnedIDMemberChoice(excerciseID);
  };

  renderIndexOfExcerciseItemList = () => {
    const currentIndexOfIndexExcercisePage = Number(
      this.state.CurrentIndexOfIndexExcercisePage
    );
    const numberIndexExcerciseOnPage = Number(
      this.state.NumberIndexExcerciseOnPage
    );

    const indexOfLastIndexExcerciseList =
      currentIndexOfIndexExcercisePage * numberIndexExcerciseOnPage;

    const indexOfFirstIndexExcerciseList =
      indexOfLastIndexExcerciseList - numberIndexExcerciseOnPage;

    const currentIndexOfChoiceIndexExcerciseList = this.state.AllNumberOfExcerciseOnPageList.slice(
      indexOfFirstIndexExcerciseList,
      indexOfLastIndexExcerciseList
    );

    const allNumberOfIndexOfExcercise = Math.ceil(
      this.state.AllNumberOfExcerciseOnPageList.length /
        numberIndexExcerciseOnPage
    );

    if (
      (this.state.AllNumberOfExcerciseOnPageList.length %
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
    const currentIndexExcercisePage = Number(
      this.state.CurrentIndexExcercisePage
    );
    const numberExcerciseOnPage = Number(this.state.NumberExcerciseOnPage);

    const indexOfLastExcerciseList =
      currentIndexExcercisePage * numberExcerciseOnPage;

    const indexOfFirstExcerciseList =
      indexOfLastExcerciseList - numberExcerciseOnPage;

    const currentChoiceIndexExcerciseList = this.state.AllExcerciseOwnedList.slice(
      indexOfFirstExcerciseList,
      indexOfLastExcerciseList
    );

    return (
      <div className="user-excercises_all__public-list___choice-index-content">
        {currentChoiceIndexExcerciseList.map(excerciseitem =>
          excerciseitem.ExcerciseInfor.map(
            (excercisenameitem, excerciseindex) => (
              <div
                key={excerciseindex}
                onClick={() =>
                  this.choiceExcerciseOwnedItemToDetail(
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
                  src={de111}
                />
                <p style={{ fontWeight: "bold" }}>
                  {excercisenameitem.ExcerciseName}
                </p>
              </div>
            )
          )
        )}
      </div>
    );
  };

  prevToIndexExcerciseOnLeft = () => {
    const numberIndexExcerciseOnPage = Number(
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
    const numberIndexExcerciseOnPage = Number(
      this.state.NumberIndexExcerciseOnPage
    );

    const allNumberOfIndexOfExcercise = Math.ceil(
      this.state.AllNumberOfExcerciseOnPageList.length /
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

  render() {
    return (
      <div className="user-excercises_all__public-list">
        <div className="user-excercises_all__public-list___title">
          <p>Bộ đề - Bài tập Công khai</p>
        </div>
        {this.renderChooseIndexExcercisePublicList()}
        {this.selectIndexForRenderExcerciseItem()}

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
            <p style={{ fontWeight: "bold", color: "red" }}>NHẮC NHỞ</p>
            <p style={{ fontWeight: "bold" }}>
              Không thể vượt quá số lượng Bộ đề - Bài tập công khai!!!!
            </p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closecheckOverIndexExcerciseModal()}
          >
            Đã hiểu!!!
          </button>
        </Modal>
      </div>
    );
  }
}
