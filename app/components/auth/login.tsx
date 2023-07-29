'use client'
import Link from 'next/link';
import './auth.css'
import React, { useState, FormEvent } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { KawaiiTitle } from '@/ui/KawaiiTitle';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = createClientComponentClient();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.signInWithPassword({
            email: usernameOrEmail,
            password
        });
        router.push('/home');
    };

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center'>
                <Image src="/logo.svg" alt="logo" width={300} height={88} />
            </div>
            <KawaiiTitle size='2xl' className="py-4">ログイン</KawaiiTitle>
            <form onSubmit={handleSubmit} className="h-80 flex flex-col items-center justify-center">
                <div className="bg-[url('/cloud.svg')] bg-no-repeat bg-center bg-cover max-w-sm">
                    <div className='w-full px-12 py-6'>
                        <div>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block mb-2 text-xl text-shadow'>
                                    なまえ
                                </label>
                                <input
                                    id="usernameOrEmail"
                                    type="text"
                                    className='text-black bg-transparent w-full form-border text-shadow'
                                    value={usernameOrEmail}
                                    onChange={e => setUsernameOrEmail(e.target.value)}
                                    placeholder="ID/Email"
                                />
                            </div>
                            <div className='mb-4 pt-2'>
                                <label htmlFor="password" className='block mb-2 text-xl pt-2 text-shadow'>
                                    パスワード
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
                            <div className='flex justify-center mt-2'>
                                <button type='submit' className='auth-button text-2xl font-normal'>
                                    ログイン
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='flex flex-col items-center pt-10'>
                <button onClick={handleGoogleLogin} className='google-button items-center mb-4 inline-flex'>
                    <Image src="/Google.svg" alt="Google" className="mr-2 w-5 h-5" width={20} height={20} />
                    ぐーぐるでろぐいん
                </button>
                <button className='pt-4'>
                    <Link href="/auth/signup">
                        はじめてのひとはこちら
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Login;
