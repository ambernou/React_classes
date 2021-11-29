import React, { useCallback, useState } from "react";
import { ListGroup, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { ChatItem } from "../ChatItem/ChatItem";
import './ChatsList.css';

export const ChatsList = () => {
    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = useCallback ((name) => {
        const newId = `${name}${Date.now()}`;
        dispatch(addChat({name, id: newId}));
    }, [dispatch]);

    const handleDeleteChat = useCallback((idToDelete) => {
        dispatch(deleteChat(idToDelete));
    }, [dispatch]);

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddChat(value);
        setValue('');
    }

    return (
        <div className="chatsList">
            <h3>List of chats</h3>
            <ListGroup>
                { chatList.map((chat) => (
                    <ListGroup.Item key={chat.id}>
                        <ChatItem chat={chat} onDeleteChat={handleDeleteChat} />
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
