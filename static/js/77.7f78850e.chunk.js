(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[77],{1287:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(2),c=n(45),i=n(37),s=n(3),o=n(249),u=n(5),d=function(e){return e.product.view},l=Object(u.a)([d],(function(e){return e.record})),j={selectLoading:Object(u.a)([d],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:d},b=n(0),m=n(657),p=n(749),O=n(1275),f=n(106),v=n(764),h=function(e){var t=Object(c.e)(v.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{to:"/prodtype/".concat(n.id),children:n.prodtypeName})},n.id):Object(r.jsx)("div",{children:n.prodtypeName},n.id);var n}))}):null},x=n(763),T=function(e){var t=Object(c.e)(x.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(f.a,{to:"/unit/".concat(n.id),children:n.unitTitle})},n.id):Object(r.jsx)("div",{children:n.unitTitle},n.id);var n}))}):null},C=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(m.a,{}):Object(r.jsxs)(p.a,{children:[Boolean(t.prodName)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.d)("entities.product.fields.prodName"),children:t.prodName})),Boolean(t.prodDescr)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.d)("entities.product.fields.prodDescr"),children:t.prodDescr})),Boolean(t.partNumber)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.d)("entities.product.fields.partNumber"),children:t.partNumber})),Boolean(t.prodType)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.d)("entities.product.fields.prodType"),children:Object(r.jsx)(h,{value:t.prodType})})),Boolean(t.partUnit)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},p.b),{},{label:Object(s.d)("entities.product.fields.partUnit"),children:Object(r.jsx)(T,{value:t.partUnit})}))]})},g=n(852),y=n(693),w=n(612),P=n(212),U=n(692),I=n(142),R=n(756),D=n(173),B=n(932),E=n(638),N=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(I.a.selectPermissionToRead),o=Object(c.e)(R.a.selectPermissionToEdit),u=Object(c.e)(R.a.selectPermissionToDestroy),d=Object(c.e)(B.a.selectLoading),l=n.params.id;return Object(r.jsxs)(E.a,{children:[o&&Object(r.jsx)(f.a,{to:"/product/".concat(l,"/edit"),children:Object(r.jsx)(P.a,{type:"primary",icon:Object(r.jsx)(g.a,{}),children:Object(s.d)("common.edit")})}),u&&Object(r.jsx)(U.a,{title:Object(s.d)("common.areYouSure"),onConfirm:function(){t(D.a.doDestroy(l))},okText:Object(s.d)("common.yes"),cancelText:Object(s.d)("common.no"),children:Object(r.jsx)(P.a,{type:"primary",icon:Object(r.jsx)(y.a,{}),disabled:d,children:Object(s.d)("common.destroy")})}),a&&Object(r.jsx)(f.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(r.jsx)(P.a,{icon:Object(r.jsx)(w.a,{}),children:Object(s.d)("auditLog.menu")})})]})},L=n(627),k=n(629),A=n(628);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),u=Object(c.e)(j.selectLoading),d=Object(c.e)(j.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{items:[[Object(s.d)("dashboard.menu"),"/"],[Object(s.d)("entities.product.menu"),"/product"],[Object(s.d)("entities.product.view.title")]]}),Object(r.jsxs)(L.a,{children:[Object(r.jsx)(A.a,{children:Object(s.d)("entities.product.view.title")}),Object(r.jsx)(N,{match:n}),Object(r.jsx)(C,{loading:u,record:d})]})]})}},627:function(e,t,n){"use strict";var r=n(182);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(183).a.div(a());t.a=c},628:function(e,t,n){"use strict";var r=n(182);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(183).a.h1(a());t.a=c},629:function(e,t,n){"use strict";var r=n(11),a=n(670),c=(n(2),n(106));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},638:function(e,t,n){"use strict";var r=n(182);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(183).a.div(a());t.a=c},657:function(e,t,n){"use strict";var r=n(11),a=n(658);n(2);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},749:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(182);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(183).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},756:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(76),i=n(184),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productCreate)})),d=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productImport)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productDestroy)})),selectPermissionToImport:d};t.a=l},763:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(76),i=n(184),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.unitRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.unitEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.unitCreate)})),d=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.unitImport)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.unitDestroy)})),selectPermissionToImport:d};t.a=l},764:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(76),i=n(184),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodtypeRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodtypeEdit)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodtypeCreate)})),d=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodtypeImport)})),l={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodtypeDestroy)})),selectPermissionToImport:d};t.a=l},932:function(e,t,n){"use strict";var r=n(5),a={selectLoading:Object(r.a)([function(e){return e.product.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);