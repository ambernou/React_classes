import { REQUEST_ASTROINFO_FAILURE, REQUEST_ASTROINFO_LOADING, REQUEST_ASTROINFO_SUCCESS } from "../actions";
import { astroInfoReducer } from "../reducer";

describe("reducer for new astronomical information", () => {
    it("get new data, status LOADING, no error", () => {
        const type = REQUEST_ASTROINFO_LOADING
        const state = {
            astroInfoData: [],
            request: {
                status: "IDLE",
                error: "",
            }
        }
        const payload = []

        expect(astroInfoReducer(state, { type, payload })).toEqual({
            ...state,
            request: {
                ...state.request,
                status: "LOADING",
            }
        })
    })

    it("get new data, status LOADING, error", () => {
        const type = REQUEST_ASTROINFO_FAILURE
        const stateWithError = {
            astroInfoData: [],
            request: {
                status: "LOADING",
                error: "FAILURE",
            }
        }
        const payload = "error"

        expect(astroInfoReducer(stateWithError, { type, payload })).toEqual({
            ...stateWithError,
            request: {
                error: payload,
                status: "FAILURE"
            }
        })
    })

    it("get new data, status SUCCESS", () => {
        const type = REQUEST_ASTROINFO_SUCCESS
        const state = {
            astroInfoData: [],
            request: {
                status: "LOADING",
                error: "",
            }
        }
        const payload = ["data1", "data2"]

        expect(astroInfoReducer(state, { type, payload })).toEqual({
            ...state,
            astroInfoData: payload,
            request: {
                ...state.request,
                status: "SUCCESS",
            }
        })
    })
})