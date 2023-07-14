---
sidebar_position: 3
title: Deploy
---

# Deploy Docusaurus to GitHub Pages

:::caution

Ensure that [docusaurus.config.js](../docusaurus.config.js) is correctly configured as outlined in the [Configuration](./config.md#configure) guide.

:::

## GitHub Actions Workflows

Create the following GitHub Actions workflows in `.github/workflows` and push the changes up to the repository:

```yml title=".github/workflows/deploy.yml"
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: .
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

```yml title=".github/workflows/test-deploy.yml"
name: Test Docusaurus Deployment

on:
  pull_request:
    branches:
      - main

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: .
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      - name: Test build website
        run: npm run build
```

## Configure GitHub Repository