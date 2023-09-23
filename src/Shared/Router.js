import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import HB from "../MemberBlogLink/HB";
import JY from "../MemberBlogLink/JY";
import SJ from "../MemberBlogLink/SJ";
import SY from "../MemberBlogLink/SY";

// react-router-dom

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sy" element={<SY />} />
        <Route path="/jy" element={<JY />} />
        <Route path="/sj" element={<SJ />} />
        <Route path="/hb" element={<HB />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
