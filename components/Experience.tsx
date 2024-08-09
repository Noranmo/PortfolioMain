import { ExperienceData } from '@/constants'
import { Button } from 'antd'
import React from 'react'

function Experience() {
	return (
		<div className='md:bottom-40 w-[80%] mdd:w-[30%] mddd:w-[40%] xlll:w-[42%] xll:w-[500px]'>
			{ExperienceData.map(item => (
				<div className='flex gap-16 mb-9 mdd:mb-0'>
					<div>
						<div className='flex flex-col gap-3 sm:gap-0 sm:flex-row mr-5'>
							<div className='grow'>
								<div className='text-white text-xl'>{item.title}</div>
								<div className='text-gray-500'>{item.period}</div>
							</div>
							<a
								href={
									'https://drive.google.com/file/d/1MmrCCdNQpUyJRMbeGAzihwhkV8Nrslrg/view?usp=sharing'
								}
								target='_blank'
							>
								<Button
									type='primary'
									className=' text-white  px-5 py-6 rounded-md bg-red-600 hover:opacity-80 ease-out duration-300'
								>
									Reference letter
								</Button>
							</a>
						</div>
						<div className='text-sm mt-4 mb-6 text-gray-400'>
							{item.description}
						</div>
						<div className='flex flex-wrap gap-2'>
							{item.technologies.map(item => (
								<div className='text-orange-500   text-sm p-1.5 bg-orange-300/20   rounded-full'>
									{item.name}
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Experience
