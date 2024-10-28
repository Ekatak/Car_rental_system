"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33731],{286988:(e,t,n)=>{n.d(t,{Z:()=>i,v:()=>l});let l=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function i(){if(!l())return[];try{return await navigator.getInstalledRelatedApps()}catch(e){return[]}}},119936:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var l=n(667294),i=n(883119),a=n(32346),r=n(696534),o=n(844683),s=n(140017),p=n(30378),d=n(5859),c=n(55202),u=n(217058),_=n(554786),m=n(239821),h=n(785893);let y=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},w=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function f({accessibilityModalLabel:e,align:t="center",allowClickAndDrag:n,allowScroll:f=!1,children:v,closeOnOutsideClick:x=!0,footer:g,heading:b,isOpen:k,mobileAccessibilityCloseIconLabel:j,mobileHeadingSize:P,mobileHideCloseIcon:A,mobileIsFooter:Z,mobileIsFullscreen:C,mobileIsFullpage:S,mobileIsSlideUp:I,onDismiss:L,subHeading:T,type:z,zIndex:U}){let O=(0,s.ZP)(),{isRTL:R}=(0,d.B)(),M=(0,l.useRef)(!1),[B,D]=(0,l.useState)(!1),{setAppFocusState:E}=(0,m.I)(),N=(0,_.ZP)(),W=(0,r.vs)();return((0,l.useEffect)(()=>(M.current=(0,a.Z)(()=>{M.current&&D(!0)}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&M.current&&(window.cancelAnimationFrame(M.current),M.current=null)}),[]),(0,l.useEffect)(()=>(k?(p.Z.pause(),E(!1),(0,u.My)(`mweb_unauth.mobile_modal.${z||"unknown_type"}.did_mount.is_open.true`)):(p.Z.resume(),E(!0)),()=>{k&&(p.Z.resume(),E(!0),(0,u.My)(`mweb_unauth.mobile_modal.${z||"unknown_type"}.did_mount.is_open.false`))}),[E,k]),(0,l.useEffect)(()=>{let e=k&&!f;return e&&y(),()=>{e&&w()}},[k,f]),k)?(0,h.jsx)(c.Z,{allowClickAndDrag:n,children:(0,h.jsx)(i.mh,{children:(0,h.jsxs)(i.xu,{"aria-label":e,display:"inlineBlock",position:"relative",role:"dialog",zIndex:U||o.ZM,children:[(0,h.jsx)(i.iP,{accessibilityLabel:O._('Mobile Signup Modal Mask', 'mweb.signup_modal.mask', 'The accessibility label for the mask of mobile signup modal'),dataTestId:"mobile-modal-mask-overlay",onTap:({event:e})=>{e.clientX&&e.clientY&&(0,u.tj)(`mweb_unauth.mobile_modal.wash_tap.${z||"unknown_type"}.with_dismissal`,{x:e.clientX,y:e.clientY}),x&&L()},tapStyle:"none",children:(0,h.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new i.Ry(1)})}),(0,h.jsxs)(i.xu,{color:"default",dangerouslySetInlineStyle:I?(0,o.Vf)({isFullscreen:C,isTablet:"tablet"===N,isShowing:B,isRelatedInterestsModal:"related_interests_modal"===z,isDarkMode:W}):(0,o.JN)({isDarkMode:W,variant:S?"fullpage":C?"fullscreen":"tablet"===N?"tablet":Z?"footer":"signup"===z?"signup":void 0}),"data-test-id":"mobile-signup-mask",position:"fixed",children:[(0,h.jsxs)(i.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"start",width:"100%",children:[j&&!A?(0,h.jsx)(i.xu,{"data-test-id":"mobile-modal-cancel-button",padding:2,children:(0,h.jsx)(i.hU,{accessibilityLabel:j,icon:"cancel",iconColor:W?"gray":"darkGray",onClick:L,padding:4,size:"sm"})}):null,b?(0,h.jsx)(i.kC.Item,{flex:"grow",children:(0,h.jsx)(i.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:(0,h.jsxs)(i.xu,{dangerouslySetInlineStyle:{__style:j&&!A?{marginRight:R?-10:50,marginLeft:R?50:-10}:{}},"data-test-id":"mobile-modal-heading",children:[C?b:(0,h.jsx)(i.xv,{align:t,size:P||"400",weight:"bold",children:b}),T?(0,h.jsx)(i.xv,{align:t,children:T}):null]})})}):null]}),(0,h.jsxs)(i.xu,{overflow:"auto",children:[v,g]})]})]})})}):null}},344064:(e,t,n)=>{n.d(t,{o$:()=>l,ty:()=>i,vE:()=>a});let{Provider:l,MaybeConsumer:i,useMaybeHook:a}=(0,n(342513).Z)("inviteContext")},194602:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(667294);let i=()=>()=>{},a=()=>!1,r=()=>!0,o=()=>(0,l.useSyncExternalStore)(i,a,r)},870526:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(667294),i=n(883119),a=n(490166),r=n(785893);let o=40,s=70,p={__style:{borderRadius:"4px",padding:"10px 14px"}},d={__style:{borderWidth:"1px",borderStyle:"solid",borderColor:"white"}},c={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},u=e=>({__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...e}}),_=e=>"transparent"===e||"dark"===e?"inverse":"primary"===e?"light":"default",m=({color:e,icon:t})=>t?c:"transparent"===e?{__style:{...p.__style,...d.__style}}:p,h=({accessibilityLabel:e,color:t,customStyles:n,forwardedRef:p,icon:d,inline:c=!1,minHeight:h=o,minWidth:y=s,onTouch:w,pressState:f,shape:v,text:x})=>{let[g,b]=(0,l.useState)(!1),k=_(t),j=m({color:t,icon:d}),P=(0,r.jsx)(i.xu,{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),position:"relative",children:(0,r.jsx)(i.xu,{color:"primary"===t&&g?"errorBase":t,dangerouslySetInlineStyle:"pill"===v?u(n):j,display:c?"inlineBlock":"flex",justifyContent:"center",minHeight:h,minWidth:y,children:(0,r.jsxs)(i.kC,{alignItems:"center",justifyContent:"center",children:[d&&(0,r.jsx)(i.xu,{paddingX:"check"===d?2:0,children:(0,r.jsx)(i.JO,{accessibilityLabel:e,color:k,icon:d,inline:!0,size:"check"===d?16:20})}),(0,r.jsx)(i.xv,{color:k,inline:!0,lineClamp:1,size:"300",weight:"bold",children:x})]})})});return w?(0,r.jsx)(a.Z,{onTouch:w,pressState:f||"none",rounding:"pill"===v?"pill":2,children:(0,r.jsx)(i.xu,{ref:p,children:P})}):P}},233731:(e,t,n)=>{n.d(t,{MZ:()=>L,di:()=>z,Ai:()=>T});var l=n(667294),i=n(616550),a=n(883119),r=n(286988),o=n(587703),s=n(422210),p=n(96157),d=n(805783),c=n(5859),u=n(191313),_=n(573810),m=n(217058),h=n(149722),y=n(90647),w=n(547010),f=n(773616),v=n(870526),x=n(460270),g=n(763223),b=n(862249),k=n(171966);let j=({children:e,external:t,externalQueryParams:n,target:l,href:a,features:r})=>{let o=(0,i.k6)();if(!a)return null;let s=(0,x.Z)(a);return e({navigate:e=>{e.preventDefault(),(0,b.Z)({url:s})||t?"undefined"!=typeof window&&window.Windows?(0,k.Z)(s):(0,g.Gj)(s,{queryParams:n,features:r}):(0,g.G3)({event:e,href:a,history:o,target:"blank"===l?"blank":null})}})};var P=n(785893),A=n(86264),Z=n(669177),C=n(386008);let S=e=>"string"==typeof e?e:`${e.pathname||""}${e.search?`?${e.search}`:""}`,I=(e,t=!1)=>function({isAppUpsellDisabled:n,...v}){let{children:x,clientTrackingParams:g,deeplinkUri:b,external:k,onTouch:j,refresh:I,to:L,viewParameter:T,viewType:z}=v,U=(0,f.Z)(),[O,R]=(0,l.useState)(!1),[M,B]=(0,l.useState)(!1),[D,E]=(0,l.useState)(!1),{isAuth:N}=(0,h.Z)(),{userAgent:{platform:W},locale:F}=(0,c.B)(),$=(0,C.Tt)(),H=(0,o.Z)(),q=(0,i.TH)();(0,l.useEffect)(()=>{(async function(){(0,r.v)()&&(E(!0),(await (0,r.Z)()).length>0&&B(!0))})()},[]),(0,l.useEffect)(()=>{N||"true"===(0,_.qn)("hasAppInstalledWasLogged")||((0,m.My)(`unauth.app_upsell.has_app.${M.toString()}`),(0,_.Nh)("hasAppInstalledWasLogged","true"))},[M,N]);let X=()=>{H({event_type:1701,view_type:z,view_parameter:T}),O&&R(!1)};return(0,P.jsxs)(a.xu,{"data-test-id":"deeplink-wrapper",children:[O&&(0,P.jsx)(w.Z,{app_upsell_type:"deep-link-app-upsell-modal",clientTrackingParams:g,deepLinkUri:b,isOpen:!0,onDismiss:()=>{H({component:14157,element:10308,event_type:10220,view_type:z||202,view_parameter:T,aux_data:{app_upsell_type:"deep-link-app-upsell-modal"}})},onOpenInApp:()=>{(0,u.Nh)("deeplinkBehavior","branchfallback"),X()},shouldTrackDismiss:!0,to:L,viewParameter:T,viewType:z}),(0,P.jsx)(A.Z,{children:l=>(0,P.jsx)(e,{...v,onTouch:e=>{let i=U&&!n&&N&&!k&&!I&&!(0,d.FP)(window)&&!("ios"===W&&(F||"").startsWith("ar"))&&(0,Z.kp)((0,s.Z)($?.created_at));if(i){let t=!0,n=!1;"string"==typeof b&&(b||"").startsWith("/pin/")&&((0,p.uM)(q)||(0,p.am)(q)||(0,p.C$)(q))?D&&M&&b&&"android"===W&&(t=!1):(t=!1,n=!0),t?(e.stopPropagation(),e.preventDefault(),R(!0)):n||(e.stopPropagation(),e.preventDefault(),H({component:14347,element:13582,event_type:3830,view_type:20,view_parameter:3844,aux_data:{upsell_reason:"deep-link-app-upsell-modal"}}),l(b??(0,y.B)(q,"android"===W),"deep-link-app-upsell-modal"))}else"branchfallback"!==(0,u.qn)("deeplinkBehavior")||(0,_.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,_.Nh)("fallbackAttempt",1),l(b,"deep-link-app-upsell-modal",`${window.location.origin}${S(L)}`),X());!(t&&i)&&j&&j(e)},children:x})})]})},L=I(({accessibilityLabel:e,children:t,external:n,externalQueryParams:l,features:i,inline:r=!1,newTab:o,nofollow:s,onTouch:p,onBlur:d,onFocus:c,pressState:u,rounding:_,to:m})=>(0,P.jsx)(j,{external:n,externalQueryParams:l,features:i,href:m,target:o?"blank":null,children:({navigate:n})=>(0,P.jsx)(a.rU,{accessibilityLabel:e,display:r?"inlineBlock":"block",href:(0,x.Z)(m),onBlur:d?({event:e})=>d(e):void 0,onClick:({event:e,dangerouslyDisableOnNavigation:t})=>{t(),p?.(e),e.defaultPrevented||n(e)},onFocus:c?({event:e})=>c(e):void 0,rel:s?"nofollow":"none",rounding:_,tapStyle:(Array.isArray(u)?u:[u]).includes("compress")?"compress":"none",underline:"none",children:t})})),T=I(({external:e,externalQueryParams:t,newTab:n,onTouch:l,to:i,...a})=>(0,P.jsx)(j,{external:e,externalQueryParams:t,href:i,target:n?"blank":null,children:({navigate:e})=>(0,P.jsx)(v.Z,{onTouch:t=>{l?.(t),t.defaultPrevented||e(t)},...a})})),z=I(v.Z,!0)},86264:(e,t,n)=>{n.d(t,{Z:()=>b});var l=n(214877),i=n(340523),a=n(5859),r=n(344064),o=n(669177),s=n(286988),p=n(624797),d=n(953565);let c="http://play.google.com/store/apps/details?id=com.pinterest",u=["access_token","new_password","new_password_confirm","password","next"],_=(e,t)=>t?(0,p.ru)(e,{invite_code:t}):e,m=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?_(e,n):"ios"===t||"ipad"===t?_(e.iOS,n):"android"===t?_(e.android,n):null},h=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:l,unauthId:i,app_upsell_type:a})=>({deeplink_path:m(e,n,t),current_page_url:(0,p.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:i,utm_source:140,utm_medium:2152,app_upsell_type:a,...l?{af_r:l}:null}),y=({deeplinkUri:e,invite_code:t,platform:n,unauthId:l,app_upsell_type:i})=>{let a=JSON.stringify({deeplink_path:m(e,n,t),current_page_url:(0,p.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:l});return{referrer:(0,p.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:a,app_upsell_type:i})}},w=({unauthId:e,app_upsell_type:t})=>({referrer:encodeURI((0,p.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t}))}),f=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:l,logContextEvent:i,platform:a,redirectToLite:r,unauthId:o,userAgent:u,app_upsell_type:_})=>{if(i?.({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),t){let m=h({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:l,platform:a,unauthId:o,userAgent:u,app_upsell_type:_});if((0,d.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:a}}),l&&(0,d.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,d.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!o}}),r){(0,d.nP)("mweb.deeplink.lite_link",{sampleRate:1}),i?.({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}});let e=w({unauthId:o,app_upsell_type:_});window.location.href=(0,p.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===a){let e=y({deeplinkUri:t,invite_code:l,platform:a,unauthId:o,app_upsell_type:_});(0,s.v)()?(0,s.Z)().then(t=>{if(t.length>0){let e=(0,p.ru)(window.location.href,m);i?.({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.open(e)||i?.({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}})}else i?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,p.ru)(c,e)}).catch(()=>{(0,d.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(i?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,p.ru)(c,e))}else{if((0,d.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===a&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,p.ru)("https://pinterest.com/pinterest-predicts",m);return}i?.({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,p.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",m)}}};var v=n(785893);function x({children:e,invite_code:t}){let{isAuthenticated:n,isBot:r,unauthId:s,userAgent:{platform:p,raw:d}}=(0,a.B)(),{logContextEvent:c}=(0,l.v)(),{checkExperiment:u}=(0,i.F)();return e(async(e,l,i)=>{c({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:l}}),f({isAuthenticated:n,checkExperiment:u,deeplinkUri:e,fallbackUrl:i,invite_code:t,logContextEvent:c,platform:p,redirectToLite:(0,o.Rp)({isBot:r,platform:p,userAgent:d}),unauthId:s,userAgent:d,app_upsell_type:l})})}let g=e=>(0,v.jsx)(r.ty,{children:t=>(0,v.jsx)(x,{...e,invite_code:t})});g.displayName="DeepLinkNavigator";let b=g},490166:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(883119),i=n(785893);function a({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:a,rounding:r,fullWidth:o=!1,pressState:s="none",accessibilityLabel:p,role:d}){let c=(Array.isArray(s)?s:[s]).includes("compress");return(0,i.jsx)(l.iP,{accessibilityLabel:p,fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:a&&(({event:e})=>a(e)),role:d,rounding:r,tapStyle:c?"compress":"none",children:e})}},766311:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(667294),i=n(587703),a=n(217058);let r=e=>Object.keys(e).reduce((t,n)=>(void 0===e[n]&&delete t[n],t),{...e}),o=({viewType:e,viewParameter:t,viewData:n,auxData:l,objectIdStr:i,component:o,clientTrackingParams:s,element:p},d)=>{let c=r({event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:l,object_id_str:i,component:o,clientTrackingParams:s,element:p});-1===Object.keys(c).indexOf("view_type")&&(0,a.My)("mweb.logging.null_view_type"),d(c)};function s(e){let{auxData:t,clientTrackingParams:n,children:a,component:r,element:s,objectIdStr:p,viewData:d,viewParameter:c,viewType:u}=e,_=(0,i.Z)(),m=JSON.stringify(t),h=JSON.stringify(d);return(0,l.useEffect)(()=>{o(e,_)},[_,m,n,r,s,p,h,c,u]),l.Children.only(a)}},90647:(e,t,n)=>{n.d(t,{B:()=>h,Z:()=>y});var l=n(667294),i=n(616550),a=n(214877),r=n(525364),o=n(96157),s=n(5859),p=n(217058),d=n(623409),c=n(773616),u=n(86264),_=n(953565),m=n(785893);let h=(e,t)=>"/"===e.pathname?"/":(0,o.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function y({children:e,componentType:t,app_upsell_type:n}){let o=(0,i.TH)(),{flushContextEvents:y,logContextEvent:w}=(0,a.v)(),{viewType:f,viewParameter:v}=(0,r.SU)(),x=(0,d.Z)(),{userAgent:{platform:g}}=(0,s.B)();(0,l.useEffect)(()=>{x({action:"view",item:"download-button",within:n})},[o,n,x]);let b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{f&&202!==f?(w({component:t||13106,element:10308,event_type:9976,view_type:f,view_parameter:v,aux_data:{app_upsell_type:n,app_upsell_is_dupe:b.current}}),b.current=!0):(0,_.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:t,view_type:f,view_parameter:v,app_upsell_type:n,app_upsell_is_dupe:b.current}})},[t,w,v,f,n]);let k=(0,c.Z)();return(0,l.useEffect)(()=>{k||(0,p.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[k,n]),(0,m.jsx)(u.Z,{children:l=>e({handleOpenApp:e=>{x({action:"click",item:"download-button",within:n}),(0,p.NC)("press_open_app",!0),w({component:t||13106,element:10308,event_type:102,view_type:f||202,view_parameter:v,aux_data:{app_upsell_type:n}}),w({component:t||13106,element:10308,event_type:9977,view_type:f||202,view_parameter:v,aux_data:{app_upsell_type:n}}),y(!0),l&&(w({component:t||13106,element:10308,event_type:1701,view_type:f||202,view_parameter:v,aux_data:{app_upsell_type:n}}),l(e?.deepLinkUri??h(o,"android"===g),n))}})})}},547010:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(883119),i=n(119936),a=n(140017),r=n(340370),o=n(5859),s=n(554786),p=n(90647),d=n(677233),c=n(669177),u=n(785893);let _=({deepLinkUri:e,isOpen:t,onDismiss:n,onOpenInApp:d,to:_,app_upsell_type:m})=>{let h=(0,a.ZP)(),y=(0,s.Wb)(),{isBot:w,userAgent:{platform:f,raw:v}}=(0,o.B)(),x=(0,c.Rp)({isBot:w,platform:f,userAgent:v}),g=(0,r.Z)({href:_??""}),b=y?60:40;return(0,u.jsx)(i.default,{accessibilityModalLabel:"",closeOnOutsideClick:!1,isOpen:t,mobileHideCloseIcon:!0,onDismiss:()=>{},type:"app_upsell_v1",zIndex:new l.Ry(101),children:(0,u.jsx)(p.Z,{app_upsell_type:m,componentType:14157,children:({handleOpenApp:t})=>(0,u.jsxs)(l.xu,{"data-test-id":"appUpsell-iframe",padding:3,children:[(0,u.jsx)(l.xu,{display:"inlineBlock",position:"absolute",children:(0,u.jsx)(l.xu,{"data-test-id":"appUpsell-continue",children:(0,u.jsx)(l.hU,{accessibilityLabel:h._('close icon background', 'accesibility label for close icon on a overlay', 'accesibility label for close icon on a overlay'),icon:"cancel",iconColor:"gray",onClick:({event:e})=>{n({event:e}),g&&!e.defaultPrevented&&g({event:e})},size:"lg"})})}),(0,u.jsxs)(l.xu,{paddingX:2,paddingY:6,children:[(0,u.jsx)(l.xu,{display:"flex",justifyContent:"center",paddingY:2,children:(0,u.jsx)(l.JO,{accessibilityLabel:"Pinterest App",color:"brandPrimary",icon:"pinterest",size:b})}),(0,u.jsxs)(l.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[(0,u.jsx)(l.xu,{paddingY:2,children:(0,u.jsx)(l.X6,{align:"center",size:"400",children:x?h._('Try Pinterest Lite', 'mweb.app_upsell.lite_app_upsell_title', 'Mobile Web App Upsell title informing the value of downloading the lite app'):h._('Pinterest is better on the app', 'mweb.unauth.app_upsell.app_value_prop2', 'Mobile Web App Upsell title on Pin click informing the value of downloading an app')})}),(0,u.jsx)(l.xv,{align:"center",size:"300",children:x?h._('A space-saving way to discover new ideas', 'mweb.app_upsell.lite_app_value_prop', 'Mobile Web App Upsell subheading informing the user the value of downloading the lite app'):h._('Continue in the app for the full experience', 'mweb.app_upsell.description4', 'description on app upsell modal')}),(0,u.jsx)(l.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:8,children:(0,u.jsx)(l.zx,{color:"red",fullWidth:!0,onClick:()=>{t({deepLinkUri:e}),d()},size:"lg",text:h._('Open app', 'mweb.app_upsell.app_upsell_button_text1', 'Button to get the Pinterest Lite app')})})]})]})]})})})};function m({clientTrackingParams:e,deepLinkUri:t,isOpen:n,onDismiss:l,onOpenInApp:i,shouldTrackDismiss:a,to:r,viewParameter:o,viewType:s,app_upsell_type:p}){return(0,u.jsx)(d.Z,{clientTrackingParams:e,viewParameter:o,viewType:s,children:(0,u.jsx)(_,{app_upsell_type:p,deepLinkUri:t,isOpen:n,onDismiss:e=>{a&&(0,d.y)(),l(e)},onOpenInApp:()=>{(0,d.y)(),i()},to:r})})}},677233:(e,t,n)=>{n.d(t,{Z:()=>c,y:()=>d});var l=n(667294),i=n(805783),a=n(191313),r=n(573810),o=n(194602),s=n(766311),p=n(785893);let d=()=>{(0,a.Nh)("appUpsell",Date.now()),(0,a.qn)("firstUpsellTime")||(0,a.Nh)("firstUpsellTime",Date.now()),(0,r.Nh)("showedAppUpsellCurrentSession",!0)};function c({children:e,clientTrackingParams:t,viewParameter:n,viewType:a}){return(0,o.Z)()||(0,i.FP)(window)?null:(0,p.jsx)(s.Z,{clientTrackingParams:t,component:13106,viewParameter:n,viewType:a,children:(0,p.jsx)(l.Fragment,{children:e})})}},773616:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(545007);let i=()=>(0,l.v9)(({session:{canUseNativeApp:e}})=>e)},669177:(e,t,n)=>{n.d(t,{G3:()=>d,Rp:()=>p,kp:()=>o});var l=n(188349),i=n(191313),a=n(573810);let r=14*l.F4,o=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,i.qn)("appUpsell"));return{currentTime:e,firstUpsellTime:Number((0,i.qn)("firstUpsellTime")),lastUpsellTime:t,showedAppUpsellCurrentSession:!!(0,a.qn)("showedAppUpsellCurrentSession")}}();return e?function(e,t,n){let{currentTime:l,firstUpsellTime:a,lastUpsellTime:o,showedAppUpsellCurrentSession:s}=e;return(n=n||r,!a||l<a+t)?!s:l-o>n&&((0,i.L_)("firstUpsellTime"),!0)}(n,l.F4):function(e,t){let{currentTime:n,lastUpsellTime:l}=e;return t=t||r,!l||n-l>t}(n,t)},s=e=>{let t=(e=e.toLowerCase()).match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},p=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},d=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/33731-eee902abe8b38159.mjs.map