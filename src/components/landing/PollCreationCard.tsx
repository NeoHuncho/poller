import { Button, Card, TextInput } from "@mantine/core";
import React from "react";
import usePollCreation from "../../hooks/usePollCreation";
import AnswerField from "../answserField/AnswerField";

export default function PollCreationCard() {
  const {
    poll,
    updatePollAnswer,
    updatePollTitle,
    addPollAnswer,
    deleteAnswer,
  } = usePollCreation();
  return (
    <Card
      color="primary"
      className="w-2/5"
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full flex-col gap-5">
          <TextInput
            value={poll.title}
            onChange={(e) => updatePollTitle(e.target.value)}
            size="lg"
            placeholder="Type your question here"
          />
          <div className=" flex flex-col gap-3">
            {poll.answers.map((answer, index) => (
              <AnswerField
                key={index}
                value={answer}
                onChange={(e) => updatePollAnswer(index, e.target.value)}
                onDelete={() => deleteAnswer(index)}
                
              />
            ))}
            <Button size="sm" color="secondary" onClick={addPollAnswer}>
              + Add a answer
            </Button>
          </div>
        </div>
        <Button color="primary" size="md" className="w-2/4">
          Create Poll
        </Button>
      </div>
    </Card>
  );
}
