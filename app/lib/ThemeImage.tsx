/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps, StaticImageData } from 'next/image'

type ThemeImageProps = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
	srcLight: StaticImageData | string
	srcDark?: StaticImageData | string
}

export default function ThemeImage({ srcLight, srcDark, ...rest }: ThemeImageProps) {
	return (
		<>
			<Image {...rest} src={srcLight} className={`${rest.className}${srcDark ? ' dark:hidden' : ''}`} />
			{srcDark ? <Image {...rest} src={srcDark} className={`${rest.className} hidden dark:block`} /> : null}
		</>
	)
}
