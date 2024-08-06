import ProjectSlider from '@/components/ProjectSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
	return (
		<div className='flex flex-col mddd:flex-row place-items-start pl-44 mddd:items-center gap-20 mddd:gap-10 xll:gap-56 h-screen bg-[#0C011A] overflow-auto'>
			<div className='flex flex-col pl-3 gap-3 pt-60 mddd:pt-0'>
				<h1 className='text-[35px] sm:text-[50px] text-white font-semibold'>
					Recent Work<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[250px] xs:max-w-[300px] md:max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
					This is where my portfolio is located. As I work on new projects, I
					will update this page and add them here. Each project has its own page
					on GitHub.
				</p>
			</div>
			<div className='absolute -left-10 bottom-5 rotate-12 animate-pulse duration-75'>
				<Image
					src='/assets/bulb.png'
					alt='bulb'
					width={260}
					height={260}
					className='hidden mddd:block w-[128px] h-[196px]'
				/>
			</div>
			{<ProjectSlider />}
		</div>
	)
}

export default Page
