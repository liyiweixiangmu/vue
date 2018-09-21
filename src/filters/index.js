export function serverType(game) {
    switch (game) {
        case 'fuzhou':
            return '福州麻将';
            break;
        case 'nanping':
            return '南平';
            break;
        case 'doudizhu':
            return '斗地主';
            break;
        case 'shisanshui':
            return '十三水';
            break;
        case 'douniu':
            return '斗牛';
            break;

    }
}

export function moneyType(type) {
    switch (type) {
        case 0:
            return '钻石';
            break;
        case 1:
            return '金币';
            break;
    }
}
export function incomeType(type) {
    switch (type) {
        case 1:
            return '收';
            break;
        case 2:
            return '出';
            break;
    }
}
export function changeType(type) {
    switch (type) {
        case 10:
            return '游戏输';
            break;
        case 11:
            return '游戏赢';
            break;
        case 12:
            return '被处罚金额';
            break;
        case 20:
            return '赠送';
            break;
        case 21:
            return '接收';
            break;
        case 30:
            return '钻石兑换金币';
            break;
        case 40:
            return '商城购买';
            break;
        case 50:
            return '奖励';
            break;
        case 51:
            return '救济';
            break;
        case 52:
            return '分享';
            break;
    }

}