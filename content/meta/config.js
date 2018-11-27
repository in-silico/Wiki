const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Insilico Wiki - a wiki starter for GatsbyJS", // <title>
  shortSiteTitle: "Insilico Wiki", // <title> ending for posts and pages
  siteDescription: "Insilico Wiki - a wiki starter for GatsbyJS.",
  siteUrl: "https://in-silico.github.io/wiki",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Insilico",
  authorTwitterAccount: "in_silicoUTP",
  // info
  infoTitle: "Insilico UTP",
  infoTitleNote: "Insilico Wiki",
  // manifest.json
  manifestName: "Insilico Wiki - a wiki starter for GatsbyJS",
  manifestShortName: "InsilicoWiki", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "in_silico@googlegroups.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/in-silico" },
    { name: "twitter", url: "https://twitter.com/in_silicoUTP" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
