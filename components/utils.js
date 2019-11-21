import fetch from "isomorphic-unfetch";

export function postData(data, callback, onError) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
      if (data && data.id) {
        callback(true);
      }
    })
    .catch(() => onError(true));
}
