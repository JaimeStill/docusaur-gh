"use strict";(self.webpackChunkdocusaur_gh=self.webpackChunkdocusaur_gh||[]).push([[681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Deploy"},a="Deploy Docusaurus to GitHub Pages",s={unversionedId:"deploy/deploy",id:"deploy/deploy",title:"Deploy",description:"Ensure that docusaurus.config.js is correctly configured as outlined in the Configuration guide.",source:"@site/docs/deploy/deploy.md",sourceDirName:"deploy",slug:"/deploy/",permalink:"/docusaur-gh/deploy/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Deploy"},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docusaur-gh/config"}},p={},c=[{value:"Configure Actions Permissions",id:"configure-actions-permissions",level:2},{value:"GitHub Actions Workflow",id:"github-actions-workflow",level:2},{value:"Configure GitHub Pages",id:"configure-github-pages",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-docusaurus-to-github-pages"},"Deploy Docusaurus to GitHub Pages"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that ",(0,r.kt)("a",{parentName:"p",href:"../docusaurus.config.js"},"docusaurus.config.js")," is correctly configured as outlined in the ",(0,r.kt)("a",{parentName:"p",href:"./config#configure"},"Configuration")," guide.")),(0,r.kt)("h2",{id:"configure-actions-permissions"},"Configure Actions Permissions"),(0,r.kt)("p",null,"In the corresponding GitHub repository, the ",(0,r.kt)("inlineCode",{parentName:"p"},"github-actions[bot]")," user will need the appropriate ",(0,r.kt)("strong",{parentName:"p"},"Actions")," permissions. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<org-or-user>/<repo>/settings/actions"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Workflow permissions")," section, check ",(0,r.kt)("em",{parentName:"p"},"Read and write permissions")," and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"actions-permissions",src:n(3807).Z,width:"790",height:"319"})))),(0,r.kt)("h2",{id:"github-actions-workflow"},"GitHub Actions Workflow"),(0,r.kt)("p",null,"Create the following GitHub Actions workflow in ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy-docs.yml"',title:'".github/workflows/deploy-docs.yml"'},"name: Deploy Docusaurus to GitHub Pages\n\non:\n  push:\n    paths-ignore:\n      - 'README.md'\n    branches:\n      - main\n\ndefaults:\n  run:    \n    # In a monorepo with embedded docs, \n    # point to the docusaurus root\n    # i.e. - docs\n    working-directory: .\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: npm\n          # In a monorepo with embedded documentation, the path\n          # to package-lock.json explicitly be specified:\n          # cache-dependency-path: docs/package-lock.json\n\n      - name: Install dependencies\n        run: npm ci\n      - name: Build website\n        run: npm run build\n\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # In a monorepo with embedded documentation,\n          # this must point to the path of build from\n          # the repo root, regardless of whether or not\n          # a default working directory has been set.\n          # i.e. - publish_dir: docs/build\n          publish_dir: build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n")),(0,r.kt)("p",null,"Push the changes up to the remote repository, and verify that the action runs successfully at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<org-or-user>/<repo>/actions"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workflow-runs",src:n(7703).Z,width:"1017",height:"377"})),(0,r.kt)("h2",{id:"configure-github-pages"},"Configure GitHub Pages"),(0,r.kt)("p",null,"Once the workflow has successfully run, the repository needs to be configured to enable GitHub Pages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<org-or-user>/<repo>/settings/pages"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("strong",{parentName:"p"},"Source")," to ",(0,r.kt)("em",{parentName:"p"},"Deploy from a branch"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("strong",{parentName:"p"},"Branch")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"gh-pages")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"/(root)")," and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"pages-config",src:n(9043).Z,width:"555",height:"244"})))),(0,r.kt)("p",null,"You should see the following in the GitHub Pages settings once the docs are deployed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pages-deployed",src:n(385).Z,width:"804",height:"186"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Visit Site")," to see the hosted documentation:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hosted-docs",src:n(5667).Z,width:"1342",height:"893"})))}d.isMDXComponent=!0},3807:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/actions-permissions-f60bc5f220fa3b7d3b520baa7b7a9c7f.png"},5667:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hosted-docs-af6577fb445b03790a772bd6bc01b19e.png"},9043:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pages-config-f913951351152020ca46c75e34bb4c7d.png"},385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pages-deployed-38f45d2215358f8b88a0552b248c6d9b.png"},7703:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow-runs-05df9b0a6e9cd266bc5ec6f17dbe015d.png"}}]);