const clsx = require('clsx').default

/**
 * This has nothing to do with react or JSX Runtime
 * Just abstracted away duplicated code
 */
module.exports.jsxFactory = function (factory) {
    return function () {
        if (typeof arguments[0] === 'string' && arguments[1].className) {
            arguments[1].className = clsx(arguments[1].className)
        }

        return factory.apply(undefined, arguments)
    }
}