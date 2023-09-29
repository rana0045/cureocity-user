import React from 'react';
import Layout from '../../components/layout';
import ProfileCard from '@/components/cards/profile-card';
import TopBar from '@/components/top-bar';

export default function Psychologists() {
    const data = [
        {
            id: 4,
            name: 'Dr. Rob',
            image: '/images/profile-picture5.svg',
            details: 'Psychologist in Apollo Hospital',
            ratings: 4.7,
            reviews: 21,
        },
        {
            id: 4,
            name: 'Dr. Rob',
            image: '/images/profile-picture5.svg',
            details: 'Psychologist in Apollo Hospital',
            ratings: 4.7,
            reviews: 21,
        },
        {
            id: 4,
            name: 'Dr. Rob',
            image: '/images/profile-picture5.svg',
            details: 'Psychologist in Apollo Hospital',
            ratings: 4.7,
            reviews: 21,
        }
    ]
    return (
        <Layout>
            <TopBar />
            <div className='pt-10 w-full h-fit grid medium:grid-cols-3 laptop:grid-cols-2 grid-cols-1 gap-10 justify-items-center'>
                {
                    data?.map((appointment, key) => {
                        return (
                            <ProfileCard
                                key={key}
                                id={appointment?.id}
                                name={appointment?.name}
                                image={appointment?.image}
                                details={appointment?.details}
                                ratings={appointment?.ratings}
                                reviews={appointment?.reviews}
                            />
                        );
                    })
                }

            </div>
        </Layout>
    );
}
