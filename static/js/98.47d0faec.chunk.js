(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[98],{1311:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(43),r=n(36),i=n(3),s=n(238),o=n(5),j=function(e){return e.zap.view},l=Object(o.a)([j],(function(e){return e.record})),b={selectLoading:Object(o.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:j},d=n(0),u=n(653),p=n(752),O=n(1286),m=n(12),f=function(e){var t=e.record;return e.loading||!t?Object(m.jsx)(u.a,{}):Object(m.jsxs)(p.a,{children:[Boolean(t.zapTitle)&&Object(m.jsx)(O.a.Item,Object(d.a)(Object(d.a)({},p.b),{},{label:Object(i.c)("entities.zap.fields.zapTitle"),children:t.zapTitle})),Boolean(t.zapDescr)&&Object(m.jsx)(O.a.Item,Object(d.a)(Object(d.a)({},p.b),{},{label:Object(i.c)("entities.zap.fields.zapDescr"),children:t.zapDescr}))]})},x=n(850),h=n(692),g=n(608),v=n(206),z=n(690),T=n(95),C=n(139),w=n(852),y=n(169),I=n(934),P=n(634),D=function(e){var t=Object(c.d)(),n=Object(r.h)(),a=Object(c.e)(C.a.selectPermissionToRead),s=Object(c.e)(w.a.selectPermissionToEdit),o=Object(c.e)(w.a.selectPermissionToDestroy),j=Object(c.e)(I.a.selectLoading),l=n.params.id;return Object(m.jsxs)(P.a,{children:[s&&Object(m.jsx)(T.a,{to:"/zap/".concat(l,"/edit"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(x.a,{}),children:Object(i.c)("common.edit")})}),o&&Object(m.jsx)(z.a,{title:Object(i.c)("common.areYouSure"),onConfirm:function(){t(y.a.doDestroy(l))},okText:Object(i.c)("common.yes"),cancelText:Object(i.c)("common.no"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(h.a,{}),disabled:j,children:Object(i.c)("common.destroy")})}),a&&Object(m.jsx)(T.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(m.jsx)(v.a,{icon:Object(m.jsx)(g.a,{}),children:Object(i.c)("auditLog.menu")})})]})},R=n(623),U=n(625),B=n(624);t.default=function(e){var t=Object(c.d)(),n=Object(r.h)(),o=Object(c.e)(b.selectLoading),j=Object(c.e)(b.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("entities.zap.menu"),"/zap"],[Object(i.c)("entities.zap.view.title")]]}),Object(m.jsxs)(R.a,{children:[Object(m.jsx)(B.a,{children:Object(i.c)("entities.zap.view.title")}),Object(m.jsx)(D,{match:n}),Object(m.jsx)(f,{loading:o,record:j})]})]})}},623:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=r},624:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.h1(a||(a=Object(c.a)(["\n  margin-bottom: 36px;\n"])));t.a=r},625:function(e,t,n){"use strict";var a=n(669),c=(n(1),n(95)),r=n(12);t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,t,n){"use strict";var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=r},653:function(e,t,n){"use strict";var a=n(655),c=(n(1),n(12));t.a=function(e){return Object(c.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(c.jsx)(a.a,{})})}},752:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a,c=n(183),r=n(184).a.div(a||(a=Object(c.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=r},852:function(e,t,n){"use strict";var a=n(5),c=n(40),r=n(77),i=n(185),s=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapRead)})),o=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapEdit)})),j=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapCreate)})),l=Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapImport)})),b={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:j,selectPermissionToDestroy:Object(a.a)([c.a.selectCurrentTenant,c.a.selectCurrentUser],(function(e,t){return new r.a(e,t).match(i.a.values.zapDestroy)})),selectPermissionToImport:l};t.a=b},934:function(e,t,n){"use strict";var a=n(5),c={selectLoading:Object(a.a)([function(e){return e.zap.destroy}],(function(e){return Boolean(e.loading)}))};t.a=c}}]);