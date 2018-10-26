import axiosClient from '../../utils/axiosClient';
import {
    FETCH_ARTIST, FETCH_ARTIST_COMPLETED, FETCH_ARTIST_REJECTED
} from "./actionTypes";
import { getRequestAristParams } from "./selectors";

export const requestArtist = () => {
    return async (dispatch, getState) => {
        dispatch(fetchCars());
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

export const fetchCars = () => {
    return {
        type: FETCH_ARTIST
    }
};

export const fetchArtistCompleted = (payload) => {
    return {
        type: FETCH_ARTIST_COMPLETED,
        payload: payload
    }
};

export const fetchArtistRejected = (payload) => {
    return {
        type: FETCH_ARTIST_REJECTED,
        payload: payload
    }
};