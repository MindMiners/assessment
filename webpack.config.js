module.exports = {
  entry: './src/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js',
  },
  devServer: { 
    inline: true, 
    contentBase: './dist', 
    port: 3000, 
    proxy: { "/api/**": { target: 'http://ec2-18-220-207-131.us-east-2.compute.amazonaws.com:3000', secure: false }  }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
