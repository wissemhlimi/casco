(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[79],{1317:function(e,n,t){"use strict";t.r(n);var r=t(11),a=t(2),i=t(3),c=t(7),o=t(627),u=t(0),l=t(199),s=t(777),d=t(701),m=t(778),f=t(1307),b=t(668),j=t(212),p=t(622),h=t(45),x=t(179),g=t(5),O=function(e){return e.settings},v=Object(g.a)([O],(function(e){return e.settings})),y={selectInitLoading:Object(g.a)([O],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(g.a)([O],(function(e){return Boolean(e.saveLoading)})),selectSettings:v,selectRaw:O},w=t(184);function q(){var e=Object(w.a)(["\n  .color-box {\n    float: left;\n    width: 20px;\n    height: 20px;\n    margin: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    background: ",";\n  }\n\n  .ant-radio-wrapper-checked .color-box::after {\n    border: solid #fff;\n    background: #fff;\n    top: 50%;\n    left: 12%;\n    margin-left: -3px;\n    margin-top: -3px;\n    height: 6px;\n    width: 6px;\n    border-radius: 100% !important;\n    position: absolute;\n    content: '';\n  }\n\n  .ant-radio-wrapper-checked .color-text {\n    color: ",";\n  }\n\n  .ant-radio {\n    display: none;\n  }\n"]);return q=function(){return e},e}var k=t(185).a.div(q(),(function(e){return e.color}),(function(e){return e.color})),S=t(626),C=t(634),I=t(46),U=t(640),M={theme:[{id:"default",hex:"#1890ff"},{id:"cyan",hex:"#13c2c2"},{id:"geek-blue",hex:"#2f54eb"},{id:"gold",hex:"#faad14"},{id:"lime",hex:"#a0d911"},{id:"magenta",hex:"#eb2f96"},{id:"orange",hex:"#fa8c16"},{id:"polar-green",hex:"#52c41a"},{id:"purple",hex:"#722ed1"},{id:"red",hex:"#f5222d"},{id:"volcano",hex:"#fa541c"},{id:"yellow",hex:"#fadb14"}]},Y=t(985),z=t(311),E=t(645),L=I.e().shape({theme:U.a.enumerator(Object(i.c)("settings.fields.theme"),{required:!0,options:M.theme.map((function(e){return e.id}))}),logos:U.a.files(Object(i.c)("settings.fields.logos"),{max:1}),backgroundImages:U.a.files(Object(i.c)("settings.fields.backgroundImages"),{max:1})}),B=function(e){var n=Object(h.d)(),t=Object(h.e)(y.selectSaveLoading),c=Object(a.useState)((function(){return e.settings||{}})),o=Object(l.a)(c,1)[0],g=function(e){n(x.a.doSave(e))},O=Object(p.c)({resolver:Object(E.yupResolver)(L),mode:"all",defaultValues:o});Object(a.useEffect)((function(){O.register({name:"theme"})}),[]);var v={display:"block",height:"30px",lineHeight:"30px"},w=S.a.errorMessage("theme",O.errors,O.formState.touched,O.formState.isSubmitted);return Object(r.jsx)(C.a,{children:Object(r.jsx)(p.a,Object(u.a)(Object(u.a)({},O),{},{children:Object(r.jsxs)("form",{onSubmit:O.handleSubmit(g),children:[Object(r.jsx)(f.a.Item,Object(u.a)(Object(u.a)({},C.b),{},{label:Object(i.c)("settings.fields.theme"),help:w,validateStatus:w?"error":"success",children:Object(r.jsx)(b.a.Group,{id:"theme",onChange:function(e){return O.setValue("theme",e.target.value,{shouldValidate:!0})},value:O.watch("theme"),children:M.theme.map((function(e){return Object(r.jsx)(k,{color:e.hex,children:Object(r.jsxs)(b.a,{style:v,value:e.id,children:[Object(r.jsx)("div",{className:"color-box",children:Object(r.jsx)("div",{className:"color-box-inner"})}),Object(r.jsx)("span",{className:"color-text",children:Object(i.c)("settings.colors.".concat(e.id))})]})},e.id)}))})})),Object(r.jsx)(Y.a,{name:"logos",label:Object(i.c)("settings.fields.logos"),storage:z.a.values.settingsLogos,max:1,layout:C.b}),Object(r.jsx)(Y.a,{name:"backgroundImages",label:Object(i.c)("settings.fields.backgroundImages"),storage:z.a.values.settingsBackgroundImages,max:1,layout:C.b}),Object(r.jsxs)(f.a.Item,Object(u.a)(Object(u.a)({className:"form-buttons"},C.c),{},{children:[Object(r.jsx)(j.a,{loading:t,type:"primary",onClick:O.handleSubmit(g),icon:Object(r.jsx)(s.a,{}),children:Object(i.c)("common.save")}),Object(r.jsx)(j.a,{disabled:t,onClick:function(){Object.keys(o).forEach((function(e){O.setValue(e,o[e])}))},icon:Object(r.jsx)(d.a,{}),children:Object(i.c)("common.reset")}),e.onCancel&&Object(r.jsx)(j.a,{disabled:t,onClick:function(){return e.onCancel()},icon:Object(r.jsx)(m.a,{}),children:Object(i.c)("common.cancel")})]}))]})}))})},D=t(613),T=t(99),V=t(143),F=t(638),N=function(e){var n=Object(h.e)(V.a.selectPermissionToRead);return Object(r.jsx)(F.a,{children:n&&Object(r.jsx)(T.a,{to:"/audit-logs?entityNames=settings",children:Object(r.jsx)(j.a,{icon:Object(r.jsx)(D.a,{}),children:Object(i.c)("auditLog.menu")})})})},R=t(629),A=t(628),H=t(658);n.default=function(e){var n=Object(h.d)(),t=Object(h.e)(y.selectInitLoading),u=Object(h.e)(y.selectSettings);return Object(a.useEffect)((function(){n(x.a.doInit())}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R.a,{items:[[Object(i.c)("dashboard.menu"),"/"],[Object(i.c)("settings.title")]]}),Object(r.jsxs)(o.a,{children:[Object(r.jsx)(A.a,{children:Object(i.c)("settings.title")}),Object(r.jsx)(N,{}),t&&Object(r.jsx)(H.a,{}),!t&&u&&Object(r.jsx)(B,{settings:u,onCancel:function(){return Object(c.b)().push("/")}})]})]})}},626:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(14),a=t(15),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},627:function(e,n,t){"use strict";var r=t(184);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var i=t(185).a.div(a());n.a=i},628:function(e,n,t){"use strict";var r=t(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var i=t(185).a.h1(a());n.a=i},629:function(e,n,t){"use strict";var r=t(11),a=t(674),i=(t(2),t(99));n.a=function(e){var n=function(e){return e.length>1};return Object(r.jsx)(a.a,{children:e.items.map((function(e){return Object(r.jsx)(a.a.Item,{children:n(e)?Object(r.jsx)(i.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},634:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o}));var r=t(184);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var i=t(185).a.div(a()),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},638:function(e,n,t){"use strict";var r=t(184);function a(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var i=t(185).a.div(a());n.a=i},640:function(e,n,t){"use strict";var r=t(53),a=t(46),i=t(3),c=t(111),o=t.n(c),u={generic:e=>a.c().label(e),string(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.c)("validation.string.selected"))),t},email(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=u},658:function(e,n,t){"use strict";var r=t(11),a=t(660);t(2);n.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},883:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(199),a=t(1),i=t.n(a),c=t(4),o=t(14),u=t(15),l=t(884),s=t.n(l),d=t(3),m=t(10),f=t(984),b=t(9),j=t(310),p=t.n(j),h=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"validate",value:function(e,n){if(n){if(n.image&&!e.type.startsWith("image"))throw new Error(Object(d.c)("fileUploader.image"));if(n.storage.maxSizeInBytes&&e.size>n.storage.maxSizeInBytes)throw new Error(Object(d.c)("fileUploader.size",s()(n.storage.maxSizeInBytes)));var t=x(e.name);if(n.formats&&!n.formats.includes(t))throw new Error(Object(d.c)("fileUploader.formats",n.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(c.a)(i.a.mark((function e(n,t,r,a){var c,o,u,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(n.file,t),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),n.onError(e.t0),a(e.t0),e.abrupt("return");case 9:c=x(n.file.name),o=Object(f.a)(),u="".concat(o,".").concat(c),this.fetchFileCredentials(u,t).then((function(e){var t=e.uploadCredentials,a=e.downloadUrl,i=e.privateUrl;return l.uploadToServer(n.file,t).then((function(){n.onSuccess(),r({id:o,name:n.file.name,sizeInBytes:n.file.size,publicUrl:t&&t.publicUrl?t.publicUrl:null,privateUrl:i,downloadUrl:a,new:!0})}))})).catch((function(e){n.onError(e),a(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(n,t,r,a){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(c.a)(i.a.mark((function e(n,t){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.a.get(),e.next=3,m.a.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:n,storageId:t.storage.id}});case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(c.a)(i.a.mark((function e(n,t){var a,c,o,u,l,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.url,c=new FormData,t.fields)for(o=0,u=Object.entries(t.fields||{});o<u.length;o++)l=Object(r.a)(u[o],2),s=l[0],d=l[1],c.append(s,d);return c.append("file",n),e.abrupt("return",p.a.post(a,c,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}()}]),e}();function x(e){if(!e)return null;var n=/(?:\.([^.]+))?$/.exec(e);return n?n[1]:null}},985:function(e,n,t){"use strict";var r=t(0),a=t(11),i=t(1307),c=t(622),o=t(2),u=t(626),l=t(53),s=t(199),d=t(983),m=t(844),f=t(883),b=t(6),j=t(184);function p(){var e=Object(j.a)(["\n  .ant-upload-select-picture-card i {\n    font-size: 32px;\n    color: #999;\n  }\n\n  .ant-upload-select-picture-card .ant-upload-text {\n    margin-top: 8px;\n    color: #666;\n  }\n\n  .ant-upload-list-item-info > span {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ant-upload-list-item-thumbnail > img {\n    object-fit: cover;\n  }\n"]);return p=function(){return e},e}var h=t(185).a.div(p()),x=t(3),g=t(989),O=t(773),v=function(e){var n=Object(o.useState)(!1),t=Object(s.a)(n,2),r=t[0],i=t[1],c=Object(o.useState)(!1),u=Object(s.a)(c,2),j=u[0],p=u[1],v=Object(o.useState)(""),y=Object(s.a)(v,2),w=y[0],q=y[1],k=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]},S=function(){return k().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,size:e.size,type:e.type}}))},C=function(e){i(!1),b.a.showMessage(e)},I=e.max,U=Object(a.jsxs)("div",{children:[r?Object(a.jsx)(g.a,{}):Object(a.jsx)(O.a,{}),Object(a.jsx)("div",{className:"ant-upload-text",children:Object(x.c)("fileUploader.upload")})]});return Object(a.jsxs)(h,{children:[Object(a.jsx)(d.a,{accept:"image/*",fileList:S(),listType:"picture-card",customRequest:function(n){f.a.uploadFromRequest(n,{storage:e.storage,image:!0},(function(n){!function(n){i(!1),e.onChange([].concat(Object(l.a)(k()),[n]))}(n)}),(function(e){C(e)}))},onChange:function(n){var t;n&&n.file&&n.file.status&&("removed"===n.file.status?(t=n.file.uid,e.onChange(k().filter((function(e){return e.id!==t})))):i(!0))},onPreview:function(e){q(e.url),p(!0)},beforeUpload:function(n){try{return f.a.validate(n,{storage:e.storage,image:!0}),!0}catch(t){return C(t),!1}},children:I&&S().length>=I?null:U}),Object(a.jsx)(m.a,{visible:j,footer:null,onCancel:function(){p(!1)},children:Object(a.jsx)("img",{alt:w,style:{width:"100%"},src:w})})]})},y=function(e){var n=e.label,t=e.name,l=e.hint,s=e.layout,d=e.storage,m=e.max,f=e.required,b=e.externalErrorMessage,j=Object(c.d)(),p=j.errors,h=j.formState,x=h.touched,g=h.isSubmitted,O=j.setValue,y=j.watch,w=j.register;Object(o.useEffect)((function(){w({name:t})}),[w,t]);var q=u.a.errorMessage(t,p,x,g,b),k=q||l;return Object(a.jsx)(i.a.Item,Object(r.a)(Object(r.a)({},s),{},{label:n,required:f,validateStatus:q?"error":"success",help:k,children:Object(a.jsx)(v,{storage:d,value:y(t),onChange:function(n){O(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},max:m})}))};y.defaultProps={layout:null,max:void 0,required:!1};n.a=y}}]);