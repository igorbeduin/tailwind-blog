import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./navigation/Navigator";

export default function App() {
    return (
        <BrowserRouter>
            <Navigator />
        </BrowserRouter>
    );
}

