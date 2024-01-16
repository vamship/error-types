import _chai, {expect} from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import * as _index from '../../../src/http/index.js';
import * as NotFoundError from '../../../src/http/not-found-error.js';
import * as BadRequestError from '../../../src/http/bad-request-error.js';
import * as UnauthorizedError from '../../../src/http/unauthorized-error.js';
import * as ForbiddenError from '../../../src/http/forbidden-error.js';

describe('_http', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.BadRequestError).to.equal(BadRequestError);
        expect(_index.NotFoundError).to.equal(NotFoundError);
        expect(_index.UnauthorizedError).to.equal(UnauthorizedError);
        expect(_index.ForbiddenError).to.equal(ForbiddenError);
    });
});
