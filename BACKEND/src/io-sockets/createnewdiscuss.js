import { EmitSocket } from "../io-sockets/startbeginsocket";
import StartBeginSocket from "../io-sockets/startconnectsocket";
import zeamsTeamsDiscuss from "../models/zeamsTeamsDiscuss";

let CreateNewDiscuss = io => {
  io.on("connection", socket => {
    //====================================================================================================
    StartBeginSocket(socket);
    //====================================================================================================
    socket.on("create-new-discuss", data => {
      // console.log(data);
      zeamsTeamsDiscuss.createNewMemberDiscuss(data);
    });
    //====================================================================================================
  });
};

module.exports = CreateNewDiscuss;
