(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd9abe4"],{"0d3b":function(e,t,r){var n=r("d039"),a=r("b622"),o=r("c430"),i=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[i]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function u(e){n(i,a,o,u,s,"next",e)}function s(e){n(i,a,o,u,s,"throw",e)}u(void 0)}))}}},"2b3d":function(e,t,r){"use strict";r("3ca3");var n,a=r("23e7"),o=r("83ab"),i=r("0d3b"),u=r("da84"),s=r("37e8"),c=r("6eeb"),l=r("19aa"),h=r("5135"),f=r("60da"),p=r("4df4"),d=r("6547").codeAt,v=r("5fb2"),m=r("d44e"),g=r("9861"),y=r("69f3"),w=u.URL,b=g.URLSearchParams,L=g.getState,x=y.set,S=y.getterFor("URL"),k=Math.floor,R=Math.pow,E="Invalid authority",A="Invalid scheme",U="Invalid host",P="Invalid port",q=/[A-Za-z]/,T=/[\d+-.A-Za-z]/,j=/\d/,_=/^(0x|0X)/,C=/^[0-7]+$/,O=/^\d+$/,$=/^[\dA-Fa-f]+$/,B=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,N=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,F=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,I=/[\u0009\u000A\u000D]/g,G=function(e,t){var r,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return U;if(r=D(t.slice(1,-1)),!r)return U;e.host=r}else if(K(e)){if(t=v(t),B.test(t))return U;if(r=M(t),null===r)return U;e.host=r}else{if(N.test(t))return U;for(r="",n=p(t),a=0;a<n.length;a++)r+=Q(n[a],z);e.host=r}},M=function(e){var t,r,n,a,o,i,u,s=e.split(".");if(s.length&&""==s[s.length-1]&&s.pop(),t=s.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=s[n],""==a)return e;if(o=10,a.length>1&&"0"==a.charAt(0)&&(o=_.test(a)?16:8,a=a.slice(8==o?1:2)),""===a)i=0;else{if(!(10==o?O:8==o?C:$).test(a))return e;i=parseInt(a,o)}r.push(i)}for(n=0;n<t;n++)if(i=r[n],n==t-1){if(i>=R(256,5-t))return null}else if(i>255)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*R(256,3-n);return u},D=function(e){var t,r,n,a,o,i,u,s=[0,0,0,0,0,0,0,0],c=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,c++,l=c}while(f()){if(8==c)return;if(":"!=f()){t=r=0;while(r<4&&$.test(f()))t=16*t+parseInt(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,c>6)return;n=0;while(f()){if(a=null,n>0){if(!("."==f()&&n<4))return;h++}if(!j.test(f()))return;while(j.test(f())){if(o=parseInt(f(),10),null===a)a=o;else{if(0==a)return;a=10*a+o}if(a>255)return;h++}s[c]=256*s[c]+a,n++,2!=n&&4!=n||c++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;s[c++]=t}else{if(null!==l)return;h++,c++,l=c}}if(null!==l){i=c-l,c=7;while(0!=c&&i>0)u=s[c],s[c--]=s[l+i-1],s[l+--i]=u}else if(8!=c)return;return s},V=function(e){for(var t=null,r=1,n=null,a=0,o=0;o<8;o++)0!==e[o]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=o),++a);return a>r&&(t=n,r=a),t},H=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=V(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},z={},J=f({},z,{" ":1,'"':1,"<":1,">":1,"`":1}),Y=f({},J,{"#":1,"?":1,"{":1,"}":1}),Z=f({},Y,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Q=function(e,t){var r=d(e,0);return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(e){return h(X,e.scheme)},W=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var r;return 2==e.length&&q.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},re=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},oe=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},ie={},ue={},se={},ce={},le={},he={},fe={},pe={},de={},ve={},me={},ge={},ye={},we={},be={},Le={},xe={},Se={},ke={},Re={},Ee={},Ae=function(e,t,r,a){var o,i,u,s,c=r||ie,l=0,f="",d=!1,v=!1,m=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(F,"")),t=t.replace(I,""),o=p(t);while(l<=o.length){switch(i=o[l],c){case ie:if(!i||!q.test(i)){if(r)return A;c=se;continue}f+=i.toLowerCase(),c=ue;break;case ue:if(i&&(T.test(i)||"+"==i||"-"==i||"."==i))f+=i.toLowerCase();else{if(":"!=i){if(r)return A;f="",c=se,l=0;continue}if(r&&(K(e)!=h(X,f)||"file"==f&&(W(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,r)return void(K(e)&&X[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?c=we:K(e)&&a&&a.scheme==e.scheme?c=ce:K(e)?c=pe:"/"==o[l+1]?(c=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),c=ke)}break;case se:if(!a||a.cannotBeABaseURL&&"#"!=i)return A;if(a.cannotBeABaseURL&&"#"==i){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,c=Ee;break}c="file"==a.scheme?we:he;continue;case ce:if("/"!=i||"/"!=o[l+1]){c=he;continue}c=de,l++;break;case le:if("/"==i){c=ve;break}c=Se;continue;case he:if(e.scheme=a.scheme,i==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==i||"\\"==i&&K(e))c=fe;else if("?"==i)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",c=Re;else{if("#"!=i){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),c=Se;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=Ee}break;case fe:if(!K(e)||"/"!=i&&"\\"!=i){if("/"!=i){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,c=Se;continue}c=ve}else c=de;break;case pe:if(c=de,"/"!=i||"/"!=f.charAt(l+1))continue;l++;break;case de:if("/"!=i&&"\\"!=i){c=ve;continue}break;case ve:if("@"==i){d&&(f="%40"+f),d=!0,u=p(f);for(var g=0;g<u.length;g++){var y=u[g];if(":"!=y||m){var w=Q(y,Z);m?e.password+=w:e.username+=w}else m=!0}f=""}else if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)){if(d&&""==f)return E;l-=p(f).length+1,f="",c=me}else f+=i;break;case me:case ge:if(r&&"file"==e.scheme){c=Le;continue}if(":"!=i||v){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)){if(K(e)&&""==f)return U;if(r&&""==f&&(W(e)||null!==e.port))return;if(s=G(e,f),s)return s;if(f="",c=xe,r)return;continue}"["==i?v=!0:"]"==i&&(v=!1),f+=i}else{if(""==f)return U;if(s=G(e,f),s)return s;if(f="",c=ye,r==ge)return}break;case ye:if(!j.test(i)){if(i==n||"/"==i||"?"==i||"#"==i||"\\"==i&&K(e)||r){if(""!=f){var b=parseInt(f,10);if(b>65535)return P;e.port=K(e)&&b===X[e.scheme]?null:b,f=""}if(r)return;c=xe;continue}return P}f+=i;break;case we:if(e.scheme="file","/"==i||"\\"==i)c=be;else{if(!a||"file"!=a.scheme){c=Se;continue}if(i==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==i)e.host=a.host,e.path=a.path.slice(),e.query="",c=Re;else{if("#"!=i){re(o.slice(l).join(""))||(e.host=a.host,e.path=a.path.slice(),ne(e)),c=Se;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",c=Ee}}break;case be:if("/"==i||"\\"==i){c=Le;break}a&&"file"==a.scheme&&!re(o.slice(l).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),c=Se;continue;case Le:if(i==n||"/"==i||"\\"==i||"?"==i||"#"==i){if(!r&&te(f))c=Se;else if(""==f){if(e.host="",r)return;c=xe}else{if(s=G(e,f),s)return s;if("localhost"==e.host&&(e.host=""),r)return;f="",c=xe}continue}f+=i;break;case xe:if(K(e)){if(c=Se,"/"!=i&&"\\"!=i)continue}else if(r||"?"!=i)if(r||"#"!=i){if(i!=n&&(c=Se,"/"!=i))continue}else e.fragment="",c=Ee;else e.query="",c=Re;break;case Se:if(i==n||"/"==i||"\\"==i&&K(e)||!r&&("?"==i||"#"==i)){if(oe(f)?(ne(e),"/"==i||"\\"==i&&K(e)||e.path.push("")):ae(f)?"/"==i||"\\"==i&&K(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(i==n||"?"==i||"#"==i))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==i?(e.query="",c=Re):"#"==i&&(e.fragment="",c=Ee)}else f+=Q(i,Y);break;case ke:"?"==i?(e.query="",c=Re):"#"==i?(e.fragment="",c=Ee):i!=n&&(e.path[0]+=Q(i,z));break;case Re:r||"#"!=i?i!=n&&("'"==i&&K(e)?e.query+="%27":e.query+="#"==i?"%23":Q(i,z)):(e.fragment="",c=Ee);break;case Ee:i!=n&&(e.fragment+=Q(i,J));break}l++}},Ue=function(e){var t,r,n=l(this,Ue,"URL"),a=arguments.length>1?arguments[1]:void 0,i=String(e),u=x(n,{type:"URL"});if(void 0!==a)if(a instanceof Ue)t=S(a);else if(r=Ae(t={},String(a)),r)throw TypeError(r);if(r=Ae(u,i,null,t),r)throw TypeError(r);var s=u.searchParams=new b,c=L(s);c.updateSearchParams(u.query),c.updateURL=function(){u.query=String(s)||null},o||(n.href=qe.call(n),n.origin=Te.call(n),n.protocol=je.call(n),n.username=_e.call(n),n.password=Ce.call(n),n.host=Oe.call(n),n.hostname=$e.call(n),n.port=Be.call(n),n.pathname=Ne.call(n),n.search=Fe.call(n),n.searchParams=Ie.call(n),n.hash=Ge.call(n))},Pe=Ue.prototype,qe=function(){var e=S(this),t=e.scheme,r=e.username,n=e.password,a=e.host,o=e.port,i=e.path,u=e.query,s=e.fragment,c=t+":";return null!==a?(c+="//",W(e)&&(c+=r+(n?":"+n:"")+"@"),c+=H(a),null!==o&&(c+=":"+o)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?i[0]:i.length?"/"+i.join("/"):"",null!==u&&(c+="?"+u),null!==s&&(c+="#"+s),c},Te=function(){var e=S(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&K(e)?t+"://"+H(e.host)+(null!==r?":"+r:""):"null"},je=function(){return S(this).scheme+":"},_e=function(){return S(this).username},Ce=function(){return S(this).password},Oe=function(){var e=S(this),t=e.host,r=e.port;return null===t?"":null===r?H(t):H(t)+":"+r},$e=function(){var e=S(this).host;return null===e?"":H(e)},Be=function(){var e=S(this).port;return null===e?"":String(e)},Ne=function(){var e=S(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fe=function(){var e=S(this).query;return e?"?"+e:""},Ie=function(){return S(this).searchParams},Ge=function(){var e=S(this).fragment;return e?"#"+e:""},Me=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(o&&s(Pe,{href:Me(qe,(function(e){var t=S(this),r=String(e),n=Ae(t,r);if(n)throw TypeError(n);L(t.searchParams).updateSearchParams(t.query)})),origin:Me(Te),protocol:Me(je,(function(e){var t=S(this);Ae(t,String(e)+":",ie)})),username:Me(_e,(function(e){var t=S(this),r=p(String(e));if(!ee(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=Q(r[n],Z)}})),password:Me(Ce,(function(e){var t=S(this),r=p(String(e));if(!ee(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=Q(r[n],Z)}})),host:Me(Oe,(function(e){var t=S(this);t.cannotBeABaseURL||Ae(t,String(e),me)})),hostname:Me($e,(function(e){var t=S(this);t.cannotBeABaseURL||Ae(t,String(e),ge)})),port:Me(Be,(function(e){var t=S(this);ee(t)||(e=String(e),""==e?t.port=null:Ae(t,e,ye))})),pathname:Me(Ne,(function(e){var t=S(this);t.cannotBeABaseURL||(t.path=[],Ae(t,e+"",xe))})),search:Me(Fe,(function(e){var t=S(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ae(t,e,Re)),L(t.searchParams).updateSearchParams(t.query)})),searchParams:Me(Ie),hash:Me(Ge,(function(e){var t=S(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ae(t,e,Ee)):t.fragment=null}))}),c(Pe,"toJSON",(function(){return qe.call(this)}),{enumerable:!0}),c(Pe,"toString",(function(){return qe.call(this)}),{enumerable:!0}),w){var De=w.createObjectURL,Ve=w.revokeObjectURL;De&&c(Ue,"createObjectURL",(function(e){return De.apply(w,arguments)})),Ve&&c(Ue,"revokeObjectURL",(function(e){return Ve.apply(w,arguments)}))}m(Ue,"URL"),a({global:!0,forced:!i,sham:!o},{URL:Ue})},"31f6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form"},[r("center",[r("h3",[e._v(e._s(this.titulo))]),r("router-link",{attrs:{to:"/",tag:"button"}},[e._v(" Voltar ")])],1),r("div",{staticClass:"form"},[r("fieldset",[r("legend",[e._v("ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.id,expression:"acervo.id"}],attrs:{type:"text",readonly:""},domProps:{value:e.acervo.id},on:{input:function(t){t.target.composing||e.$set(e.acervo,"id",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Editora")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.idEditora,expression:"acervo.idEditora"}],attrs:{type:"text"},domProps:{value:e.acervo.idEditora},on:{input:function(t){t.target.composing||e.$set(e.acervo,"idEditora",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Titulo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.titulo,expression:"acervo.titulo"}],attrs:{type:"text"},domProps:{value:e.acervo.titulo},on:{input:function(t){t.target.composing||e.$set(e.acervo,"titulo",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Autor")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.autor,expression:"acervo.autor"}],attrs:{type:"text"},domProps:{value:e.acervo.autor},on:{input:function(t){t.target.composing||e.$set(e.acervo,"autor",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Ano")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.ano,expression:"acervo.ano"}],attrs:{type:"text"},domProps:{value:e.acervo.ano},on:{input:function(t){t.target.composing||e.$set(e.acervo,"ano",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Preço")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.preco,expression:"acervo.preco"}],attrs:{type:"text"},domProps:{value:e.acervo.preco},on:{input:function(t){t.target.composing||e.$set(e.acervo,"preco",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Quantidade")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.quantidade,expression:"acervo.quantidade"}],attrs:{type:"text"},domProps:{value:e.acervo.quantidade},on:{input:function(t){t.target.composing||e.$set(e.acervo,"quantidade",t.target.value)}}})]),r("fieldset",[r("legend",[e._v("Tipo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.acervo.tipo,expression:"acervo.tipo"}],attrs:{type:"text"},domProps:{value:e.acervo.tipo},on:{input:function(t){t.target.composing||e.$set(e.acervo,"tipo",t.target.value)}}})]),"Cadastrar"==this.$route.name?r("fieldset",[r("input",{attrs:{type:"submit",value:"Cadastrar"},on:{click:function(t){return e.cadastrar()}}})]):e._e(),"Editar"==this.$route.name?r("fieldset",[r("input",{attrs:{type:"submit",value:"Editar"},on:{click:function(t){return e.editar()}}})]):e._e(),"Excluir"==this.$route.name?r("fieldset",[r("input",{attrs:{type:"submit",value:"Excluir"},on:{click:function(t){return e.excluir()}}})]):e._e()])],1)},a=[],o=(r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),i={name:"Formulario",data:function(){return{titulo:"",acervo:{id:"",idEditora:"",titulo:"",autor:"",ano:"",preco:"",quantidade:"",tipo:""}}},created:function(){"Visualizar"==this.$route.name?(this.titulo="Visualizar Registro",this.get(this.$route.params.id)):"Excluir"==this.$route.name?(this.titulo="Excluir Registro",this.get(this.$route.params.id)):"Editar"==this.$route.name&&(this.titulo="Editar Registro",this.get(this.$route.params.id))},methods:{get:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this,e.next=3,fetch("http://exemplos.dmmaycon.com/bibli-php/acervo/".concat(t),{method:"GET"}).then((function(e){e.json().then((function(e){r.acervo=e[0]}))})).catch((function(e){return console.error("Erro na requisição: ",e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),cadastrar:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,r=new Headers,r.append("Content-Type","application/x-www-form-urlencoded"),n=new URLSearchParams,n.append("idEditora",t.acervo.idEditora),n.append("titulo",t.acervo.titulo),n.append("autor",t.acervo.autor),n.append("ano",t.acervo.ano),n.append("preco",t.acervo.preco),n.append("quantidade",t.acervo.quantidade),n.append("tipo",t.acervo.tipo),e.next=13,fetch("http://exemplos.dmmaycon.com/bibli-php/acervo",{method:"POST",headers:r,body:n,mode:"cors",redirect:"follow"}).then((function(e){if(201==e.status)return t.$router.push({name:"Lista"})})).catch((function(e){return console.error("Erro na requisição: ",e)}));case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),editar:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this,r=new Headers,r.append("Content-Type","application/x-www-form-urlencoded"),n=new URLSearchParams,n.append("id",t.acervo.id),n.append("idEditora",t.acervo.idEditora),n.append("titulo",t.acervo.titulo),n.append("autor",t.acervo.autor),n.append("ano",t.acervo.ano),n.append("preco",t.acervo.preco),n.append("quantidade",t.acervo.quantidade),n.append("tipo",t.acervo.tipo),e.next=14,fetch("http://exemplos.dmmaycon.com/bibli-php/acervo",{method:"PUT",headers:r,body:n,mode:"cors",redirect:"follow"}).then((function(e){if(200==e.status)return alert("Registro atualizado com sucesso!"),t.$router.push({name:"Lista"})})).catch((function(e){return console.error("Erro na requisição: ",e)}));case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),excluir:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(confirm("Deseja realmente excluir este registro?")){e.next=2;break}return e.abrupt("return",null);case 2:return t=this,r=new Headers,r.append("Content-Type","application/x-www-form-urlencoded"),n=new URLSearchParams,n.append("id",t.acervo.id),e.next=9,fetch("http://exemplos.dmmaycon.com/bibli-php/acervo",{method:"DELETE",headers:r,body:n,mode:"cors",redirect:"follow"}).then((function(e){if(200==e.status)return alert("Registro excluido com sucesso!"),t.$router.push({name:"Lista"})})).catch((function(e){return console.error("Erro na requisição: ",e)}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},u=i,s=(r("4136"),r("2877")),c=Object(s["a"])(u,n,a,!1,null,null,null);t["default"]=c.exports},"3ca3":function(e,t,r){"use strict";var n=r("6547").charAt,a=r("69f3"),o=r("7dd0"),i="String Iterator",u=a.set,s=a.getterFor(i);o(String,"String",(function(e){u(this,{type:i,string:String(e),index:0})}),(function(){var e,t=s(this),r=t.string,a=t.index;return a>=r.length?{value:void 0,done:!0}:(e=n(r,a),t.index+=e.length,{value:e,done:!1})}))},4136:function(e,t,r){"use strict";var n=r("5086"),a=r.n(n);a.a},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),u=r("50c4"),s=r("8418"),c=r("35a1");e.exports=function(e){var t,r,l,h,f,p,d=a(e),v="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,y=void 0!==g,w=c(d),b=0;if(y&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==w||v==Array&&i(w))for(t=u(d.length),r=new v(t);t>b;b++)p=y?g(d[b],b):d[b],s(r,b,p);else for(h=w.call(d),f=h.next,r=new v;!(l=f.call(h)).done;b++)p=y?o(h,g,[l.value,b],!0):l.value,s(r,b,p);return r.length=b,r}},5086:function(e,t,r){},"5fb2":function(e,t,r){"use strict";var n=2147483647,a=36,o=1,i=26,u=38,s=700,c=72,l=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=a-o,m=Math.floor,g=String.fromCharCode,y=function(e){var t=[],r=0,n=e.length;while(r<n){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var o=e.charCodeAt(r++);56320==(64512&o)?t.push(((1023&a)<<10)+(1023&o)+65536):(t.push(a),r--)}else t.push(a)}return t},w=function(e){return e+22+75*(e<26)},b=function(e,t,r){var n=0;for(e=r?m(e/s):e>>1,e+=m(e/t);e>v*i>>1;n+=a)e=m(e/v);return m(n+(v+1)*e/(e+u))},L=function(e){var t=[];e=y(e);var r,u,s=e.length,f=l,p=0,v=c;for(r=0;r<e.length;r++)u=e[r],u<128&&t.push(g(u));var L=t.length,x=L;L&&t.push(h);while(x<s){var S=n;for(r=0;r<e.length;r++)u=e[r],u>=f&&u<S&&(S=u);var k=x+1;if(S-f>m((n-p)/k))throw RangeError(d);for(p+=(S-f)*k,f=S,r=0;r<e.length;r++){if(u=e[r],u<f&&++p>n)throw RangeError(d);if(u==f){for(var R=p,E=a;;E+=a){var A=E<=v?o:E>=v+i?i:E-v;if(R<A)break;var U=R-A,P=a-A;t.push(g(w(A+U%P))),R=m(U/P)}t.push(g(w(R))),v=b(p,k,x==L),p=0,++x}}++p,++f}return t.join("")};e.exports=function(e){var t,r,n=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)r=a[t],n.push(f.test(r)?"xn--"+L(r):r);return n.join(".")}},6547:function(e,t,r){var n=r("a691"),a=r("1d80"),o=function(e){return function(t,r){var o,i,u=String(a(t)),s=n(r),c=u.length;return s<0||s>=c?e?"":void 0:(o=u.charCodeAt(s),o<55296||o>56319||s+1===c||(i=u.charCodeAt(s+1))<56320||i>57343?e?u.charAt(s):o:e?u.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},8418:function(e,t,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var i=n(t);i in e?a.f(e,i,o(0,r)):e[i]=r}},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new U(n||[]);return o._invoke=k(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function v(){}function m(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,o)&&(y=b);var L=g.prototype=v.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e,t){function r(a,o,i,u){var s=c(e[a],e,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,u)}))}u(s.arg)}var a;function o(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(e,t,r){var n=l;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return q()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var u=R(i,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=c(e,t,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=c(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:t,done:!0}}return m.prototype=L.constructor=g,g.constructor=m,g[u]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},x(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(L),L[u]="Generator",L[o]=function(){return this},L.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return u.type="throw",u.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},9861:function(e,t,r){"use strict";r("e260");var n=r("23e7"),a=r("d066"),o=r("0d3b"),i=r("6eeb"),u=r("e2cc"),s=r("d44e"),c=r("9ed3"),l=r("69f3"),h=r("19aa"),f=r("5135"),p=r("0366"),d=r("f5df"),v=r("825a"),m=r("861d"),g=r("7c73"),y=r("5c6c"),w=r("9a1f"),b=r("35a1"),L=r("b622"),x=a("fetch"),S=a("Headers"),k=L("iterator"),R="URLSearchParams",E=R+"Iterator",A=l.set,U=l.getterFor(R),P=l.getterFor(E),q=/\+/g,T=Array(4),j=function(e){return T[e-1]||(T[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},_=function(e){try{return decodeURIComponent(e)}catch(t){return e}},C=function(e){var t=e.replace(q," "),r=4;try{return decodeURIComponent(t)}catch(n){while(r)t=t.replace(j(r--),_);return t}},O=/[!'()~]|%20/g,$={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},B=function(e){return $[e]},N=function(e){return encodeURIComponent(e).replace(O,B)},F=function(e,t){if(t){var r,n,a=t.split("&"),o=0;while(o<a.length)r=a[o++],r.length&&(n=r.split("="),e.push({key:C(n.shift()),value:C(n.join("="))}))}},I=function(e){this.entries.length=0,F(this.entries,e)},G=function(e,t){if(e<t)throw TypeError("Not enough arguments")},M=c((function(e,t){A(this,{type:E,iterator:w(U(e).entries),kind:t})}),"Iterator",(function(){var e=P(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),D=function(){h(this,D,R);var e,t,r,n,a,o,i,u,s,c=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(A(l,{type:R,entries:p,updateURL:function(){},updateSearchParams:I}),void 0!==c)if(m(c))if(e=b(c),"function"===typeof e){t=e.call(c),r=t.next;while(!(n=r.call(t)).done){if(a=w(v(n.value)),o=a.next,(i=o.call(a)).done||(u=o.call(a)).done||!o.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:i.value+"",value:u.value+""})}}else for(s in c)f(c,s)&&p.push({key:s,value:c[s]+""});else F(p,"string"===typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},V=D.prototype;u(V,{append:function(e,t){G(arguments.length,2);var r=U(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){G(arguments.length,1);var t=U(this),r=t.entries,n=e+"",a=0;while(a<r.length)r[a].key===n?r.splice(a,1):a++;t.updateURL()},get:function(e){G(arguments.length,1);for(var t=U(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){G(arguments.length,1);for(var t=U(this).entries,r=e+"",n=[],a=0;a<t.length;a++)t[a].key===r&&n.push(t[a].value);return n},has:function(e){G(arguments.length,1);var t=U(this).entries,r=e+"",n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){G(arguments.length,1);for(var r,n=U(this),a=n.entries,o=!1,i=e+"",u=t+"",s=0;s<a.length;s++)r=a[s],r.key===i&&(o?a.splice(s--,1):(o=!0,r.value=u));o||a.push({key:i,value:u}),n.updateURL()},sort:function(){var e,t,r,n=U(this),a=n.entries,o=a.slice();for(a.length=0,r=0;r<o.length;r++){for(e=o[r],t=0;t<r;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===r&&a.push(e)}n.updateURL()},forEach:function(e){var t,r=U(this).entries,n=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new M(this,"keys")},values:function(){return new M(this,"values")},entries:function(){return new M(this,"entries")}},{enumerable:!0}),i(V,k,V.entries),i(V,"toString",(function(){var e,t=U(this).entries,r=[],n=0;while(n<t.length)e=t[n++],r.push(N(e.key)+"="+N(e.value));return r.join("&")}),{enumerable:!0}),s(D,R),n({global:!0,forced:!o},{URLSearchParams:D}),o||"function"!=typeof x||"function"!=typeof S||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,a=[e];return arguments.length>1&&(t=arguments[1],m(t)&&(r=t.body,d(r)===R&&(n=t.headers?new S(t.headers):new S,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:y(0,String(r)),headers:y(0,n)}))),a.push(t)),x.apply(this,a)}}),e.exports={URLSearchParams:D,getState:U}},"9a1f":function(e,t,r){var n=r("825a"),a=r("35a1");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,u=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(u)[1]}catch(e){return""}}})},ddb0:function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("e260"),i=r("9112"),u=r("b622"),s=u("iterator"),c=u("toStringTag"),l=o.values;for(var h in a){var f=n[h],p=f&&f.prototype;if(p){if(p[s]!==l)try{i(p,s,l)}catch(v){p[s]=l}if(p[c]||i(p,c,h),a[h])for(var d in o)if(p[d]!==o[d])try{i(p,d,o[d])}catch(v){p[d]=o[d]}}}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2dd9abe4.f1e5fe05.js.map