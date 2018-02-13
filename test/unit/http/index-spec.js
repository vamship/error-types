'use strict';

const _chai = require('chai');
_chai.use(require('sinon-chai'));
_chai.use(require('chai-as-promised'));
const expect = _chai.expect;
const _rewire = require('rewire');

let _index = null;

const NotFoundError = require('../../../src/http/not-found-error');
const BadRequestError = require('../../../src/http/bad-request-error');
const UnauthorizedError = require('../../../src/http/unauthorized-error');

describe('_http', function() {
    beforeEach(() => {
        _index = _rewire('../../../src/http/index');
    });

    it('should implement methods required by the interface', function() {
        expect(_index.BadRequestError).to.equal(BadRequestError);
        expect(_index.NotFoundError).to.equal(NotFoundError);
        expect(_index.UnauthorizedError).to.equal(UnauthorizedError);
    });
});
