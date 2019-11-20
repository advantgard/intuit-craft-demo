import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

export const useFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(setFeed);
  }, []);

  return feed;
};
