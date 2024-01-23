export type LoadingProps = {
	message?: string
}

export default function Loading({ message }: LoadingProps) {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="h-12 flex gap-0.5">
				<div className="animate-scale-up-down animate-delay-[150ms] h-full w-1 bg-purple" />
				<div className="animate-scale-up-down animate-delay-300 h-full w-1 bg-blue" />
				<div className="animate-scale-up-down animate-delay-[450ms] h-full w-1 bg-green" />
				<div className="animate-scale-up-down animate-delay-[600ms] h-full w-1 bg-yellow" />
				<div className="animate-scale-up-down animate-delay-[750ms] h-full w-1 bg-orange" />
				<div className="animate-scale-up-down animate-delay-[900ms] h-full w-1 bg-red" />
			</div>
			{message ? <p className="text-sm">{message}</p> : null}
		</div>
	)
}
