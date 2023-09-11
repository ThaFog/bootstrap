/**
 * Just copying _site dir's content to docs dir. This way previous versions' docs won't be removed while building
 */

const path = require('node:path')
const fs = require('node:fs')

fs.cpSync(path.resolve('_site'), path.resolve('docs'), { recursive: true })
