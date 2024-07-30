'use client'

import Particle from '@/components/Particle'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import '../style/projectItem.css'

export default function Home() {
	return (
		<main className="flex overflow-hidden items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
			<DotsAnimation />
			<MoustacheMan />
			<TopLeftImage />
			<HomeInfoTogether />
		</main>
	)
}

function HomeInfoTogether() {
	return (
		<div className='flex flex-col gap-3 z-[10] pl-40 pt-40 '>
			<h1 className='text-[35px] sm:text-[50px] text-white max-w-[300px] sm:max-w-[370px] md:max-w-[700px]'>
				Hi, my name is Andrii {''}
				<span className='text-red-500'>Frontend developer</span>
			</h1>
			<p className='text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[250px] sm:max-w-[400px] '>
				with passion for learning and creating.
			</p>
			<div className=' w-[200px] h-[300px] md:w-[160px] md:h-[300px] mt-1'>
				<DownloadCv />
				<RunningText />
			</div>
		</div>
	)
}

function RunningText() {
	return (
		<Link key={'Projects'} href={'/my-projects'}>
			<Image
				src='/assets/rounded-text.png'
				alt='/my-projects'
				width={160}
				height={160}
				className='slow-spin mt-16 '
			/>
		</Link>
	)
}

function DownloadCv() {
	return (
		<a
			href={
				'https://drive.google.com/file/d/14h8h27CqDb6tXHw9rt47Mz2iIiVEZrqI/view?usp=sharing'
			}
			target='_blank'
		>
			<Button
				type='primary'
				// key={'CV_for_download'}
				// href={'../public/assets/cv/CV_Andrii_Tynnyi.pdf'}
				className='z-[30] text-white h-12 px-7 py-5 rounded-md bg-red-600 hover:opacity-80 ease-out duration-300'
			>
				Download CV
			</Button>
		</a>
	)
}

function MoustacheMan() {
	return (
		<div className='absolute -right- sm:right-10 md:right-50 mdd:right-40 bottom-0 z-[10]'>
			<Image
				src='/assets/me.png'
				alt='MoustacheMan'
				width={480}
				height={480}
				className='w-[300px] h-[300px] z-[1] md:h-[400px] md:w-[400px] mdd:h-[480px] mdd:w-[480px]'
			/>
		</div>
	)
}

function TopLeftImage() {
	return (
		<Image
			src='/assets/top-left-img.png'
			alt='paint'
			width={230}
			height={230}
			className='absolute left-0 top-0'
		/>
	)
}

function DotsAnimation() {
	return (
		<div className='absolute right-0 top-0 h-full w-[80%] z-[2]'>
			<Particle />
		</div>
	)
}
