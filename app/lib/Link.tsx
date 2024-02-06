import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'

export type LinkProps = Omit<NextLinkProps, 'passHref'> & Omit<React.HTMLProps<HTMLAnchorElement>, 'href'>

export default forwardRef(function Link(
	{ children, className, href, ...rest }: LinkProps,
	ref?: React.LegacyRef<HTMLAnchorElement>
) {
	let classes = 'focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo'

	if (className) classes += ` ${className}`

	return (
		<NextLink href={href} passHref legacyBehavior>
			<a ref={ref} className={classes} {...rest}>
				{children}
			</a>
		</NextLink>
	)
})
