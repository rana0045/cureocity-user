import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Checkbox from '@mui/material/Checkbox';
import Header from '@/components/layout/header';
import { GlobalContext } from '@/context/context';

export default function Packages() {

    const router = useRouter();

    const packages = [
        {
            id: 1,
            name: 'General Doctor',
            no_of_appointments: 3,
            price: 35
        },
        {
            id: 2,
            name: 'Fitness Trainer',
            no_of_appointments: 4,
            price: 45
        },
        {
            id: 3,
            name: 'Dietician',
            no_of_appointments: 1,
            price: 25
        },
        {
            id: 4,
            name: 'Psychologist',
            no_of_appointments: 5,
            price: 55
        }
    ]

    let { state, dispatch } = useContext(GlobalContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < state?.cart?.length; i++) {
            temp += state?.cart[i]?.price;
        }
        setTotal(temp);
    }, [state]);

    const handleGeneralDoctorSelect = () => {
        if (state?.cart?.some(item => item.id === packages[0]?.id)) {
            dispatch(
                {
                    type: 'REMOVE_ITEM',
                    payload: packages[0]?.id
                }
            );
        }
        else {
            dispatch({
                type: 'ADD_ITEM',
                payload: packages[0],
            });
        }
    };

    const handleFitnessTrainerSelect = () => {
        if (state?.cart?.some(item => item.id === packages[1]?.id)) {
            dispatch(
                {
                    type: 'REMOVE_ITEM',
                    payload: packages[1]?.id
                }
            );
        }
        else {
            dispatch({
                type: 'ADD_ITEM',
                payload: packages[1],
            });
        }
    };

    const handleDieticianSelect = () => {
        if (state?.cart?.some(item => item.id === packages[2]?.id)) {
            dispatch(
                {
                    type: 'REMOVE_ITEM',
                    payload: packages[2]?.id
                }
            );
        }
        else {
            dispatch({
                type: 'ADD_ITEM',
                payload: packages[2],
            });
        }
    };

    const handlePsychologistSelect = () => {
        if (state?.cart?.some(item => item.id === packages[3]?.id)) {
            dispatch(
                {
                    type: 'REMOVE_ITEM',
                    payload: packages[3]?.id
                }
            );
        }
        else {
            dispatch({
                type: 'ADD_ITEM',
                payload: packages[3],
            });
        }
    };

    console.log(state);

    return (
        <div className='flex flex-col items-center justify-between w-full min-h-screen'>
            <div className='flex flex-col items-center w-full'>
                <Header />
                <div className='flex flex-col items-center w-full'>
                    <div className='text-3xl font-semibold pt-20'>Multi-Select Package</div>
                    <div className='text-7xl pt-5'>${total}</div>
                    <div className='grid grid-cols-2 gap-10 pt-20'>
                        <div className='flex items-center justify-center pl-2 pr-5 py-5 rounded-lg shadow-xl w-[500px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-row items-center'>
                                    <Checkbox
                                        checked={state?.cart?.some(item => item.id === packages[0]?.id)}
                                        onChange={handleGeneralDoctorSelect}
                                        icon={<PlusCircleIcon className="h-10 w-10 text-gray-500" />}
                                        checkedIcon={<CheckCircleIcon className="h-10 w-10 text-green-500" />} />
                                    <div className='flex flex-col pl-2'>
                                        <div className='text-3xl text-gray-400'>{packages[0]?.name}</div>
                                        <div className='text-gray-400'>{packages[0]?.no_of_appointments} Appointments</div>
                                    </div>
                                </div>
                                <div className='text-4xl text-gray-600'>${packages[0]?.price}</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center pl-2 pr-5 py-5 rounded-lg shadow-xl w-[500px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-row items-center'>
                                    <Checkbox
                                        checked={state?.cart?.some(item => item.id === packages[1]?.id)}
                                        onChange={handleFitnessTrainerSelect}
                                        icon={<PlusCircleIcon className="h-10 w-10 text-gray-500" />}
                                        checkedIcon={<CheckCircleIcon className="h-10 w-10 text-green-500" />} />
                                    <div className='flex flex-col pl-2'>
                                        <div className='text-3xl text-gray-400'>{packages[1]?.name}</div>
                                        <div className='text-gray-400'>{packages[1]?.no_of_appointments} Appointments</div>
                                    </div>
                                </div>
                                <div className='text-4xl text-gray-600'>${packages[1]?.price}</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center pl-2 pr-5 py-5 rounded-lg shadow-xl w-[500px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-row items-center'>
                                    <Checkbox
                                        checked={state?.cart?.some(item => item.id === packages[2]?.id)}
                                        onChange={handleDieticianSelect}
                                        icon={<PlusCircleIcon className="h-10 w-10 text-gray-500" />}
                                        checkedIcon={<CheckCircleIcon className="h-10 w-10 text-green-500" />} />
                                    <div className='flex flex-col pl-2'>
                                        <div className='text-3xl text-gray-400'>{packages[2]?.name}</div>
                                        <div className='text-gray-400'>{packages[2]?.no_of_appointments} Appointments</div>
                                    </div>
                                </div>
                                <div className='text-4xl text-gray-600'>${packages[2]?.price}</div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center pl-2 pr-5 py-5 rounded-lg shadow-xl w-[500px]'>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-row items-center'>
                                    <Checkbox
                                        checked={state?.cart?.some(item => item.id === packages[3]?.id)}
                                        onChange={handlePsychologistSelect}
                                        icon={<PlusCircleIcon className="h-10 w-10 text-gray-500" />}
                                        checkedIcon={<CheckCircleIcon className="h-10 w-10 text-green-500" />} />
                                    <div className='flex flex-col pl-2'>
                                        <div className='text-3xl text-gray-400'>{packages[3]?.name}</div>
                                        <div className='text-gray-400'>{packages[3]?.no_of_appointments} Appointments</div>
                                    </div>
                                </div>
                                <div className='text-4xl text-gray-600'>${packages[3]?.price}</div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            if (state?.cart?.length > 0) {
                                router.push('/checkout');
                            }
                        }}
                        className='rounded-full py-2 px-8 mt-20 shadow-lg bg-gradient-to-b from-white to-slate-300 text-rose-500 uppercase'>buy now</button>
                </div>
            </div>
            <div className='w-full flex flex-row gap-3 items-center justify-end p-10'>
                <div className='text-xl font-semibold'>Holistic Package</div>
                <Link href='/select-holistic-package' passHref>
                    <ArrowRightCircleIcon className="h-10 w-10 text-orange-500" />
                </Link>
            </div>
        </div>
    );
}
