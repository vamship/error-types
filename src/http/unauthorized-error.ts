/**
 * Specialized error type intended to be used when an unauthorized HTTP request
 * is encountered (HTTP 401)
 *
 * @memberof http
 * @extends {Error}
 */
export default class UnauthorizedError extends Error {
    /**
     * @param {String} message The error message associated with the error.
     */
    constructor(message: string|undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Authorization failed';
        }
        this.name = 'UnauthorizedError';
        this.message = `[${this.name}] ${message}`;
    }
}
