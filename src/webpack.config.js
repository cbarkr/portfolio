module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|PNG|svg|jpg|gif|pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ],
    },
  };