# Error Types

Exports a set of classes that can be used to identify different types of errors.
This is useful for post error processing, allowing for different behaviors for
different error types.

Each error comes with a default error message, but also supports custom
error messages. All error messages are prefixed with the argument name to help
make predictable decisions based on error messages.

This is typical when errors are processed outside the javascript runtime, for
example when an AWS API gateway attempts to handle an error thrown by a
lambda function.

## Installation

This library can be installed via npm using:

```
npm install @vamship/error-types
```

## Usage

The types exposed by this library are available under two namespaces:

* **args**: Error types for argument validation errors
* **http**: Error types for http errors

## Examples

### HTTP Errors

```
const errorTypes = require('@vamship/error-types');
const {BadRequestError, NotFoundError, UnauthorizedError} = errorTypes.http;

// Throws an error with message '[BadRequestError] Incorrect or malformed request'
throw new BadRequestError()

// Throws an error with message '[NotFoundError] Resource not found'
throw new NotFoundError()

// Throws an error with message '[UnauthorizedError] Authorization failed'
throw new UnauthorizedError()
```

### Argument Errors

```
const errorTypes = require('@vamship/error-types');
const {ArgError, SchemaError} = errorTypes.args;

// Throws an error with message '[ArgError] Arugment validation failed'
throw new ArgError()

// Throws an error with message '[SchemaError] Schema validation failed'
throw new SchemaError()
```
