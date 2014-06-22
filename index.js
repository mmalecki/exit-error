module.exports = function (name, code, signal) {
  if (!name) throw new Error('`name` is required')
  if (!code && !signal) return null

  var err = signal
    ? new Error('`' + name + '` killed by signal `' + signal + '`')
    : new Error('`' + name + '` exited with ' + code)

  err.code = code
  err.signal = signal
  err.name = 'ExitError'

  return err
};
