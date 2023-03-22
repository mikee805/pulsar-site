"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63739],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(k,i(i({ref:r},p),{},{components:t})):n.createElement(k,i({ref:r},p))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41560:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose"},i=void 0,s={unversionedId:"getting-started-docker-compose",id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",description:"Configure the compose.yml template",source:"@site/docs/getting-started-docker-compose.md",sourceDirName:".",slug:"/getting-started-docker-compose",permalink:"/docs/next/getting-started-docker-compose",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/getting-started-docker-compose.md",tags:[],version:"current",frontMatter:{id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose"},sidebar:"docsSidebar",previous:{title:"Run Pulsar in Kubernetes",permalink:"/docs/next/getting-started-helm"},next:{title:"Overview",permalink:"/docs/next/concepts-overview"}},l={},c=[{value:"Configure the <code>compose.yml</code> template",id:"configure-the-composeyml-template",level:2},{value:"Create a Pulsar cluster",id:"create-a-pulsar-cluster",level:2}],p={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configure-the-composeyml-template"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"h2"},"compose.yml")," template"),(0,o.kt)("p",null,"To get up and run a Pulsar cluster quickly, you can use the following template to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," file by modifying or adding the configurations in the ",(0,o.kt)("strong",{parentName:"p"},"environment")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nnetworks:\n  pulsar:\n    driver: bridge\nservices:\n  # Start zookeeper\n  zookeeper:\n    image: apachepulsar/pulsar:latest\n    container_name: zookeeper\n    restart: on-failure\n    networks:\n      - pulsar\n    volumes:\n      - ./data/zookeeper:/pulsar/data/zookeeper\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - PULSAR_MEM=-Xms256m -Xmx256m -XX:MaxDirectMemorySize=256m\n    command: >\n      bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && \\\n             bin/generate-zookeeper-config.sh conf/zookeeper.conf && \\\n             exec bin/pulsar zookeeper"\n    healthcheck:\n      test: ["CMD", "bin/pulsar-zookeeper-ruok.sh"]\n      interval: 10s\n      timeout: 5s\n      retries: 30\n\n  # Init cluster metadata\n  pulsar-init:\n    container_name: pulsar-init\n    hostname: pulsar-init\n    image: apachepulsar/pulsar:latest\n    networks:\n      - pulsar\n    command: >\n      bin/pulsar initialize-cluster-metadata \\\n               --cluster cluster-a \\\n               --zookeeper zookeeper:2181 \\\n               --configuration-store zookeeper:2181 \\\n               --web-service-url http://broker:8080 \\\n               --broker-service-url pulsar://broker:6650\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n\n  # Start bookie\n  bookie:\n    image: apachepulsar/pulsar:latest\n    container_name: bookie\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - clusterName=cluster-a\n      - zkServers=zookeeper:2181\n      - metadataServiceUri=metadata-store:zk:zookeeper:2181\n      # otherwise every time we run docker compose uo or down we fail to start due to Cookie\n      # See: https://github.com/apache/bookkeeper/blob/405e72acf42bb1104296447ea8840d805094c787/bookkeeper-server/src/main/java/org/apache/bookkeeper/bookie/Cookie.java#L57-68\n      - advertisedAddress=bookie\n      - BOOKIE_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      pulsar-init:\n        condition: service_completed_successfully\n    # Map the local directory to the container to avoid bookie startup failure due to insufficient container disks.\n    volumes:\n      - ./data/bookkeeper:/pulsar/data/bookkeeper\n    command: bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n\n  # Start broker\n  broker:\n    image: apachepulsar/pulsar:latest\n    container_name: broker\n    hostname: broker\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - zookeeperServers=zookeeper:2181\n      - clusterName=cluster-a\n      - managedLedgerDefaultEnsembleSize=1\n      - managedLedgerDefaultWriteQuorum=1\n      - managedLedgerDefaultAckQuorum=1\n      - advertisedAddress=broker\n      - advertisedListeners=external:pulsar://127.0.0.1:6650\n      - PULSAR_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      bookie:\n        condition: service_started\n    ports:\n      - "6650:6650"\n      - "8080:8080"\n    command: bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n')),(0,o.kt)("h2",{id:"create-a-pulsar-cluster"},"Create a Pulsar cluster"),(0,o.kt)("p",null,"To create a Pulsar cluster by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," file, run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("p",null,"If you want to destroy the Pulsar cluster with all the containers, run the following command. It will also delete the network that the containers are connected to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")))}m.isMDXComponent=!0}}]);