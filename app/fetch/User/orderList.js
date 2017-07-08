import {get } from '../get'

export function getOrderListData(userName) {
    const result = get('/api/orderlist/' + userName)
    return result
}