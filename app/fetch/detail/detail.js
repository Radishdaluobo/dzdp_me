import {get } from '../get'

export function getDetailInfo(id) {
    const result = get('/api/detail/info/' + id)
    return result
}

export function getCommentList(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}