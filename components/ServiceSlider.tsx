'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { ServiceData } from '@/constants'

const ServiceSlider = () => {
	return (
		<div className='md:bottom-40 md:right-28 dm:right-20 w-[45%] md:w-[25%] lg:w-[30%] mddd:w-[40%] xlll:w-[45%] xll:w-[50%]'>
			<Swiper
				breakpoints={{
					1350: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1130: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					340: {
						slidesPerView: 1,
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
				modules={[Autoplay, FreeMode, Pagination]}
			>
				{ServiceData.map(item => (
					<SwiperSlide key={item.title}>
						<div className='rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounde-xl px-6 py-8 h-[230px] lg:h-[300px] w-[250-px] overflow-hidden'>
							<div
								className='absolute inset-0 bg-cover bg-center'
								style={{ backgroundImage: `url(${item.backgroundImage})` }}
							/>
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50' />
							<div className='relative flex flex-col gap-3'>
								<item.icon className='text-orange-500 group-hover:text-blue-400 w-[32px] h-[32px]' />
								<h1 className='text-lg lg:text-2xl'>{item.title}</h1>
								{/* <p className='lg:text-[18px]'>{item.content}</p> */}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ServiceSlider
