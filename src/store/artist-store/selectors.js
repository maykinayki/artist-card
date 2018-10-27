import constants from "../../utils/constants";

export const getArtistStore = store => store.artistStore;

export const getArtist = store =>
    getArtistStore(store) ? getArtistStore(store).artist : {};

export const getArtistEvents = store =>
    getArtistStore(store) ? getArtistStore(store).artistEvents : [];

export const getArtistSearchForm = store =>
    getArtistStore(store) ? getArtistStore(store).artistSearchForm : {};

export const getRequestAristParams = store =>
    getArtistStore(store)
        ? {
            path: {
                artistname: getArtistStore(store).artistSearchForm.artistName
            },
            query: {
                app_id: constants.appId
            }
        }
        : {};