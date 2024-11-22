import React from 'react'

export default function Button(props) {
    const {text,func}=props
  return (
    <button onClick={func} className='px-8 py-4 mx-auto rounded-md border-blue-400 border-2 border-solid bg-slate-950 blueShadow duration-200 p-4'>
        <p>{text}</p>
        </button>
  )
}
