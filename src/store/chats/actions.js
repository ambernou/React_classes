import { onValue, set, remove } from "@firebase/database";
import { chatsRef, getChatMsgsRefById, getChatRefById } from "../../services/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
});

export const removeChat = (id) => ({
    type: REMOVE_CHAT,
    payload: id,
});

export const removeChatWithFB = (id) => (dispatch) => {
    remove(getChatRefById(id));
    remove(getChatMsgsRefById(id));
};

export const addChatWithFb = (newChat) => (dispatch) => {
    set(getChatRefById(newChat.id), newChat);
    set(getChatMsgsRefById(newChat.id), { empty: true });
};

export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (chatsSnap) => {
        console.log(chatsSnap);

        const newChats = [];
        chatsSnap.forEach((snapshot) => {
            newChats.push(snapshot.val());
        });

        dispatch(setChats(newChats));
    });
};
