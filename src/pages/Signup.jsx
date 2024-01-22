// @/src/pages/SignUp.jsx
import React, { useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import { usePocket } from "../contexts/PocketContext";

export const SignUp = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const { register } = usePocket();
    const navigate = useNavigate();

    const handleOnSubmit = useCallback(
        async (evt) => {
            evt?.preventDefault();
            await register(
                usernameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                passwordConfirmRef.current.value,
                nameRef.current.value);
            navigate("/");
        },
        [register]
    );

    return (
        <section>
            <h2>Sign Up</h2>
            <form onSubmit={handleOnSubmit}>
                <input placeholder="Username" type="text" ref={usernameRef} />
                <input placeholder="Fullname" type="text" ref={nameRef} />
                <input placeholder="Email" type="email" ref={emailRef} />
                <input placeholder="Password" type="password" ref={passwordRef} />
                <input placeholder="Password Confirm" type="password" ref={passwordConfirmRef} />
                <button type="submit">Create</button>
                <Link to="/sign-in">Go to Sign In</Link>
            </form>
        </section>
    );
};