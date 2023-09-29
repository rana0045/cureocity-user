import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Header from '@/components/layout/header';
import { GlobalContext } from '@/context/context';

export default function HolisticPackages() {

    const router = useRouter();

    const holistic_package = {
        id: 5,
        name: 'Holistic Package',
        packages: [
            {
                name: 'General Doctor',
                no_of_appointments: 3
            },
            {
                name: 'Fitness Trainer',
                no_of_appointments: 4
            },
            {
                name: 'Dietician',
                no_of_appointments: 1
            },
            {
                name: 'Psychologist',
                no_of_appointments: 5
            }
        ],
        price: 175
    }

    let { state, dispatch } = useContext(GlobalContext);

    console.log(state);

    return (
        <div className='flex flex-col items-center justify-between w-full min-h-screen'>
            <div className='flex flex-col w-full items-center'>
                <Header />
                <div className='flex flex-col justify-between bg-gradient-to-b from-neutral-300 to-neutral-50 w-80 rounded-[60px] mt-20'>
                    <div className="w-full flex flex-col gap-1 justify-center items-center h-44 bg-cover bg-no-repeat bg-[url('/icons/upper-curve.svg')] rounded-t-[50px]">
                        <div className='text-white text-2xl font-semibold'>Holistic Package</div>
                        <div className='text-white text-5xl'>${holistic_package?.price}</div>
                    </div>
                    <div className='flex flex-col p-5'>
                        <div className='text-sm text-center text-gray-500 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        {holistic_package?.packages?.map((item, key) => {
                            return (
                                <div className='flex flex-col gap-3 py-2' key={key}>
                                    <div className='flex flex-row px-3 gap-5'>
                                        <Image
                                            src='/icons/tick.svg'
                                            alt='blog'
                                            width={35}
                                            height={35}
                                        />
                                        <div className='flex flex-col'>
                                            <div className='text-xl text-gray-500'>{item?.name}</div>
                                            <div className='text-sm text-gray-500'>{item?.no_of_appointments} Appointments</div>
                                        </div>
                                    </div>
                                    <div className='bg-gray-300 w-full' style={{ height: '1.5px' }} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full flex justify-center items-center h-28 bg-cover bg-no-repeat bg-[url('/icons/lower-curve.svg')] rounded-b-[50px]">
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'ADD_ITEM',
                                    payload: holistic_package,
                                });
                                router.push('/checkout');
                            }}
                            className='rounded-full py-2 px-8 mt-5 shadow-lg bg-gradient-to-b from-white to-slate-300 text-rose-500 text-sm uppercase'>buy now</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row gap-3 items-center justify-end p-10'>
                <div className='text-xl font-semibold'>Multi-Select Package</div>
                <Link href='/select-package' passHref>
                    <ArrowRightCircleIcon className="h-10 w-10 text-orange-500" />
                </Link>
            </div>
        </div>
    );
}
