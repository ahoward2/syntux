const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
const remarkToc = require("remark-toc");
const remarkSlug = require("remark-slug");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  rehypePlugins: [rehypePrism],
  remarkPlugins: 
  [
    [remarkToc, {heading: 'toc|📝[ -]table[ -]of[ -]contents?'}],
    remarkSlug,
  ],
})({
  pageExtensions: ["mdx", "tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
