'use client'

import Image, { ImageProps } from 'next/image'
import Tilt from 'react-parallax-tilt'

export interface TiltImageProps extends Omit<ImageProps, 'alt'> {
	alt?: string
}

export type TiltProps = {
	className: string
	imageProps: TiltImageProps
}

export default function TiltImage({
	className,
	imageProps: { alt = '', className: imageClassName, ...rest },
}: TiltProps) {
	let imageClasses = 'inner-element'

	if (imageClassName) imageClasses += ` ${imageClassName}`

	return (
		<Tilt
			className={`tilt-img ${className}`}
			perspective={900}
			scale={1.05}
			tiltMaxAngleX={30}
			tiltMaxAngleY={30}
			tiltReverse
			trackOnWindow
			transitionSpeed={3000}
		>
			<Image
				alt={alt}
				className={imageClasses}
				placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
				{...rest}
			/>
		</Tilt>
	)
}
