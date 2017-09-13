import FlowFilter from 'broccoli-flow';
import flowtypePlugin from 'eslint-plugin-flowtype';

export default {
  babelOptions: {
    filterExtensions: ['js'],
    presets: [
      require.resolve('babel-preset-flow-syntax'),
    ],
  },
  eslintOptions: {
    parser: require.resolve('babel-eslint'),
  },
  eslintPlugins: {
    flowtype: flowtypePlugin,
  },
  build(inputTree) {
    return new FlowFilter(inputTree, {
      printErrors: true,
    });
  },
};
