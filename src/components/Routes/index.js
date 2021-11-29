import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { AstroPhotoAPI } from "../AstroPhoto";
import Chats from "../Chats/Chats";
import { ChatsList } from "../ChatsList/ChatsList";
import { Home } from "../Home/Home";
import { MyProfile } from "../MyProfile/MyProfile";

export const Router = () => (
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
        <Route path="/" element={<Home />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="chats">
          <Route index element={<ChatsList />} />
          <Route 
            path=":chatId"
            element={
              <Chats />
            }
          />
        </Route>
        <Route path="astrophoto" element={<AstroPhotoAPI />} />
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
);
