import _chai, {expect} from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import * as _index from '../../../src/args/index';
import ArgError from '../../../src/args/arg-error';
import SchemaError from '../../../src/args/schema-error';

describe('_args', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.SchemaError).to.equal(SchemaError);
        expect(_index.ArgError).to.equal(ArgError);
    });
});
