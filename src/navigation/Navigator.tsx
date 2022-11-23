import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageMask from "../components/PageMask";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Learn from "../pages/Learn";
import Other from "../pages/Other";
import Profile from "../pages/Profile";
import UiKit from "../pages/UiKit";

export default function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/blog" />} />
            <Route path="/" element={<PageMask />}>
                <Route path="profile" element={<Profile />}/>
                <Route path="learn" element={<Learn />}/>
                <Route path="blog" element={<Blog />}/>
                <Route path="bookmarks" element={<Bookmarks/>} />
                <Route path="ui-kit" element={<UiKit />} />
                <Route path="other" element={<Other />}/>
            </Route>
        </Routes>
    );
}
