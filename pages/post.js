import React from "react";
import Head from "next/head";
import { CreatePost } from "../components/feed";
import Nav from "../components/nav";

const Post = () => {

    return (
        <div className="microblogger">
            <Head>
                <title>MicroBlogger - Post</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/microblogger.min.css" />
            </Head>
            <Nav />
            <CreatePost onSubmit={data => console.log(data) } />
        </div>
    );
};

export default Post;
