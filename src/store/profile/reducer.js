import { TOGGLE_CHECKBOX, CHANGE_NAME } from "./actions"

const initialState = {
    checkbox: false,
    name: 'newProfile'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: action.newName
            };
        default:
            return state;
    }
}