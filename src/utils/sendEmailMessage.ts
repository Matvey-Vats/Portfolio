import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

type TData = Record<'name' | 'email' | 'message', string>

const sendEmailMessage = (data: TData, reset: () => void) => {
	emailjs
		.send(
			SERVICE_ID,
			TEMPLATE_ID,
			{
				name: data.name,
				email: data.email,
				message: data.message,
			},
			PUBLIC_KEY
		)
		.then(response => {
			console.log('Email sent:', response)
			reset()
			toast.success('Message sent successfully!')
		})
		.catch(error => {
			console.error('Email error:', error)
			toast.error('Failed to send message')
		})
}

export default sendEmailMessage
