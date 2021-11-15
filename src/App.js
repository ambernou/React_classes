import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Chats from "./components/Chats/Chats";
import { ChatsList } from "./components/ChatsList/ChatsList";
import { Home } from "./components/Home/Home";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { store } from "./store";

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myprofile">My profile</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="chats">
          <Route index element={<ChatsList />} />
          <Route path=":chatId" element={<Chats />} />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
