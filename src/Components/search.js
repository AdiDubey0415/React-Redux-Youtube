import React, { Component } from 'react';
import '../App.css';

export default class SearchVideo extends Component {
    render() {
        return (
            <section className="search-input-div">
                <form onSubmit={(event) => this.props.handleSearchSubmit(event, this.props.appState.searchState.searchTerm)} style={{'padding': '0.5rem 0'}}>
                    <input type="text" value={this.props.appState.searchState.searchTerm}
                    onChange={(event) => this.props.handleVideoSearch(event)} className="searchInputClass"/>
                </form>
            </section>
        );
    }
}
