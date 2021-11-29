export const REQUEST_ASTROINFO_LOADING = "ASTROINFO::REQUEST_LOADING";
export const REQUEST_ASTROINFO_FAILURE = "ASTROINFO::REQUEST_FAILURE";
export const REQUEST_ASTROINFO_SUCCESS = "ASTROINFO::REQUEST_SUCCESS";

const apiUrl2 = "https://apodapi.herokuapp.com/api/";

export const getAstroInfoLoading = () => ({
    type: REQUEST_ASTROINFO_LOADING,
});

export const getAstroInfoSuccess = (astroInfo) => ({
    type: REQUEST_ASTROINFO_SUCCESS,
    payload: astroInfo,
});

export const getAstroInfoFailure = (error) => ({
    type: REQUEST_ASTROINFO_FAILURE,
    payload: error
});

export const getAstroInfo = () => async (dispatch) => {
    dispatch(getAstroInfoLoading());
    try {
        const response = await fetch(apiUrl2)
        console.log('response: ', response);

        if (!response.ok) {
            throw new Error('not ok');
        }

        const result = await response.json();
        
        dispatch(getAstroInfoSuccess(result));
    } catch (err) {
        dispatch(getAstroInfoFailure(err.message));
        console.warn(err);
    }
};
