import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout}=props
  return (
    <SectionWrapper header="welcome to" title={['The', 'Danger','Zone']}>
      <div className='felx flex-col gap-4'>
        {workout.map((exercise, i)=>{
          return (
            <ExerciseCard exercise={exercise} i={i} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>

  )
}
