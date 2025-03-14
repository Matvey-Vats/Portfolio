import { Toaster } from 'react-hot-toast'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
	return (
		<>
			<Header />
			<Toaster position='top-center' />
			<main>
				<Hero />
				<Services />
				<Projects />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
