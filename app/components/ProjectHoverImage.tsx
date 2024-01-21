import Image from 'next/image'
import { Project } from '@/utils/types'

export type ProjectHoverImageProps = {
	sizes: string
	src: Project['backgroundImage']
}

export default function ProjectHoverImage({ sizes, src }: ProjectHoverImageProps) {
	return (
		<>
			<Image
				alt=""
				src={src}
				className="transition-transform object-cover h-full group-hover:scale-[1.03]"
				fill
				sizes={sizes}
			/>
			<div className="transition-all absolute -inset-1 filter backdrop-blur-sm mix-blend-hard-light bg-indigo-100/70 dark:bg-teal-950/85 group-hover:bg-teal dark:group-hover:bg-grey-blue/70 group-hover:backdrop-blur-0" />
		</>
	)
}
