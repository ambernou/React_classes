import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleMessageList = (auth, mes) => {
    let newMessage = {author: auth, message: mes}
    let updatedMessageList = messageList.concat(newMessage);
    setMessageList(updatedMessageList);
  }

  useEffect(() => {
    const userName = 'bot';
    const botMessage = 'What is you problem?';
    if (messageList.length === 0) {
      console.log('no messages');
    } else if (messageList[messageList.length-1].author === 'user') {
      handleMessageList(userName, botMessage);
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        { messageList.length !== 0 && <Message messageList={messageList} />}
        <Form sendMessage={handleMessageList}/>
      </header>
    </div>
  );
}

export default App;
