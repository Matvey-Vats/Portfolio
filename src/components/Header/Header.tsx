import { useState } from 'react'
import CvButton from '../CvButton'
import MenuBurger from '../MenuBurger'
import ThemeToggle from '../ThemeToggle'
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className='py-5 sticky top-0 text-[#222831] dark:text-[#eeeeee] bg-[#eeeeee] dark:bg-[#222831] z-50 drop-shadow-xl transition-colors duration-300'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Logo />

					<NavBar isOpen={menuOpen} setIsOpen={setMenuOpen} />

					<div className='flex items-center gap-x-5'>
						<MenuBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
						<div className='max-md:hidden'>
							<CvButton />
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
