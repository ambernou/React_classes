import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, userRef } from "../../services/firebase";
// import { store } from '../../store';
import { toggleCheckbox, changeName } from "../../store/profile/actions";
import { selectCheck, selectName } from "../../store/profile/selectors";
import { onValue, set } from "firebase/database";
import './MyProfile.css';

export const MyProfile = () => {
    const checkboxValue = useSelector(selectCheck);
    const name = useSelector(selectName);
    const dispatch = useDispatch ();

    const [newName, setNewName] = useState('');

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            dispatch(changeName(userData?.name || ""));
        });

        return unsubscribe;
    }, [changeName]);

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    const handleChangeName = (e) => {
        setNewName(e.target.value);
    };
    const handleChangeNameBtn = (e) => {
        e.preventDefault();
        // dispatch(changeName(newName));
        // setNewName('');
        set(userRef, {
            name: newName
        });
    };

    const handleLogOutClick = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <h2>My profile</h2>
        <span>Checkbox: </span><input type="checkbox" checked={checkboxValue} onChange={handleChange} /><br />
        <input type="text" value={newName} onChange={handleChangeName} />
        <button type="submit" onClick={handleChangeNameBtn}>Create my new name!</button><br />
        <span>My name: {name}</span>
        <button onClick={handleLogOutClick}>SIGN OUT</button>
        </>
    )
}
