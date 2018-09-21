import { getPlayer } from '@/api/player'
import { getToken, setToken, removeToken } from '@/utils/auth'

const player = {


    actions: {
        // 登录
        getPlayer({ commit }, data) {
            return new Promise((resolve, reject) => {
                getPlayer(data.begin, data.end, data.uid).then(response => {
                    const data = response.data
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default player
