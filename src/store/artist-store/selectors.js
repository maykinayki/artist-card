import constants from "../../utils/constants";

export const getArtistStore = store => store.artistStore;

export const getArtist = store =>
    getArtistStore(store) ? getArtistStore(store).artist : [];

export const getRequestAristParams = store =>
    getArtistStore(store)
        ? {
            path: {
                artistname: getArtistStore(store).searchArtistForm.artistName
            },
            query: {
                app_id: constants.appId
            }
        }
        : {};