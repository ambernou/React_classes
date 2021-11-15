import React from "react";
import { useSelector } from "react-redux";
import './Home.css'

export const Home = () => {
    const name = useSelector(state => state.name);

    return (
        <>
            <h2>Home</h2>
            <h3>{name}, welcome!</h3>
        </>
    )
}
