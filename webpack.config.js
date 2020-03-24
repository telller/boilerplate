const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const alias = {
  'react-dom': '@hot-loader/react-dom',
  'components': path.resolve('./src/components'),
  'services': path.resolve('./src/services'),
  'helpers': path.resolve('./src/helpers'),
  'store': path.resolve('./src/store'),
  'root': path.resolve('../'),
}

const getConfigVars = stage => {
  const configVars = {}
  try {
    const defaultConfig = require('./config/default.json')
    Object.assign(configVars, defaultConfig)
  } catch (err) {
    console.error('[config]', err)
  }

  if (stage) {
    try {
      const stageConfig = require('./config/' + stage + '.json')
      Object.assign(configVars, stageConfig)
    } catch (err) {
      console.error('[config]', err)
    }
  }

  const env = {}
  Object.keys(configVars).forEach(key => {
    env[key] = JSON.stringify(configVars[key])
  })

  return env
}

module.exports = env => {
  const STAGE = env && env.STAGE
  return ({
    entry: ['babel-polyfill', './src/app.jsx'],
    output: {
      path: path.resolve(__dirname, './'),
      filename: 'dist/bundle.js'
    },
    devtool: STAGE === 'prod' ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx?)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['env', {'modules': false}], 'stage-0', 'react']
              }
            }
          ]
        },
        {
          test: /\.styl$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'stylus-loader']
          }))
        },
        {
          test: /\.css/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          }))
        },
        {
          test: /\.(img|png|svg)$/,
          use: 'url-loader'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      stats: {
        version: false,
        modules: false,
        assets: false,
        hash: false
      },
      port: '3000'
    },
    plugins: [
      new ExtractTextPlugin('dist/bundle.css'),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({ 'process.env': getConfigVars(STAGE) })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: alias
    }
  })
}
