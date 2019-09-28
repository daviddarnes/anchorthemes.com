module.exports = {
  url: process.env.ELEVENTY_ENV === 'dev' ? 'http://localhost:8080' : 'https://anchorthemes.netlify.com',
  title: "Anchor Themes",
  twitter: "_AnchorThemes",
  author: "David Darnes",
  nav: {
    header: [
      {
        url: "/",
        title: "Themes"
      },
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
        url: "http://anchorshowcase.com",
        title: "Anchor Showcase",
        color: "#d13361"
      },
      {
        url: "/terms/",
        title: "Terms"
      },
      {
        url: "/privacy/",
        title: "Privacy"
      },
      {
        url: "https://twitter.com/_AnchorThemes",
        title: "@_AnchorThemes"
      }
    ]
  },
  description: "Themes built for Anchor, obviously",
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
}
