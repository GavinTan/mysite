"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[3761],{42945:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(13274),r=s(79779);const i={},a=void 0,o={id:"k8s/Ingress",title:"Ingress",description:"\u5b89\u88c5Ingress-nginx\u63a7\u5236\u5668",source:"@site/docs/k8s/Ingress.md",sourceDirName:"k8s",slug:"/k8s/Ingress",permalink:"/docs/k8s/Ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/gavintan/notes/docs/k8s/Ingress.md",tags:[],version:"current",frontMatter:{},sidebar:"doc",previous:{title:"\u7f51\u7edc\u4ea4\u6362\u673a",permalink:"/docs/\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a"},next:{title:"LoadBalancer",permalink:"/docs/k8s/LoadBalancer"}},c={},l=[{value:"\u5b89\u88c5Ingress-nginx\u63a7\u5236\u5668",id:"\u5b89\u88c5ingress-nginx\u63a7\u5236\u5668",level:2},{value:"\u6dfb\u52a0Ingress",id:"\u6dfb\u52a0ingress",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u5b89\u88c5ingress-nginx\u63a7\u5236\u5668",children:"\u5b89\u88c5Ingress-nginx\u63a7\u5236\u5668"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/baremetal/deploy.yaml\n\n#\u8bbe\u7f6e\u9ed8\u8ba4ingress\u7c7b\nkubectl patch ingressclass nginx -p \'{"metadata": {"annotations":{"ingressclass.kubernetes.io/is-default-class":"true"}}}\'\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u6dfb\u52a0ingress",children:"\u6dfb\u52a0Ingress"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",metastring:"title=zabbix.yml",children:"kind: Ingress\napiVersion: networking.k8s.io/v1\nmetadata:\n  namespace: ops\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: zabbix.172.16.7.14.nip.io\n      http:\n        paths:\n          - path: /\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: zabbix-web\n                port:\n                  number: 8080\n"})}),"\n",(0,t.jsx)(e.p,{children:"ingress-nginx path\u88ab\u5e26\u8fc7 ingress\u914d\u7f6e\u6dfb\u52a0\u4e0b\u9762\u914d\u7f6e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\n"})})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},79779:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>o});var t=s(79474);const r={},i=t.createContext(r);function a(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);