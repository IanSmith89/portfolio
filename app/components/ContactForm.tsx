'use client'

import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { WEB_FORM_KEY } from '@/utils/constants'
import Input from '@/lib/Input'
import Button from '@/lib/Button'
import Textarea from '@/lib/Textarea'
import Loading from '@/lib/Loading'

export interface ContactFormFields {
	email: string
	message: string
}

export default function ContactForm() {
	const [isSending, setIsSending] = useState<boolean>(false)
	const [isResponseOk, setIsResponseOk] = useState<boolean>(false)
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			message: '',
		},
	})

	const onSubmit: SubmitHandler<ContactFormFields> = async ({ email, message }) => {
		try {
			setIsSending(true)
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

			setTimeout(() => {
				setIsSending(false)
				setIsResponseOk(response.ok)
			}, 1000)
		} catch (error) {
			console.error(error)
		}
	}

	if (isSending)
		return (
			<div className="w-1/2 mx-auto h-full flex items-center justify-center bg-white/30 dark:bg-white/20 rounded-lg">
				<Loading message="Message sending" />
			</div>
		)

	if (isResponseOk)
		return (
			<div className="w-3/4 mx-auto p-8 flex flex-col gap-4 items-center justify-center bg-white/30 dark:bg-white/20 rounded-lg">
				<h4 className="font-bold text-xl">Message Sent!</h4>
				<p className="text-sm text-center">
					Thank you for reaching out. I&apos;ll get back to you as soon as I can.
				</p>
			</div>
		)

	return (
		<form className="flex flex-col w-full items-end" onSubmit={handleSubmit(onSubmit)}>
			<Input type="checkbox" name="botcheck" id="" className="hidden" />
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState: { error, invalid } }) => (
					<Input error={invalid} helperText={error?.message} type="email" label="Email" {...field} />
				)}
				rules={{
					required: {
						value: true,
						message: 'Please provide a valid email.',
					},
				}}
			/>
			<Controller
				name="message"
				control={control}
				render={({ field, fieldState: { error, invalid } }) => (
					<Textarea error={invalid} helperText={error?.message} label="Message" rows={4} {...field} />
				)}
				rules={{
					required: {
						value: true,
						message: 'Please provide a message.',
					},
				}}
			/>

			<Button className="mt-4" type="submit">
				Send Message
			</Button>
		</form>
	)
}
