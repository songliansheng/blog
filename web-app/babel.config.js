module.exports = function (api) {
    api.cache(true);
  
    const presets = ["next/babel", "@babel/preset-env",  "@babel/preset-typescript", ["@babel/preset-react",{"runtime": "automatic"}]];
    const plugins = [ ];
  
    return {
      presets,
      plugins
    };
  }