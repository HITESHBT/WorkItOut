import React from 'react'
import Button from './button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px]
    w-full mx-auto'>
      <div className='flex flex-col gp-4'>
      <p>IT'S TIME TO</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl '>Work<span className='text-blue-400'>ItOut</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may get addicted to <span className='text-blue-400 font-medium'>working out</span>,
        and inculcating a <span className='text-blue-400 font-medium'>healthy habit</span> of working out daily,
        so I can live a long healthy life.
      </p>
      <Button text={"Accept & Begin"}></Button>
    </div>
  )
}
