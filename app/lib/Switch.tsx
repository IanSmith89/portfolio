export interface SwitchProps
	extends React.DetailedHTMLProps<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>, HTMLInputElement> {
	label: string
}

export default function Switch({ id, label, onChange, ...rest }: SwitchProps) {
	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter' && onChange)
			onChange({
				...e,
				currentTarget: {
					...e.currentTarget,
					checked: !e.currentTarget.checked,
				},
			} as unknown as React.ChangeEvent<HTMLInputElement>)
	}

	return (
		<>
			<input
				{...rest}
				type="checkbox"
				id={id}
				className="relative w-11 h-6 py-0.5 border-0 text-transparent rounded-full cursor-pointer pl-1 dark:pl-[7px] bg-black/10 dark:checked:bg-white/40 dark:checked:bg-none dark:checked:hover:bg-white/40
                
                focus:ring-transparent focus:ring-offset-transparent
                
                focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo dark:focus-visible:ring-teal focus-visible:ring-offset-0 focus-visible:ring-offset-transparent 
                
                before:inline-block before:w-4 before:h-4 before:bg-orange before:translate-x-0 dark:before:translate-x-full before:rounded-full before:transform before:transition before:ease-in-out before:duration-200 dark:before:bg-yellow"
				onChange={onChange}
				onKeyDown={handleKeyDown}
			/>
			<label htmlFor={id} className="sr-only">
				{label}
			</label>
		</>
	)
}
