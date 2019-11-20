import React from "react";
import PropTypes from "prop-types";

/**
 * Creates the UI for a user post
 * @param author: The display name of the user
 * @param body: The body of the post
 * @param title: The title of the post
 * @param className: The prefixed class name for the component
 * @returns React: FunctionalComponent
 * @constructor
 */
export const Post = ({
  author = "",
  title = "",
  body = "",
  className = "feed-post"
}) => (
  <div className={`${className}__container`}>
    <h2 className={`${className}__title`}>{title}</h2>
    <span className={`${className}__author`}>{author}</span>
    <p className={`${className}__body`}>{body}</p>
  </div>
);

Post.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string
};

/**
 * Renders an array of posts using the Post component
 * @param posts: The data to be rendered
 * @param prefixKey: A unique prefix key for this element, in case multiple feeds are rendered in the same page
 * @param className: A prefix for the class name of this component
 * @param noFeedMessage: The message to be shown to the user if there are no posts
 * @returns React: FunctionalComponent
 * @constructor
 */
export const Feed = ({
  posts = [],
  prefixKey = "post",
  className = "feed",
  noFeedMessage = ""
}) => {
  function renderFeed() {
    if (posts.length) {
      return posts.map(({ userId = "", title = "", body = "" }, index) => (
        <Post
          author={userId}
          title={title}
          body={body}
          key={`${prefixKey}-${index}`}
        />
      ));
    } else {
      return noFeedMessage;
    }
  }

  return <div className={`${className}__container`}>{renderFeed()}</div>;
};

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
  prefixKey: PropTypes.string,
  className: PropTypes.string,
  noFeedMessage: PropTypes.string
};