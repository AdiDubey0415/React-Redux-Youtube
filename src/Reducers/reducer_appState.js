let newState;
let alreadyPlayed = false;
let alreadyBookmarked = false;
export default function(state, action) {
  switch (action.type) {
    case "SET_SEARCH": {
      newState = {...state};
      newState.searchState.searchTerm = action.payload;
      return newState;
    }

    case "LOADING": {
      newState = {...state};
      newState.searchState.searchTerm = action.searchTerm;
      return newState;
    }

    case "FETCH_SUCCESS": {
      newState = {...state};
      newState.searchedVideos = action.relatedVideos;
      return newState;
    }

    case "FETCH_FAILURE": {
      newState = {...state};
      newState.error = "ERROR FETCHING DATA";
      return newState;
    }

    case "PLAY_SELECTED_VIDEO": {
      newState = {...state};
      newState.currentlyPlaying = action.payload.id;
      alreadyPlayed = false;
      for(let i = 0; i < newState.playedVideos.length; i++) {
        if(newState.playedVideos[i].id == action.payload.id) {
          alreadyPlayed = true;
        }
      }
      if(!alreadyPlayed) {
        newState.playedVideos = newState.playedVideos.concat(action.payload);
      }
      return newState;
    }

    case "BOOKMARK_VIDEO":
    newState = {...state};
    alreadyBookmarked = false;
    for(let i = 0; i < newState.bookmarkedVideos.length; i++) {
      if(newState.bookmarkedVideos[i].id == action.payload.id) {
        alreadyBookmarked = true;
      }
    }
    if(!alreadyBookmarked) {
      newState.bookmarkedVideos = newState.bookmarkedVideos.concat(action.payload);
    }
    return newState;

    case "REMOVE_BOOKMARK_VIDEO":
    newState = {...state};
    newState.bookmarkedVideos = newState.bookmarkedVideos.filter((item) => {
      return item.id != action.payload.id;
    });
    return newState;

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
