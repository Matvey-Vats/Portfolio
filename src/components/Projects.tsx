import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'

const Projects = () => {
	return (
		<section id='projects' className='mb-10 pt-10'>
			<div className='container mx-auto px-4'>
				<h3 className='text-center text-3xl font-bold mb-5'>Projects</h3>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{[
						{
							href: 'https://github.com/Matvey-Vats/Notes_React',
							img: project1,
							alt: 'Notes',
							title: 'Notes',
							desc: 'A simple React app for creating, editing, and deleting Markdown-supported notes.',
						},
						{
							href: 'https://github.com/Matvey-Vats/Musefy',
							img: project2,
							alt: 'Musefy',
							title: 'Musefy',
							desc: 'Online music store.',
						},
						{
							href: 'https://github.com/Matvey-Vats/Sonna',
							img: project3,
							alt: 'Sonna',
							title: 'Sonna',
							desc: 'A web-based music app with search, favorites, and playlist management features.',
						},
						{
							href: 'https://github.com/Matvey-Vats/FitCRM',
							img: project4,
							alt: 'FitCRM',
							title: 'FitCRM',
							desc: 'A CRM system for managing gym clients.',
						},
						{
							href: 'https://github.com/Matvey-Vats/Vortex',
							img: project5,
							alt: 'Vortex',
							title: 'Vortex',
							desc: 'Vortex is a simple online platform for searching and watching films and TV series.',
						},
					].map((project, index) => (
						<a
							key={index}
							href={project.href}
							target='_blank'
							rel='noopener noreferrer'
							className='p-6 border border-[#393E46] rounded-md transition duration-500 hover:border-[#00ADB5] hover:scale-105 flex flex-col items-center text-center'
						>
							<div className='w-full h-48 overflow-hidden rounded-md'>
								<img
									src={project.img}
									alt={project.alt}
									className='w-full h-full object-cover'
								/>
							</div>
							<h4 className='text-2xl font-bold my-2'>{project.title}</h4>
							<p className='text-sm'>{project.desc}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
