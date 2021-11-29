import { REQUEST_ASTROINFO_LOADING, REQUEST_ASTROINFO_SUCCESS, REQUEST_ASTROINFO_FAILURE } from "./actions"

const initialState = {
    astroInfoData: {},
    request: {
        status: "IDLE",
        error: "",
    }
};

export const astroInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_ASTROINFO_LOADING:
            return {
                ...state,
                request: {
                    ...state.request,
                    status: "LOADING"
                }
            };
        case REQUEST_ASTROINFO_SUCCESS:
            return {
                ...state,
                astroInfoData: payload,
                request: {
                    error: '',
                    status: "SUCCESS"
                }
            };
            case REQUEST_ASTROINFO_FAILURE:
                return {
                    ...state,
                    request: {
                        error: payload,
                        status: "FAILURE"
                    }
                };
        default:
            return state;
    }
}
