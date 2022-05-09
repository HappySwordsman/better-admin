const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // 垫片使用
      corejs: 2, // 配置为2时，改为使用@babel/runtime-corejs2
    },
  ],
];

const plugins = [];
module.exports = {
  presets,
  plugins,
};
