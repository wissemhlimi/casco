(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[82],{1322:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n(2),a=n(45),i=n(37),o=n(3),s=n(244),l=n(5),u=function(e){return e.prodline.view},d=Object(l.a)([u],(function(e){return e.record})),j={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:u},b=n(0),O=n(658),m=n(755),p=n(1307),f=n(99),h=n(819),x=function(e){var t=Object(a.e)(h.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{to:"/linedoc/".concat(n.id),children:n.linedocTitle})},n.id):Object(r.jsx)("div",{children:n.linedocTitle},n.id);var n}))}):null},v=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(O.a,{}):Object(r.jsxs)(m.a,{children:[Boolean(t.lineTitle)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.prodline.fields.lineTitle"),children:t.lineTitle})),Boolean(t.lineDescr)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.prodline.fields.lineDescr"),children:t.lineDescr})),Boolean(t.lineNoper)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.prodline.fields.lineNoper"),children:t.lineNoper})),Boolean(t.lineDoc)&&Boolean(t.lineDoc.length)&&Object(r.jsx)(p.a.Item,Object(b.a)(Object(b.a)({},m.b),{},{label:Object(o.c)("entities.prodline.fields.lineDoc"),children:Object(r.jsx)(x,{value:t.lineDoc})}))]})},g=n(863),T=n(697),C=n(613),w=n(212),y=n(695),P=n(143),D=n(762),I=n(168),U=n(944),R=n(638),B=function(e){var t=Object(a.d)(),n=Object(i.h)(),c=Object(a.e)(P.a.selectPermissionToRead),s=Object(a.e)(D.a.selectPermissionToEdit),l=Object(a.e)(D.a.selectPermissionToDestroy),u=Object(a.e)(U.a.selectLoading),d=n.params.id;return Object(r.jsxs)(R.a,{children:[s&&Object(r.jsx)(f.a,{to:"/prodline/".concat(d,"/edit"),children:Object(r.jsx)(w.a,{type:"primary",icon:Object(r.jsx)(g.a,{}),children:Object(o.c)("common.edit")})}),l&&Object(r.jsx)(y.a,{title:Object(o.c)("common.areYouSure"),onConfirm:function(){t(I.a.doDestroy(d))},okText:Object(o.c)("common.yes"),cancelText:Object(o.c)("common.no"),children:Object(r.jsx)(w.a,{type:"primary",icon:Object(r.jsx)(T.a,{}),disabled:u,children:Object(o.c)("common.destroy")})}),c&&Object(r.jsx)(f.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(r.jsx)(w.a,{icon:Object(r.jsx)(C.a,{}),children:Object(o.c)("auditLog.menu")})})]})},E=n(627),L=n(629),k=n(628);t.default=function(e){var t=Object(a.d)(),n=Object(i.h)(),l=Object(a.e)(j.selectLoading),u=Object(a.e)(j.selectRecord);return Object(c.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L.a,{items:[[Object(o.c)("dashboard.menu"),"/"],[Object(o.c)("entities.prodline.menu"),"/prodline"],[Object(o.c)("entities.prodline.view.title")]]}),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(k.a,{children:Object(o.c)("entities.prodline.view.title")}),Object(r.jsx)(B,{match:n}),Object(r.jsx)(v,{loading:l,record:u})]})]})}},627:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return c=function(){return e},e}var a=n(185).a.div(c());t.a=a},628:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return c=function(){return e},e}var a=n(185).a.h1(c());t.a=a},629:function(e,t,n){"use strict";var r=n(11),c=n(674),a=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(c.a,{children:e.items.map((function(e){return Object(r.jsx)(c.a.Item,{children:t(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},638:function(e,t,n){"use strict";var r=n(184);function c(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var a=n(185).a.div(c());t.a=a},658:function(e,t,n){"use strict";var r=n(11),c=n(660);n(2);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(c.a,{})})}},755:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(184);function c(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return c=function(){return e},e}var a=n(185).a.div(c()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=a},762:function(e,t,n){"use strict";var r=n(5),c=n(42),a=n(78),i=n(186),o=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodlineRead)})),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodlineEdit)})),l=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodlineCreate)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodlineImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.prodlineDestroy)})),selectPermissionToImport:u};t.a=d},819:function(e,t,n){"use strict";var r=n(5),c=n(42),a=n(78),i=n(186),o=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.linedocRead)})),s=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.linedocEdit)})),l=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.linedocCreate)})),u=Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.linedocImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new a.a(e,t).match(i.a.values.linedocDestroy)})),selectPermissionToImport:u};t.a=d},944:function(e,t,n){"use strict";var r=n(5),c={selectLoading:Object(r.a)([function(e){return e.prodline.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c}}]);