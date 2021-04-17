import { EmitSocket } from "../io-sockets/startbeginsocket";
import StartBeginSocket from "../io-sockets/startconnectsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let CreateNewDiscussComment = io => {
  io.on("connection", socket => {
    //====================================================================================================
    StartBeginSocket(socket);
    //====================================================================================================
    socket.on("create-new-discuss-comment", data => {
      console.log(data);
      zeamsTeamsDiscuss.createNewMemberComment(data);
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscussComment;
