import Image from 'next/image'

export default function Home() {
	return (
		<main className="w-full h-screen flex flex-col items-center justify-center text-center p-8">
			<div className="relative w-full h-32 mb-6">
				<Image alt="" src="/eye-jay-s-logo.svg" fill priority />
			</div>
			<h1 className="font-sans text-5xl font-medium mb-2">COMING SOON</h1>
			<p className="font-sans text-base font-extralight text-gray-600 dark:text-gray-300">
				I&apos;m excited to release the new version of ianjsmith.com in December 2023.
			</p>
		</main>
	)
}
