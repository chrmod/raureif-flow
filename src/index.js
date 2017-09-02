import flowPreset from 'babel-preset-flow';
import eslintOptions from 'eslint-config-airbnb-flow/eslintrc.json';

export default {
  babelOptions: {
    filterExtensions: ['js'],
    presets: [
      flowPreset,
    ],
  },
  eslintOptions,
};
