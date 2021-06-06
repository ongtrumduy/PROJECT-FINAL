import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import zeamsRoomChats from "./zeamsRoomChats";

class ZeamsRoomChatsContents {
  constructor() {
    let roomchatscontents = fs.readFileSync(
      "../BACKEND/src/databases/zeamsRoomChatsContents.json"
    );
    if (roomchatscontents.length > 0) {
      this.ZeamsRoomChatsContents = JSON.parse(roomchatscontents);
    } else {
      this.ZeamsRoomChatsContents = [];
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  saveDataJSON() {
    fs.writeFileSync(
      "../BACKEND/src/databases/zeamsRoomChatsContents.json",
      JSON.stringify(this.ZeamsRoomChatsContents),
      err => {
        if (err) throw err;
        console.log("Complete!!!");
      }
    );
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberRoomChat(roomchatinfor) {
    let newroomchat = {
      RoomChatID: zeamsRoomChats.createNewMemberRoomChat(roomchatinfor),
      MemberID: roomchatinfor.MemberID,
      MemberChatID: roomchatinfor.MemberChatID,
      BannedMemberChat: false,
      RoomMemberChatContent: []
    };

    this.ZeamsRoomChatsContents.push(newroomchat);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMemberChatRoomChat(roomchatinfor) {
    let newroomchat = {
      RoomChatID: zeamsRoomChats.createNewMemberChatRoomChat(roomchatinfor),
      MemberID: roomchatinfor.MemberChatID,
      MemberChatID: roomchatinfor.MemberID,
      BannedMemberChat: false,
      RoomMemberChatContent: []
    };

    this.ZeamsRoomChatsContents.push(newroomchat);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewMemberRoomChat(roomchatinfor) {
    let checkCreateNewRoom = false;
    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roommemberitem => {
        return (
          roommemberitem.MemberID === roomchatinfor.MemberID &&
          roommemberitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex < 0) {
      checkCreateNewRoom = true;
    }

    return checkCreateNewRoom;
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewMemberChatRoomChat(roomchatinfor) {
    let checkCreateNewRoom = false;
    let roommemberchatindex = this.ZeamsRoomChatsContents.findIndex(
      roommemberchatitem => {
        return (
          roommemberchatitem.MemberID === roomchatinfor.MemberChatID &&
          roommemberchatitem.MemberChatID === roomchatinfor.MemberID
        );
      }
    );

    if (roommemberchatindex < 0) {
      checkCreateNewRoom = true;
    }

    return checkCreateNewRoom;
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewMessageToMemberRoomChat(roomchatinfor) {
    let checkCreateNewMemberRoom = this.checkCreateNewMemberRoomChat(
      roomchatinfor
    );

    if (checkCreateNewMemberRoom) {
      this.createNewMemberRoomChat(roomchatinfor);
    }

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex >= 0) {
      let roommembercontent = {
        MemberChattedID: roomchatinfor.MemberID,
        MemberChattedContent: roomchatinfor.MemberChatContent,
        MemberChattedDate: moment().format("HH:mm DD-MM-YYYY")
      };

      this.ZeamsRoomChatsContents[roommemberindex].RoomMemberChatContent.push(
        roommembercontent
      );
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewMessageToMemberChatRoomChat(roomchatinfor) {
    let checkCreateNewMemberChatRoom = this.checkCreateNewMemberChatRoomChat(
      roomchatinfor
    );

    if (checkCreateNewMemberChatRoom) {
      this.createNewMemberChatRoomChat(roomchatinfor);
    }

    let roommemberchatindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberChatID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberID
        );
      }
    );

    if (roommemberchatindex >= 0) {
      let roommemberchatcontent = {
        MemberChattedID: roomchatinfor.MemberID,
        MemberChattedContent: roomchatinfor.MemberChatContent,
        MemberChattedDate: moment().format("HH:mm DD-MM-YYYY")
      };

      this.ZeamsRoomChatsContents[
        roommemberchatindex
      ].RoomMemberChatContent.push(roommemberchatcontent);
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  addNewMessageToMemberAndMemberChat(roomchatinfor) {
    this.addNewMessageToMemberRoomChat(roomchatinfor);
    this.addNewMessageToMemberChatRoomChat(roomchatinfor);
  }

  //-----------------------------------------------------------------------------------------------------------------

  getBannedStatusOfRoomMember(roomchatinfor) {
    let bannedStatusOfRoomChat = false;

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex >= 0) {
      bannedStatusOfRoomChat = this.ZeamsRoomChatsContents[roommemberindex]
        .BannedMemberChat;
    }

    return bannedStatusOfRoomChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getBannedStatusOfRoomMemberChat(roomchatinfor) {
    let bannedStatusOfRoomChat = false;

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberChatID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberID
        );
      }
    );

    if (roommemberindex >= 0) {
      bannedStatusOfRoomChat = this.ZeamsRoomChatsContents[roommemberindex]
        .BannedMemberChat;
    }

    return bannedStatusOfRoomChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  changeBannedOfRoomChatMember(roomchatinfor) {
    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    this.ZeamsRoomChatsContents[roommemberindex].BannedMemberChat = true;

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  changeUnbannedOfRoomChatMember(roomchatinfor) {
    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    this.ZeamsRoomChatsContents[roommemberindex].BannedMemberChat = false;

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  deleteMemberChatContent(roomchatinfor) {
    zeamRoomChats.removeMemberOfAllMemberChatRoomList(roomchatinfor);

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex >= 0) {
      this.ZeamsRoomChatsContents.splice(roommemberindex, 1);
    }

    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  getRoomChatID(roomchatinfor) {
    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    return this.ZeamsRoomChatsContents[roommemberindex].RoomChatID;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getCurrentMemberRoomChatList(roomchatinfor) {
    let currentTeamMemberRoomChat = [];

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex >= 0) {
      let currentIndexToRenderMemberChatContent = Number(
        roomchatinfor.CurrentIndexToRenderMemberChatContent
      );

      let numberMemberChatContent = Number(
        roomchatinfor.NumberMemberChatContent
      );

      let indexOfLastChat = this.ZeamsRoomChatsContents[roommemberindex]
        .RoomMemberChatContent.length;

      let indexOfFirstChat =
        indexOfLastChat -
        currentIndexToRenderMemberChatContent * numberMemberChatContent;

      if (indexOfFirstChat < 0) {
        indexOfFirstChat = 0;
      }

      currentTeamMemberRoomChat = this.ZeamsRoomChatsContents[
        roommemberindex
      ].RoomMemberChatContent.slice(indexOfFirstChat, indexOfLastChat);
    }

    return currentTeamMemberRoomChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkNextRenderMemberChatContent(roomchatinfor) {
    let checkNextRenderMemberChat = false;

    let roommemberindex = this.ZeamsRoomChatsContents.findIndex(
      roomchatitem => {
        return (
          roomchatitem.MemberID === roomchatinfor.MemberID &&
          roomchatitem.MemberChatID === roomchatinfor.MemberChatID
        );
      }
    );

    if (roommemberindex >= 0) {
      let currentIndexToRenderMemberChatContent = Number(
        roomchatinfor.CurrentIndexToRenderMemberChatContent
      );

      let numberMemberChatContent = Number(
        roomchatinfor.NumberMemberChatContent
      );

      let numberOfMemberChatContentList = this.ZeamsRoomChatsContents[
        roommemberindex
      ].RoomMemberChatContent.length;

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
      CurrentRoomChatContent: currentTeamMemberRoomChat,
      CheckNextRenderChatContent: checkNextRenderMemberChat,
      BannedOfMember: this.getBannedStatusOfRoomMember(roomchatinfor),
      BannedOfMemberChat: this.getBannedStatusOfRoomMemberChat(roomchatinfor),
      MemberID: roomchatinfor.MemberID,
      MemberChatID: roomchatinfor.MemberChatID
    };

    return resmemberchatcontent;
  }
}

let zeamsRoomChatsContents = new ZeamsRoomChatsContents();

module.exports = zeamsRoomChatsContents;
