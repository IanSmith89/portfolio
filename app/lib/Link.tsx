import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps & Omit<React.ComponentPropsWithRef<'a'>, keyof NextLinkProps>

export default function Link({ children, className, href, ref, ...rest }: LinkProps) {
	let classes = 'outline-none focus-visible:ring-3 focus-visible:ring-indigo dark:focus-visible:ring-teal'

	if (className) classes += ` ${className}`

	return (
		<NextLink ref={ref} href={href} className={classes} {...rest}>
			{children}
		</NextLink>
	)
}
