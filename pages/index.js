import React from "react";
import Head from "next/head";
import { Feed } from "../components/feed";
import { useFeed } from "../hooks/useFeed";
import Nav from "../components/nav";

const Home = () => {
  const [feed, loading, error] = useFeed();

  return (
    <div className="microblogger">
      <Head>
        <title>MicroBlogger - Feed</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microblogger.min.css" />
      </Head>
      <Nav />
      <Feed error={error} loading={loading} posts={feed} noFeedMessage="There are no posts" />
    </div>
  );
};

export default Home;
