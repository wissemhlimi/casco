(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[99],{1295:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r(198),i=r(11),l=r(1307),u=r(668),c=r(212),o=r(1296),s=r(2),m=r(621),d=r(44),b=r(106),f=r(3),h=r(23),j=r(41),p=r(813),g=r(814),x=r(839),v=r(815),O=r(632),q=r(639),w=r(45),y=r(645),M=r(37),k=r(847),Y=r.n(k),C=r(12),E=w.e().shape({email:q.a.string(Object(f.c)("user.fields.email"),{required:!0}),password:q.a.string(Object(f.c)("user.fields.password"),{required:!0}),rememberMe:q.a.boolean(Object(f.c)("user.fields.rememberMe"))});n.default=function(e){var n=Object(M.g)(),r=Object(d.d)(),q=Object(d.e)(j.a.selectLoading),w=Y.a.parse(n.search).socialErrorCode,k=Object(d.e)(j.a.selectErrorMessage),S=Object(d.e)(j.a.selectBackgroundImageUrl),z=Object(d.e)(j.a.selectLogoUrl),D=function(){r(h.a.doClearErrorMessage())};Object(s.useEffect)((function(){D(),V.register({name:"rememberMe"})}),[]),Object(s.useEffect)((function(){w&&("generic"===w?C.a.error(Object(f.c)("errors.defaultErrorMessage")):C.a.error(Object(f.c)("auth.social.errors.".concat(w))))}),[]);var A=Object(s.useState)({email:"",password:"",rememberMe:!0}),I=Object(a.a)(A,1)[0],V=Object(m.c)({resolver:Object(y.yupResolver)(E),mode:"onSubmit",defaultValues:I});return Object(i.jsx)(v.a,{style:{backgroundImage:"url(".concat(S||"/images/signin.jpg",")")},children:Object(i.jsxs)(p.a,{children:[Object(i.jsx)(g.a,{children:z?Object(i.jsx)("img",{src:z,width:"240px",alt:Object(f.c)("app.title")}):Object(i.jsx)("h1",{children:Object(f.c)("app.title")})}),Object(i.jsx)(m.a,Object(t.a)(Object(t.a)({},V),{},{children:Object(i.jsxs)("form",{onSubmit:V.handleSubmit((function(e){var n=e.email,t=e.password,a=e.rememberMe;r(h.a.doSigninWithEmailAndPassword(n,t,a))})),children:[Object(i.jsx)(O.a,{name:"email",placeholder:Object(f.c)("user.fields.email"),autoComplete:"email",size:"large",autoFocus:!0,layout:null,onChange:function(){k&&D()},externalErrorMessage:k}),Object(i.jsx)(O.a,{name:"password",placeholder:Object(f.c)("user.fields.password"),autoComplete:"password",type:"password",size:"large",layout:null}),Object(i.jsxs)(l.a.Item,{children:[Object(i.jsx)(u.a,{checked:V.watch("rememberMe"),onChange:function(e){return V.setValue("rememberMe",e.target.checked)},type:"checkbox",children:Object(f.c)("user.fields.rememberMe")}),Object(i.jsx)(b.a,{style:{float:"right"},to:"/auth/forgot-password",children:Object(f.c)("auth.forgotPassword")})]}),Object(i.jsx)(c.a,{type:"primary",size:"large",block:!0,htmlType:"submit",loading:q,children:Object(f.c)("auth.signin")}),Object(i.jsx)(o.a,{style:{color:"white",margin:"24px 0"},children:Object(f.c)("common.or")}),Object(i.jsx)(x.a,{children:Object(i.jsx)(b.a,{to:"/auth/signup",children:Object(f.c)("auth.createAnAccount")})})]})}))]})})}},625:function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r(14),a=r(15),i=function(){function e(){Object(t.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,r,t){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!r[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},632:function(e,n,r){"use strict";var t=r(0),a=r(11),i=r(1307),l=r(1310),u=r(621),c=r(2),o=r(625),s=function(e){var n=e.label,r=e.name,s=e.hint,m=e.layout,d=e.size,b=e.type,f=e.placeholder,h=e.autoFocus,j=e.autoComplete,p=e.prefix,g=e.externalErrorMessage,x=e.required,v=e.addonAfter,O=Object(u.d)(),q=O.setValue,w=O.watch,y=O.register,M=O.errors,k=O.formState,Y=k.touched,C=k.isSubmitted;Object(c.useEffect)((function(){y({name:r})}),[y,r]);var E=o.a.errorMessage(r,M,Y,C,g);return Object(a.jsx)(i.a.Item,Object(t.a)(Object(t.a)({},m),{},{label:n,required:x,validateStatus:E?"error":"success",help:E||s,children:Object(a.jsx)(l.a,{id:r,name:r,type:b,value:w(r),onChange:function(n){q(r,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:f||void 0,autoFocus:h||!1,autoComplete:j||void 0,prefix:p||void 0,addonAfter:v||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},639:function(e,n,r){"use strict";var t=r(52),a=r(45),i=r(3),l=r(108),u=r.n(l),c={generic:e=>a.c().label(e),string(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},boolean:(e,n)=>a.b().default(!1).label(e),relationToOne(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(r=r.required()),r},stringArray(e,n){n=n||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},relationToMany(e,n){n=n||{};var r=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},integer(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},images(e,n){n=n||{};var r=a.a().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},files(e,n){n=n||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},enumerator(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(n.options||[])));return n.required&&(r=r.required(Object(i.c)("validation.string.selected"))),r},email(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},decimal(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},datetime(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return e?u()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(r=r.required()),r},date(e,n){n=n||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return n.required&&(r=r.required()),r}};n.a=c},813:function(e,n,r){"use strict";var t=r(182);function a(){var e=Object(t.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return a=function(){return e},e}var i=r(183).a.div(a());n.a=i},814:function(e,n,r){"use strict";var t=r(182);function a(){var e=Object(t.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"]);return a=function(){return e},e}var i=r(183).a.div(a());n.a=i},815:function(e,n,r){"use strict";var t=r(182);function a(){var e=Object(t.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"]);return a=function(){return e},e}var i=r(183).a.div(a());n.a=i},839:function(e,n,r){"use strict";var t=r(182);function a(){var e=Object(t.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return a=function(){return e},e}var i=r(183).a.div(a());n.a=i}}]);