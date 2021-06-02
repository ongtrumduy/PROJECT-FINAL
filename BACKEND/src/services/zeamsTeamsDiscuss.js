import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import zeamsMembers from "./zeamsMembers";

class ZeamsTeamsDiscuss {
  constructor() {
    let teamsdiscuss = fs.readFileSync(
      "../BACKEND/src/databases/zeamsTeamsDiscuss.json"
    );
    if (teamsdiscuss.length > 0) {
      this.ZeamsTeamsDiscuss = JSON.parse(teamsdiscuss);
    } else {
      this.ZeamsTeamsDiscuss = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsTeamsDiscuss.json",
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
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    if (Object.keys(discuss.MemberDiscuss).length !== 0) {
      let memberdiscuss = {
        TeamDiscussID: uuidv4(),
        TeamDiscussType: "discuss",
        MemberDiscussID: discuss.MemberID,
        MemberDiscussFullName: zeamsMembers.getMemberFullName(discuss),
        MemberDiscussContent: discuss.MemberDiscuss,
        MemberDiscussTime: moment().format("HH:mm DD-MM-YYYY")
      };

      this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent.push(memberdiscuss);
      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberComment(discuss) {
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
        MemberCommentFullName: zeamsMembers.getMemberFullName(discuss),
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
      MemberDiscussContent:
        zeamsMembers.getMemberFullName(discuss) +
        "-" +
        discuss.MemberID +
        " đã tham gia vào nhóm <3<3<3"
    };

    this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent.push(membernotify);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createAdminMemberJoinedNotify(discuss) {
    this.createNewTeamDiscussContent(discuss);

    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });
    let membernotify = {
      TeamDiscussID: uuidv4(),
      TeamDiscussType: "adminmember",
      MemberDiscussID: discuss.MemberID,
      MemberDiscussContent:
        zeamsMembers.getMemberFullName(discuss) +
        "-" +
        discuss.MemberID +
        " đã tạo nhóm này <3<3<3"
    };

    this.ZeamsTeamsDiscuss[teamindex].TeamDiscussContent.push(membernotify);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewCallVideoNotify(discuss) {}

  //-----------------------------------------------------------------------------------------------------------------

  getTeamDiscussContentList(discuss) {
    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });

    let currentIndexToRenderDiscussContent = Number(
      discuss.CurrentIndexToRenderDiscussContent
    );

    let numberRenderDiscussContent = Number(discuss.NumberRenderDiscussContent);

    let currentTeamDiscussContent = [];

    let indexOfLastDiscuss = this.ZeamsTeamsDiscuss[teamindex]
      .TeamDiscussContent.length;

    let indexOfFirstDiscuss =
      indexOfLastDiscuss -
      currentIndexToRenderDiscussContent * numberRenderDiscussContent;

    if (indexOfFirstDiscuss < 0) {
      indexOfFirstDiscuss = 0;
    }

    if (teamindex >= 0) {
      currentTeamDiscussContent = this.ZeamsTeamsDiscuss[
        teamindex
      ].TeamDiscussContent.slice(indexOfFirstDiscuss, indexOfLastDiscuss);
    }

    return currentTeamDiscussContent;
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkNextRenderDiscussContent(discuss) {
    let checkNextRenderDiscussContent = false;

    let teamindex = this.ZeamsTeamsDiscuss.findIndex(teamitem => {
      return teamitem.TeamID === discuss.TeamID;
    });

    let currentIndexToRenderDiscussContent = Number(
      discuss.CurrentIndexToRenderDiscussContent
    );

    let numberRenderDiscussContent = Number(discuss.NumberRenderDiscussContent);
    if (teamindex >= 0) {
      let numberOfDiscussContentList = this.ZeamsTeamsDiscuss[teamindex]
        .TeamDiscussContent.length;

      let indexOfLastDiscuss =
        currentIndexToRenderDiscussContent * numberRenderDiscussContent;

      if (indexOfLastDiscuss < numberOfDiscussContentList) {
        checkNextRenderDiscussContent = true;
      } else {
        checkNextRenderDiscussContent = false;
      }
    } else {
      console.log("Bị lỗi rồi bạn ạ");
    }

    return checkNextRenderDiscussContent;
  }

  //-----------------------------------------------------------------------------------------------------------------
  responseTeamDiscussContent(discuss) {
    let resteamsdiscusscontent;

    let currentTeamDiscussContent = this.getTeamDiscussContentList(discuss);

    let checkNextRenderDiscussContent = this.checkNextRenderDiscussContent(
      discuss
    );

    resteamsdiscusscontent = {
      CurrentTeamDiscussContent: currentTeamDiscussContent,
      CheckNextRenderDiscussContent: checkNextRenderDiscussContent,
      TeamID: discuss.TeamID
    };

    // console.log("RA lên cái này để còn lấy ra nào", resteamsdiscusscontent);

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
