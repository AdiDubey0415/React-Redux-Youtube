export function setSearch(value) {
    return ({
        type: 'SET_SEARCH',
        payload: value
    });
}

export function submitSearch() {
    return ({
        type: 'SUBMIT_SEARCH'
    });
}