# exit-error
Maybe make an error from `ChildProcess`'s `exit` event parameters.

## Installation
```sh
npm install exit-error
```

## Usage
```js
var spawn = require('child_process').spawn
var ExitError = require('exit-error')

function rm(path, next) {
  var rm_ = spawn('rm', ['-rf', path])
  rm_.on('error', next)
  rm_.on('exit', function (code, signal) {
    next(ExitError('rm', code, signal))
  })
}

rm('foo', function (err) {
  if (err) throw err
})
```
