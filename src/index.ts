/**
 * Specialized error types that can be used to differentiate different error
 * conditions. Useful when developing custom error handlers for specific types
 * of errors.
 */
export { ArgError } from './args/arg-error.js';
export { SchemaError } from './args/schema-error.js';
export { DuplicateRecordError } from './data/duplicate-record-error.js';
export { ConcurrencyControlError } from './data/concurrency-control-error.js';
export { ConflictError } from './data/conflict-error.js';
export { BadRequestError } from './http/bad-request-error.js';
export { NotFoundError } from './http/not-found-error.js';
export { UnauthorizedError } from './http/unauthorized-error.js';
export { ForbiddenError } from './http/forbidden-error.js';
