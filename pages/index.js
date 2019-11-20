import React from "react";
import Head from "next/head";
import { Feed } from "../components/feed";

const dummyData = [{ userId: "User1", title: "This is a test", body: "Just testing"}];

const Home = () => (
  <div>
    <Head>
      <title>MicroBlogger - Feed</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Welcome to MicroBlogger</h1>
    <Feed posts={dummyData} noFeedMessage="There are no posts" />
  </div>
);

export default Home;
