import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../utils/api";

export default function usePollCreation() {
  const mutation = api.polls.createPoll.useMutation();
  const router = useRouter();

  const [poll, setPoll] = useState({
    question: "",
    answers: [
      { label: "", voteCounter: 0 },
      { label: "", voteCounter: 0 },
      { label: "", voteCounter: 0 },
    ],
  });
  const [showSettings, setShowSettings] = useState(false);
  const [loadingCreation, setLoadingCreation] = useState(false);

  const updatePollQuestion = (question: string) => {
    setPoll({ ...poll, question });
  };

  const updatePollAnswer = (index: number, label: string) => {
    const answers = [...poll.answers];
    answers[index] = { label: label, voteCounter: 0 };
    setPoll({ ...poll, answers });
  };

  const addPollAnswer = () => {
    const answers = [...poll.answers];
    answers.push({ label: "", voteCounter: 0 });
    setPoll({ ...poll, answers });
  };

  const deleteAnswer = (index: number) => {
    const answers = [...poll.answers];
    answers.splice(index, 1);
    setPoll({ ...poll, answers });
  };

  const createPoll = () => {
    setLoadingCreation(true);
    return mutation
      .mutateAsync(poll)
      .then((res) => router.push(`/poll/Results?pollID=${res.id}`))
      .catch((err) => console.log(err));
  };

  return {
    poll,
    updatePollQuestion,
    updatePollAnswer,
    addPollAnswer,
    deleteAnswer,
    createPoll,
    showSettings,
    setShowSettings,
    loadingCreation,
  };
}
