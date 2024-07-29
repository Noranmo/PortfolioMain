import '../style/gitBtn.css'

function BtnGitHub({ link }: any) {
	return (
		<a
			href={link}
			className='btn-outline border-solid border-2 border-orange-600'
			target='_blank'
			rel='noreferrer'
		>
			GitHub repo
		</a>
	)
}

export default BtnGitHub
