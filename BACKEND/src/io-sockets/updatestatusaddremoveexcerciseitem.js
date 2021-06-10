import StartBeginSocket from "../io-sockets/startbeginsocket";
import zeamsExcercisesLists from "../services/zeamsExcercisesLists";

let UpdateStatusExcericseItem = io => {
  let membersocket = {};

  io.on("connection", socket => {
    //====================================================================================================

    membersocket = StartBeginSocket.setStartBeginSocket(socket, membersocket);

    //====================================================================================================

    socket.on("add-new-excercise-item", data => {
      let resUpdateStatusExcerciseItem = zeamsExcercisesLists.responseAddNewExcerciseItemToMemberOwnedList(
        data
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-status-excercise-item",
        resUpdateStatusExcerciseItem
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-excercise-owned-list",
        {
          MemberID: data.MemberID
        }
      );
    });

    //====================================================================================================

    socket.on("remove-owned-excercise-item", data => {
      let resUpdateStatusExcerciseItem = zeamsExcercisesLists.responseRemoveNewExcerciseItemToMemberOwnedList(
        data
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-status-excercise-item",
        resUpdateStatusExcerciseItem
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "send-to-update-excercise-owned-list",
        {
          MemberID: data.MemberID
        }
      );
    });

    //====================================================================================================

    socket.on("receive-to-update-excercise-owned-list", data => {
      let resUpdateExcerciseOwnedList = zeamsExcercisesLists.responseMemberChoiceIndexExcerciseOwnedListContent(
        data
      );

      StartBeginSocket.emitAllSocketsOfMember(
        membersocket,
        data.MemberID,
        io,
        "update-excercise-owned-list",
        resUpdateExcerciseOwnedList
      );
    });

    //====================================================================================================
  });
};

module.exports = UpdateStatusExcericseItem;
