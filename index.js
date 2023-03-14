function receivesAFunction(callback) {
    return callback()
}

function callback() {
    return 'I am the callback function'
}

function returnsANamedFunction() {
    return callback
}

function returnsAnAnonymousFunction(anonymousFunction = n => n + 2) {
    return anonymousFunction
}
