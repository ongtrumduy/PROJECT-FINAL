import React from "react";

export default class ExcercisesQAndAMainInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-excercises_create-new__QandA">
        <div
          className="user-excercises_create-new__QandA___backtoexcerciseall"
          onClick={() =>
            this.props.updateRenderExcerciseControl("excerciseall")
          }
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Hủy tạo </span>
          </div>
        </div>
        <div className="user-excercises_create-new__QandA___infor">
          <div>
            <img src={this.props.ExcerciseLogo} alt="excercise-logo" />
          </div>
          <div>
            <p>Tên Bộ đề - Bài tập: {this.props.ExcerciseName}</p>
          </div>
          <div>
            <p>Số lượng câu hỏi: {this.props.ExcerciseNumberQuestion}</p>
          </div>
          <div>
            <p>
              Loại Bộ đề - Bài tập: &nbsp;
              {this.props.ExcerciseType === "public" ? "Công khai" : "Riêng tư"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
