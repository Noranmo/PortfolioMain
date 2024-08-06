import React from 'react'
import Image from 'next/image'
import ServiceSlider from '@/components/ServiceSlider'

const Page = () => {
	return (
		<div className='flex flex-col dm:flex-row plcae-items-center pl-28 dm:items-center gap-20 bg-[#0C011A] h-screen overflow-auto'>
			<div className='dm:pl-20 flex flex-col gap-3 pb-0 pt-60 dm:pt-0'>
				<h1 className='text-[35px] sm:text-[50px] text-white font-semibold'>
					My Skills<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[250px] xs:max-w-[300px] md:max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
					Welcome to my portfolio. I am Andrii Tynnyi, a frontend developer with
					aspirations of becoming a full stack developer. This page highlights
					the skills I use most frequently. For a comprehensive overview, please
					refer to my CV.
				</p>
			</div>
			<div className='absolute -left-10 bottom-5 rotate-12 animate-pulse duration-75'>
				<Image
					src='/assets/bulb.png'
					alt='bulb'
					width={260}
					height={260}
					className='hidden dm:block w-[128px] h-[196px]'
				/>
			</div>
			{<ServiceSlider />}
		</div>
	)
}

export default Page
