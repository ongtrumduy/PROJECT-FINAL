import express from "express";
import cors from "cors";
import getExcerciseOwnedList from "../controllers/getexcerciseownedlist";
import bodyParser from "body-parser";

let router = express.Router();

let excerciseownedlistRoutes = (app, corsOptions) => {
  app.use(cors());
  app.use(bodyParser.json());
  router.post(
    "/getexcerciseownedlist",
    cors(corsOptions),
    getExcerciseOwnedList
  );

  return app.use("/", router);
};

module.exports = excerciseownedlistRoutes;
