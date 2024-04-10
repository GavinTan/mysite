"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[3459],{70544:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=i(13274),t=i(1780);const c={},s=void 0,a={id:"\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a",title:"\u7f51\u7edc\u4ea4\u6362\u673a",description:"H3C\u914d\u7f6e",source:"@site/docs/\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a.md",sourceDirName:"\u7b14\u8bb0",slug:"/\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a",permalink:"/docs/\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a",draft:!1,unlisted:!1,editUrl:"https://github.com/gavintan/notes/docs/\u7b14\u8bb0/\u7f51\u7edc\u4ea4\u6362\u673a.md",tags:[],version:"current",frontMatter:{},sidebar:"doc",previous:{title:"\u6570\u636e\u5e93",permalink:"/docs/\u7b14\u8bb0/\u6570\u636e\u5e93"},next:{title:"Ingress",permalink:"/docs/k8s/Ingress"}},d={},l=[{value:"H3C\u914d\u7f6e",id:"h3c\u914d\u7f6e",level:2},{value:"\u914d\u7f6eqos IP\u9650\u901f",id:"\u914d\u7f6eqos-ip\u9650\u901f",level:2},{value:"\u534e\u4e3a\u4ea4\u6362\u673a\u914d\u7f6e",id:"\u534e\u4e3a\u4ea4\u6362\u673a\u914d\u7f6e",level:2},{value:"qos\u4ecb\u7ecd",id:"qos\u4ecb\u7ecd",level:2},{value:"\u7b56\u7565\u8def\u7531",id:"\u7b56\u7565\u8def\u7531",level:2},{value:"\u4e09\u5c42\u4ea4\u6362\u673a\u914d\u7f6eacl",id:"\u4e09\u5c42\u4ea4\u6362\u673a\u914d\u7f6eacl",level:2}];function o(n){const e={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"h3c\u914d\u7f6e",children:"H3C\u914d\u7f6e"}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6eOSPF"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[H3C]ospf 100\n[H3C-ospf-100]area 1\n[H3C-ospf-100-area-0.0.0.1]network 172.16.0.0 0.0.255.255\n[H3C-ospf-100-area-0.0.0.1]network 192.168.10.0 0.255.255.255\n[H3C-ospf-100-area-0.0.0.1]network 10.6.0.0 0.0.255.255\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6eweb\u754c\u9762"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[H3C-Vlan-interface1]interface Vlan-interface 1\n[H3C-Vlan-interface1]ip address 192.168.1.1 255.255.255.0\n[H3C]local-user admin\n[H3C-luser-manage-admin]password simple admin\n[H3C]authorization-attribute level 3\n[H3C]service-type telnet\n[H3C]service-type web\n[H3C]ip http enable\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6e1/0/1\u7aef\u53e3\u4e3atrunk\u53e3"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[sysname]interface GigabitEthernet 1/0/1\n[sysname-GigabitEthernet1/0/1]port link-type trunk\n[sysname-GigabitEthernet1/0/1]port trunk permit vlan all\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6eDHCP"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Sysname] dhcp relay server-group 1 ip 192.168.0.1                     \u521b\u5efaDHCP \u5730\u5740\u6c601\n[sysname-dhcp-pool-1]network 192.168.0.0 mask 255.255.255.0            \u6307\u5b9a\u53ef\u4ee5\u5206\u914d\u7684\u5730\u5740\u6bb5\n[sysname-dhcp-pool-1]gateway-list 192.168.0.1                          \u6307\u5b9a\u7f51\u5173\n[sysname-dhcp-pool-1]dns-list 192.168.0.2                              \u6307\u5b9aDNS server\u5730\u5740\n[sysname-d1hcp-pool-1]domain-name huawei-3com.com                      \u6307\u5b9a\u57df\u540d\n[sysname-dhcp-pool-1]expired unlimited                                 \u8bbe\u7f6e\u79df\u671f\u65f6\u95f4\u65e0\u9650\n[sysname]dhcp server forbidden-ip 192.168.0.1 192.168.0.2              \u4fdd\u7559\u5730\u5740\n[Sysname] interface vlan-interface 1\n[Sysname-Vlan-interface1] dhcp select relay \n[Sysname-Vlan-interface1] dhcp relay server-select 1                   \u914d\u7f6eVLAN\u63a5\u53e31\u4e0eDHCP\u670d\u52a1\u5668\u7ec41\u7684\u5f52\u5c5e\u5173\u7cfb\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6eVLAN\u9650\u901f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Sysname] traffic classifier class20                       \u5b9a\u4e49\u7c7b\u540d\u79f0\u4e3aclass20 \n[Sysname-classifier-class20] if-match any                  \u5b9a\u4e49\u5339\u914d\u6240\u6709\u62a5\u6587\u89c4\u5219 \n[Sysname-classifier-class20] quit \n[Sysname] traffic behavior behavior20                      \u5b9a\u4e49\u6d41\u884c\u4e3a\u540d\u79f0\u4e3abehavior20 \n[Sysname-behavior-behaviot20] car cir 4096                 \u914d\u7f6e\u6d41\u91cf\u76d1\u7ba1\u52a8\u4f5c\uff0c\u9650\u5236\u6d41\u91cf\u4e3a4096K\n[Sysname-behavior-behaviot20] quit \n[Sysname] qos policy vlan20_limit                          \u521b\u5efaQOS\u7b56\u7565\u540d\u4e3avlan20_limit\n[Sysname-qospolicy-vlan20_limit] classifier class20 behavior behavior20               \u4e3a\u7c7bclass20\u5b9a\u4e49\u6d41\u884c\u4e3abehavior20 \n[Sysname-qospolicy-vlan20_limit] quit \n[Sysname] qos vlan-policy vlan20_limitvlan 20 inbound              \u5728VLAN20\u5165\u65b9\u5411\u4e0a\u5e94\u7528QOS\u7b56\u7565vlan20_limit \n[Sysname] qos vlan-policy vlan20_limit vlan 20 outbound            \u5728VLAN20\u51fa\u65b9\u5411\u4e0a\u5e94\u7528QOS\u7b56\u7565vlan20_limit\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u914d\u7f6eqos-ip\u9650\u901f",children:"\u914d\u7f6eqos IP\u9650\u901f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"qos carl 1 source-ip-address range 192.168.0.8 to 192.168.0.230 per-address\nqos carl 2 destination-ip-address range 192.168.0.8 to 192.168.0.230 per-address\n\ninterface GigabitEthernet0/3\nport link-mode route\nip address 1.1.1.1 255.255.255.252\nqos car inbound carl 1 cir 3000 cbs 187500 ebs 0 green pass red discard\nqos car inbound carl 3 cir 3000 cbs 187500 ebs 0 green pass red discard\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u6d41\u884c\u4e3a\u914d\u7f6e\u6d41\u91cf\u76d1\u7ba1\u3002\u62a5\u6587\u6b63\u5e38\u6d41\u901f\u4e3a200kbps\uff0c\u627f\u8bfa\u7a81\u53d1\u5c3a\u5bf8\u4e3a50000bytes\uff0c\u901f\u7387\u5927\u4e8e200kbps\u65f6\uff0c\u4e22\u5f03\u8d85\u8fc7\u9650\u5236\u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"<Sysname> dsystem-view\n[Sysname] traffic behavior database\n[Sysname-behavior-database] car cir 200 cbs 50000 ebs 0\n[Sysname-behavior-database] redirect interface GigabitEthernet 1/0/2\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u534e\u4e3a\u4ea4\u6362\u673a\u914d\u7f6e",children:"\u534e\u4e3a\u4ea4\u6362\u673a\u914d\u7f6e"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5f00\u542fTelnet\u529f\u80fd"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Quidway]user-interface vty 0 4\n[Quidway-ui-vty0-4]authentication-mode aaa\n[Quidway-ui-vty0-4]authentication-mode password\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u914d\u7f6e\u4ea4\u6362\u673asfp\u53e3"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fdb\u51650/0/24 \u5f3a\u5236\u8be5\u53e3\u4e3a\u5149\u53e3"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Huawei-GigabitEthernet0/0/24]combo-port fiber \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fdb\u51650/0/24 \u5f3a\u5236\u8be5\u53e3\u4e3a\u7535\u53e3"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Huawei-GigabitEthernet0/0/24]combo-port copper \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fdb\u51650/0/24 \u914d\u7f6e\u8be5\u53e3\u4e3a\u81ea\u52a8"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Huawei-GigabitEthernet0/0/24]combo-port auto\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5f00\u542f\u4ea4\u6362\u673a\u7684snmp\u670d\u52a1"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[Quidway]snmp-agent\n[Quidway]snmp-agent community read public\n[Quidway]snmp-agent community write private\n[Quidway]snmp-agent sys-info version all \n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fd8\u8bb0console\u5bc6\u7801"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5f00\u673a\u6309ctrl+B\u8fdb\u5165bootrom\u83dc\u5355\uff0cbootrom\u5bc6\u7801\u662f\uff1ahuawei\u6216",(0,r.jsx)(e.a,{href:"mailto:Admin@huawei.com",children:"Admin@huawei.com"}),"\uff0c\u8fdb\u5165\u540e\u63097\u6e05\u7a7a\u5bc6\u7801\uff0c\u7136\u540e\u5728\u63091\u542f\u52a8\u4ea4\u6362\u673a\uff0c\u7136\u540e\u5c31\u6ca1\u5bc6\u7801\u8fdb\u4ea4\u6362\u673a\u4e86"]}),"\n",(0,r.jsx)(e.h2,{id:"qos\u4ecb\u7ecd",children:"qos\u4ecb\u7ecd"}),"\n",(0,r.jsx)(e.p,{children:"CIR         \u5e73\u5747\u901f\u7387(\u6bcf\u79d2Kb)\nCBS        \u6700\u5927\u7a81\u53d1\u6d41\u91cf(bytes)       1KB   = 1,024 Bytes\nEBS         \u8d85\u51fa\u6700\u5927\u7a81\u53d1\u6d41\u91cf(bytes,\u4e00\u822c\u9ed8\u8ba4\u4e3a0)"}),"\n",(0,r.jsx)(e.p,{children:"cir\u5c0f\u4e8e64\u7684\uff0ccbs\u4e3a4000\ncir\u5927\u4e8e64\u7684\uff0ccbs\u4e3acir*64"}),"\n",(0,r.jsx)(e.p,{children:"CBS = 200 * CIR  PBS = 2 * CBS"}),"\n",(0,r.jsx)(e.p,{children:"CIR\uff1a\u8868\u793a\u5411C\u6876\u4e2d\u6295\u653e\u4ee4\u724c\u7684\u901f\u7387\uff0c\u5373C\u6876\u5141\u8bb8\u4f20\u8f93\u6216\u8f6c\u53d1\u62a5\u6587\u7684\u5e73\u5747\u901f\u7387\uff1b\nCBS\uff1a\u8868\u793aC\u6876\u7684\u5bb9\u91cf\uff0c\u5373C\u6876\u77ac\u95f4\u80fd\u591f\u901a\u8fc7\u7684\u627f\u8bfa\u7a81\u53d1\u6d41\u91cf\uff1b\nEBS\uff1a\u8868\u793aE\u6876\u7684\u5bb9\u91cf\uff0c\u5373E\u6876\u77ac\u95f4\u80fd\u591f\u901a\u8fc7\u7684\u8d85\u51fa\u7a81\u53d1\u6d41\u91cf\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u7b56\u7565\u8def\u7531",children:"\u7b56\u7565\u8def\u7531"}),"\n",(0,r.jsx)(e.p,{children:"\u5728 SwitchA \u4e0a\u521b\u5efa\u57fa\u672c ACL2000\uff0c\u5339\u914d\u6e90\u5730\u5740\u4e3a 192.168.0.0/24 \u7f51\u6bb5\u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] acl number 2000\n[SwitchA-acl-basic-2000] rule permit source 192.168.0.0 0.0.0.255\n[SwitchA-acl-basic-2000] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u57fa\u672c ACL2001\uff0c\u5339\u914d\u6e90\u5730\u5740\u4e3a 192.168.1.0/24 \u7f51\u6bb5\u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] acl number 2001\n[SwitchA-acl-basic-2001] rule permit source 192.168.1.0 0.0.0.255\n[SwitchA-acl-basic-2001] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u57fa\u672c ACL2002\uff0c\u5339\u914d\u6e90\u5730\u5740\u4e3a 192.168.0.100 \u7684\u62a5\u6587\uff08\u5373\u7814\u53d1\u7ecf\u7406\u4e3b\u673a\u7684 IP \u5730\u5740\uff09\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] acl number 2002\n[SwitchA-acl-basic-2002] rule permit source 192.168.0.100 0.0.0.0\n[SwitchA-acl-basic-2002] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6d41\u5206\u7c7b rd_internet\uff0c\u5b9a\u4e49\u89c4\u5219\u4e3a\u5339\u914d ACL2000 \u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] traffic classifier rd_internet\n[SwitchA-classifier-rd_internet] if-match acl 2000\n[SwitchA-classifier-rd_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6d41\u884c\u4e3a rd_internet\uff0c\u52a8\u4f5c\u4e3a\u91cd\u5b9a\u5411\u5230\u4e0b\u4e00\u8df3\u5730\u5740 10.10.1.2\uff08SwitchB\uff09\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] traffic behavior rd_internet\n[SwitchA-behavior-rd_internet] redirect next-hop 10.10.1.2\n[SwitchA-behavior-rd_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6d41\u5206\u7c7b admin_internet\uff0c\u5b9a\u4e49\u89c4\u5219\u4e3a\u5339\u914d ACL2001 \u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] traffic classifier admin_internet\n[SwitchA-classifier-admin_internet] if-match acl 2001\n[SwitchA-classifier-admin_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6d41\u884c\u4e3a admin_internet\uff0c\u52a8\u4f5c\u4e3a\u91cd\u5b9a\u5411\u5230\u4e0b\u4e00\u8df3\u5730\u5740 10.10.2.2\uff08SwitchC\uff09\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] traffic behavior admin_internet\n[SwitchA-behavior-admin_internet] redirect next-hop 10.10.2.2\n[SwitchA-behavior-admin_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u6d41\u5206\u7c7b rd_mgr_internet\uff0c\u5b9a\u4e49\u89c4\u5219\u4e3a\u5339\u914d ACL2002 \u7684\u62a5\u6587\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] traffic classifier admin_internet\n[SwitchA-classifier-admin_internet] if-match acl 2002\n[SwitchA-classifier-admin_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u7814\u53d1\u7ecf\u7406\u4e3b\u673a\u7684\u91cd\u5b9a\u5411\u52a8\u4f5c\uff0c\u76f4\u63a5\u4f7f\u7528\u5e02\u573a\u90e8\u4e3b\u673a\u7684\u6d41\u884c\u4e3a admin_internet \u5373\u53ef\uff0c\u65e0\u9700\u518d\u5355\u72ec\u521b\u5efa\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa QoS \u7b56\u7565 rd_internet\uff0c\u5c06\u5339\u914d\u7814\u53d1\u90e8\u95e8\u4e3b\u673a\u7684\u6d41\u5206\u7c7b\u548c\u6d41\u884c\u4e3a\u8fdb\u884c\u914d\u5bf9\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9488 \u5bf9\u7814\u53d1\u7ecf\u7406\u4e3b\u673a\u7684\u914d\u5bf9\u9700\u8981\u5728\u9488\u5bf9\u6574\u4e2a\u7814\u53d1\u90e8\u95e8\u7684\u914d\u5bf9\u4e4b\u524d\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] qos policy rd_internet\n[SwitchA-qospolicy-rd_internet] classifier rd_mgr_internet behavior admin_internet\n[SwitchA-qospolicy-rd_internet] classifier rd_internet behavior rd_internet\n[SwitchA-qospolicy-rd_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa QoS \u7b56\u7565 admin_internet\uff0c\u5c06\u5339\u914d\u7ba1\u7406\u90e8\u95e8\u4e3b\u673a\u7684\u6d41\u5206\u7c7b\u548c\u6d41\u884c\u4e3a\u8fdb\u884c\u914d\u5bf9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] qos policy admin_internet\n[SwitchA-qospolicy-admin_internet] classifier admin_internet behavior admin_internet\n[SwitchA-qospolicy-admin_internet] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u7b56\u7565 rd_internet \u5e94\u7528\u5230 GigabitEthernet1/0/1 \u7aef\u53e3\u7684\u5165\u65b9\u5411\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] interface gigabitethernet 1/0/1\n[SwitchA-GigabitEthernet1/0/1] qos apply policy rd_internet inbound\n[SwitchA-GigabitEthernet1/0/1] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u7b56\u7565 admin_internet \u5e94\u7528\u5230 GigabitEthernet1/0/2 \u7aef\u53e3\u7684\u5165\u65b9\u5411\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"[SwitchA] interface gigabitethernet 1/0/2\n[SwitchA-GigabitEthernet1/0/2] qos apply policy admin_internet inbound\n[SwitchA-GigabitEthernet1/0/2] quit\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://raw.githubusercontent.com/GavinTan/files/master/picgo/9e7f6241faa0f61e8ceca475cac77014.jpg",alt:"9e7f6241faa0f61e8ceca475cac77014"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4e09\u5c42\u4ea4\u6362\u673a\u914d\u7f6eacl",children:"\u4e09\u5c42\u4ea4\u6362\u673a\u914d\u7f6eacl"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Switch(config)#ip access-list standard test                          \u5b9a\u4e49acl\nSwitch(config-std-nacl)#deny 172.16.0.0 0.0.255.255                  \u62d2\u7edd\u6389\u8fd9\u6bb5\u7684ip\u8bbf\u95ee\nSwitch(config-std-nacl)#permit 192.168.1.0 0.0.0.255                 \u5141\u8bb8\u8fd9\u4e2a\u6bb5\u7684ip\u8bbf\u95ee\nSwitch(config-std-nacl)#exit\nSwitch(config)#interface vlan 40                                     \u5e94\u7528\u5230vlan40\nSwitch(config-if)#ip access-group test out\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},1780:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var r=i(79474);const t={},c=r.createContext(t);function s(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);