'use strict';

/**
 * Specialized error type intended to be used for errors that occur due to
 * failures because of duplicate record creation (primary key violations).
 *
 * @memberof args
 * @extends {Error}
 */
class DuplicateRecordError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Duplicate record error';
        }
        this.name = 'DuplicateRecordError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = DuplicateRecordError;
