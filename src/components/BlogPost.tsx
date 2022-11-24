import React from "react";
import { ArticleInterface } from "../consts/articles";

import monthDict from "../consts/monthDict";

export default function BlogPost({article, variant="main-0" } : { article: ArticleInterface, variant: string}) {
    

    if (variant === "main-0") return (
        <article className="text-back ">
            <figure>
                <img src={article.img}></img>
            </figure>
            <p className="text-surface-low text-sm my-4">
                {monthDict[article.month]} {article.day}, {article.year}
            </p>
            <p className="text-surface-high text-3xl font-black">
                {article.title}
            </p>
            <p className="text-surface-low mt-4">
                {article.subtitle}
            </p>
        </article>);

    if (variant === "main-1") return (
        <article className="text-back flex justify-start items-start my-8">
            <figure>
                <img src={article.img}></img>
            </figure>
            <section className="ml-6 flex flex-col flex-start items-start">
                <p className="text-surface-low text-sm">
                    {monthDict[article.month]} {article.day}, {article.year}
                </p>
                <p className="text-surface-high text-lg font-black">

                    {article.title}
                </p>
            </section>
        </article>);

    if (variant === "editor") return (
        <article className="text-back ">
            <figure>
                <img src={article.img}></img>
            </figure>
            <p className="text-primary-base-low text-sm my-4">
                {monthDict[article.month]} {article.day}, {article.year}
            </p>
            <p className="text-primary text-3xl font-black">
                {article.title}
            </p>
            <p className="text-primary-base-low mt-4">
                {article.subtitle}
            </p>
        </article>);

    if (variant === "terbaru") return (
        <article className="text-back ">
            <figure>
                <img src={article.img}></img>
            </figure>
            <p className="text-primary-neutral-low text-sm my-4">
                {monthDict[article.month]} {article.day}, {article.year}
            </p>
            <p className="text-primary text-3xl font-black">
                {article.title}
            </p>
            <p className="text-primary-neutral-high mt-4">
                {article.subtitle}
            </p>
        </article>);

    if (variant === "lainnya") return (
        <article className="text-back flex justify-start items-start my-8">
            <section className="flex flex-col flex-start items-start">
                <p className="text-primary-base-low text-sm">
                    {monthDict[article.month]} {article.day}, {article.year}
                </p>
                <p className="text-primary text-lg font-black">

                    {article.title}
                </p>
                <p className="text-primary-base-low">
                    {article.subtitle}
                </p>
            </section>
            <figure className="ml-6">
                <img src={article.img}></img>
            </figure>
        </article>);

    if (variant === "arsip") return (
        <article className="text-back flex justify-start items-start my-8">
            <section className="flex flex-col flex-start items-start">
                <p className="text-primary-base-low text-sm">
                    {monthDict[article.month]} {article.day}
                </p>
                <p className="text-primary text-lg font-black">
                    {article.title}
                </p>
            </section>
        </article>);

    return null;
}
