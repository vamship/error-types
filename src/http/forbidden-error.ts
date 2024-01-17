/**
 * Specialized error type intended to be used when access to an HTTP resource
 * is forbidden (HTTP 403)
 *
 * @memberof http
 * @extends {Error}
 */
export class ForbiddenError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Access to this resource is forbidden';
        }
        this.name = 'ForbiddenError';
        this.message = `[${this.name}] ${message}`;
    }
}
