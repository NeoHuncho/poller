import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

const useResults = () => {
  const router = useRouter();
  const { pollID: pollIDParam } = router.query;
  const pollID = typeof pollIDParam === "string" ? pollIDParam : "";

  const { data: pollData } = api.polls.getPoll.useQuery(pollID);
  const { data: answersData } = api.polls.getAnswersOfPoll.useQuery(pollID);
  const getTotalVotes = () => {
    if (answersData) {
      return answersData.reduce((acc, answer) => acc + answer.voteCounter, 0);
    }
    return 0;
  };
  return { pollData, answersData,getTotalVotes };
};
export default useResults;
