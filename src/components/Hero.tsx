import Links from './Links'

const Hero = () => {
	return (
		<section id='hero' className='py-40'>
			<div className='container flex items-center justify-center relative'>
				<div className='text-center max-w-[600px] z-10'>
					<h2 className='text-6xl font-bold mb-5'>
						Hi, i'm <strong className='text-[#00ADB5]'>Matvii Vats</strong>
					</h2>
					<p className='max-w-[400px] mx-auto mb-5'>
						Frontend Developer | Passionate about building modern and responsive
						web applications
					</p>
					<Links />
				</div>
			</div>
		</section>
	)
}

export default Hero
