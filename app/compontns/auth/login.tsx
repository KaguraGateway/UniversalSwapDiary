'use client'
import Link from 'next/link';
import React, { useState, FormEvent } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // ここでAPIを呼び出したり、状態を更新したりします。
        console.log(`Email: ${email}, Password: ${password}`);
    };

    const handleGoogleLogin = () => {
        console.log('Google Login')
    };

    const handleSignUp = () => {
        console.log('Sign Up')
    };

    return (
        <div className="flex justify-center items-center text-center">
            <div>
                <div>
                    <p>それっぽい言葉</p>
                    <img src="/logo.png" alt="logo" />
                    <p>交換日記</p>
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
                        ログイン
                    </button>
                </form>
                <div>
                    <button onClick={handleGoogleLogin}>
                        Googleでログイン
                    </button>
                </div>
                <div>
                    <button onClick={handleSignUp}>
                        <Link href="auth/signup">
                        はじめてのひとはこちら
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
