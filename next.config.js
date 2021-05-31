
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['sKHGe55axUzTu99oJbk2c9'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  