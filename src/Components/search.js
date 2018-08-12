import React, { Component } from 'react';

export default class SearchVideo extends Component {
    render() {
        return (
            <section>
                <form onSubmit={this.props.handleSearchSubmit}>
                    <input type="text" value={this.props.appState.searchState.searchTerm}
                    onChange={(event) => this.props.handleVideoSearch(event)}/>
                </form>
            </section>
        );
    }
}