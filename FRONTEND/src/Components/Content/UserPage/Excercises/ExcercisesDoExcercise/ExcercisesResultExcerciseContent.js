import React from "react";
import axios from "axios";

export default class ExcercisesResultExcerciseContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ExcerciseMemberDidResult: "",
      ExcerciseMemberDidName: "",
      ExcerciseMemberDidType: "",
      ExcerciseMemberDidTime: "",
      ExcerciseMemberDidNumberQuestion: ""
    };
  }

  componentDidMount = () => {
    axios
      .post("./getexcerciseresult", {
        ExcerciseID: this.props.ExcerciseID,
        MemberID: this.props.MemberID,
        ExcerciseDidID: this.props.ExcerciseDidID
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          ExcerciseMemberDoResult: res.data.ExcerciseMemberDoResult
        });
      });
  };

  render() {
    return (
      <div className="user-excercises_do-excercise__result-excercise">
        <div></div>
        <div className="user-excercises_do-excercise__result-excercise___title">
          <p>Kết quả làm Bộ đề - Bài tập</p>
        </div>
        <div className="user-excercises_do-excercise__result-excercise___content">
          <p>Tên Bộ đề - Bài tập: {this.state.ExcerciseMemberDidName}</p>
          <p>
            Loại Bộ đề - Bài tập: &nbsp;
            {this.state.ExcerciseMemberDidType === "public"
              ? "Công khai"
              : "Riêng tư"}
          </p>
          <p>
            Số lượng câu hỏi của Bộ đề - Bài tập:
            {this.state.ExcerciseMemberDidNumberQuestion}
          </p>
          <p>
            Số câu trả lời đúng: {this.state.ExcerciseMemberDidResult}/
            {this.state.ExcerciseMemberDidNumberQuestion}
          </p>
          <p>Thời gian làm bài: {this.state.ExcerciseMemberDidTime} phút</p>
        </div>
      </div>
    );
  }
}
