(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{6249:function(){},1107:function(e,t,r){Promise.resolve().then(r.bind(r,4665))},4665:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(1595),i=r(3146),a=r(8582),o=r(4013),s=r(5002),c=r(2362),l=r(20),u=r(291),d=r(5211),h=r(9507),v=r(7468),f=r(2265),g=r(3996),p=r(3448),m=r(9376),Z=r(4654),C=r(3250),y=r(156);let w=e=>{let t=(0,m.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(o.Z,{css:(0,i.iv)({color:"inherit"}),onClick:()=>{t.push("/login"),(0,Z.sy)(e)},children:"ログインする"}),(0,n.tZ)(o.Z,{css:(0,i.iv)({color:"inherit"}),onClick:()=>{(0,Z.sy)(e)},children:"閉じる"})]})};function b(){let[e,t]=(0,y.tN)(),r=(0,m.useRouter)(),[b]=(0,g.fl)(),x=(0,p.PQ)(p.YI.primary.getArgb(b.scheme));(0,p.PQ)(p.YI.onSurface.getArgb(b.scheme)),(0,p.PQ)(p.YI.onSurfaceVariant.getArgb(b.scheme));let[I,P]=(0,f.useState)(""),[S,k]=(0,f.useState)(""),[T,A]=(0,f.useState)(""),B=(0,f.useRef)(null),X=(0,f.useRef)(void 0),Q=(0,f.useRef)(),[_,L]=(0,f.useState)(void 0),[Y,N]=(0,f.useState)("signup"),R=(0,f.useMemo)(()=>new C.AM({UserPoolId:y.ZP,ClientId:y.xh}),[]),E=async()=>{if(!I||!T||!S){(0,Z.yv)("入力してください",{variant:"error"});return}let e="+81".concat(S.replace(/^0/,"")),t=[new C.KC({Name:"email",Value:I}),new C.KC({Name:"phone_number",Value:e})];R.signUp(e,T,t,[],(t,r)=>{if(t){switch(console.log(t),t.name){case"InvalidPasswordException":default:(0,Z.yv)(t.message,{variant:"error"});break;case"UsernameExistsException":(0,Z.yv)("この電話番号はすでに登録されています",{variant:"error",action:w,persist:!0})}return}X.current=null==r?void 0:r.user,Q.current={phoneNumber:e,password:T},(0,Z.yv)("作成完了。確認コードをSMSに送信しました。"),N("confirm")})};return(0,n.BX)("div",{children:[(0,n.tZ)(a.Z,{}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}),children:[(0,n.tZ)(s.Z,{variant:"h4",css:(0,i.iv)({color:x,fontWeight:"bold"}),children:"アカウント作成"}),(0,n.BX)("div",{css:(0,i.iv)({marginTop:16,display:"flex",flexDirection:"column"}),children:[(0,n.BX)(c.Z,{variant:"standard",css:(0,i.iv)({marginTop:16}),children:[(0,n.tZ)(l.Z,{children:"電話番号"}),(0,n.tZ)(u.Z,{placeholder:"09012345678",value:S,onChange:e=>k(e.target.value)})]}),(0,n.BX)(c.Z,{variant:"standard",css:(0,i.iv)({marginTop:8}),children:[(0,n.tZ)(l.Z,{children:"メールアドレス"}),(0,n.tZ)(u.Z,{type:"email",value:I,onChange:e=>P(e.target.value)})]}),(0,n.BX)(c.Z,{variant:"standard",css:(0,i.iv)({marginTop:8}),children:[(0,n.tZ)(l.Z,{children:"パスワード"}),(0,n.tZ)(u.Z,{type:"password",value:T,onChange:e=>{var t;A(e.target.value),L((t=e.target.value).length<8?{valid:!1,message:"パスワードは8文字以上で入力してください"}:/[a-z]/.test(t)?/[A-Z]/.test(t)?/[0-9]/.test(t)?/[^a-zA-Z0-9]/.test(t)?{valid:!0}:{valid:!1,message:"パスワードは記号(英数字以外の文字)を含めてください"}:{valid:!1,message:"パスワードは数字を含めてください"}:{valid:!1,message:"パスワードは大文字英語を含めてください"}:{valid:!1,message:"パスワードは小文字英語を含めてください"})}}),(0,n.tZ)(s.Z,{variant:"caption",color:"error",children:null==_?void 0:_.message})]}),(0,n.BX)("div",{css:(0,i.iv)({marginTop:32,display:"flex",flexDirection:"row",justifyContent:"flex-end"}),children:[(0,n.tZ)(o.Z,{onClick:()=>{r.push("/login")},children:"作成済みのアカウントでログイン"}),(0,n.tZ)(o.Z,{variant:"contained",onClick:E,disabled:!I||!S||!T||!(null==_?void 0:_.valid),children:"アカウント作成"})]})]})]}),(0,n.BX)(d.Z,{open:"confirm"===Y,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(h.Z,{children:"確認コードを入力"}),(0,n.BX)(v.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.BX)(c.Z,{variant:"standard",css:(0,i.iv)({}),children:[(0,n.tZ)(l.Z,{children:"確認コード"}),(0,n.tZ)(u.Z,{inputRef:B})]}),(0,n.tZ)(o.Z,{variant:"contained",css:(0,i.iv)({marginTop:16}),onClick:()=>{var n;let i=null===(n=B.current)||void 0===n?void 0:n.value;if(!i){(0,Z.yv)("confirmation code is required",{variant:"error"});return}let a=X.current;if(!a){(0,Z.yv)("user is not found",{variant:"error"});return}a.confirmRegistration(i,!0,(n,i)=>{if(n){(0,Z.yv)(n.message,{variant:"error"});return}(0,Z.yv)("コード確認: ".concat(i));let o=Q.current;if(!o){(0,Z.yv)("user auth info is not found",{variant:"error"});return}a.authenticateUser(new C.sD({Username:o.phoneNumber,Password:o.password}),{onSuccess:function(n){let i=n.getIdToken().getJwtToken();(0,Z.yv)("ログイン成功"),e.apiClient.setNewIdToken(i),t.setStatus("authenticated"),r.push("/user")},onFailure:function(e){(0,Z.yv)("login failed",{variant:"error"}),console.error(e)}})})},children:"確認"})]})]})]})}},8582:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(1595),i=r(1495),a=r(1004),o=r(5002),s=r(3146),c=r(3996),l=r(3448),u=r(8236),d=r(7648);function h(){let[e]=(0,c.fl)(),t=(0,l.PQ)(l.YI.primary.getArgb(e.scheme));return(0,l.PQ)(l.YI.onSurface.getArgb(e.scheme)),(0,l.PQ)(l.YI.onSurfaceVariant.getArgb(e.scheme)),(0,n.tZ)(i.Z,{position:"fixed",elevation:0,css:(0,s.iv)({backgroundColor:"transparent",color:t}),children:(0,n.tZ)(a.Z,{children:(0,n.BX)(d.default,{href:"/",css:(0,s.iv)({display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"}),children:[(0,n.tZ)(u.K,{css:(0,s.iv)({marginRight:"8px"})}),(0,n.tZ)(o.Z,{variant:"h6",css:(0,s.iv)({fontWeight:"bold"}),children:"推しコール"})]})})})}},8236:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});var n=r(1595),i=r(8416);function a(e){return(0,n.tZ)(i.Z,{...e,children:(0,n.BX)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.BX)("g",{"clip-path":"url(#clip0_676_7)",children:[(0,n.tZ)("path",{d:"M316.212 349.305C310.227 343.329 300.692 342.825 294.113 348.128L262.973 373.237C256.808 378.216 247.974 378.117 241.908 373.003C241.908 373.003 215.36 355.137 186.108 325.885C156.856 296.65 138.981 270.076 138.981 270.076C133.876 264.019 133.778 255.185 138.756 249.02L163.856 217.88C169.168 211.293 168.664 201.767 162.679 195.782L103.06 136.163C96.984 130.106 87.288 129.674 80.691 135.192L5.911 198.002C-0.0919976 203.052 -1.745 211.581 1.975 218.5C1.975 218.5 12.023 239.026 21.369 254.735C47.027 297.908 88.735 348.963 125.878 386.115C163.038 423.257 214.066 464.974 257.265 490.632C272.974 499.961 293.491 510.035 293.491 510.035C300.393 513.72 308.949 512.075 313.981 506.073L376.799 431.293C382.317 424.714 381.885 415.008 375.828 408.933L316.212 349.305Z"}),(0,n.tZ)("path",{d:"M330.906 269.349L355.727 265.413C351.531 239.009 339.2 213.532 318.818 193.158C298.472 172.812 273.003 160.482 246.582 156.267L242.637 181.08C264.035 184.531 284.533 194.416 301.051 210.935C317.578 227.452 327.481 247.96 330.906 269.349Z"}),(0,n.tZ)("path",{d:"M430.731 81.272C385.751 36.302 329.593 9.215 271.259 0.012001L267.359 24.834C320.677 33.264 371.813 57.924 412.946 99.048C454.07 140.172 478.721 191.343 487.16 244.644L512 240.726C502.779 182.383 475.693 126.242 430.731 81.272Z"}),(0,n.tZ)("path",{d:"M258.911 78.054L255.011 102.903C292.405 108.79 328.271 126.035 357.111 154.874C385.959 183.721 403.223 219.57 409.091 256.983L433.921 253.065C427.279 210.656 407.599 169.801 374.904 137.107C342.192 104.404 301.329 84.732 258.911 78.054Z"})]}),(0,n.tZ)("defs",{children:(0,n.tZ)("clipPath",{id:"clip0_676_7",children:(0,n.tZ)("rect",{width:"512",height:"512",fill:"white"})})})]})})}},156:function(e,t,r){"use strict";r.d(t,{X5:function(){return l},ZP:function(){return a},gC:function(){return c},st:function(){return g},tN:function(){return h},xh:function(){return o}});var n=r(1595),i=r(2265);let a="ap-northeast-1_QZrerTmNH",o="7ibhthrioi38cqgoh1a9lco365",s="https://w1w476hjrd.execute-api.ap-northeast-1.amazonaws.com/dev",c="https://billing.stripe.com/p/login/test_28o5ob3AmgGQ0FyaEE",l="https://buy.stripe.com/test_4gwcOa1Tz9oB2LC4gg",u=(0,i.createContext)({apiClient:f(s,void 0),status:"loading"}),d=(0,i.createContext)(()=>{}),h=()=>{let e=(0,i.useContext)(u),t=(0,i.useContext)(d);return[e,(0,i.useMemo)(()=>({setStatus:e=>{t({type:"setStatus",payload:{status:e}})}}),[])]},v=(e,t)=>"setStatus"===t.type?{...e,status:t.payload.status}:e;function f(e,t){return{apiGatewayUrl:()=>e,idToken:()=>t,setNewIdToken:e=>{localStorage.setItem("idToken",e),t=e},restoreIdToken:async()=>{let r=localStorage.getItem("idToken");if(r)try{if(!(await fetch("".concat(e,"/user"),{method:"GET",headers:{Authorization:"".concat(r)}})).ok)throw Error("Unauthorized");return t=r,r}catch(e){console.error(e);return}}}}function g(e){let{children:t}=e,[r,a]=(0,i.useReducer)(v,{apiClient:f(s,void 0),status:"loading"}),o=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{o.current||(o.current=!0,r.apiClient.restoreIdToken().then(e=>{a({type:"setStatus",payload:{status:e?"authenticated":"unauthenticated"}})}))},[]),(0,n.tZ)(u.Provider,{value:r,children:(0,n.tZ)(d.Provider,{value:a,children:t})})}},3996:function(e,t,r){"use strict";r.d(t,{ThemeStoreProvider:function(){return p},fl:function(){return f}});var n=r(1595),i=r(7716),a=r.n(i),o=r(2017),s=r(9163),c=r(9026),l=r(3448),u=r(2265),d=r(4049);let h=(0,u.createContext)({scheme:new l.S2(l.OP.fromInt(15569803),!1,0),sourceColor:15569803}),v=(0,u.createContext)(()=>{}),f=()=>{let e=(0,u.useContext)(h),t=(0,u.useContext)(v);return[e,{resetSourceColor:()=>{t({type:"setTheme",payload:{scheme:new l.S2(l.OP.fromInt(15569803),!1,0),sourceColor:15569803}})}}]},g=(e,t)=>{if("setTheme"===t.type){let{scheme:r,sourceColor:n}=t.payload;return e.sourceColor===n?e:{...e,scheme:r,sourceColor:n}}return e},p=e=>{let{children:t}=e,[r,i]=(0,u.useReducer)(g,{scheme:new l.S2(l.OP.fromInt(15569803),!1,0),sourceColor:15569803}),f=(0,o.Z)((0,s.Z)({palette:{mode:"light",primary:{main:(0,l.PQ)(l.YI.primary.getArgb(r.scheme))},secondary:{main:(0,l.PQ)(l.YI.secondary.getArgb(r.scheme))},background:{default:(0,l.PQ)(l.YI.surface.getArgb(r.scheme)),paper:(0,l.PQ)(l.YI.surfaceContainer.getArgb(r.scheme))},error:{main:(0,l.PQ)(l.YI.error.getArgb(r.scheme))},text:{primary:(0,l.PQ)(l.YI.onSurface.getArgb(r.scheme))}},typography:{fontFamily:a().style.fontFamily}}));return(0,n.BX)(c.Z,{theme:f,children:[(0,n.tZ)(d.Z,{styles:e=>({body:{transition:e.transitions.create(["background-color","transform"])}})}),(0,n.tZ)(h.Provider,{value:r,children:(0,n.tZ)(v.Provider,{value:i,children:t})})]})}}},function(e){e.O(0,[313,17,972,654,487,250,971,117,744],function(){return e(e.s=1107)}),_N_E=e.O()}]);