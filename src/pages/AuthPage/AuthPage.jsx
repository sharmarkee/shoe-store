import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser, user }) {
    return (
        <main>
            <h1>AuthPage</h1>
                <SignUpForm setUser={setUser} />
                <LoginForm setUser={setUser} />
        </main>
    );
} 