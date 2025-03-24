const NavBar = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}) => {
	const handleClick = () => setIsOpen(false)

	return (
		<nav>
			<ul
				className={`md:flex items-center bg-[#eeeeee] dark:bg-[#222831] gap-x-5 md:static absolute md:p-0 p-5 transition-all duration-300 ${
					isOpen ? 'top-20 left-0 w-full' : 'top-[-300px] left-0 w-full'
				}`}
			>
				<li className='relative group'>
					<a href='#hero' className='block py-2' onClick={handleClick}>
						Home
						<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#222831] dark:bg-white transition-all duration-300 group-hover:w-full'></span>
					</a>
				</li>
				<li className='relative group'>
					<a href='#projects' className='block py-2' onClick={handleClick}>
						Projects
						<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#222831] dark:bg-white transition-all duration-300 group-hover:w-full'></span>
					</a>
				</li>
				<li className='relative group'>
					<a href='#about' className='block py-2' onClick={handleClick}>
						About me
						<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#222831] dark:bg-white transition-all duration-300 group-hover:w-full'></span>
					</a>
				</li>

				<li className='relative group'>
					<a href='#contact' className='block py-2' onClick={handleClick}>
						Contact
						<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#222831] dark:bg-white transition-all duration-300 group-hover:w-full'></span>
					</a>
				</li>
				{/* <li className='md:hidden'>
					<CvButton />
				</li> */}
			</ul>
		</nav>
	)
}

export default NavBar
