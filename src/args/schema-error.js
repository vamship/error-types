'use strict';

/**
 * Specialized error type intended to be used for errors that occur due to
 * failures in schema validations.
 *
 * @memberof args
 * @extends {Error}
 */
class SchemaError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Schema validation failed';
        }
        this.name = 'SchemaError';
        this.message = `[${this.name}] ${message}`;
    }
}

module.exports = SchemaError;
