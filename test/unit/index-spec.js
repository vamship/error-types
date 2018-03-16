'use strict';

const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;
const _rewire = require('rewire');

let _index = null;

const _args = require('../../src/args');
const _http = require('../../src/http');
const _data = require('../../src/data');

describe('_index', function() {
    beforeEach(() => {
        _index = _rewire('../../src/index');
    });

    it('should implement methods required by the interface', function() {
        expect(_index.args).to.equal(_args);
        expect(_index.http).to.equal(_http);
        expect(_index.data).to.equal(_data);
    });
});
