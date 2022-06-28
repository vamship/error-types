'use strict';

/**
 * Namespace for error types for errors related to data storage and operations.
 *
 * @namespace data
 */
module.exports = {
    /**
     * @type {DuplicateRecordError}
     */
    DuplicateRecordError: require('./duplicate-record-error'),

    /**
     * @type {ConcurrencyControlError}
     */
    ConcurrencyControlError: require('./concurrency-control-error'),

    /**
     * @type {ConflictError}
     */
    ConflictError: require('./conflict-error'),
};
