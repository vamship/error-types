/**
 * Specialized error type intended to be used when a HTTP request is malformed
 * or invalid (HTTP 400).
 *
 * @memberof http
 * @extends {Error}
 */
export class BadRequestError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Incorrect or malformed request';
        }
        this.name = 'BadRequestError';
        this.message = `[${this.name}] ${message}`;
    }
}
