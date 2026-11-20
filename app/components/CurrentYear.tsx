'use client'

import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

export default function CurrentYear() {
	const year = useSyncExternalStore(
		emptySubscribe,
		() => new Date().getFullYear(),
		() => null
	)

	return year ? `${year} ` : null
}
