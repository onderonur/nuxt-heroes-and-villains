// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs/promises');

async function prepareGhPages() {
  // eslint-disable-next-line no-console
  console.log('GH Pages preparation is started.');
  await fs.copyFile('./dist/index.html', './dist/404.html');
  // eslint-disable-next-line no-console
  console.log('GH Pages preparation is finished.');
}

prepareGhPages();

module.exports = prepareGhPages;
