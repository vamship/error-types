'use strict';

/**
 * Specialized error type intended to be used for errors that occur due to
 * failures in input argument validations.
 *
 * @memberof args
 * @extends {Error}
 */
class ArgError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Argument validation failed';
        }
        this.name = 'ArgError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = ArgError;
