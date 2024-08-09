'use client'
import BtnGitHub from '@/components/BtnGitHub'
import { ProImages, ProImages2 } from '@/constants/index'
import Image from 'next/image'
import React from 'react'
import '../style/projectItem.css'

const Content = () => {
	if (typeof window !== 'undefined') {
		const url = window.location.href
		const urlSplit = url.split('?')
		const id = urlSplit[1]
		const newId = parseInt(id)
		let project1 = ProImages[newId]

		return (
			<main className='section h-screen '>
				<div className='container'>
					<div className='project-details mb-10'>
						<h1 className='title-1'>{project1.title}</h1>
						<Image
							src={project1.bigImage}
							alt={project1.title}
							className='project-details__cover'
						/>

						<div className='project-details__desc pl-4 pr-4 xs:pl-0 xs:pr-0'>
							<p>Skills: {project1.skills}</p>
						</div>

						<BtnGitHub link={project1.githubLink} />
					</div>
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
			</main>
		)
	}
}

export default Content
