(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,n){"use strict";n.r(t);n(151),n(153);var a=n(0),r=n.n(a),o=n(141),i=n(146),l=n.n(i),u=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to,target:"_blank"},e.children))},c=function(e){var t=e.children;return r.a.createElement("div",{class:"layout",style:{margin:"0 auto",maxWidth:650,padding:"1.25rem 1rem",styles:l.a}},r.a.createElement("header",{class:"topArea",style:{marginBottom:"1.5rem",styles:l.a}},r.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement("h3",{style:{display:"inline"}},"Hosni Berker")),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(u,{style:{font:"Open Sans"},className:"link",to:"/"},"Home"),r.a.createElement(u,{style:{font:"Open Sans"},to:"/about/"},"About"),r.a.createElement(u,{style:{font:"Open Sans"},to:"/contact/"},"Contact"))),t)},s=function(e){return r.a.createElement("div",{className:e.name},r.a.createElement("h2",{align:"center",className:e.name},r.a.createElement("strong",null,r.a.createElement("a",{href:e.link},r.a.createElement("u",null,e.title)))),r.a.createElement("h3",{align:"center",className:e.name},r.a.createElement("b",null,r.a.createElement("em",null," — ")),e.lang,r.a.createElement("b",null,r.a.createElement("em",null," — "))),r.a.createElement("p",{align:"center",className:e.name},e.excerpt))};t.default=function(){return r.a.createElement(c,{className:"layout",style:{styles:l.a}},r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement(s,{className:"post",name:"post",title:"Cryptography Project",lang:"C++",excerpt:"This project uses three types of ciphers. The first is a Caesar, the second a Vignere, and the third a Polybius.",link:"https://github.com/hberker/Cryptography-Project"}),r.a.createElement(s,{name:"post",title:"Discord Bot",lang:"Java",excerpt:"This bot connects to discord and can be used to run tournaments through the challonge api.\r The bot is called Hal 9000 and can be run from your computer.\r To do this you must connect it through discord.",link:"https://github.com/hberker/Discord-Challonge-Bot"})))}},140:function(e,t,n){"use strict";var a=n(39);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(143)),o=a(n(144)),i=a(n(8)),l=a(n(52)),u=a(n(53)),c=a(n(5)),s=a(n(0)),p=n(16),f=n(141);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,u=t.onMouseEnter,c=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,g=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=d(n);return s.default.createElement(p.Link,(0,o.default)({to:y,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){if(l&&l(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,f.parsePath)(y),a=n.pathname,r=n.hash;if(a===c.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}v(y,{state:h,replace:m})}return!0}},g))},t}(s.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g,y=(g=m,function(e){return s.default.createElement(p.Location,null,function(t){var n=t.location;return s.default.createElement(g,(0,o.default)({location:n},e))})});t.default=y;var v=function(e,t){window.___navigate(e,t)};t.navigate=v;var b=function(e){window.___push(e)};t.push=b;t.replace=function(e){window.___replace(e)};t.navigateTo=function(e){return b(e)}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(140),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(29);n.d(t,"waitForRouteChange",function(){return c.c});var s=n(142),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var f=n(40);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},142:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},143:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},144:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},145:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(54),u=n(1),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,n){},151:function(e,t,n){"use strict";n(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},152:function(e,t,n){var a=n(6),r=n(18),o=n(28),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},153:function(e,t,n){var a=n(27).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(17)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-22703549de99b92805e1.js.map