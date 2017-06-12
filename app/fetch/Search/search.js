import {get } from '../get'

export function getSearchData(city, page, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + city + '/' + category + keywordStr)
    return result
}