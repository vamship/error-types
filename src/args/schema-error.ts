/**
 * Specialized error type intended to be used for errors that occur due to
 * failures in schema validations.
 *
 * @memberof args
 */
export default class SchemaError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Schema validation failed';
        }
        this.name = 'SchemaError';
        this.message = `[${this.name}] ${message}`;
    }
}
