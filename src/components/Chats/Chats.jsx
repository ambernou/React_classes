import { MessageForm } from '../MessageForm/MessageForm';
import { RenderMessageList } from '../RenderMessageList/RenderMessageList';
import { ChatsList } from '../ChatsList/ChatsList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { Navigate, useParams } from 'react-router';

const initialMessages = {
    husband: [
        {id: uuidv4(), author: 'husband', message: 'Where is my shirt?!'}
    ],
    cat: [
        {id: uuidv4(), author: 'cat', message: 'Meow!'},
        {id: uuidv4(), author: 'cat', message: 'Meow!'},
    ],
    mom: [],
    dad: [],
};

function Chats() {
    const { chatId } = useParams();

    const [messageList, setMessageList] = useState(initialMessages);

    const handleMessageList = (auth, mes) => {
        const newMessage = {id: uuidv4(), author: auth, message: mes}
        // const updatedMessageList = messageList[chatId].concat(newMessage);
        // console.log(updatedMessageList);
        // setMessageList(updatedMessageList);
        setMessageList((prevMessages) => ({
            ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage]
        }));
    };

    const deleteChat = () => {
        console.log('del chat ' + chatId);
        delete messageList[chatId];
        console.log(messageList);
    };

  useEffect(() => {
    const userName = 'bot';
    const botMessage = 'What is you problem?';
    if (messageList[chatId]?.length === 0) {
        console.log('no messages');
    } else if (messageList[chatId]?.[messageList[chatId].length-1].author === 'user') {
        const timeout = setTimeout(() => handleMessageList(userName, botMessage), 1500);
        return () => clearTimeout(timeout)
    }
  }, [messageList]);

  if (!messageList[chatId]) {
      return <Navigate replace to="/chats"></Navigate>
  }

  return (
    <div className="chatsBox">
        <div className="chatsTitle">
            <ChatsList deleteChat={deleteChat} />
        </div>
        <div className="chatItem">
            <div>
                { messageList[chatId].length !== 0 ? <RenderMessageList messageList={messageList[chatId]}/> : 'no messages'}
            </div>
            <MessageForm sendMessage={handleMessageList}/>
        </div>  
    </div>
  );
}

export default Chats;
