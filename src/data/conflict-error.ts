/**
 * Specialized error type intended to be used for errors that occur due to
 * failures because of prerequisite data conflicts.
 *
 * @memberof args
 * @extends {Error}
 */
export default class ConflictError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Conflict error';
        }
        this.name = 'ConflictError';
        this.message = `[${this.name}] ${message}`;
    }
}
