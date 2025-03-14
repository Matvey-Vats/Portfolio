import { SubmitHandler, useForm } from 'react-hook-form'
import sendEmailMessage from '../utils/sendEmailMessage'

type InputTypes = Record<'name' | 'email' | 'message', string>

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<InputTypes>()

	const onSubmit: SubmitHandler<InputTypes> = data => {
		sendEmailMessage(data, reset)
	}

	return (
		<section id='contact' className='mb-10 pt-10'>
			<div className='container'>
				<h3 className='text-center text-3xl font-bold mb-10'>Contact me</h3>
				<div className='max-w-[950px] w-full mx-auto'>
					<div className='mb-5'>
						<p>
							<strong>Email: </strong>
							matviyvac@gmail.com
						</p>
						<p>
							<strong>Country: </strong>
							Spain, Murcia
						</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col items-start w-full'
					>
						<input
							type='text'
							placeholder='Enter your name'
							className='border dark:text-[#eeeeee] text-[#393E46] placeholder:text-[#393E46] dark:placeholder:text-[#eeeeee] border-[#393E46] dark:border-[#eeeeee] w-full p-3 rounded-md transition duration-500 focus:border-[#00ADB5] dark:focus:border-[#00ADB5]'
							{...register('name', { required: 'Name is required' })}
						/>
						<p
							className={`text-center text-red-500 min-h-[20px] transition-all duration-300 ${
								errors.name ? 'opacity-100 h-auto' : 'opacity-0 h-0'
							}`}
						>
							{errors.name?.message}
						</p>

						<input
							type='email'
							placeholder='Enter your email'
							className='border dark:text-[#eeeeee] text-[#393E46] placeholder:text-[#393E46] dark:placeholder:text-[#eeeeee] border-[#393E46] dark:border-[#eeeeee] w-full p-3 rounded-md transition duration-500 focus:border-[#00ADB5] dark:focus:border-[#00ADB5]'
							{...register('email', { required: 'Email is required' })}
						/>
						<p
							className={`text-center text-red-500 min-h-[20px] transition-all duration-300 ${
								errors.email ? 'opacity-100 h-auto' : 'opacity-0 h-0'
							}`}
						>
							{errors.email?.message}
						</p>

						<textarea
							placeholder='Enter message'
							className='border resize-none h-[200px] dark:text-[#eeeeee] text-[#393E46] placeholder:text-[#393E46] dark:placeholder:text-[#eeeeee] border-[#393E46] dark:border-[#eeeeee] w-full p-3 rounded-md transition duration-500 focus:border-[#00ADB5] dark:focus:border-[#00ADB5]'
							{...register('message', { required: 'Message is required' })}
						></textarea>
						<p
							className={`text-center text-red-500 min-h-[20px] transition-all duration-300 ${
								errors.message ? 'opacity-100 h-auto' : 'opacity-0 h-0'
							}`}
						>
							{errors.message?.message}
						</p>

						<button
							type='submit'
							className='bg-[#00ADB5] border-1 border-transparent font-bold rounded-md py-2 px-5 transition duration-500 hover:bg-transparent hover:border-[#00ADB5]'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
