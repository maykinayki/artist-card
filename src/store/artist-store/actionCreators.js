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
            const response = await axiosClient.get(`/artists/${params.path.artistname}`, {
                params: params.query
            });
            dispatch(fetchArtistCompleted(response.data));
        } catch (error) {
            console.log(error.response);
            dispatch(fetchArtistRejected(error.response));
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
}