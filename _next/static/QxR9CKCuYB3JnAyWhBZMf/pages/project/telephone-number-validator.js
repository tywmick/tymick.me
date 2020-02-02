(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3utE":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/telephone-number-validator",function(){return t("Py8y")}])},Py8y:function(a,e,t){"use strict";t.r(e);var r=t("q1tI"),n=t.n(r),i=t("8Kt/"),s=t.n(i),l=t("9+7C"),c=t("7vrA"),m=t("SSPt"),o=n.a.createElement;e.default=function(){return o(n.a.Fragment,null,o(s.a,null,o("title",null,"Telephone number validator \u2013 Ty Mick")),o(c.a,null,o("h1",{className:"mb-4"},"Telephone number validator algorithm"),o(m.a,{algorithm:function(a){var e;return!!a.match(/\d/g)&&(10==(e=a.match(/\d/g).length)?!(!a.match(/^\(\d{3}\) {0,1}\d{3}-\d{4}$/)&&!a.match(/^\d{3}([ \-]{0,1})\d{3}\1\d{4}$/)):11==e&&!(!a.match(/^1 {0,1}\(\d{3}\) {0,1}\d{3}-\d{4}$/)&&!a.match(/^1 \d{3}([ \-]{0,1})\d{3}\1\d{4}$/)))},argumentName:"str",inputType:"text"}),o("div",{className:"mb-2"},o(l.a,{id:"1e5b0900551a40b2bf22bad0455837aa"})),o("p",null,"I created this algorithm as a requirement for"," ",o("a",{href:"https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures"},"my freeCodeCamp JavaScript Algorithms and Data Structures Certification"),". It checks an entered string of text to see if it looks like a valid United States phone number (according to"," ",o("a",{href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator"},"freeCodeCamp's parameters"),", at least).")))}},SSPt:function(a,e,t){"use strict";var r=t("q1tI"),n=t.n(r),i=t("QojX"),s=t("zUrK"),l=t("6xyR"),c=t("+ryr"),m=t("AYxD"),o=n.a.createElement;e.a=function(a){var e=a.algorithm,t=a.argumentName,n=a.inputType,u=Object(r.useState)(null),d=u[0],p=u[1];return o("div",{className:"mx-2 mx-sm-5 mb-3"},o(i.a,{inline:!0,className:"mb-3 text-monospace"},o(s.a,{className:"w-100"},o(s.a.Prepend,null,o(s.a.Text,{id:"functionName"},e.name,"(","text"===n&&d&&'"')),o(i.a.Control,{type:n,placeholder:t,"aria-label":t,"aria-describedby":"functionName",onChange:function(a){p(a.target.value)}}),o(s.a.Append,null,o(s.a.Text,null,"text"===n&&d&&'"',")")))),o("div",{className:"d-flex align-items-center"},o("h5",{className:"mb-0 mr-3"},"Returns:"),o(l.a,{className:"h5 mb-0"},d?o(c.a,{language:"javascript",style:m.githubGist,className:"px-2 py-1 m-0"},"string"===typeof e(d)?'"'+e(d)+'"':e(d).toString()):o("pre",{className:"px-2 py-1 m-0"},"\xa0"))))}}},[["3utE",0,2,1,3,4]]]);