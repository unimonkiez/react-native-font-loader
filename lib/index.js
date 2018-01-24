const fileLoader = require('file-loader');
const fontkit = require('fontkit');

module.exports = function jssFontLoader(ttfContent) {
  const { postscriptName } = fontkit.create(ttfContent);
  const { path } = this.query;
  fileLoader.call(
    Object.assign({}, this, {
      query: Object.assign({}, this.query, {
        name: `${path}${path[path.length - 1] === '/' ? '' : '/'}${postscriptName}.ttf`,
        path: undefined,
      }),
    }),
    ttfContent,
  );

  return `
module.exports = ${JSON.stringify(postscriptName)};
`.substr(1); // to remove first empty line
};

module.exports.raw = true;
