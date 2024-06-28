const path = require('path');

class GlslToJsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('GlslToJsPlugin', (compilation, callback) => {
      const glslFiles = Object.keys(compilation.assets).filter(file => file.endsWith('.glsl'));

      glslFiles.forEach(glslFile => {
        const source = compilation.assets[glslFile].source();
        const jsContent = `export default \`${source}\`;`;
        const jsFileName = glslFile.replace('.glsl', '.js');

        // 添加文件到 Webpack 的输出
        compilation.assets[jsFileName] = {
          source: () => jsContent,
          size: () => jsContent.length,
        };
      });

      callback();
    });
  }
}

module.exports = GlslToJsPlugin;
