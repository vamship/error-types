'use strict';

/**
 * Namespace for error types for argument validation errors.
 *
 * @namespace http
 */
module.exports = {
    /**
     * @type {BadRequestError}
     */
    BadRequestError: require('./bad-request-error'),

    /**
     * @type {NotFoundError}
     */
    NotFoundError: require('./not-found-error'),

    /**
     * @type {UnauthorizedError}
     */
    UnauthorizedError: require('./unauthorized-error'),

    /**
     * @type {ForbiddenError}
     */
    ForbiddenError: require('./forbidden-error')
};
