import { expect, use as _useWithChai } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_useWithChai(_sinonChai);
_useWithChai(_chaiAsPromised);

import * as _index from '../../../src/http/index.js';
import { NotFoundError } from '../../../src/http/not-found-error.js';
import { BadRequestError } from '../../../src/http/bad-request-error.js';
import { UnauthorizedError } from '../../../src/http/unauthorized-error.js';
import { ForbiddenError } from '../../../src/http/forbidden-error.js';

describe('[http]', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.BadRequestError).to.equal(BadRequestError);
        expect(_index.NotFoundError).to.equal(NotFoundError);
        expect(_index.UnauthorizedError).to.equal(UnauthorizedError);
        expect(_index.ForbiddenError).to.equal(ForbiddenError);
    });
});
