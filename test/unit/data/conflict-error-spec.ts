import { expect, use as _useWithChai } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_useWithChai(_sinonChai);
_useWithChai(_chaiAsPromised);

import { testValues as _testValues } from '@vamship/test-utils';
const { allButString } = _testValues;
type AnyInput = _testValues.AnyInput;

import { ConflictError } from '../../../src/data/conflict-error.js';

describe('ConflictError', () => {
    const ERROR_NAME = 'ConflictError';
    const ERROR_MESSAGE = 'Conflict error';

    function _getExpectedMessage(message: string | undefined = undefined) {
        message = message || ERROR_MESSAGE;
        return `[${ERROR_NAME}] ${message}`;
    }

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

        allButString().forEach((message: AnyInput) => {
            it(`should ignore any message values that are not strings (value=${message})`, () => {
                /* eslint-disable  tsel/no-explicit-any */
                const error = new ConflictError(message as any);
                expect(error.message).to.equal(_getExpectedMessage());
            });
        });
    });
});
