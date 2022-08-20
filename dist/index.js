
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdkv3.cjs.production.min.js')
} else {
  module.exports = require('./sdkv3.cjs.development.js')
}
