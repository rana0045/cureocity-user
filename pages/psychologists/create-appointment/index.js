import React, { useState, useRef } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Layout from '@/components/layout';
import TopBar from '@/components/top-bar';

export default function CreateAppointment() {

    const options = [
        {
            value: 1,
            label: 'Dr. Mim Akhter',
        },
        {
            value: 2,
            label: 'Dr. Zim Khan',
        },
        {
            value: 3,
            label: 'Dr. Jon Sina',
        },
        {
            value: 4,
            label: 'Dr. Rob',
        },
    ]

    const timeSlots = [
        {
            id: 1,
            time: '10:45 PM',
            status: 'available'
        },
        {
            id: 2,
            time: '11:00 AM',
            status: 'unavailable'
        },
        {
            id: 3,
            time: '11:30 AM',
            status: 'available'
        },
        {
            id: 4,
            time: '12:30 PM',
            status: 'available'
        },
        {
            id: 5,
            time: '2:00 PM',
            status: 'unavailable'
        },
        {
            id: 6,
            time: '3:30 PM',
            status: 'available'
        },
        {
            id: 7,
            time: '4:45 PM',
            status: 'available'
        },
        {
            id: 8,
            time: '5:00 PM',
            status: 'available'
        },
    ]

    const fileInputRef = useRef(null);

    const [dragging, setDragging] = useState(false);
    const [selectedFileURLs, setSelectedFileURLs] = useState(null);
    const [selectedValue, setSelectedValue] = useState(options[0]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        img: []
    });

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;

        if (files?.length > 0) {
            const updatedFiles = Array.from(files);
            setFormData((prevState) => ({
                ...prevState,
                img: updatedFiles,
            }));

            const filePromises = updatedFiles.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(filePromises)
                .then((results) => {
                    setSelectedFileURLs(results);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


    const handleChange = (e) => {
        e.preventDefault();
        const { files } = e.target;

        if (files?.length > 0) {
            const updatedFiles = Array.from(files);
            setFormData((prevState) => ({
                ...prevState,
                img: updatedFiles,
            }));

            const filePromises = updatedFiles.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(filePromises)
                .then((results) => {
                    setSelectedFileURLs(results);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleDateChange = (date) => {
        const dateString = moment(date).format('YYYY-MM-DD');
        console.log(dateString);
        setSelectedDate(date);
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    //console.log(formData);

    return (
        <Layout>
            <TopBar />
            <div className='w-full h-fit p-20 flex flex-col'>
                <div className='w-full flex flex-row justify-center gap-32'>
                    <div className='w-80'>
                        <label className='pl-2 text-lg text-gray-500'>
                            Appointment for
                            <select
                                name='appointment'
                                className='w-full bg-white text-base border mt-5 px-5 py-2 appearance-none rounded-xl shadow-lg'
                                value={selectedValue}
                                onChange={handleSelectChange}
                            >
                                {options?.map((option, key) => {
                                    return (
                                        <option
                                            key={key}
                                            value={option?.value}
                                        >
                                            {option?.label}
                                        </option>
                                    );
                                })}
                            </select>
                        </label>
                    </div>
                    <div className='w-7/12'>
                        <label className='pl-2 text-lg text-gray-500'>
                            Note
                            <textarea className='w-full border rounded-xl shadow-lg mt-5 h-20 p-3' />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row w-full p-20'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-lg text-gray-500'>Time</div>
                        <div className='grid grid-flow-col mr-20 shadow-lg'>
                            {timeSlots?.map((slot, key) => {
                                return (
                                    <div key={key}>
                                        {slot?.status === 'available' ? (
                                            <>
                                                {slot?.id === selectedSlot?.id ? (
                                                    <button
                                                        onClick={() => {
                                                            setSelectedSlot(null);
                                                        }}
                                                        className='py-2 px-3 text-sm font-thin bg-green-100 border border-green-500'>
                                                        {slot?.time}
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => {
                                                            setSelectedSlot(slot);
                                                        }}
                                                        className='py-2 px-3 text-sm font-thin border'>
                                                        {slot?.time}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <div className='py-2 px-3 h-full text-sm font-thin bg-gray-300'>
                                                {slot?.time}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-lg text-gray-500'>Date</div>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Select a date"
                                className='shadow-lg'
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='px-20'>
                    <div
                        className={`px-4 py-2 w-fit min-w-[750px] flex flex-col cursor-pointer ${dragging ? 'border border-dashed border-gray-600' : 'border border-dashed border-gray-300'}`}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        draggable={false}
                    >
                        <div className='flex justify-end'>
                            <button onClick={() => {
                                setSelectedFileURLs(null);
                                setFormData({ img: [] });
                            }}>
                                <XMarkIcon className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>
                        <div className='flex flex-row gap-5 items-end'>
                            <button
                                type="button"
                                className="px-8 py-1 h-fit bg-blue-500 text-white text-sm rounded-full cursor-pointer"
                                onClick={handleClick}>
                                Upload
                            </button>
                            {selectedFileURLs?.length > 0 ? selectedFileURLs.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt={`Preview ${index}`}
                                    width={100}
                                    height={100}
                                />
                            ))
                                :
                                (
                                    <div className='text-gray-500'>or drag and drop files here</div>
                                )
                            }
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            type="file"
                            name="img"
                            id="img"
                            onChange={handleChange}
                            accept="image/*"
                            ref={fileInputRef}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <div className='px-20 pt-20 flex flex-row gap-20'>
                    <button className='rounded-full py-1 px-10 text-sm text-white bg-orange-500'>Book</button>
                    <button className='rounded-full py-1 px-10 text-orange-500 border border-orange-500'>Cancel</button>
                </div>
            </div>
        </Layout>
    );
}
