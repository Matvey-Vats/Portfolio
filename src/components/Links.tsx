import { BsGithub } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { SiGmail } from 'react-icons/si'

const Links = () => {
	return (
		<ul className='flex items-center justify-center gap-x-5'>
			<li>
				<a
					href='https://www.linkedin.com/in/matvii-vats-aa9b7626a/'
					target='_blank'
				>
					<LiaLinkedin size={30} />
				</a>
			</li>
			<li>
				<a href='https://github.com/Matvey-Vats' target='_blank'>
					<BsGithub size={30} />
				</a>
			</li>
			<li>
				<a href='mailto:matviyvac@gmail.com'>
					<SiGmail size={30} />
				</a>
			</li>
			<li>
				<a href='https://t.me/matvii_vats' target='_blank'>
					<FaTelegram size={30} />
				</a>
			</li>
		</ul>
	)
}

export default Links
