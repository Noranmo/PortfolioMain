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
			<main className='section'>
				<div className='container'>
					<div className='project-details'>
						<h1 className='title-1'>{project1.title}</h1>
						<Image
							src={project1.bigImage}
							alt={project1.title}
							className='project-details__cover'
						/>

						<div className='project-details__desc'>
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
						className='w-full h-full md:block'
					/>
				</div>
			</main>
		)
	}
}

export default Content
