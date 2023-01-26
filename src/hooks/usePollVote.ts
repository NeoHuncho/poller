import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '../utils/api';

const usePollVote= () => {
    const router= useRouter()
    const {pollID: pollIDParam}= router.query;
    const pollID= typeof pollIDParam==='string'? pollIDParam:'';
    const {data:pollData} = api.polls.getPoll.useQuery(pollID)
    const {data: AnswersData} = api.polls.getAnswersOfPoll.useQuery(pollID)
    const [votes, setVotes] = useState(Object.fromEntries(AnswersData?.map((answer) => [answer.id, 0]) || []));
    const addVote = (answerId: string) => {
        setVotes((prev) => ({ ...prev, [answerId]: prev[answerId] + 1 }));
    };
    const mutation= api.polls.addVote.useMutation()
    const submitVotes = () => {
        const voteEntries = Object.entries(votes);
        const votePromises = voteEntries.map(([answerId, voteCount]) => {
            return mutation.mutateAsync({pollId: pollID, answerId, voteCount})
        });
        Promise.all(votePromises).then(() => router.push(`/poll/results?pollID=${pollID}`));
    };
    return {pollData, AnswersData,addVote, submitVotes}
}
export default usePollVote;