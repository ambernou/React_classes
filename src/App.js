import React, { useState, useCallback } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import Chats from "./components/Chats/Chats";
import { ChatsList } from "./components/ChatsList/ChatsList";
import { Home } from "./components/Home/Home";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { v4 as uuidv4 } from 'uuid';
import { addChat, deleteChat } from "./store/chats/actions";
import { useDispatch, useSelector } from "react-redux";

// const initialChatList = [
//   {name: 'Husband', id: 'husband'},
//   {name: 'Cat', id: 'cat'},
//   {name: 'Mom', id: 'mom'},
//   {name: 'Dad', id: 'dad'}
// ];

const initialMessages = {
  // husband: [
  //     {id: uuidv4(), author: 'husband', message: 'Where is my shirt?!'}
  // ],
  // cat: [
  //     {id: uuidv4(), author: 'cat', message: 'Meow!'},
  //     {id: uuidv4(), author: 'cat', message: 'Meow!'},
  // ],
  // mom: [],
  // dad: [],
};

export const App = () => {
  // const [chatList, setChatList] = useState(initialChatList);
  const chatList = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(initialMessages);

  const handleAddChat = useCallback((name) => {
    const newId = `${name}${Date.now()}`;

    // setChatList((prevChatList) => [...prevChatList, {name, id: newId}]);
    dispatch(addChat({name, id: newId}));
    
    setMessages((prevMessages) => ({
      ...prevMessages,
      [newId]: [],
    }));
  }, [dispatch]);

  const handleDeleteChat = useCallback((idToDelete) => {
    // setChatList((prevChatList) => prevChatList.filter(({ id }) => id !== idToDelete));
    dispatch(deleteChat(idToDelete));

    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[idToDelete];
      
      return newMessages;
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myprofile">My profile</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="chats">
          <Route index element={<ChatsList chatList={chatList} onAddChat={handleAddChat} onDeleteChat={handleDeleteChat} />} />
          <Route 
            path=":chatId"
            element={
              <Chats
                chatList={chatList}
                messages={messages}
                setMessages={setMessages}
                onAddChat={handleAddChat}
                onDeleteChat={handleDeleteChat} 
              />
            }
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
};
