import { MessageForm } from '../MessageForm/MessageForm';
import { RenderMessageList } from '../RenderMessageList/RenderMessageList';
import { ChatsList } from '../ChatsList/ChatsList';
import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Chats.css';
import { Navigate, useParams } from 'react-router';

function Chats({ chatList, messages, setMessages, onAddChat, onDeleteChat }) {
    const { chatId } = useParams();

    // const [messageList, setMessageList] = useState(initialMessages);

    const handleMessageList = useCallback(
        (auth, mes) => {
            const newMessage = {id: uuidv4(), author: auth, message: mes}
            setMessages((prevMessages) => ({
                ...prevMessages, [chatId]: [...prevMessages[chatId], newMessage]
            }));
        }, 
        [chatId]
    );

    useEffect(() => {
        const userName = 'bot';
        const botMessage = 'What is you problem?';
        if (messages[chatId]?.length === 0) {
            console.log('no messages');
        } else if (messages[chatId]?.[messages[chatId].length-1].author === 'user') {
            const timeout = setTimeout(() => handleMessageList(userName, botMessage), 1500);
            return () => clearTimeout(timeout)
        }
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate replace to="/chats"></Navigate>
    }

    return (
        <div className="chatsBox">
            <div className="chatsTitle">
                <ChatsList chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />
            </div>
            <div className="chatItem">
                <div>
                    { messages[chatId].length !== 0 ? <RenderMessageList messageList={messages[chatId]}/> : 'no messages'}
                </div>
                <MessageForm sendMessage={handleMessageList}/>
            </div>  
        </div>
    );
}

export default Chats;
