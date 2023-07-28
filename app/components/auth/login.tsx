'use client'
import Link from 'next/link';
import './auth.css'
import React, { useState, FormEvent } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = createClientComponentClient();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await supabase.auth.signInWithPassword({
            email,
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
        <div className="h-screen w-full bg-custom font-Zen">
            <div className="bg-[url('/lace.svg')] h-18"></div>
            <div className="auth-border pt-20">
                <div className=''>
                    <div className='flex justify-center items-center'>
                        <img src="/Logo.png" alt="logo"/>
                    </div>
                    <h2 className=' py-4 text-center text-2xl font-bold'>ログイン</h2>
                    <form onSubmit={handleSubmit} className="bg-[url('/kumo1.png')] h-72 bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center">
                        <div className='w-full px-12'>
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
                                <button type='submit' className='auth-button text-2xl font-normal'>
                                    ログイン
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex flex-col items-center py-10'>
                        <button onClick={handleGoogleLogin} className='google-button items-center mb-4 inline-flex'>
                            <img src="/Google.svg" alt="Google" className="mr-2 w-5 h-5" />
                            ぐーぐるでろぐいん
                        </button>
                        <button className='pt-4'>
                            <Link href="/auth/signup">
                                はじめてのひとはこちら
                            </Link>
                        </button>
                    </div>
                    <div className="bg-[url('/lace_invert.svg')] h-18 absolute bottom-0 w-full flex justify-center items-end">
                        <p className="mb-2">
                            Copyright © 2023 ぬるぽ工業大学
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
