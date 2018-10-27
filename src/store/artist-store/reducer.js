import {
    FETCH_ARTIST, FETCH_ARTIST_COMPLETED,
    FETCH_ARTIST_REJECTED,
    UPDATE_ARTIST_SEARCH_FORM
} from "./actionTypes";

const INITIAL_STATE = {
    artist: {},
    artistEvents: [],
    artistSearchForm: {
        artistName: ""
    },
    loadingArtistData: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTIST:
            return {...state, loadingArtistData: true};
        case FETCH_ARTIST_COMPLETED:
            return {...state, loadingArtistData: false, artist: action.payload.artist, artistEvents: action.payload.artistEvents};
        case FETCH_ARTIST_REJECTED:
            return {...state, loadingArtistData: false, error: action.payload};

        case UPDATE_ARTIST_SEARCH_FORM:
            return {
                ...state,
                artistSearchForm: {
                    ...state.artistSearchForm,
                    ...action.payload
                }
            };

        default:
            return state;
    }
}
