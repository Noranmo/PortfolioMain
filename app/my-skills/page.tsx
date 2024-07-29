import React from 'react'
import Image from 'next/image'
import ServiceSlider from '@/components/ServiceSlider'

const Page = () => {
	return (
		<div className='flex items-center bg-[#0C011A] h-screen overflow-hidden'>
			<div className='pl-60 md:pl-40 flex flex-col gap-3 pb-60 md:pb-0'>
				<h1 className='text-[50px] text-white font-semibold'>
					My Skills<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
					To begin with, I would like to introduce myself. My name is Andrii
					Tynnyi and I'm a frontend developer on the way to becoming a full
					stack developer. This is the skillset I use most often. You can see
					the full set in my CV.
				</p>
			</div>
			<div className='absolute -left-10 bottom-5 rotate-12 animate-pulse duration-75'>
				<Image
					src='/assets/bulb.png'
					alt='bulb'
					width={260}
					height={260}
					className='w-full h-full md:block'
				/>
			</div>
			{<ServiceSlider />}
		</div>
	)
}

export default Page
