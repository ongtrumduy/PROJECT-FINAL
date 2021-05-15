import React from "react";
import axios from "axios";

import de111 from "../../../../Main/Image-Icons/de111.PNG";

export default class ExcercisesPublicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllExcercisePublicList: [
        {
          ExcerciseID: "05639310-994f-11eb-a756-a587cab160af",
          ExcerciseMemberAdminID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6",
          ExcerciseInfor: [
            {
              ExcerciseName: "Kiến tạo đế quốc",
              ExcerciseDescription: "Cách thức xây dựng một quốc gia",
              ExcerciseLogo: "/static/media/eee.738b7a7b.PNG"
            }
          ],
          ExcerciseMember: [
            { MemberID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6" }
          ]
        },
        {
          ExcerciseID: "4728a270-9979-11eb-9f65-9b578b443991",
          ExcerciseMemberAdminID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6",
          ExcerciseInfor: [
            {
              ExcerciseName: "kiến tạo quốc viện",
              ExcerciseDescription: "kiến tạo lục viện",
              ExcerciseLogo: "/static/media/kkk.16477550.PNG"
            }
          ],
          ExcerciseMember: [
            { MemberID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6" }
          ]
        },
        {
          ExcerciseID: "1c130670-997e-11eb-9f65-9b578b443991",
          ExcerciseMemberAdminID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6",
          ExcerciseInfor: [
            {
              ExcerciseName: "Kiến tạo chánh phủ",
              ExcerciseDescription: "Kiến tạo chánh phủ trung ương",
              ExcerciseLogo: "/static/media/lll.cba69ff3.PNG"
            }
          ],
          ExcerciseMember: [
            { MemberID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6" }
          ]
        },
        {
          ExcerciseID: "37173950-997e-11eb-9f65-9b578b443991",
          ExcerciseMemberAdminID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6",
          ExcerciseInfor: [
            {
              ExcerciseName: "Suy tôn đại hòang đế đại đế quốc",
              ExcerciseDescription: "suy tôn đại đế",
              ExcerciseLogo: "/static/media/aaa.a1db6d38.PNG"
            }
          ],
          ExcerciseMember: [
            { MemberID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6" },
            { MemberID: "569b6b18-e403-4f34-990a-ebc6f90f2171" }
          ]
        },
        {
          ExcerciseID: "84c6b250-9980-11eb-9f65-9b578b443991",
          ExcerciseMemberAdminID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6",
          ExcerciseInfor: [
            {
              ExcerciseName:
                "Xây dựng thái bình thịnh trị ấm no cho muôn dân đế quốc",
              ExcerciseDescription:
                "Xây dựng thái bình thịnh trị ấm no cho muôn dân đế quốc",
              ExcerciseLogo: "/static/media/ggg.8304c57a.PNG"
            }
          ],
          ExcerciseMember: [
            { MemberID: "6a6afc28-167d-4d7d-bb4d-6285b195aec6" },
            { MemberID: "569b6b18-e403-4f34-990a-ebc6f90f2171" },
            { MemberID: "f41fdbc0-0ca7-4777-8d05-9c0fee8900c3" }
          ]
        }
      ],
      NumberExcerciseOnPage: "4",
      AllNumberOfExcerciseOnPageList: []
    };
  }

  // componentDidMount = () => {
  //   axios
  //     .post("/getexcercisepublixclist", {
  //       MemberID: this.props.MemberID
  //     })
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({
  //         AllExcercisePublicList: res.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  chooseOneJoinedExcercise = ExcerciseID => {
    this.props.getExcerciseIDMemberChoice(ExcerciseID);
    this.props.updateRenderExcerciseControl("excercisecontent");
  };

  componentDidMount = () => {
    const allNumberOfExcerciseOnPageList = [];
    const ExcerciseListLength = this.state.AllExcercisePublicList.length;
    // console.log("ra số phần tử ", ExcerciseListLength);
    // console.log(
    //   "Ra thử xem nó là gì ",
    let allNumberOfExcercise = Math.ceil(
      ExcerciseListLength / Number(this.state.NumberExcerciseOnPage)
    );
    // );
    for (let i = 1; i <= allNumberOfExcercise; i++) {
      allNumberOfExcerciseOnPageList.push(i);
      console.log("Ra nhá");
    }
    console.log("RA allNumber", allNumberOfExcerciseOnPageList);
    this.setState({
      AllNumberOfExcerciseOnPageList: allNumberOfExcerciseOnPageList
    });
  };

  renderIndexOfExcerciseItemList = () => {
    this.state.AllNumberOfExcerciseOnPageList.map(numberindexitem => (
      <li key={numberindexitem} id={numberindexitem} className="active">
        {numberindexitem} akjksjgkakgjakjgksajD
      </li>
    ));
  };

  selectIndexForRenderExcerciseItem = () => {
    return (
      <div className="user-excercises_create-new__QandA___control">
        <div>
          <i
            style={
              this.state.checkValidatePrevLeft
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.prevToNthQuestionOnLeft()}
            className="material-icons"
          >
            &#xe5c4;
          </i>
        </div>
        <div>{this.renderIndexOfExcerciseItemList()}</div>
        <div>
          <i
            style={
              this.state.checkValidateNextRight
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.nextToNthQuestionOnRight()}
            className="material-icons"
          >
            &#xe5c8;
          </i>
        </div>
        <div>
          <input
            type="button"
            value="Hoàn tất"
            onClick={() => this.sendToCompleteExcercises()}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="user-excercises_all__public-list">
        <div className="user-excercises_all__public-list___title">
          <p>Bộ đề - Bài tập Công khai</p>
        </div>
        <div className="user-excercises_all__public-list___content">
          {/* {this.state.AllExcercisePublicList.map((excerciseitem, Excerciseindex) =>
          Excerciseitem.ExcerciseInfor.map(Excercisenameitem => (
            <ExcercisesItem
              key={Excerciseindex}
              ExcerciseID={excerciseitem.ExcerciseID}
              ExcerciseLogo={excerciseitem.ExcerciseLogo}
              ExcerciseName={excerciseitem.ExcerciseName}
              chooseOneJoinedExcercise={this.chooseOneJoinedExcercise}
            />
          ))
        )} */}
          {this.state.AllExcercisePublicList.map(excerciseitem =>
            excerciseitem.ExcerciseInfor.map(
              (excercisenameitem, excerciseindex) => (
                <div key={excerciseindex}>
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
        {this.selectIndexForRenderExcerciseItem()}
      </div>
    );
  }
}
