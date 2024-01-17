import { expect, use as _useWithChai } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_useWithChai(_sinonChai);
_useWithChai(_chaiAsPromised);

import { ArgError, SchemaError } from '../../src/args/index.js';
import {
    BadRequestError,
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
} from '../../src/http/index.js';
import {
    ConcurrencyControlError,
    ConflictError,
    DuplicateRecordError,
} from '../../src/data/index.js';
import * as _index from '../../src/index.js';

describe('_index', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.ArgError).to.equal(ArgError);
        expect(_index.SchemaError).to.equal(SchemaError);

        expect(_index.DuplicateRecordError).to.equal(DuplicateRecordError);
        expect(_index.ConcurrencyControlError).to.equal(
            ConcurrencyControlError,
        );
        expect(_index.ConflictError).to.equal(ConflictError);

        expect(_index.BadRequestError).to.equal(BadRequestError);
        expect(_index.NotFoundError).to.equal(NotFoundError);
        expect(_index.UnauthorizedError).to.equal(UnauthorizedError);
        expect(_index.ForbiddenError).to.equal(ForbiddenError);
    });
});
