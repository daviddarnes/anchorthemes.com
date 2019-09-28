# anchorthemes.com
⚓️Source repo for Anchor Themes

## Submitting a theme

Create a new pull request with a new `index.md` file using a specific file name and path:

```
/src/themes/YOURTHEMENAME/index.md
```

Use the following template for the contents of the `index.md` file:

``` md
---
title: Theme Name
description: Short description
date: 02-28-1938 # Submission date
tags:
  - "Descriptive tag" # e.g. Minimal, see other themes for reference
links:
  repo: https://github.com/username/reponame
  download: https://themedownload.link
  demo: https://demo.url # Optional
author:
  name: Your Name
  url: https://yourpersonal.site
images:
  - 1.jpg # Screenshots
  - 2.jpg
  - 3.jpg
---

A somewhat brief description of your theme. You can put maybe a paragraph or two in here, list some features too if you like
```

Alongside the new `index.md` file you can add screenshots as `.jpg` files. The dimensions should be `1080` by `840` in pixels. Here's an example of the file structure:

``` txt
/src/themes/yourthemename/
    index.md
    1.jpg
    2.jpg
    3.jpg
```

Here's a handy [link for creating a new theme file](https://github.com/daviddarnes/anchorthemes.com/new/master/src/themes). Please ensure the pull request meets these criteria or else the addition will not get merged in. Happy theming! 🎉

## Installing locally

``` bash
git clone git@github.com:daviddarnes/anchorthemes.com.git
cd anchorthemes.com
npm install
npm run dev
```
