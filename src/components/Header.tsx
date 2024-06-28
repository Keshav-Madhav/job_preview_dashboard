import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full h-[6.1rem] border-b-[1px] flex justify-between px-9 items-center'>
      <div className='w-[6rem]'>
        <div className='w-[5.5rem] h-[3.2rem] bg-[#E7E7E7] flex items-center justify-center'>
          <p className='text-[#DC4A2D] font-semibold text-lg'>Logo</p>
        </div>
      </div>

      <div className='w-[30rem] h-[4rem] px-2 py-1.5 rounded-full flex justify-between items-center border-[0.5px] border-[#D1D1D1]'>
        <div className='h-full px-3 rounded-full bg-[#DC4A2D] border-2 border-[#FCB4A5] flex items-center justify-center gap-1.5'>
          <Image 
            src='/jobs-icon.svg'
            width={21}
            height={21}
            alt='Jobs'
          />
          <p className='text-lg text-white '>Jobs</p>
        </div>

        <div className='px-3 flex items-center justify-center gap-1.5'>
          <Image 
            src='/messages-icon.svg'
            width={21}
            height={21}
            alt='Message'
          />
          <p className='text-lg text-[#B0B0B0]'>Messages</p>
        </div>

        <div className='px-3 flex items-center justify-center gap-1.5'>
          <Image 
            src='/payments-icon.svg'
            width={21}
            height={21}
            alt='Payments'
          />
          <p className='text-lg text-[#B0B0B0]'>Payments</p>
        </div>
      </div>

      <div className='w-[6rem] flex items-center justify-between'>
        <Image 
          src='/notif-icon.svg'
          width={30}
          height={30}
          alt='Notification'
        />

        <Image 
          src='/profile-icon.png'
          width={35}
          height={35}
          alt='Profile'
          className='ml-0.5'
        />

        <Image 
          src='/donw-icon.svg'
          width={10}
          height={10}
          alt='Down'
        />
      </div>
    </header>
  )
}

export default Header