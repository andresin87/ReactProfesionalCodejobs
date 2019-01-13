import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  const plugins = [
    new ExtractTextPlugin({
      filename: '../../public/css/style.css',
    }),
  ];

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementplugin(),
      new webpack.NotEmitOnErrorsplugin(),
    );
  }

  return plugins;
};
