import _chai, {expect} from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import * as _index from '../../../src/data/index.js';
import * as DuplicateRecordError from '../../../src/data/duplicate-record-error.js';
import * as ConcurrencyControlError from '../../../src/data/concurrency-control-error.js';
import * as ConflictError from '../../../src/data/conflict-error.js';

describe('_data', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.DuplicateRecordError).to.equal(DuplicateRecordError);
        expect(_index.ConcurrencyControlError).to.equal(
            ConcurrencyControlError
        );
        expect(_index.ConflictError).to.equal(
            ConflictError
        );
    });
});
