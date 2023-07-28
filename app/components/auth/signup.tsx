'use client'
import Link from 'next/link';
import './auth.css'
import React, { useState, FormEvent } from 'react';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ここでAPIを呼び出したり、状態を更新したりします。
        console.log(`Id: ${name}, Email: ${email}, Password: ${password}`);
    };
    return (
        <div className="h-screen w-full bg-custom font-Zen">
            <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
            <div className="bg-[url('/lace.svg')] h-18"></div>
            <div className="auth-border pt-20">
                <div className=''>
                    <div className='flex justify-center items-center'>
                        <img src="/logo.png" alt="logo"/>
                    </div>
                    <h2 className=' py-4 text-center text-2xl font-bold'>とうろく</h2>
                    <form onSubmit={handleSubmit} className="bg-[url('/kumo1.png')] h-80 bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center">
                        <div className='w-full px-12'>
                            <div>
                                <div className='mb-2'>
                                    <label htmlFor="email" className='block mb-1 text-xl text-shadow'>
                                        なまえ
                                    </label>
                                    <input
                                        id="name"
                                        type="name"
                                        className='text-black bg-transparent w-full form-border text-shadow'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="ニックネーム"
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
                            <div className=' mt-2'>
                                <button type="submit" className='auth-button text-2xl font-normal'>
                                    <Link href="/auth/login">
                                        とうろく
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex flex-col items-center py-6'>
                        <button type="submit" className='google-button items-center mb-4 inline-flex'>
                            <img src="/Google.svg" alt="Google" className="mr-2 w-5 h-5"/>
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
export default Signup;