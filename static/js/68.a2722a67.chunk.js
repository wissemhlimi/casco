(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[68],{1322:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(43),i=t(3),l=t(7),c=t(115),o=t(929),u=t(623),s=t(625),m=t(624),d=t(0);var f=t(23),b=t(769),p=t(698),j=t(770),h=t(1286),v=t(206),O=t(619),x=t(629),g=t(762),y=t(957),C=t(630),q=t(44),E=t(638),w=t(906),S=t(644),B=t(12),M=q.e().shape({email:E.a.email(Object(i.c)("user.fields.email")),roles:E.a.stringArray(Object(i.c)("user.fields.roles"),{required:!0,min:1})}),N=q.e().shape({emails:q.a().label(Object(i.c)("user.fields.emails")).of(q.h().transform((function(e,n){return""===n?null:e})).email(Object(i.c)("user.validations.email")).label(Object(i.c)("user.fields.email")).max(255).required()).required().min(1),roles:E.a.stringArray(Object(i.c)("user.fields.roles"),{required:!0,min:1})}),R=function(e){var n=e.single?M:N,t=Object(r.useState)((function(){return{emails:[],email:"",roles:[]}})),a=Object(f.a)(t,1)[0],l=Object(O.c)({resolver:Object(S.yupResolver)(n),mode:"all",defaultValues:a}),c=function(n){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(n),n));t.email&&(t.emails=[t.email],delete t.email),e.onSubmit(null,t)},o=e.single,u=e.saveLoading;return Object(B.jsx)(C.a,{children:Object(B.jsx)(O.a,Object(d.a)(Object(d.a)({},l),{},{children:Object(B.jsxs)("form",{onSubmit:l.handleSubmit(c),children:[o?Object(B.jsx)(x.a,{name:"email",label:Object(i.c)("user.fields.email"),required:!0,layout:C.b,autoFocus:!0}):Object(B.jsx)(y.a,{name:"emails",label:Object(i.c)("user.fields.emails"),notFoundContent:Object(i.c)("user.new.emailsHint"),required:!0,layout:C.b,autoFocus:!0}),Object(B.jsx)(g.a,{name:"roles",label:Object(i.c)("user.fields.roles"),required:!0,options:w.a.roles.map((function(e){return{value:e,label:Object(i.c)("roles.".concat(e,".label"))}})),mode:"multiple",layout:C.b}),Object(B.jsxs)(h.a.Item,Object(d.a)(Object(d.a)({className:"form-buttons"},C.c),{},{children:[Object(B.jsx)(v.a,{loading:u,type:"primary",onClick:l.handleSubmit(c),icon:Object(B.jsx)(b.a,{}),children:Object(i.c)("common.save")}),Object(B.jsx)(v.a,{disabled:u,onClick:function(){Object.keys(a).forEach((function(e){l.setValue(e,a[e])}))},icon:Object(B.jsx)(p.a,{}),children:Object(i.c)("common.reset")}),e.onCancel&&Object(B.jsx)(v.a,{disabled:u,onClick:function(){return e.onCancel()},icon:Object(B.jsx)(j.a,{}),children:Object(i.c)("common.cancel")})]}))]})}))})};n.default=function(e){var n=Object(a.d)(),t=Object(a.e)(o.a.selectSaveLoading);Object(r.useEffect)((function(){n(c.a.doInit())}),[]);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(s.a,{header:!0,items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("user.menu"),"/user"],[Object(i.c)("user.new.title")]]}),Object(B.jsxs)(u.a,{children:[Object(B.jsx)(m.a,{children:Object(i.c)("user.new.title")}),Object(B.jsx)(R,{saveLoading:t,onSubmit:function(e,t){n(c.a.doAdd(t))},onCancel:function(){return Object(l.b)().push("/user")}})]})]})}},622:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},623:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=i},624:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));n.a=i},625:function(e,n,t){"use strict";var r=t(669),a=(t(1),t(95)),i=t(12);n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},629:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(1290),l=t(619),c=t(1),o=t(622),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,f=e.type,b=e.placeholder,p=e.autoFocus,j=e.autoComplete,h=e.prefix,v=e.externalErrorMessage,O=e.required,x=e.addonAfter,g=Object(l.d)(),y=g.setValue,C=g.watch,q=g.register,E=g.errors,w=g.formState,S=w.touched,B=w.isSubmitted;Object(c.useEffect)((function(){q({name:t})}),[q,t]);var M=o.a.errorMessage(t,E,S,B,v);return Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,required:O,validateStatus:M?"error":"success",help:M||s,children:Object(u.jsx)(i.a,{id:t,name:t,type:f,value:C(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:b||void 0,autoFocus:p||!1,autoComplete:j||void 0,prefix:h||void 0,addonAfter:x||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},630:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return c}));var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),l={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},638:function(e,n,t){"use strict";var r=t(19),a=t(44),i=t(3),l=t(106),c=t.n(l),o={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},669:function(e,n,t){"use strict";var r=t(13),a=t.n(r),i=t(21),l=t.n(i),c=t(274),o=t.n(c),u=t(1),s=t(16),m=t.n(s),d=t(76),f=t(631),b=t.n(f),p=t(284),j=t(138),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},v=function(e){var n,t,r=e.prefixCls,i=e.separator,l=void 0===i?"/":i,c=e.children,o=e.overlay,s=e.dropdownProps,m=h(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,u.useContext(j.b).getPrefixCls)("breadcrumb",r);return n="href"in m?u.createElement("a",a()({className:"".concat(d,"-link")},m),c):u.createElement("span",a()({className:"".concat(d,"-link")},m),c),t=n,n=o?u.createElement(p.a,a()({overlay:o,placement:"bottomCenter"},s),u.createElement("span",{className:"".concat(d,"-overlay-link")},t,u.createElement(b.a,null))):t,c?u.createElement("span",null,n,l&&""!==l&&u.createElement("span",{className:"".concat(d,"-separator")},l)):null};v.__ANT_BREADCRUMB_ITEM=!0;var O=v,x=function(e){var n=e.children,t=(0,u.useContext(j.b).getPrefixCls)("breadcrumb");return u.createElement("span",{className:"".concat(t,"-separator")},n||"/")};x.__ANT_BREADCRUMB_SEPARATOR=!0;var g=x,y=t(592),C=t(74),q=t(38),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function w(e,n,t,r){var a=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?u.createElement("span",null,i):u.createElement("a",{href:"#/".concat(r.join("/"))},i)}var S=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},B=function(e){var n,t=e.prefixCls,r=e.separator,i=void 0===r?"/":r,c=e.style,s=e.className,f=e.routes,b=e.children,p=e.itemRender,h=void 0===p?w:p,v=e.params,x=void 0===v?{}:v,g=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),B=u.useContext(j.b),M=B.getPrefixCls,N=B.direction,R=M("breadcrumb",t);if(f&&f.length>0){var A=[];n=f.map((function(e){var n,t=S(e.path,x);return t&&A.push(t),e.children&&e.children.length&&(n=u.createElement(y.a,null,e.children.map((function(e){return u.createElement(y.a.Item,{key:e.path||e.breadcrumbName},h(e,x,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=o()(e),a=S(n,t);return a&&r.push(a),r}(A,e.path,x)))})))),u.createElement(O,{overlay:n,separator:i,key:t||e.breadcrumbName},h(e,x,f,A))}))}else b&&(n=Object(d.a)(b).map((function(e,n){return e?(Object(C.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(q.a)(e,{separator:i,key:n})):e})));var k=m()(R,l()({},"".concat(R,"-rtl"),"rtl"===N),s);return u.createElement("div",a()({className:k,style:c},g),n)};B.Item=O,B.Separator=g;var M=B;n.a=M},698:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},l=t(42),c=function(e,n){return a.createElement(l.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};c.displayName="UndoOutlined";n.a=a.forwardRef(c)},762:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(700),l=t(1),c=t(622),o=t(619),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,f=e.placeholder,b=e.options,p=e.mode,j=e.autoFocus,h=e.required,v=e.externalErrorMessage,O=e.optionFilterProp,x=Object(o.d)(),g=x.register,y=x.errors,C=x.formState,q=C.touched,E=C.isSubmitted,w=x.setValue,S=x.watch,B=c.a.errorMessage(t,y,q,E,v),M=S(t);return Object(l.useEffect)((function(){g({name:t})}),[g,t]),Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,validateStatus:B?"error":"success",required:h,help:B||s,children:Object(u.jsx)(i.a,{id:t,onChange:function(n){w(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:M,size:d||void 0,placeholder:f||void 0,autoFocus:j||!1,mode:p||void 0,optionFilterProp:O||"children",allowClear:!0,children:b.map((function(e){return Object(u.jsx)(i.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},n.a=s},769:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},l=t(42),c=function(e,n){return a.createElement(l.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};c.displayName="SaveOutlined";n.a=a.forwardRef(c)},770:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},l=t(42),c=function(e,n){return a.createElement(l.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};c.displayName="CloseOutlined";n.a=a.forwardRef(c)},906:function(e,n,t){"use strict";var r=t(301),a={status:["active","invited","empty-permissions"],roles:Object.keys(r.a.values)};n.a=a},929:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.user.form},i=Object(r.a)([a],(function(e){return e.user})),l={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectUser:i,selectRaw:a};n.a=l},957:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(700),l=t(619),c=t(1),o=t(622),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.placeholder,f=e.autoFocus,b=e.notFoundContent,p=e.externalErrorMessage,j=e.required,h=Object(l.d)(),v=h.register,O=h.errors,x=h.formState,g=x.touched,y=x.isSubmitted,C=h.setValue,q=h.watch,E=o.a.errorMessage(t,O,g,y,p);Object(c.useEffect)((function(){v({name:t})}),[v,t]);var w=q(t);return Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,validateStatus:E?"error":"success",required:j,help:E||s,children:Object(u.jsx)(i.a,{mode:"tags",style:{width:"100%"},value:w,onChange:function(n){C(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},notFoundContent:b,placeholder:d||void 0,autoFocus:f||!1})}))};s.defaultProps={layout:null,tokenSeparators:[","],required:!1},n.a=s}}]);