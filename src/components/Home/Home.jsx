import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { selectName } from "../../store/profile/selectors";
import { SignForm } from "../SignForm";
import './Home.css'

export const Home = () => {
    // const name = useSelector(selectName);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
            await logIn(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Home</h2>
            {/* <h3>{name}, welcome!</h3> */}
            <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
            <Link to="signup">Sign Up</Link>
        </>
    );
};
