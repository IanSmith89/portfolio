import { forwardRef } from 'react'

export interface InputProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string
}

export default forwardRef(function Input(
	{ className, label, name, required, type, ...rest }: InputProps,
	ref: React.LegacyRef<HTMLInputElement> | undefined
) {
	return type === 'hidden' ? (
		<input ref={ref} name={name} type={type} {...rest} />
	) : (
		<div className={`mb-4 ${className}`}>
			<label htmlFor={`${name}`} className="block text-sm font-medium mb-2 dark:text-white">
				{label}
			</label>
			<div className="relative">
				<input
					ref={ref}
					{...rest}
					aria-describedby={`${name}-helper`}
					className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
					id={`${name}`}
					name={`${name}`}
					type={type}
				/>
				<div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
					<svg
						className="flex-shrink-0 h-4 w-4 text-red-500"
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
			</div>
			<p className="text-sm text-red-600 mt-2" id={`${name}-helper`}>
				Please enter a valid {name}.
			</p>
		</div>
	)
})
