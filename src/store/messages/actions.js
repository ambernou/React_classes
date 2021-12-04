import { onValue, push } from '@firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { getChatMsgsListRefById, messagesRef } from '../../services/firebase';

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    newMessage,
    chatId,
});

export const setMessages = (newMessage) => ({
    type: SET_MESSAGES,
    payload: newMessage,
});

export const deleteMessage = (idToDelete, chatIdToDelete) => ({
    type: DELETE_MESSAGE,
    idToDelete,
    chatIdToDelete,
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    // dispatch(addMessage(newMessage, chatId));
    push(getChatMsgsListRefById(chatId), newMessage);

    if (newMessage.author !== 'bot'){
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            const botMessage = {
                id: uuidv4(),
                author: 'bot',
                message: 'What is you problem?'
            };
            // dispatch(addMessage(botMessage, chatId));
            push(getChatMsgsListRefById(chatId), botMessage);
        }, 1500);
    }
};

export const initMessagesTracking = () => (dispatch) => {
    onValue(messagesRef, (snapshot) => {
        const newMsgs = {};

        snapshot.forEach((chatMsgsSnap) => {
            newMsgs[chatMsgsSnap.key] = Object.values(chatMsgsSnap.val().messageList || {});
        });

        dispatch(setMessages(newMsgs));
    });
};
