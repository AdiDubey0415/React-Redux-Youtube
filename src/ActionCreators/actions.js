import axios from "axios";

const API_KEY = "AIzaSyDsUro2mrHwyIEP5SneV8x2ZC5JgXsR5Dg";

export function setSearch(value) {
  return {
    type: "SET_SEARCH",
    payload: value
  };
}

export function submitSearch() {
  return {
    type: "SUBMIT_SEARCH"
  };
}

export function fetchYoutubeVideos(searchTerm) {
  const request = () =>
    axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}`
    );
  return dispatch => {
    dispatch({
      type: "LOADING",
      searchTerm
    });
    request()
      .then(({data}) => {
        const itemsArray = data.items.map(video => {
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnails: video.snippet.thumbnails
          };
        });
        dispatch({
          type: "FETCH_SUCCESS",
          relatedVideos: itemsArray
        });
      })
      .catch(({data}) => {
        dispatch({
          type: "FETCH_FAILURE"
        });
      });
  };
}
