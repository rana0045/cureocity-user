import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

export default function ProfileCard(props) {
    const { id, name, image, details, ratings, reviews } = props;
    return (
        <div className='ipad:w-80 w-52 h-fit flex flex-col p-5 border rounded-xl shadow-md'>
            <Link href={`/doctor-profile/${id}`} passHref>
                <div className='flex ipad:flex-row flex-col items-center justify-center gap-10'>
                    <div>
                        <Image
                            src={image}
                            alt='Profile Picture'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='text-xl font-medium'>{name}</div>
                        <div className='text-xs text-gray-500 font-light'>{details}</div>
                        <div className='flex flex-row items-center gap-2'>
                            <AiFillStar color='gold' size={20} />
                            <div className='font-semibold'>{ratings}</div>
                            <div className='text-sm text-gray-500'>{`(${reviews} reviews)`}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
