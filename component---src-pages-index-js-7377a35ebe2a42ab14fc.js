(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t);n(146),n(148);var a=n(0),r=n.n(a),o=n(138),i=n(143),l=n.n(i),s=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to,style:{styles:l.a},target:"_blank"},e.children))},c=function(e){var t=e.children;return r.a.createElement("div",{class:"Header",style:{styles:l.a}},r.a.createElement("hr",null),r.a.createElement("header",{class:"Header",style:{marginBottom:"1.5rem",styles:l.a}},r.a.createElement(o.Link,{class:"Header",to:"/",style:{textShadow:"none"}},r.a.createElement("h3",{class:"title",style:{display:"inline",width:"70%",styles:l.a}},"Hosni Berker")),r.a.createElement("ul",{style:{listStyle:"none",float:"right",styles:l.a}},r.a.createElement(s,{style:{font:"Open Sans"},to:"/"},"Home"),r.a.createElement(s,{style:{font:"Open Sans"},to:"/about/"},"About"),r.a.createElement(s,{style:{font:"Open Sans"},to:"/contact me/"},"Contact"))),t)},u=function(e){return r.a.createElement("div",{className:e.name},r.a.createElement("h2",{align:"center",class:e.name},r.a.createElement("strong",null,r.a.createElement("a",{href:e.link},r.a.createElement("u",null,e.title)))),r.a.createElement("h3",{align:"center",class:e.name},r.a.createElement("b",null,r.a.createElement("em",null," — ")),e.lang,r.a.createElement("b",null,r.a.createElement("em",null," — "))),r.a.createElement("p",{align:"center",class:e.name},e.excerpt))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{class:"Header",style:{styles:l.a}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{class:"bodytext",style:{styles:l.a}},r.a.createElement("ul",null,r.a.createElement(u,{name:"post",title:"Cryptography Project",lang:"C++",excerpt:"This project uses three types of ciphers. The first \r is a Caesar, the second a Vignere, and the third a Polybius.",link:"https://github.com/hberker/Cryptography-Project"}),r.a.createElement(u,{name:"post",title:"Discord Bot",lang:"Java",excerpt:"This bot connects to discord and can be used to run tournaments through the challonge api.\r The bot is called Hal 9000 and can be run from your computer.\r To do this you must connect it through discord.",link:"https://github.com/hberker/Discord-Challonge-Bot"}),r.a.createElement(u,{className:"post",name:"post",title:"Snake",lang:"Java",excerpt:"In this project I recreated the classic game of snake in Java. \r The game is simple: you control a 2-D snake made out of blocks, and direct\r it across the screen as you try to consume apples. Click the link to be taken to the repo.",link:"https://github.com/hberker/Snake"}))))}},137:function(e,t,n){"use strict";var a=n(34);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(140)),o=a(n(141)),i=a(n(7)),l=a(n(48)),s=a(n(49)),c=a(n(4)),u=a(n(0)),d=n(15),p=n(138);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=f(n);return u.default.createElement(d.Link,(0,o.default)({to:y,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var y=m;t.default=y;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},138:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(137),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(139),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(e,t,n){var a;e.exports=(a=n(142))&&a.default||a},140:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},141:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},142:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(50),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},143:function(e,t,n){},146:function(e,t,n){"use strict";n(147)("link",function(e){return function(t){return e(this,"a","href",t)}})},147:function(e,t,n){var a=n(6),r=n(17),o=n(26),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},148:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-7377a35ebe2a42ab14fc.js.map