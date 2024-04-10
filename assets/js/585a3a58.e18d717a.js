"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[2617],{1453:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var t=s(13274),l=s(1780);const a={},d="\u96c6\u7fa4\u5347\u7ea7",r={id:"k8s/\u96c6\u7fa4\u5347\u7ea7",title:"\u96c6\u7fa4\u5347\u7ea7",description:"https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",source:"@site/docs/k8s/\u96c6\u7fa4\u5347\u7ea7.md",sourceDirName:"k8s",slug:"/k8s/\u96c6\u7fa4\u5347\u7ea7",permalink:"/docs/k8s/\u96c6\u7fa4\u5347\u7ea7",draft:!1,unlisted:!1,editUrl:"https://github.com/gavintan/notes/docs/k8s/\u96c6\u7fa4\u5347\u7ea7.md",tags:[],version:"current",frontMatter:{},sidebar:"doc",previous:{title:"\u5b58\u50a8\u7c7b",permalink:"/docs/k8s/\u5b58\u50a8\u7c7b"},next:{title:"monodb",permalink:"/docs/\u6570\u636e\u5e93/monodb"}},c={},u=[{value:"\u67e5\u770b\u53ef\u5347\u7ea7\u7684\u7248\u672c",id:"\u67e5\u770b\u53ef\u5347\u7ea7\u7684\u7248\u672c",level:2},{value:"\u5347\u7ea7kubelet\u3001 kubectl\u3001kubeadm",id:"\u5347\u7ea7kubelet-kubectlkubeadm",level:2},{value:"\u5347\u7ea7\u63a7\u5236\u5e73\u9762\u8282\u70b9",id:"\u5347\u7ea7\u63a7\u5236\u5e73\u9762\u8282\u70b9",level:2},{value:"\u5347\u7ea7\u5de5\u4f5c\u8282\u70b9",id:"\u5347\u7ea7\u5de5\u4f5c\u8282\u70b9",level:2}];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u96c6\u7fa4\u5347\u7ea7",children:"\u96c6\u7fa4\u5347\u7ea7"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",children:"https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"})}),"\n",(0,t.jsx)(n.h2,{id:"\u67e5\u770b\u53ef\u5347\u7ea7\u7684\u7248\u672c",children:"\u67e5\u770b\u53ef\u5347\u7ea7\u7684\u7248\u672c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubeadm upgrade plan\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5347\u7ea7kubelet-kubectlkubeadm",children:"\u5347\u7ea7kubelet\u3001 kubectl\u3001kubeadm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#\u6240\u6709\u8282\u70b9\u6267\u884c\nyum install kubeadm-1.21.11 kubectl-1.21.11 kubelet-1.21.11\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5347\u7ea7\u63a7\u5236\u5e73\u9762\u8282\u70b9",children:"\u5347\u7ea7\u63a7\u5236\u5e73\u9762\u8282\u70b9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n#\u591a\u53f0\u63a7\u5236\u5e73\u9762\u8282\u70b9\u53ea\u9700\u5728\u5176\u4e2d\u4e00\u53f0\u6267\u884c\uff0c\u5176\u4ed6\u63a7\u5236\u5e73\u9762\u8282\u70b9\u6267\u884c\uff08kubeadm upgrade node\uff09\nkubeadm upgrade apply v1.21.11\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#\u91cd\u542f kubelet\nsystemctl daemon-reload\nsystemctl restart kubelet\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5347\u7ea7\u5de5\u4f5c\u8282\u70b9",children:"\u5347\u7ea7\u5de5\u4f5c\u8282\u70b9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubeadm upgrade node\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"#\u91cd\u542f kubelet\nsystemctl daemon-reload\nsystemctl restart kubelet\n"})})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(79474);const l={},a=t.createContext(l);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);