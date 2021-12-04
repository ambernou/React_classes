import { onValue, set } from "@firebase/database";
import React, { useCallback, useEffect, useState } from "react";
import { ListGroup, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { chatsRef, getChatMsgsRefById, getChatRefById } from "../../services/firebase";
import { addChat, addChatWithFb, deleteChat, initChatsTracking, removeChatWithFB } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { ChatItem } from "../ChatItem/ChatItem";
import './ChatsList.css';

export const ChatsList = () => {
    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(initChatsTracking());
        // onValue(chatsRef, (chatsSnap) => {
        //     console.log(chatsSnap);

        //     const newChats = [];
        //     chatsSnap.forEach((snapshot) => {
        //         newChats.push(snapshot.val());
        //     });

        //     setChats(newChats);
        // });
    }, []);

    const handleDeleteChat = useCallback((idToDelete) => {
        // dispatch(deleteChat(idToDelete));
        dispatch(removeChatWithFB(idToDelete));
    }, [dispatch]);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = `${value}${Date.now()}`;
        dispatch(addChatWithFb({name: value, id: newId}));
        //dispatch(addChat({name: value, id: newId}));
        //handleAddChat(value);

        // set(getChatRefById(newId), { name: value, id: newId });
        // set(getChatMsgsRefById(newId), { empty: true });

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
