import { v4 as uuidv4 } from 'uuid';

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    newMessage,
    chatId,
});

export const deleteMessage = (idToDelete, chatIdToDelete) => ({
    type: DELETE_MESSAGE,
    idToDelete,
    chatIdToDelete,
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

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
            dispatch(addMessage(botMessage, chatId));
        }, 1500);
    }
};
