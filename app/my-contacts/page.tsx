import ContactInfo from '@/components/ContactInfo'
import Image from 'next/image'

function Page() {
	return (
		<div className='flex mdd:flex-row flex-col place-items-start pl-28 mdd:items-center gap-5 xlll:gap-20 xll:gap-56 bg-[#0C011A] h-screen overflow-auto'>
			<div className='flex flex-col pl-3 mdd:pl-40 gap-3 pt-60 mdd:pt-0'>
				<h1 className='text-[50px] text-white font-semibold'>
					Let's talk<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
					You can ask me anything here. Feel free to contact me using any of the
					methods listed on this page.
				</p>
			</div>
			<ContactInfo />
			<div className='absolute top-24 right-28 max-w-[400px] text-[12px] hidden md:block md:text-gray-400'>
				You can also reach me out via social media
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
		</div>
	)
}

export default Page
