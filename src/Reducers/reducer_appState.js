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

    case "CHANGE_SEARCH_TEXT": {
      return {...state, searchState: {...state.searchState, searchTerm: action.value}};
    }

    case "FETCH_SUCCESS": {
      return {
        ...state,
        searchedVideos: action.relatedVideos
      };
    }

    case "FETCH_FAILURE": {
      return {
        ...state,
        error: "ERROR CHANGE_SEARCH_TEXT DATA"
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
