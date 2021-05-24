import React from "react";
import axios from "axios";

export default class ExcercisesOwnedItemScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllExcerciseItemResultList: [
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        }
      ]
    };
  }

  componentDidMount = () => {
    axios
      .post("/getexcericseitemscoreboard", {
        ExcerciseID: this.props.ExcerciseID
      })
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };

  returnExcerciseItemDetailContent = () => {
    this.props.getExcerciseOwnedIDMemberChoice(this.props.ExcerciseID);
    this.props.updateRenderExcerciseOwnedControl("owneditem");
  };

  renderExcerciseItemScoreBoard = () => {
    return (
      <div>
        <div
          className="user-excercises_all-list__owned-list___owned-item_____backtoowneditem"
          onClick={() => this.returnExcerciseItemDetailContent()}
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay lại</span>
          </div>
        </div>
        <div className="user-excercises_all-list__owned-list___owned-item_____table-list">
          <table>
            <thead>
              <th>STT</th>
              <th>Họ Tên - ID</th>
              <th>Ngày làm bài</th>
              <th>Thời gian làm</th>
              <th>Điểm số</th>
              <th>Số lần làm</th>
            </thead>
            <tbody>
              {this.state.AllExcerciseItemResultList.map(
                (excerciseitem, excerciseindex) => (
                  <tr>
                    <td>{excerciseindex}</td>
                    <td>
                      {excerciseitem.MemberDidExcerciseName} -&nbsp;
                      {excerciseitem.MemberDidExcerciseID}
                    </td>
                    <td>{excerciseitem.DateDidExcercise}</td>
                    <td>{excerciseitem.TimeDidExcercise} phút</td>
                    <td>
                      {excerciseitem.ResultDidExcercise} /&nbsp;
                      {excerciseitem.NumberQuestionDidExcercise}
                    </td>
                    <td> {excerciseitem.NumberTimesDidExcercise}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderExcerciseItemScoreBoard()}</div>;
  }
}
