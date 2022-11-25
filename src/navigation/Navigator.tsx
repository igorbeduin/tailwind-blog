import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageMask from "../components/PageMask";
import BlankPage from "../pages/BlankPage";
import Blog from "../pages/Blog";

export default function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/blog" />} />
            <Route path="/" element={<PageMask />}>
                <Route path="profile" element={<BlankPage />}/>
                <Route path="learn" element={<BlankPage />}/>
                <Route path="blog" element={<Blog />}/>
                <Route path="bookmarks" element={<BlankPage/>} />
                <Route path="ui-kit" element={<BlankPage />} />
                <Route path="lain-nya" element={<BlankPage />}/>
                <Route path="*" element={<BlankPage />} />
            </Route>
        </Routes>
    );
}
