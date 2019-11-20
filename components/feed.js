import React from "react";
import PropTypes from "prop-types";

/**
 * Creates the UI for a user post
 * @param author: The display name of the user
 * @param body: The body of the post
 * @param title: The title of the post
 * @param className: The prefixed class name for the component
 * @returns React: FunctionalComponent
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
 * Creates the UI for creating a new post
 * @param onSubmit: The callback for the submit action
 * @param id: The id used for the elements of the form
 * @param className: The prefixed class name for the component
 * @returns React: FunctionalComponent
 */

export const CreatePost = ({
  onSubmit = () => {},
  id = "create-post",
  className = "create-post"
}) => {
  return (
    <form id={id} className={`${className}__container`}>
      <div className={`${className}__user-wrapper`}>
        <label className={`${className}__user-label`} htmlFor={`${id}-user`}>
          User:
        </label>
        <input
          type="text"
          name={`${id}-user`}
          className={`${className}__user-input`}
        />
      </div>
      <div className={`${className}__title-wrapper`}>
        <label className={`${className}__title-label`} htmlFor={`${id}-title`}>
          Title:
        </label>
        <input
          type="text"
          name={`${id}-title`}
          className={`${className}__title-input`}
        />
      </div>
      <div className={`${className}__body-wrapper`}>
        <label className={`${className}__body-label`} htmlFor={`${id}-body`}>
          Content:
        </label>
        <textarea
          name={`${id}-body`}
          className={`${className}__body-textarea`}
          cols="3"
        />
      </div>
      <div className={`${className}__submit-wrapper`}>
        <input
          className={`${className}__submit-input`}
          type="submit"
          onClick={onSubmit}
        />
      </div>
    </form>
  );
};

CreatePost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string
};

/**
 * Renders an array of posts using the Post component
 * @param posts: The data to be rendered
 * @param loading: Flag to set if the data is still loading
 * @param prefixKey: A unique prefix key for this element, in case multiple feeds are rendered in the same page
 * @param className: A prefix for the class name of this component
 * @param noFeedMessage: The message to be shown to the user if there are no posts
 * @returns React: FunctionalComponent
 */
export const Feed = ({
  posts = [],
  loading = false,
  prefixKey = "post",
  className = "feed",
  noFeedMessage = ""
}) => {
  function renderFeed() {
    if (loading) {
      return "Loading...";
    } else if (posts.length) {
      return posts.map(({ userId = "", title = "", body = "" }, index) => (
        <Post
          author={`@user${userId}`}
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
  loading: PropTypes.bool,
  prefixKey: PropTypes.string,
  className: PropTypes.string,
  noFeedMessage: PropTypes.string
};
