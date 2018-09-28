import React, { Component } from 'react';

export default class BookmarkedVideos extends Component {

    renderListFunction = () => {
        if(this.props.appState.bookmarkedVideos && this.props.appState.bookmarkedVideos.length != 0) {
            return (
                this.props.appState.bookmarkedVideos.map((item) => {
                    return (
                        <li key={item.id} className="li-class played-bookmarked-li-class">
                            <img src={item.thumbnails.default.url} onClick={() => this.props.handleVideoClick(item)}/>
                            <span style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%'}}>
                                <span className="span-class">
                                    {item.title}
                                    <button onClick={() => this.props.removeBookmarkedVideo(item)} className="bookmarked" style={{'backgroundColor': 'red', 'marginTop': 'auto'}}>
                                        Remove
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