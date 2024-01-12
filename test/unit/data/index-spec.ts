import _chai, {expect} from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import * as _index from '../../../src/data/index';
import DuplicateRecordError from '../../../src/data/duplicate-record-error';
import ConcurrencyControlError from '../../../src/data/concurrency-control-error';
import ConflictError from '../../../src/data/conflict-error';

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
