import { expect, use as _useWithChai } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_useWithChai(_sinonChai);
_useWithChai(_chaiAsPromised);

import * as _index from '../../../src/data/index.js';
import { DuplicateRecordError } from '../../../src/data/duplicate-record-error.js';
import { ConcurrencyControlError } from '../../../src/data/concurrency-control-error.js';
import { ConflictError } from '../../../src/data/conflict-error.js';

describe('[data]', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.DuplicateRecordError).to.equal(DuplicateRecordError);
        expect(_index.ConcurrencyControlError).to.equal(
            ConcurrencyControlError
        );
        expect(_index.ConflictError).to.equal(ConflictError);
    });
});
