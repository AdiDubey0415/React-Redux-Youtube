let newState;
export default function(state, action) {
  switch (action.type) {
    case "SET_SEARCH": {
      newState = {...state};
      newState.searchState.searchTerm = action.payload;
      return newState;
    }

    case "LOADING": {
      return {
        searchState: {
          searchTerm: action.searchTerm
        }
      };
    }

    case "FETCH_SUCCESS": {
      return {
        ...state,
        searchedVideos: action.videoIds
      };
    }

    case "FETCH_FAILURE": {
      return {
        ...state,
        error: "ERROR FETCHING DATA"
      };
    }

    default:
      return {
        searchState: {
          searchTerm: ""
        },
        error: "",
        currentlyPlaying: "",
        searchedVideos: [],
        playedVideos: [],
        bookmarkedVideos: []
      };
  }
}
