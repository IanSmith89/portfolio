export default function FormLabel({
	children,
	...rest
}: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) {
	return (
		<label className="block text-xs font-medium pb-1 dark:text-white" {...rest}>
			{children}
		</label>
	)
}
