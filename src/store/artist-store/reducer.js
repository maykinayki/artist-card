import {
    FETCH_ARTIST, FETCH_ARTIST_COMPLETED,
    FETCH_ARTIST_REJECTED
} from "./actionTypes";

const INITIAL_STATE = {
    artist: {},
    artistEvents: [],
    searchArtistForm: {
        artistName: "Dua Lipa"
    },
    loadingArtistData: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTIST:
            return {...state, loadingArtistData: true};
        case FETCH_ARTIST_COMPLETED:
            return {...state, loadingArtistData: false, artist: action.payload};
        case FETCH_ARTIST_REJECTED:
            return {...state, loadingArtistData: false, error: action.payload};

        default:
            return state;
    }
}
