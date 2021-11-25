import React from "react";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";
import './Home.css'

export const Home = () => {
    const name = useSelector(selectName);

    return (
        <>
            <h2>Home</h2>
            <h3>{name}, welcome!</h3>
        </>
    )
}
