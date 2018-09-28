import React, { Component } from 'react';
import "../App.css";

let bookmarkClass;
let isBookmarked = false;
export default class SearchedVideos extends Component {

    renderListFunction = () => {
        if(this.props.appState.searchedVideos && this.props.appState.searchedVideos.length != 0) {
            return (
                this.props.appState.searchedVideos.map((item) => {
                    isBookmarked = false;
                    for(let i = 0; i < this.props.appState.bookmarkedVideos.length; i++) {
                        if(this.props.appState.bookmarkedVideos[i].id == item.id) {
                            isBookmarked = true;
                        }
                    }
                    isBookmarked ? bookmarkClass = "bookmarked" : bookmarkClass = "unbookmarked";
                    return (
                        <li key={item.id} className="li-class">
                            <img src={item.thumbnails.medium.url} onClick={() => this.props.handleVideoClick(item)}/>
                            <span style={{'display': 'flex', 'flexDirection': 'column'}}>
                                <span className="span-class">
                                    {item.title}
                                    <button onClick={() => this.props.handleBookmarkVideo(item)} className={bookmarkClass}>
                                        Bookmark
                                    </button>
                                </span>
                            </span>
                        </li>
                    );
                })
            );
        }
    }

    render() {
        return (
            <div className="videos-list" id="style-3">
                <ul className="ul-class" style={{'paddingLeft': '0'}}>
                    { this.renderListFunction() }
                </ul>
            </div>
        );
    }

}