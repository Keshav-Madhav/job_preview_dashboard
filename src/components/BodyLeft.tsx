import Image from 'next/image'

const BodyLeft = () => {
  return (
    <div className='h-fit w-[76.4%] border-r-[1px] flex flex-col'>
      <div className='w-full min-h-[9.26rem] border-b-[2px] px-[5.45rem] flex flex-col items-start justify-center gap-5 pt-2'>
        <div className='flex items-center gap-2.5'> 
          <p className='text-3xl font-bold text-[#3D3D3D] tracking-[0.2px] pl-[1px]'>Senior Product Designer</p>

          <div className='h-[4px] w-[4px] rounded-full bg-[#D1D1D1] mb-0.5'/>

          <p className='text-xs text-[#888888] font-medium tracking-[-0.1px]'>posted 2 days ago</p>

          <div className='px-1.5 h-5 mb-[2px] flex items-center justify-center gap-1 rounded-full border border-[#ABEFC6] bg-[#ECFDF3]'>
            <div className='min-h-[6px] min-w-[6px] rounded-full bg-[#17B26A]'/>
            <p className='text-[#067647] text-[0.68rem] font-medium'>Open</p>
          </div>
        </div>

        <div className='pt-1 px-1 flex gap-4 items-center'>
          <div className='flex gap-2.5 items-center'>
            <Image 
              src='/location-icon.svg'
              width={16}
              height={16}
              alt='Location'
              className='pb-0.5'
            />
            <p className='text-[1.1rem] font-medium text-[#5D5D5D] tracking-tight'>Delaware, USA</p>
          </div>

          <div className='h-[4px] w-[4px] rounded-full bg-[#D1D1D1] mb-0.5'/>

          <div className='flex gap-2.5 items-center'>
            <Image 
              src='/money-icon.svg'
              width={20}
              height={20}
              alt='Location'
              className='pb-0.5'
            />
            <p className='text-[1rem] font-medium text-[#5D5D5D] tracking-tight'>$300K-$400K</p>
          </div>
        </div>
      </div>

      <div className='w-full min-h-[10rem] border-b-[2px] px-[5.5rem] flex items-center justify-start gap-5 pt-2'>
        <div className='w-[11.8rem] h-[6.8rem] flex flex-col gap-1.5 pb-2'>
          <p className='mb-0.5 text-xs text-[#6E6D6D] font-medium'>Skills Required</p>

          <div className='w-fit px-1 py-0.5 flex items-center justify-start gap-1 rounded-md border'>
            <Image 
              src='/figma-icon.png'
              width={14}
              height={14}
              alt='Figma'
            />
            <p className='text-[0.65rem] text-[#344054] font-medium'>Figma</p>
          </div>

          <div className='w-fit px-1 py-0.5 flex items-center justify-start gap-1 rounded-md border'>
            <Image 
              src='/illustrator-icon.png'
              width={14}
              height={14}
              alt='Figma'
            />
            <p className='text-[0.65rem] text-[#344054] font-medium'>Adobe Illustrator</p>
          </div>

          <div className='w-fit px-1 py-0.5 flex items-center justify-start gap-1 rounded-md border'>
            <Image 
              src='/xd-icon.png'
              width={14}
              height={14}
              alt='Figma'
            />
            <p className='text-[0.65rem] text-[#344054] font-medium'>Adobe XD</p>
          </div>
        </div>

        <div className='w-[11.8rem] h-[7rem] flex flex-col gap-1.5 pb-1.5'>
          <p className='mb-0.5 text-xs text-[#6E6D6D] font-medium'>Preferred Language</p>

          <p className='text-sm font-bold text-[#3D3D3D]'>English</p>
        </div>

        <div className='w-[11.8rem] h-[7rem] flex flex-col gap-1.5 pb-1.5'>
          <p className='mb-0.5 text-xs text-[#6E6D6D] font-medium'>Type</p>

          <p className='text-sm font-bold text-[#3D3D3D]'>Full time</p>
        </div>

        <div className='w-[11.8rem] h-[7rem] flex flex-col gap-1.5 pb-1.5'>
          <p className='mb-0.5 text-xs text-[#6E6D6D] font-medium'>Years of Experience</p>

          <p className='text-sm font-bold text-[#3D3D3D]'>3+ Years of Experience</p>
        </div>
      </div>

      <div className='w-full min-h-[26rem] border-b-[2px] px-[5.4rem] flex items-start justify-start flex-col gap-1 pt-[1.8rem]'>
        <p className='text-xs text-[#6E6D6D] font-medium px-[0.1rem]'>About the job</p>

        <ol className='flex flex-col gap-1 mt-1'>
          <li className='text-[#3D3D3D] text-sm font-medium list-decimal list-inside'>Handle the UI/UX research design</li>
          <li className='text-[#3D3D3D] text-sm font-medium list-decimal list-inside'>Work on researching on latest web applications designs & trends</li>
          <li className='text-[#3D3D3D] text-sm font-medium list-decimal list-inside'>Work on conceptualizing and visualizing</li>
          <li className='text-[#3D3D3D] text-sm font-medium list-decimal list-inside'>Work on creating graphics content and other graphic related works</li>
        </ol>

        <p className='text-[#3D3D3D] text-sm font-medium'>Benefits</p>

        <ul className='flex flex-col gap-1 mt-1 pl-2'>
          <li className='text-[#3D3D3D] text-sm font-medium list-disc list-inside'>Health insurance</li>
          <li className='text-[#3D3D3D] text-sm font-medium list-disc list-inside'>Provident Fund</li>
        </ul>

        <p className='text-[#3D3D3D] text-sm font-medium'>Schedule</p>

        <ul className='flex flex-col gap-1 mt-1 pl-2'>
          <li className='text-[#3D3D3D] text-sm font-medium list-disc list-inside'>Day Shift</li>
        </ul>

        <p className='text-[#3D3D3D] text-sm font-medium'>Supplemental pay types:</p>

        <ul className='flex flex-col gap-1 mt-1 pl-2'>
          <li className='text-[#3D3D3D] text-sm font-medium list-disc list-inside'>Performance Bonus</li>
          <li className='text-[#3D3D3D] text-sm font-medium list-disc list-inside'>Yearly Bonus</li>
        </ul>

        <p className='text-[#3D3D3D] text-sm font-medium'>Work Location: In person</p>
      </div>

      <div className='w-full min-h-[18.8rem] border-b-[2px] px-[5.6rem] flex flex-col gap-6 pt-[2.3rem]'>
        <div className='flex gap-3 items-center'>
          <Image
            src='/atlassian-logo.png'
            width={35}
            height={35}
            alt='Atlassian'
          />
          <p className='text-lg text-[#4F4F4F] font-medium'>Atlassian</p>
        </div>

        <div className='w-fit h-full grid grid-cols-2 grid-rows-3 gap-x-7 gap-y-5'>
          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Company Size</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>1k - 2k Employees</p>
          </div>

          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Type</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>Private</p>
          </div>

          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Sector</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>Information Technology, Infrastructure</p>
          </div>

          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Funding</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>Bootstrapped</p>
          </div>

          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Founded in</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>2019</p>
          </div>

          <div className='flex flex-col gap-1.5 w-[20rem]'>
            <p className='text-xs font-medium text-[#6E6D6D]'>Founded By</p>
            <p className='text-sm font-medium text-[#3D3D3D]'>Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyLeft