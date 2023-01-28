import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

const PollSchema = z.object({
  question: z.string(),
  answers: z.array(
    z.object({
      label: z.string(),
    })
  ),
});

export const pollRouter = createTRPCRouter({
  createPoll: publicProcedure.input(PollSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.poll.create({
      data: {
        question: input.question,
        answers: {
          create: input.answers.map((answer) => ({
            label: answer.label,
            voteCounter: 0,
          })),
        },
      },
    });
  }),
  getPoll: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.poll.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getAnswersOfPoll: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.prisma.pollAnswer.findMany({
        where: {
          pollId: input,
        },
      });
    }),
  addVotes: publicProcedure
    .input(
      z.object({
        votes: z.array(
          z.object({
            answerID: z.string(),
            vote: z.boolean(),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      const { votes } = input;
      console.log(votes);
      const filteredVotes = votes.filter((vote) => vote.vote);
      ctx.prisma.pollAnswer
        .updateMany({
          where: {
            id: {
              in: filteredVotes.map((vote) => vote.answerID),
            },
          },
          data: {
            voteCounter: {
              increment: 1,
            },
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }),
});
