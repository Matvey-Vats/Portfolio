import { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
			? 'dark'
			: 'light'
	)

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [theme])

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='cursor-pointer'
		>
			{theme === 'dark' ? (
				<IoSunnyOutline size={30} />
			) : (
				<IoMoonOutline size={30} />
			)}
		</button>
	)
}

export default ThemeToggle
