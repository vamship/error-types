'use strict';

/**
 * Specialized error types that can be used to differentiate different error
 * conditions. Useful when developing custom error handlers for specific types
 * of errors.
 */
module.exports = {
    /**
     * args namespace.
     */
    args: require('./args'),

    /**
     * http namespace.
     */
    http: require('./http')
};
