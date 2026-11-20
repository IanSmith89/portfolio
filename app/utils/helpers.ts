export const throttle = <T extends (...args: unknown[]) => void>(fn: T, wait: number = 300) => {
	let inThrottle: boolean
	let lastFn: ReturnType<typeof setTimeout>
	let lastTime: number

	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			fn(...args)
			lastTime = Date.now()
			inThrottle = true
		} else {
			clearTimeout(lastFn)
			lastFn = setTimeout(
				() => {
					if (Date.now() - lastTime >= wait) {
						fn(...args)
						lastTime = Date.now()
					}
				},
				Math.max(wait - (Date.now() - lastTime), 0)
			)
		}
	}
}
