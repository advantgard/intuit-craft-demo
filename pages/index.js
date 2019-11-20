import React from "react";
import Head from "next/head";
import { CreatePost, Feed } from "../components/feed";
import { useFeed } from "../hooks/useFeed";
import Nav from "../components/nav";

const Home = () => {
  const [feed, loading] = useFeed();

  return (
    <div className="microblogger">
      <Head>
        <title>MicroBlogger - Feed</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/microblogger.min.css" />
      </Head>
      <Nav />
      <CreatePost onSubmit={() => {}} />
      <Feed loading={loading} posts={feed} noFeedMessage="There are no posts" />
    </div>
  );
};

export default Home;
