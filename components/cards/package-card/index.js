import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PackageCard(props) {
	const { price, noOfMeetings } = props;

	return (
		<div className='border object-contain grid justify-items-center shadow-xl h-96 w-[30rem] rounded-3xl bg-gradient-to-b from-pink-600 to-orange-300'>
			<div className='pt-10 text-3xl font-bold text-white'>
				Basic package
			</div>
			<div className='h-1 w-96 bg-white'></div>
			<div className='text-6xl font-bold'>${price}</div>
			<div className='text-white'>
				{noOfMeetings === 1 && 'ONE TIME'}
				{noOfMeetings === 2 && 'TWO TIME'}
				{noOfMeetings === 3 && 'THREE TIME'} TALK WITH DOCTOR
			</div>
			<div className='grid items-center gap-5'>
				<div>
					<Link href={`/checkout/${price}`}>
						<button className='rounded bg-pink-600 px-5 py-1 font-semibold text-white'>
							Book now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
