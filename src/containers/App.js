import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { getPosts } from "../actions/index";

class App extends Component {
  handleChange = (subreddit) => {
    this.props.getPosts(subreddit);
  };

  render() {
    return (
      <div>
        <Picker
          // value={selectedSubreddit}
          onChange={this.handleChange}
          options={[
            "reactjs",
            "frontend",
            "javascript",
            "reduxjs",
            "backend",
            "nodejs",
            "mongodb",
            "reduc",
            "undefined",
          ]}
        />
        {this.props.state.reducers.data ? (
          <Posts posts={this.props.state.reducers.data.children} />
        ) : (
          <h2>No Result. Please, enter a valid input!</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// state.reducers.data.children
