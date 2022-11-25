import React from "react";
import { ArticleInterface } from "../consts/articles";

import monthDict from "../consts/monthDict";

export default function BlogPost({article, variant="main-0", divider } : { article: ArticleInterface, variant: string, divider?: boolean}) {
    

    if (variant === "main-0") return (
        <article className="text-back md:row-span-3">
            <figure>
                <img src={article.img}></img>
            </figure>
            <p className="text-surface-low text-xs my-4">
                {monthDict[article.month]} {article.day}, {article.year}
            </p>
            <p className="text-surface-high text-2xl font-black">
                {article.title}
            </p>
            <p className="text-surface-low mt-4">
                {article.subtitle}
            </p>
        </article>);

    if (variant === "main-1") return (
        <article className={divider 
            ? "text-back flex justify-start items-start border-divider-dark border-solid border-t pt-12 mt-4 md:mt-0" 
            : "text-back flex justify-start items-start border-divider-dark border-solid border-t md:border-none pt-4 md:pt-0 mt-4 md:mt-0"}>
            <figure className="min-h-fit min-w-fit hidden md:block">
                <img className="h-24 w-44" src={article.img}></img>
            </figure>
            <section className="flex flex-col flex-start items-start md:ml-5">
                <p className="text-surface-low text-xs">
                    {monthDict[article.month]} {article.day}, {article.year}
                </p>
                <p className="text-surface-high text-lg font-black">
                    {article.title}
                </p>
            </section>
        </article>
    );

    if (variant === "editor") return (
        <>
            {divider && <div className="hidden md:block w-px h-96 bg-divider-light" />}
            <article className={divider
                ? "text-back w-56 border-divider-light border-solid border-t md:border-none pt-4 md:pt-0 mt-4 md:mt-0"
                : "text-back w-56 border-divider-light border-solid border-t md:border-none pt-4 md:pt-0 mt-4 md:mt-0"}>
                <figure>
                    <img src={article.img}></img>
                </figure>
                <p className="text-primary-base-low text-xs my-4">
                    {monthDict[article.month]} {article.day}, {article.year}
                </p>
                <p className="text-primary text-2xl font-black">
                    {article.title}
                </p>
                <p className="text-primary-base-low mt-4 text-sm">
                    {article.subtitle}
                </p>
            </article>
        </>
    );

    if (variant === "terbaru") return (
        <article className="text-back w-72 md:mr-10 md:mb-10 border-divider-light border-solid border-t md:border-none pt-6 md:pt-0 mt-6 md:mt-0">
            <figure>
                <img className="h-fit w-fit md:h-44 md:w-72" src={article.img}></img>
            </figure>
            <p className="text-primary-neutral-low text-xs my-4">
                {monthDict[article.month]} {article.day}, {article.year}
            </p>
            <p className="text-primary text-2xl font-black">
                {article.title}
            </p>
            <p className="text-primary-neutral-high mt-4 text-sm">
                {article.subtitle}
            </p>
        </article>);

    if (variant === "lainnya") return (
        <article className="text-back flex justify-start items-start my-8">
            <section className="flex flex-col flex-start items-start w-96">
                <p className="text-primary-base-low text-xs mb-1">
                    {monthDict[article.month]} {article.day}, {article.year}
                </p>
                <p className="text-primary font-extrabold text-lg">

                    {article.title}
                </p>
                <p className="text-primary-base-low text-sm">
                    {article.subtitle}
                </p>
            </section>
            <figure className="ml-5 min-h-fit min-w-fit hidden md:block">
                <img className="h-36 w-60" src={article.img}></img>
            </figure>
        </article>);

    if (variant === "arsip") return (
        <article className={divider
            ? "text-back flex justify-start items-start my-8 border-divider-light border-solid border-t pt-6 mt-6"
            : "text-back flex justify-start items-start my-8 border-divider-light border-solid border-t md:border-none pt-6 md:pt-0 mt-6 md:mt-0"}>
            <section className="flex flex-col flex-start items-start">
                <p className="text-primary-base-low text-xs ">
                    {monthDict[article.month]} {article.day}
                </p>
                <p className="text-primary font-black">
                    {article.title}
                </p>
            </section>
        </article>);

    return null;
}
