import express from "express";
import cors from "cors";
import createNewExcerciseQAContent from "../controllers/createnewexcerciseQAcontent";
import bodyParser from "body-parser";

let router = express.Router();

let createnewexcerciseQAcontentRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post(
    "/createnewexcerciseQAcontent",
    cors(corsOptions),
    createNewExcerciseQAContent
  );

  return app.use("/", router);
};

module.exports = createnewexcerciseQAcontentRoutes;
