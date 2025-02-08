import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "../pages/Post";
import List from "../pages/list";
import Main from "../pages/main";
import Edit from "../pages/Edit/Edit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id/edit" element={<Edit />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
