const { ELEVENTY_ENV } = process.env;

const siteData = {
  author: "David Darnes",
  nav: {
    header: [
      {
        url: "/about/",
        title: "About"
      },
      {
        url: "/submit/",
        title: "Submit"
      },
      {
        url: "/questions/",
        title: "Questions"
      }
    ],
    footer: [
      {
        url: "/terms/",
        title: "Terms"
      },
      {
        url: "/privacy/",
        title: "Privacy"
      }
    ]
  },
  sidebar: [
    {
      title: "Anchor CMS",
      url: "http://anchorcms.com/docs"
    },
    {
      title: "Anchor Resources",
      url: "http://anchorcms.com/resources"
    },
    {
      title: "Anchor Discussion Forum",
      url: "http://forums.anchorcms.com/"
    },
    {
      title: "Anchor CMS on GitHub",
      url: "https://github.com/anchorcms"
    },
    {
      title: "Anchor CMS on Twitter",
      url: "https://twitter.com/anchorcms"
    }
  ]
};

const showcase = {
  url: ELEVENTY_ENV == "dev" ? "http://localhost:8080/showcase" : "https://anchorshowcase.netlify.com",
  title: "Anchor Showcase",
  description: `That's right, sites made with <a href="https://anchorcms.com">Anchor</a>`,
  twitter: "AnchorShowcase",
  collection: "Sites",
  collectionSingular: "Site"
};

const themes = {
  url: ELEVENTY_ENV == "dev" ? "http://localhost:8080/themes" : "https://anchorthemes.netlify.com",
  title: "Anchor Themes",
  description: `Themes built for <a href="https://anchorcms.com">Anchor</a>, obviously`,
  twitter: "_AnchorThemes",
  collection: "Themes",
  collectionSingular: "Theme"
};

module.exports = {
  showcase: {
    ...siteData,
    ...showcase
  },
  themes: {
    ...siteData,
    ...themes
  }
};
