import { Button, Loader, Progress } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import useResults from "../../hooks/useResults";

export default function Results() {
  const clipboard = useClipboard({ timeout: 500 });
  const { pollData, answersData, getTotalVotes } = useResults();
  const totalVotes = getTotalVotes();
  const onShare = () => {
    pollData?.id &&
      clipboard.copy(
        `https://poller-4cvznffod-neohuncho.vercel.app/poll/Vote?pollID=${pollData?.id}`
      );
  };
  return (
    <div className="flex min-h-screen flex-col items-center bg-landing-pattern bg-cover bg-fixed bg-center bg-no-repeat pt-5 ">
      <Button color="primary" onClick={onShare}>
        Share the voting link
      </Button>
      <h1>{pollData?.question}</h1>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {answersData ? (
          answersData.map((answer) => {
            return (
              <div key={answer.id} className="flex w-32 flex-col">
                <h4 className="m-0 mb-3 text-center">{answer.label}</h4>
                <Progress
                  color={"secondary"}
                  value={
                    (answer.voteCounter / totalVotes ? totalVotes : 1) * 100
                  }
                />
                <p className="m-2 text-center">
                  Vote Count:{answer.voteCounter}
                </p>
              </div>
            );
          })
        ) : (
          <Loader color={"primary"} />
        )}
      </div>
    </div>
  );
}
