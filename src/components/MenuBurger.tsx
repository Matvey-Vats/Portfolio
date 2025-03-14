import { BiMenu } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

const MenuBurger = ({
	menuOpen,
	setMenuOpen,
}: {
	menuOpen: boolean
	setMenuOpen: (value: boolean) => void
}) => {
	const handleToggle = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<button
			onClick={handleToggle}
			className='md:hidden text-[#222831] dark:text-[#eeeeee] focus:outline-none cursor-pointer relative z-50'
		>
			{menuOpen ? <IoCloseOutline size={30} /> : <BiMenu size={30} />}
			{/* <div
				className={`w-6 h-0.5 bg-[#222831] dark:bg-[#eeeeee] mb-1 transition-all duration-300 ${
					menuOpen ? 'rotate-45 translate-y-1' : ''
				}`}
			></div>
			<div
				className={`w-6 h-0.5 bg-[#222831] dark:bg-[#eeeeee] mb-1 transition-all duration-300 ${
					menuOpen ? 'opacity-0' : 'opacity-100'
				}`}
			></div>
			<div
				className={`w-6 h-0.5 bg-[#222831] dark:bg-[#eeeeee] mb-1 transition-all duration-300 ${
					menuOpen ? '-rotate-45 -translate-y-1' : ''
				}`}
			></div> */}
		</button>
	)
}

export default MenuBurger
