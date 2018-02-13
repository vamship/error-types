'use strict';

/**
 * Specialized error type intended to be used when a request is made for a
 * resource that could not be found (HTTP 404).
 *
 * @memberof http
 * @extends {Error}
 */
class NotFoundError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Resource not found';
        }
        this.name = 'NotFoundError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = NotFoundError;
