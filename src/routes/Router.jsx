import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import PostCreate from "../pages/PostCreate";
import PostId from "../pages/PostId";
import List from "../pages/list";
import MessageWrite from "../pages/MessageWrite";
import Edit from "../pages/Edit/Edit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/post" element={<PostCreate />} />
        <Route path="/Post/{id}/Message" element={<MessageWrite />} />
        <Route path="/post/:id/edit" element={<Edit />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
