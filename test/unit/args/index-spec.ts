import { expect, use as _useWithChai } from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_useWithChai(_sinonChai);
_useWithChai(_chaiAsPromised);

import * as _index from '../../../src/args/index.js';
import { ArgError } from '../../../src/args/arg-error.js';
import { SchemaError } from '../../../src/args/schema-error.js';

describe('[args]', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.SchemaError).to.equal(SchemaError);
        expect(_index.ArgError).to.equal(ArgError);
    });
});
