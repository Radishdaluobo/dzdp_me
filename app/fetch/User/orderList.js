import {get } from '../get'
import { post } from '../post'

export function getOrderListData(userName) {
    const result = get('/api/orderlist/' + userName)
    return result
}

export function postComment(id, comment) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment
    })
    return result
}