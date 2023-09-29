import React from 'react';
import Layout from '../../components/layout';
import ProfileCard from '@/components/cards/profile-card';
import TopBar from '@/components/top-bar';

export default function Dieticians() {
    const data = [
        {
            id: 3,
            name: 'Dr. Jon Sina',
            image: '/images/profile-picture3.svg',
            details: 'Dietician in Apollo Hospital',
            ratings: 4.5,
            reviews: 17,
        },
        {
            id: 3,
            name: 'Dr. Jon Sina',
            image: '/images/profile-picture3.svg',
            details: 'Dietician in Apollo Hospital',
            ratings: 4.5,
            reviews: 17,
        },
        {
            id: 3,
            name: 'Dr. Jon Sina',
            image: '/images/profile-picture3.svg',
            details: 'Dietician in Apollo Hospital',
            ratings: 4.5,
            reviews: 17,
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
