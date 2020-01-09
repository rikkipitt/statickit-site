const slug = require('rehype-slug');
const link = require('rehype-autolink-headings');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug, [link, { behavior: 'wrap' }]]
  }
});
const path = require('path');

module.exports = withMDX(
  withCSS({
    target: 'serverless',
    env: {
      STATICKIT_URL: process.env.STATICKIT_URL,
      FORM_ID: process.env.FORM_ID
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'md'],
    webpack(config, options) {
      // Allow absolute imports of common paths
      // See https://github.com/zeit/next.js/blob/master/examples/with-absolute-imports/next.config.js
      ['components', 'utils', 'data'].forEach(dir => {
        config.resolve.alias[dir] = path.join(__dirname, dir);
      });
      return config;
    }
  })
);
