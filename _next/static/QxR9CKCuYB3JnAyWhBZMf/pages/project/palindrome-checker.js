(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{5241:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),i=t("8Kt/"),l=t.n(i),c=t("9+7C"),s=t("7vrA"),m=t("SSPt"),o=n.a.createElement;a.default=function(){return o(n.a.Fragment,null,o(l.a,null,o("title",null,"Palindrome checker \u2013 Ty Mick")),o(s.a,null,o("h1",{className:"mb-4"},"Palindrome checker algorithm"),o(m.a,{algorithm:function(e){for(var a=e.replace(/[^A-Za-z0-9]/g,"").toLowerCase(),t=0,r=a.length-1,n=!0;t<r;){if(a[t]!=a[r]){n=!1;break}t++,r--}return n},argumentName:"str",inputType:"text"}),o("div",{className:"mb-2"},o(c.a,{id:"06b88ac9366953389df3475b9fa38643"})),o("p",null,"I created this algorithm as a requirement for"," ",o("a",{href:"https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures"},"my freeCodeCamp JavaScript Algorithms and Data Structures Certification"),". It returns ",o("code",null,"true")," if the given string is a palindrome, ignoring letter case and all non-alphanumeric characters. Otherwise, it returns ",o("code",null,"false"),".")))}},SSPt:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("QojX"),l=t("zUrK"),c=t("6xyR"),s=t("+ryr"),m=t("AYxD"),o=n.a.createElement;a.a=function(e){var a=e.algorithm,t=e.argumentName,n=e.inputType,u=Object(r.useState)(null),p=u[0],d=u[1];return o("div",{className:"mx-2 mx-sm-5 mb-3"},o(i.a,{inline:!0,className:"mb-3 text-monospace"},o(l.a,{className:"w-100"},o(l.a.Prepend,null,o(l.a.Text,{id:"functionName"},a.name,"(","text"===n&&p&&'"')),o(i.a.Control,{type:n,placeholder:t,"aria-label":t,"aria-describedby":"functionName",onChange:function(e){d(e.target.value)}}),o(l.a.Append,null,o(l.a.Text,null,"text"===n&&p&&'"',")")))),o("div",{className:"d-flex align-items-center"},o("h5",{className:"mb-0 mr-3"},"Returns:"),o(c.a,{className:"h5 mb-0"},p?o(s.a,{language:"javascript",style:m.githubGist,className:"px-2 py-1 m-0"},"string"===typeof a(p)?'"'+a(p)+'"':a(p).toString()):o("pre",{className:"px-2 py-1 m-0"},"\xa0"))))}},rgDE:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/palindrome-checker",function(){return t("5241")}])}},[["rgDE",0,2,1,3,4]]]);