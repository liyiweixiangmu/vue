import request from '@/utils/request'

export function getPlayer(begin, end, uid) {
    return request({
        url: '/user_value/player_survive',
        method: 'post',
        data: {
            begin,
            end
        }
    })
}

