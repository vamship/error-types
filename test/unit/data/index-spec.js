'use strict';

const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;
const _rewire = require('rewire');

let _index = null;

const DuplicateRecordError = require('../../../src/data/duplicate-record-error');
const ConcurrencyControlError = require('../../../src/data/concurrency-control-error');
const ConflictError = require('../../../src/data/conflict-error');

describe('_data', function () {
    beforeEach(() => {
        _index = _rewire('../../../src/data/index');
    });

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
