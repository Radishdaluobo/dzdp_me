import * as actionTypes from '../constants/store'

const initialState = []

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data)
                //相当于手动写的add方法
            return state
                //concat 是返回连接之后的新的数组，但是不会修改原始数组，
                //unshift 返回的是被修改后的数组的长度,会修改原数组
        case actionTypes.STORE_RM:
            return state.filter(item => {
                //相当于手动写的remove方法
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return state
    }
}