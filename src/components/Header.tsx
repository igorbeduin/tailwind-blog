import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import profileLogo from "../assets/favicons/logoorange.png";
import twitterLogo from "../assets/icons/twitter.png";
import instagramLogo from "../assets/icons/instagram.png";
import dribbbleLogo from "../assets/icons/dribbble.png";
import mediumLogo from "../assets/icons/medium.png";

import openBurger from "../assets/icons/openBurger.png";
import closeBurger from "../assets/icons/closeBurger.png";

export default function Header() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const {pathname: route} = useLocation();

    useEffect(() => {
        setIsNavBarOpen(false);
    }, [route]);

    return (
        <>
            <header className="flex flex-col md:flex-row md:justify-between md:items-center bg-surface h-fit w-10/12" >
                <section className="text-surface-low px-12 py-6 md:p-12">
                    <nav className="flex flex-col items-start md:flex-row md:items-center font-bold">
                        <figure className="block justify-center items-center md:hidden md:w-12 md:h-12" onClick={() => setIsNavBarOpen(prev => !prev)}>
                            <img src={isNavBarOpen ? closeBurger : openBurger}/>
                        </figure>
                        <figure className="hidden justify-center items-center md:block md:w-12 md:h-12">
                            <img src={profileLogo} />
                        </figure>
                        <div className={isNavBarOpen ? "block mt-4" : "hidden md:block"}>
                            <Link className={route === "/learn" ? "text-base md:mx-5 block md:inline" : "hover:text-base md:mx-5 block md:inline"} to="learn">LEARN</Link>
                            <Link className={route === "/blog" ? "text-base md:mx-5 block md:inline" : "hover:text-base md:mx-5 block md:inline"} to="blog">BLOG</Link>
                            <Link className={route === "/bookmarks" ? "text-base md:mx-5 block md:inline" : "hover:text-base md:mx-5 block md:inline"} to="bookmarks">BOOKMARKS</Link>
                            <Link className={route === "/ui-kit" ? "text-base md:mx-5 block md:inline" : "hover:text-base md:mx-5 block md:inline"} to="ui-kit">UI KIT</Link>
                            <Link className={route === "/lain-nya" ? "text-base md:mx-5 block md:inline" : "hover:text-base md:mx-5 block md:inline"} to="lain-nya">LAIN NYA</Link>
                        </div>
                    </nav>
                </section>
                <section className={isNavBarOpen 
                    ? "flex flex-col items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:items-center text-surface-low p-12"
                    : "hidden md:flex flex-col items-start md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:items-center text-surface-low p-12"}>
                    <figure className="w-6 h-fit opacity-50 hover:opacity-80">
                        <img src={twitterLogo}/>
                    </figure>
                    <figure className="w-6 h-fit opacity-50 hover:opacity-80">
                        <img src={instagramLogo}/>
                    </figure>
                    <figure className="w-6 h-fit opacity-50 hover:opacity-80">
                        <img src={dribbbleLogo}/>
                    </figure>
                    <figure className="w-6 h-fit opacity-50 hover:opacity-80">
                        <img src={mediumLogo}/>
                    </figure>
                </section>
            </header>
        </>
    );
}
