import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

import '../style/navigation.css'
import fox from '../public/assets/icons/fox_logo.svg'

const Navbar = () => {
	return (
		<div className='fixed top-0 bg-transparent z-[20] w-full flex flex-col xs:flex-row gap-5 md:justify-between md:px-40 p-5'>
			<Link key={'Logo_link'} href={'/'}>
				<h1 className='flex text-white text-[45px]'>
					<Image
						key={'fox_logo'}
						src={fox}
						alt='fox_logo'
						width={55}
						height={55}
						className='fox_logo'
					/>
					Tynnyi <span className='font-thin pl-2'>Andrii</span>
					<span className='text-red-500'>.</span>
				</h1>
			</Link>
			<div className='flex flex-row  gap-5 xs:p-5'>
				{Socials.map(social => (
					<>
						<Link key={social.name} href={social.link} target='_blank'>
							<Image
								id={social.name}
								key={social.id}
								src={social.src}
								alt={social.name}
								width={24}
								height={24}
								className='navbar'
							/>
						</Link>
					</>
				))}
			</div>
		</div>
	)
}

export default Navbar
