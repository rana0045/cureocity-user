import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { Input } from '@material-tailwind/react';
import Header from '@/components/layout/header';
import { GlobalContext } from '@/context/context';

export default function CheckOut() {
	let { state } = useContext(GlobalContext);

	const [isChecked, setIsChecked] = useState(false);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let temp = 0;
		for (let i = 0; i < state?.cart?.length; i++) {
			temp += state?.cart[i]?.price;
		}
		setTotal(temp);
	}, [state]);

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	console.log(state);

	return (
		<div className='flex flex-col w-full h-fit'>
			<Header />
			<div className='flex flex-col w-full h-fit py-10'>
				<div className='px-10 pt-24 grid medium:grid-cols-3 computer:grid-cols-2 grid-flow-row'>
					<div className='flex flex-col justify-center items-center pb-20'>
						{state?.cart?.map((item, key) => {
							return (
								<div className='flex flex-row justify-between ipad:w-1/2 w-full' key={key}>
									<div>{item?.name}</div>
									<div>${item?.price}</div>
								</div>
							);
						})}
						<hr className='ipad:w-1/2 w-full my-5' style={{ height: '2px', border: 'none', backgroundColor: 'gray' }} />
						<div className='flex flex-row justify-between ipad:w-1/2 w-full'>
							<div>Sub Total</div>
							<div>${total}</div>
						</div>
						<div className='flex flex-row justify-between ipad:w-1/2 w-full'>
							<div className='flex flex-row items-center gap-1'>
								<div>Tax</div>
								<span className='text-xs text-gray-500'>(6%)</span>
							</div>
							<div>${total * 6 / 100}</div>
						</div>
						<hr className='ipad:w-1/2 w-full my-5' style={{ height: '2px', border: 'none', backgroundColor: 'gray' }} />
						<div className='flex flex-row justify-between ipad:w-1/2 w-full'>
							<div>Total</div>
							<div>${total + (total * 6 / 100)}</div>
						</div>
						<hr className='ipad:w-1/2 w-full my-5' style={{ height: '2px', border: 'none', backgroundColor: 'gray' }} />
						<div className='ipad:w-1/2 w-full text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
					</div>
					<div className='flex flex-col gap-10 items-center'>
						<div className='flex justify-center'>
							<Image
								src='/images/credit-card.svg'
								alt='card'
								width={500}
								height={500}
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='flex ipad:flex-row flex-col gap-5 py-10 justify-center items-center max-w-3xl'>
							<div className='flex flex-col gap-5 ipad:w-7/12'>
								<Input
									variant='static'
									type='text'
									className='text-white shadow-md py-3 pl-2 rounded-lg'
									id='name'
									style={{ backgroundColor: 'black' }}
									autoFocus
									placeholder='Cardholder Name'
								/>
								<Input
									variant='static'
									type='text'
									className='text-white shadow-md py-3 pl-2 rounded-lg'
									id='card_number'
									style={{ backgroundColor: 'black' }}
									autoFocus
									placeholder='Card Number'
								/>
								<div className='flex flex-row gap-5'>
									<Input
										variant='static'
										type='text'
										className='text-white shadow-md py-3 pl-2 rounded-lg'
										id='expiry'
										style={{ backgroundColor: 'black' }}
										autoFocus
										placeholder='Expiration Date'
									/>
									<Input
										variant='static'
										type='security_code'
										className='text-white shadow-md py-3 pl-2 rounded-lg'
										id='card_number'
										style={{ backgroundColor: 'black' }}
										autoFocus
										placeholder='CVV'
									/>
								</div>
							</div>
							<div className='flex flex-col ipad:w-5/12'>
								<div className='text-xs text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
								<div className='py-5'>
									<label className="flex items-center space-x-2">
										<input
											type="checkbox"
											checked={isChecked}
											onChange={handleCheckboxChange}
											className="form-checkbox h-5 w-5"
										/>
										<span className="text-gray-700 text-sm">I Agree to Terms & Conditions</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-center w-full mt-10'>
					<button className='px-16 py-3 bg-orange-500 rounded-xl text-white text-xl font-semibold shadow-lg'>Proceed to checkout</button>
				</div>
			</div>
		</div>
	);
}