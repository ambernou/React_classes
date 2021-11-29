import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import { astroInfoReducer } from "./astroinfo/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const config = {
    key: 'gbMessenger',
    storage,
    blacklist: ["profile", "astroInfo"]
}

const persistedReducer = persistReducer(
    config,
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        astroInfo: astroInfoReducer
    })
);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore (store);
