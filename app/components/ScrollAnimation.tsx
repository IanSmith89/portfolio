'use client'

import { useEffect, useState } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

export interface ScrollAnimationProps extends IntersectionOptions {
	children: React.ReactNode
	classNameInView: string
	classNameNotInView: string
}

export default function ScrollAnimation({
	children,
	classNameInView,
	classNameNotInView,
	threshold = 0,
	...options
}: ScrollAnimationProps) {
	const { ref, inView, entry } = useInView({
		...options,
		threshold,
	})
	const [hasEntered, setHasEntered] = useState<boolean>(false)

	useEffect(() => {
		if (entry?.boundingClientRect.top && entry.boundingClientRect.top < 0) setHasEntered(!entry?.isIntersecting)
	}, [entry])

	return (
		<div ref={ref} className={inView || hasEntered ? classNameInView : classNameNotInView}>
			{children}
		</div>
	)
}
