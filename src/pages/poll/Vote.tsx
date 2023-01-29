import { Button, Checkbox } from "@mantine/core";
import React from "react";
import usePollVote from "../../hooks/usePollVote";

export default function PollVote() {
  const { answersData, pollData, addVote, submitVotes } = usePollVote();

  return (
    <div className="flex min-h-screen flex-col items-center bg-landing-pattern bg-cover bg-fixed bg-center bg-no-repeat pt-5">
      <h1>{pollData?.question}</h1>
      <div className="flex flex-col gap-5">
        {answersData?.map((answer) => {
          return (
            <Checkbox
              key={answer.id}
              label={answer.label}
              onChange={(event) =>
                addVote(answer.id, event.currentTarget.checked)
              }
            />
          );
        })}
        <Button color="primary" onClick={submitVotes}>
          Submit
        </Button>
      </div>
    </div>
  );
}
