'use client'

import { useEffect, useState } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

export interface ScrollAnimationProps extends IntersectionOptions {
	children: React.ReactNode
	classNameInView: string
	classNameNotInView?: string
}

export default function ScrollAnimation({
	children,
	classNameInView,
	classNameNotInView = 'opacity-0 translate-y-[32px] md:translate-y-[64px]',
	rootMargin = '-64px 0px 0px 0px',
	triggerOnce = true,
	...options
}: ScrollAnimationProps) {
	const { ref, inView } = useInView({
		...options,
		rootMargin,
		triggerOnce,
	})

	// Exploration for re-triggering animation after scrolling to top
	// const [hasEntered, setHasEntered] = useState<boolean>(false)

	// useEffect(() => {
	// 	if (entry?.boundingClientRect.top && entry.boundingClientRect.top < 0) setHasEntered(!entry?.isIntersecting)
	// }, [entry])

	return (
		<div ref={ref} className={inView ? classNameInView : classNameNotInView}>
			{children}
		</div>
	)
}
