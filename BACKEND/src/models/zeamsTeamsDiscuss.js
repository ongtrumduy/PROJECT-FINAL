import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsTeamsDiscuss {
  constructor() {
    let teamsdiscuss = fs.readFileSync(
      "../BackEnd/src/databases/zeamsTeamsDiscuss.json"
    );
    if (teamsdiscuss) {
      this.ZeamsTeamsDiscuss = JSON.parse(teamsdiscuss);
    } else {
      this.ZeamsTeamsDiscuss = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BackEnd/src/databases/zeamsTeamsDiscuss.json",
      JSON.stringify(this.ZeamsTeamsDiscuss),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewTeamDiscussContent(discuss) {
    let newdiscuss = {
      TeamID: discuss.TeamID,
      TeamDiscussContent: []
    };

    this.ZeamsTeamsDiscuss.push(newdiscuss);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberDiscuss(discuss) {
    console.log("Vào trong cái discuss" + discuss.TeamID);
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    if (Object.keys(discuss.MemberDiscuss).length !== 0) {
      let memberdiscuss = {
        TeamDiscussID: uuidv4(),
        TeamDiscussType: "discuss",
        MemberDiscussID: discuss.MemberID,
        MemberDiscussContent: discuss.MemberDiscuss,
        MemberDiscussTime: moment().format("HH:mm DD-MM-YYYY"),
        TeamCommentContent: []
      };

      this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent.push(memberdiscuss);
      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberComment(discuss) {
    console.log("Vào trong cái discuss comment" + discuss.TeamID);
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    let memberdiscussindex = this.ZeamsTeamsDiscuss[
      teamindex
    ].TeamDiscussContent.findIndex(memberdiscussitem => {
      return memberdiscussitem.TeamDiscussID === discuss.TeamDiscussID;
    });
    if (Object.keys(discuss.MemberComment).length !== 0) {
      let membercomment = {
        TeamCommentID: uuidv4(),
        MemberCommentID: discuss.MemberID,
        MemberCommentContent: discuss.MemberComment,
        MemberCommentTime: moment().format("HH:mm DD-MM-YYYY")
      };

      this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent[
        memberdiscussindex
      ].TeamCommentContent.push(membercomment);
      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberJoinedNotify(discuss) {
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    let membernotify = {
      TeamDiscussID: uuidv4(),
      TeamDiscussType: "newmember",
      MemberDiscussID: discuss.MemberID,
      MemberDiscussContent: discuss.MemberID + " đã tham gia vào nhóm <3<3<3"
    };

    this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent.push(membernotify);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewCallVideoNotify(discuss) {}

  //-----------------------------------------------------------------------------------------------------------------

  responseTeamDiscussContent(discuss) {
    let resteamsdiscusscontent;
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    if (teamindex < 0) {
      this.createNewTeamDiscussContent(discuss);
      resteamsdiscusscontent = {
        TeamID: discuss.TeamID,
        TeamDiscussContent: [
          {
            TeamDiscussType: "non-activitied",
            MemberDiscussContent:
              "Nhóm hiện tại chưa có hoạt động thảo luận !!!"
          }
        ]
      };
    } else {
      let teamdiscusscontent = this.ZeamsTeamsDiscuss[teamindex]
        .TeamDiscussContent.length;
      if (teamdiscusscontent <= 0) {
        resteamsdiscusscontent = {
          TeamID: discuss.TeamID,
          TeamDiscussContent: [
            {
              TeamDiscussType: "non-activitied",
              MemberDiscussContent:
                "Nhóm hiện tại chưa có hoạt động thảo luận !!!"
            }
          ]
        };
      } else {
        resteamsdiscusscontent = this.ZeamsTeamsDiscuss[teamindex];
      }
    }
    return resteamsdiscusscontent;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseTeamDiscussCommentContent(discuss) {
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    let memberdiscussindex = this.ZeamsTeamsDiscuss[
      teamindex
    ].TeamDiscussContent.findIndex(memberdiscussitem => {
      return memberdiscussitem.TeamDiscussID === discuss.TeamDiscussID;
    });

    let resteamsdiscusscontent = this.ZeamsTeamsDiscuss[teamindex]
      .TeamDiscussContent[memberdiscussindex];

    return resteamsdiscusscontent;
  }
  //-----------------------------------------------------------------------------------------------------------------
}

let zeamsTeamsDiscuss = new ZeamsTeamsDiscuss();

module.exports = zeamsTeamsDiscuss;
