---
title: "Submit"
layout: "layouts/anchorshowcase/page"
---

## Adding your site to Anchor Showcase

Create a new pull request to [our open source Anchor Themes & Showcase site repo](https://github.com/daviddarnes/anchor-themes-showcase) with a new `index.md` file using a specific file name and path:

```
/src/anchorshowcase/sites/YOURSITENAME/index.md
```

Use the following template for the contents of the `index.md` file:

``` md
---
title: Site Name
description: Short description
date: 02-28-1938 # Submission date
tags:
  - "Descriptive tag" # e.g. Minimal, see other sites for reference
links:
  url: https://site.url
author:
  name: Your Name
  url: https://yourpersonal.site
images:
  - 1.jpg # Screenshots
  - 2.jpg
  - 3.jpg
---

A somewhat brief description of your site. You can put maybe a paragraph or two in here, list some features too if you like.
```

Alongside the new `index.md` file you can add screenshots as `.jpg` files. The dimensions should be `1080` by `840` in pixels. Here's an example of the file structure:

``` txt
/src/anchorshowcase/sites/yoursitename/
    index.md
    1.jpg
    2.jpg
    3.jpg
```

Here's a handy [link for creating a new site file](https://github.com/daviddarnes/anchor-themes-showcase/new/master/src/anchorshowcase/sites). Please ensure the pull request meets these criteria or else the addition will not get merged in. Happy building! 🎉
