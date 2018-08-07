module.exports = {
    add: (...args) => {
        return args.reduce((p, c) => {
            return p + c;
        })
    },
    mul: (...args) => {
        return args.reduce((p, c) => {
            return p * c;
        })
    }

};