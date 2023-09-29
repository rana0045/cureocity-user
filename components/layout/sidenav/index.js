import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideNav() {

	const router = useRouter();
	const [doctorSelected, setDoctorSelected] = useState(false);
	const [dieticianSelected, setDieticianSelected] = useState(false);
	const [fitnessTrainerSelected, setFitnessTrainerSelected] = useState(false);
	const [psychologistSelected, setPsychologistSelected] = useState(false);

	return (
		<aside className='flex flex-col w-72 pb-10 bg-white shadow-lg min-h-full'>
			<div className='hidden laptop:flex laptop:flex-col items-center justify-center'>
				<Image
					className='py-10 mx-5'
					src='/images/profile-picture.svg'
					alt='logo'
					width={150}
					height={150}
					style={{ width: 'auto' }}
				/>
				<div className='text-2xl'>Diksha Sanon</div>
				<div className='text-md text-gray-500'>Patient</div>
			</div>
			<nav className='pt-20 grid grid-flow-row justify-items-start gap-8 laptop:w-fit pl-8'>
				{router.pathname === '/' ? (
					<div className='flex flex-row gap-5 items-center hover:cursor-pointer'>
						<Image
							src='/navItems/dashboard2.svg'
							alt='dashboard'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex text-rose-500'>Dashboard</div>
					</div>
				) : (
					<Link
						href='/'
						className='flex flex-row gap-5 items-center'
						passHref>
						<Image
							src='/navItems/dashboard.svg'
							alt='dashboard'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Dashboard</div>
					</Link>
				)}

				{doctorSelected || router.pathname === '/doctors' || router.pathname === '/doctors/create-appointment' ? (
					<>
						<button onClick={() => { setDoctorSelected(false); }} className='flex flex-row gap-5 items-center'>
							<Image
								src='/navItems/doctors2.svg'
								alt='doctors'
								width={25}
								height={25}
								style={{ width: 'auto' }}
							/>
							<div className='font-semibold hidden laptop:flex text-rose-500'>Doctors</div>
						</button>
						<div className='flex flex-col gap-2 pl-2'>
							{router.pathname === '/doctors' ? (
								<div className='text-orange-500'>
									List of all Doctors
								</div>
							) : (
								<Link href='/doctors'>
									List of all Doctors
								</Link>
							)}
							{router.pathname === '/doctors/create-appointment' ? (
								<div className='text-orange-500'>
									Take a Appointment
								</div>
							) : (
								<Link href='/doctors/create-appointment'>
									Take a Appointment
								</Link>
							)}
						</div>
					</>
				) : (
					<button onClick={() => { setDoctorSelected(true); }} className='flex flex-row gap-5 items-center'>
						<Image
							src='/navItems/doctors.svg'
							alt='doctors'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Doctors</div>
					</button>
				)}

				{dieticianSelected || router.pathname === '/dieticians' || router.pathname === '/dieticians/create-appointment' ? (
					<>
						<button onClick={() => { setDieticianSelected(false) }} className='flex flex-row gap-5 items-center'>
							<Image
								src='/navItems/dieticians2.svg'
								alt='dieticians'
								width={25}
								height={25}
								style={{ width: 'auto' }}
							/>
							<div className='font-semibold hidden laptop:flex text-rose-500'>Dieticians</div>
						</button>
						<div className='flex flex-col gap-2 pl-2'>
							<div>Take ROME-IV</div>
							{router.pathname === '/dieticians' ? (
								<div className='text-orange-500'>
									List of all Dieticians
								</div>
							) : (
								<Link href='/dieticians'>
									List of all Dieticians
								</Link>
							)}
							{router.pathname === '/dieticians/create-appointment' ? (
								<div className='text-orange-500'>
									Take a Appointment
								</div>
							) : (
								<Link href='/dieticians/create-appointment'>
									Take a Appointment
								</Link>
							)}
						</div>
					</>
				) : (
					<button onClick={() => { setDieticianSelected(true) }} className='flex flex-row gap-5 items-center'>
						<Image
							src='/navItems/dieticians.svg'
							alt='dieticians'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Dieticians</div>
					</button>
				)}

				{fitnessTrainerSelected || router.pathname === '/fitness-trainers' || router.pathname === '/fitness-trainers/create-appointment' ? (
					<>
						<button onClick={() => { setFitnessTrainerSelected(false) }} className='flex flex-row gap-5 items-center'>
							<Image
								src='/navItems/fitness-trainers2.svg'
								alt='fitness-trainers'
								width={25}
								height={25}
								style={{ width: 'auto' }}
							/>
							<div className='font-semibold hidden laptop:flex text-rose-500'>Fitness Trainers</div>
						</button>
						<div className='flex flex-col gap-2 pl-2'>
							<div>Take PAR-Q</div>
							{router.pathname === '/fitness-trainers' ? (
								<div className='text-orange-500'>
									List of all Fitness Trainers
								</div>
							) : (
								<Link href='/fitness-trainers'>
									List of all Fitness Trainers
								</Link>
							)}
							{router.pathname === '/fitness-trainers/create-appointment' ? (
								<div className='text-orange-500'>
									Take a Appointment
								</div>
							) : (
								<Link href='/fitness-trainers/create-appointment'>
									Take a Appointment
								</Link>
							)}
						</div>
					</>
				) : (
					<button onClick={() => { setFitnessTrainerSelected(true) }} className='flex flex-row gap-5 items-center'>
						<Image
							src='/navItems/fitness-trainers.svg'
							alt='fitness-trainers'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Fitness Trainers</div>
					</button>
				)}

				{psychologistSelected || router.pathname === '/psychologists' || router.pathname === '/psychologists/create-appointment' ? (
					<>
						<button onClick={() => { setPsychologistSelected(false); }} className='flex flex-row gap-5 items-center'>
							<Image
								src='/navItems/psychologists2.svg'
								alt='doctors'
								width={25}
								height={25}
								style={{ width: 'auto' }}
							/>
							<div className='font-semibold hidden laptop:flex text-rose-500'>Psychologists</div>
						</button>
						<div className='flex flex-col gap-2 pl-2'>
							{router.pathname === '/psychologists' ? (
								<div className='text-orange-500'>
									List of all Psychologists
								</div>
							) : (
								<Link href='/psychologists'>
									List of all Psychologists
								</Link>
							)}
							{router.pathname === '/psychologists/create-appointment' ? (
								<div className='text-orange-500'>
									Take a Appointment
								</div>
							) : (
								<Link href='/psychologists/create-appointment'>
									Take a Appointment
								</Link>
							)}
						</div>
					</>
				) : (
					<button onClick={() => { setPsychologistSelected(true); }} className='flex flex-row gap-5 items-center'>
						<Image
							src='/navItems/psychologists.svg'
							alt='doctors'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Psychologists</div>
					</button>
				)}

				{router.pathname === '/medical-history' ? (
					<Link
						href='/medical-history'
						className='flex flex-row gap-5 items-center'
						passHref>
						<Image
							src='/navItems/medical-history2.svg'
							alt='medical-history'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex text-rose-500'>Medical History</div>
					</Link>
				) : (
					<Link
						href='/medical-history'
						className='flex flex-row gap-5 items-center'
						passHref>
						<Image
							src='/navItems/medical-history.svg'
							alt='medical-history'
							width={25}
							height={25}
							style={{ width: 'auto' }}
						/>
						<div className='font-semibold hidden laptop:flex'>Medical History</div>
					</Link>
				)}
			</nav>
		</aside>
	);
}