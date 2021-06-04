import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

class ZeamsRoomChats {
  constructor() {
    let roomchats = fs.readFileSync(
      "../BACKEND/src/databases/zeamsRoomChats.json"
    );
    if (roomchats.length > 0) {
      this.ZeamsRoomChats = JSON.parse(roomchats);
    } else {
      this.ZeamsRoomChats = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsRoomChats.json",
      JSON.stringify(this.ZeamsRoomChats),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberRoomChat(roomchatinfor) {
    let newroomchat = {
      RoomChatID: uuidv4(),
      MemberFirstChatID: roomchatinfor.MemberID,
      MemberSecondChatID: roomchatinfor.MemberChatID,
      BannedMemberFirstChat: false,
      BannedMemberSecondChat: false,
      DeletedMemberFirstChat: false,
      DeletedMemberSecondChat: false,
      RoomMemberFirstChatContent: [],
      RoomMemberSecondChatContent: []
    };

    this.ZeamsRoomChats.push(newroomchat);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewMemberRoomChat(roomchatinfor) {
    let checkCreateNewRoom = false;
    let roomchatfirstindex = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberFirstChatID === roomchatinfor.MemberID &&
        roomchatitem.MemberSecondChatID === roomchatinfor.MemberChatID
      );
    });

    let roomchatsecondindex = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberFirstChatID === roomchatinfor.MemberChatID &&
        roomchatitem.MemberSecondChatID === roomchatinfor.MemberID
      );
    });

    if (roomchatfirstindex < 0 && roomchatsecondindex < 0) {
      checkCreateNewRoom = true;
    }

    return checkCreateNewRoom;
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMessageToRooomChat(roomchatinfor) {
    let roomchatindex = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return roomchatitem.RoomChatID === roomchatinfor.RoomChatID;
    });

    if (roomchatindex >= 0) {
      let memberchatcontent = {
        MemberID: roomchatinfor.MemberID,
        MemberChatContent: roomchatinfor.MemberChatContent,
        MemberChatDate: moment().format("HH:mm DD-MM-YYYY")
      };

      this.ZeamsRoomChats[roomchatindex].RoomMemberFirstChatContent.push(
        memberchatcontent
      );

      this.ZeamsRoomChats[roomchatindex].RoomMemberSecondChatContent.push(
        memberchatcontent
      );

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  getMemberMessageToRoomChatIndex(roomchatinfor) {
    let roomchatfirstindex = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberFirstChatID === roomchatinfor.MemberID &&
        roomchatitem.MemberSecondChatID === roomchatinfor.MemberChatID
      );
    });

    let roomchatsecondindex = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberFirstChatID === roomchatinfor.MemberChatID &&
        roomchatitem.MemberSecondChatID === roomchatinfor.MemberID
      );
    });

    if (roomchatfirstindex >= 0) {
      return roomchatfirstindex;
    } else if (roomchatsecondindex >= 0) {
      return roomchatsecondindex;
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkBannedOfMember(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberID
      ) {
        return this.ZeamsRoomChats[roomchatindex].BannedMemberFirstChat;
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberID
      ) {
        return this.ZeamsRoomChats[roomchatindex].BannedMemberSecondChat;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkBannedOfMemberChatOfMember(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberChatID
      ) {
        return this.ZeamsRoomChats[roomchatindex].BannedMemberFirstChat;
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberChatID
      ) {
        return this.ZeamsRoomChats[roomchatindex].BannedMemberSecondChat;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkDeletedOfMember(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberID
      ) {
        return this.ZeamsRoomChats[roomchatindex].DeletedMemberFirstChat;
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberID
      ) {
        return this.ZeamsRoomChats[roomchatindex].DeletedMemberSecondChat;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkDeletedOfMemberChatOfMember(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberChatID
      ) {
        return this.ZeamsRoomChats[roomchatindex].DeletedMemberFirstChat;
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberChatID
      ) {
        return this.ZeamsRoomChats[roomchatindex].DeletedMemberSecondChat;
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  // checkDeleteMemberChatContent(roomchatinfor) {
  //   let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

  //   if (roomchatindex >= 0) {
  //     if (
  //       this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
  //       roomchatinfor.MemberChatID
  //     ) {
  //       return this.ZeamsRoomChats[roomchatindex].BannedMemberFirstChat;
  //     } else if (
  //       this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
  //       roomchatinfor.MemberChatID
  //     ) {
  //       return this.ZeamsRoomChats[roomchatindex].BannedMemberSecondChat;
  //     }
  //   }
  // }

  //-----------------------------------------------------------------------------------------------------------------

  deleteMemberChatContent(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {0
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberID
      ) {
        this.ZeamsRoomChats[roomchatindex].RoomMemberFirstChatContent = [];
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberID
      ) {
        return (this.ZeamsRoomChats[
          roomchatindex
        ].RoomMemberFirstChatContent = []);
      }

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  unBannedAndBanMemberChat(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      if (
        this.ZeamsRoomChats[roomchatindex].MemberFirstChatID ===
        roomchatinfor.MemberChatID
      ) {
        this.ZeamsRoomChats[
          roomchatindex
        ].BannedMemberFirstChat = !roomchatinfor.BannedOfMember;
      } else if (
        this.ZeamsRoomChats[roomchatindex].MemberSecondChatID ===
        roomchatinfor.MemberChatID
      ) {
        this.ZeamsRoomChats[
          roomchatindex
        ].BannedMemberSecondChat = !roomchatinfor.BannedOfMember;
      }
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  getRoomChatID(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    return this.ZeamsRoomChats[roomchatindex].RoomChatID;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getCurrentMemberRoomChatList(roomchatinfor) {
    let checkrooomchat = this.checkCreateNewMemberRoomChat(roomchatinfor);
    if (checkrooomchat) {
      this.createNewMemberRoomChat(roomchatinfor);
    }
    let currentTeamMemberRoomChat = [];

    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      let currentIndexToRenderMemberChatContent = Number(
        roomchatinfor.CurrentIndexToRenderMemberChatContent
      );

      let numberMemberChatContent = Number(
        roomchatinfor.NumberMemberChatContent
      );

      let indexOfLastChat = this.ZeamsRoomChats[roomchatindex]
        .TeamDiscussContent.length;

      let indexOfFirstChat =
        indexOfLastChat -
        currentIndexToRenderMemberChatContent * numberMemberChatContent;

      if (indexOfFirstChat < 0) {
        indexOfFirstChat = 0;
      }

      currentTeamMemberRoomChat = this.ZeamsRoomChats[
        roomchatindex
      ].RoomChatContent.slice(indexOfFirstChat, indexOfLastChat);
    }

    return currentTeamMemberRoomChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkNextRenderMemberChatContent(roomchatinfor) {
    let checkNextRenderMemberChat = false;

    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);

    if (roomchatindex >= 0) {
      let currentIndexToRenderMemberChatContent = Number(
        roomchatinfor.CurrentIndexToRenderMemberChatContent
      );

      let numberMemberChatContent = Number(
        roomchatinfor.NumberMemberChatContent
      );

      let numberOfMemberChatContentList = this.ZeamsRoomChats[roomchatindex]
        .TeamDiscussContent.length;

      let indexOfLastChat =
        currentIndexToRenderMemberChatContent * numberMemberChatContent;

      if (indexOfLastChat < numberOfMemberChatContentList) {
        checkNextRenderMemberChat = true;
      } else {
        checkNextRenderMemberChat = false;
      }
    }

    return checkNextRenderMemberChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseMemberChatContent(roomchatinfor) {
    let resmemberchatcontent;

    let currentTeamMemberRoomChat = this.getCurrentMemberRoomChatList(
      roomchatinfor
    );

    let checkNextRenderMemberChat = this.checkNextRenderMemberChatContent(
      roomchatinfor
    );

    resmemberchatcontent = {
      CurrentTeamMemberRoomChat: currentTeamMemberRoomChat,
      CheckNextRenderDiscussContent: checkNextRenderMemberChat,
      RoomChatID: this.getRoomChatID(roomchatinfor)
    };

    return resmemberchatcontent;
  }
}

let zeamsRoomChats = new ZeamsRoomChats();

module.exports = zeamsRoomChats;
