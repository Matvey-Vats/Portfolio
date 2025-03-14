import Logo from './Header/Logo'
import Links from './Links'

const Footer = () => {
	return (
		<footer className='dark:bg-[#393E46] border-t-2 border-t-[#393E46] py-10'>
			<div className='container'>
				<div className='flex items-center justify-between pb-5 border-b-1 border-b-[#EEEEEE]'>
					<Logo />
					<Links />
				</div>
				<div className='mt-10 flex flex-wrap items-start gap-x-10 gap-y-5'>
					<div>
						<h5 className='text-xl font-bold mb-5'>Navigation</h5>
						<ul className='flex flex-col items-start'>
							<li className='relative group'>
								<a href='#hero' className='block pb-2'>
									Home
									<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
								</a>
							</li>
							<li className='relative group'>
								<a href='#projects' className='block pb-2'>
									Projects
									<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
								</a>
							</li>
							<li className='relative group'>
								<a href='#about' className='block pb-2'>
									About me
									<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
								</a>
							</li>

							<li className='relative group'>
								<a href='#contact' className='block pb-2'>
									Contact
									<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h5 className='text-xl font-bold mb-5'>Contacts</h5>
						<ul>
							<li>
								<strong>Email:</strong> matviyvac@gmail.com
							</li>
							<li>
								<strong>Location:</strong> Spain, Murcia
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
