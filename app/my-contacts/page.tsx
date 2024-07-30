import ContactInfo from '@/components/ContactInfo'
import Image from 'next/image'

function Page() {
	return (
		<div className='flex items-center gap-56 bg-[#0C011A] h-screen overflow-hidden'>
			<div className='flex flex-col pl-60 md:pl-40 gap-3'>
				<h1 className='text-[50px] text-white font-semibold'>
					Let's talk<span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
					You can ask me anything here. Feel free to contact me using any of the
					methods listed on this page.
				</p>
			</div>
			<ContactInfo />
			<div className='absolute top-24 right-28 max-w-[400px] text-[12px] text-gray-200 md:text-gray-400'>
				You can also reach me out via social media
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
		</div>
	)
}

export default Page
