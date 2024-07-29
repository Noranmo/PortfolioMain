import ProjectSlider from '@/components/ProjectSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
	return (
		<div className='flex items-center gap-56 flex-col md:flex-row h-screen bg-[#0C011A]'>
			<div className='flex flex-col pl-60 md:pl-40 gap-3'>
				<h1 className='text-[50px] text-white font-semibold'>
					My Work<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
					This is where my portfolio is located. As I work on projects, I will
					be adding to it. Each project has its own page on GitHub.
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
			<ProjectSlider />
		</div>
	)
}

export default Page
