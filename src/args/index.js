'use strict';

/**
 * Namespace for error types for argument validation errors.
 *
 * @namespace args
 */
module.exports = {
    /**
     * @type {ArgError}
     */
    ArgError: require('./arg-error'),

    /**
     * @type {SchemaError}
     */
    SchemaError: require('./schema-error'),
};
