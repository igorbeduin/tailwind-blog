import React from "react";

import articles from "../consts/articles";
import { ArticleInterface } from "../consts/articles";

import blogLogo from "../assets/imgs/logo.png";
import learnBanner from "../assets/imgs/learnbanner.png";
import learnBannerSmall from "../assets/imgs/learnbanner_small.png";
import BlogPost from "../components/BlogPost";

export default function Blog() {
    interface ArticlesCollectionInterface {
        [category: string]: Array<ArticleInterface>
    }

    const articlesCollection: ArticlesCollectionInterface = {};
    articles.forEach((article) => {
        if (!Object.keys(articlesCollection).includes(article.category)) {
            articlesCollection[article.category] = [article];
        }
        else {
            articlesCollection[article.category].push(article);
        }
    });

    return (
        <section>
            <section className="bg-surface px-12 h-fit">
                <figure className="flex justify-center items-center border border-solid border-y-divider-dark border-x-0 h-fit">
                    <img className="my-12" src={blogLogo} alt="Blog Logo"/>
                </figure>
            </section>
            <section className="grid p-12 h-fit bg-surface md:grid-cols-2 md:gap-x-12">
                {articlesCollection.main.map((article, index) => {
                    if (index === 0) {
                        return <BlogPost key={`blogPost-main-${index}`} article={article} variant='main-0' />;
                    }
                    return <BlogPost divider={index > 1} key={`blogPost-main-${index}`} article={article} variant='main-1' />;
                })}
            </section>
            <section className="p-12 h-fit bg-base">
                <p className="text-lg font-bold text-primary-base-lowest mb-6">PILIHAN EDITOR</p>
                <div className="flex flex-col justify-center md:justify-between items-center md:items-start md:flex-row">
                    {articlesCollection["pilihan editor"].map((article, index) => (
                        <BlogPost divider={!!index} key={`blogPost-editor-${index}`} article={article} variant='editor' />
                    ))}
                </div>
            </section>
            <section className="p-12 h-fit bg-neutral">
                <p className="text-lg font-bold text-primary-neutral-lowest mb-6">ARTIKEL TERBARU</p>
                <div className="flex flex-wrap">
                    {articlesCollection["artikel terbaru"].map((article, index) => (
                        <BlogPost divider={!!index} key={`blogPost-terbaru-${index}`} article={article} variant='terbaru' />
                    ))}
                </div>
            </section>
            <section className="h-fit">
                <figure>
                    <img className="hidden md:block" src={learnBanner} />
                </figure>
                <figure>
                    <img className="block md:hidden" src={learnBannerSmall} />
                </figure>
            </section>
            <section className="p-12 h-fit bg-base flex flex-col md:flex-row md:justify-between">
                <section>
                    <p className="text-lg font-bold text-primary-base-lowest mb-6">ARTIKEL LAINNYA</p>
                    <div>
                        {articlesCollection["artikel lainnya"].map((article, index) => (
                            <BlogPost divider={!!index} key={`blogPost-lainnya-${index}`} article={article} variant='lainnya' />
                        ))}
                    </div>
                </section>
                <section className="md:ml-12">
                    <p className="text-lg font-bold text-primary-base-lowest mb-6">ARSIP 2021</p>
                    <div>
                        {articlesCollection["arsip 2021"].map((article, index) => (
                            <BlogPost divider={!!index} key={`blogPost-arsip-${index}`} article={article} variant='arsip' />
                        ))}
                    </div>
                </section>
            </section>
        </section>
    );
}
