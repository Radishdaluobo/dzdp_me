import * as actionTypes from '../constants/store'

const initialState = {}

export default function store(state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE:
            return action.data
        default:
            return state
    }
}