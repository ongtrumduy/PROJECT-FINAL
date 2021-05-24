import React from "react";

import Modal from "react-modal";
import axios from "axios";

export default class ExcercisesOwnedItemScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllExcerciseItemResultList: [
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        },
        {
          MemberDidExcerciseName: "Phạm Duy",
          MemberDidExcerciseID: "lghklhlhdskhosohkohks",
          TimeDidExcercise: "20",
          DateDidExcercise: "16:30 21-05-2021",
          ResultDidExcercise: "15",
          NumberQuestionDidExcercise: "20",
          NumberTimesDidExcercise: "2"
        }
      ],
      NumberScoreItemOnPage: "6",
      NumberIndexScoreItemOnPage: "5",
      CurrentIndexScoreItemPage: "1",
      CurrentIndexOfIndexScoreItemPage: "1",
      checkValidatePrevLeft: true,
      checkValidateNextRight: false,
      overIndexScoreItemIsOpen: false,
      AllNumberOfScoreItemOnPageList: []
    };
  }

  opencheckOverIndexScoreItemModal = () => {
    this.setState({
      overIndexScoreItemIsOpen: true
    });
  };

  closecheckOverIndexScoreItemModal = () => {
    this.setState({
      overIndexScoreItemIsOpen: false
    });
  };

  componentDidMount = () => {
    // axios
    //   .post("/getexcericseitemscoreboard", {
    //     ExcerciseID: this.props.ExcerciseID
    //   })
    //   .then(res => console.log(res.data))
    //   .catch(error => console.log(error));

    const allNumberOfScoreItemOnPageList = [];
    const scoreItemListLength = this.state.AllExcerciseItemResultList.length;

    const allNumberOfScoreItem = Math.ceil(
      scoreItemListLength / Number(this.state.NumberScoreItemOnPage)
    );

    for (let i = 1; i <= allNumberOfScoreItem; i++) {
      allNumberOfScoreItemOnPageList.push(i + "");
    }
    this.setState({
      AllNumberOfScoreItemOnPageList: allNumberOfScoreItemOnPageList
    });
  };

  renderIndexOfScoreItemList = () => {
    const currentIndexOfIndexScoreItemPage = Number(
      this.state.CurrentIndexOfIndexScoreItemPage
    );
    const numberIndexScoreItemOnPage = Number(
      this.state.NumberIndexScoreItemOnPage
    );

    const indexOfLastIndexScoreItem =
      currentIndexOfIndexScoreItemPage * numberIndexScoreItemOnPage;

    const indexOfFirstIndexScoreItem =
      indexOfLastIndexScoreItem - numberIndexScoreItemOnPage;

    const currentIndexOfChoiceIndexScoreItemList = this.state.AllNumberOfScoreItemOnPageList.slice(
      indexOfFirstIndexScoreItem,
      indexOfLastIndexScoreItem
    );

    const allNumberOfIndexOfScoreItem = Math.ceil(
      this.state.AllNumberOfScoreItemOnPageList.length /
        numberIndexScoreItemOnPage
    );

    if (
      (this.state.AllNumberOfScoreItemOnPageList.length %
        numberIndexScoreItemOnPage ===
        0 &&
        currentIndexOfIndexScoreItemPage === allNumberOfIndexOfScoreItem) ||
      currentIndexOfChoiceIndexScoreItemList.length < 5
    ) {
      return (
        <div className="user-excercises_all__public-list___control____index-item">
          {currentIndexOfChoiceIndexScoreItemList.map(numberindexitem => (
            <div
              style={
                this.state.CurrentIndexScoreItemPage === numberindexitem
                  ? { color: "blue", border: "groove" }
                  : { color: "black" }
              }
              key={numberindexitem}
              id={numberindexitem}
              onClick={event => this.chooseIndexScoreItemPage(event)}
            >
              {numberindexitem}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="user-excercises_all__public-list___control____index-item">
          {currentIndexOfChoiceIndexScoreItemList.map(numberindexitem => (
            <div
              style={
                this.state.CurrentIndexScoreItemPage === numberindexitem
                  ? { color: "blue", border: "groove" }
                  : { color: "black" }
              }
              key={numberindexitem}
              id={numberindexitem}
              onClick={event => this.chooseIndexScoreItemPage(event)}
            >
              {numberindexitem}
            </div>
          ))}
          <span>...</span>
        </div>
      );
    }
  };

  chooseIndexScoreItemPage = event => {
    this.setState({
      CurrentIndexScoreItemPage: event.target.id
    });
  };

  selectIndexForRenderExcerciseScoreItem = () => {
    return (
      <div
        className="user-excercises_all__public-list___control"
        style={{ margin: "40px 0 0 0" }}
      >
        <div>
          <i
            style={
              this.state.checkValidatePrevLeft
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.prevToIndexScoreItemOnLeft()}
            className="material-icons"
          >
            &#xe5c4;
          </i>
        </div>
        {this.renderIndexOfScoreItemList()}
        <div>
          <i
            style={
              this.state.checkValidateNextRight
                ? { color: "gray" }
                : { color: "blue" }
            }
            onClick={() => this.nextToIndexScoreItemOnRight()}
            className="material-icons"
          >
            &#xe5c8;
          </i>
        </div>
      </div>
    );
  };

  prevToIndexScoreItemOnLeft = () => {
    const numberIndexScoreItemOnPage = Number(
      this.state.NumberIndexScoreItemOnPage
    );

    if (!this.state.checkValidatePrevLeft) {
      if (Number(this.state.CurrentIndexOfIndexScoreItemPage) + "" === "1") {
        this.setState({
          checkValidatePrevLeft: true
        });
      } else {
        this.setState({
          CurrentIndexOfIndexScoreItemPage:
            Number(this.state.CurrentIndexOfIndexScoreItemPage) - 1 + "",
          checkValidateNextRight: false,
          CurrentIndexScoreItemPage:
            (Number(this.state.CurrentIndexOfIndexScoreItemPage) - 2) *
              numberIndexScoreItemOnPage +
            1 +
            ""
        });
      }
    } else {
      this.opencheckOverIndexScoreItemModal();
    }
  };

  nextToIndexScoreItemOnRight = () => {
    const numberIndexScoreItemOnPage = Number(
      this.state.NumberIndexScoreItemOnPage
    );

    const allNumberOfIndexOfScoreItem = Math.ceil(
      this.state.AllNumberOfScoreItemOnPageList.length /
        numberIndexScoreItemOnPage
    );

    if (!this.state.checkValidateNextRight) {
      if (
        Number(this.state.CurrentIndexOfIndexScoreItemPage) ===
        allNumberOfIndexOfScoreItem
      ) {
        this.setState({
          checkValidateNextRight: true
        });
      } else {
        this.setState({
          checkValidatePrevLeft: false,
          CurrentIndexOfIndexScoreItemPage:
            Number(this.state.CurrentIndexOfIndexScoreItemPage) + 1 + "",
          CurrentIndexScoreItemPage:
            Number(this.state.CurrentIndexOfIndexScoreItemPage) *
              numberIndexScoreItemOnPage +
            1 +
            ""
        });
      }
    } else {
      this.opencheckOverIndexScoreItemModal();
    }
  };

  returnExcerciseItemDetailContent = () => {
    this.props.getExcerciseOwnedIDMemberChoice(this.props.ExcerciseID);
    this.props.updateRenderExcerciseOwnedControl("owneditem");
  };

  renderExcerciseItemScoreBoard = () => {
    const currentIndexScoreItemPage = Number(
      this.state.CurrentIndexScoreItemPage
    );
    const numberScoreItemOnPage = Number(this.state.NumberScoreItemOnPage);

    const indexOfLastScoreItem =
      currentIndexScoreItemPage * numberScoreItemOnPage;

    const indexOfFirstScoreItem = indexOfLastScoreItem - numberScoreItemOnPage;

    const currentChoiceIndexScoreItemList = this.state.AllExcerciseItemResultList.slice(
      indexOfFirstScoreItem,
      indexOfLastScoreItem
    );

    return (
      <div>
        <div
          className="user-excercises_all-list__owned-list___owned-item_____backtoowneditem"
          onClick={() => this.returnExcerciseItemDetailContent()}
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay lại</span>
          </div>
        </div>
        <div className="user-excercises_all-list__owned-list___owned-item_____table-list">
          <table>
            <thead>
              <th>STT</th>
              <th>Họ Tên - ID</th>
              <th>Ngày làm bài</th>
              <th>Thời gian làm</th>
              <th>Điểm số</th>
              <th>Số lần làm</th>
            </thead>
            <tbody>
              {currentChoiceIndexScoreItemList.map(
                (excerciseitem, excerciseindex) => (
                  <tr>
                    <td>{Number(excerciseindex) + 1}</td>
                    <td>
                      {excerciseitem.MemberDidExcerciseName} -&nbsp;
                      {excerciseitem.MemberDidExcerciseID}
                    </td>
                    <td>{excerciseitem.DateDidExcercise}</td>
                    <td>{excerciseitem.TimeDidExcercise} phút</td>
                    <td>
                      {excerciseitem.ResultDidExcercise} /&nbsp;
                      {excerciseitem.NumberQuestionDidExcercise}
                    </td>
                    <td> {excerciseitem.NumberTimesDidExcercise}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderExcerciseItemScoreBoard()}
        {this.selectIndexForRenderExcerciseScoreItem()}

        <Modal
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ecf0f1",
              userSelect: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={this.state.overIndexScoreItemIsOpen}
          onRequestClose={this.closecheckOverIndexScoreItemModal}
        >
          <div>
            <p style={{ fontWeight: "bold", color: "red" }}>NHẮC NHỞ</p>
            <p style={{ fontWeight: "bold" }}>Đã hết danh sách rồi bạn ạ!!!!</p>
          </div>
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => this.closecheckOverIndexScoreItemModal()}
          >
            Đã hiểu!!!
          </button>
        </Modal>
      </div>
    );
  }
}
