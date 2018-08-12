import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg";
let newState;
export default function(state, action) {
    
    switch(action.type) {
        case 'SET_SEARCH':
        newState = {...state};
        newState.searchState.searchTerm = action.payload;
        return newState;

        case 'SUBMIT_SEARCH':
        newState = {...state};
        YTSearch({ key: API_KEY, term: newState.searchState.searchTerm }, (data) => {
            console.log(data);
            if(data) newState.searchedVideos.concat(data);
        });
        console.log(newState);
        return newState;

        default:
        return {
            searchState: {
                searchTerm: ''
            },
            currentlyPlaying: '',
            searchedVideos: [],
            playedVideos: [],
            bookmarkedVideos: [],
        };
    }

}