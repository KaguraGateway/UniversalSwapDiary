'use client'
import Link from 'next/link';
import React, { useState, FormEvent } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ここでAPIを呼び出したり、状態を更新したりします。
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className='flex justify-center items-center text-center'>
            <div className=''>
                <div>
                    <p>登録</p>
                    <img src="/logo.png" alt="logo" />
                    <p></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            パスワード
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        <Link href="login">
                        サインアップ
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
