"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99453],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||s[h]||p;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6138:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),o=["components"],i={id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"},l=void 0,c={unversionedId:"docs/client-java-2.8.2",id:"docs/client-java-2.8.2",title:"Client Java 2.8.2",description:"Java Client] Fix producer data race to get cnx [#13176",source:"@site/release-notes/docs/client-java-2.8.2.md",sourceDirName:"docs",slug:"/docs/client-java-2.8.2",permalink:"/release-notes/docs/client-java-2.8.2",tags:[],version:"current",frontMatter:{id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"}},u={},s=[],m={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"[Java Client]"," Fix producer data race to get cnx ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13176"},"#13176"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Send CloseProducer on timeout ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13161"},"#13161"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Let producer reconnect for state RegisteringSchema ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12781"},"#12781"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use epoch to version producer's cnx to prevent early delivery of messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12779"},"#12779"),(0,p.kt)("br",{parentName:"p"}),"\n","Pulsar Client: restore SchemaInfo.builder() API ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12673"},"#12673"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Remove invalid call to Thread.currentThread().interrupt(); ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12652"},"#12652"),(0,p.kt)("br",{parentName:"p"}),"\n","Add additional error handling in auto partition update task MultiTopicsConsumerImpl ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12620"},"#12620"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix invalid firstSentAt in log message when timeout first time ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12588"},"#12588"),(0,p.kt)("br",{parentName:"p"}),"\n","Update producer stats when producer close ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12500"},"#12500"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix a typo in UnAckedMessageTracker ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12467"},"#12467"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix the retry topic's ",(0,p.kt)("inlineCode",{parentName:"p"},"REAL_TOPIC")," & ",(0,p.kt)("inlineCode",{parentName:"p"},"ORIGIN_MESSAGE_ID")," property ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12451"},"#12451"),(0,p.kt)("br",{parentName:"p"}),"\n","Change the producer fence error log to debug level ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12447"},"#12447"),(0,p.kt)("br",{parentName:"p"}),"\n","[ISSUE-12291][Client]","  'StartMessageId' and 'RollbackDuration' not working in MultiTopicsReader for non-partitioned topics ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12308"},"#12308"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use failPendingMessages to ensure proper cleanup ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12259"},"#12259"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Fixed the producer OOM if got exception while add message to batch container ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12170"},"#12170"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix endless receiveAsync loop in MultiTopicsConsumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12044"},"#12044"),(0,p.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Make Audience Field Optional in OAuth2 Client Credentials ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11988"},"#11988"),(0,p.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on producer close ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11906"},"#11906"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix ConcurrentModificationException in sendAsync ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11884"},"#11884"),(0,p.kt)("br",{parentName:"p"}),"\n","fix seek at batchIndex level receive duplicated messages ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11826"},"#11826"),(0,p.kt)("br",{parentName:"p"}),"\n","[Client]"," Reduce redundant FLOW requests for non-durable multi-topics consumer ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11802"},"#11802")))}h.isMDXComponent=!0}}]);