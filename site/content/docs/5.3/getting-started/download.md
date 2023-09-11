---
layout: docs
title: Download
description: Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Package managers

Pull in Bootstrap's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will **require a [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/bootstrap):

```sh
npm install @lukestr/bootstrap@{{< param "current_version" >}}
```

`const bootstrap = require('bootstrap')` or `import bootstrap from 'bootstrap'` will load all of Bootstrap's plugins onto a `bootstrap` object.
The `bootstrap` module itself exports all of our plugins. You can manually load Bootstrap's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

Bootstrap's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Bootstrap's main [Sass](https://sass-lang.com/) source file
- `style` - path to Bootstrap's non-minified CSS that's been compiled using the default settings (no customization)

{{< callout info >}}
{{< partial "callouts/info-npm-starter.md" >}}
{{< /callout >}}
