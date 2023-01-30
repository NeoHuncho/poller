import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

const usePollVote = () => {
  const router = useRouter();
  const { pollID: pollIDParam } = router.query;
  const pollID = typeof pollIDParam === "string" ? pollIDParam : "";

  const { data: pollData } = api.polls.getPoll.useQuery(pollID);
  const { data: answersData } = api.polls.getAnswersOfPoll.useQuery(pollID);
  const mutation = api.polls.addVotes.useMutation();

  const [votes, setVotes] = useState<{ answerID: string; vote: boolean }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (answersData && !votes.length) {
      const votes = answersData.map((answer) => ({
        answerID: answer.id,
        vote: false,
      }));
      setVotes(votes);
    }
  }, [answersData]);

  const addVote = (id: string, vote: boolean) => {
    const votesCopy = [...votes];
    console.log(0, votesCopy, vote);
    const index = votesCopy.findIndex((vote) => vote.answerID === id);
    votesCopy[index] = { answerID: id, vote };
    console.log(1, votesCopy, vote);
    setVotes(votesCopy);
  };

  const submitVotes = () => {
    setLoading(true);
    return mutation
      .mutateAsync({
        votes,
      })
      .then(() => router.push(`/poll/Results?pollID=${pollID}`))
      .catch((err) => console.log(err));
  };
  return { pollData, answersData, addVote, submitVotes, loading };
};
export default usePollVote;
