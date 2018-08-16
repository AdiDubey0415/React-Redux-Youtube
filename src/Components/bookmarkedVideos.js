import React, { Component } from 'react';

export default class BookmarkedVideos extends Component {

    renderListFunction = () => {
        if(this.props.appState.bookmarkedVideos && this.props.appState.bookmarkedVideos.length != 0) {
            return (
                this.props.appState.bookmarkedVideos.map((item) => {
                    return (
                        <li key={item.id} className="li-class">
                            <img src={item.thumbnails.medium.url} onClick={() => this.props.handleVideoClick(item)}/>
                            <span style={{'display': 'flex', 'flexDirection': 'column'}}>
                                <span className="span-class">
                                    {item.title}
                                </span>
                                <button onClick={() => this.props.removeBookmarkedVideo(item)} className="bookmarked" style={{'backgroundColor': 'red'}}>
                                    Remove Bookmark
                                </button>
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
                <ul className="ul-class">
                    { this.renderListFunction() }
                </ul>
            </div>
        );
    }

}