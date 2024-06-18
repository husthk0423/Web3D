// plugins/glsl-to-js-plugin.js
const fs = require('fs');
const path = require('path');

class GlslToJsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('GlslToJsPlugin', (compilation, callback) => {
      const glslFiles = Object.keys(compilation.assets).filter(file => file.endsWith('.glsl'));

      glslFiles.forEach(glslFile => {
        const source = compilation.assets[glslFile].source();
        const jsContent = `export default \`${source}\`;`;
        const jsFileName = glslFile.replace('.glsl', '.js');
        const outputPath = path.join(compilation.options.output.path, jsFileName);

        // 创建目录（如果不存在）
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, jsContent, 'utf8');
      });

      callback();
    });
  }
}

module.exports = GlslToJsPlugin;
