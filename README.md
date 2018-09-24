# @vamship/error-types

_Exports custom error types that describe specific error conditions_

Exports a set of classes that can be used to identify different types of errors.
This is useful for post error processing, allowing for different behaviors for
different error types.

Each error comes with a default error message, but also supports custom
error messages. All error messages are prefixed with the argument name to help
make predictable decisions based on error messages.

## API Documentation

API documentation can be found [here](https://vamship.github.io/error-types).

# Motivation

Javascript is not a strongly typed language, but there are certain scenarios
where having well defined types can be valuable. One of these scenarios pertain
to error handling.

Let us consider the following promise chain:

```
const Promise = require('bluebird').Promise;
...

function fetchData(recordInfo) {
    Promise.try(() => {
        // Query the database for data. This call could succeed, or could throw
        // either:
        // (1) An error for failed schema validation
        // (2) An error if the record was not found
        queryDatabase(recordInfo)
    }).catch((err) => {
        //Check the error message and perform remedial actions.
        if(err.message === 'Schema validation failed') {
            //Deal with schema validation errors
        } else if(err.message === 'Record not found') {
            //Deal with record not found errors
        } else {
            //Handle all other errors.
        }
    });
```

In the above example, the exception handling code is clunky and brittle,
depending on exact error message strings to make handling decisions. This can be
cleaned up significantlly by using well defined error types like this:

```
const Promise = require('bluebird').Promise;
const { SchemaError } = require('@vamship/test-lib').args;
const { NotFoundError } = require('@vamship/test-lib').http;
...

function fetchData(recordInfo) {
    Promise.try(() => {
        // Query the database for data. This call could succeed, or could throw
        // either:
        // (1) SchemaError: If schema validation fails
        // (2) NotFoundError: If the record was not found
        queryDatabase(recordInfo)
    }).catch(SchemaError, (err) => {
        //Deal with schema validation errors
    }).catch(NotFoundError, (err) => {
        //Deal with record not found errors
    }).catch((err) => {
        //Handle all other errors.
    });
```

Strongly typed errors are also useful if the errors are processed outside the
Javascript runtime, for example when an AWS API gateway attempts to handle an
error thrown by a lambda function.

## Installation

This library can be installed via npm using:

```
npm install @vamship/error-types
```

## Usage

The types exposed by this library are available under two namespaces:

-   **args**: Error types for argument validation errors
-   **http**: Error types for http errors

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
