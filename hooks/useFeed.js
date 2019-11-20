import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

export const useFeed = () => {

  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setFeed(data);
        setLoading(false);
      });
  }, []);

  return [feed, loading];
};
