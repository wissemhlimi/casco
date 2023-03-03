(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[70],{1313:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(2),c=n(45),i=n(37),s=n(3),o=n(248),l=n(5),u=function(e){return e.configTable.view},d=Object(l.a)([u],(function(e){return e.record})),j={selectLoading:Object(l.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:u},b=n(0),m=n(658),f=n(754),O=n(1306),v=n(99),T=n(864),h=function(e){var t=Object(c.e)(T.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{to:"/family/".concat(n.id),children:n.famTitle})},n.id):Object(r.jsx)("div",{children:n.famTitle},n.id);var n}))}):null},p=n(921),C=n(923),g=n(865),x=function(e){var t=Object(c.e)(g.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{to:"/zap/".concat(n.id),children:n.zapTitle})},n.id):Object(r.jsx)("div",{children:n.zapTitle},n.id);var n}))}):null},y=n(866),w=function(e){var t=Object(c.e)(y.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(v.a,{to:"/config/".concat(n.id),children:n.configTitle})},n.id):Object(r.jsx)("div",{children:n.configTitle},n.id);var n}))}):null},P=function(e){var t=e.record;return e.loading||!t?Object(r.jsx)(m.a,{}):Object(r.jsxs)(f.a,{children:[Boolean(t.configCode)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(s.c)("entities.configTable.fields.configCode"),children:Object(r.jsx)(w,{value:t.configCode})})),Boolean(t.famId)&&Boolean(t.famId.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(s.c)("entities.configTable.fields.famId"),children:Object(r.jsx)(h,{value:t.famId})})),Boolean(t.lineId)&&Boolean(t.lineId.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(s.c)("entities.configTable.fields.lineId"),children:Object(r.jsx)(p.a,{value:t.lineId})})),Boolean(t.prodId)&&Boolean(t.prodId.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(s.c)("entities.configTable.fields.prodId"),children:Object(r.jsx)(C.a,{value:t.prodId})})),Boolean(t.zapId)&&Boolean(t.zapId.length)&&Object(r.jsx)(O.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(s.c)("entities.configTable.fields.zapId"),children:Object(r.jsx)(x,{value:t.zapId})}))]})},I=n(862),U=n(696),R=n(613),D=n(212),E=n(694),z=n(143),B=n(948),A=n(172),F=n(947),L=n(638),k=function(e){var t=Object(c.d)(),n=Object(i.h)(),a=Object(c.e)(z.a.selectPermissionToRead),o=Object(c.e)(B.a.selectPermissionToEdit),l=Object(c.e)(B.a.selectPermissionToDestroy),u=Object(c.e)(F.a.selectLoading),d=n.params.id;return Object(r.jsxs)(L.a,{children:[o&&Object(r.jsx)(v.a,{to:"/config-table/".concat(d,"/edit"),children:Object(r.jsx)(D.a,{type:"primary",icon:Object(r.jsx)(I.a,{}),children:Object(s.c)("common.edit")})}),l&&Object(r.jsx)(E.a,{title:Object(s.c)("common.areYouSure"),onConfirm:function(){t(A.a.doDestroy(d))},okText:Object(s.c)("common.yes"),cancelText:Object(s.c)("common.no"),children:Object(r.jsx)(D.a,{type:"primary",icon:Object(r.jsx)(U.a,{}),disabled:u,children:Object(s.c)("common.destroy")})}),a&&Object(r.jsx)(v.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(r.jsx)(D.a,{icon:Object(r.jsx)(R.a,{}),children:Object(s.c)("auditLog.menu")})})]})},J=n(627),N=n(629),S=n(628);t.default=function(e){var t=Object(c.d)(),n=Object(i.h)(),l=Object(c.e)(j.selectLoading),u=Object(c.e)(j.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N.a,{items:[[Object(s.c)("dashboard.menu"),"/"],[Object(s.c)("entities.configTable.menu"),"/config-table"],[Object(s.c)("entities.configTable.view.title")]]}),Object(r.jsxs)(J.a,{children:[Object(r.jsx)(S.a,{children:Object(s.c)("entities.configTable.view.title")}),Object(r.jsx)(k,{match:n}),Object(r.jsx)(P,{loading:l,record:u})]})]})}},627:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var c=n(185).a.div(a());t.a=c},628:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var c=n(185).a.h1(a());t.a=c},629:function(e,t,n){"use strict";var r=n(11),a=n(673),c=(n(2),n(99));t.a=function(e){var t=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:t(e)?Object(r.jsx)(c.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},638:function(e,t,n){"use strict";var r=n(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(185).a.div(a());t.a=c},658:function(e,t,n){"use strict";var r=n(11),a=n(659);n(2);t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},754:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(184);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var c=n(185).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},761:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodlineRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodlineEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodlineCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodlineImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.prodlineDestroy)})),selectPermissionToImport:u};t.a=d},762:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.productDestroy)})),selectPermissionToImport:u};t.a=d},864:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.familyRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.familyEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.familyCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.familyImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.familyDestroy)})),selectPermissionToImport:u};t.a=d},865:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.zapRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.zapEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.zapCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.zapImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.zapDestroy)})),selectPermissionToImport:u};t.a=d},866:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configDestroy)})),selectPermissionToImport:u};t.a=d},921:function(e,t,n){"use strict";var r=n(11),a=(n(2),n(99)),c=n(45),i=n(761);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{to:"/prodline/".concat(n.id),children:n.lineTitle})},n.id):Object(r.jsx)("div",{children:n.lineTitle},n.id);var n}))}):null}},923:function(e,t,n){"use strict";var r=n(11),a=(n(2),n(99)),c=n(45),i=n(762);t.a=function(e){var t=Object(c.e)(i.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(r.jsx)(r.Fragment,{children:n().map((function(e){return n=e,t?Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{to:"/product/".concat(n.id),children:n.prodName})},n.id):Object(r.jsx)("div",{children:n.prodName},n.id);var n}))}):null}},947:function(e,t,n){"use strict";var r=n(5),a={selectLoading:Object(r.a)([function(e){return e.configTable.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},948:function(e,t,n){"use strict";var r=n(5),a=n(42),c=n(78),i=n(186),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configTableRead)})),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configTableEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configTableCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configTableImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.configTableDestroy)})),selectPermissionToImport:u};t.a=d}}]);