(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"/h46":function(t,e,n){n("cHUd")("Map")},Dodd:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/personal-site",function(){return n("urMD")}])},LX0d:function(t,e,n){t.exports=n("UDep")},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),u=n("5Uuq"),l=n("KI45");e.__esModule=!0,e.default=void 0;var c,h=l(n("LX0d")),p=n("QmWs"),f=u(n("q1tI")),d=l(n("nOHt")),m=n("g/15");function g(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var b=new h.default,y=window.IntersectionObserver,v={};function w(){return c||(y?c=new y((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return r(this,e),(n=i(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:g(t),as:e?g(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,t.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return s(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=v[this.getHref()];this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();d.default.prefetch(t),v[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var i=f.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch()},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),e}(f.Component);e.default=k},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},urMD:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),s=n("YFqc"),u=n.n(s),l=n("7vrA"),c=n("+ryr"),h=n("AYxD"),p=o.a.createElement;e.default=function(){return p(o.a.Fragment,null,p(a.a,null,p("title",null,"About TyMick.me \u2013 Ty Mick")),p(l.a,{className:"cap-width-lg"},p("h1",null,"About"," ",p(u.a,{href:"/"},p("a",null,"TyMick.me"))),p("p",null,"Why yes, I built this site!"," ",p(u.a,{href:"/"},p("a",null,"TyMick.me"))," ","is a static website built with ",p("a",{href:"https://nextjs.org/"},"Next.js")," ","and hosted on ",p("a",{href:"https://pages.github.com/"},"GitHub Pages"),". You can view the"," ",p("a",{href:"https://github.com/tywmick/tywmick.github.io"},"source")," (and the"," ",p("a",{href:"https://github.com/tywmick/tywmick.github.io/tree/master"},"static build"),", if you\u2019d like) on GitHub."),p("p",null,"Static sites may not be where Next.js shines, but I came across the framework when starting to build a server-rendered app that\u2019s been stuck in my head (the beginning stages of which you can find in my"," ",p("a",{href:"https://nextjs-local-authentication.tymick.me/"},"Next.js local authentication with MongoDB")," ","project), and now that I\u2019ve been working in it so long it was the natural choice for building this portfolio site as quickly and efficiently as possible. I\u2019m thinking I may port it to"," ",p("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")," once I start"," ",p(u.a,{href:"/essays"},p("a",null,"writing"))," ","more, but no need to learn a new framework just yet."),p("p",null,"Design I accomplished with"," ",p("a",{href:"https://getbootstrap.com/"},"Bootstrap")," (via"," ",p("a",{href:"https://react-bootstrap.netlify.com/"},"React Bootstrap"),") and a little custom ",p("a",{href:"https://sass-lang.com/"},"Sass"),". Just wanted something minimal."),p("p",null,"If you\u2019re curious how I got separate ",p("code",null,"source")," and"," ",p("code",null,"master")," branches on my"," ",p("a",{href:"https://github.com/tywmick/tywmick.github.io"},p("code",null,"tywmick.github.io"))," ","repository, it went a little something like this:"),p("ul",null,p("li",null,"Renamed my default branch ",p("code",null,"source")),p("li",null,p("a",{href:"https://stackoverflow.com/a/34100189/7133888"},"Created a clean orphan branch")," ","named ",p("code",null,"master")),p("li",null,"Pushed ",p("code",null,"master")," to the remote"),p("li",null,"Installed ",p("a",{href:"https://github.com/tschaub/gh-pages"},"gh-pages")),p("li",null,"Configured my npm scripts like so:",p(c.a,{language:"json",style:h.d,className:"bg-transparent"},'"scripts": {\n  "dev": "next dev",\n  "build": "next build && next export",\n  "start": "next start",\n  "predeploy": "npm run build && touch out/.nojekyll",\n  "deploy": "gh-pages -b master -d out -m Build -t"\n}'))),p("p",null,"I would\u2019ve named the build branch ",p("code",null,"build"),", but alas, GitHub requires that user sites be built from the ",p("code",null,"master")," ","branch.")))}}},[["Dodd",0,2,1,28,29]]]);