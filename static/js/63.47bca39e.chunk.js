(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[63],{1329:function(e,n,t){"use strict";t.r(n);var r=t(23),a=t(1),i=t(43),c=t(36),l=t(3),o=t(7),u=t(115),s=t(929),m=t(623),d=t(625),f=t(653),p=t(624),b=t(0),v=t(769),j=t(698),O=t(770),h=t(1286),g=t(206),x=t(619),y=t(638),E=t(906),N=t(762),C=t(630),S=t(44),w=t(644),q=t(12),k=S.e().shape({roles:y.a.stringArray(Object(l.c)("user.fields.roles"))}),M=function(e){var n=Object(i.d)(),t=Object(i.e)(s.a.selectSaveLoading),c=Object(a.useState)((function(){return e.user||{}})),o=Object(r.a)(c,1)[0],m=Object(x.c)({resolver:Object(w.yupResolver)(k),mode:"all",defaultValues:o}),d=function(t){var r=Object(b.a)({id:e.user.id},t);delete r.email,n(u.a.doUpdate(r))};return Object(q.jsx)(C.a,{children:Object(q.jsx)(x.a,Object(b.a)(Object(b.a)({},m),{},{children:Object(q.jsxs)("form",{onSubmit:m.handleSubmit(d),children:[Object(q.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},C.b),{},{label:Object(l.c)("user.fields.email"),children:Object(q.jsx)("strong",{children:e.user.email})})),Object(q.jsx)(N.a,{name:"roles",label:Object(l.c)("user.fields.roles"),options:E.a.roles.map((function(e){return{value:e,label:Object(l.c)("roles.".concat(e,".label"))}})),mode:"multiple",layout:C.b}),Object(q.jsxs)(h.a.Item,Object(b.a)(Object(b.a)({className:"form-buttons"},C.c),{},{children:[Object(q.jsx)(g.a,{loading:t,type:"primary",onClick:m.handleSubmit(d),icon:Object(q.jsx)(v.a,{}),children:Object(l.c)("common.save")}),Object(q.jsx)(g.a,{disabled:t,onClick:function(){Object.keys(o).forEach((function(e){m.setValue(e,o[e])}))},icon:Object(q.jsx)(j.a,{}),children:Object(l.c)("common.reset")}),e.onCancel&&Object(q.jsx)(g.a,{disabled:t,onClick:function(){return e.onCancel()},icon:Object(q.jsx)(O.a,{}),children:Object(l.c)("common.cancel")})]}))]})}))})};n.default=function(e){var n=Object(i.d)(),t=Object(a.useState)(!1),b=Object(r.a)(t,2),v=b[0],j=b[1],O=Object(i.e)(s.a.selectInitLoading),h=Object(i.e)(s.a.selectSaveLoading),g=Object(i.e)(s.a.selectUser),x=Object(c.h)();return Object(a.useEffect)((function(){n(u.a.doInit(x.params.id)),j(!0)}),[n,x.params.id]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(d.a,{header:!0,items:[[Object(l.c)("dashboard.menu"),"/"],[Object(l.c)("user.menu"),"/user"],[Object(l.c)("user.edit.title")]]}),Object(q.jsxs)(m.a,{children:[Object(q.jsx)(p.a,{children:Object(l.c)("user.edit.title")}),O&&Object(q.jsx)(f.a,{}),v&&!O&&Object(q.jsx)(M,{user:g,saveLoading:h,onCancel:function(){return Object(o.b)().push("/user")}})]})]})}},622:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(11),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},623:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=i},624:function(e,n,t){"use strict";var r,a=t(183),i=t(184).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));n.a=i},625:function(e,n,t){"use strict";var r=t(669),a=(t(1),t(95)),i=t(12);n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},630:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return l}));var r,a=t(183),i=t(184).a.div(r||(r=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},l={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},632:function(e,n,t){var r=t(195),a=t(633),i=t(406),c="Expected a function",l=Math.max,o=Math.min;e.exports=function(e,n,t){var u,s,m,d,f,p,b=0,v=!1,j=!1,O=!0;if("function"!=typeof e)throw new TypeError(c);function h(n){var t=u,r=s;return u=s=void 0,b=n,d=e.apply(r,t)}function g(e){var t=e-p;return void 0===p||t>=n||t<0||j&&e-b>=m}function x(){var e=a();if(g(e))return y(e);f=setTimeout(x,function(e){var t=n-(e-p);return j?o(t,m-(e-b)):t}(e))}function y(e){return f=void 0,O&&u?h(e):(u=s=void 0,d)}function E(){var e=a(),t=g(e);if(u=arguments,s=this,p=e,t){if(void 0===f)return function(e){return b=e,f=setTimeout(x,n),v?h(e):d}(p);if(j)return clearTimeout(f),f=setTimeout(x,n),h(p)}return void 0===f&&(f=setTimeout(x,n)),d}return n=i(n)||0,r(t)&&(v=!!t.leading,m=(j="maxWait"in t)?l(i(t.maxWait)||0,n):m,O="trailing"in t?!!t.trailing:O),E.cancel=function(){void 0!==f&&clearTimeout(f),b=0,u=p=s=f=void 0},E.flush=function(){return void 0===f?d:y(a())},E}},633:function(e,n,t){var r=t(132);e.exports=function(){return r.Date.now()}},638:function(e,n,t){"use strict";var r=t(19),a=t(44),i=t(3),c=t(106),l=t.n(c),o={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=o},653:function(e,n,t){"use strict";var r=t(655),a=(t(1),t(12));n.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},655:function(e,n,t){"use strict";var r=t(13),a=t.n(r),i=t(21),c=t.n(i),l=t(71),o=t.n(l),u=t(96),s=t.n(u),m=t(97),d=t.n(m),f=t(98),p=t.n(f),b=t(1),v=t(16),j=t.n(v),O=t(137),h=t(632),g=t.n(h),x=t(138),y=t(131),E=t(38),N=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},C=(Object(y.a)("small","default","large"),null);var S=function(e){d()(t,e);var n=p()(t);function t(e){var r;o()(this,t),(r=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||r.props).delay;n&&(r.cancelExistingSpin(),r.updateSpinning=g()(r.originalUpdateSpinning,n))},r.updateSpinning=function(){var e=r.props.spinning;r.state.spinning!==e&&r.setState({spinning:e})},r.renderSpin=function(e){var n,t=e.getPrefixCls,i=e.direction,l=r.props,o=l.prefixCls,u=l.className,s=l.size,m=l.tip,d=l.wrapperClassName,f=l.style,p=N(l,["prefixCls","className","size","tip","wrapperClassName","style"]),v=r.state.spinning,h=t("spin",o),g=j()(h,(n={},c()(n,"".concat(h,"-sm"),"small"===s),c()(n,"".concat(h,"-lg"),"large"===s),c()(n,"".concat(h,"-spinning"),v),c()(n,"".concat(h,"-show-text"),!!m),c()(n,"".concat(h,"-rtl"),"rtl"===i),n),u),x=Object(O.default)(p,["spinning","delay","indicator"]),y=b.createElement("div",a()({},x,{style:f,className:g}),function(e,n){var t=n.indicator,r="".concat(e,"-dot");return null===t?null:Object(E.b)(t)?Object(E.a)(t,{className:j()(t.props.className,r)}):Object(E.b)(C)?Object(E.a)(C,{className:j()(C.props.className,r)}):b.createElement("span",{className:j()(r,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(h,r.props),m?b.createElement("div",{className:"".concat(h,"-text")},m):null);if(r.isNestedPattern()){var S=j()("".concat(h,"-container"),c()({},"".concat(h,"-blur"),v));return b.createElement("div",a()({},x,{className:j()("".concat(h,"-nested-loading"),d)}),v&&b.createElement("div",{key:"loading"},y),b.createElement("div",{className:S,key:"container"},r.props.children))}return y};var i=e.spinning,l=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(i,e.delay);return r.state={spinning:i&&!l},r.originalUpdateSpinning=r.updateSpinning,r.debouncifyUpdateSpinning(e),r}return s()(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(x.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){C=e}}]),t}(b.Component);S.defaultProps={spinning:!0,size:"default",wrapperClassName:""},n.a=S},669:function(e,n,t){"use strict";var r=t(13),a=t.n(r),i=t(21),c=t.n(i),l=t(274),o=t.n(l),u=t(1),s=t(16),m=t.n(s),d=t(76),f=t(631),p=t.n(f),b=t(284),v=t(138),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e){var n,t,r=e.prefixCls,i=e.separator,c=void 0===i?"/":i,l=e.children,o=e.overlay,s=e.dropdownProps,m=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,u.useContext(v.b).getPrefixCls)("breadcrumb",r);return n="href"in m?u.createElement("a",a()({className:"".concat(d,"-link")},m),l):u.createElement("span",a()({className:"".concat(d,"-link")},m),l),t=n,n=o?u.createElement(b.a,a()({overlay:o,placement:"bottomCenter"},s),u.createElement("span",{className:"".concat(d,"-overlay-link")},t,u.createElement(p.a,null))):t,l?u.createElement("span",null,n,c&&""!==c&&u.createElement("span",{className:"".concat(d,"-separator")},c)):null};O.__ANT_BREADCRUMB_ITEM=!0;var h=O,g=function(e){var n=e.children,t=(0,u.useContext(v.b).getPrefixCls)("breadcrumb");return u.createElement("span",{className:"".concat(t,"-separator")},n||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var x=g,y=t(592),E=t(74),N=t(38),C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function S(e,n,t,r){var a=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?u.createElement("span",null,i):u.createElement("a",{href:"#/".concat(r.join("/"))},i)}var w=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},q=function(e){var n,t=e.prefixCls,r=e.separator,i=void 0===r?"/":r,l=e.style,s=e.className,f=e.routes,p=e.children,b=e.itemRender,j=void 0===b?S:b,O=e.params,g=void 0===O?{}:O,x=C(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),q=u.useContext(v.b),k=q.getPrefixCls,M=q.direction,P=k("breadcrumb",t);if(f&&f.length>0){var B=[];n=f.map((function(e){var n,t=w(e.path,g);return t&&B.push(t),e.children&&e.children.length&&(n=u.createElement(y.a,null,e.children.map((function(e){return u.createElement(y.a.Item,{key:e.path||e.breadcrumbName},j(e,g,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=o()(e),a=w(n,t);return a&&r.push(a),r}(B,e.path,g)))})))),u.createElement(h,{overlay:n,separator:i,key:t||e.breadcrumbName},j(e,g,f,B))}))}else p&&(n=Object(d.a)(p).map((function(e,n){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:i,key:n})):e})));var R=m()(P,c()({},"".concat(P,"-rtl"),"rtl"===M),s);return u.createElement("div",a()({className:R,style:l},x),n)};q.Item=h,q.Separator=x;var k=q;n.a=k},698:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},c=t(42),l=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};l.displayName="UndoOutlined";n.a=a.forwardRef(l)},762:function(e,n,t){"use strict";var r=t(0),a=t(1286),i=t(700),c=t(1),l=t(622),o=t(619),u=t(12),s=function(e){var n=e.label,t=e.name,s=e.hint,m=e.layout,d=e.size,f=e.placeholder,p=e.options,b=e.mode,v=e.autoFocus,j=e.required,O=e.externalErrorMessage,h=e.optionFilterProp,g=Object(o.d)(),x=g.register,y=g.errors,E=g.formState,N=E.touched,C=E.isSubmitted,S=g.setValue,w=g.watch,q=l.a.errorMessage(t,y,N,C,O),k=w(t);return Object(c.useEffect)((function(){x({name:t})}),[x,t]),Object(u.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},m),{},{label:n,validateStatus:q?"error":"success",required:j,help:q||s,children:Object(u.jsx)(i.a,{id:t,onChange:function(n){S(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:k,size:d||void 0,placeholder:f||void 0,autoFocus:v||!1,mode:b||void 0,optionFilterProp:h||"children",allowClear:!0,children:p.map((function(e){return Object(u.jsx)(i.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},n.a=s},769:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},c=t(42),l=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};l.displayName="SaveOutlined";n.a=a.forwardRef(l)},770:function(e,n,t){"use strict";var r=t(0),a=t(1),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=t(42),l=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};l.displayName="CloseOutlined";n.a=a.forwardRef(l)},906:function(e,n,t){"use strict";var r=t(301),a={status:["active","invited","empty-permissions"],roles:Object.keys(r.a.values)};n.a=a},929:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.user.form},i=Object(r.a)([a],(function(e){return e.user})),c={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectUser:i,selectRaw:a};n.a=c}}]);