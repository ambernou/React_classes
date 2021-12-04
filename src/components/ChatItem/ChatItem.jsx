import React from "react";
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export const ChatItem = ({ chat, onDeleteChat}) => {
    const handleDeleteClick = () => {
        onDeleteChat(chat.id);
    };

    return (
        <React.Fragment>
            <NavLink 
                style={({ isActive}) => ({ color: isActive ? "red" : "blue"})}
                to={`/chats/${chat.id}`}
            >
            {chat.name}
            </NavLink>
            <Button type="submit" variant="primary" onClick={handleDeleteClick}><i className="fas fa-trash"></i></Button>
        </React.Fragment>
    );
}
