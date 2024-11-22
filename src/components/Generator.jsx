import React ,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import {SCHEMES, WORKOUTS} from '../utils/workout'
import Button from './button';

function Header(props){
  const {index, title, description} = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center '>
        <p className='text-3xl sm:text-full md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {muscle,setMuscle,goals,setGoals,poison,setPoison,updateWorkout}=props
  const[showModal,setShowModal] = useState(false);
  
  function toggleModal(){
    setShowModal(!showModal)
  }
  function updateMuscles(muscleGroup)
  {
    if(muscle.includes(muscleGroup)){
      setMuscle(muscle.filter(val => val!==muscleGroup))
      return
    }
    if(muscle.length>2)
    {
      return
    }
    if(poison !=='individual')
    {
      setMuscle([muscleGroup])
      setShowModal(false)
      return
    }
    
    setMuscle([...muscle,muscleGroup]);
    if(muscle.length===2 )
    {
      setShowModal(false)
    }

  }
  return (
    <SectionWrapper header="generate your workout" title={['It\'s', 'Huge','o\'clock']}>
      <Header index={'01'} title={'Pick Your Poison'} description={'Select the workout you wish to endure.'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return (
          
            <button onClick={()=>{
              setMuscle([])
              setPoison(type)
            }} className={'bg-slate-950 border border-blue-400  py-3 px-4 rounded-lg duration-200 hover:border-blue-600 '
             + (type===poison? 'border-blue-600 ': 'border-blue-400 ')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," ")}</p>
            </button>
          
        )
      })}
      </div>
      <Header index={'02'} title={'Lock on Targets'} description={'Select the muscles to be transformed to weapon.'} />
      <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button 
        onClick={toggleModal}
        className='relative flex p-3 items-center justify-center'>
          <p className='capitalize'>{muscle.length===0 ? 'Select muscle groups' : muscle.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col'>
           {(poison==='individual' ? WORKOUTS[poison] :Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex)=>
           {
            return (
              <button
              onClick={()=>{
                updateMuscles(muscleGroup)
              }}
              key={muscleGroupIndex}
              className={'hover:text-blue-400 duration-200 '+ (muscle.includes(muscleGroup) ? ' text-blue-400': ' ')} >
                <p className='uppercase'>{muscleGroup.replaceAll('_',' ')}</p>
              </button>
            )
           })}
          </div>
        )}
      </div>
      <Header index={'03'} title={'Embody Strength itself'} description={'Select your visioned objective.'} />
      <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
        return (
          
          <button onClick={()=>{
            setGoals(scheme)
          }} className={'bg-slate-950 border border-blue-400 px-4  py-3 rounded-lg duration-200 hover:border-blue-600 '
           + (scheme===goals ? 'border-blue-600 ': 'border-blue-400 ')} key={schemeIndex}>
            <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
          </button>
          
        )
      })}
      </div>
      <Button func={updateWorkout} text="Formulate"></Button>
    </SectionWrapper>
    
  )
}
