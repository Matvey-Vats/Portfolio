import { BiCode } from 'react-icons/bi'
import { DiResponsive } from 'react-icons/di'
import { MdDesignServices } from 'react-icons/md'

const Services = () => {
	return (
		<section className='my-10'>
			<div className='container'>
				<h3 className='text-center text-3xl font-bold mb-2'>Services</h3>
				<p className='text-center text-xl mb-10'>
					What <strong className='text-[#00ADB5]'>i do</strong>
				</p>
				<div className='flex flex-wrap items-center gap-5 justify-center'>
					<div className='max-w-[400px] p-10 border-1 border-[#393E46] rounded-md transition-all duration-700 hover:bg-[#00ADB5] hover:text-[#222831]'>
						<BiCode size={40} />
						<h4 className='font-bold text-xl my-5'>Web Development</h4>
						<p>
							Developing responsive and interactive web applications with React.
						</p>
					</div>
					<div className='max-w-[400px] p-10 border-1 border-[#393E46] rounded-md transition-all duration-700 hover:bg-[#00ADB5] hover:text-[#222831]'>
						<MdDesignServices size={40} />
						<h4 className='font-bold text-xl my-5'>UI/UX Implementation</h4>
						<p>I transform the design into clean and neat code.</p>
					</div>
					<div className='max-w-[400px] p-10 border-1 border-[#393E46] rounded-md transition-all duration-700 hover:bg-[#00ADB5] hover:text-[#222831]'>
						<DiResponsive size={40} />
						<h4 className='font-bold text-xl my-5'>Responsive Design</h4>
						<p>I make websites convenient for any device.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
