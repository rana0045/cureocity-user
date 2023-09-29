import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import Layout from '@/components/layout';
import Table from '@/components/table';
import TopBar from '@/components/top-bar';


export default function Home() {







	const data = [
		{
			s_no: 1,
			day: 'Today',
			glasses: 'One',
			calories: '745 kcal',
			avg_heart_rate: '85 bpm',
			daily_goal: '7 glass'
		},
		{
			s_no: 2,
			day: 'Monday',
			glasses: 'Two',
			calories: '745 kcal',
			avg_heart_rate: '85 bpm',
			daily_goal: '7 glass'
		},
		{
			s_no: 3,
			day: 'Tuesday',
			glasses: 'Three',
			calories: '745 kcal',
			avg_heart_rate: '85 bpm',
			daily_goal: '7 glass'
		},
		{
			s_no: 4,
			day: 'Wednesday',
			glasses: 'Four',
			calories: '745 kcal',
			avg_heart_rate: '85 bpm',
			daily_goal: '7 glass'
		},
		{
			s_no: 5,
			day: 'Thursday',
			glasses: 'Three',
			calories: '745 kcal',
			avg_heart_rate: '81 bpm',
			daily_goal: '8 glass'
		},
		{
			s_no: 6,
			day: 'Friday',
			glasses: 'Five',
			calories: '845 kcal',
			avg_heart_rate: '85 bpm',
			daily_goal: '7 glass'
		},
		{
			s_no: 7,
			day: 'Saturday',
			glasses: 'Six',
			calories: '765 kcal',
			avg_heart_rate: '75 bpm',
			daily_goal: '7 glass'
		},
	];
	const tableColumns = [
		'S.No',
		'Day',
		'Glasses',
		'Calories',
		'Avg. Heart Rate',
		'Daily Goal'
	];
	const blogs = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 10 }
	];
	return (
		<Layout>
			<TopBar />
			<div className='w-full px-20 pb-5'><span className='text-rose-500 font-semibold'>Patient</span> Dashboard</div>
			<div className='py-10 px-20 flex flex-col gap-16 h-full w-full'>
				<div className='flex flex-row gap-10 h-fit'>
					<div className='border shadow-xl rounded-2xl px-5 h-80 w-[220px] flex flex-col'>
						<div className='w-full flex items-start py-5'>
							<Image
								src='/icons/heart.svg'
								alt='heart'
								width={40}
								height={40}
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='w-full flex justify-center py-5'>
							<Image
								src='/images/heart-rate.svg'
								alt='heart-rate'
								width={180}
								height={180}
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='w-full h-full flex flex-col gap-5 items-center justify-end py-5'>
							<div className='w-full flex items-center justify-center'>
								My Health Meter
							</div>
							<button className='rounded-lg py-2 px-5 h-fit bg-orange-500 shadow text-white'>
								Choose your plan
							</button>
						</div>
					</div>
					<div className='border shadow-xl flex flex-col px-5 rounded-2xl h-80 w-[275px]'>
						<div className='w-full flex items-start py-5'>
							<Image
								src='/icons/insight.svg'
								alt='insight'
								width={40}
								height={40}
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='w-full flex flex-row justify-center gap-5'>
							<div className='w-fit flex flex-col gap-5'>
								<div className='w-fit flex flex-col'>
									<div className='text-sm text-gray-500'>Blood Pressure</div>
									<div>130/90 mm Hg</div>
								</div>
								<div className='w-fit flex flex-col'>
									<div className='text-sm text-gray-500'>Oxygen</div>
									<div>93%</div>
								</div>
							</div>
							<div className='w-fit flex flex-col'>
								<div className='text-sm text-gray-500'>Pulse</div>
								<div>81 beats/min</div>
							</div>
						</div>
						<div className='w-full h-full flex flex-col gap-5 items-center justify-end py-5'>
							<div className='w-full flex items-center justify-center'>
								My Health Insight
							</div>
							<button className='rounded-lg py-2 px-5 h-fit bg-orange-500 shadow text-white'>
								Choose your plan
							</button>
						</div>
					</div>
					<div className='border shadow-xl flex flex-col px-5 rounded-2xl h-80 w-[220px]'>
						<div className='w-full flex justify-between py-5'>
							<Image
								src='/icons/coins.svg'
								alt='coins'
								width={40}
								height={40}
								style={{ width: 'auto' }}
							/>
							<Image
								src='/icons/export.svg'
								alt='export'
								width={30}
								height={30}
								style={{ width: 'auto' }}
							/>
						</div>
						<div className='w-full text-7xl text-rose-500 flex items-center justify-center'>$0</div>
						<div className='w-full h-full flex flex-col gap-5 items-center justify-end py-5'>
							<div className='w-full flex items-center justify-center'>
								Earn more coins
							</div>
							<button className='rounded-lg py-2 px-5 h-fit bg-orange-500 shadow text-white'>
								Choose your plan
							</button>
						</div>
					</div>
					<div className='flex flex-col flex-grow border shadow-xl rounded-2xl h-80 pb-5'>
						<div className='w-full flex flex-row gap-16 items-start p-5'>
							<Image
								src='/icons/medicine.svg'
								alt='medicine'
								width={40}
								height={40}
								style={{ width: 'auto' }}
							/>
							<div className='flex items-end justify-center h-full'>Add Medicine Routine</div>
						</div>
						<div className='w-full h-fit'>
							<div className='px-2 pt-5 grid place-items-center'>
								<Table
									tableColumns={tableColumns}
									data={data} />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row gap-10'>
					<div className='flex flex-col gap-16 w-full'>
						<div className='flex flex-row gap-10 h-fit'>
							<div className='border shadow-xl flex flex-col rounded-2xl min-h-fit pb-5 w-full'>
								<div className='w-full h-full flex justify-between items-center p-5'>
									<Image
										src='/icons/exercise.svg'
										alt='exercise'
										width={35}
										height={35}
										style={{ width: 'auto' }}
									/>
									<div className='w-fit grid grid-cols-2 gap-2 justify-items-center'>
										<Image
											src='/icons/expand.svg'
											alt='expand'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
										<Image
											src='/icons/add.svg'
											alt='add'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
									</div>
								</div>
								<div className='w-full h-fit'>
									<div className='px-2 grid place-items-center'>
										<Table
											tableColumns={tableColumns}
											data={data} />
									</div>
								</div>
							</div>
							<div className='border flex flex-col shadow-xl rounded-2xl min-h-fit pb-5 w-full'>
								<div className='w-full h-full flex justify-between items-center p-5'>
									<Image
										src='/icons/water.svg'
										alt='water'
										width={35}
										height={35}
										style={{ width: 'auto' }}
									/>
									<div className='w-fit grid grid-cols-2 gap-2 justify-items-center'>
										<Image
											src='/icons/expand.svg'
											alt='expand'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
										<Image
											src='/icons/add.svg'
											alt='add'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
									</div>
								</div>
								<div className='w-full h-fit'>
									<div className='px-2 grid place-items-center'>
										<Table
											tableColumns={tableColumns}
											data={data} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row gap-10 h-fit'>
							<div className='border flex flex-col shadow-xl rounded-2xl min-h-fit pb-5 w-full'>
								<div className='w-full h-full flex justify-between items-center p-5'>
									<Image
										src='/icons/sun.svg'
										alt='sun'
										width={35}
										height={35}
										style={{ width: 'auto' }}
									/>
									<div className='w-fit grid grid-cols-2 gap-2 justify-items-center'>
										<Image
											src='/icons/expand.svg'
											alt='expand'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
										<Image
											src='/icons/add.svg'
											alt='add'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
									</div>
								</div>
								<div className='w-full h-fit'>
									<div className='px-2 grid place-items-center'>
										<Table
											tableColumns={tableColumns}
											data={data} />
									</div>
								</div>
							</div>
							<div className='border flex flex-col shadow-xl rounded-2xl min-h-fit pb-5 w-full'>
								<div className='w-full h-full flex justify-between items-center p-5'>
									<Image
										src='/icons/dumbbell.svg'
										alt='dumbbell'
										width={35}
										height={35}
										style={{ width: 'auto' }}
									/>
									<div className='w-fit grid grid-cols-2 gap-2 justify-items-center'>
										<Image
											src='/icons/expand.svg'
											alt='expand'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
										<Image
											src='/icons/add.svg'
											alt='add'
											width={15}
											height={15}
											style={{ width: 'auto' }}
										/>
									</div>
								</div>
								<div className='w-full h-fit'>
									<div className='px-2 grid place-items-center'>
										<Table
											tableColumns={tableColumns}
											data={data} />
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row gap-10 h-fit'>
							<div className='border shadow-xl rounded-2xl min-h-fit w-full'>
								<div className='w-full h-fit flex flex-row items-start p-5'>
									<Image
										src='/icons/calculator.svg'
										alt='calculator'
										width={40}
										height={40}
										style={{ width: 'auto' }}
									/>
									<div className='flex w-full min-h-fit items-center text-lg px-10 pt-2'>Calorie Calculator</div>
								</div>
								<div className='w-full flex tablet:flex-row flex-col items-center px-10 py-10 gap-5'>
									<div className='text-5xl'>1,250</div>
									<div className='flex flex-row gap-5'>
										<div className='flex flex-row gap-2'>
											<ArrowTrendingUpIcon className="h-6 w-6 text-green-500" />
											<span className='text-green-500'>4.8%</span>
										</div>
										<div>from last week</div>
									</div>
								</div>
							</div>
							<div className='border shadow-xl flex flex-col rounded-2xl min-h-fit w-full'>
								<div className='w-full h-fit flex flex-row items-start p-5'>
									<Image
										src='/icons/activity.svg'
										alt='activity'
										width={40}
										height={40}
										style={{ width: 'auto' }}
									/>
									<div className='flex w-full min-h-fit items-center text-lg px-10 pt-2'>Tips & Activity</div>
								</div>
								<div className='grid tablet:grid-cols-2 grid-rows-2 justify-items-center py-10'>
									<div className='flex flex-row gap-5'>
										<Image
											src='/icons/dumbbell-tilt.svg'
											alt='activity'
											width={40}
											height={40}
											style={{ width: 'auto' }}
										/>
										<div className='flex flex-col'>
											<div>Daily steps goal completed</div>
											<div className='flex flex-row gap-3 text-sm font-thin'>
												<div>Steps: 10000</div>
												<div>15 mins ago</div>
											</div>
										</div>
									</div>
									<div className='flex flex-row gap-5'>
										<Image
											src='/icons/dumbbell-tilt.svg'
											alt='activity'
											width={40}
											height={40}
											style={{ width: 'auto' }}
										/>
										<div className='flex flex-col'>
											<div>Daily steps goal completed</div>
											<div className='flex flex-row gap-3 text-sm font-thin'>
												<div>Steps: 10000</div>
												<div>15 mins ago</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-72 h-[885px] flex flex-col items-center overflow-y-auto gap-5' style={{ scrollbarWidth: 'none' }}>
						{blogs?.map((blog, key) => {
							return (
								<Link href={`/blog/${blog?.id}`} passHref className='w-52 rounded-xl bg-slate-800 flex flex-col gap-3 items-center' key={key}>
									<Image
										src='/images/blog.svg'
										alt='blog'
										width={220}
										height={220}
										style={{ width: 'auto' }}
									/>
									<div className='text-white text-sm'>Lorem ipsum dolor</div>
									<div className='text-white text-sm font-thin'>April 24, 2022 - 5min read</div>
									<div className='text-white text-xs text-center px-2 pb-5'>Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</div>
								</Link>
							);
						})}
					</div>
				</div>

			</div>
		</Layout>
	);
}
