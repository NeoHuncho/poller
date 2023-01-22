import { ActionIcon, TextInput } from "@mantine/core";
import React from "react";
import { DeleteIcon } from "../../assets/icons/icons";

export default function AnswerField({
  onChange,
  key,
  value,
  onDelete,
}: IProps) {
  return (
    <TextInput
      className="-z-0"
      key={key}
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={onDelete}>
          <DeleteIcon />
        </ActionIcon>
      }
      placeholder="Type your answer here"
    />
  );
}

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  key: number;
  value: string;
  onDelete: () => void;
}
