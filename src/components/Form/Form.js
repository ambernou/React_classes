import React from 'react';
import { useState } from 'react';

export const Form = ({ sendMessage }) => {
    const [userMessage, setUserMessage] = useState('');
    const userName = 'user';

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userMessage)
        sendMessage(userName, userMessage);
        setUserMessage('');
    }

    return (
        <form>
            <p>Enter your message:</p>
            <input type='text' value={userMessage} onChange={handleChange} />
            <button type='submit' onClick={handleSubmit}>Send!</button>
        </form>
    )
}