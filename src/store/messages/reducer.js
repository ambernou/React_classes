import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE, SET_MESSAGES } from "./actions"

const initialMessages = {};

export const messagesReducer = (state = initialMessages, { type, newMessage, chatId, idToDelete, chatIdToDelete, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {...state, [chatId]: [...state[chatId], newMessage]};
        case DELETE_MESSAGE:
            const newMessageListDelMes = {...state};
            newMessageListDelMes[chatIdToDelete] = newMessageListDelMes[chatIdToDelete].filter(({ id }) => id!== idToDelete)
            return newMessageListDelMes;

        case SET_MESSAGES:
            return payload;

        case ADD_CHAT:
            return {...state, [payload.id]:[]};
        case DELETE_CHAT:
            const newMessageListDelChat = {...state};
            delete newMessageListDelChat[payload];
            return newMessageListDelChat;
        default:
            return state;
    }
};
