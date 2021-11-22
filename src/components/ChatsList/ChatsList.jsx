import React, { useState } from "react";
import { ListGroup, Button, FormControl, InputGroup } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import { ChatItem } from "../ChatItem/ChatItem";
// import { useParams } from 'react-router';
import './ChatsList.css';

export const ChatsList = ({ chatList, onAddChat, onDeleteChat }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat(value);
        setValue('');
    }

    return (
        <div className="chatsList">
            <h3>List of chats</h3>
            <ListGroup>
                { chatList.map((chat) => (
                    <ListGroup.Item key={chat.id}>
                        {/* <NavLink 
                            style={({ isActive}) => ({ color: isActive ? "red" : "blue"})}
                            to={`/chats/${chat.id}`}
                        >
                            {chat.name}
                        </NavLink>
                        <Button type="submit" variant="primary" onClick={() => onDeleteChat(chat.id)}><i className="fas fa-trash"></i></Button> */}
                        <ChatItem chat={chat} onDeleteChat={onDeleteChat} />
                    </ListGroup.Item>
                )) }
            </ListGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="New chat"
                    value={value}
                    onChange={handleChange}
                />
                <Button type='submit' variant="primary" onClick={handleSubmit}>
                    Create
                </Button>
            </InputGroup>
        </div>
    )
};
