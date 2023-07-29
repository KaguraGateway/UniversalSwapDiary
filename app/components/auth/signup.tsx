'use client'
import Link from 'next/link';
import './auth.css'
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { KawaiiTitle } from '@/ui/KawaiiTitle';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                username
            })
        })
        router.push('/auth/login');
    };
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center items-center'>
                <Image src="/logo.svg" alt="logo" width={300} height={88} />
            </div>
            <KawaiiTitle size='2xl' className="py-4">とうろく</KawaiiTitle>
            <form onSubmit={handleSubmit} className="h-80 flex flex-col items-center justify-center">
                <div className="bg-[url('/cloud.svg')] bg-no-repeat bg-center bg-cover max-w-sm">
                    <div className='w-full px-12 py-6'>
                        <div>
                            <div className='mb-2'>
                                <label htmlFor="email" className='block mb-1 text-xl text-shadow'>
                                    なまえ
                                </label>
                                <input
                                    id="id"
                                    type="id"
                                    className='text-black bg-transparent w-full form-border text-shadow'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder="ID"
                                />
                            </div>

                            <div className='mb-2 pt-1'>
                                <label htmlFor="password" className='block mb-1 text-xl text-shadow'>
                                    メールアドレス
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className='text-black bg-transparent w-full form-border text-shadow'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className='pt-1'>
                                <label htmlFor="password" className='block mb-1 text-xl pt-2 text-shadow'>
                                    あいことば
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className='text-black bg-transparent w-full form-border text-shadow'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <button type="submit" className='auth-button text-2xl font-normal'>
                                とうろく
                            </button>
                        </div>
                    </div >
                </div>
            </form >
            <div className='flex flex-col items-center py-6'>
                <button type="submit" className='google-button items-center mb-4 inline-flex'>
                    <Image src="/Google.svg" alt="Google" className="mr-2 w-5 h-5" width={20} height={20} />
                    <Link href="/auth/login">
                        ぐーぐるでとうろく
                    </Link>
                </button>
                <button>
                    <Link href="/auth/login">
                        ろぐいんはこちら
                    </Link>
                </button>
            </div>
        </div >
    );
};
export default Signup;