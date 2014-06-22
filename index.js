module.exports = function (name, code, signal) {
  if (!name) throw new Error('`name` is required')
  if (!code && !signal) return null

  // Error messages stolen from https://github.com/nathan7/spawn-write-stream/blob/4549bb8bae173a00b4c885ee2a3dc085b5ffe51b/index.js#L40-L42.
  var err = signal
    ? new Error('`' + name + '` killed by signal `' + signal + '`')
    : new Error('`' + name + '` exited with ' + code)

  err.code = code
  err.signal = signal
  err.name = 'ExitError'

  return err
};
