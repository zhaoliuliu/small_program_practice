import { getOpenId } from "./index"

export function getSetting(auth, onSuccess, onFail) {
    mpvue.getSetting({
        success(res) {
            // console.log(res)
            if (res.authSetting[`scope.${auth}`]) {
                onSuccess(res)
            } else {
                onFail(res)
            }
        },
        fail(res) {
            console.log(res)  // 直接抛出异常
        }
    })
}

export function getUserInfo(onSuccess, onFail) {
    mpvue.getUserInfo({
        success(res) {
            // console.log(res)
            const { userInfo } = res
            if (userInfo) {
                onSuccess(res.userInfo)
            } else {
                onFail(res)
            }
        },
        fail(res) {
            console.log(res)  // 直接抛出异常
        }
    })
}

export function setStorageSync(key, data) {
    mpvue.setStorageSync(key, data)
}

export function getStorageSync(key) {
    return mpvue.getStorageSync(key)
}

// export function getAccountInfoSync() {
//     mpvue.getAccountInfoSync({
//         success(res) {
//             console.log('getAccountInfoSync', res)
//         },
//         fail(res) {
//             console.log(res)  // 直接抛出异常
//         }
//     })
// }

export function getUserOpenId(callback) {
    mpvue.login({
        success(res) {
            // console.log(res)
            if (res.code) {
                // console.log('woshigetUserID 的 res', res)
                // const {code} = res.code
                getOpenId(res.code).then(response => {
                    const { data: { data: { openid } } } = response
                    setStorageSync('openId', openid)
                    callback && callback(openid)
                }).catch(err=>{
                    console.log(err)
                })
            } else {
                console.log(res)  // 直接抛出异常
            }
        },
        fail(res) {
            console.log(res)  // 直接抛出异常
        }
    })
}

export function showLoading(title) {
    mpvue.showLoading({
        title,
        mask: true
    })
}

export function hideLoading() {
    mpvue.hideLoading()
}