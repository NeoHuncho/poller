import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

const PollSchema = z.object({
    question: z.string(),
    answers: z.array(z.object({
        label: z.string(),
    }))
  });

export const pollRouter = createTRPCRouter({
    createPoll: publicProcedure.input(PollSchema).mutation(({ ctx, input }) => {
        return ctx.prisma.poll.create({
            data: {
                question: input.question,
                answers: {
                    create: input.answers.map((answer) => ({ label: answer.label, voteCounter: 0 } ))
                }
            }
        })
    }),
  getPoll: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.poll.findUnique({
      where: {
        id: input,
      },
    });
    }),
    getAnswersOfPoll: publicProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.pollAnswer.findMany({
            where: {
                pollId: input
            }
        })
    }),
    addVote: publicProcedure.input(z.object({
        pollId: z.string(),
        answerId: z.string()
    })).mutation(({ ctx, input }) => {
        return ctx.prisma.pollAnswer.update({
            where: {
                id: input.answerId
            },
            data: {
                voteCounter: {
                    increment: 1
                }
            }
        })
    }
    )
    
    
    

});

