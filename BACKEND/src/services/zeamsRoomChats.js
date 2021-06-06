import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import zeamsMembers from "./zeamsMembers";

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
    let roomChatID = uuidv4();

    let memberroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberID;
      }
    );

    if (memberroomchatindex < 0) {
      let memberchat = {
        MemberID: roomchatinfor.MemberChatID
      };

      let newmemberroomchat = {
        MemberID: roomchatinfor.MemberID,
        RoomChatMemberList: [
          {
            MemberID: roomchatinfor.MemberChatID,
            MemberFullName: zeamsMembers.getMemberFullName(memberchat),
            RoomChatID: roomChatID,
            HiddenMemberChat: false
          }
        ]
      };

      this.ZeamsRoomChats.push(newmemberroomchat);
    } else {
      let memberofroomchatindex = this.ZeamsRoomChats[
        memberroomchatindex
      ].RoomChatMemberList.findIndex(memberofroomchatitem => {
        return memberofroomchatitem.MemberID === roomchatinfor.MemberChatID;
      });

      if (memberofroomchatindex < 0) {
        let memberchat = {
          MemberID: roomchatinfor.MemberChatID
        };

        let newmemberofroomchat = {
          MemberID: roomchatinfor.MemberChatID,
          MemberFullName: zeamsMembers.getMemberFullName(memberchat),
          RoomChatID: roomChatID,
          HiddenMemberChat: false
        };

        this.ZeamsRoomChats[memberroomchatindex].RoomChatMemberList.push(
          newmemberofroomchat
        );
      }
    }

    this.saveDataJSON();

    return roomChatID;
  }
  //================================================================================================================

  createNewMemberChatRoomChat(roomchatinfor) {
    let roomChatID = uuidv4();

    let memberchatroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberChatID;
      }
    );

    if (memberchatroomchatindex < 0) {
      let memberchat = {
        MemberID: roomchatinfor.MemberID
      };

      let newmemberchatroomchat = {
        MemberID: roomchatinfor.MemberChatID,
        RoomChatMemberList: [
          {
            MemberID: roomchatinfor.MemberID,
            MemberFullName: zeamsMembers.getMemberFullName(memberchat),
            RoomChatID: roomChatID,
            HiddenMemberChat: false
          }
        ]
      };

      this.ZeamsRoomChats.push(newmemberchatroomchat);
    } else {
      let memberchatofroomchatindex = this.ZeamsRoomChats[
        memberchatroomchatindex
      ].RoomChatMemberList.findIndex(memberofroomchatitem => {
        return memberofroomchatitem.MemberID === roomchatinfor.MemberID;
      });

      if (memberchatofroomchatindex < 0) {
        let memberchat = {
          MemberID: roomchatinfor.MemberID
        };

        let newmemberchatofroomchat = {
          MemberID: roomchatinfor.MemberID,
          MemberFullName: zeamsMembers.getMemberFullName(memberchat),
          RoomChatID: roomChatID,
          HiddenMemberChat: false
        };

        this.ZeamsRoomChats[memberchatroomchatindex].RoomChatMemberList.push(
          newmemberchatofroomchat
        );
      }
    }

    this.saveDataJSON();

    return roomChatID;
  }

  //-----------------------------------------------------------------------------------------------------------------

  getAllMemberChatRoomList(roomchatinfor) {
    let memberroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberID;
      }
    );
    let allUnhiddenedMemberChat = [];
    if (memberroomchatindex >= 0) {
      this.ZeamsRoomChats[memberroomchatindex].RoomChatMemberList.forEach(
        memberroomitem => {
          if (memberroomitem.HiddenMemberChat === false) {
            allUnhiddenedMemberChat.push(memberroomitem);
          }
        }
      );
    }

    return allUnhiddenedMemberChat;
  }

  //-----------------------------------------------------------------------------------------------------------------

  removeMemberOfAllMemberChatRoomList(roomchatinfor) {
    let memberroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberID;
      }
    );

    if (memberroomchatindex >= 0) {
      let memberofchatlistindex = this.ZeamsRoomChats[
        memberroomchatindex
      ].RoomChatMemberList.findIndex(membetofchatlistitem => {
        return membetofchatlistitem.MemberID === roomchatinfor.MemberChatID;
      });

      if (memberofchatlistindex >= 0) {
        this.ZeamsRoomChats[memberroomchatindex].RoomChatMemberList.splice(
          memberofchatlistindex,
          1
        );
      }

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  hiddenedMemberOfAllMemberChatRoomList(roomchatinfor) {
    let memberroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberID;
      }
    );

    if (memberroomchatindex >= 0) {
      let memberofchatlistindex = this.ZeamsRoomChats[
        memberroomchatindex
      ].RoomChatMemberList.findIndex(membetofchatlistitem => {
        return membetofchatlistitem.MemberID === roomchatinfor.MemberChatID;
      });

      if (memberofchatlistindex >= 0) {
        this.ZeamsRoomChats[memberroomchatindex].RoomChatMemberList[
          memberofchatlistindex
        ].HiddenMemberChat = true;
      }

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  unHiddenedMemberOfAllMemberChatRoomList(roomchatinfor) {
    let memberroomchatindex = this.ZeamsRoomChats.findIndex(
      memberroomchatitem => {
        return memberroomchatitem.MemberID === roomchatinfor.MemberID;
      }
    );

    if (memberroomchatindex >= 0) {
      let memberofchatlistindex = this.ZeamsRoomChats[
        memberroomchatindex
      ].RoomChatMemberList.findIndex(membetofchatlistitem => {
        return membetofchatlistitem.MemberID === roomchatinfor.MemberChatID;
      });

      if (memberofchatlistindex >= 0) {
        this.ZeamsRoomChats[memberroomchatindex].RoomChatMemberList[
          memberofchatlistindex
        ].HiddenMemberChat = false;
      }

      this.saveDataJSON();
    }
  }

  //-----------------------------------------------------------------------------------------------------------------

  responseAllMemberChatRoomList(roomchatinfor) {
    let allmemberroomlist = this.getAllMemberChatRoomList(roomchatinfor);
    let resAllMemberChat = {};
    resAllMemberChat = {
      RoomChatMemberList: allmemberroomlist,
      MemberID: roomchatinfor.MemberID
    };

    return resAllMemberChat;
  }

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------
}

let zeamsRoomChats = new ZeamsRoomChats();

module.exports = zeamsRoomChats;
