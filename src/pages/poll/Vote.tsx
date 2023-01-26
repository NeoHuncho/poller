import { Button, Checkbox } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react'
import usePollVote from '../../hooks/usePollVote';

export default function PollVote() {
  const {AnswersData,pollData,addVote,submitVotes} = usePollVote()
  
   return (
    <div className='flex min-h-screen flex-col items-center '>
      <h1>{pollData?.question}</h1>
      <div  className='flex flex-col gap-5'>
      {AnswersData?.map((answer, index) => (
          <Checkbox key={answer.id}  label={answer.label} onChange={(event)=>{addVote(answer.id)}}/>
          ))}
          <Button color='primary' onClick={updateVotes}>Submit</Button>
          </div>
      </div>
  )
}
