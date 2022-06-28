'use strict';

/**
 * Specialized error type intended to be used for errors that occur due to
 * failures because of prerequisite data conflicts.
 *
 * @memberof args
 * @extends {Error}
 */
class ConflictError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Conflict error';
        }
        this.name = 'ConflictError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = ConflictError;
