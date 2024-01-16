import _chai, { expect } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import { testValues as _testValues } from '@vamship/test-utils';
const { allButString } = _testValues;
type AnyInput = _testValues.AnyInput;

import DuplicateRecordError from '../../../src/data/duplicate-record-error.js';

describe('DuplicateRecordError', () => {
    const ERROR_NAME = 'DuplicateRecordError';
    const ERROR_MESSAGE = 'Duplicate record error';

    function _getExpectedMessage(message: string | undefined = undefined) {
        message = message || ERROR_MESSAGE;
        return `[${ERROR_NAME}] ${message}`;
    }

    describe('ctor()', () => {
        it('should return an Error object with default property values', () => {
            const error = new DuplicateRecordError();

            expect(error).to.be.an.instanceOf(Error);
            expect(error.name).to.equal(ERROR_NAME);
            expect(error.message).to.equal(_getExpectedMessage());
        });

        it('should persist the error message property when specified', () => {
            const message = 'Something went wrong';
            const error = new DuplicateRecordError(message);

            expect(error).to.be.an.instanceOf(Error);
            expect(error.message).to.equal(_getExpectedMessage(message));
        });

        allButString().forEach((message: AnyInput) => {
            it(`should ignore any message values that are not strings (value=${message})`, () => {
                /* eslint-disable  tsel/no-explicit-any */
                const error = new DuplicateRecordError(message as any);
                expect(error.message).to.equal(_getExpectedMessage());
            });
        });
    });
});
