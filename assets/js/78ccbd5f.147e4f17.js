"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[4143],{97151:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var c=s(13274),l=s(1780);const r={},t=void 0,a={id:"\u7b14\u8bb0/k8s",title:"k8s",description:"k8s\u5b89\u88c5",source:"@site/docs/\u7b14\u8bb0/k8s.md",sourceDirName:"\u7b14\u8bb0",slug:"/\u7b14\u8bb0/k8s",permalink:"/docs/\u7b14\u8bb0/k8s",draft:!1,unlisted:!1,editUrl:"https://github.com/gavintan/notes/docs/\u7b14\u8bb0/k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"doc",previous:{title:"windows",permalink:"/docs/\u7b14\u8bb0/windows"},next:{title:"mac",permalink:"/docs/\u7b14\u8bb0/mac"}},i={},d=[{value:"k8s\u5b89\u88c5",id:"k8s\u5b89\u88c5",level:2},{value:"etcd",id:"etcd",level:2},{value:"k8s\u96c6\u7fa4\u4fee\u590d",id:"k8s\u96c6\u7fa4\u4fee\u590d",level:2},{value:"k8s\u81ea\u5b9a\u4e49host",id:"k8s\u81ea\u5b9a\u4e49host",level:2},{value:"k8s\u8bbe\u7f6e\u65f6\u533a",id:"k8s\u8bbe\u7f6e\u65f6\u533a",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"k8s\u5b89\u88c5",children:"k8s\u5b89\u88c5"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8bbe\u7f6e\u7cfb\u7edf\u53c2\u6570"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'# \u5173\u95edswap\nswapoff -a\nsed -i \'s/.*swap/#&/\' /etc/fstab\n\n# \u5185\u6838\u53c2\u6570\ncat <<EOF > /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_nonlocal_bind = 1\nnet.ipv4.ip_forward = 1\nvm.swappiness = 0\nvm.max_map_count = 262144\nnet.netfilter.nf_conntrack_max = 1000000\nEOF\n\nmodprobe br_netfilter\nsysctl -p /etc/sysctl.d/k8s.conf\necho "* soft nofile 65536" >> /etc/security/limits.conf\necho "* hard nofile 65536" >> /etc/security/limits.conf\n'})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5b89\u88c5docker"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u811a\u672c\u5b89\u88c5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"curl -fsSL https://get.docker.com/ | sh -s -- --mirror Aliyun\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"yum\u5b89\u88c5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"yum -y install yum-utils\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nyum -y install docker-ce\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'#\u4fee\u6539\u9ed8\u8ba4docker\u4ed3\u5e93\ncat <<EOF > /etc/docker/daemon.json\n{\n  "registry-mirrors": ["https://fl791z1h.mirror.aliyuncs.com"]\n}\nEOF\n'})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6dfb\u52a0\u963f\u91cckubernetes\u6e90"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"cat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5b89\u88c5k8s"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5\u5de5\u5177"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"yum install -y kubectl kubelet kubeadm\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521d\u59cb\u5316\u96c6\u7fa4"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"--service-cidr"})," service ip\u8303\u56f4"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"--pod-network-cidr"})," pod ip\u8303\u56f4"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init --kubernetes-version=1.18.0  --apiserver-advertise-address=172.16.7.14 --image-repository registry.aliyuncs.com/google_containers --service-cidr=10.10.0.0/16 --pod-network-cidr=10.244.0.0/16\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5b89\u88c5\u7f51\u7edc\u63d2\u4ef6"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5flannel\u7f51\u7edc\u63d2\u4ef6"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5calico\u7f51\u7edc\u63d2\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u8f7d\u4f7f\u7528ectd\u6570\u636e\u5b58\u50a8calico.yaml"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"curl https://docs.projectcalico.org/manifests/calico-etcd.yaml -o calico.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539kind: Secret\u7684data\u5185\u5bb9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:"title=calico.yaml",children:"etcd-key: null    --\x3e  etcd-key: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/server.key | base64 -w 0\netcd-cert: null   --\x3e  etcd-cert: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/server.crt | base64 -w 0\netcd-ca: null     --\x3e  etcd-ca: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/ca.crt | base64 -w 0\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539kind: ConfigMap\u5185\u5bb9data\u5185\u5bb9"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:"title=calico.yaml",children:'etcd_endpoints: "http://<ETCD_IP>:<ETCD_PORT>"  --\x3e  etcd_endpoints: "https://172.16.7.14:2379"\netcd_ca: ""   # "/calico-secrets/etcd-ca"       --\x3e  etcd_ca: "/calico-secrets/etcd-ca"\netcd_cert: "" # "/calico-secrets/etcd-cert"     --\x3e  etcd_cert: "/calico-secrets/etcd-cert"\netcd_key: ""  # "/calico-secrets/etcd-key"      --\x3e  etcd_key: "/calico-secrets/etcd-key"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e3aCalico\u8282\u70b9\u914d\u7f6eIP\u81ea\u52a8\u68c0\u6d4b\uff0c\u4ee5\u786e\u4fdd\u4f7f\u7528\u6b63\u786e\u7684IP\u5730\u5740\u8fdb\u884c\u8def\u7531interface=\u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u5b9e\u9645\u7269\u7406\u7f51\u5361"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0d\u505a\u8be5\u8bbe\u7f6e\u4f1a\u51fa\u73b0",(0,c.jsx)(n.code,{children:"mster calico-node notready"}),"\u72b6\u6001\u4ee5\u53ca\u51fa\u73b0",(0,c.jsx)(n.code,{children:"Connect Socket: Connection reset by peer bird: BGP: Unexpected connect from unknown address"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl set env daemonset/calico-node -n kube-system IP_AUTODETECTION_METHOD=interface=eth.*\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5b89\u88c5dashboard"})}),"\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539service\u914d\u7f6e\uff0c\u627e\u5230type\uff0c\u5c06ClusterIP\u6539\u6210NodePort \u8bbe\u7f6enodePort\u7aef\u53e3"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6388\u6743"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl create clusterrolebinding serviceaccount-cluster-admin --clusterrole=cluster-admin --user=system:serviceaccount:kubernetes-dashboard:kubernetes-dashboard\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u83b7\u53d6\u9875\u9762\u767b\u5f55token"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl describe secrets -n kubernetes-dashboard $(kubectl -n kubernetes-dashboard get secret|grep kubernetes-dashboard-token|awk '{print $1}')| grep token | awk 'NR==3{print $2}'\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539\u96c6\u7fa4\u542f\u7528ipvs\u6a21\u5f0f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'#\u4fee\u6539ConfigMap\u7684kube-system/kube-proxy\u4e2d\u7684config.conf\uff0cmode: \u201cipvs\u201d\nkubectl edit cm kube-proxy -n kube-system\n\n#\u91cd\u542f\u5404\u4e2a\u8282\u70b9\u4e0a\u7684kube-proxy pod\nkubectl get pod -n kube-system | grep kube-proxy | awk \'{system("kubectl delete pod "$1" -n kube-system")}\'\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u542f\u7528vip\uff08\u591amaster\u987b\u5728\u6bcf\u4e2a\u4e0a\u9762\u6267\u884c\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"#\u5b9a\u4e49vip\u5730\u5740\u5fc5\u987b\u540c\u5728\u4e3b\u673a\u7f51\u7edc\u975e\u4f7f\u7528\u7684ip\nexport VIP=172.16.7.18\n#\u5b9a\u4e49\u7f51\u5361\u63a5\u53e3\u4e3b\u673a\u5f53\u524d\u7f51\u5361\nexport INTERFACE=eth0\nctr image pull ghcr.io/kube-vip/kube-vip:v0.4.0\nctr run --rm --net-host ghcr.io/kube-vip/kube-vip:v0.4.0 vip /kube-vip manifest pod \\\n--interface $INTERFACE \\\n--vip $VIP \\\n--controlplane \\\n--services \\\n--arp \\\n--leaderElection | tee  /etc/kubernetes/manifests/kube-vip.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5nfs\u4f5c\u4e3asc\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'git clone https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner\n#\u4fee\u6539deployment.yaml\u4e2dserver\u5730\u5740\u4e0epath\u5bf9\u5e94\u5b9e\u9645\u7684nfs\u5730\u5740\u4e0e\u76ee\u5f55\ncd nfs-subdir-external-provisioner && kubectl apply -f deploy/deployment.yaml deploy/rbac.yaml deploy/class.yaml\n\n#\u8bbe\u7f6enfs\u9ed8\u8ba4sc\nkubectl patch storageclass managed-nfs-storage -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u66f4\u6539ROLES\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl label --overwrite nodes nodename kubernetes.io/role=node1\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u6539revision\u89e6\u53d1\u6eda\u52a8\u66f4\u65b0\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'revision=`kubectl get deploy test01-app1 -ojson|jq -r \'.metadata.annotations."deployment.kubernetes.io/revision"|tonumber+1\'`\n\nkubectl patch deployment test01-app1 -p \'{"spec":{"template": {"metadata": {"annotations": {"deployment.kubernetes.io/revision": $revision}}}}}\'\n'})}),"\n",(0,c.jsx)(n.p,{children:"kubectl 1.15\u7248\u672c\u540e\u6eda\u52a8\u91cd\u542f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl  rollout restart deploy myapp-deploy -n ops\n"})}),"\n",(0,c.jsx)(n.p,{children:"ingress-nginx path\u88ab\u5e26\u8fc7 ingress\u914d\u7f6e\u6dfb\u52a0\u4e0b\u9762\u914d\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u65b0\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm token create --print-join-command\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5bfc\u51fa\u5f53\u524d\u96c6\u7fa4\u914d\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm config view > k8s.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u66f4\u65b0\u8bc1\u4e66\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm alpha certs renew all --config=k8s.yaml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5220\u9664\u5361\u4f4fTerminating\u72b6\u6001\u65e0\u6cd5\u5220\u9664\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'#\u5220\u9664- finalizers.kubesphere.io/namespaces\u5185\u5bb9\u5373\u53ef\nkubectl edit namespace myns\n\n#\u76f4\u63a5patch\u4fee\u6539\nkubectl patch ns/myns -p \'{"metadata":{"finalizers":[]}}\' --type=merge\nkubectl patch crd/helmcategories.application.kubesphere.io -p \'{"metadata":{"finalizers":[]}}\' --type=merge\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u590d/etc/kubernetes\u6240\u6709\u6587\u4ef6\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init phase certs all --config k8s.yml\nkubeadm init phase kubeconfig all --config k8s.yml\nkubeadm init phase control-plane all --config k8s.yml\nkubeadm init phase etcd local --config k8s.yml\n\n#\u66f4\u65b0cluster-info\u914d\u7f6e\nkubeadm init phase bootstrap-token\n#\u91cd\u542f\u63a7\u5236\u5e73\u9762\u7ec4\u4ef6\ndocker ps |grep -E 'k8s_kube-apiserver|k8s_kube-controller-manager|k8s_kube-scheduler|k8s_etcd_etcd' | awk  '{print $1}'|xargs docker restart\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4fee\u590dkubelet\u914d\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"systemctl stop kubelet\nrm -rf /var/lib/kubelet/pki/ /etc/kubernetes/kubelet.conf\nkubeadm init phase kubeconfig kubelet --config k8s.yml\nkubeadm init phase kubelet-start --config k8s.yml\n"})}),"\n",(0,c.jsx)(n.p,{children:"etcd\u65e0\u6cd5\u542f\u52a8\uff08\u8282\u70b9\u6302\u6389\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"vim /etc/kubernetes/manifests/etcd.yaml\n\u6dfb\u52a0\u53c2\u6570\u8986\u76d6\u65e7\u96c6\u7fa4\u4fe1\u606f\uff0c\u6b63\u5e38\u542f\u52a8\u540e\u53ef\u53bb\u6389\n--force-new-cluster\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u770betcd\u96c6\u7fa4\u4fe1\u606f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key endpoint status --cluster -w table\n"})}),"\n",(0,c.jsx)(n.p,{children:"kubeshpere\u5b89\u88c5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'#\u5b89\u88c5HelmClient\nwget https://get.helm.sh/helm-v2.14.3-linux-amd64.tar.gz\ntar -zxvf helm-v2.14.3-linux-amd64.tar.gz\nmv linux-amd64/helm /usr/local/bin/\n\n\n#\u5b89\u88c5TillerServer\nhelm init --upgrade --tiller-image registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.14.3  --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\nkubectl create serviceaccount --namespace kube-system tiller\nkubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller\nkubectl patch deploy --namespace kube-system tiller-deploy -p \'{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}\'\n'})}),"\n",(0,c.jsx)(n.h2,{id:"etcd",children:"etcd"}),"\n",(0,c.jsx)(n.p,{children:"\u914d\u7f6eetcdctl\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"alias etcdctl='etcdctl --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"etcdctl endpoint status --cluster -w table\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u67e5\u770b\u6240\u6709key\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"etcdctl get / --prefix --keys-only\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u751f\u6210\u5feb\u7167\u5907\u4efd\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-hell",children:"etcdctl snapshot save snapshot.db\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6062\u590d\u5907\u4efd\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5355master"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"etcdctl snapshot restore /root/snapshot.db --data-dir=/var/lib/etcd\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u591amaster"}),"\n",(0,c.jsx)(n.p,{children:"\u62f7\u8d1d\u5907\u4efd\u6587\u4ef6snapshot.db\u5230\u9694master\u4e0a"}),"\n",(0,c.jsx)(n.p,{children:"\u5206\u522b\u5728\u5176\u4ed6master\u4e0a\u6267\u884c--name\u4f7f\u7528\u5f53\u524d\u4e3b\u673a\u540d --initial-advertise-peer-urls \u5f53\u524d\u7684ectd\u5730\u5740"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"#master1\netcdctl snapshot restore /root/snapshot.db --name master1 --initial-cluster master1=https://192.168.200.201:2380,master2=https://192.168.200.202:2380,master3=https://192.168.200.203:2380 --initial-advertise-peer-urls https://192.168.200.201:2380 --data-dir /var/lib/etcd\n\n\n#master2\netcdctl snapshot restore /root/snapshot.db --name master2 --initial-cluster master1=https://192.168.200.201:2380,master2=https://192.168.200.202:2380,master3=https://192.168.200.203:2380 --initial-advertise-peer-urls https://192.168.200.202:2380 --data-dir /var/lib/etcd\n\n\n#master3\netcdctl snapshot restore snapshot.db --name master3 --initial-cluster master1=https://192.168.200.201:2380,master2=https://192.168.200.202:2380,master3=https://192.168.200.203:2380 --initial-advertise-peer-urls https://192.168.200.203:2380 --data-dir /var/lib/etcd\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"k8s\u96c6\u7fa4\u4fee\u590d",children:"k8s\u96c6\u7fa4\u4fee\u590d"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 master \u8282\u70b9\u4e0a\uff0c\u8fd9\u4e2a\u76ee\u5f55\u5305\u542b\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"etcd \u7684\u4e00\u7ec4\u8bc1\u4e66\u548c CA\uff08\u5728 /etc/kubernetes/pki/etcd \u76ee\u5f55\u4e0b\uff09"}),"\n",(0,c.jsx)(n.li,{children:"\u4e00\u7ec4 kubernetes \u7684\u8bc1\u4e66\u548c CA\uff08\u5728 /etc/kubernetes/pki \u76ee\u5f55\u4e0b\uff09"}),"\n",(0,c.jsx)(n.li,{children:"\u8fd8\u6709 kube-controller-manager\u3001kube-scheduler\u3001cluster-admin \u4ee5\u53ca kubelet \u8fd9\u4e9b\u4f7f\u7528\u7684 kubeconfig \u6587\u4ef6"}),"\n",(0,c.jsx)(n.li,{children:"etcd\u3001kube-apiserver\u3001kube-scheduler \u548c kube-controller-manager \u7684\u9759\u6001 Pod \u8d44\u6e90\u6e05\u5355\u6587\u4ef6\uff08\u4f4d\u4e8e /etc/kubernetes/manifests \u76ee\u5f55\uff09"}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5bfc\u51fa\u5f53\u524d\u96c6\u7fa4\u914d\u7f6e"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u96c6\u7fa4\u5df2\u4e0d\u80fd\u6b63\u5e38\u8bbf\u95ee\u5bfc\u51fa\u4e0d\u4e86\u914d\u7f6e\uff0c\u5728\u540e\u9762\u6267\u884ckubeadm\u547d\u4ee4\u751f\u6210\u914d\u7f6e\u8bc1\u4e66\u65f6\u624b\u52a8\u6307\u5b9a--apiserver-advertise-address\u3001--service-cidr\u7b49\u53c2\u6570\u5bf9\u5e94\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\u6216\u624b\u52a8\u751f\u6210k8s.yml\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm config view > k8s.yml\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:"title=k8s.yml",children:"apiServer:\n  extraArgs:\n    authorization-mode: Node,RBAC\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta2\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrollerManager: {}\ndns:\n  type: CoreDNS\netcd:\n  local:\n    dataDir: /var/lib/etcd\nimageRepository: registry.aliyuncs.com/google_containers\nkind: ClusterConfiguration\nkubernetesVersion: v1.18.12\nnetworking:\n  dnsDomain: cluster.local\n  podSubnet: 10.244.0.0/16\n  serviceSubnet: 10.10.0.0/16\nscheduler: {}\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u5220\u9664master\u4e0a\u6240\u6709\u65e7\u914d\u7f6e\u6587\u4ef6\u5305\u62ec\u8bc1\u4e66"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"rm -rf /etc/kubernetes\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4fee\u590d\u63a7\u5236\u5e73\u9762\u7ec4\u4ef6"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"\u5728\u5176\u4e2d\u4e00\u4e2a master \u8282\u70b9\u4e0a\u6267\u884c\u4e0b\u9762\u6240\u6709\u64cd\u4f5c"})}),"\n",(0,c.jsx)(n.p,{children:"\u751f\u6210 Kubernetes \u7684\u6240\u6709 SSL \u8bc1\u4e66\uff0c\u4ee5\u53ca Kubernetes \u670d\u52a1\u7684\u9759\u6001 Pods \u6e05\u5355\u548c kubeconfigs \u6587\u4ef6\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init phase certs all --config k8s.yml\nkubeadm init phase kubeconfig all --config k8s.yml\nkubeadm init phase control-plane all --config k8s.yml\nkubeadm init phase etcd local --config k8s.yml\n\ncp -f /etc/kubernetes/admin.conf ~/.kube/config\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u91cd\u542f\u65e7\u7684\u6240\u6709\u63a7\u5236\u5e73\u9762\u7ec4\u4ef6\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"docker ps |grep -E 'k8s_kube-apiserver|k8s_kube-controller-manager|k8s_kube-scheduler|k8s_etcd_etcd' | awk  '{print $1}'|xargs docker restart\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528 kubeadm \u52a0\u5165 kubelet\uff0c\u4f60\u8fd8\u9700\u8981\u66f4\u65b0 kube-public \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 cluster-info \u914d\u7f6e\uff0c\u56e0\u4e3a\u5b83\u4ecd\u7136\u5305\u542b\u4f60\u7684\u65e7 CA \u7684\u54c8\u5e0c\u503c\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init phase bootstrap-token\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7531\u4e8e\u5176\u4ed6 master \u8282\u70b9\u4e0a\u7684\u6240\u6709\u8bc1\u4e66\u4e5f\u5fc5\u987b\u7531\u5355\u4e00 CA \u7b7e\u7f72\uff0c\u624b\u52a8\u590d\u5236\u4e0b\u9762\u8bc1\u4e66\u5230\u5176\u4ed6master\u8282\u70b9\uff0c\u5e76\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u91cd\u590d\u4e0a\u9762\u547d\u4ee4\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"scp /etc/kubernetes/pki/{ca,front-proxy-ca}.{key,crt} master2\nscp /etc/kubernetes/pki/sa.{key,pub} master2\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f5c\u4e3a\u624b\u52a8\u590d\u5236\u8bc1\u4e66\u7684\u66ff\u4ee3\u65b9\u6cd5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 Kubernetes API\uff0c\u5982\u4e0b\u6240\u793a\u7684\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init phase upload-certs --upload-certs\n\nkubeadm token create --print-join-command\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u5c06\u52a0\u5bc6\u5e76\u4e0a\u4f20\u8bc1\u4e66\u5230 Kubernetes\uff0c\u65f6\u95f4\u4e3a2\u5c0f\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u65b9\u5f0f\u5728\u5176\u4ed6master\u4e0a\u6ce8\u518c master \u8282\u70b9\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"# \u66f4\u65b0\u73b0\u6709master\u8282\u70b9\u8bc1\u4e66\nkubeadm join phase control-plane-prepare all kubernetes-apiserver:6443 --control-plane --token cs0etm.ua7fbmwuf1jz946l --discovery-token-ca-cert-hash sha256:555f6ececd4721fed0269d27a5c7f1c6d7ef4614157a18e56ed9a1fd031a3ab8 --certificate-key 385655ee0ab98d2441ba8038b4e8d03184df1806733eac131511891d1096be73\n\n\n# \u52a0\u5165\u65b0\u7684master\u8282\u70b9\nkubeadm join kubernetes-apiserver:6443 --control-plane --token cs0etm.ua7fbmwuf1jz946l --discovery-token-ca-cert-hash sha256:555f6ececd4721fed0269d27a5c7f1c6d7ef4614157a18e56ed9a1fd031a3ab8 --certificate-key 385655ee0ab98d2441ba8038b4e8d03184df1806733eac131511891d1096be73\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cKubernetes API \u8fd8\u6709\u4e00\u4e2a\u914d\u7f6e\uff0c\u5b83\u4e3a front-proxy \u5ba2\u6237\u7aef\u6301\u6709 CA \u8bc1\u4e66\uff0c\u5b83\u7528\u4e8e\u9a8c\u8bc1\u4ece apiserver \u5230 webhooks \u548c\u805a\u5408\u5c42\u670d\u52a1\u7684\u8bf7\u6c42\u3002\u4e0d\u8fc7 kube-apiserver \u4f1a\u81ea\u52a8\u66f4\u65b0\u5b83\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4fee\u590d\u5de5\u4f5c\u8282\u70b9"})}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5217\u51fa\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\uff08master\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl get node\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u7136\u6b63\u5e38\u73b0\u5728\u6240\u6709\u8282\u70b9\u7684\u72b6\u6001\u90fd\u662f NotReady\uff0c\u8fd9\u662f\u56e0\u4e3a\u4ed6\u4eec\u4ecd\u7136\u8fd8\u4f7f\u7528\u7684\u662f\u65e7\u7684\u8bc1\u4e66\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 kubeadm \u6765\u6267\u884c\u91cd\u65b0\u52a0\u5165\u96c6\u7fa4\u8282\u70b9\uff08master\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"systemctl stop kubelet\nrm -rf /var/lib/kubelet/pki/ /etc/kubernetes/kubelet.conf\nkubeadm init phase kubeconfig kubelet --config k8s.yml\nkubeadm init phase kubelet-start --config k8s.yml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f46\u8981\u52a0\u5165\u5de5\u4f5c\u8282\u70b9\uff0c\u6211\u4eec\u5fc5\u987b\u751f\u6210\u4e00\u4e2a\u65b0\u7684 token\uff08master\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm token create --print-join-command\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7136\u540e\u5728\u5de5\u4f5c\u8282\u70b9\u5206\u522b\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff08node\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"systemctl stop kubelet\nrm -rf /var/lib/kubelet/pki/ /etc/kubernetes/pki/ /etc/kubernetes/kubelet.conf\nkubeadm join phase kubelet-start kubernetes-apiserver:6443 --token cs0etm.ua7fbmwuf1jz946l --discovery-token-ca-cert-hash sha256:555f6ececd4721fed0269d27a5c7f1c6d7ef4614157a18e56ed9a1fd031a3ab8\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"\u4f60\u4e0d\u9700\u8981\u5220\u9664 master \u8282\u70b9\u4e0a\u7684 /etc/kubernetes/pki \u76ee\u5f55\uff0c\u56e0\u4e3a\u5b83\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u6709\u9700\u8981\u7684\u8bc1\u4e66\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u64cd\u4f5c\u4f1a\u628a\u4f60\u6240\u6709\u7684 kubelet \u91cd\u65b0\u52a0\u5165\u5230\u96c6\u7fa4\u4e2d\uff0c\u5b83\u5e76\u4e0d\u4f1a\u5f71\u54cd\u4efb\u4f55\u5df2\u7ecf\u8fd0\u884c\u5728\u4e0a\u9762\u7684\u5bb9\u5668\uff0c\u4f46\u662f\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u6709\u591a\u4e2a\u8282\u70b9\u5e76\u4e14\u4e0d\u540c\u65f6\u8fdb\u884c\uff0c\u5219\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u79cd\u60c5\u51b5\uff0c\u5373 kube-controller-mananger \u5f00\u59cb\u4ece NotReady \u8282\u70b9\u91cd\u65b0\u521b\u5efa\u5bb9\u5668\uff0c\u5e76\u5c1d\u8bd5\u5728\u6d3b\u52a8\u8282\u70b9\u4e0a\u91cd\u65b0\u8c03\u5ea6\u5b83\u4eec\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u6682\u65f6\u505c\u6389 master \u8282\u70b9\u4e0a\u7684 controller-manager\uff08\u53ef\u7565\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"rm /etc/kubernetes/manifests/kube-controller-manager.yaml\ncrictl rmp $(crictl ps --name kube-controller-manager -q)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u65e6\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u88ab\u52a0\u5165\uff0c\u4f60\u5c31\u53ef\u4ee5\u4e3a controller-manager \u751f\u6210\u4e00\u4e2a\u9759\u6001\u8d44\u6e90\u6e05\u5355\uff0c\u5728\u6240\u6709 master \u8282\u70b9\u4e0a\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff08\u53ef\u7565\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubeadm init phase control-plane controller-manager --config k8s.yml\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c kubelet \u88ab\u914d\u7f6e\u4e3a\u8bf7\u6c42\u7531\u4f60\u7684 CA \u7b7e\u7f72\u7684\u8bc1\u4e66(\u9009\u9879serverTLSBootstrap: true)\uff0c\u4f60\u8fd8\u9700\u8981\u6279\u51c6\u6765\u81ea kubelet \u7684 CSR\uff08\u53ef\u7565\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"kubectl get csr\nkubectl certificate approve <csr>\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u66f4\u65b0calico\u4e2detcd\u8bc1\u4e66\uff08\u4f7f\u7528calico etcd\u5b58\u50a8\u60c5\u51b5\u4e0b\uff09"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:"title=calico-etcd-secrets.yml",children:"# Source: calico/templates/calico-etcd-secrets.yaml\n# The following contains k8s Secrets for use with a TLS enabled etcd cluster.\n# For information on populating Secrets, see http://kubernetes.io/docs/user-guide/secrets/\napiVersion: v1\nkind: Secret\ntype: Opaque\nmetadata:\n  name: calico-etcd-secrets\n  namespace: kube-system\ndata:\n  # Populate the following with etcd TLS configuration if desired, but leave blank if\n  # not using TLS for etcd.\n  # The keys below should be uncommented and the values populated with the base64\n  # encoded contents of each file that would be associated with the TLS data.\n  # Example command for encoding a file contents: cat <file> | base64 -w 0\n  etcd-key: null    --\x3e  null: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/server.key | base64 -w 0\n  etcd-cert: null   --\x3e  null: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/server.crt | base64 -w 0\n  etcd-ca: null     --\x3e  null: #\u6539\u6210\u8f93\u51fa\u7684\u5185\u5bb9cat /etc/kubernetes/pki/etcd/ca.crt | base64 -w 0\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"#kubectl edit secret calico-etcd-secrets -n kube-system\n\nkubectl replace -f calico-etcd-secrets.yml\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4fee\u590d ServiceAccounts"})}),"\n",(0,c.jsx)(n.p,{children:"\u56e0\u4e3a\u6211\u4eec\u4e22\u5931\u4e86 /etc/kubernetes/pki/sa.key \uff0c\u8fd9\u4e2a key \u7528\u4e8e\u4e3a\u96c6\u7fa4\u4e2d\u6240\u6709 ServiceAccounts \u7b7e\u7f72 jwt tokens\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u5fc5\u987b\u4e3a\u6bcf\u4e2a sa \u91cd\u65b0\u521b\u5efatokens\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u4e3a  kubernetes.io/service-account-token \u7684 Secret \u4e2d\u5220\u9664 token \u5b57\u6bb5\u6765\u5b8c\u6210\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'kubectl get secret --all-namespaces | awk \'/kubernetes.io\\/service-account-token/ { print "kubectl patch secret -n " $1 " " $2 " -p {\\\\\\"data\\\\\\":{\\\\\\"token\\\\\\":null}}"}\' | sh -x\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5220\u9664\u4e4b\u540e\uff0ckube-controller-manager \u4f1a\u81ea\u52a8\u751f\u6210\u7528\u65b0\u5bc6\u94a5\u7b7e\u540d\u7684\u65b0\u4ee4\u724c\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f\u5e76\u975e\u6240\u6709\u7684\u5fae\u670d\u52a1\u90fd\u80fd\u5373\u65f6\u66f4\u65b0 tokens\uff0c\u56e0\u6b64\u5f88\u53ef\u80fd\u9700\u8981\u624b\u52a8\u91cd\u65b0\u542f\u52a8\u4f7f\u7528 tokens \u7684\u5bb9\u5668\uff08\u770b\u5b9e\u9645\u60c5\u51b5\u518d\u91cd\u542f\u5bf9\u5e94\u7684pod\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:'kubectl get pod --field-selector \'spec.serviceAccountName!=default\' --no-headers -n kube-system | awk \'{print "kubectl delete pod -n " $1 " " $2 " --wait=false --grace-period=0"}\'\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u751f\u6210\u4e00\u4e2a\u547d\u4ee4\u5217\u8868\uff0c\u4f1a\u5c06\u6240\u6709\u4f7f\u7528\u975e\u9ed8\u8ba4\u7684 serviceAccount \u7684 Pod \u5220\u9664\uff0c\u6211\u5efa\u8bae\u4ece kube-system \u547d\u540d\u7a7a\u95f4\u6267\u884c\uff0c\u56e0\u4e3a kube-proxy \u548c CNI \u63d2\u4ef6\u90fd\u5b89\u88c5\u5728\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u5b83\u4eec\u5bf9\u4e8e\u5904\u7406\u4f60\u7684\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u901a\u4fe1\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5230\u8fd9\u91cc\u6211\u4eec\u7684\u96c6\u7fa4\u5c31\u6062\u590d\u5b8c\u6210\u4e86\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u94fe\u63a5\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://z.itpub.net/article/detail/75AC8916765D4CD9980915384D705E9F",children:"https://z.itpub.net/article/detail/75AC8916765D4CD9980915384D705E9F"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://itnext.io/breaking-down-and-fixing-kubernetes-4df2f22f87c3",children:"https://itnext.io/breaking-down-and-fixing-kubernetes-4df2f22f87c3"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"k8s\u81ea\u5b9a\u4e49host",children:"k8s\u81ea\u5b9a\u4e49host"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"coresdns"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'kubectl edit cm -n kube-system coredns\n\n\n# \u6dfb\u52a0hosts\u5185\u5bb9\uff08fallthrough\u5fc5\u987b\u5b58\u5728\uff09\n\napiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        hosts {\n          10.100.1.71 node1 hadoop01\n          10.100.1.72 node2 hadoop02\n          10.100.1.73 node3 hadoop03\n\n          fallthrough\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  creationTimestamp: "2020-12-03T09:28:23Z"\n  managedFields:\n  - apiVersion: v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:data: {}\n    manager: kubeadm\n    operation: Update\n    time: "2020-12-03T09:28:23Z"\n  - apiVersion: v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:data:\n        f:Corefile: {}\n    manager: kubectl\n    operation: Update\n    time: "2021-10-12T02:40:57Z"\n  name: coredns\n  namespace: kube-system\n  resourceVersion: "111183417"\n  selfLink: /api/v1/namespaces/kube-system/configmaps/coredns\n  uid: 337c1a28-cfe5-454d-8cbc-b6e15e64470d\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"hostAliases"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      hostAliases:\n      - ip: 127.0.0.1\n        hostnames:\n        - foo.local\n        - bar.local\n      - ip: 10.1.2.3\n        hostnames:\n        - foo.remote\n        - bar.remote\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n"})}),"\n",(0,c.jsx)(n.h2,{id:"k8s\u8bbe\u7f6e\u65f6\u533a",children:"k8s\u8bbe\u7f6e\u65f6\u533a"}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-env-tz\nspec:\n  containers:\n  - name: ngx\n    image: nginx:latest\n    imagePullPolicy: IfNotPresent\n    env:\n      - name: TZ\n        value: Asia/Shanghai\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u6302\u8f7d\u4e3b\u673a\u65f6\u533a\u6587\u4ef6\u8bbe\u7f6e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-vol-tz\nspec:\n  containers:\n  - name: ngx\n    image: nginx:latest\n    imagePullPolicy: IfNotPresent\n    volumeMounts:\n    - name: tz-config\n      mountPath: /etc/localtime\n      readOnly: true\n  volumes:\n  - name: tz-config\n    hostPath:\n      path: /etc/localtime\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,c.jsx)(n.a,{href:"https://developer.aliyun.com/article/637809#slide-0",children:"https://developer.aliyun.com/article/637809#slide-0"})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var c=s(79474);const l={},r=c.createContext(l);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);