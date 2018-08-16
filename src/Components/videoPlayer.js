import React, { Component } from 'react';
import '../App.css';

export default class VideoPlayer extends Component {
    render() {
        return (
            <div>
                <iframe width="420" height="315"
                src={"https://www.youtube.com/embed/" + this.props.appState.currentlyPlaying} className="iframeClass">
                </iframe>
            </div>
        );
    }
}