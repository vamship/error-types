'use strict';

const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;

const _rewire = require('rewire');
const _testValues = require('@vamship/test-utils').testValues;

let ConflictError = null;

describe('ConflictError', () => {
    const ERROR_NAME = 'ConflictError';
    const ERROR_MESSAGE = 'Conflict error';

    function _getExpectedMessage(message) {
        message = message || ERROR_MESSAGE;
        return `[${ERROR_NAME}] ${message}`;
    }

    beforeEach(() => {
        ConflictError = _rewire(
            '../../../src/data/conflict-error'
        );
    });

    describe('ctor()', () => {
        it('should return an Error object with default property values', () => {
            const error = new ConflictError();

            expect(error).to.be.an.instanceOf(Error);
            expect(error.name).to.equal(ERROR_NAME);
            expect(error.message).to.equal(_getExpectedMessage());
        });

        it('should persist the error message property when specified', () => {
            const message = 'Something went wrong';
            const error = new ConflictError(message);

            expect(error).to.be.an.instanceOf(Error);
            expect(error.message).to.equal(_getExpectedMessage(message));
        });

        it('should ignore any message values that are not strings', () => {
            const inputs = _testValues.allButString();

            inputs.forEach((message) => {
                const error = new ConflictError(message);
                expect(error.message).to.equal(_getExpectedMessage());
            });
        });
    });
});
