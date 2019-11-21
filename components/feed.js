import React, { useState } from "react";
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
    <h3 className={`${className}__title`}>{title}</h3>
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
 * @param success: Flag that indicates if the form was submitted successfully
 * @param formTitle: The title of the form
 * @param className: The prefixed class name for the component
 * @returns React: FunctionalComponent
 */

export const CreatePost = ({
  onSubmit = () => {},
  id = "feed-new-post",
  success = false,
  formTitle = "Add a new post",
  className = "feed-new-post"
}) => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState(null);

  function validateAlphanumeric(text) {
    return text.match(/^[a-z0-9 ]+$/i);
  }

  function validateNumeric(text) {
    return text.match(/^[0-9]+$/i);
  }

  function validateForm(e) {
    e.preventDefault();

    const validationErrors = {};

    if (!user.length) {
      validationErrors["user"] = "This field is required";
    } else if (!validateNumeric(user)) {
      validationErrors["user"] = "Only numbers are allowed";
    }

    if (!title.length) {
      validationErrors["title"] = "This field is required";
    } else if (!validateAlphanumeric(title)) {
      validationErrors["title"] = "Only alphanumerical characters are allowed";
    }

    if (body.length < 10) {
      validationErrors["body"] = "Length must be at least 10 characters long";
    } else if (!validateAlphanumeric(body)) {
      validationErrors["body"] = "Only alphanumerical characters are allowed";
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      onSubmit({ user, title, body });
      setUser("");
      setTitle("");
      setBody("");
      setErrors(null);
    }
  }

  return (
    <div className={`${className}__container`}>
      <div className={`${className}__success`}>
        {success ? "The post was submitted successfully" : ""}
      </div>
      <form id={id} className={`${className}__form`}>
        <h2 className={`${className}__title`}>{formTitle}</h2>
        <div
          className={`${className}__input-wrapper ${className}__user-wrapper`}
        >
          <label
            className={`${className}__label ${className}__user-label`}
            htmlFor={`${id}-user`}
          >
            User:
          </label>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            name={`${id}-user`}
            className={`${className}__input--text ${className}__user-input`}
          />
          <div
            className={`${className}__input--error ${className}__user-input--error`}
          >
            {errors && errors["user"] ? errors["user"] : ""}
          </div>
        </div>
        <div
          className={`${className}__input-wrapper ${className}__title-wrapper`}
        >
          <label
            className={`${className}__label ${className}__title-label`}
            htmlFor={`${id}-title`}
          >
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            name={`${id}-title`}
            className={`${className}__input--text ${className}__title-input`}
          />
          <div
            className={`${className}__input--error ${className}__title-input--error`}
          >
            {errors && errors["title"] ? errors["title"] : ""}
          </div>
        </div>
        <div
          className={`${className}__input-wrapper ${className}__body-wrapper`}
        >
          <label
            className={`${className}__label ${className}__body-label`}
            htmlFor={`${id}-body`}
          >
            Content:
          </label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            name={`${id}-body`}
            className={`${className}__input--textarea ${className}__body-textarea`}
            rows="4"
          />
          <div className={`${className}__textarea-counter`}>
            {`Character count: ${body.length} / 110`}
          </div>
          <div
            className={`${className}__input--error ${className}__body-textarea--error`}
          >
            <div>{body.length > 110 ? "The text is too long" : ""}</div>
            <div>{errors && errors["body"] ? errors["body"] : ""}</div>
          </div>
        </div>
        <div
          className={`${className}__input-wrapper ${className}__submit-wrapper`}
        >
          <input
            className={`${className}__input--submit`}
            type="submit"
            onClick={validateForm}
          />
        </div>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  success: PropTypes.bool,
  formTitle: PropTypes.string,
  className: PropTypes.string
};

/**
 * Renders an array of posts using the Post component
 * @param posts: The data to be rendered
 * @param loading: Flag to set if the data is still loading
 * @param error: Flag to set if there was errors on loading the data
 * @param prefixKey: A unique prefix key for this element, in case multiple feeds are rendered in the same page
 * @param className: A prefix for the class name of this component
 * @param noFeedMessage: The message to be shown to the user if there are no posts
 * @returns React: FunctionalComponent
 */
export const Feed = ({
  posts = [],
  loading = false,
  error = false,
  prefixKey = "post",
  className = "feed",
  noFeedMessage = ""
}) => {
  function renderFeed() {
    if (loading) {
      return <div className="feed__spinner" />;
    } else if (posts.length) {
      return posts.map(({ userId = "", title = "", body = "" }, index) => (
        <Post
          author={`@user${userId}`}
          title={title}
          body={body}
          key={`${prefixKey}-${index}`}
        />
      ));
    } else if (error) {
      return "There was an error loading your feed";
    } else {
      return noFeedMessage;
    }
  }

  return <div className={`${className}__container`}>{renderFeed()}</div>;
};

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  prefixKey: PropTypes.string,
  className: PropTypes.string,
  noFeedMessage: PropTypes.string
};
