"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[8660],{60876:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=n(11527),r=n(7502);const i={slug:"/proxysql",title:"ProxySQL\u5b89\u88c5",authors:"gavintan",tags:["proxysql"],description:"ProxySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u6027\u3001\u6570\u636e\u5e93\u534f\u8bae\u611f\u77e5\u7684 MySQL \u4ee3\u7406\u3002",image:"https://proxysql.com/wp-content/uploads/2020/04/ProxySQL-Text-and-Logo-Glow.png"},t=void 0,a={permalink:"/blog/proxysql",editUrl:"https://github.com/gavintan/blog/edit/main/blog/\u6570\u636e\u5e93/proxysql\u5b89\u88c5.md",source:"@site/blog/\u6570\u636e\u5e93/proxysql\u5b89\u88c5.md",title:"ProxySQL\u5b89\u88c5",description:"ProxySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u6027\u3001\u6570\u636e\u5e93\u534f\u8bae\u611f\u77e5\u7684 MySQL \u4ee3\u7406\u3002",date:"2024-02-28T02:38:34.000Z",formattedDate:"2024\u5e742\u670828\u65e5",tags:[{label:"proxysql",permalink:"/blog/tags/proxysql"}],readingTime:5.6066666666666665,hasTruncateMarker:!1,authors:[{name:"GavinTan",title:"DevOps Engineer",url:"https://github.com/GavinTan",imageURL:"/img/logo.webp",key:"gavintan"}],frontMatter:{slug:"/proxysql",title:"ProxySQL\u5b89\u88c5",authors:"gavintan",tags:["proxysql"],description:"ProxySQL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u6027\u3001\u6570\u636e\u5e93\u534f\u8bae\u611f\u77e5\u7684 MySQL \u4ee3\u7406\u3002",image:"https://proxysql.com/wp-content/uploads/2020/04/ProxySQL-Text-and-Logo-Glow.png"},unlisted:!1,prevItem:{title:"snort3\u5b89\u88c5",permalink:"/blog/snort3"},nextItem:{title:"Percona-XtraDB-Cluster\u5b89\u88c5",permalink:"/blog/pxc"}},d={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6dfb\u52a0mysql\u96c6\u7fa4\u8282\u70b9",id:"\u6dfb\u52a0mysql\u96c6\u7fa4\u8282\u70b9",level:2},{value:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u767b\u5f55\u7528\u6237",id:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u767b\u5f55\u7528\u6237",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",level:2}];function o(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-shell",children:"cat <<EOF | tee /etc/yum.repos.d/proxysql.repo\n[proxysql_repo]\nname= ProxySQL YUM repository\nbaseurl=https://repo.proxysql.com/ProxySQL/proxysql-2.1.x/centos/\\$releasever\ngpgcheck=1\ngpgkey=https://repo.proxysql.com/ProxySQL/repo_pub_key\nEOF\n\nyum install proxysql -y\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u6dfb\u52a0mysql\u96c6\u7fa4\u8282\u70b9",children:"\u6dfb\u52a0mysql\u96c6\u7fa4\u8282\u70b9"}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsx)(s.p,{children:"\u540c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b58\u5728\u591a\u4e2ahostgroup\u91cc"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"mysql -u admin -padmin -h 127.0.0.1 -P 6032\n\nINSERT INTO mysql_servers(hostgroup_id, hostname, port, use_ssl) VALUES (0,'192.168.70.71',3306,1);\nINSERT INTO mysql_servers(hostgroup_id, hostname, port, use_ssl) VALUES (0,'192.168.70.72',3306,1);\nINSERT INTO mysql_servers(hostgroup_id, hostname, port, use_ssl) VALUES (0,'192.168.70.73',3306,1);\n\n\n# \u4fdd\u5b58\u914d\u7f6e\nLOAD MYSQL SERVERS TO RUNTIME;\nSAVE MYSQL SERVERS TO DISK;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM mysql_servers;\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u767b\u5f55\u7528\u6237",children:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u767b\u5f55\u7528\u6237"}),"\n",(0,l.jsx)(s.admonition,{type:"warning",children:(0,l.jsx)(s.p,{children:"\u7528\u6237\u5fc5\u987b\u5728mysql\u8282\u70b9\u4e2d\u5b58\u5728\u8d26\u53f7\u5bc6\u7801\u4e00\u6837\uff0c\u76ee\u524dproxysql\u53ea\u652f\u6301mysql_native_password\u5bc6\u7801\u63d2\u4ef6\uff0c\u5728mysql\u8282\u70b9\u6dfb\u52a0\u7528\u6237\u65f6\u5019\u5fc5\u987b\u6307\u5b9a\u63d2\u4ef6\u4e3amysql_native_password\u3002"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"# mysql\u8282\u70b9\u4e2d\u6267\u884c\nCREATE USER 'root'@'%' IDENTIFIED WITH mysql_native_password by '123456';\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u5b9a\u4e49default_hostgroup\u6211\u4eec\u6307\u5b9a\u7528\u6237\u5e94\u8be5\u9ed8\u8ba4\u8fde\u63a5\u5230\u6307\u5b9a\u76f8\u540chostgroup_id\u540e\u7aef\u670d\u52a1\u5668"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"# proxysql\u4e2d\u6267\u884c\nINSERT INTO mysql_users (username,password,default_hostgroup) VALUES ('root','123456',0);\nLOAD MYSQL USERS TO RUNTIME;\nSAVE MYSQL USERS TO DISK;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u9ed8\u8ba4\u660e\u6587\u5bc6\u7801\u901a\u8fc7\u4e0b\u9762\u751f\u6210\u52a0\u5bc6\u5bc6\u7801"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"load mysql users to runtime\nsave mysql users to memory;\nsave mysql users to disk;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM mysql_users;\n"})}),"\n",(0,l.jsx)(s.h2,{id:"\u8fde\u63a5",children:"\u8fde\u63a5"}),"\n",(0,l.jsx)(s.p,{children:"admin\u7ba1\u7406\u63a5\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a6032\u3002\u8be5\u7aef\u53e3\u7528\u4e8e\u67e5\u770b\u3001\u914d\u7f6eProxySQL\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u63a5\u6536SQL\u8bed\u53e5\u7684\u63a5\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a6033\uff0c\u8be5\u7aef\u53e3\u7528\u4e8emysql\u5ba2\u6237\u7aef\u8fde\u63a5\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u914d\u7f6e\u76d1\u63a7\u7528\u6237"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u5728mysql\u8282\u70b9\u4e2d\u6267\u884c\u521b\u5efa\u76d1\u63a7\u7528\u6237"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"CREATE USER 'proxysql'@'%' IDENTIFIED WITH mysql_native_password by '123456';\nGRANT USAGE ON *.* TO 'proxysql'@'%';\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u5728proxysql\u4e2d\u6267\u884c\u8bbe\u7f6e\u76d1\u63a7\u7528\u6237\u8d26\u53f7\u5bc6\u7801"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UPDATE global_variables SET variable_value='proxysql' WHERE variable_name='mysql-monitor_username';\nUPDATE global_variables SET variable_value='123456' WHERE variable_name='mysql-monitor_password';\n\nLOAD MYSQL VARIABLES TO RUNTIME;\nSAVE MYSQL VARIABLES TO DISK;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b\u76d1\u63a7\u4fe1\u606f"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM monitor.mysql_server_connect_log ORDER BY time_start_us DESC LIMIT 6;\nSELECT * FROM monitor.mysql_server_ping_log ORDER BY time_start_us DESC LIMIT 6;\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u914d\u7f6eread_only\u76d1\u63a7\u548c\u8bfb/\u5199\u7ec4"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"mysql\u8282\u70b9\u6709read_only=0\u7684hostgroup\u5c06\u81ea\u52a8\u8bbe\u7f6e\u4e3a0\uff0cread_only=1\u8bbe\u7f6e\u62101"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"INSERT INTO mysql_replication_hostgroups (writer_hostgroup,reader_hostgroup,comment) VALUES (0,1,'cluster1');\n\nLOAD MYSQL SERVERS TO RUNTIME;\nSAVE MYSQL SERVERS TO DISK;\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u8bbe\u7f6e\u6267\u884c\u53ea\u8bfb\u68c0\u67e5\u7684\u9891\u7387\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UPDATE global_variables SET variable_value=5000 WHERE variable_name='mysql-monitor_read_only_interval';\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u8bbe\u7f6e\u53ea\u8bfb\u68c0\u67e5\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UPDATE global_variables SET variable_value=5000 WHERE variable_name='mysql-monitor_read_only_timeout';\n\nLOAD MYSQL VARIABLES TO RUNTIME;\nSAVE MYSQL VARIABLES TO DISK;\n\n# \u67e5\u770b\nSELECT * FROM monitor.mysql_server_read_only_log ORDER BY time_start_us DESC LIMIT 3;\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u542f\u7528\u524d\u7aef\u7684 SSL/TLS\uff08zabbix\u8fde\u63a5\u4e4b\u7c7b\uff09"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SET mysql-have_ssl=\"true\";\nLOAD MYSQL VARIABLES TO RUNTIME;\nSAVE MYSQL VARIABLES TO DISK;\n\n# \u67e5\u770b\nSELECT * FROM global_variables WHERE variable_name LIKE 'mysql%ssl%';\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u8bbe\u7f6e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 MySQL \u7248\u672c\u53f7\uff08zabbix-server\u9650\u5b9a\u5ba2\u6237\u7aef\u7248\u672c\u4e4b\u7c7b\uff09"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"set mysql-server_version=\"8.0.27\";\nLOAD MYSQL VARIABLES TO RUNTIME;\nSAVE MYSQL VARIABLES TO DISK;\n\n# \u67e5\u770b\nSELECT * FROM global_variables WHERE variable_name LIKE '%version%';\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u914d\u7f6e\u67e5\u8be2\u89c4\u5219"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u67e5\u8be2\u89c4\u5219\u6309rule_id\u4ece\u5c0f\u5230\u5927\u987a\u5e8f\u5904\u7406"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4ec5\u5904\u7406\u5df2active=1\u5904\u7406\u7684\u89c4\u5219"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7b2c\u4e00\u4e2a\u89c4\u5219\u793a\u4f8b\u4f7f\u7528\u63d2\u5165\u7b26\u53f7 ( ^) \u548c\u7f8e\u5143 ( $) \uff1a\u8fd9\u4e9b\u662f\u7279\u6b8a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u7b26\uff0c\u7528\u4e8e\u6807\u8bb0\u6a21\u5f0f\u7684\u5f00\u59cb\u548c\u7ed3\u675f\uff0c\u5373\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0bmatch_digest\u6216match_pattern\u5e94\u8be5\u5b8c\u5168\u5339\u914d\u67e5\u8be2"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e0d\u4f7f\u7528\u63d2\u5165\u7b26\u53f7\u6216\u7f8e\u5143\uff1a\u5339\u914d\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u95ee\u53f7\u88ab\u8f6c\u4e49\uff0c\u56e0\u4e3a\u5b83\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u5177\u6709\u7279\u6b8a\u542b\u4e49"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"apply=1\u8868\u793a\u5982\u679c\u5f53\u524d\u89c4\u5219\u5339\u914d\u5219\u4e0d\u4f1a\u7ee7\u7eed\u5339\u914d\u540e\u7684\u89c4\u5219"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["match_digest\uff1a\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u53bb\u9664 SQL \u67e5\u8be2\u6570\u636e\u7684\u67e5\u8be2\u6458\u8981\u8fdb\u884c\u5339\u914d\uff08\u4f8b\u5982 ",(0,l.jsx)(s.code,{children:"SELECT c FROM sbtest1 WHERE id=?"}),"\uff0c\u5982stats_mysql_query_digest.query_digest\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["match_pattern\uff1a\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u67e5\u8be2\u7684\u5b9e\u9645\u6587\u672c\u5339\u914d\uff08\u4f8b\u5982\uff0c",(0,l.jsx)(s.code,{children:"SELECT c FROM sbtest1 WHERE id=2"}),"\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5f53\u5165\u53e3\u503cflagIN\u8bbe\u7f6e\u4e3a0\u65f6\uff0c\u8868\u793a\u5f00\u59cb\u8fdb\u5165\u94fe\u5f0f\u89c4\u5219\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5982\u672a\u663e\u5f0f\u6307\u5b9a\u89c4\u5219\u7684flagIN\u503c\uff0c\u5219\u9ed8\u8ba4\u90fd\u4e3a0\u3002\u5f53\u8bed\u53e5\u5339\u914d\u5b8c\u5f53\u524d\u89c4\u5219\u540e\uff0c\u5c06\u8bb0\u4e0b\u5f53\u524d\u89c4\u5219\u7684flagOUT\u503c\uff0c\u5982\u679cflagOUT\u503c\u975e\u7a7a(NOT NULL)\uff0c\u5219\u4e3a\u8be5\u8bed\u53e5\u6253\u4e0aflagOUT\u6807\u8bb0\u3002\u5982\u679c\u8be5\u89c4\u5219\u7684apply\u5b57\u6bb5\u503c\u4e0d\u662f1\uff0c\u5219\u7ee7\u7eed\u5411\u4e0b\u5339\u914d\u3002\u5982\u679c\u8bed\u53e5\u7684flagOUT\u6807\u8bb0\u548c\u4e0b\u4e00\u6761\u89c4\u5219\u7684flagIN\u503c\u4e0d\u540c\uff0c\u5219\u8df3\u8fc7\u8be5\u89c4\u5219\uff0c\u7ee7\u7eed\u5411\u4e0b\u5339\u914d\u3002\u76f4\u5230\u5339\u914d\u5230flagOUT=flagIN\u7684\u89c4\u5219\uff0c\u5219\u5339\u914d\u8be5\u89c4\u5219\u3002\u8be5\u89c4\u5219\u662f\u94fe\u5f0f\u89c4\u5219\u4e2d\u7684\u53e6\u4e00\u6761\u89c4\u5219\u3002\u76f4\u5230\u67d0\u89c4\u5219\u7684apply\u5b57\u6bb5\u8bbe\u7f6e\u4e3a1\uff0c\u6216\u8005\u5df2\u7ecf\u5339\u914d\u5b8c\u6240\u6709\u89c4\u5219\uff0c\u5219\u6700\u540e\u4e00\u6b21\u88ab\u8bc4\u4f30\u7684\u89c4\u5219\u5c06\u76f4\u63a5\u751f\u6548\uff0c\u4e0d\u518d\u7ee7\u7eed\u5411\u4e0b\u5339\u914d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.admonition,{type:"tip",children:[(0,l.jsx)(s.p,{children:"\u5982\u679c\u60f3\u5bf9match_digest\u53d6\u53cd\uff0c\u5373\u4e0d\u88ab\u6b63\u5219\u5339\u914d\u7684SQL\u8bed\u53e5\u624d\u547d\u4e2d\u89c4\u5219\uff0c\u5219\u8bbe\u7f6emysql_query_rules\u8868\u4e2d\u7684\u5b57\u6bb5negate_match_pattern=1\u3002\u540c\u6837\u9002\u7528\u4e8e\u4e0b\u9762\u7684match_pattern\u5339\u914d\u65b9\u5f0f\u3002"}),(0,l.jsx)(s.p,{children:"\u6458\u8981\u603b\u662f\u6bd4\u67e5\u8be2\u672c\u8eab\u5c0f\uff0c\u5bf9\u8f83\u5c0f\u7684\u5b57\u7b26\u4e32\u8fd0\u884c\u6b63\u5219\u8868\u8fbe\u5f0f\u4f1a\u66f4\u5feb\uff0c\u5efa\u8bae\uff08\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff09\u4f7f\u7528match_digest. \u8981\u91cd\u5199\u67e5\u8be2\u6216\u5339\u914d\u67e5\u8be2\u6587\u672c\u672c\u8eab\uff0c\u8bf7\u4f7f\u7528match_pattern."})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b\u8bed\u53e5\u5339\u914d"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"INSERT INTO mysql_query_rules (rule_id,active,username,match_digest,destination_hostgroup,apply) VALUES (10,1,'stnduser','^SELECT * FROM sbtest1 WHERE id=\\?$',10,1);\n\nINSERT INTO mysql_query_rules (rule_id,active,username,match_digest,destination_hostgroup,apply) VALUES (10,1,'stnduser','^SELECT',10,1);\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u6570\u636e\u5e93\u540d\u79f0\u5339\u914d\uff08\u4e0d\u5229\u7528 use databases \u5e76\u4e14\u4e0d\u547d\u4e2d\u5176\u4ed6\u89c4\u5219\uff0c\u9ed8\u8ba4\u8f6c\u53d1\u5230\u7528\u6237 default_hostgroup\uff09"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"instert into mysql_query_rules (rule_id, active, schemaname, destination_hostgroup,apply) values(1,1,'aa', 10, 1);\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u5ba2\u6237\u7aefIP\u5339\u914d"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"insert into mysql_query_rules (rule_id, active, client_addr, destination_hostgroup) values(2,1,'192.168.8.192', 10);\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u7981\u6b62\u67e5\u8be2\uff0c\u53ef\u4ee5\u914d\u5408\u5ba2\u6237\u7aefip\u7b56\u7565\u8bbe\u7f6e\u767d\u540d\u5355"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"insert into mysql_query_rules (rule_id, active, match_digest, error_msg) values(3,1,'.','error 9999');\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u67e5\u8be2\u91cd\u5199"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"INSERT INTO mysql_query_rules (rule_id,active,username,match_pattern,replace_pattern,apply) VALUES (30,1,'root','DISTINCT(.*)ORDER BY c','DISTINCT\\1',1);\n"})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u67e5\u8be2\u7f13\u5b58 cache_ttl(\u6beb\u79d2)"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UPDATE mysql_query_rules set cache_ttl=5000 WHERE rule_id=10;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u4fdd\u5b58\u89c4\u5219\u914d\u7f6e"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"LOAD MYSQL QUERY RULES TO RUNTIME;\nSAVE MYSQL QUERY RULES TO DISK;\n\n# \u67e5\u770b\nSELECT match_digest,destination_hostgroup FROM mysql_query_rules;\n\nSELECT rule_id, match_digest, match_pattern, replace_pattern, cache_ttl, apply FROM mysql_query_rules ORDER BY rule_id;\n# \u67e5\u770bhg(\u4e3b\u673a\u7ec4)=-1\u4e3a\u7f13\u5b58\u67e5\u8be2\nSELECT hostgroup hg, sum_time, count_star, digest_text FROM stats_mysql_query_digest ORDER BY sum_time DESC limit 10;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u5168\u5c40\u53d8\u91cf",children:"\u5168\u5c40\u53d8\u91cf"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u53d8\u91cf"}),(0,l.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"admin-admin_credentials"}),(0,l.jsxs)(s.td,{children:["admin",":admin"]}),(0,l.jsx)(s.td,{children:"\u7ba1\u7406\u7aef\u53e3\u7528\u6237\u540d\u548c\u5bc6\u7801"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"admin-mysql_ifaces"}),(0,l.jsx)(s.td,{children:"0.0.0.0:6032"}),(0,l.jsx)(s.td,{children:"\u7ba1\u7406\u7aef\u53e3"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"admin-stats_credentials"}),(0,l.jsxs)(s.td,{children:["stats",":stats"]}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u7aef\u53e3\u7528\u6237\u540d\u548c\u5bc6\u7801"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-commands_stats"}),(0,l.jsx)(s.td,{children:"true"}),(0,l.jsx)(s.td,{children:"\u662f\u5426\u5f00\u542f SQL \u7edf\u8ba1\uff0c\u5f00\u542f\u540e\u4f1a\u5206\u6790\u6bcf\u6761 SQL \u8bed\u53e5"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-connection_max_age_ms"}),(0,l.jsx)(s.td,{children:"0"}),(0,l.jsx)(s.td,{children:"\u5230 Backend \u7684\u8fde\u63a5\u7a7a\u95f2\u591a\u4e45\u540e\u4f1a\u81ea\u52a8\u5173\u95ed"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-default_query_timeout"}),(0,l.jsx)(s.td,{children:"86400000"}),(0,l.jsx)(s.td,{children:"\u5230 Backend \u7684\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09\uff0c\u8d85\u8fc7\u540e\u4f1a\u4e3b\u52a8\u505c\u6b62\u67e5\u8be2\uff0c\u5e76\u4ece Backend Kill \u6389\u8be5\u8fde\u63a5"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-free_connections_pct"}),(0,l.jsx)(s.td,{children:"10"}),(0,l.jsx)(s.td,{children:"\u5141\u8bb8\u7684 Backend \u7a7a\u95f2\u8fde\u63a5\u6570\uff0c\u662f\u4e00\u4e2a\u5360 mysql-max_connections \u6570\u91cf\u7684\u767e\u5206\u6bd4"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-interfaces"}),(0,l.jsx)(s.td,{children:"0.0.0.0:6033"}),(0,l.jsx)(s.td,{children:"\u6570\u636e\u7aef\u53e3\u914d\u7f6e"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-max_connections"}),(0,l.jsx)(s.td,{children:"2048"}),(0,l.jsx)(s.td,{children:"ProxySQL \u53ef\u63a5\u6536\u7684\u6700\u5927\u8fde\u63a5\u6570\u3002\u9ed8\u8ba4 10000\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-server_version"}),(0,l.jsx)(s.td,{children:"5.5.30"}),(0,l.jsx)(s.td,{children:"ProxySQL \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 MySQL \u7248\u672c\u53f7\uff0c\u6709\u53ef\u80fd\u5f71\u54cd\u5ba2\u6237\u7aef\u884c\u4e3a"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-session_idle_show_processlist"}),(0,l.jsx)(s.td,{children:"true"}),(0,l.jsx)(s.td,{children:"\u7ba1\u7406\u7aef\u53e3\u8fdb\u884c show processlist \u65f6\uff0c\u662f\u5426\u663e\u793a\u7a7a\u95f2\u8fde\u63a5\uff0c\u5f00\u542f\u540e\u4f1a\u5f71\u54cd\u6027\u80fd"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"mysql-wait_timeout"}),(0,l.jsx)(s.td,{children:"28800000"}),(0,l.jsx)(s.td,{children:"\u5ba2\u6237\u7aef\u8fde\u63a5\u7a7a\u95f2\u8d85\u65f6\u65f6\u95f4\uff08\u6beb\u79d2\uff09"})]})]})]}),"\n",(0,l.jsx)(s.p,{children:"\u4fee\u6539"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"set admin-admin_credentials='admin:admin;myuser:myuser';\n\n# \u4f7f\u4fee\u6539\u7acb\u5373\u751f\u6548\nload admin variables to runtime;\n# \u4f7f\u4fee\u6539\u6c38\u4e45\u4fdd\u5b58\u5230\u78c1\u76d8\nsave admin variables to disk;\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u67e5\u770b"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:'SELECT * FROM global_variables;\nSELECT @@admin-stats_credentials;\nSHOW VARIABLES LIKE "mysql-max_connections";\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},7502:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>t});var l=n(50959);const r={},i=l.createContext(r);function t(e){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);