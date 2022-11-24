import React from "react";

import articles from "../consts/articles";

import blogLogo from "../assets/imgs/logo.png";
import learnBanner from "../assets/imgs/learnbanner.png";
import BlogPost from "../components/BlogPost";

export default function Blog() {

    return (
        <section>
            <section className="bg-surface px-12 h-fit">
                <figure className="flex justify-center items-center border border-solid border-y-border-dark border-x-0 h-fit">
                    <img className="my-12" src={blogLogo} alt="Blog Logo"/>
                </figure>
            </section>
            <section className="p-12 h-fit bg-surface">
                <BlogPost article={articles[0]} variant='main-0' />
                <BlogPost article={articles[1]} variant='main-1' />
                <BlogPost article={articles[2]} variant='main-1' />
                <BlogPost article={articles[3]} variant='main-1' />
            </section>
            <section className="p-12 h-fit bg-base">
                <p className="text-lg font-bold text-primary-base-lowest mb-6">PILIHAN EDITOR</p>
                <BlogPost article={articles[4]} variant='editor' />
                <BlogPost article={articles[5]} variant='editor' />
                <BlogPost article={articles[6]} variant='editor' />
                <BlogPost article={articles[7]} variant='editor' />
            </section>
            <section className="p-12 h-fit bg-neutral">
                <p className="text-lg font-bold text-primary-neutral-lowest mb-6">ARTIKEL TERBARU</p>
                <BlogPost article={articles[8]} variant='terbaru' />
                <BlogPost article={articles[9]} variant='terbaru' />
                <BlogPost article={articles[10]} variant='terbaru' />
                <BlogPost article={articles[11]} variant='terbaru' />
                <BlogPost article={articles[12]} variant='terbaru' />
                <BlogPost article={articles[13]} variant='terbaru' />
            </section>
            <section className="h-fit">
                <figure>
                    <img src={learnBanner}>
                    </img>
                </figure>
            </section>
            <section className="p-12 h-fit bg-base">
                <p className="text-lg font-bold text-primary-base-lowest mb-6">ARTIKEL LAINNYA</p>
                <BlogPost article={articles[14]} variant='lainnya' />
                <BlogPost article={articles[15]} variant='lainnya' />
                <BlogPost article={articles[16]} variant='lainnya' />
                <BlogPost article={articles[17]} variant='lainnya' />
                <BlogPost article={articles[18]} variant='lainnya' />
            </section>
            <section className="p-12 h-fit bg-base">
                <p className="text-lg font-bold text-primary-base-lowest mb-6">ARSIP 2021</p>
                <BlogPost article={articles[19]} variant='arsip' />
                <BlogPost article={articles[20]} variant='arsip' />
                <BlogPost article={articles[21]} variant='arsip' />
                <BlogPost article={articles[22]} variant='arsip' />
                <BlogPost article={articles[23]} variant='arsip' />
                <BlogPost article={articles[24]} variant='arsip' />
                <BlogPost article={articles[25]} variant='arsip' />
                <BlogPost article={articles[26]} variant='arsip' />
                <BlogPost article={articles[27]} variant='arsip' />
                <BlogPost article={articles[28]} variant='arsip' />
                <BlogPost article={articles[29]} variant='arsip' />
                <BlogPost article={articles[30]} variant='arsip' />
            </section>
        </section>
    );
}
