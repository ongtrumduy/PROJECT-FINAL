import express from "express";
import cors from "cors";
import getAllAssignmentOfMember from "../controllers/getallassignmentofmember";
import bodyParser from "body-parser";

let router = express.Router();

let getallassignmentofmemberRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post(
    "/getallassignmentofmember",
    cors(corsOptions),
    getAllAssignmentOfMember
  );

  return app.use("/", router);
};

module.exports = getallassignmentofmemberRoutes;
