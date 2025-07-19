import '../style/gitBtn.css'

function BtnGitHub({ link, webPageLink }: any) {
	const href = link || webPageLink
	const buttonText = link ? 'GitHub repo' : 'Go to Webpage'

	// Don't render if neither link is available
	if (!href) return null
	return (
		<a
			href={href}
			className='btn-outline border-solid border-2 border-orange-600'
			target='_blank'
			rel='noreferrer'
		>
			{buttonText}
		</a>
	)
}

export default BtnGitHub
