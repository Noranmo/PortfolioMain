import React from 'react'

import '../style/contactInfo.css'
import mail from '../public/assets/icons/mail.svg'
import contactLink from '../public/assets/icons/contactLink.svg'
import Image from 'next/image'

function ContactInfo() {
	return (
		<div className='w-[250px] mdd:w-[800px] text-[16px] mt-32 text-gray-200 md:text-gray-400'>
			<div className='mainPage__getintouch getintouch getintouch__contact'>
				<div className='getintouch__container _container'>
					<div className='getintouch__items'>
						<div className='getintouch__item item-getintouch'>
							<div className='item-getintouch__icon'>
								<Image src={contactLink} alt='contactLink' />
							</div>
							<div className='item-getintouch__emails'>
								<div className='item-getintouch__email email_color'>
									Find me on LinkedIn
								</div>
							</div>
							<a
								href='https://www.linkedin.com/in/andrii-tynnyi-a6612021b/'
								className='item-getintouch__button'
								target='_blank'
							>
								Write to me
							</a>
						</div>
						<div className='getintouch__item item-getintouch item-getintouch_active'>
							<div className='item-getintouch__icon'>
								<Image src={mail} alt='mail' />
							</div>
							<div className='item-getintouch__emails'>
								<div className='item-getintouch__email'>My email adress</div>
							</div>
							<a
								href='mailto:andreytinniy@gmail.com'
								className='item-getintouch__button'
								target='_blank'
							>
								Write to me
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactInfo
