const lightCodeTheme=require("prism-react-renderer/themes/github"),darkCodeTheme=require("prism-react-renderer/themes/dracula"),config={title:"Docusaurus for GitHub Pages",tagline:"Setup Docusaurus for GitHub Pages",favicon:"img/favicon.ico",url:"https://jaimestill.github.io",baseUrl:"/docusaur-gh",organizationName:"JaimeStill",projectName:"docusaur-gh",deploymentBranch:"gh-pages",trailingSlash:!1,onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{routeBasePath:"/",sidebarPath:require.resolve("./sidebars.js")},blog:!1,theme:{customCss:require.resolve("./src/css/custom.css")}}]],themeConfig:{image:"img/gh-og-card.png",navbar:{title:"Docusaurus for GitHub Pages",logo:{alt:"Docusaurus Logo",src:"img/logo.svg"},items:[{type:"docSidebar",sidebarId:"docsSidebar",position:"left",label:"Docs"},{href:"https://github.com/JaimeStill/docusaur-gh",label:"GitHub",position:"right"}]},colorMode:{respectPrefersColorScheme:!0},prism:{theme:lightCodeTheme,darkTheme:darkCodeTheme}}};module.exports=config;