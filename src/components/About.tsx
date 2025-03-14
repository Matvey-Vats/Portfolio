import CvButton from './CvButton'

const skills = [
	'Html',
	'Css',
	'Scss',
	'JavaScript (ES6+)',
	'TailwindCss',
	'React',
	'TypeScript',
	'React Router',
	'Redux-toolkit',
	'Next',
	'Git',
	'Vite',
	'Css/Scss Modules',
	'Figma',
]

const About = () => {
	return (
		<section id='about' className='mb-10 pt-10'>
			<div className='container'>
				<h3 className='text-center text-3xl font-bold mb-10'>About me</h3>
				<div className='flex flex-col-reverse gap-5 items-center'>
					<div className='max-w-[650px] text-center'>
						<h4 className='text-2xl font-bold mb-5'>Skills</h4>
						<ul className='flex gap-2 flex-wrap justify-center'>
							{skills &&
								skills.map((skill, index) => (
									<li
										key={index}
										className='border-2 border-[#393E46] cursor-default rounded-md py-2 px-5 transition duration-500 hover:border-[#00ADB5]'
									>
										{skill}
									</li>
								))}
						</ul>
					</div>
					<div className='max-w-[650px]'>
						<p className='text-xl'>
							Hi! I'm <strong className='text-[#00ADB5]'>Matvii Vats</strong>, a
							frontend developer passionate about building modern web
							applications. I enjoy writing clean code, working with React, and
							constantly learning new technologies.
						</p>
						<p className='my-5 text-xl'>
							I absorb information quickly and always strive for growth. Outside
							of coding, I enjoy staying active, learning new skills, and
							exploring creative outlets like playing the guitar.
						</p>
						<CvButton />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
