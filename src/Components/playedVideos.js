import React, { Component } from 'react';
import '../App.css';

let bookmarkClass;
let isBookmarked = false;
export default class PlayedVideos extends Component {
    
    renderListFunction = () => {
        if(this.props.appState.playedVideos && this.props.appState.playedVideos.length != 0) {
            return (
                this.props.appState.playedVideos.map((item) => {
                    isBookmarked = false;
                    for(let i = 0; i < this.props.appState.bookmarkedVideos.length; i++) {
                        if(this.props.appState.bookmarkedVideos[i].id == item.id) {
                            isBookmarked = true;
                        }
                    }
                    isBookmarked ? bookmarkClass = "bookmarked" : bookmarkClass = "unbookmarked";
                    return (
                        <li key={item.id} className="li-class played-bookmarked-li-class">
                            <img src={item.thumbnails.default.url} onClick={() => this.props.handleVideoClick(item)}/>
                            <span style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%'}}>
                                <span className="span-class">
                                    {item.title}
                                    <button style={{'marginTop': 'auto'}} onClick={() => this.props.handleBookmarkVideo(item)} className={bookmarkClass}>
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
            <div>
                <ul className="ul-class played-bookmarked-ul-class">
                    { this.renderListFunction() }
                </ul>
            </div>
        );
    }
}