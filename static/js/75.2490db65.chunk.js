(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[75],{1313:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(43),r=n(36),i=n(3),o=n(239),s=n(5),l=function(e){return e.linedoc.view},d=Object(s.a)([l],(function(e){return e.record})),u={selectLoading:Object(s.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},j=n(0),b=n(653),O=n(752),m=n(1286),p=n(910),f=n(12),h=function(e){var t=e.record;return e.loading||!t?Object(f.jsx)(b.a,{}):Object(f.jsxs)(O.a,{children:[Boolean(t.lineId)&&Boolean(t.lineId.length)&&Object(f.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.linedoc.fields.lineId"),children:Object(f.jsx)(p.a,{value:t.lineId})})),Boolean(t.linedocTitle)&&Object(f.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.linedoc.fields.linedocTitle"),children:t.linedocTitle})),Boolean(t.linedocLink)&&Object(f.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.linedoc.fields.linedocLink"),children:t.linedocLink})),Boolean(t.linedocType)&&Object(f.jsx)(m.a.Item,Object(j.a)(Object(j.a)({},O.b),{},{label:Object(i.c)("entities.linedoc.fields.linedocType"),children:t.linedocType}))]})},x=n(850),v=n(692),T=n(608),g=n(206),C=n(690),y=n(95),w=n(139),I=n(821),P=n(170),U=n(935),R=n(634),B=function(e){var t=Object(a.d)(),n=Object(r.h)(),c=Object(a.e)(w.a.selectPermissionToRead),o=Object(a.e)(I.a.selectPermissionToEdit),s=Object(a.e)(I.a.selectPermissionToDestroy),l=Object(a.e)(U.a.selectLoading),d=n.params.id;return Object(f.jsxs)(R.a,{children:[o&&Object(f.jsx)(y.a,{to:"/linedoc/".concat(d,"/edit"),children:Object(f.jsx)(g.a,{type:"primary",icon:Object(f.jsx)(x.a,{}),children:Object(i.c)("common.edit")})}),s&&Object(f.jsx)(C.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(P.a.doDestroy(d))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(f.jsx)(g.a,{type:"primary",icon:Object(f.jsx)(v.a,{}),disabled:l,children:Object(i.c)("common.destroy")})}),c&&Object(f.jsx)(y.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(f.jsx)(g.a,{icon:Object(f.jsx)(T.a,{}),children:Object(i.c)("auditLog.menu")})})]})},L=n(623),k=n(625),D=n(624);t.default=function(e){var t=Object(a.d)(),n=Object(r.h)(),s=Object(a.e)(u.selectLoading),l=Object(a.e)(u.selectRecord);return Object(c.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.linedoc.menu"),"/linedoc"],[Object(i.c)("entities.linedoc.view.title")]]}),Object(f.jsxs)(L.a,{children:[Object(f.jsx)(D.a,{children:Object(i.c)("entities.linedoc.view.title")}),Object(f.jsx)(B,{match:n}),Object(f.jsx)(h,{loading:s,record:l})]})]})}},623:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},624:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.h1(c||(c=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},625:function(e,t,n){"use strict";var c=n(669),a=(n(1),n(95)),r=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(c.a,{children:e.items.map((function(e){return Object(r.jsx)(c.a.Item,{children:t(e)?Object(r.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,t,n){"use strict";var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},653:function(e,t,n){"use strict";var c=n(655),a=(n(1),n(12));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}},752:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c,a=n(183),r=n(184).a.div(c||(c=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},763:function(e,t,n){"use strict";var c=n(5),a=n(40),r=n(77),i=n(185),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.prodlineRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.prodlineEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.prodlineCreate)})),d=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.prodlineImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.prodlineDestroy)})),selectPermissionToImport:d};t.a=u},821:function(e,t,n){"use strict";var c=n(5),a=n(40),r=n(77),i=n(185),o=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.linedocRead)})),s=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.linedocEdit)})),l=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.linedocCreate)})),d=Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.linedocImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(c.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.linedocDestroy)})),selectPermissionToImport:d};t.a=u},910:function(e,t,n){"use strict";n(1);var c=n(95),a=n(43),r=n(763),i=n(12);t.a=function(e){var t=Object(a.e)(r.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(i.jsx)(i.Fragment,{children:n().map((function(e){return n=e,t?Object(i.jsx)("div",{children:Object(i.jsx)(c.a,{to:"/prodline/".concat(n.id),children:n.lineTitle})},n.id):Object(i.jsx)("div",{children:n.lineTitle},n.id);var n}))}):null}},935:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.linedoc.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);