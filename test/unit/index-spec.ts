import _chai, {expect} from 'chai';
import _sinonChai from 'sinon-chai';
import _chaiAsPromised from 'chai-as-promised';
import 'mocha';

_chai.use(_sinonChai);
_chai.use(_chaiAsPromised);

import * as _args from '../../src/args/index.js';
import * as _http from '../../src/http/index.js';
import * as _data from '../../src/data/index.js';
import * as _index from '../../src/index.js';

describe('_index', function () {
    it('should implement methods required by the interface', function () {
        expect(_index.args).to.equal(_args);
        expect(_index.http).to.equal(_http);
        expect(_index.data).to.equal(_data);
    });
});
