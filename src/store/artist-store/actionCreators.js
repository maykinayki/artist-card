import axiosClient from '../../utils/axiosClient';
import {
    FETCH_ARTIST, FETCH_ARTIST_COMPLETED, FETCH_ARTIST_REJECTED,
    UPDATE_ARTIST_SEARCH_FORM
} from "./actionTypes";
import { getRequestAristParams } from "./selectors";

export const requestArtist = () => {
    return async (dispatch, getState) => {
        dispatch(fetchArtist());
        try {
            const params = getRequestAristParams(getState());
            const artistResponse = await axiosClient.get(`/artists/${params.path.artistname}`, {
                params: params.query
            });
            const artistEventsResponse = await axiosClient.get(`/artists/${params.path.artistname}/events`, {
                params: params.query
            });
            dispatch(fetchArtistCompleted({
                artist: artistResponse.data,
                artistEvents: artistEventsResponse.data
            }));
        } catch (error) {
            dispatch(fetchArtistRejected(error.response.data));
        }
    }
};

export const fetchArtist = () => {
    return {
        type: FETCH_ARTIST
    }
};

export const fetchArtistCompleted = (payload) => {
    return {
        type: FETCH_ARTIST_COMPLETED,
        payload
    }
};

export const fetchArtistRejected = (payload) => {
    return {
        type: FETCH_ARTIST_REJECTED,
        payload
    }
};

export const updateArtistSearchForm = (payload) => {
    return {
        type: UPDATE_ARTIST_SEARCH_FORM,
        payload
    }
};