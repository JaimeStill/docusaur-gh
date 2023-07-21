---
sidebar_position: 2
title: Configuration
---

# Docusaurus Configuration

The following sections will describe how to modify the default Docusaurus layout to prepare for a [documentation-focused](https://docusaurus.io/docs/docs-introduction#docs-only-mode) GitHub Pages deployment.

## Cleanup

This section is intended to remove unnecessary artifacts generated by `create-docusaurus@latest`.

1. Delete  the `src/pages`, `src/components`, and `blog` directories.

2. Rename `docs/intro.md` to `docs/index.md` then delete `docs/tutorial-basics` and `docs/tutorial-extras`. In the `index.md` [front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter), set `slug: /`.

3. Delete the following from `static/img`:
    * `docusaurus.png`
    * All `undraw` images
    * `docusaurus-social-card.jpg`

      :::tip
      
      You can generate your own social image card using a tool such as the [Vercel OG Image Playground](https://og-playground.vercel.app/).

      :::

## Configure

This section describes modifications to [`docusaurus.config.js`](../docusaurus.config.js).

:::info

Throughout this section, only modified properties are specified.

:::

Set the following to align the documentation with the metadata of your site repository:

```js title="docusaurus.config.js"
const config = {
  title: '<docs-title>',
  tagline: '<docs-tagline>',
  url: 'https://<gh-org-or-user>.github.io',
  baseUrl: '/<gh-repo-name>',
  organizationName: '<gh-org-or-user>',
  projectName: '<gh-repo-name>',
  deploymentBranch: '<gh-deploy-branch>',
  trailingSlash: false,
}
```

### Presets

Modify the `docs` and `blog` plugins to facilitate Docs-only mode:

```js title="docusaurus.config.js"
presets: [
  [
    ({
      docs: {
        routeBasePath: '/',
      },
      blog: false
    })
  ]
]
```

### Theme

Adjust `themeConfig` to align with your docs metadata:

```js title="docusaurus.config.js"
themeConfig:
  ({
    image: 'img/<open-graph-card>',
    navbar: {
      title: '<docs-title>',
      logo: {
        alt: '<logo-alt>',
        src: 'img/<logo-file>'
      },
      items: [
        {
          sidebarId: 'docsSidebar',
          label: 'Docs'
        },
        {
          href: '<repo-url>'
        }
      ]
    },
    colorMode: {
      respectPrefersColorScheme: true
    }
  })
```

To facilitate the new `themeConfig.items.sidebarId` property, modify [`sidebars.js`](../sidebars.js):

```js title="sidebars.js"
const sidebars = {
  docsSidebar: [{ type: 'autogenerated', dirname: '.' }]
}
```

### Code Block Languages

Per [the documentation](https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages), only a subset of [commonly used languages](https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23) are configured by default. Additional [Prism-supported languages](https://prismjs.com/#supported-languages) need to be added to defined:

```js title="docusaurus.config.js"
themeConfig:
  ({
    prism: {
      additionalLanguages: ['csharp', 'powershell']
    }
  })
```