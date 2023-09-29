import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/header';

export default function SignUp() {

	const [selectedGender, setSelectedGender] = useState('male');

	const handleGenderChange = (e) => {
		setSelectedGender(e.target.value);
	};

	//console.log(selectedGender);

	return (
		<>
			<Header />
			<div className='h-fit w-full px-20 pt-24 flex flex-col gap-10 items-stretch'>
				<div className='self-center text-3xl pb-5 font-semibold font-mono'>
					Create Account
				</div>
				<div className='flex computer:flex-row mobile:flex-col h-fit gap-10'>
					<Input
						variant='static'
						type='text'
						className='w-full text-xl  shadow-md px-5 bg-neutral-200 py-8 rounded-3xl'
						id='username'
						autoFocus
						placeholder='Username'
					/>
					<Input
						variant='static'
						type='text'
						className='w-full text-xl  shadow-md px-5 bg-neutral-200 py-8 rounded-3xl'
						id='email'
						autoFocus
						placeholder='Email'
					/>
					<Input
						variant='static'
						type='text'
						className='w-full text-xl  shadow-md px-5 bg-neutral-200 py-8 rounded-3xl'
						id='Phone_number'
						autoFocus
						placeholder='Phone Number'
					/>
				</div>
				<div className='flex flex-row items-center w-full mt-5 gap-12'>
					<Input
						variant='static'
						type='password'
						className='tablet:w-[24rem] w-full text-xl shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
						id='password'
						autoFocus
						placeholder='Password'
					/>
					<Input
						variant='static'
						type='text'
						className='w-44 text-xl text-center shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
						id='blood_group'
						autoFocus
						placeholder='Blood Group'
					/>
					<Input
						variant='static'
						type='text'
						className='w-44 text-xl text-center shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
						id='dob'
						autoFocus
						placeholder='Date of Birth'
					/>
					<Input
						variant='static'
						type='text'
						className='w-24 text-xl text-center shadow-md px-5 bg-neutral-200 py-5 rounded-3xl'
						id='age'
						autoFocus
						placeholder='Age'
					/>
					<div className='flex flex-row gap-10'>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								value='male'
								style={{ width: '20px', height: '20px' }}
								checked={selectedGender === 'male'}
								onChange={handleGenderChange}
							/>
							Male
						</label>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								value='female'
								style={{ width: '20px', height: '20px' }}
								checked={selectedGender === 'female'}
								onChange={handleGenderChange}
							/>
							Female
						</label>
						<label className='flex items-center gap-3'>
							<input
								type='radio'
								value='other'
								style={{ width: '20px', height: '20px' }}
								checked={selectedGender === 'other'}
								onChange={handleGenderChange}
							/>
							Other
						</label>
					</div>
				</div>
				<div className='flex justify-center mt-14'>
					<button
						className='text-white text-2xl font-semibold bg-orange-500 h-16 button px-2 w-96 rounded-3xl'
						type='submit'>
						Create Account
					</button>
				</div>
				<div className='w-full text-center text-lg font-semibold'>
					Already have an account?{' '}
					<Link href='/login' passHref>
						<span className='text-pink-600 font-bold'>
							Login
						</span>
					</Link>
				</div>
				<div className='w-full text-center text-3xl font-bold text-gray-500'>
					- OR -
				</div>
				<div className='flex tablet:flex-row flex-col gap-10 items-center justify-center w-full h-fit'>
					<div className='w-72 h-16 flex items-center rounded-xl shadow-lg border object-contain'>
						<Image
							className='ml-2'
							src='/logo/facebook.png'
							alt='logo'
							width={50}
							height={50}
						/>
						<div className='text-lg font-semibold w-full text-center'>
							Sign Up with Facebook
						</div>
					</div>
					<div className='w-72 h-16 flex items-center rounded-xl shadow-lg border object-contain'>
						<Image
							className='ml-2'
							src='/logo/google.png'
							alt='logo'
							width={50}
							height={50}
						/>
						<div className='text-lg font-semibold w-full text-center'>
							Sign Up with Google
						</div>
					</div>
				</div>
			</div>
		</>
	);
}