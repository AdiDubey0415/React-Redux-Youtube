import React, {Component} from "react";
import SearchVideo from "./Components/search";
import SearchedVideos from "./Components/searchedVideosList";
import VideoPlayer from "./Components/videoPlayer";
import PlayedVideos from "./Components/playedVideos";
import BookmarkedVideos from "./Components/bookmarkedVideos";
import "./App.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchYoutubeVideos, setSearch, playSelectedVideo, bookmarkVideo, removeBookmarkedVideo} from "./ActionCreators/actions";

class App extends Component {
  showState = () => {
    console.log(this.props.appState);
  };

  handleVideoSearch = event => {
    // this.props.fetchYoutubeVideos(event.target.value);
    this.props.setSearch(event.target.value);
  };

  handleSearchSubmit = (event, value) => {
    console.log(value);
    event.preventDefault();
    this.props.fetchYoutubeVideos(value);
  };

  handleVideoClick = (item) => {
    this.props.playSelectedVideo(item);
  }

  handleBookmarkVideo = (item) => {
    this.props.bookmarkVideo(item);
  }

  removeBookmarkedVideo = (item) => {
    this.props.removeBookmarkedVideo(item);
  }

  render() {
    return (
      <div className="App">

        <div style={{'display': 'flex'}}>

          <div style={{'width': '30%', 'borderRight': '1px solid lightgrey', 'padding-right': '2rem'}}>
            <SearchVideo
            appState={this.props.appState}
            handleVideoSearch={event => this.handleVideoSearch(event)}
            handleSearchSubmit={(event, value) => this.handleSearchSubmit(event, value)}
            />

            <SearchedVideos appState={this.props.appState} 
            handleVideoClick={(item) => this.handleVideoClick(item)} 
            handleBookmarkVideo={(item) => this.handleBookmarkVideo(item)}/>
          </div>

          <div style={{'width': '70%', 'display': 'flex', 'flexDirection': 'column'}}>

            <VideoPlayer appState={this.props.appState}/>

            <span style={{'display': 'flex'}}>

              <span className="span-flex-class">
                <hr/>
                <span className="span-class">
                  Played Videos
                </span>
                <PlayedVideos appState={this.props.appState} 
                handleVideoClick={(item) => this.handleVideoClick(item)} 
                handleBookmarkVideo={(item) => this.handleBookmarkVideo(item)}/>
              </span>

              <span className="span-flex-class">
                <hr/>
                <span className="span-class">
                  Bookmarked Videos
                </span>
                <BookmarkedVideos appState={this.props.appState}
                handleVideoClick={(item) => this.handleVideoClick(item)}
                removeBookmarkedVideo={(item) => this.removeBookmarkedVideo(item)}/>
              </span>

            </span>

          </div>

        </div>

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
  return bindActionCreators({fetchYoutubeVideos, setSearch, playSelectedVideo, bookmarkVideo, removeBookmarkedVideo}, dispatch);
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
