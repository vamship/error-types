'use strict';

const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;
const _rewire = require('rewire');

let _index = null;

const ArgError = require('../../../src/args/arg-error');
const SchemaError = require('../../../src/args/schema-error');

describe('_args', function() {
    beforeEach(() => {
        _index = _rewire('../../../src/args/index');
    });

    it('should implement methods required by the interface', function() {
        expect(_index.SchemaError).to.equal(SchemaError);
        expect(_index.ArgError).to.equal(ArgError);
    });
});
