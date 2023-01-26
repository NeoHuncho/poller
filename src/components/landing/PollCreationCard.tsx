import { Button, Card, TextInput } from "@mantine/core";
import React from "react";
import { CreateIcon, SettingsIcon } from "../../assets/icons/icons";
import usePollCreation from "../../hooks/usePollCreation";

import AnswerField from "../answserField/AnswerField";

export default function PollCreationCard() {
  const {
    poll,
    updatePollAnswer,
    updatePollQuestion,
    addPollAnswer,
    deleteAnswer,
    createPoll
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
            value={poll.question}
            onChange={(e) => updatePollQuestion(e.target.value)}
            size="lg"
            placeholder="Type your question here"
          />
          <div className=" flex flex-col gap-3">
            {poll.answers.map((answer, index) => (
              <AnswerField
                key={index}
                value={answer.label}
                onChange={(e) => updatePollAnswer(index, e.target.value)}
                onDelete={() => deleteAnswer(index)}
                
              />
            ))}
            <Button size="sm" color="secondary" onClick={addPollAnswer}>
              + Add a answer
            </Button>
          </div>
        </div>
        <div className="flex gap-3 w-full">
        <Button rightIcon={<SettingsIcon  size={25}/>} variant="outline" color="primary" size="md" className="w-full">
          Settings
        </Button>
        <Button rightIcon={<CreateIcon  size={25}/>}  onClick={createPoll}  color="primary" size="md" className="w-full">
          Create 
        </Button>
        </div>
      </div>
    </Card>
  );
}
