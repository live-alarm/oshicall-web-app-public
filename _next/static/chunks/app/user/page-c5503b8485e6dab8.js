(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2379:function(e,t,r){Promise.resolve().then(r.bind(r,4864))},4864:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(1595),i=r(3146),c=r(4654),o=r(9376),a=r(8582),l=r(156),s=r(2265),d=r(3996),u=r(3448),h=r(5002),f=r(3626),v=r(4013),p=r(5211),Z=r(9507),m=r(7468),g=r(6620);function y(e){let{open:t,streamerAccount:r,onClose:o,onUnsubscribe:a}=e,[s]=(0,d.fl)(),[y,x]=(0,l.tN)(),C=y.apiClient;(0,u.PQ)(u.YI.primary.getArgb(s.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(s.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(s.scheme));let w=async()=>{let e=C.apiGatewayUrl(),t=C.idToken();try{let n=await fetch("".concat(e,"/user/following/").concat(null==r?void 0:r.accountId),{method:"DELETE",headers:{Authorization:"".concat(t)}});if(!n.ok){let e=await n.text();throw Error(e)}a(),o()}catch(e){console.error(e),(0,c.yv)("".concat(e),{variant:"error"});return}};return(0,n.BX)(p.Z,{open:t,onClose:o,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(Z.Z,{children:"本当に登録解除しますか？"}),(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120}),src:null==r?void 0:r.profilePictureUrl}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null==r?void 0:r.accountId})]}),(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",marginTop:"16px"}),children:(0,n.BX)(h.Z,{variant:"caption",css:(0,i.iv)({textAlign:"center"}),children:["実際に電話が来なくなるまで ",(0,n.tZ)("br",{}),"最大24時間かかります。ご了承ください。"]})})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(v.Z,{onClick:o,children:"キャンセル"}),(0,n.tZ)(v.Z,{onClick:w,variant:"contained",color:"error",children:"解除する"})]})]})}var x=r(2362),C=r(20),w=r(291),b=r(7312),I=r(2258);function k(e){let t=e.match(/instagram\.com\/([^/?]+)/);return t?t[1]:null}function P(e){var t,r,o,a;let{open:y,onClose:P,onAdd:T}=e,[S]=(0,d.fl)(),[A,B]=(0,l.tN)(),X=A.apiClient;(0,u.PQ)(u.YI.primary.getArgb(S.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(S.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(S.scheme));let[D,Y]=(0,s.useState)("enter-account");(0,s.useEffect)(()=>{y&&(Y("enter-account"),Q(void 0))},[y]);let E=(0,s.useRef)(null),L=(0,s.useRef)(null),[U,Q]=(0,s.useState)(void 0),j=async()=>{var e;let t=null===(e=E.current)||void 0===e?void 0:e.value;if(!t){(0,c.yv)("アカウントUrlを入力してください。",{variant:"error"});return}let r=k(t);if(L.current={accountId:r||"",accountName:"",profilePictureUrl:""},!r){(0,c.yv)("アカウントURLが不正です。",{variant:"error"});return}let n=X.apiGatewayUrl(),i=X.idToken();try{let e=await fetch("".concat(n,"/streamers/").concat(r,"/support"),{method:"GET",headers:{Authorization:"".concat(i),"Content-Type":"application/json"}});if(!e.ok){let t=await e.text();throw Error(t)}let t=await e.json();t.support?(L.current.accountName=t.account.account_name,L.current.profilePictureUrl=t.account.profile_picture_url,Y("confirm")):Y("error")}catch(e){console.error(e),(0,c.yv)("".concat(e),{variant:"error"});return}},_=async()=>{let e=X.apiGatewayUrl(),t=X.idToken(),r=L.current;if(!r){(0,c.yv)("アカウントURLが不正です。",{variant:"error"});return}try{let n=await fetch("".concat(e,"/user/following"),{method:"POST",headers:{Authorization:"".concat(t),"Content-Type":"application/json"},body:JSON.stringify({streamer_id:r.accountId})});if(!n.ok){let e=await n.text();throw Error(e)}await n.json(),T(r),P()}catch(e){console.error(e),(0,c.yv)("".concat(e),{variant:"error"});return}};return(0,n.BX)(p.Z,{open:y,onClose:P,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(Z.Z,{children:"推しを追加"}),"enter-account"==D&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.BX)(x.Z,{variant:"standard",children:[(0,n.tZ)(C.Z,{children:"推しインスタアカウントURL"}),(0,n.tZ)(w.Z,{inputRef:E,onChange:e=>{Q(k(e.target.value)||void 0)}})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",marginTop:"16px"}),children:[(0,n.tZ)(h.Z,{variant:"caption",children:"インスタグラムのプロフィールURLを貼り付けてください。"}),(0,n.tZ)(h.Z,{variant:"caption",children:"https://www.instagram.com/{アカウントID}"})]}),(0,n.tZ)(b.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://star-anaconda-401.notion.site/URL-164d9d79105d80409dd1d6adc6afe106",css:(0,i.iv)({marginTop:"16px",textAlign:"center"}),children:"プロフィールURLの取得方法"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px"}),children:[(0,n.tZ)(h.Z,{variant:"subtitle1",children:"アカウント名"}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:void 0===U?(null===(t=E.current)||void 0===t?void 0:t.value)?"不正なURLです":"未入力":U})]})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(v.Z,{onClick:P,children:"キャンセル"}),(0,n.tZ)(v.Z,{variant:"contained",onClick:j,disabled:void 0===U,children:"登録する"})]})]}),"confirm"==D&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(I.Z,{children:"このアカウントを推しに追加しますか？"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120}),src:null===(r=L.current)||void 0===r?void 0:r.profilePictureUrl}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null===(o=L.current)||void 0===o?void 0:o.accountId})]}),(0,n.tZ)(h.Z,{variant:"caption",css:(0,i.iv)({marginTop:"8px"}),children:"登録から電話が来るようになるまで 最大24時間かかります。ご了承ください。"})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(v.Z,{onClick:P,children:"いいえ"}),(0,n.tZ)(v.Z,{variant:"contained",onClick:_,children:"登録する"})]})]}),"error"==D&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(I.Z,{children:"このアカウントは登録できません。"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120})}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null===(a=L.current)||void 0===a?void 0:a.accountId})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),children:[(0,n.tZ)(h.Z,{variant:"caption",css:(0,i.iv)({marginTop:"8px"}),children:"このアカウントは、クリエイター（またはビジネス）アカウントではないため登録できません。"}),(0,n.tZ)(b.Z,{children:"詳しくはこちら"})]})]}),(0,n.tZ)(g.Z,{children:(0,n.tZ)(v.Z,{onClick:()=>{Q(void 0),Y("enter-account")},children:"もどる"})})]})]})}var T=r(5860),S=r(4926);let A=(0,s.memo)(e=>{let{open:t,onClose:r}=e,[o,a]=(0,l.tN)(),d=o.apiClient,[u,f]=(0,s.useState)(""),[y,x]=(0,s.useState)(""),[C,w]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=async()=>{let e=d.apiGatewayUrl(),t=d.idToken();try{let r=await fetch("".concat(e,"/user/notification/settings"),{method:"GET",headers:{Authorization:"".concat(t)}});if(!r.ok){let e=await r.text();throw Error(e)}let n=await r.json();console.log(n),w(null!==n.schedule),null!==n.schedule&&(f(n.schedule.start),x(n.schedule.end))}catch(e){console.error(e),(0,c.yv)("通知時間の取得に失敗しました",{variant:"error"})}};t&&e()},[t,d]);let b=async()=>{console.log("timeStart: ".concat(u)),console.log("timeEnd: ".concat(y));let e={schedule:null};if(C){if(""===u||""===y){(0,c.yv)("時間を入力してください",{variant:"error"});return}e.schedule={start:u,end:y}}let t=d.apiGatewayUrl(),n=d.idToken();try{let i=await fetch("".concat(t,"/user/notification/settings"),{method:"PUT",headers:{Authorization:"".concat(n),"Content-Type":"application/json"},body:JSON.stringify(e)});if(!i.ok){let e=await i.text();throw Error(e)}(0,c.yv)("通知時間を保存しました",{}),r()}catch(e){console.error(e),(0,c.yv)("通知時間の保存に失敗しました",{variant:"error"})}};return(0,n.BX)(p.Z,{open:t,onClose:r,children:[(0,n.tZ)(Z.Z,{children:"通知時間スケジュール"}),(0,n.tZ)(m.Z,{children:(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(T.Z,{control:(0,n.tZ)(S.Z,{defaultChecked:!0,checked:C,onChange:e=>w(e.target.checked)}),label:"時間帯の設定をする"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",alignItems:"center",marginTop:8}),children:[(0,n.tZ)(h.Z,{css:(0,i.iv)({flex:1}),variant:"subtitle1",children:"開始"}),(0,n.tZ)("div",{css:(0,i.iv)({flex:1}),children:(0,n.tZ)("input",{type:"time",disabled:!C,value:u,onChange:e=>f(e.target.value)})})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",alignItems:"center",marginTop:8}),children:[(0,n.tZ)(h.Z,{css:(0,i.iv)({flex:1}),variant:"subtitle1",children:"終了"}),(0,n.tZ)("div",{css:(0,i.iv)({flex:1}),children:(0,n.tZ)("input",{type:"time",disabled:!C,value:y,onChange:e=>x(e.target.value)})})]})]})}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(v.Z,{onClick:r,children:"キャンセル"}),(0,n.tZ)(v.Z,{variant:"contained",onClick:b,children:"保存"})]})]})}),B=(0,s.memo)(e=>{let{followingList:t,onFollowingListChange:r}=e,[c]=(0,d.fl)(),o=(0,u.PQ)(u.YI.primary.getArgb(c.scheme)),a=(0,u.PQ)(u.YI.onSurface.getArgb(c.scheme));(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(c.scheme));let l=t.length>0?t[0]:void 0,[p,Z]=(0,s.useState)({open:!1,streamerAccount:void 0}),[m,g]=(0,s.useState)(!1),[x,C]=(0,s.useState)(!1);return(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:o,fontWeight:"bold",margin:"auto"}),children:"推しインスタアカウント"}),(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"32px"}),children:l?(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:a,fontWeight:"bold",margin:"auto"}),children:l.accountId}),(0,n.tZ)(h.Z,{children:l.accountName}),(0,n.tZ)(f.Z,{css:(0,i.iv)({width:"200px",height:"200px",margin:"16px"}),src:l.profilePictureUrl}),(0,n.tZ)(v.Z,{variant:"text",color:"error",onClick:()=>{Z({open:!0,streamerAccount:l})},children:"登録解除"}),(0,n.tZ)(v.Z,{css:(0,i.iv)({marginTop:"16px",alignSelf:"stretch"}),variant:"contained",onClick:()=>C(!0),children:"通知設定"})]}):(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:a,fontWeight:"bold",margin:"auto"}),children:"未登録"}),(0,n.tZ)(f.Z,{css:(0,i.iv)({width:"200px",height:"200px",margin:"16px"})}),(0,n.tZ)(v.Z,{variant:"contained",color:"primary",css:(0,i.iv)({alignSelf:"stretch"}),onClick:()=>{g(!0)},children:"推しを追加"})]})}),(0,n.tZ)(P,{open:m,onClose:()=>{g(!1)},onAdd:e=>{null==r||r([...t,e])}}),(0,n.tZ)(y,{open:p.open,streamerAccount:p.streamerAccount,onClose:()=>{Z({open:!1,streamerAccount:void 0})},onUnsubscribe:()=>{null==r||r(t.filter(e=>{var t;return e.accountId!==(null===(t=p.streamerAccount)||void 0===t?void 0:t.accountId)}))}}),(0,n.tZ)(A,{open:x,onClose:()=>{C(!1)}})]})});var X=r(9767),D=r(9689),Y=r(5389);function E(){let[e]=(0,d.fl)();(0,u.PQ)(u.YI.primary.getArgb(e.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(e.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(e.scheme));let t=(0,o.useRouter)(),[r,h]=(0,l.tN)(),f=r.apiClient,[v,p]=(0,s.useState)(void 0),Z=async()=>{let e=f.apiGatewayUrl(),t=f.idToken();try{let r=await fetch("".concat(e,"/user/following"),{method:"GET",headers:{Authorization:"".concat(t)}});if(!r.ok){let e=await r.text();throw Error(e)}let n=await r.json();console.log(n);let i=await Promise.all(n.map(async r=>{let n=await fetch("".concat(e,"/streamers/").concat(r),{method:"GET",headers:{Authorization:"".concat(t)}});if(!n.ok){let e=await n.text();throw Error(e)}let i=await n.json();return{accountId:i.account_id,accountName:i.account_name,profilePictureUrl:i.profile_picture_url}}));p(i)}catch(e){console.error(e),(0,c.yv)("".concat(e),{variant:"error"})}};return(0,s.useEffect)(()=>{let e=r.status;if(console.log(e),"unauthenticated"===e){t.push("/login");return}"loading"!==e&&"authenticated"===e&&Z()},[r.status]),(0,n.BX)("div",{children:[(0,n.tZ)(a.Z,{}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",margin:"0 auto",maxWidth:"1040px",width:"100%",paddingTop:"80px",paddingLeft:"16px",paddingRight:"16px",minHeight:"100vh"}),children:[(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",flexGrow:1}),children:void 0===v?(0,n.tZ)(D.Z,{in:!0,style:{transitionDelay:"800ms"},children:(0,n.tZ)(Y.Z,{css:(0,i.iv)({margin:"auto"})})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)(B,{followingList:v,onFollowingListChange:e=>{p(e)}})})}),(0,n.tZ)("div",{css:(0,i.iv)({marginTop:"auto",alignSelf:"stretch"}),children:(0,n.tZ)(X.j,{css:(0,i.iv)({margin:"auto",maxWidth:"400px",paddingLeft:"16px",paddingRight:"16px"})})})]})]})}},8582:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(1595),i=r(1495),c=r(1004),o=r(5002),a=r(3146),l=r(3996),s=r(3448),d=r(8236),u=r(7648);function h(){let[e]=(0,l.fl)(),t=(0,s.PQ)(s.YI.primary.getArgb(e.scheme));return(0,s.PQ)(s.YI.onSurface.getArgb(e.scheme)),(0,s.PQ)(s.YI.onSurfaceVariant.getArgb(e.scheme)),(0,n.tZ)(i.Z,{position:"fixed",elevation:0,css:(0,a.iv)({backgroundColor:"transparent",color:t}),children:(0,n.tZ)(c.Z,{children:(0,n.BX)(u.default,{href:"/",css:(0,a.iv)({display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"}),children:[(0,n.tZ)(d.K,{css:(0,a.iv)({marginRight:"8px"})}),(0,n.tZ)(o.Z,{variant:"h6",css:(0,a.iv)({fontWeight:"bold"}),children:"推しコール"})]})})})}},9767:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(1595),i=r(3146),c=r(7312);function o(e){return(0,n.tZ)("footer",{...e,children:(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",fontSize:"12px",alignItems:"center",width:"100%"}),children:[(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",justifyContent:"space-around",alignSelf:"stretch"}),children:[(0,n.tZ)(c.Z,{children:"利用規約"}),(0,n.tZ)(c.Z,{children:"プライバシーポリシー"}),(0,n.tZ)(c.Z,{children:"お問い合わせ"})]}),(0,n.tZ)("div",{css:(0,i.iv)({marginBottom:"8px"}),children:"\xa9 2024- Oshi Call"})]})})}},8236:function(e,t,r){"use strict";r.d(t,{K:function(){return c}});var n=r(1595),i=r(8416);function c(e){return(0,n.tZ)(i.Z,{...e,children:(0,n.BX)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.BX)("g",{"clip-path":"url(#clip0_676_7)",children:[(0,n.tZ)("path",{d:"M316.212 349.305C310.227 343.329 300.692 342.825 294.113 348.128L262.973 373.237C256.808 378.216 247.974 378.117 241.908 373.003C241.908 373.003 215.36 355.137 186.108 325.885C156.856 296.65 138.981 270.076 138.981 270.076C133.876 264.019 133.778 255.185 138.756 249.02L163.856 217.88C169.168 211.293 168.664 201.767 162.679 195.782L103.06 136.163C96.984 130.106 87.288 129.674 80.691 135.192L5.911 198.002C-0.0919976 203.052 -1.745 211.581 1.975 218.5C1.975 218.5 12.023 239.026 21.369 254.735C47.027 297.908 88.735 348.963 125.878 386.115C163.038 423.257 214.066 464.974 257.265 490.632C272.974 499.961 293.491 510.035 293.491 510.035C300.393 513.72 308.949 512.075 313.981 506.073L376.799 431.293C382.317 424.714 381.885 415.008 375.828 408.933L316.212 349.305Z"}),(0,n.tZ)("path",{d:"M330.906 269.349L355.727 265.413C351.531 239.009 339.2 213.532 318.818 193.158C298.472 172.812 273.003 160.482 246.582 156.267L242.637 181.08C264.035 184.531 284.533 194.416 301.051 210.935C317.578 227.452 327.481 247.96 330.906 269.349Z"}),(0,n.tZ)("path",{d:"M430.731 81.272C385.751 36.302 329.593 9.215 271.259 0.012001L267.359 24.834C320.677 33.264 371.813 57.924 412.946 99.048C454.07 140.172 478.721 191.343 487.16 244.644L512 240.726C502.779 182.383 475.693 126.242 430.731 81.272Z"}),(0,n.tZ)("path",{d:"M258.911 78.054L255.011 102.903C292.405 108.79 328.271 126.035 357.111 154.874C385.959 183.721 403.223 219.57 409.091 256.983L433.921 253.065C427.279 210.656 407.599 169.801 374.904 137.107C342.192 104.404 301.329 84.732 258.911 78.054Z"})]}),(0,n.tZ)("defs",{children:(0,n.tZ)("clipPath",{id:"clip0_676_7",children:(0,n.tZ)("rect",{width:"512",height:"512",fill:"white"})})})]})})}},156:function(e,t,r){"use strict";r.d(t,{ZP:function(){return c},st:function(){return f},tN:function(){return d},xh:function(){return o}});var n=r(1595),i=r(2265);let c="ap-northeast-1_QZrerTmNH",o="7ibhthrioi38cqgoh1a9lco365",a="https://w1w476hjrd.execute-api.ap-northeast-1.amazonaws.com/dev",l=(0,i.createContext)({apiClient:h(a,void 0),status:"loading"}),s=(0,i.createContext)(()=>{}),d=()=>{let e=(0,i.useContext)(l),t=(0,i.useContext)(s);return[e,(0,i.useMemo)(()=>({setStatus:e=>{t({type:"setStatus",payload:{status:e}})}}),[])]},u=(e,t)=>"setStatus"===t.type?{...e,status:t.payload.status}:e;function h(e,t){return{apiGatewayUrl:()=>e,idToken:()=>t,setNewIdToken:e=>{localStorage.setItem("idToken",e),t=e},restoreIdToken:async()=>{let r=localStorage.getItem("idToken");if(r)try{if(!(await fetch("".concat(e,"/user"),{method:"GET",headers:{Authorization:"".concat(r)}})).ok)throw Error("Unauthorized");return t=r,r}catch(e){console.error(e);return}}}}function f(e){let{children:t}=e,[r,c]=(0,i.useReducer)(u,{apiClient:h(a,void 0),status:"loading"}),o=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{o.current||(o.current=!0,r.apiClient.restoreIdToken().then(e=>{c({type:"setStatus",payload:{status:e?"authenticated":"unauthenticated"}})}))},[]),(0,n.tZ)(l.Provider,{value:r,children:(0,n.tZ)(s.Provider,{value:c,children:t})})}},3996:function(e,t,r){"use strict";r.d(t,{ThemeStoreProvider:function(){return Z},fl:function(){return v}});var n=r(1595),i=r(9806),c=r.n(i),o=r(2017),a=r(9163),l=r(9026),s=r(3448),d=r(2265),u=r(4049);let h=(0,d.createContext)({scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}),f=(0,d.createContext)(()=>{}),v=()=>{let e=(0,d.useContext)(h),t=(0,d.useContext)(f);return[e,{resetSourceColor:()=>{t({type:"setTheme",payload:{scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}})}}]},p=(e,t)=>{if("setTheme"===t.type){let{scheme:r,sourceColor:n}=t.payload;return e.sourceColor===n?e:{...e,scheme:r,sourceColor:n}}return e},Z=e=>{let{children:t}=e,[r,i]=(0,d.useReducer)(p,{scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}),v=(0,o.Z)((0,a.Z)({palette:{mode:"light",primary:{main:(0,s.PQ)(s.YI.primary.getArgb(r.scheme))},secondary:{main:(0,s.PQ)(s.YI.secondary.getArgb(r.scheme))},background:{default:(0,s.PQ)(s.YI.surface.getArgb(r.scheme)),paper:(0,s.PQ)(s.YI.surfaceContainer.getArgb(r.scheme))},error:{main:(0,s.PQ)(s.YI.error.getArgb(r.scheme))},text:{primary:(0,s.PQ)(s.YI.onSurface.getArgb(r.scheme))}},typography:{fontFamily:c().style.fontFamily}}));return(0,n.BX)(l.Z,{theme:v,children:[(0,n.tZ)(u.Z,{styles:e=>({body:{transition:e.transitions.create(["background-color","transform"])}})}),(0,n.tZ)(h.Provider,{value:r,children:(0,n.tZ)(f.Provider,{value:i,children:t})})]})}}},function(e){e.O(0,[291,434,972,654,487,550,971,117,744],function(){return e(e.s=2379)}),_N_E=e.O()}]);