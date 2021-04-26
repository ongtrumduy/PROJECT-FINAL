import fs from "fs";
import { v1 as uuidv1 } from "uuid";
import moment from "moment";

class ZeamsTeams {
  constructor() {
    let teams = fs.readFileSync("./src/databases/zeamsTeams.json");
    if (teams) {
      this.ZeamsTeams = JSON.parse(teams);
    } else {
      this.ZeamsTeams = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "./src/databases/zeamsTeams.json",
      JSON.stringify(this.ZeamsTeams),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewTeam(teaminfor) {
    let newteam = {
      TeamID: uuidv1(),
      TeamMemberAdminID: teaminfor.MemberID,
      TeamInfor: [],
      TeamMember: []
    };
    let newteaminfor = {
      TeamName: teaminfor.TeamName,
      TeamDescription: teaminfor.TeamDescription,
      TeamLogo: teaminfor.TeamLogo
    };
    newteam.TeamInfor.push(newteaminfor);

    let newteammember = {
      MemberID: teaminfor.MemberID
    };
    newteam.TeamMember.push(newteammember);

    this.ZeamsTeams.push(newteam);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewTeam(teaminfor) {
    let checkcreatenewteam = false;
    this.ZeamsTeams.forEach(teamitem => {
      teamitem.TeamInfor.forEach(teaminforitem => {
        if (teaminforitem.TeamName === teaminfor.TeamName) {
          checkcreatenewteam = true;
        }
      });
    });
    return checkcreatenewteam;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseCreateNewTeam(teaminfor) {
    let resCreateNewTeam;
    if (Object.keys(teaminfor.TeamName).length === 0) {
      resCreateNewTeam = {
        checkValidate: "teamname"
      };
    } else {
      let checkcreatenewteam = this.checkCreateNewTeam(teaminfor);
      if (checkcreatenewteam) {
        resCreateNewTeam = {
          checkValidate: "existed-team"
        };
      } else {
        this.createNewTeam(teaminfor);
        resCreateNewTeam = {
          checkValidate: "success-create-team"
        };
      }
    }
    return resCreateNewTeam;
  }
  //-----------------------------------------------------------------------------------------------------------------

  getAllTeamList(member) {
    let allTeamList = [];
    this.ZeamsTeams.forEach(teamitem => {
      teamitem.TeamMember.forEach(memberitem => {
        if (member.MemberID === memberitem.MemberID) {
          let TeamInfor = {
            TeamID: teamitem.TeamID,
            TeamMemberAdminID: teamitem.MemberID,
            TeamInfor: teamitem.TeamInfor
          };
          allTeamList.push(TeamInfor);
        }
      });
    });
    return allTeamList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllMemberIDsOfTeam(team) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === team.TeamID;
    });

    let resTeamMember = this.ZeamsTeams[teamindex].TeamMember;
    return resTeamMember;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getChoiceJoinedTeamInfor(team) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === team.TeamID;
    });
    let teaminfor = this.ZeamsTeams[teamindex];
    return teaminfor;
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewMemberToTeam(member) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === member.TeamCodeToJoin;
    });
    let newMemberID = {
      MemberID: member.MemberID
    };
    this.ZeamsTeams[teamindex].TeamMember.push(newMemberID);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseSearchTeamToJoinTeam(member) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === member.TeamCodeToJoin;
    });
    if (teamindex >= 0) {
      let memberteamindex = this.ZeamsTeams[teamindex].TeamMember.findIndex(
        memberteamitem => {
          return memberteamitem.MemberID === member.MemberID;
        }
      );
      if (memberteamindex >= 0) {
        return "joined-team";
      } else {
        this.addNewMemberToTeam(member);
        return "sucess-joined";
      }
    } else {
      return "non-existed-team";
    }
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsTeams = new ZeamsTeams();

module.exports = zeamsTeams;
