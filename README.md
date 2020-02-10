# anchorthemes.com
⚓️ Source repo for Anchor Themes and Anchor Showcase

## Submitting a theme or site

Create a new pull request with a new `index.md` file using a specific file name and path:

```
/src/submissions/your-theme-or-site-name/index.md
```

Use the following template for the contents of the `index.md` file:

``` md
---
title: Name
description: Short description
date: 17-04-2018 # Submission date
tags:
  - minimal # A single descriptive tag
  - showcase # Add this tag if your submission is a site
links:
  repo: https://github.com/username/reponame # Optional
  download: https://themedownload.link # Optional
  url: https://example.com # Link to theme demo or site
author:
  name: Your Name
  url: https://yourpersonal.site
images:
  - 1.jpg # Screenshots
  - 2.jpg
  - 3.jpg
---

A somewhat brief description of your theme or site. You can put maybe a paragraph or two in here, list some features too if you like
```

Alongside the new `index.md` file you can add screenshots as `.jpg` files. The dimensions should be `1080` by `840` in pixels. Here's an example of the file structure:

``` txt
/src/submissions/your-theme-or-site-name/
    index.md
    1.jpg
    2.jpg
    3.jpg
```

Here's a handy [link for creating a new theme file](https://github.com/daviddarnes/anchorthemes.com/new/master/src/submissions/your-theme-or-site-name). Please ensure the pull request meets these criteria or else the addition will not get merged in. Happy theming! 🎉

## Installing locally

``` bash
git clone git@github.com:daviddarnes/anchorthemes.com.git
cd anchorthemes.com
npm install
npm run dev
```
