(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[74],{1323:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(2),c=n(45),i=n(37),s=n(3),o=n(252),u=n(5),l=function(e){return e.pRODUCTunit.view},d=Object(u.a)([l],(function(e){return e.record})),j={selectLoading:Object(u.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},b=n(0),O=n(658),m=n(754),p=n(1306),f=n(923),v=n(99),h=n(860),C=function(e){var t=Object(c.e)(h.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{to:"/produr/".concat(n.id),children:n.produrTitle})},n.id):Object(r.jsx)("div",{children:n.produrTitle},n.id);var n}))}):null},T=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(O.a,{}):Object(r.jsxs)(m.a,{children:[Boolean(t.prodId)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.pRODUCTunit.fields.prodId"),children:Object(r.jsx)(f.a,{value:t.prodId})})),Boolean(t.produrId)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.pRODUCTunit.fields.produrId"),children:Object(r.jsx)(C,{value:t.produrId})})),Boolean(t.pRODlineUQ)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(s.c)("entities.pRODUCTunit.fields.pRODlineUQ"),children:t.pRODlineUQ}))]})},x=n(862),g=n(696),U=n(613),R=n(212),w=n(694),y=n(143),D=n(954),P=n(176),I=n(953),E=n(638),B=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(y.a.selectPermissionToRead),o=Object(c.e)(D.a.selectPermissionToEdit),u=Object(c.e)(D.a.selectPermissionToDestroy),l=Object(c.e)(I.a.selectLoading),d=n.params.id;return Object(r.jsxs)(E.a,{children:[o&&Object(r.jsx)(v.a,{to:"/p-r-o-d-u-c-tunit/".concat(d,"/edit"),children:Object(r.jsx)(R.a,{type:"primary",icon:Object(r.jsx)(x.a,{}),children:Object(s.c)("common.edit")})}),u&&Object(r.jsx)(w.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(r.jsx)(R.a,{type:"primary",icon:Object(r.jsx)(g.a,{}),disabled:l,children:Object(s.c)("common.destroy")})}),a&&Object(r.jsx)(v.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(r.jsx)(R.a,{icon:Object(r.jsx)(U.a,{}),children:Object(s.c)("auditLog.menu")})})]})},L=n(627),k=n(629),A=n(628);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),u=Object(c.e)(j.selectLoading),l=Object(c.e)(j.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.pRODUCTunit.menu"),"/p-r-o-d-u-c-tunit"],[Object(s.c)("entities.pRODUCTunit.view.title")]]}),Object(r.jsxs)(L.a,{children:[Object(r.jsx)(A.a,{children:Object(s.c)("entities.pRODUCTunit.view.title")}),Object(r.jsx)(B,{match:n}),Object(r.jsx)(T,{loading:u,record:l})]})]})}},627:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(185).a.div(a());t.a=c},628:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(185).a.h1(a());t.a=c},629:function(e,t,n){"use strict";var r=n(11),a=n(673),c=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},638:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(185).a.div(a());t.a=c},658:function(e,t,n){"use strict";var r=n(11),a=n(659);n(2);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},754:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(184);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(185).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},762:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productDestroy)})),selectPermissionToImport:l};t.a=d},860:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.produrDestroy)})),selectPermissionToImport:l};t.a=d},923:function(e,t,n){"use strict";var r=n(11),a=(n(2),n(99)),c=n(45),i=n(762);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{to:"/product/".concat(n.id),children:n.prodName})},n.id):Object(r.jsx)("div",{children:n.prodName},n.id);var n}))}):null}},953:function(e,t,n){"use strict";var r=n(5),a={selectLoading:Object(r.a)([function(e){return e.pRODUCTunit.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},954:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitCreate)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.pRODUCTunitDestroy)})),selectPermissionToImport:l};t.a=d}}]);