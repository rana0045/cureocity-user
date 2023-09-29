import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Input } from '@material-tailwind/react';

export default function TopBar() {

	const router = useRouter();

	return (
		<div className='h-fit p-10 w-full flex flex-row gap-5 items-center justify-end'>
			<div className='w-80 ipad:flex ipad:flex-row gap-5 hidden text-lg shadow-md px-5 py-2 bg-black h-fit rounded-xl text-white'>
				<Input
					variant='static'
					type='text'
					className='bg-transparent focus:bg-transparent outline-none cursor-pointer text-white h-full w-full'
					id='search'
					autoFocus
					placeholder='Search'
				/>
				<button>
					<Image
						src='/icons/search-icon.svg'
						alt='search'
						width={20}
						height={20}
						style={{ width: 'auto' }}
					/>
				</button>
			</div>
			<div className='flex flex-row gap-3'>
				<Image
					src='/icons/notification.svg'
					alt='notification'
					width={30}
					height={30}
					style={{ width: 'auto' }}
				/>
				<Image
					src='/icons/chat.svg'
					alt='chat'
					width={30}
					height={30}
					style={{ width: 'auto' }}
				/>
			</div>
			{router.pathname === '/' && (<Link href='/select-package' className='rounded-lg bg-orange-500 text-white px-3 py-2'>Choose your plan</Link>)}
		</div>
	);
}