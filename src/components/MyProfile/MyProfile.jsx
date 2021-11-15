import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
// import { store } from '../../store';
import { toggleCheckbox, changeName } from "../../store/profile/actions";
import './MyProfile.css';

export const MyProfile = () => {
    // const state = store.getState();
    // const state = useSelector(state => state);
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();
    // console.log(state);

    const [newName, setNewName] = useState('');

    const handleChange = () => {
        //store.dispatch(toggleCheckbox);
        dispatch(toggleCheckbox);
    }

    const handleChangeName = (e) => {
        setNewName(e.target.value);
    }
    const handleChangeNameBtn = (e) => {
        e.preventDefault();
        dispatch(changeName(newName));
        setNewName('');
    }

    return (
        <>
        <h2>My profile</h2>
        <span>Checkbox: </span><input type="checkbox" checked={checkboxValue} onChange={handleChange} /><br />
        <input type="text" value={newName} onChange={handleChangeName} />
        <button type="submit" onClick={handleChangeNameBtn}>Create my new name!</button><br />
        <span>My name: {name}</span>
        </>
    )
}
