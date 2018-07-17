'use strict';

/**
 * Specialized error type intended to be used when access to an HTTP resource
 * is forbidden (HTTP 403)
 *
 * @memberof http
 * @extends {Error}
 */
class ForbiddenError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Forbidden';
        }
        this.name = 'ForbiddenError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = ForbiddenError;
