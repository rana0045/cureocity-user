import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from "@/components/layout";
import TopBar from "@/components/top-bar";

export default function DoctorProfile() {

    const router = useRouter();

    const [name, setName] = useState(router.query.index || 'default');

    useEffect(() => {
        if (router.query.index) {
            setName(router.query.index);
        }
    }, [router.query]);

    console.log(name);

    return (
        <Layout>
            <TopBar />
            <div className="w-full flex flex-col items-center pt-20 px-48">
                <Image
                    src='/images/blog-cover.svg'
                    alt='blog'
                    width={220}
                    height={220}
                    style={{ width: 'auto' }}
                />
                <div className="w-full text-sm text-orange-500 pt-10">Monday , April 24 2022</div>
                <div className="w-full pt-10 text-3xl">Lorem ipsum dolor</div>
                <div className="w-full pt-10">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</div>
            </div>
        </Layout>
    );
}