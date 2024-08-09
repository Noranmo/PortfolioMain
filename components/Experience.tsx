import { ExperienceData } from '@/constants'
import React from 'react'

function Experience() {
	return (
		<div className='md:bottom-40 w-[80%] mdd:w-[30%] mddd:w-[40%] xlll:w-[42%] xll:w-[500px]'>
			{ExperienceData.map(item => (
				<div className='flex gap-16 mb-9 mdd:mb-0'>
					<div>
						<div className='text-white text-xl'>{item.title}</div>
						<div className='text-gray-500'>{item.period}</div>
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
