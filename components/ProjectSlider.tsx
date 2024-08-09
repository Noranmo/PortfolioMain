'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { ProImages, ProImages2 } from '@/constants'
import Image from 'next/image'

import '../style/sviper.css'

const ProjectSlider = () => {
	return (
		<div className='w-[70%] mddd:w-[500px] xll:w-[500px]'>
			<Swiper
				breakpoints={{
					700: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					1130: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
				}}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				// Autoplay
				modules={[Autoplay, FreeMode, Pagination]}
			>
				<SwiperSlide className=''>
					<div className='swiper_grid gap-3 rounded-md cursor-pointer flex flex-col mb-10 relative text-white shadow-lg rounde-xl'>
						{ProImages.map(image => (
							<div
								className='relative group w-[230px] h-[230px]'
								key={image.src}
							>
								{' '}
								<Image
									src={image.src}
									alt='project image'
									width={280}
									height={280}
									className='rounded-md h-full w-full object-cover'
								/>
								<a href={`/project-page?${image.id}`}>
									<div className='cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200' />
									<div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg'>
										{image.title}
										<Image
											src='/assets/icons/arrow-right.svg'
											alt='arrow right'
											width={20}
											height={20}
											className='invert brightness-0 ml-2'
										/>
									</div>
								</a>
							</div>
						))}
					</div>
				</SwiperSlide>
				{/* <SwiperSlide className='mb-14'>
					<div className='grid grid-cols-2 gap-4 md:px-16'>
						{ProImages2.map(image => (
							<div
								className='relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]'
								key={image.src}
							>
								<Image
									src={image.src}
									alt='project image'
									width={280}
									height={280}
									className='rounded-md w-full h-full object-cover'
								/>

								<div className='cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200' />
								<div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg'>
									{image.title}
									<Image
										src='/assets/icons/arrow-right.svg'
										alt='arrow right'
										width={20}
										height={20}
										className='invert brightness-0 ml-2'
									/>
								</div>
							</div>
						))}
					</div>
				</SwiperSlide> */}
			</Swiper>
		</div>
	)
}

export default ProjectSlider
