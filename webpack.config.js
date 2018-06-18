
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')
const { readdirSync } = require('fs')
const PrepackPlugin = require('prepack-webpack-plugin').default

const PROJECT_ROOT = __dirname
const SOURCE_FOLDER = join(PROJECT_ROOT, 'src')
const BUILD_FOLDER = join(PROJECT_ROOT, 'build')
const FILES = readdirSync(SOURCE_FOLDER)

/**
 * @param {string} file
 * @returns {string}
 */
const withJSExtension = file => file.replace(/\.[a-zA-Z0-9]*$/, '.js')

/**
 * @param {string} file
 * @returns {import("webpack").Configuration}
 */
const createConfig = file => ({
  mode: 'none',
  entry: join(SOURCE_FOLDER, file),
  output: {
    path: BUILD_FOLDER,
    filename: withJSExtension(file)
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [new PrepackPlugin({})]
})

module.exports = FILES.map(createConfig)
