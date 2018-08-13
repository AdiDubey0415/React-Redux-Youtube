import React, {Component} from "react";
import SearchVideo from "./Components/search";
import "./App.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchYoutubeVideos} from "./ActionCreators/actions";

class App extends Component {
  showState = () => {
    console.log(this.props.appState);
  };

  handleVideoSearch = event => {
    this.props.fetchYoutubeVideos(event.target.value);
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    this.props.fetchYoutubeVideos(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <SearchVideo
          appState={this.props.appState}
          handleVideoSearch={event => this.handleVideoSearch(event)}
          handleSearchSubmit={event => this.handleSearchSubmit(event)}
        />

        <button onClick={this.showState}>Show State</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appState
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchYoutubeVideos}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*

Requirements:

1. List of bookmarked videos.
2. When video is searched, if the video has been bookmarked, show it as bookmarked already.
3. After a video is played, push it to the played videos queue.
4. After a video is bookmarked, push it to the bookmarked videos queue.
5. Anywhere in any list(searched and played), if a video is bookmarked, bookmark it in every list.
6.

State:

1. Search input state.
2. List of searched videos.
3. Currently playing video.
4. List of played videos.
5. List of bookmarked videos.

*/
