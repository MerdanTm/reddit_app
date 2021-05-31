export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALID_SUBREDDIT = "INVALID_SUBREDDIT";

const fetchPosts = (subreddit) => (dispatch) => {
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((result) => result.json())
    .then((data) =>
      dispatch({
        type: RECEIVE_POSTS,
        payload: data,
      })
    )
    .catch(() =>
      dispatch({
        type: INVALID_SUBREDDIT,
      })
    );
};

export const getPosts = (searchValue) => (dispatch) => {
  dispatch(fetchPosts(searchValue));
};
