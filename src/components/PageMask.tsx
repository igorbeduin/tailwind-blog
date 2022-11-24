import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function PageMask() {
    return (
        <div className="flex flex-col justify-start items-center bg-back min-h-screen h-fit font-poppins">
            <header className="flex justify-between bg-surface h-28 w-10/12 text-surface-low">
                <section>
                    <nav className="flex justify-evenly">
                        <Link to="profile">Profile</Link>
                        <Link to="learn">Learn</Link>
                        <Link to="blog">Blog</Link>
                        <Link to="bookmarks">Bookmarks</Link>
                        <Link to="ui-kit">UI Kit</Link>
                        <Link to="other">Lain Nya</Link>
                    </nav>
                </section>
                <section>
                    <div>
                        <Link to="">Twitter</Link>
                        <Link to="">Instagram</Link>
                        <Link to="">Dribbble</Link>
                        <Link to="">Medium</Link>
                    </div>
                </section>
            </header>
            <main className="w-10/12 h-fit">
                <Outlet />
            </main>
        </div>
    );
}
