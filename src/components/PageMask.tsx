import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function PageMask() {

    return (
        <div className="flex flex-col justify-start items-center bg-back min-h-screen h-fit font-poppins">
            <Header />
            <main className="w-10/12 h-fit">
                <Outlet />
            </main>
        </div>
    );
}
