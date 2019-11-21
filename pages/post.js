import React, { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { CreatePost } from "../components/feed";
import Nav from "../components/nav";

const Post = () => {
  const [success, setSuccess] = useState(false);

  const postData = data => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          setSuccess(true);
        }
      });
  };

  return (
    <div className="microblogger">
      <Head>
        <title>MicroBlogger - Post</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microblogger.min.css" />
      </Head>
      <Nav />
      <CreatePost success={success} onSubmit={data => postData(data)} />
    </div>
  );
};

export default Post;
