import React from 'react'
import BodyRight from './BodyRight'
import BodyLeft from './BodyLeft'

type Props = {}

const Body = (props: Props) => {
  return (
    <div className='w-full h-[calc(100%-6.1rem)] flex flex-col overflow-y-auto'>
      <div className='w-full min-h-[3.7rem] border-b-2 px-[5.45rem] flex gap-16 items-center'>
        <div className='relative h-full w-fit flex items-center justify-center'>
          <p className='text-[1.1rem] font-bold text-[#DC4A2D]'>Job preview</p>

          <div className='absolute w-[55%] h-[2px] bg-[#DC4A2D] bottom-0'/>
        </div>

        <p className='text-[1.1rem] font-medium text-[#888888]'>Applicants</p>
        <p className='text-[1.1rem] font-medium text-[#888888]'>Match</p>
        <p className='text-[1.1rem] font-medium text-[#888888]'>Messages</p>

      </div>

      <div className='w-full h-full flex'>
        <BodyLeft />

        <BodyRight />
      </div>
    </div>
  )
}

export default Body