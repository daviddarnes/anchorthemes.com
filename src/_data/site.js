const { ELEVENTY_ENV } = process.env;

const defaultSiteData = {
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

const anchorShowcaseURL = ELEVENTY_ENV == "dev" ? "http://localhost:8080/anchorshowcase" : "https://anchorshowcase.netlify.com";

const anchorShowcaseData = {
  url: anchorShowcaseURL,
  title: "Anchor Showcase",
  description: `That's right, sites made with Anchor`,
  twitter: "AnchorShowcase",
  collection: "Sites",
  collectionSingular: "Site",
  nav: {
    header: defaultSiteData.nav.header.map(({ title, url }) => {
      return {
        url: anchorShowcaseURL + url,
        title: title
      }
    }),
    footer: [
      {
        title: "Anchor Themes",
        url: "https://anchorthemes.com",
        color: "#e36500"
      },
      ...defaultSiteData.nav.footer.map(({ title, url }) => {
        return {
          url: anchorShowcaseURL + url,
          title: title
        }
      })
    ]
  }
};

const anchorThemesURL = ELEVENTY_ENV == "dev" ? "http://localhost:8080/anchorthemes" : "https://anchorthemes.netlify.com";

const anchorThemesData = {
  url: anchorThemesURL,
  title: "Anchor Themes",
  description: `Themes built for Anchor, obviously`,
  twitter: "_AnchorThemes",
  collection: "Themes",
  collectionSingular: "Theme",
  nav: {
    header: defaultSiteData.nav.header.map(({ title, url }) => {
      return {
        url: anchorThemesURL + url,
        title: title
      }
    }),
    footer: [
      {
        title: "Anchor Showcase",
        url: "https://anchorshowcase.com",
        color: "#e11d82"
      },
      ...defaultSiteData.nav.footer.map(({ title, url }) => {
        return {
          url: anchorThemesURL + url,
          title: title
        }
      })
    ]
  }
};

module.exports = {
  anchorshowcase: {
    ...defaultSiteData,
    ...anchorShowcaseData
  },
  anchorthemes: {
    ...defaultSiteData,
    ...anchorThemesData
  }
};
