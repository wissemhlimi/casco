(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[73],{1320:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(817),c=n(818),o=(n(2),n(3)),l=n(221),i=n(627),s=n(45),p=n(184);function u(){var e=Object(p.a)(["\n  padding: 16px;\n  margin-bottom: 16px;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 5px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .title {\n    font-size: 24px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 24px;\n    flex-grow: 0;\n  }\n\n  .pricing {\n    font-size: 36px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 16px;\n    flex-grow: 0;\n  }\n\n  .pricingPeriod {\n    font-size: 16px;\n    font-weight: normal;\n  }\n\n  .description {\n    flex-grow: 1;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n\n  .notPlanUser {\n    text-align: left;\n    font-size: 13px;\n  }\n\n  .cancelAtPeriodEnd {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #de3618;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n\n  .somethingWrong {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #ed8936;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n"]);return u=function(){return e},e}var d=n(185).a.div(u()),f=n(42),b=n(212);function m(e){var t=Object(s.e)(f.a.selectCurrentTenant).plan===l.a.values.free?"current":null;return Object(r.jsxs)(d,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"title",children:Object(o.c)("plan.".concat(l.a.values.free,".label"))}),Object(r.jsxs)("div",{className:"pricing",children:[Object(o.c)("plan.free.price"),Object(r.jsx)("span",{className:"pricingPeriod",children:Object(o.c)("plan.pricingPeriod")})]})]}),Object(r.jsx)("div",{children:"current"===t&&Object(r.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.c)("plan.current")})})]})}var j=n(5),x=n(78),g=n(186),O=function(e){return e.plan},h=Object(j.a)([O],(function(e){return Boolean(e.loading)})),v={selectPermissionToEdit:Object(j.a)([f.a.selectCurrentTenant,f.a.selectCurrentUser],(function(e,t){return new x.a(e,t).match(g.a.values.planEdit)})),selectIsPlanUser:Object(j.a)([f.a.selectCurrentTenant,f.a.selectCurrentUser],(function(e,t){return e.plan===l.a.values.free||"cancel_at_period_end"===e.planStatus||e.planUserId===t.id})),selectLoading:h,selectRaw:O},y=n(182),w=n(213);function E(e){var t=Object(s.d)(),n=e.plan,a=Object(s.e)(f.a.selectCurrentTenant),c=Object(s.e)(v.selectLoading),i=Object(s.e)(v.selectPermissionToEdit),p=Object(s.e)(v.selectIsPlanUser),u=a.plan===n,m=u?"manage":a.plan===l.a.values.free?"payment":"none";return Object(r.jsxs)(d,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"title",children:Object(o.c)("plan.".concat(n,".label"))}),Object(r.jsxs)("div",{className:"pricing",children:[Object(o.c)("plan.".concat(n,".price")),Object(r.jsx)("span",{className:"pricingPeriod",children:Object(o.c)("plan.pricingPeriod")})]})]}),Object(r.jsxs)("div",{children:[u&&"cancel_at_period_end"===a.planStatus&&Object(r.jsx)("p",{className:"cancelAtPeriodEnd",children:Object(o.c)("plan.cancelAtPeriodEnd")}),u&&"error"===a.planStatus&&Object(r.jsx)("p",{className:"somethingWrong",children:Object(o.c)("plan.somethingWrong")}),"payment"===m&&Object(r.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!i||!p||c,onClick:function(){t(y.a.doCheckout(n))},children:Object(o.c)("plan.subscribe")}),"manage"===m&&p&&Object(r.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!i||c,onClick:function(){t(y.a.doPortal())},children:Object(o.c)("plan.manage")}),"manage"===m&&!p&&Object(r.jsx)(w.a,{title:Object(o.c)("plan.notPlanUser"),children:Object(r.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.c)("plan.manage")})})]})]})}var P=n(629),C=n(628);t.default=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("plan.menu")]]}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)(C.a,{children:Object(o.c)("plan.title")}),Object(r.jsxs)(a.a,{gutter:[24,24],children:[Object(r.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(r.jsx)(m,{})}),Object(r.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(r.jsx)(E,{plan:l.a.values.growth})}),Object(r.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(r.jsx)(E,{plan:l.a.values.enterprise})})]})]})]})}},627:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(185).a.div(a());t.a=c},628:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(185).a.h1(a());t.a=c},629:function(e,t,n){"use strict";var r=n(11),a=n(674),c=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},635:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(672))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},672:function(e,t,n){"use strict";var r=n(52),a=n(68);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(2)),o=r(n(673)),l=r(n(75)),i=function(e,t){return c.createElement(l.default,Object.assign({},e,{ref:t,icon:o.default}))};i.displayName="DownOutlined";var s=c.forwardRef(i);t.default=s},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},674:function(e,t,n){"use strict";var r=n(12),a=n.n(r),c=n(18),o=n.n(c),l=n(282),i=n.n(l),s=n(2),p=n(16),u=n.n(p),d=n(79),f=n(635),b=n.n(f),m=n(292),j=n(142),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=function(e){var t,n,r=e.prefixCls,c=e.separator,o=void 0===c?"/":c,l=e.children,i=e.overlay,p=e.dropdownProps,u=x(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,s.useContext(j.b).getPrefixCls)("breadcrumb",r);return t="href"in u?s.createElement("a",a()({className:"".concat(d,"-link")},u),l):s.createElement("span",a()({className:"".concat(d,"-link")},u),l),n=t,t=i?s.createElement(m.a,a()({overlay:i,placement:"bottomCenter"},p),s.createElement("span",{className:"".concat(d,"-overlay-link")},n,s.createElement(b.a,null))):n,l?s.createElement("span",null,t,o&&""!==o&&s.createElement("span",{className:"".concat(d,"-separator")},o)):null};g.__ANT_BREADCRUMB_ITEM=!0;var O=g,h=function(e){var t=e.children,n=(0,s.useContext(j.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var v=h,y=n(597),w=n(76),E=n(40),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function C(e,t,n,r){var a=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?s.createElement("span",null,c):s.createElement("a",{href:"#/".concat(r.join("/"))},c)}var N=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},_=function(e){var t,n=e.prefixCls,r=e.separator,c=void 0===r?"/":r,l=e.style,p=e.className,f=e.routes,b=e.children,m=e.itemRender,x=void 0===m?C:m,g=e.params,h=void 0===g?{}:g,v=P(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),_=s.useContext(j.b),R=_.getPrefixCls,k=_.direction,A=R("breadcrumb",n);if(f&&f.length>0){var T=[];t=f.map((function(e){var t,n=N(e.path,h);return n&&T.push(n),e.children&&e.children.length&&(t=s.createElement(y.a,null,e.children.map((function(e){return s.createElement(y.a.Item,{key:e.path||e.breadcrumbName},x(e,h,f,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=i()(e),a=N(t,n);return a&&r.push(a),r}(T,e.path,h)))})))),s.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},x(e,h,f,T))}))}else b&&(t=Object(d.a)(b).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(E.a)(e,{separator:c,key:t})):e})));var S=u()(A,o()({},"".concat(A,"-rtl"),"rtl"===k),p);return s.createElement("div",a()({className:S,style:l},v),t)};_.Item=O,_.Separator=v;var R=_;t.a=R},817:function(e,t,n){"use strict";var r=n(994);t.a=r.a},818:function(e,t,n){"use strict";var r=n(963);t.a=r.a},904:function(e,t,n){"use strict";var r=n(2),a=Object(r.createContext)({});t.a=a},963:function(e,t,n){"use strict";var r=n(18),a=n.n(r),c=n(12),o=n.n(c),l=n(110),i=n.n(l),s=n(2),p=n(16),u=n.n(p),d=n(904),f=n(142),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var m=["xs","sm","md","lg","xl","xxl"],j=s.forwardRef((function(e,t){var n,r=s.useContext(f.b),c=r.getPrefixCls,l=r.direction,p=s.useContext(d.a),j=p.gutter,x=p.wrap,g=e.prefixCls,O=e.span,h=e.order,v=e.offset,y=e.push,w=e.pull,E=e.className,P=e.children,C=e.flex,N=e.style,_=b(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),R=c("col",g),k={};m.forEach((function(t){var n,r={},c=e[t];"number"===typeof c?r.span=c:"object"===i()(c)&&(r=c||{}),delete _[t],k=o()(o()({},k),(n={},a()(n,"".concat(R,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(R,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(R,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(R,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(R,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(R,"-rtl"),"rtl"===l),n))}));var A=u()(R,(n={},a()(n,"".concat(R,"-").concat(O),void 0!==O),a()(n,"".concat(R,"-order-").concat(h),h),a()(n,"".concat(R,"-offset-").concat(v),v),a()(n,"".concat(R,"-push-").concat(y),y),a()(n,"".concat(R,"-pull-").concat(w),w),n),E,k),T=o()({},N);return j&&(T=o()(o()(o()({},j[0]>0?{paddingLeft:j[0]/2,paddingRight:j[0]/2}:{}),j[1]>0?{paddingTop:j[1]/2,paddingBottom:j[1]/2}:{}),T)),C&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),"auto"!==C||!1!==x||T.minWidth||(T.minWidth=0)),s.createElement("div",o()({},_,{style:T,className:A,ref:t}),P)}));j.displayName="Col",t.a=j},994:function(e,t,n){"use strict";var r=n(12),a=n.n(r),c=n(18),o=n.n(c),l=n(110),i=n.n(l),s=n(38),p=n.n(s),u=n(2),d=n(16),f=n.n(d),b=n(142),m=n(904),j=n(136),x=n(206),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n,r=e.prefixCls,c=e.justify,l=e.align,s=e.className,d=e.style,j=e.children,O=e.gutter,h=void 0===O?0:O,v=e.wrap,y=g(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=u.useContext(b.b),E=w.getPrefixCls,P=w.direction,C=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=p()(C,2),_=N[0],R=N[1],k=u.useRef(h);u.useEffect((function(){var e=x.a.subscribe((function(e){var t=k.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&R(e)}));return function(){return x.a.unsubscribe(e)}}),[]);var A=E("row",r),T=function(){var e=[0,0];return(Array.isArray(h)?h:[h,0]).forEach((function(t,n){if("object"===i()(t))for(var r=0;r<x.b.length;r++){var a=x.b[r];if(_[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),S=f()(A,(n={},o()(n,"".concat(A,"-no-wrap"),!1===v),o()(n,"".concat(A,"-").concat(c),c),o()(n,"".concat(A,"-").concat(l),l),o()(n,"".concat(A,"-rtl"),"rtl"===P),n),s),B=a()(a()(a()({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),d);return u.createElement(m.a.Provider,{value:{gutter:T,wrap:v}},u.createElement("div",a()({},y,{className:S,style:B,ref:t}),j))})));O.displayName="Row",t.a=O}}]);