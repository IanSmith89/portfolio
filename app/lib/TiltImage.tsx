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
			<Image alt={alt} className={`inner-element ${imageClassName}`} {...rest} />
		</Tilt>
	)
}
