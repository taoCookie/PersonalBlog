module.exports = function (status = 'ok', msg = '', data = null) {
    return JSON.stringify({
        status,
        msg,
        data
    })
}