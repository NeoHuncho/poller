import { Title } from "@mantine/core";
import React from "react";

export default function TitleSection() {
  return (
    <div className="flex flex-col items-center gap-1">
      <Title order={1}>Poller 🗳️</Title>
      <Title order={6}>Create polls, for free.</Title>
    </div>
  );
}
