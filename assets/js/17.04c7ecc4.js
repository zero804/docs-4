(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(t,o,s){"use strict";s.r(o);var e=s(42),r=Object(e.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("h2",{attrs:{id:"horizon-is-not-working"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#horizon-is-not-working"}},[t._v("#")]),t._v(" Horizon is not working")]),t._v(" "),s("p",[t._v("This means that your permissions are wrong somewhere. Make sure that you have run "),s("code",[t._v("php artisan horizon")]),t._v(" as a user that has access to both your repo and to Redis.")]),t._v(" "),s("h2",{attrs:{id:"horizon-seems-to-be-working-but-it-s-still-showing-as-inactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#horizon-seems-to-be-working-but-it-s-still-showing-as-inactive"}},[t._v("#")]),t._v(" Horizon seems to be working, but it's still showing as inactive.")]),t._v(" "),s("p",[t._v("Run either "),s("code",[t._v("php artisan package:discover")]),t._v(" or "),s("code",[t._v("composer install")]),t._v(", then run "),s("code",[t._v("php artisan horizon:install")]),t._v(" then "),s("code",[t._v("php artisan route:cache")]),t._v(". Restart your systemd service or restart Horizon. It should now show as active.")])])}),[],!1,null,null,null);o.default=r.exports}}]);