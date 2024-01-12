/**
 * Specialized error type intended to be used when a request is made for a
 * resource that could not be found (HTTP 404).
 *
 * @memberof http
 * @extends {Error}
 */
export default class NotFoundError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Resource not found';
        }
        this.name = 'NotFoundError';
        this.message = `[${this.name}] ${message}`;
    }
}
