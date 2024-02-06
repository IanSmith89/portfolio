import { forwardRef } from 'react'
import FormLabel from './FormLabel'

export interface InputProps
	extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	error?: boolean
	helperText?: string
	label?: string
}

export default forwardRef(function TextArea(
	{ className, error, helperText, label, name, required, ...rest }: InputProps,
	ref?: React.LegacyRef<HTMLTextAreaElement>
) {
	const borderClasses = error
		? 'border-red focus:border-red focus:ring-red'
		: 'border-transparent focus:border-indigo focus:ring-indigo dark:focus:border-teal dark:focus:ring-teal'

	return (
		<div className={`w-full mb-4 ${className}`}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<div className="relative">
				<textarea
					ref={ref}
					{...rest}
					className={`py-3 px-4 block w-full rounded-lg text-sm bg-white/60 hover:bg-white/75 focus:bg-white/75 focus:border dark:bg-white/20 dark:hover:bg-white/25 dark:focus:bg-white/25 ${borderClasses}`}
				></textarea>
				{error ? (
					<div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
						<svg
							className="flex-shrink-0 h-4 w-4 text-red"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<line x1="12" x2="12" y1="8" y2="12" />
							<line x1="12" x2="12.01" y1="16" y2="16" />
						</svg>
					</div>
				) : null}
			</div>
			{helperText ? (
				<p
					className={`text-xs mt-1${
						error ? ' text-red-700 dark:text-red-300' : 'text-indigo/70 dark:text-white/70'
					}`}
					id={`${name}-helper`}
				>
					{helperText}
				</p>
			) : null}
		</div>
	)
})
