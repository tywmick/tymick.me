(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{EH0N:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),i=t("8Kt/"),c=t.n(i),s=t("9+7C"),o=t("7vrA"),l=t("SSPt"),m=n.a.createElement;a.default=function(){return m(n.a.Fragment,null,m(c.a,null,m("title",null,"Caesar's cipher \u2013 Ty Mick")),m(o.a,null,m("h1",{className:"mb-4"},"Caesar's cipher algorithm"),m(l.a,{algorithm:function(e){for(var a="",t=0;t<e.length;t++)r(e.charCodeAt(t),[65,77],[97,109])?a+=String.fromCharCode(e.charCodeAt(t)+13):r(e.charCodeAt(t),[78,90],[110,122])?a+=String.fromCharCode(e.charCodeAt(t)-13):a+=e[t];return a;function r(e){for(var a=!1,t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach((function(t){t[0]<=e&&e<=t[1]&&(a=!0)})),a}},argumentName:"str",inputType:"text"}),m("div",{className:"mb-2"},m(s.a,{id:"1a7997c7d07b7e6375f773963df36946"})),m("p",null,"I created this algorithm as a requirement for"," ",m("a",{href:"https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures"},"my freeCodeCamp JavaScript Algorithms and Data Structures Certification"),". It is an implementation of the"," ",m("a",{href:"https://en.wikipedia.org/wiki/ROT13"},"ROT13")," cipher, decoding (or encoding) a given message by replacing each letter with the letter 13 places away from it in the alphabet.")))}},SSPt:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("QojX"),c=t("zUrK"),s=t("6xyR"),o=t("+ryr"),l=t("AYxD"),m=n.a.createElement;a.a=function(e){var a=e.algorithm,t=e.argumentName,n=e.inputType,u=Object(r.useState)(null),p=u[0],h=u[1];return m("div",{className:"mx-2 mx-sm-5 mb-3"},m(i.a,{inline:!0,className:"mb-3 text-monospace"},m(c.a,{className:"w-100"},m(c.a.Prepend,null,m(c.a.Text,{id:"functionName"},a.name,"(","text"===n&&p&&'"')),m(i.a.Control,{type:n,placeholder:t,"aria-label":t,"aria-describedby":"functionName",onChange:function(e){h(e.target.value)}}),m(c.a.Append,null,m(c.a.Text,null,"text"===n&&p&&'"',")")))),m("div",{className:"d-flex align-items-center"},m("h5",{className:"mb-0 mr-3"},"Returns:"),m(s.a,{className:"h5 mb-0"},p?m(o.a,{language:"javascript",style:l.githubGist,className:"px-2 py-1 m-0"},"string"===typeof a(p)?'"'+a(p)+'"':a(p).toString()):m("pre",{className:"px-2 py-1 m-0"},"\xa0"))))}},xL9k:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/caesars-cipher",function(){return t("EH0N")}])}},[["xL9k",0,2,1,3,5]]]);