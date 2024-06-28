import Image from 'next/image'
import React from 'react'

type Props = {}

const BodyRight = (props: Props) => {
  return (
    <div className='h-full w-[23.64%] border-l-[1px] px-5 py-[1.85rem] bg-[#FCFCFC] flex flex-col gap-8'>
      <div className='w-full h-fit flex items-center justify-between gap-3'>
        <button className='w-full h-[2.7rem] flex items-center justify-center gap-2 border border-[#DC4A2D] bg-[#FEF4F2] rounded-lg'>
          <Image 
            src='/delete-icon.svg'
            width={15}
            height={15}
            alt='Delete'
          />
          <p className='text-[#DC4A2D] text-sm font-medium'>Delete job</p>
        </button>

        <button className='w-full h-[2.7rem] flex items-center justify-center gap-2 border-2 bg-[#DC4A2D] border-[#FED3CA] rounded-lg'>
          <Image 
            src='/edit-icon.svg'
            width={14}
            height={14}
            alt='Delete'
          />
          <p className='text-white text-sm font-medium'>Edit job</p>
        </button>
      </div>

      <div className='px-2.5 pt-2 flex flex-col gap-5'>
        <div className='w-full flex items-center justify-between px-2.5'>
          <div className='flex items-center gap-2'>
            <Image 
              src='/applicants-icon.svg'
              width={19}
              height={19}
              alt='Applicants'
            />
            <p className='text-sm'>Applicants</p>
          </div>
          <p className='font-bold'>400</p>
        </div>

        <hr />

        <div className='w-full flex items-center justify-between px-2.5'>
          <div className='flex items-center gap-2'>
            <Image 
              src='/matches-iconc.svg'
              width={19}
              height={19}
              alt='Matches'
            />
            <p className='text-sm'>Matches</p>
          </div>
          <p className='font-bold'>100</p>
        </div>

        <hr />

        <div className='w-full flex items-center justify-between px-2.5'>
          <div className='flex items-center gap-2'>
            <Image 
              src='/messages-icon-2.svg'
              width={17}
              height={17}
              alt='Messages'
            />
            <p className='text-sm'>Messages</p>
          </div>
          <p className='font-bold'>147</p>
        </div>

        <hr />

        <div className='w-full flex items-center justify-between px-2.5'>
          <div className='flex items-center gap-2'>
            <Image 
              src='/eye-icon.svg'
              width={16}
              height={16}
              alt='Views'
            />
            <p className='text-sm'>Views</p>
          </div>
          <p className='font-bold'>800</p>
        </div>
      </div>

    </div>
  )
}

export default BodyRight