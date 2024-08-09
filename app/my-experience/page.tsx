import Experience from '@/components/Experience'
import Image from 'next/image'

function Page() {
	return (
		<div className='flex mdd:flex-row flex-col place-items-start pl-28 mdd:items-center gap-14 xlll:gap-32 xll:gap-56 bg-[#0C011A] h-screen overflow-auto'>
			<div className='flex flex-col pl-0 mdd:pl-20 gap-3 pt-36 mdd:pt-0'>
				<h1 className='text-[40px] text-white font-semibold'>
					Experience<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
					This section showcases my professional journey, detailing the
					positions I’ve held and the technologies I’ve mastered.
				</p>
			</div>
			<Experience />
			<div className='absolute -left-10 bottom-5 rotate-12 animate-pulse duration-75'>
				<Image
					src='/assets/bulb.png'
					alt='bulb'
					width={260}
					height={260}
					className='hidden mddd:block w-[128px] h-[196px]'
				/>
			</div>
		</div>
	)
}

export default Page
