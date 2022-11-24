import React, { useState } from "react";
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

    return (
        <>
            <header className="flex flex-col md:flex-row md:justify-between md:items-center bg-surface h-fit w-10/12" >
                <section className="text-surface-low px-12 pt-12 md:p-12">
                    <nav className={isNavBarOpen ? 
                        "flex flex-col items-start space-y-10 md:flex-row md:items-center md:space-x-10 font-bold" 
                        : "flex flex-col items-start md:flex-row md:items-center md:space-x-10 font-bold"}>
                        <figure onClick={() => setIsNavBarOpen(prev => !prev)}>
                            <img src={isNavBarOpen ? closeBurger : openBurger}/>
                        </figure>
                        <figure className="flex invisible justify-center items-center w-0 h-0 md:visible md:w-12 md:h-12">
                            <img src={profileLogo} />
                        </figure>
                        <div className={isNavBarOpen ? "h-fit w-fit" : "invisible w-0 h-0 md:h-fit md:w-fit md:visible"}>
                            <Link className={route === "/learn" ? "text-base" : "hover:text-base"} to="learn">LEARN</Link>
                            <Link className={route === "/blog" ? "text-base" : "hover:text-base"} to="blog">BLOG</Link>
                            <Link className={route === "/bookmarks" ? "text-base" : "hover:text-base"} to="bookmarks">BOOKMARKS</Link>
                            <Link className={route === "/ui-kit" ? "text-base" : "hover:text-base"} to="ui-kit">UI KIT</Link>
                            <Link className={route === "/other" ? "text-base" : "hover:text-base"} to="other">LAIN NYA</Link>
                        </div>
                    </nav>
                </section>
                {/* <section className="flex space-x-4 items-center text-surface-low p-12">
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
                </section> */}
            </header>
        </>
    );
}
