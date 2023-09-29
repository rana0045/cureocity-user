import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<div className='h-20 max-w-screen w-full bg-black flex items-center justify-center'>
			<Link href='/' passHref>
				<Image
					src='/logo/cureocity-logo-white.png'
					alt='logo'
					width={100}
					height={100}
					style={{ width: 'auto' }}
				/>
			</Link>
		</div>
	);
}