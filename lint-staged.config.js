module.exports = {
  // this will check Typescript files
  '**/*.ts': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and
  // JavaScript files
  '**/*.(ts|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
};
