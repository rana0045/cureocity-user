import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiFillStar } from 'react-icons/ai';
import Layout from "@/components/layout";
import TopBar from "@/components/top-bar";

export default function DoctorProfile() {

    const data = [
        {
            id: 1,
            name: 'Dr. Mim Akhter',
            image: '/images/profile-picture2.svg',
            details: 'Cardiologist in Apollo Hospital',
            ratings: 4.5,
            reviews: 17,
            experience: 25,
            certifications: [
                'MBBS (Lady Hardinge Medical College, Dehli)',
                'MD (Obstetrics & Gynecology, Dehli)',
                'MRCOG (London, UK)',
                'DFSRH (UK)',
                'Fellowship in ART and Reproductive medicine (London)'
            ],
            speciality: [
                'Comprehensive Primary Care',
                'Preventive Medicine',
                'Health Maintenance and Management',
                'Acute and Chronic Disease Management',
                'Patient Advocacy and Education',
                'Referrals and Care Coordination',
                'Continuity of Care',
                'Lifespan Care',
                'Communication and Bedside Manner',
                'Continuing Medical Education'
            ],
            languages: [
                'English',
                'Spanish'
            ],
            bio: 'Dr. Mim Akhter is a dedicated and highly skilled diet doctor with a passion for promoting optimal health through personalized nutrition. With 07 years of experience in the field, has become a trusted authority in the realm of diet and nutrition Driven by a desire to help individuals achieve their health and wellness goals, Dr. Akhter specializes in assessing nutritional needs, designing tailored meal plans, and providing evidence-based guidance. Through compassionate and patient-centered care, Dr. Akhter empowers his patients to make informed choices and develop sustainable lifestyle habits. As a board-certified diet doctor, Dr. khan is well-versed in addressing a wide range of health conditions, including diabetes, cardiovascular diseases, gastrointestinal disorders, and food allergies. With a deep understanding of the intricate relationship between nutrition and overall well-being, Dr. Akhter combines medical expertise with a holistic approach to create comprehensive and effective treatment plans .Dr. Akhter strongly believes in the power of education and prevention. He actively engages in community outreach programs, delivering educational seminars and workshops to promote healthy eating habits and the prevention of diet-related diseases. By staying abreast of the latest research and advancements in the field, Dr. Akhter ensures that his patients receive the most up-to-date and innovative care available.',
            industry_experience: 'Dr. Mim Akhter  brings extensive experience in the field of diet and nutrition, with a proven track record of success in helping individuals achieve their health and wellness goals. Throughout a distinguished career spanning 07 years, Dr. Akhter has made significant contributions to the industry, solidifying his expertise and reputation. As a prominent diet doctor, Dr. Akhter has worked with a diverse range of patients, including individuals with various medical conditions, athletes seeking optimal performance, and those looking to improve their overall well-being. This breadth of experience has honed Dr. Akhter ability to tailor nutrition plans to meet the specific needs and goals of each individual, ensuring optimal results.',
            academic_details: "Dr. Mim Akhter possesses an impressive academic background, marked by rigorous training and a commitment to excellence in the field of diet and nutrition. His academic achievements serve as a solid foundation for his expertise and contributions to the industry. Dr. Akhterobtained a Bachelor's degree in Nutrition Sciences from Oxford uinversity where he developed a comprehensive understanding of the principles of nutrition and their impact on human health. This program provided him with a strong scientific background and a solid grasp of the biochemistry, physiology, and metabolism of nutrients."
        },
        {
            id: 2,
            name: 'Dr. Zim Khan',
            image: '/images/profile-picture4.svg',
            details: 'Fitness Trainer in Apollo Hospital',
            ratings: 4.2,
            reviews: 13,
            experience: 25,
            certifications: [
                'MBBS (Lady Hardinge Medical College, Dehli)',
                'MD (Obstetrics & Gynecology, Dehli)',
                'MRCOG (London, UK)',
                'DFSRH (UK)',
                'Fellowship in ART and Reproductive medicine (London)'
            ],
            speciality: [
                'Medical Background',
                'Exercise Prescription',
                'Medical Conditions and Exercise',
                'Injury Prevention and Rehabilitation',
                'Nutrition and Lifestyle Advice',
                'Integrative Approach',
                'Education and Motivation',
                'Continued Professional Development'
            ],
            languages: [
                'English',
                'Spanish'
            ],
            bio: 'Dr. Zim khan is a dedicated and highly skilled diet doctor with a passion for promoting optimal health through personalized nutrition. With 07 years of experience in the field, has become a trusted authority in the realm of diet and nutrition Driven by a desire to help individuals achieve their health and wellness goals, Dr. khan specializes in assessing nutritional needs, designing tailored meal plans, and providing evidence-based guidance. Through compassionate and patient-centered care, Dr. khan empowers his patients to make informed choices and develop sustainable lifestyle habits. As a board-certified diet doctor, Dr. khan is well-versed in addressing a wide range of health conditions, including diabetes, cardiovascular diseases, gastrointestinal disorders, and food allergies. With a deep understanding of the intricate relationship between nutrition and overall well-being, Dr. Sina combines medical expertise with a holistic approach to create comprehensive and effective treatment plans .Dr. khan strongly believes in the power of education and prevention. He actively engages in community outreach programs, delivering educational seminars and workshops to promote healthy eating habits and the prevention of diet-related diseases. By staying abreast of the latest research and advancements in the field, Dr. khan ensures that his patients receive the most up-to-date and innovative care available.',
            industry_experience: 'Dr. Zim khan  brings extensive experience in the field of diet and nutrition, with a proven track record of success in helping individuals achieve their health and wellness goals. Throughout a distinguished career spanning 07 years, Dr. khan has made significant contributions to the industry, solidifying his expertise and reputation. As a prominent diet doctor, Dr. khan has worked with a diverse range of patients, including individuals with various medical conditions, athletes seeking optimal performance, and those looking to improve their overall well-being. This breadth of experience has honed Dr. khan ability to tailor nutrition plans to meet the specific needs and goals of each individual, ensuring optimal results.',
            academic_details: "Dr. Zim khan possesses an impressive academic background, marked by rigorous training and a commitment to excellence in the field of diet and nutrition. His academic achievements serve as a solid foundation for his expertise and contributions to the industry. Dr. khan obtained a Bachelor's degree in Nutrition Sciences from Oxford uinversity where he developed a comprehensive understanding of the principles of nutrition and their impact on human health. This program provided him with a strong scientific background and a solid grasp of the biochemistry, physiology, and metabolism of nutrients."
        },
        {
            id: 3,
            name: 'Dr. Jon Sina',
            image: '/images/profile-picture3.svg',
            details: 'Dietician in Apollo Hospital',
            ratings: 4.5,
            reviews: 17,
            experience: 25,
            certifications: [
                'MBBS (Lady Hardinge Medical College, Dehli)',
                'MD (Obstetrics & Gynecology, Dehli)',
                'MRCOG (London, UK)',
                'DFSRH (UK)',
                'Fellowship in ART and Reproductive medicine (London)'
            ],
            speciality: [
                'Nutritional Assessment',
                'Dietary Counseling',
                'Weight Management',
                'Medical Conditions and Special Diets',
                'Education and Prevention',
            ],
            languages: [
                'English',
                'Spanish'
            ],
            bio: 'Dr. Jon sina is a dedicated and highly skilled diet doctor with a passion for promoting optimal health through personalized nutrition. With 07 years of experience in the field, has become a trusted authority in the realm of diet and nutrition Driven by a desire to help individuals achieve their health and wellness goals, Dr. Sina specializes in assessing nutritional needs, designing tailored meal plans, and providing evidence-based guidance. Through compassionate and patient-centered care, Dr. Sina empowers his patients to make informed choices and develop sustainable lifestyle habits.As a board-certified diet doctor,Dr. Sina is well-versed in addressing a wide range of health conditions, including diabetes, cardiovascular diseases, gastrointestinal disorders, and food allergies. With a deep understanding of the intricate relationship between nutrition and overall well-being, Dr. Sina combines medical expertise with a holistic approach to create comprehensive and effective treatment plans .Dr. Sina  strongly believes in the power of education and prevention. He actively engages in community outreach programs, delivering educational seminars and workshops to promote healthy eating habits and the prevention of diet-related diseases. By staying abreast of the latest research and advancements in the field, Dr. Sina ensures that his patients receive the most up-to-date and innovative care available.',
            industry_experience: 'Dr. Jon sina  brings extensive experience in the field of diet and nutrition, with a proven track record of success in helping individuals achieve their health and wellness goals. Throughout a distinguished career spanning 07 years, Dr. Sina has made significant contributions to the industry, solidifying his expertise and reputation. As a prominent diet doctor, Dr. Sina has worked with a diverse range of patients, including individuals with various medical conditions, athletes seeking optimal performance, and those looking to improve their overall well-being. This breadth of experience has honed Dr. Sina’s ability to tailor nutrition plans to meet the specific needs and goals of each individual, ensuring optimal results.',
            academic_details: "Dr. Jon sina possesses an impressive academic background, marked by rigorous training and a commitment to excellence in the field of diet and nutrition. His academic achievements serve as a solid foundation for his expertise and contributions to the industry. Dr. Sina obtained a Bachelor's degree in Nutrition Sciences from Oxford uinversity where he developed a comprehensive understanding of the principles of nutrition and their impact on human health. This program provided him with a strong scientific background and a solid grasp of the biochemistry, physiology, and metabolism of nutrients."
        },
        {
            id: 4,
            name: 'Dr. Rob',
            image: '/images/profile-picture5.svg',
            details: 'Psychologist in Apollo Hospital',
            ratings: 4.7,
            reviews: 21,
            experience: 25,
            certifications: [
                'MBBS (Lady Hardinge Medical College, Dehli)',
                'MD (Obstetrics & Gynecology, Dehli)',
                'MRCOG (London, UK)',
                'DFSRH (UK)',
                'Fellowship in ART and Reproductive medicine (London)'
            ],
            speciality: [
                'Clinical Expertise',
                'Psychotherapy and Counseling',
                'Specialized Populations',
                'Mental Health Assessment and Diagnosis',
                'Research and Evidence-Based Practice',
                'Specialized Therapeutic Approaches',
                'Consultation and Collaboration',
                'Advocacy and Education:'
            ],
            languages: [
                'English',
                'Spanish'
            ],
            bio: 'Dr. Rob is a dedicated and highly skilled diet doctor with a passion for promoting optimal health through personalized nutrition. With 07 years of experience in the field, has become a trusted authority in the realm of diet and nutrition Driven by a desire to help individuals achieve their health and wellness goals, Dr. khan specializes in assessing nutritional needs, designing tailored meal plans, and providing evidence-based guidance. Through compassionate and patient-centered care, Dr. khan empowers his patients to make informed choices and develop sustainable lifestyle habits. As a board-certified diet doctor, Dr. khan is well-versed in addressing a wide range of health conditions, including diabetes, cardiovascular diseases, gastrointestinal disorders, and food allergies. With a deep understanding of the intricate relationship between nutrition and overall well-being, Dr. Sina combines medical expertise with a holistic approach to create comprehensive and effective treatment plans .Dr. khan strongly believes in the power of education and prevention. He actively engages in community outreach programs, delivering educational seminars and workshops to promote healthy eating habits and the prevention of diet-related diseases. By staying abreast of the latest research and advancements in the field, Dr. khan ensures that his patients receive the most up-to-date and innovative care available.',
            industry_experience: 'Dr. Rob  brings extensive experience in the field of diet and nutrition, with a proven track record of success in helping individuals achieve their health and wellness goals. Throughout a distinguished career spanning 07 years, Dr. khan has made significant contributions to the industry, solidifying his expertise and reputation. As a prominent diet doctor, Dr. khan has worked with a diverse range of patients, including individuals with various medical conditions, athletes seeking optimal performance, and those looking to improve their overall well-being. This breadth of experience has honed Dr. khan ability to tailor nutrition plans to meet the specific needs and goals of each individual, ensuring optimal results.',
            academic_details: "Dr. Rob possesses an impressive academic background, marked by rigorous training and a commitment to excellence in the field of diet and nutrition. His academic achievements serve as a solid foundation for his expertise and contributions to the industry. Dr. khan obtained a Bachelor's degree in Nutrition Sciences from Oxford uinversity where he developed a comprehensive understanding of the principles of nutrition and their impact on human health. This program provided him with a strong scientific background and a solid grasp of the biochemistry, physiology, and metabolism of nutrients."
        }
    ]

    const router = useRouter();

    const [name, setName] = useState(router.query.index || 'default');

    useEffect(() => {
        if (router.query.index) {
            setName(router.query.index);
        }
    }, [router.query]);

    console.log(data?.filter(obj => obj?.id === parseInt(name)), name);

    return (
        <Layout>
            <TopBar />
            <div className="flex flex-col py-10">
                <div className="w-full ipad:px-20 px-10 pb-10 h-fit flex medium:flex-row flex-col gap-20">
                    <div className="flex flex-col w-fit gap-5 items-center justify-start">
                        <div className="rounded-full overflow-hidden h-36 w-36 flex justify-center items-center">
                            <Image
                                src={data?.filter(obj => obj?.id === parseInt(name))[0]?.image}
                                alt='Profile Picture'
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <div className='text-xl font-medium'>{data?.filter(obj => obj?.id === parseInt(name))[0]?.name}</div>
                            <div className='text-xs text-gray-500 font-light text-center'>{data?.filter(obj => obj?.id === parseInt(name))[0]?.details}</div>
                            <div className='flex flex-row items-center gap-2'>
                                <AiFillStar color='gold' size={20} />
                                <div className='font-semibold'>{data?.filter(obj => obj?.id === parseInt(name))[0]?.ratings}</div>
                                <div className='text-sm text-gray-500'>{`(${data?.filter(obj => obj?.id === parseInt(name))[0]?.reviews} reviews)`}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex computer:flex-row flex-col gap-10">
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold text-rose-500">{`${data?.filter(obj => obj?.id === parseInt(name))[0]?.experience}+ years of experience`}</div>
                            <div className="text-xs text-rose-500 py-2">Certified For Proficiency In Clinical Medicine</div>
                            <div>
                                <ul className="list-disc text-sm text-gray-500">
                                    {data?.filter(obj => obj?.id === parseInt(name))[0]?.certifications.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold text-rose-500">Speciality</div>
                            <div>
                                <ul className="text-sm text-gray-500 pt-2">
                                    {data?.filter(obj => obj?.id === parseInt(name))[0]?.speciality.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold text-rose-500">Consulting Languages</div>
                            <div>
                                <ul className="text-sm text-gray-500 pt-2">
                                    {data?.filter(obj => obj?.id === parseInt(name))[0]?.languages.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col ipad:px-20 px-10 pt-10">
                    <div className="text-2xl text-rose-500 font-semibold">{"Doctor's Bio"}</div>
                    <div className="text-sm py-5">{data?.filter(obj => obj?.id === parseInt(name))[0]?.bio}</div>
                </div>
                <div className="w-full flex flex-col ipad:px-20 px-10 pt-10">
                    <div className="text-2xl text-rose-500 font-semibold">Experience In Industry</div>
                    <div className="text-sm py-5">{data?.filter(obj => obj?.id === parseInt(name))[0]?.industry_experience}</div>
                </div>
                <div className="w-full flex flex-col ipad:px-20 px-10 pt-10">
                    <div className="text-2xl text-rose-500 font-semibold">Academic Details</div>
                    <div className="text-sm py-5">{data?.filter(obj => obj?.id === parseInt(name))[0]?.academic_details}</div>
                </div>
            </div>
        </Layout>
    );
}