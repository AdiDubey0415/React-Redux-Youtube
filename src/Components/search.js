import React, {Component} from "react";

export default class SearchVideo extends Component {
  render() {
    return (
      <section>
        <input
          type="text"
          value={this.props.appState.searchState.searchTerm}
          onChange={event => this.props.handleVideoSearch(event)}
        />
        <input
          type="button"
          value="Submit"
          onClick={e =>
            this.props.handleSearchSubmit(e, this.props.appState.searchState.searchTerm)
          }
        />
      </section>
    );
  }
}
