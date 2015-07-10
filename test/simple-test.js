var assert = require('assert')
var ExitError = require('../')

// no error
assert.equal(ExitError('rm', 0, undefined), null)

// code
var err = ExitError('rm', 1, undefined)
assert.equal(err.message, '`rm` exited with 1')
assert.equal(err.code, 1)
assert.equal(err.signal, undefined)
assert.equal(err.name, 'ExitError')

// signal
var err = ExitError('rm', undefined, 'SIGINT')
assert.equal(err.message, '`rm` killed by signal `SIGINT`')
assert.equal(err.code, undefined)
assert.equal(err.signal, 'SIGINT')
assert.equal(err.name, 'ExitError')
