import fs from "fs";
import { v1 as uuidv1 } from "uuid";
import moment from "moment";

class ZeamsTeams {
  constructor() {
    let teams = fs.readFileSync("../BACKEND/src/databases/zeamsTeams.json");
    if (teams.length > 0) {
      this.ZeamsTeams = JSON.parse(teams);
    } else {
      this.ZeamsTeams = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsTeams.json",
      JSON.stringify(this.ZeamsTeams),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewTeam(teaminfor) {
    let TeamID = uuidv1();

    let newteam = {
      TeamID: TeamID,
      TeamAdminMemberList: [],
      TeamInfor: [],
      TeamMemberList: []
    };
    let newteaminfor = {
      TeamName: teaminfor.TeamName,
      TeamType: teaminfor.TeamType,
      TeamDescription: teaminfor.TeamDescription,
      TeamLogo: teaminfor.TeamLogo
    };
    newteam.TeamInfor.push(newteaminfor);

    let newadminmember = {
      MemberID: teaminfor.MemberID
    };
    newteam.TeamAdminMemberList.push(newadminmember);

    let newteammember = {
      MemberID: teaminfor.MemberID
    };
    newteam.TeamMemberList.push(newteammember);

    this.ZeamsTeams.push(newteam);
    this.saveDataJSON();

    return TeamID;
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
        let TeamID = this.createNewTeam(teaminfor);
        resCreateNewTeam = {
          checkValidate: "success-create-team",
          TeamID: TeamID
        };
      }
    }
    return resCreateNewTeam;
  }
  //-----------------------------------------------------------------------------------------------------------------

  getAllTeamList(member) {
    let allTeamList = [];
    this.ZeamsTeams.forEach(teamitem => {
      teamitem.TeamMemberList.forEach(memberitem => {
        if (member.MemberID === memberitem.MemberID) {
          let TeamInfor = {
            TeamID: teamitem.TeamID,
            TeamAdminMemberList: teamitem.TeamAdminMemberList,
            TeamInfor: teamitem.TeamInfor
          };
          allTeamList.push(TeamInfor);
        }
      });
    });
    return allTeamList;
  }

  responseAllTeamListOfMember(member) {
    let resAllTeamList = {
      AllTeamList: this.getAllTeamList(member)
    };

    return resAllTeamList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllMemberIDsOfTeam(team) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === team.TeamID;
    });

    let resTeamMemberList = [];

    if (teamindex >= 0) {
      resTeamMemberList = this.ZeamsTeams[teamindex].TeamMemberList;
    }
    return resTeamMemberList;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getChoiceJoinedTeamInfor(team) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === team.TeamID;
    });
    let teaminfor = [];
    if (teamindex >= 0) {
      teaminfor = this.ZeamsTeams[teamindex].TeamInfor;
    }
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
    if (teamindex >= 0) {
      this.ZeamsTeams[teamindex].TeamMemberList.push(newMemberID);
    }
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseSearchTeamToJoinTeam(member) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === member.TeamCodeToJoin;
    });

    let resSearchTeamToJoinTeam = {};

    if (teamindex >= 0) {
      let memberteamindex = this.ZeamsTeams[teamindex].TeamMemberList.findIndex(
        memberteamitem => {
          return memberteamitem.MemberID === member.MemberID;
        }
      );
      if (memberteamindex >= 0) {
        resSearchTeamToJoinTeam = {
          checkValidate: "joined-team"
        };
      } else {
        this.addNewMemberToTeam(member);
        resSearchTeamToJoinTeam = {
          checkValidate: "success-joined"
        };
      }
    } else {
      resSearchTeamToJoinTeam = {
        checkValidate: "non-existed-team"
      };
    }

    return resSearchTeamToJoinTeam;
  }

  //-----------------------------------------------------------------------------------------------------------------

  setCheckMemberIsAdmin(member) {
    let teamindex = this.ZeamsTeams.findIndex(teamitem => {
      return teamitem.TeamID === member.TeamID;
    });
    let adminmemberindex;
    if (teamindex >= 0) {
      adminmemberindex = this.ZeamsTeams[
        teamindex
      ].TeamAdminMemberList.findIndex(adminmemberitem => {
        return adminmemberitem.MemberID === member.MemberID;
      });

      if (adminmemberindex >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseChoiceJoinedTeamInfor(member) {
    let resChoiceJoinedTeamInfor = {};

    let TeamAllInfor = this.getChoiceJoinedTeamInfor(member);

    let checkMemberIsAdmin = this.setCheckMemberIsAdmin(member);

    resChoiceJoinedTeamInfor = {
      TeamID: member.TeamID,
      TeamAllInfor: TeamAllInfor,
      CheckMemberIsAdmin: checkMemberIsAdmin
    };

    return resChoiceJoinedTeamInfor;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
}
let zeamsTeams = new ZeamsTeams();

module.exports = zeamsTeams;
