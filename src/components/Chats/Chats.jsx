import { MessageForm } from '../MessageForm/MessageForm';
import { RenderMessageList } from '../RenderMessageList/RenderMessageList';
import { ChatsList } from '../ChatsList/ChatsList';
import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithReply, initMessagesTracking } from '../../store/messages/actions';
import { selectMessages } from '../../store/messages/selectors';
import { push } from "firebase/database";
import './Chats.css';
import { getChatMsgsListRefById } from '../../services/firebase';
import { initChatsTracking } from '../../store/chats/actions';

function Chats() {
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    useEffect(() => {
        dispatch(initMessagesTracking());
    }, []);

    const handleMessageList = useCallback(
        (auth, mes) => {
            const newMessage = {id: uuidv4(), author: auth, message: mes};
            dispatch(addMessageWithReply(newMessage, chatId));
            // push(getChatMsgsListRefById(chatId), newMessage);
        }, 
        [chatId]
    );

    if (!messages[chatId]) {
        return <Navigate replace to="/chats"></Navigate>
    }

    return (
        <div className="chatsBox">
            <div className="chatsTitle">
                <ChatsList />
            </div>
            <div className="chatItem">
                <div>
                    { messages[chatId].length !== 0 ? <RenderMessageList messageList={messages[chatId]}/> : 'no messages yet'}
                </div>
                <MessageForm sendMessage={handleMessageList}/>
            </div>  
        </div>
    );
}

export default Chats;
