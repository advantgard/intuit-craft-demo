import React from "react";
import Head from "next/head";
import { Feed } from "../components/feed";
import { useFeed } from "../hooks/useFeed";

const Home = () => {

  const feed = useFeed();

  return (
    <div className="microblogger">
      <Head>
        <title>MicroBlogger - Feed</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microblogger.min.css" />
      </Head>
      <h1>Welcome to MicroBlogger</h1>
      <Feed posts={feed} noFeedMessage="There are no posts" />
    </div>
  );
};

export default Home;
