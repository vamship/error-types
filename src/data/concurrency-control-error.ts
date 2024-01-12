/**
 * Specialized error type intended to be used for errors that occur due to
 * concurrency control failures.
 *
 * @see [Concurrency Control]{@link https://en.wikipedia.org/wiki/Concurrency_control}
 * @see [Optimistic Concurrency Control]{@link https://en.wikipedia.org/wiki/Optimistic_concurrency_control}
 *
 * @memberof args
 */
export default class ConcurrencyControlError extends Error {
    /**
     * @param message The error message associated with the error.
     */
    constructor(message: string | undefined = undefined) {
        super(message);
        if (typeof message !== 'string') {
            message = 'Concurrency check failed';
        }
        this.name = 'ConcurrencyControlError';
        this.message = `[${this.name}] ${message}`;
    }
}
