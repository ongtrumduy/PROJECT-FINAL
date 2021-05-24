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
      MemberID: roomchatinfor.MemberID,
      MemberChatID: roomchatinfor.MemberChatID,
      RoomChatContent: []
    };

    this.ZeamsRoomChats.push(newroomchat);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  checkCreateNewMemberRoomChat(roomchatinfor) {
    console.log("Ra roomchatinfor", roomchatinfor.MemberChatID);

    let checkCreateNewRoom = false;
    let roomchatindex1 = this.ZeamsRoomChats.findIndex(roomchatitem => {
      console.log("========================================");
      console.log("Ra để check: ");
      console.log("Ra để check roomchatitem: ");

      console.log("Ra để check roomchatitem.MemberID: ", roomchatitem.MemberID);
      console.log(
        "Ra để check roomchatitem.MemberChatID: ",
        roomchatitem.MemberChatID
      );

      console.log("Ra để check roomchatinfor: ");
      console.log(
        "Ra để check roomchatinfor.MemberID: ",
        roomchatinfor.MemberID
      );
      console.log(
        "Ra để check roomchatinfor.MemberChatID: ",
        roomchatinfor.MemberChatID
      );

      console.log("========================================");

      return (
        roomchatitem.MemberID === roomchatinfor.MemberID &&
        roomchatitem.MemberChatID === roomchatinfor.MemberChatID
      );
    });

    let roomchatindex2 = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberID === roomchatinfor.MemberChatID &&
        roomchatitem.MemberChatID === roomchatinfor.MemberID
      );
    });

    // console.log("Ra roomchatindex1", roomchatindex1);
    // console.log("Ra roomchatindex2", roomchatindex2);

    if (roomchatindex1 < 0 && roomchatindex2 < 0) {
      checkCreateNewRoom = true;
    }

    return checkCreateNewRoom;
  }

  //-----------------------------------------------------------------------------------------------------------------

  createNewMessageToRooomChat(roomchatinfor) {
    let checkrooomchat = this.checkCreateNewMemberRoomChat(roomchatinfor);
    if (checkrooomchat) {
      this.createNewMemberRoomChat(roomchatinfor);
    }
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);
    console.log("Ra roomchatindex", roomchatindex);
    let memberchatcontent = {
      MemberID: roomchatinfor.MemberID,
      MemberChatContent: roomchatinfor.MemberChatContent,
      MemberChatDate: moment().format("HH:mm DD-MM-YYYY")
    };

    this.ZeamsRoomChats[roomchatindex].RoomChatContent.push(memberchatcontent);
    this.saveDataJSON();
  }

  //-----------------------------------------------------------------------------------------------------------------

  getMemberMessageToRoomChatIndex(roomchatinfor) {
    let roomchatindex1 = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberID === roomchatinfor.MemberID &&
        roomchatitem.MemberChatID === roomchatinfor.MemberChatID
      );
    });

    let roomchatindex2 = this.ZeamsRoomChats.findIndex(roomchatitem => {
      return (
        roomchatitem.MemberID === roomchatinfor.MemberChatID &&
        roomchatitem.MemberChatID === roomchatinfor.MemberID
      );
    });

    console.log("Ra roomchatindex1", roomchatindex1);
    console.log("Ra roomchatindex2", roomchatindex2);

    if (roomchatindex1 >= 0) {
      return roomchatindex1;
    } else if (roomchatindex2 >= 0) {
      return roomchatindex2;
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  getMemberMessageToRoomChat(roomchatinfor) {
    let roomchatindex = this.getMemberMessageToRoomChatIndex(roomchatinfor);
    return this.ZeamsRoomChats[roomchatindex];
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseMemberRoomChat(roomchatinfor) {
    let resMemberChat;
    let checkmemberroomchat = this.checkCreateNewMemberRoomChat(roomchatinfor);
    if (checkmemberroomchat) {
      resMemberChat = {
        MemberID: roomchatinfor.MemberID,
        MemberChatID: roomchatinfor.MemberChatID,
        RoomChatContent: []
      };
    } else {
      resMemberChat = this.getMemberMessageToRoomChat(roomchatinfor);
    }
    return resMemberChat;
  }
}

let zeamsRoomChats = new ZeamsRoomChats();

module.exports = zeamsRoomChats;
