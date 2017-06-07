import {get } from '../get'

export function getCityList() {
    const result = get('/api/cityList')
    return result
}