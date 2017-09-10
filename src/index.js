import flowPreset from 'babel-preset-flow';
import FlowFilter from 'broccoli-flow';
import flowtypePlugin from 'eslint-plugin-flowtype';

export default {
  babelOptions: {
    filterExtensions: ['js'],
    presets: [
      flowPreset,
    ],
  },
  eslintOptions: {
    // TODO: find a better way to set parser
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
