import { MessageForm } from './components/MessageForm/MessageForm';
import { RenderMessageList } from './components/RenderMessageList/RenderMessageList';
import { ChatsList } from './components/ChatsList/ChatsList';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleMessageList = (auth, mes) => {
    const newMessage = {id: uuidv4(), author: auth, message: mes}
    const updatedMessageList = messageList.concat(newMessage);
    setMessageList(updatedMessageList);
  }

  useEffect(() => {
    const userName = 'bot';
    const botMessage = 'What is you problem?';
    if (messageList.length === 0) {
      console.log('no messages');
    } else if (messageList[messageList.length-1].author === 'user') {
      const timeout = setTimeout(() => handleMessageList(userName, botMessage), 1500);
      return () => clearTimeout(timeout)
    }
  }, [messageList]);

  return (
    <div className="chatsBox">
      <div className="chatsTitle">
        <ChatsList />
      </div>
      <div className="chatItem">
        <div>
          { messageList.length !== 0 ? <RenderMessageList messageList={messageList}/> : 'no messages'}
        </div>
        <MessageForm sendMessage={handleMessageList}/>
      </div>  
    </div>
  );
}

export default App;
