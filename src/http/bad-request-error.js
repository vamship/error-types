'use strict';

/**
 * Specialized error type intended to be used when a HTTP request is malformed
 * or invalid (HTTP 400).
 *
 * @memberof http
 * @extends {Error}
 */
class BadRequestError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Incorrect or malformed request';
        }
        this.name = 'BadRequestError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = BadRequestError;
