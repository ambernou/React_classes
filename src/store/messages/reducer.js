import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions"

const initialMessages = {};

export const messagesReducer = (state = initialMessages, { type, newMessage, chatId, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {...state, [chatId]: [...state[chatId], newMessage]};

        case ADD_CHAT:
            console.log(payload);
            return {...state, [payload.id]:[]};
        case DELETE_CHAT:
            console.log(payload);
            const newMessageList = {...state};
            delete newMessageList[payload];
            return newMessageList;
        default:
            return state;
    }
};
