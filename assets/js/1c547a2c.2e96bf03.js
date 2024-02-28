"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[7943],{20887:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=r(11527),i=r(7502);const l={slug:"/wireguard",title:"Wireguard\u5b89\u88c5",authors:"gavintan",tags:["WireGuard","WG"],keywords:["WireGuard","WG"],description:"WireGuard\u662f\u4e00\u79cd\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u91c7\u7528\u6700\u5148\u8fdb\u7684\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u7684\u76ee\u6807\u662f\u6bd4 IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u6709\u7528\uff0c\u540c\u65f6\u907f\u514d\u4ee4\u4eba\u5934\u75bc\u7684\u95ee\u9898\u3002\u5b83\u7684\u6027\u80fd\u8fdc\u9ad8\u4e8e OpenVPN\u3002"},s=void 0,a={permalink:"/blog/wireguard",editUrl:"https://github.com/gavintan/blog/edit/main/blog/\u7f51\u7edc/wireguard.md",source:"@site/blog/\u7f51\u7edc/wireguard.md",title:"Wireguard\u5b89\u88c5",description:"WireGuard\u662f\u4e00\u79cd\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u91c7\u7528\u6700\u5148\u8fdb\u7684\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u7684\u76ee\u6807\u662f\u6bd4 IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u6709\u7528\uff0c\u540c\u65f6\u907f\u514d\u4ee4\u4eba\u5934\u75bc\u7684\u95ee\u9898\u3002\u5b83\u7684\u6027\u80fd\u8fdc\u9ad8\u4e8e OpenVPN\u3002",date:"2024-02-28T02:38:34.000Z",formattedDate:"2024\u5e742\u670828\u65e5",tags:[{label:"WireGuard",permalink:"/blog/tags/wire-guard"},{label:"WG",permalink:"/blog/tags/wg"}],readingTime:5.86,hasTruncateMarker:!1,authors:[{name:"GavinTan",title:"DevOps Engineer",url:"https://github.com/GavinTan",imageURL:"/img/logo.webp",key:"gavintan"}],frontMatter:{slug:"/wireguard",title:"Wireguard\u5b89\u88c5",authors:"gavintan",tags:["WireGuard","WG"],keywords:["WireGuard","WG"],description:"WireGuard\u662f\u4e00\u79cd\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u91c7\u7528\u6700\u5148\u8fdb\u7684\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u7684\u76ee\u6807\u662f\u6bd4 IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u6709\u7528\uff0c\u540c\u65f6\u907f\u514d\u4ee4\u4eba\u5934\u75bc\u7684\u95ee\u9898\u3002\u5b83\u7684\u6027\u80fd\u8fdc\u9ad8\u4e8e OpenVPN\u3002"},unlisted:!1,prevItem:{title:"Percona-XtraDB-Cluster\u5b89\u88c5",permalink:"/blog/pxc"}},c={authorsImageUrls:[void 0]},o=[{value:"\u670d\u52a1\u5668\u5b89\u88c5",id:"\u670d\u52a1\u5668\u5b89\u88c5",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"\u5ba2\u6237\u7aef\u5b89\u88c5",id:"\u5ba2\u6237\u7aef\u5b89\u88c5",level:2},{value:"\u7591\u96be\u89e3\u7b54",id:"\u7591\u96be\u89e3\u7b54",level:2},{value:"\u4f7f\u7528\u52a8\u6001\u57df\u540d\u4e4b\u7c7b\u7684ip\u53d1\u751f\u53d8\u5316\u4e0d\u4f1a\u81ea\u52a8\u91cd\u8fde",id:"\u4f7f\u7528\u52a8\u6001\u57df\u540d\u4e4b\u7c7b\u7684ip\u53d1\u751f\u53d8\u5316\u4e0d\u4f1a\u81ea\u52a8\u91cd\u8fde",level:4},{value:"\u9047\u5230\u8fd0\u8425\u5546UDP\u9650\u901f\uff08QOS\uff09",id:"\u9047\u5230\u8fd0\u8425\u5546udp\u9650\u901fqos",level:4},{value:"\u670d\u52a1\u7aef\uff1a",id:"\u670d\u52a1\u7aef",level:5},{value:"\u5ba2\u6237\u7aef\uff1a",id:"\u5ba2\u6237\u7aef",level:5},{value:"\u5ba2\u6237\u7aef\uff08\u591a\u670d\u52a1\u7aef\uff09\uff1a",id:"\u5ba2\u6237\u7aef\u591a\u670d\u52a1\u7aef",level:5}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"WireGuard\u662f\u4e00\u79cd\u6781\u5176\u7b80\u5355\u4f46\u5feb\u901f\u4e14\u73b0\u4ee3\u7684 VPN\uff0c\u91c7\u7528\u6700\u5148\u8fdb\u7684\u52a0\u5bc6\u6280\u672f\u3002\u5b83\u7684\u76ee\u6807\u662f\u6bd4 IPsec\u66f4\u5feb\u3001\u66f4\u7b80\u5355\u3001\u66f4\u7cbe\u7b80\u3001\u66f4\u6709\u7528\uff0c\u540c\u65f6\u907f\u514d\u4ee4\u4eba\u5934\u75bc\u7684\u95ee\u9898\u3002\u5b83\u7684\u6027\u80fd\u8fdc\u9ad8\u4e8e OpenVPN\u3002WireGuard \u88ab\u8bbe\u8ba1\u4e3a\u901a\u7528 VPN\uff0c\u53ef\u5728\u5d4c\u5165\u5f0f\u63a5\u53e3\u548c\u8d85\u7ea7\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u9002\u5408\u8bb8\u591a\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u5b83\u6700\u521d\u9488\u5bf9 Linux \u5185\u6838\u53d1\u5e03\uff0c\u73b0\u5728\u5df2\u8de8\u5e73\u53f0\uff08Windows\u3001macOS\u3001BSD\u3001iOS\u3001Android\uff09\u4e14\u53ef\u5e7f\u6cdb\u90e8\u7f72\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u670d\u52a1\u5668\u5b89\u88c5",children:"\u670d\u52a1\u5668\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.wireguard.com/install",children:"\u524d\u5f80\u5b98\u65b9\u5b89\u88c5\u6587\u6863"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Linux\u5185\u6838\u5fc5\u987b>5.6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"yum install wireguard-tools\n"})}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/WireGuard",children:"\u524d\u5f80\u914d\u7f6e\u6587\u6863"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5bc6\u94a5\u751f\u6210"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"umask 077\nwg genkey | tee privatekey | wg pubkey > publickey\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5f53\u5ba2\u6237\u7aef\u914d\u7f6e\u4e86AllowedIPs = 0.0.0.0/0\u4ee3\u7406\u6240\u6709\u6d41\u91cf\uff0c\u670d\u52a1\u5668\u7aef\u5fc5\u987b\u6dfb\u52a0PostUp\u7684iptables\u6765\u8f6c\u53d1\u6d41\u91cf\u5ba2\u6237\u7aef\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\uff0c\u662f\u652f\u6301\u591a\u4e2aPeer\u7684\u4e5f\u5c31\u662f\u80fd\u540c\u65f6\u914d\u7f6e\u591a\u4e2a\u8fdc\u7a0b\u7aef\u70b9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AllowedIPs"}),"\u901a\u4fd7\u7684\u6765\u8bf4\u5c31\u662f\u672c\u5730\u9700\u8981\u7ecf\u8fc7wireguard\u7684ip\u7f51\u6bb5\u90fd\u8981\u914d\u7f6e\u4e0a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"umask 077\ncat <<EOF > /etc/wireguard/wg0.conf\n[Interface]\nPrivateKey = `cat privatekey`\nAddress = 172.16.100.1/24\t#\u5730\u5740\u987b\u552f\u4e00\nListenPort = 51820\t#udp\u7aef\u53e3\nPostUp = sysctl -w net.ipv4.ip_forward=1\nPostUp   = iptables -A FORWARD -i %i -j ACCEPT\nPostUp   = iptables -A FORWARD -o %i -j ACCEPT\nPostUp = iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\nPostDown = sysctl -w net.ipv4.ip_forward=0\nPostDown = iptables -D FORWARD -i %i -j ACCEPT\nPostDown = iptables -D FORWARD -o %i -j ACCEPT\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\n\n[Peer]\nPublicKey = <\u5ba2\u6237\u7aef\u7684publickey>\nAllowedIPs = 172.16.100.2/32\nEOF\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u542f\u52a8wireguard"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wg-quick up wg0\n\n#\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\nsystemctl enable wg-quick@wg0\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u505c\u6b62wireguard"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wg-quick down wg0\n\n#\u5220\u9664\u5f00\u673a\u81ea\u542f\nsystemctl disable wg-quick@wg0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u5b89\u88c5",children:"\u5ba2\u6237\u7aef\u5b89\u88c5"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u9700\u8981\u5168\u5c40\u6d41\u91cf\u8d70wireguard\u9700\u8981\u6dfb\u52a0AllowedIPs = 0.0.0.0/0\u914d\u7f6e\uff0c\u4e0d\u884c\u5168\u5c40\u6d41\u91cf\u90fd\u8d70wireguard\u53ea\u9700\u8981\u5728AllowedIPs \u914d\u7f6e\u9700\u8981\u7ecf\u8fc7vpn\u7684\u7f51\u6bb5\u6216ip\u5373\u53ef"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u662f\u5728windows\u4e0a\u5ba2\u6237\u7aef\u6253\u901a\u96a7\u9053\u9700\u8981\u5728\u8fde\u63a5\u5c40\u57df\u7f51\u7684\u7f51\u5361\u4e0a\u8bbe\u7f6eInternet\u8fde\u63a5\u5171\u4eab\u5141\u8bb8\u672c\u5730wireguard Tunnel\u521b\u5efa\u7684\u7f51\u5361"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[Interface]\nPrivateKey = <\u5ba2\u6237\u7aef\u7684privatekey>\nAddress = 172.16.100.2/24\t#\u5730\u5740\u987b\u552f\u4e00\u4e14\u540c\u670d\u52a1\u5668\u4e3a\u540c\u4e00\u7f51\u6bb5\nDNS = 8.8.8.8,1.1.1.1\n\n[Peer]\nPublicKey = <\u670d\u52a1\u5668\u7684publickey>\nAllowedIPs = 0.0.0.0/0,::/0\nEndpoint = <server>:51820\nPersistentKeepalive = 25\t#\u5f53\u670d\u52a1\u5668\u4f4d\u4e8eNAT\u6216\u9632\u706b\u5899\u540e\u9762\u65f6\u9700\u8981\u914d\u7f6ekeepalive\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7591\u96be\u89e3\u7b54",children:"\u7591\u96be\u89e3\u7b54"}),"\n",(0,t.jsx)(n.h4,{id:"\u4f7f\u7528\u52a8\u6001\u57df\u540d\u4e4b\u7c7b\u7684ip\u53d1\u751f\u53d8\u5316\u4e0d\u4f1a\u81ea\u52a8\u91cd\u8fde",children:"\u4f7f\u7528\u52a8\u6001\u57df\u540d\u4e4b\u7c7b\u7684ip\u53d1\u751f\u53d8\u5316\u4e0d\u4f1a\u81ea\u52a8\u91cd\u8fde"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone https://git.zx2c4.com/wireguard-tools /usr/share/wireguard-tools\n\n\ncat <<EOF > /etc/systemd/system/wireguard_reresolve-dns.timer\n[Unit]\nDescription=Periodically reresolve DNS of all WireGuard endpoints\n\n[Timer]\nOnCalendar=*:*:0/30\n\n[Install]\nWantedBy=timers.target\nEOF\n\n\n\ncat <<EOF > /etc/systemd/system/wireguard_reresolve-dns.service\n[Unit]\nDescription=Reresolve DNS of all WireGuard endpoints\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nType=oneshot\nExecStart=/bin/sh -c 'for i in /etc/wireguard/*.conf; do /usr/share/wireguard-tools/contrib/reresolve-dns/reresolve-dns.sh \"$i\"; done'\nEOF\n\n\n\nsystemctl enable wireguard_reresolve-dns.timer --now\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u9047\u5230\u8fd0\u8425\u5546udp\u9650\u901fqos",children:"\u9047\u5230\u8fd0\u8425\u5546UDP\u9650\u901f\uff08QOS\uff09"}),"\n",(0,t.jsx)(n.p,{children:"WireGuard \u5728\u56fd\u5185\u7f51\u7edc\u73af\u5883\u4e0b\u4f1a\u9047\u5230\u4e00\u4e2a\u81f4\u547d\u7684\u95ee\u9898\uff1aUDP \u5c01\u9501/\u9650\u901f\u3002\u867d\u7136\u901a\u8fc7 WireGuard \u53ef\u4ee5\u5728\u96a7\u9053\u5185\u4f20\u8f93\u4efb\u4f55\u57fa\u4e8e IP \u7684\u534f\u8bae\uff08TCP\u3001UDP\u3001ICMP\u3001SCTP\u3001IPIP\u3001GRE \u7b49\uff09\uff0c\u4f46 WireGuard \u96a7\u9053\u672c\u8eab\u662f\u901a\u8fc7 UDP \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\u7684\uff0c\u800c\u56fd\u5185\u8fd0\u8425\u5546\u51e0\u4e4e\u5168\u90e8\u91c7\u53d6\u4e00\u5200\u5207\u7684\u624b\u6bb5\uff1a\u5bf9 UDP \u8fdb\u884c\u9650\u901f\u751a\u81f3\u5c01\u9501\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u89e3\u51b3\u65b9\u6cd5\uff1a\u4f7f\u7528",(0,t.jsx)(n.a,{href:"https://github.com/dndx/phantun",children:"Phantun"}),"\u5c06UDP\u4f2a\u88c5\u6210TCP\u8fde\u63a5\u3002"]}),"\n",(0,t.jsx)(n.h5,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8bbe\u670d\u52a1\u7aef\u7684\u516c\u7f51 IP \u5730\u5740\u662f ",(0,t.jsx)(n.code,{children:"121.36.134.95"}),"\uff0cWireGuard \u76d1\u542c\u7aef\u53e3\u662f ",(0,t.jsx)(n.code,{children:"51822"}),"\u3002\u9996\u5148\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"/etc/wireguard/wg0.conf"}),"\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"[Interface]"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528 ping \u6216\u8005 dig \u7b49\u5de5\u5177\uff08\u5c0f\u6570\u636e\u5305\uff09\u6d4b\u8bd5 WireGuard \u96a7\u9053\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f46\u6d4f\u89c8\u5668\u6216\u8005\u8fdc\u7a0b\u684c\u9762\uff08\u5927\u6570\u636e\u5305\uff09\u5374\u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\uff0c\u5f88\u6709\u53ef\u80fd\u662f MTU \u7684\u95ee\u9898\uff0c\u4f60\u9700\u8981\u5c06 MTU \u7684\u503c\u8c03\u5c0f\u4e00\u70b9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Phantun \u5b98\u65b9\u5efa\u8bae\u5c06 MTU \u7684\u503c\u8bbe\u4e3a ",(0,t.jsx)(n.code,{children:"1428"}),"\uff08\u5047\u8bbe\u7269\u7406\u7f51\u5361\u7684 MTU \u662f 1500\uff09\uff0c\u4f46\u7ecf\u6211\u6d4b\u8bd5\u662f\u6709\u95ee\u9898\u7684\u3002\u5efa\u8bae\u76f4\u63a5\u5c06 MTU \u8bbe\u7f6e\u4e3a\u6700\u4f4e\u503c ",(0,t.jsx)(n.code,{children:"1280"}),"\uff0c\u7136\u540e\u6e10\u6e10\u589e\u52a0\uff0c\u76f4\u5230\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u4e3a\u6b62\uff0c\u6b64\u65f6\u4f60\u7684 MTU \u5c31\u662f\u6700\u4f73\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"MTU = 1300\nPreUp = iptables -t nat -A PREROUTING -p tcp -i eth0 --dport 4567 -j DNAT --to-destination 192.168.201.2\nPreUp = RUST_LOG=info phantun_server --local 4567 --remote 127.0.0.1:51822 &> /var/log/phantun_server.log &\nPostDown = iptables -t nat -D PREROUTING -p tcp -i eth0 --dport 4567 -j DNAT --to-destination 192.168.201.2\nPostDown = killall phantun_server || true\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u9700\u8981\u5c06 eth0 \u66ff\u6362\u4e3a\u4f60\u670d\u52a1\u7aef\u7684\u7269\u7406\u7f51\u5361\u540d\u3002MTU \u503c\u5148\u4e0d\u7ba1\uff0c\u540e\u9762\u518d\u544a\u8bc9\u5927\u5bb6\u8c03\u8bd5\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"PreUp = iptables -t nat -A PREROUTING -p tcp -i eth0 --dport 4567 -j DNAT --to-destination 192.168.201.2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u6761 iptables \u89c4\u5219\u8868\u793a\u5c06 ",(0,t.jsx)(n.code,{children:"4567"})," \u7aef\u53e3\u7684\u5165\u7ad9\u6d41\u91cf DNAT \u4e3a TUN \u7f51\u5361\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"PreUp = RUST_LOG=info phantun_server --local 4567 --remote 127.0.0.1:51822 &> /var/log/phantun_server.log &\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f1a\u542f\u52a8 phantun_server\uff0c\u76d1\u542c\u5728 ",(0,t.jsx)(n.code,{children:"4567"})," \u7aef\u53e3\uff0c\u5e76\u5c06 UDP \u6570\u636e\u5305\u8f6c\u53d1\u5230 WireGuard\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u5b8c\u6574\u7684 WireGuard \u914d\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"# local settings for Endpoint B\n[Interface]\nPrivateKey = QH1BJzIZcGo89ZTykxls4i2DKgvByUkHIBy3BES2gX8= \nAddress = 10.0.0.2/32\nListenPort = 51822\nMTU = 1300\nPreUp = iptables -t nat -A PREROUTING -p tcp -i eth0 --dport 4567 -j DNAT --to-destination 192.168.201.2\nPreUp = RUST_LOG=info phantun_server --local 4567 --remote 127.0.0.1:51822 &> /var/log/phantun_server.log &\nPostDown = iptables -t nat -D PREROUTING -p tcp -i eth0 --dport 4567 -j DNAT --to-destination 192.168.201.2\nPostDown = killall phantun_server || true\n\n# remote settings for Endpoint A\n[Peer]\nPublicKey = wXtD/VrRo92JHc66q4Ypmnd4JpMk7b1Sb0AcT+pJfwY= \nAllowedIPs = 10.0.0.1/32\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u91cd\u542f WireGuard \u5373\u53ef\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ systemctl restart wg-quick@wg0\n"})}),"\n",(0,t.jsx)(n.h5,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8bbe\u5ba2\u6237\u7aef\u7684 WireGuard \u76d1\u542c\u7aef\u53e3\u662f ",(0,t.jsx)(n.code,{children:"51821"}),"\u3002\u9996\u5148\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"/etc/wireguard/wg0.conf"}),"\uff0c\u5728 ",(0,t.jsx)(n.code,{children:"[Interface]"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"MTU = 1300\nPreUp = iptables -t nat -A POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4567 --remote 121.36.134.95:4567 &> /var/log/phantun_client.log &\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPostDown = killall phantun_client || true\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u9700\u8981\u5c06 eth0 \u66ff\u6362\u4e3a\u4f60\u670d\u52a1\u7aef\u7684\u7269\u7406\u7f51\u5361\u540d\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"PreUp = iptables -t nat -A POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u6761 iptables \u89c4\u5219\u8868\u793a\u5bf9\u6765\u81ea ",(0,t.jsx)(n.code,{children:"192.168.200.2"}),"\uff08TUN \u7f51\u5361\uff09 \u7684\u51fa\u7ad9\u6d41\u91cf\u8fdb\u884c MASQUERADE\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"PreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4567 --remote 121.36.134.95:4567 &> /var/log/phantun_client.log &\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f1a\u542f\u52a8 phantun_client\uff0c\u76d1\u542c\u5728 ",(0,t.jsx)(n.code,{children:"4567"})," \u7aef\u53e3\uff0c\u5e76\u4e0e\u670d\u52a1\u7aef\u5efa\u7acb\u8fde\u63a5\uff0c\u5c06\u4f2a\u88c5\u7684 TCP \u6570\u636e\u5305\u4f20\u9001\u7ed9\u670d\u52a1\u7aef\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\u8fd8\u9700\u8981\u4fee\u6539 WireGuard peer \u7684 Endpoint\uff0c\u5c06\u5176\u4fee\u6539\u4e3a 127.0.0.1:4567\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"Endpoint = 127.0.0.1:4567\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u5b8c\u6574\u7684 WireGuard \u914d\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"# local settings for Endpoint A\n[Interface]\nPrivateKey = 0Pyz3cIg2gRt+KxZ0Vm1PvSIU+0FGufPIzv92jTyGWk=\nAddress = 10.0.0.1/32\nListenPort = 51821\nMTU = 1300\nPreUp = iptables -t nat -A POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4567 --remote 121.36.134.95:4567 &> /var/log/phantun_client.log &\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPostDown = killall phantun_client || true\n\n# remote settings for Endpoint B\n[Peer]\nPublicKey = m40NDb5Cqtb78b1DVwY1+kxbG2yEcRhxlrLm/DlPpz8=\nEndpoint = 127.0.0.1:4567\nAllowedIPs = 10.0.0.2/32\nPersistentKeepalive = 25\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u91cd\u542f WireGuard \u5373\u53ef\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ systemctl restart wg-quick@wg0\n"})}),"\n",(0,t.jsx)(n.h5,{id:"\u5ba2\u6237\u7aef\u591a\u670d\u52a1\u7aef",children:"\u5ba2\u6237\u7aef\uff08\u591a\u670d\u52a1\u7aef\uff09\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5ba2\u6237\u7aef\u60f3\u548c\u591a\u4e2a\u670d\u52a1\u7aef\u5efa\u7acb\u8fde\u63a5\uff0c\u5219\u65b0\u589e\u7684\u670d\u52a1\u7aef\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"PreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4568 --remote xxxx:4567 --tun-local=192.168.202.1 --tun-peer=192.168.202.2 &> /var/log/phantun_client.log &\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -s 192.168.202.2 -j MASQUERADE\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u5730\u76d1\u542c\u7aef\u53e3\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u4e0e\u4e4b\u524d\u4e0d\u540c\u7684\u7aef\u53e3\uff0c\u540c\u7406\uff0cTUN \u7f51\u5361\u7684\u5730\u5740\u4e5f\u9700\u8981\u4fee\u6539\u3002\u6700\u7ec8\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"# local settings for Endpoint A\n[Interface]\nPrivateKey = 0Pyz3cIg2gRt+KxZ0Vm1PvSIU+0FGufPIzv92jTyGWk=\nAddress = 10.0.0.1/32\nListenPort = 51821\nMTU = 1300\nPreUp = iptables -t nat -A POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4567 --remote 121.36.134.95:4567 &> /var/log/phantun_client.log &\nPreUp = RUST_LOG=info phantun_client --local 127.0.0.1:4568 --remote xxxx:4567 --tun-local=192.168.202.1 --tun-peer=192.168.202.2 &> /var/log/phantun_client.log &\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -s 192.168.200.2 -j MASQUERADE\nPostDown = iptables -t nat -D POSTROUTING -o eth0 -s 192.168.202.2 -j MASQUERADE\nPostDown = killall phantun_client || true\n\n# remote settings for Endpoint B\n[Peer]\nPublicKey = m40NDb5Cqtb78b1DVwY1+kxbG2yEcRhxlrLm/DlPpz8=\nEndpoint = 127.0.0.1:4567\nAllowedIPs = 10.0.0.2/32\nPersistentKeepalive = 25\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7502:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(50959);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);