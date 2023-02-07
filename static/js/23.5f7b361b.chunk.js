(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[23],{1326:function(e,n,t){"use strict";t.r(n);var r=t(198),a=t(11),i=t(2),o=t(45),u=t(37),l=t(3),c=t(130),d=t(5),s=function(e){return e.prodtype.form},m=Object(d.a)([s],(function(e){return e.record})),b={selectInitLoading:Object(d.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(d.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:m,selectRaw:s},p=t(7),f=t(813),j=t(627),O=t(629),v=t(657),x=t(628);n.default=function(e){var n=Object(i.useState)(!1),t=Object(r.a)(n,2),d=t[0],s=t[1],m=Object(o.d)(),h=Object(u.h)(),g=Object(o.e)(b.selectInitLoading),y=Object(o.e)(b.selectSaveLoading),q=Object(o.e)(b.selectRecord),C=Boolean(h.params.id),S=C?Object(l.d)("entities.prodtype.edit.title"):Object(l.d)("entities.prodtype.new.title");Object(i.useEffect)((function(){m(c.a.doInit(h.params.id)),s(!0)}),[m,h.params.id]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{items:[[Object(l.d)("dashboard.menu"),"/"],[Object(l.d)("entities.prodtype.menu"),"/prodtype"],[S]]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(x.a,{children:S}),g&&Object(a.jsx)(v.a,{}),d&&!g&&Object(a.jsx)(f.a,{saveLoading:y,record:q,isEditing:C,onSubmit:function(e,n){m(C?c.a.doUpdate(e,n):c.a.doCreate(n))},onCancel:function(){return Object(p.b)().push("/prodtype")}})]})]})}},626:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var o=n[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},627:function(e,n,t){"use strict";var r=t(182);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(183).a.div(a());n.a=i},628:function(e,n,t){"use strict";var r=t(182);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(183).a.h1(a());n.a=i},629:function(e,n,t){"use strict";var r=t(11),a=t(670),i=(t(2),t(106));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},633:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1275),o=t(1278),u=t(622),l=t(2),c=t(626),d=function(e){var n=e.label,t=e.name,d=e.hint,s=e.layout,m=e.size,b=e.type,p=e.placeholder,f=e.autoFocus,j=e.autoComplete,O=e.prefix,v=e.externalErrorMessage,x=e.required,h=e.addonAfter,g=Object(u.d)(),y=g.setValue,q=g.watch,C=g.register,S=g.errors,w=g.formState,M=w.touched,Y=w.isSubmitted;Object(l.useEffect)((function(){C({name:t})}),[C,t]);var P=c.a.errorMessage(t,S,M,Y,v);return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},s),{},{label:n,required:x,validateStatus:P?"error":"success",help:P||d,children:Object(a.jsx)(o.a,{id:t,name:t,type:b,value:q(t),onChange:function(n){y(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:m||void 0,placeholder:p||void 0,autoFocus:f||!1,autoComplete:j||void 0,prefix:O||void 0,addonAfter:h||void 0})}))};d.defaultProps={layout:null,type:"text",required:!1},n.a=d},634:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u}));var r=t(182);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var i=t(183).a.div(a()),o={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},u={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},641:function(e,n,t){"use strict";var r=t(52),a=t(46),i=t(3),o=t(108),u=t.n(o),l={generic:e=>a.c().label(e),string(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.d)("validation.string.selected"))),t},email(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?u()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},657:function(e,n,t){"use strict";var r=t(11),a=t(658);t(2);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},809:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1275),o=t(814),u=t.n(o),l=t(2),c=t(626),d=t(622),s=function(e){var n=e.label,t=e.name,o=e.hint,s=e.layout,m=e.options,b=e.externalErrorMessage,p=e.required,f=Object(d.d)(),j=f.register,O=f.errors,v=f.formState,x=v.touched,h=v.isSubmitted,g=f.setValue,y=f.watch;Object(l.useEffect)((function(){j({name:t})}),[j,t]);var q=c.a.errorMessage(t,O,x,h,b),C=q||o;return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},s),{},{label:n,validateStatus:q?"error":"success",required:p,help:C,children:Object(a.jsx)(u.a,{id:t,onChange:function(n){g(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},options:m,value:y(t)||""})}))};s.defaultProps={layout:null,required:!1},n.a=s},813:function(e,n,t){"use strict";var r=t(0),a=t(198),i=t(11),o=t(765),u=t(697),l=t(766),c=t(1275),d=t(212),s=t(622),m=t(2),b=t(3),p=t(634),f=t(46),j=t(641),O=t(646),v=t(633),x=t(809),h=t(307),g=f.e().shape({prodtypeName:j.a.string(Object(b.d)("entities.prodtype.fields.prodtypeName"),{required:!0}),prodtypePlan:j.a.enumerator(Object(b.d)("entities.prodtype.fields.prodtypePlan"),{options:h.a.prodtypePlan})});n.a=function(e){var n=Object(m.useState)((function(){var n=e.record||{};return{prodtypeName:n.prodtypeName,prodtypePlan:n.prodtypePlan}})),t=Object(a.a)(n,1)[0],f=Object(s.c)({resolver:Object(O.yupResolver)(g),mode:"all",defaultValues:t}),j=function(n){var t;e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},y=e.saveLoading;return Object(i.jsx)(p.a,{children:Object(i.jsx)(s.a,Object(r.a)(Object(r.a)({},f),{},{children:Object(i.jsxs)("form",{onSubmit:f.handleSubmit(j),children:[Object(i.jsx)(v.a,{name:"prodtypeName",label:Object(b.d)("entities.prodtype.fields.prodtypeName"),required:!0,layout:p.b,autoFocus:!0}),Object(i.jsx)(x.a,{name:"prodtypePlan",label:Object(b.d)("entities.prodtype.fields.prodtypePlan"),options:h.a.prodtypePlan.map((function(e){return{value:e,label:Object(b.d)("entities.prodtype.enumerators.prodtypePlan.".concat(e))}})),required:!1,layout:p.b}),Object(i.jsxs)(c.a.Item,Object(r.a)(Object(r.a)({className:"form-buttons"},p.c),{},{children:[Object(i.jsx)(d.a,{loading:y,type:"primary",onClick:f.handleSubmit(j),icon:Object(i.jsx)(o.a,{}),children:Object(b.d)("common.save")}),Object(i.jsx)(d.a,{disabled:y,onClick:function(){Object.keys(t).forEach((function(e){f.setValue(e,t[e])}))},icon:Object(i.jsx)(u.a,{}),children:Object(b.d)("common.reset")}),e.onCancel&&Object(i.jsx)(d.a,{disabled:y,onClick:function(){return e.onCancel()},icon:Object(i.jsx)(l.a,{}),children:Object(b.d)("common.cancel")})]}))]})}))})}}}]);