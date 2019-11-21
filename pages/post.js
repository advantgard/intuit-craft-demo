import React, { useState } from "react";
import Head from "next/head";
import { CreatePost } from "../components/feed";
import { postData } from "../components/utils";
import Nav from "../components/nav";

const Post = () => {

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="microblogger">
      <Head>
        <title>MicroBlogger - Post</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microblogger.min.css" />
      </Head>
      <Nav />
      <CreatePost success={success} error={error} onSubmit={data => postData(data, setSuccess, setError)} />
    </div>
  );
};

export default Post;
