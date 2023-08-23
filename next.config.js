const path = require('path')
const withPreconstruct = require('@preconstruct/next')

/** @type {import('next').NextConfig} */
module.exports = withPreconstruct({
  reactStrictMode: true,
  // output:'export',
  images: {
    loader: 'akamai',
    path:'/',
    unoptimized:true
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  compiler:{
    styledComponents:true
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=3600, must-revalidate',
          }
        ],
      },
    ]
  },
  webpack: (config, {}) => {
    config.externals.push("pino-pretty", "lokijs", "encoding"),
      config.module.rules.push({
          test: /\.(js|jsx|ts|tsx|mjs)$/,
          use: [
              {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          ],
          include:[
            path.resolve(__dirname,"node_modules/@wagmi"),
            path.resolve(__dirname,"node_modules/wagmi"),
            path.resolve(__dirname,"node_modules/@react-spring"),
            path.resolve(__dirname,"node_modules/react-spring"),
            path.resolve(__dirname,"node_modules/@rainbow-me"),
          ]
      }),
      config.resolve.fallback = { fs: false, net: false, tls: false }
      return config
  },
  env:{
    customKey:'my-value' // process.env.customKey
  }
})