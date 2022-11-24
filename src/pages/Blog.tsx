import React from "react";

import blogLogo from "../assets/imgs/logo.png";
import learnBanner from "../assets/imgs/learnbanner.png";

export default function Blog() {
    return (
        <section>
            <section className="bg-surface px-12 h-fit">
                <figure className="flex justify-center items-center border border-solid border-y-primary-base-low border-x-0 h-fit">
                    <img className="my-12" src={blogLogo} alt="Blog Logo"/>
                </figure>
            </section>
            <section className="p-12 h-fit bg-surface">
                <article className="bg-back h-96"></article>
            </section>
            <section className="p-12 h-fit bg-base">
                <article className="h-96 bg-primary-base-lowest"></article>
            </section>
            <section className="p-12 h-fit bg-neutral">
                <article className="h-96 bg-primary-neutral-lowest"></article>
            </section>
            <section className="h-fit">
                <figure>
                    <img src={learnBanner}>
                    </img>
                </figure>
            </section>
            <section className="p-12 h-fit bg-base">
                <article className="h-96 bg-primary-base-lowest"></article>
            </section>
        </section>
    );
}
