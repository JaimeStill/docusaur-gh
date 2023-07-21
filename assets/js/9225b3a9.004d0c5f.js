"use strict";(self.webpackChunkdocusaur_gh=self.webpackChunkdocusaur_gh||[]).push([[446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Configuration"},i="Docusaurus Configuration",s={unversionedId:"config",id:"config",title:"Configuration",description:"The following sections will describe how to modify the default Docusaurus layout to prepare for a documentation-focused GitHub Pages deployment.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docusaur-gh/config",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration"},sidebar:"docsSidebar",previous:{title:"Home",permalink:"/docusaur-gh/"},next:{title:"Deploy",permalink:"/docusaur-gh/deploy/"}},l={},u=[{value:"Cleanup",id:"cleanup",level:2},{value:"Configure",id:"configure",level:2},{value:"Presets",id:"presets",level:3},{value:"Theme",id:"theme",level:3},{value:"Code Block Languages",id:"code-block-languages",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus-configuration"},"Docusaurus Configuration"),(0,r.kt)("p",null,"The following sections will describe how to modify the default Docusaurus layout to prepare for a ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction#docs-only-mode"},"documentation-focused")," GitHub Pages deployment."),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"This section is intended to remove unnecessary artifacts generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"create-docusaurus@latest"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete  the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," directories.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/index.md")," then delete ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/tutorial-basics")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/tutorial-extras"),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.md")," ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter"},"front matter"),", set ",(0,r.kt)("inlineCode",{parentName:"p"},"slug: /"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the following from ",(0,r.kt)("inlineCode",{parentName:"p"},"static/img"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.png"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All ",(0,r.kt)("inlineCode",{parentName:"p"},"undraw")," images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus-social-card.jpg")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can generate your own social image card using a tool such as the ",(0,r.kt)("a",{parentName:"p",href:"https://og-playground.vercel.app/"},"Vercel OG Image Playground"),".")))))),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"This section describes modifications to ",(0,r.kt)("a",{target:"_blank",href:n(2023).Z},(0,r.kt)("code",null,"docusaurus.config.js")),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Throughout this section, only modified properties are specified.")),(0,r.kt)("p",null,"Set the following to align the documentation with the metadata of your site repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  title: '<docs-title>',\n  tagline: '<docs-tagline>',\n  url: 'https://<gh-org-or-user>.github.io',\n  baseUrl: '/<gh-repo-name>',\n  organizationName: '<gh-org-or-user>',\n  projectName: '<gh-repo-name>',\n  deploymentBranch: '<gh-deploy-branch>',\n  trailingSlash: false,\n}\n")),(0,r.kt)("h3",{id:"presets"},"Presets"),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," plugins to facilitate Docs-only mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"presets: [\n  [\n    ({\n      docs: {\n        routeBasePath: '/',\n      },\n      blog: false\n    })\n  ]\n]\n")),(0,r.kt)("h3",{id:"theme"},"Theme"),(0,r.kt)("p",null,"Adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig")," to align with your docs metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"themeConfig:\n  ({\n    image: 'img/<open-graph-card>',\n    navbar: {\n      title: '<docs-title>',\n      logo: {\n        alt: '<logo-alt>',\n        src: 'img/<logo-file>'\n      },\n      items: [\n        {\n          sidebarId: 'docsSidebar',\n          label: 'Docs'\n        },\n        {\n          href: '<repo-url>'\n        }\n      ]\n    },\n    colorMode: {\n      respectPrefersColorScheme: true\n    }\n  })\n")),(0,r.kt)("p",null,"To facilitate the new ",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig.items.sidebarId")," property, modify ",(0,r.kt)("a",{target:"_blank",href:n(8023).Z},(0,r.kt)("code",null,"sidebars.js")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"const sidebars = {\n  docsSidebar: [{ type: 'autogenerated', dirname: '.' }]\n}\n")),(0,r.kt)("h3",{id:"code-block-languages"},"Code Block Languages"),(0,r.kt)("p",null,"Per ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages"},"the documentation"),", only a subset of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23"},"commonly used languages")," are configured by default. Additional ",(0,r.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism-supported languages")," need to be added to defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"themeConfig:\n  ({\n    prism: {\n      additionalLanguages: ['csharp', 'powershell']\n    }\n  })\n")))}d.isMDXComponent=!0},2023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/docusaurus.config-6b34588f5763ee42173fce47a804744e.js"},8023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/sidebars-2e4b15930e3515bce2e4129dcdd5d1a1.js"}}]);