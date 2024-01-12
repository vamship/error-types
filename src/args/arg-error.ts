/**
 * Specialized error type intended to be used for errors that occur due to
 * failures in input argument validations.
 *
 * @memberof args
 */
export default class ArgError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);

        if (typeof message !== 'string') {
            message = 'Argument validation failed';
        }
        this.name = 'ArgError';
        this.message = `[${this.name}] ${message}`;
    }
}
