import { useState } from "react";
import type { Poll } from "../types/types";

export default function usePollCreation() {
  const [poll, setPoll] = useState<Poll>({
    title: "",
    answers: ["", "", "", ""],
  });
  

  const updatePollTitle = (title: string) => {
    setPoll({ ...poll, title });
  };

  const updatePollAnswer = (index: number, answer: string) => {
    const answers = [...poll.answers];
    answers[index] = answer;
    setPoll({ ...poll, answers });
  };

  const addPollAnswer = () => {
    const answers = [...poll.answers];
    answers.push("");
    setPoll({ ...poll, answers });
  };

  const deleteAnswer = (index: number) => {
    const answers = [...poll.answers];
    answers.splice(index, 1);
    setPoll({ ...poll, answers });
  };

  return {
    poll,
    updatePollTitle,
    updatePollAnswer,
    addPollAnswer,
    deleteAnswer,
  };
}
