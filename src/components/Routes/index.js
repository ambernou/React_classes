import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { auth, messagesRef } from "../../services/firebase";
import { onValue } from "firebase/database";
import { signIn, signOut } from "../../store/profile/actions";
import { AstroPhotoAPI } from "../AstroPhoto";
import Chats from "../Chats/Chats";
import { ChatsList } from "../ChatsList/ChatsList";
import { Home } from "../Home/Home";
import { MyProfile } from "../MyProfile/MyProfile";
import { PrivateRoute } from "../PrivateRoute";
import { PublicOutlet } from "../PublicRoute";
import { SignUp } from "../SignUp";

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return unsubscribe;
    }, []);

    return (
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
                <li>
                <Link to="/astrophoto">Astronomical photographs</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<PublicOutlet />}>
                <Route path="" element={<Home />} />
                </Route>
                <Route path="/signup" element={<PublicOutlet />}>
                <Route path="" element={<SignUp />} />
                </Route>
                <Route 
                    path="myprofile" 
                    element={
                        <PrivateRoute>
                            <MyProfile />
                        </PrivateRoute>
                    }
                />
                <Route path="chats">
                    <Route
                        index
                        element={
                            <PrivateRoute>
                                <ChatsList />
                            </PrivateRoute>
                        }
                    />
                    <Route 
                        path=":chatId"
                        element={
                            <PrivateRoute>
                                <Chats />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route path="astrophoto" element={<AstroPhotoAPI />} />
                <Route path="*" element={<h3>404</h3>} />
            </Routes>
            </BrowserRouter>
)};
