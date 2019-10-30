import { get, post } from "@/utils/request";
import { APP_ID, APP_SECRET } from '@/utils/const'
const API_URL = 'https://test.youbaobao.xyz:18081'

// home 页面的quanbushuju
export function getHomeData(params) {
    return get( `${API_URL}/book/home/v2`, params)
}

// home首页为你推荐
export function getRecommend(params) {
    return get( `${API_URL}/book/home/recommend/v2`, params)
}

// home首页免费阅读
export function getFreeRead(params) {
    return get( `${API_URL}/book/home/freeRead/v2`, params)
}


// home首页热门阅读
export function getHotBook(params) {
    return get( `${API_URL}/book/home/hotBook/v2`, params)
}


// getOpenId
export function getOpenId(code) {
    return get( `${API_URL}/openId/get`, {
        appId: APP_ID,
        secret: APP_SECRET,
        code: code
    })
    // return get( `${API_URL}/openId/get`, code)
}


// 用户注册
export function register(openId, userInfo) {
    return post( `${API_URL}/user/register`, {
        openId,
        platform: mpvuePlatform,
        ...userInfo
    })
}

// 关键词搜索
export function search(params) {
    return get( `${API_URL}/book/search`, params)
}

// hotsearch
export function hotsearch(params) {
    return get( `${API_URL}/book/hot-search
    `, params)
}

