'use client'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { WEB_FORM_KEY } from '../utils/constants'
import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'

export interface ContactFormFields {
	email: string
	message: string
}

export default function ContactForm() {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			message: '',
		},
	})

	const onSubmit: SubmitHandler<ContactFormFields> = async ({ email, message }) => {
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				access_key: WEB_FORM_KEY,
				from_name: email,
				message,
				replyto: email,
				subject: 'New Contact Submission from ianjsmith.com',
			}),
		})

		const content = await response.json()

		console.log(content)
	}

	return (
		<form className="flex flex-col w-full items-end" onSubmit={handleSubmit(onSubmit)}>
			<Input type="checkbox" name="botcheck" id="" className="hidden" />
			<Controller
				name="email"
				control={control}
				render={({ field }) => <Input type="email" label="Email" {...field} />}
				rules={{
					required: true,
				}}
			/>
			<Controller
				name="message"
				control={control}
				render={({ field }) => <Textarea label="Message" rows={4} {...field} />}
				rules={{
					required: true,
				}}
			/>

			<Button className="mt-4" type="submit">
				SEND MESSAGE
			</Button>
		</form>
	)
}
