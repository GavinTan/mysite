"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[3870],{78154:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(13274),l=r(1780);const t={slug:"/pxc",title:"Percona-XtraDB-Cluster\u5b89\u88c5",authors:"gavintan",tags:["Percona XtraDB Cluster","pxc","Percona"],description:"Percona XtraDB Cluster\u662f MySQL \u7684\u6570\u636e\u5e93\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\uff0c\u9632\u6b62\u505c\u673a\u548c\u6570\u636e\u4e22\u5931\uff0c\u5e76\u4e3a\u4e0d\u65ad\u589e\u957f\u7684\u73af\u5883\u63d0\u4f9b\u7ebf\u6027\u53ef\u6269\u5c55\u6027\u3002"},c=void 0,a={permalink:"/blog/pxc",editUrl:"https://github.com/gavintan/blog/edit/main/blog/\u6570\u636e\u5e93/pxc\u96c6\u7fa4\u5b89\u88c5.md",source:"@site/blog/\u6570\u636e\u5e93/pxc\u96c6\u7fa4\u5b89\u88c5.md",title:"Percona-XtraDB-Cluster\u5b89\u88c5",description:"Percona XtraDB Cluster\u662f MySQL \u7684\u6570\u636e\u5e93\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\uff0c\u9632\u6b62\u505c\u673a\u548c\u6570\u636e\u4e22\u5931\uff0c\u5e76\u4e3a\u4e0d\u65ad\u589e\u957f\u7684\u73af\u5883\u63d0\u4f9b\u7ebf\u6027\u53ef\u6269\u5c55\u6027\u3002",date:"2024-04-10T03:45:13.000Z",tags:[{label:"Percona XtraDB Cluster",permalink:"/blog/tags/percona-xtra-db-cluster"},{label:"pxc",permalink:"/blog/tags/pxc"},{label:"Percona",permalink:"/blog/tags/percona"}],readingTime:1.6566666666666667,hasTruncateMarker:!1,authors:[{name:"GavinTan",title:"DevOps Engineer",url:"https://github.com/GavinTan",imageURL:"/img/logo.webp",key:"gavintan"}],frontMatter:{slug:"/pxc",title:"Percona-XtraDB-Cluster\u5b89\u88c5",authors:"gavintan",tags:["Percona XtraDB Cluster","pxc","Percona"],description:"Percona XtraDB Cluster\u662f MySQL \u7684\u6570\u636e\u5e93\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u786e\u4fdd\u9ad8\u53ef\u7528\u6027\uff0c\u9632\u6b62\u505c\u673a\u548c\u6570\u636e\u4e22\u5931\uff0c\u5e76\u4e3a\u4e0d\u65ad\u589e\u957f\u7684\u73af\u5883\u63d0\u4f9b\u7ebf\u6027\u53ef\u6269\u5c55\u6027\u3002"},unlisted:!1,prevItem:{title:"ProxySQL\u5b89\u88c5",permalink:"/blog/proxysql"},nextItem:{title:"Wireguard\u5b89\u88c5",permalink:"/blog/wireguard"}},i={authorsImageUrls:[void 0]},d=[{value:"pxc\u96c6\u7fa4\u7279\u70b9",id:"pxc\u96c6\u7fa4\u7279\u70b9",level:2},{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521d\u59cb\u5316\u6570\u636e\u5e93",id:"\u521d\u59cb\u5316\u6570\u636e\u5e93",level:2},{value:"\u542f\u52a8\u6570\u636e\u5e93",id:"\u542f\u52a8\u6570\u636e\u5e93",level:2}];function o(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"pxc\u96c6\u7fa4\u7279\u70b9",children:"pxc\u96c6\u7fa4\u7279\u70b9"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7279\u70b9"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u540c\u6b65\u590d\u5236"}),(0,s.jsx)(n.td,{children:"\u6570\u636e\u540c\u65f6\u5199\u5165\u6240\u6709\u8282\u70b9\uff0c\u6216\u8005\u5373\u4f7f\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u4e5f\u53d1\u751f\u6545\u969c\u65f6\u6839\u672c\u4e0d\u5199\u5165"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u591a\u6e90\u590d\u5236"}),(0,s.jsx)(n.td,{children:"\u4efb\u4f55\u8282\u70b9\u90fd\u53ef\u4ee5\u89e6\u53d1\u6570\u636e\u66f4\u65b0\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u771f\u6b63\u7684\u5e76\u884c\u590d\u5236"}),(0,s.jsx)(n.td,{children:"\u526f\u672c\u4e0a\u7684\u591a\u4e2a\u7ebf\u7a0b\u5728\u884c\u7ea7\u522b\u6267\u884c\u590d\u5236"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u81ea\u52a8\u8282\u70b9\u8c03\u914d"}),(0,s.jsx)(n.td,{children:"\u53ea\u9700\u6dfb\u52a0\u4e00\u4e2a\u8282\u70b9\uff0c\u5b83\u5c31\u4f1a\u81ea\u52a8\u540c\u6b65\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u6570\u636e\u4e00\u81f4\u6027"}),(0,s.jsx)(n.td,{children:"\u4e0d\u518d\u6709\u4e0d\u540c\u6b65\u7684\u8282\u70b9\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PXC \u4e25\u683c\u6a21\u5f0f"}),(0,s.jsx)(n.td,{children:"\u907f\u514d\u4f7f\u7528\u6280\u672f\u9884\u89c8\u529f\u80fd\u548c\u4e0d\u53d7\u652f\u6301\u7684\u529f\u80fd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ProxySQL \u7684\u914d\u7f6e\u811a\u672c"}),(0,s.jsx)(n.td,{children:"Percona XtraDB Cluster\u5305\u542bproxysql-admin\u5de5\u5177\uff0c\u8be5\u5de5\u5177\u80fd\u591f\u81ea\u52a8\u914d\u7f6e\u4f7f\u7528ProxySQL\u7684Percona XtraDB Cluster\u8282\u70b9\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SSL\u52a0\u5bc6\u7684\u81ea\u52a8\u914d\u7f6e"}),(0,s.jsx)(n.td,{children:"Percona XtraDB Cluster\u5305\u542bpxc-encrypt-cluster-traffic\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u542f\u7528SSL\u52a0\u5bc6\u7684\u81ea\u52a8\u914d\u7f6e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u4f18\u5316\u6027\u80fd"}),(0,s.jsx)(n.td,{children:"Percona XtraDB Cluster\u7684\u6027\u80fd\u88ab\u4f18\u5316\uff0c\u4ee5\u9002\u5e94\u4e0d\u65ad\u589e\u957f\u7684\u751f\u4ea7\u8d1f\u8f7d"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u51c6\u5907\u73af\u5883",children:"\u51c6\u5907\u73af\u5883"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yum install -y openssl socat  \\\nprocps-ng chkconfig procps-ng coreutils shadow-utils \\\ngrep libaio libev libcurl perl-DBD-MySQL perl-Digest-MD5 \\\nlibgcc libstdc++ libgcrypt libgpg-error zlib glibc openssl-libs\n\nuseradd -M -s /sbin/nologin mysql\nmkdir -p /data/mysql /var/run/mysqld  /var/log/mysqld\nchown -R mysql. /data/mysql /var/run/mysqld  /var/log/mysqld\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"wget https://downloads.percona.com/downloads/Percona-XtraDB-Cluster-80/Percona-XtraDB-Cluster-8.0.27/binary/tarball/Percona-XtraDB-Cluster_8.0.27-18.1_Linux.x86_64.glibc2.17-minimal.tar.gz\ntar zxf Percona-XtraDB-Cluster_8.0.27-18.1_Linux.x86_64.glibc2.17-minimal.tar.gz\nmkdir -p /usr/local/percona\nmv Percona-XtraDB-Cluster_8.0.27-18.1_Linux.x86_64.glibc2.17-minimal /usr/local/percona/mysql\n\ncp /usr/local/percona/mysql/support-files/mysql.server /etc/init.d/mysqld\nsed -i 's/^basedir=.*/basedir=\\/usr\\/local\\/percona\\/mysql/' /etc/init.d/mysqld\nsed -i 's/^datadir=.*/datadir=\\/data\\/mysql/' /etc/init.d/mysqld\n\ncat <<EOF > /etc/profile.d/mysql.sh\nexport PATH=$PATH:/usr/local/percona/mysql/bin\nEOF\nsource /etc/proflie\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u540c\u8282\u70b9\u9700\u8981\u4fee\u6539",(0,s.jsx)(n.code,{children:"server-id"}),"\u3001",(0,s.jsx)(n.code,{children:"wsrep_node_name"}),"\u3001",(0,s.jsx)(n.code,{children:"wsrep_node_address"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'cat <<EOF > /etc/my.cnf.d/pxc.cnf\n[client]\nsocket=/var/run/mysqld/mysql.sock\n\n[mysqld]\nbasedir=/usr/local/percona/mysql\ndatadir=/data/mysql\n\nsocket=/var/run/mysqld/mysql.sock\npid-file=/var/run/mysqld/mysqld.pid\nlog-error=/var/log/mysqld/mysqld.log\n\nserver-id=14\nuser=mysql\n\nlog-bin\nbinlog_format=ROW\nbinlog_expire_logs_seconds=604800\n\ninnodb_autoinc_lock_mode=2\ndefault_storage_engine=InnoDB\nlog_timestamps=SYSTEM\n\n######## wsrep ###############\nwsrep_cluster_name=pxc-cluster-tt\nwsrep_cluster_address=gcomm://172.16.7.14,172.16.7.15,172.16.7.16\nwsrep_node_name=pxc-node-14\nwsrep_node_address=172.16.7.14\nwsrep_applier_threads=8\nwsrep_log_conflicts\npxc_strict_mode=ENFORCING\nwsrep_sst_method=xtrabackup-v2\nwsrep_provider=/usr/local/percona/mysql/lib/libgalera_smm.so\nwsrep_provider_options="socket.ssl_key=server-key.pem;socket.ssl_cert=server-cert.pem;socket.ssl_ca=ca.pem"\n\n\n[sst]\nencrypt=4\nssl-key=server-key.pem\nssl-ca=ca.pem\nssl-cert=server-cert.pem\nEOF\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u6570\u636e\u5e93",children:"\u521d\u59cb\u5316\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mysqld --initialize\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u542f\u52a8\u6570\u636e\u5e93",children:"\u542f\u52a8\u6570\u636e\u5e93"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u4ece 8.0.31 \u7248\u672c\u5f00\u59cb\uff0cSST \u590d\u5236\u5728 root \u7528\u6237\u4e0b\u505c\u6b62\u5de5\u4f5c\u3002myqld\u4e0d\u80fd\u5728root\u4e0b\u542f\u52a8\uff01"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"su mysql -s /bin/bash -c '/etc/init.d/mysqld start'\n"})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"#\u7b2c\u4e00\u4e2a\u542f\u52a8\u8282\u70b9\u5fc5\u987b\u4f7f\u7528bootstrap-pxc\u65b9\u5f0f\uff0c\u987b\u6ce8\u91cafunctions\u4e0d\u4f7f\u7528systemd\u4e0d\u7136bootstrap-pxc\u53c2\u6570\u65e0\u6548\nsed -i 's/^. \\/etc\\/rc.d\\/init.d\\/functions/#&/' /etc/init.d/mysqld\n/etc/init.d/mysqld bootstrap-pxc\n\n#\u5176\u4ed6\u8282\u70b9\u542f\u52a8\n#\u540c\u6b65\u8bc1\u4e66\uff0c\u5176\u4ed6\u8282\u70b9\u5fc5\u987b\u4f7f\u7528\u7b2c\u4e00\u4e2a\u542f\u52a8\u8282\u70b9\u7684\u8bc1\u4e66\nrsync -aP 172.16.7.14:/data/mysql/*.pem /data/mysql\n/etc/init.d/mysqld start\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1780:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var s=r(79474);const l={},t=s.createContext(l);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);