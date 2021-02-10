(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v1-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-api"}},[t._v("#")]),t._v(" v1 API")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#authorization"}},[t._v("Authorization")])]),a("li",[a("a",{attrs:{href:"#differences-with-mastodon-api"}},[t._v("Differences with Mastodon API")])]),a("li",[a("a",{attrs:{href:"#libraries"}},[t._v("Libraries")]),a("ul",[a("li",[a("a",{attrs:{href:"#php"}},[t._v("PHP")])])])])])]),a("p"),t._v(" "),a("p",[t._v("Our v1 API is based on the "),a("a",{attrs:{href:"https://docs.joinmastodon.org/methods/apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mastodon v1 API"),a("OutboundLink")],1),t._v(". You can reference the Mastodon documentation, we listed the differences below.")]),t._v(" "),a("h2",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[t._v("We use OAuth for api authentication, you can create an OAuth app or Personal Access Token in the Account Settings on Pixelfed.")]),t._v(" "),a("p",[t._v("To create a personal access client :")]),t._v(" "),a("p",[t._v("Add "),a("code",[t._v("OAUTH_ENABLED=true")]),t._v(" to .env")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan passport:keys\nphp artisan config:cache\nphp artisan route:cache\nphp artisan passport:client --personal\n")])])]),a("p",[t._v("You can then create a new token on this page "),a("code",[t._v("/settings/applications")])]),t._v(" "),a("h2",{attrs:{id:"differences-with-mastodon-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences-with-mastodon-api"}},[t._v("#")]),t._v(" Differences with Mastodon API")]),t._v(" "),a("ul",[a("li",[t._v("Some endpoints return empty arrays as they are not applicable to Pixelfed")]),t._v(" "),a("li",[t._v("Link Header Pagination is not supported")]),t._v(" "),a("li",[t._v("Custom limits for captions and albums, they are listed on the /api/v1/instance endpoint")]),t._v(" "),a("li",[t._v("OAuth Tokens will expire after 15 days, and must be refreshed after that")])]),t._v(" "),a("h2",{attrs:{id:"libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[t._v("#")]),t._v(" Libraries")]),t._v(" "),a("h3",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dansup/pixelfed-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("dansup/pixelfed-php"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);