(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2379:function(t,e,r){Promise.resolve().then(r.bind(r,4864))},4864:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Y}});var n=r(1595),i=r(3146),o=r(4654),c=r(9376),a=r(8582),l=r(156),s=r(2265),d=r(3996),u=r(3448),h=r(5002),f=r(3626),p=r(4013),v=r(5211),Z=r(9507),m=r(7468),g=r(6620);function y(t){let{open:e,streamerAccount:r,onClose:c,onUnsubscribe:a}=t,[s]=(0,d.fl)(),[y,x]=(0,l.tN)(),C=y.apiClient;(0,u.PQ)(u.YI.primary.getArgb(s.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(s.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(s.scheme));let w=async()=>{let t=C.apiGatewayUrl(),e=C.idToken();try{let n=await fetch("".concat(t,"/user/following/").concat(null==r?void 0:r.accountId),{method:"DELETE",headers:{Authorization:"".concat(e)}});if(!n.ok){let t=await n.text();throw Error(t)}a(),c()}catch(t){console.error(t),(0,o.yv)("".concat(t),{variant:"error"});return}};return(0,n.BX)(v.Z,{open:e,onClose:c,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(Z.Z,{children:"本当に登録解除しますか？"}),(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120}),src:null==r?void 0:r.profilePictureUrl}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null==r?void 0:r.accountId})]}),(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",marginTop:"16px"}),children:(0,n.BX)(h.Z,{variant:"caption",css:(0,i.iv)({textAlign:"center"}),children:["実際に電話が来なくなるまで ",(0,n.tZ)("br",{}),"最大24時間かかります。ご了承ください。"]})})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(p.Z,{onClick:c,children:"キャンセル"}),(0,n.tZ)(p.Z,{onClick:w,variant:"contained",color:"error",children:"解除する"})]})]})}var x=r(2362),C=r(20),w=r(291),b=r(7312),I=r(2258);function T(t){let e=t.match(/instagram\.com\/([^/?]+)/);return e?e[1]:null}function k(t){var e,r,c,a;let{open:y,onClose:k,onAdd:P}=t,[S]=(0,d.fl)(),[A,B]=(0,l.tN)(),X=A.apiClient;(0,u.PQ)(u.YI.primary.getArgb(S.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(S.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(S.scheme));let[E,D]=(0,s.useState)("enter-account");(0,s.useEffect)(()=>{y&&(D("enter-account"),U(void 0))},[y]);let L=(0,s.useRef)(null),Y=(0,s.useRef)(null),[_,U]=(0,s.useState)(void 0),j=async()=>{var t;let e=null===(t=L.current)||void 0===t?void 0:t.value;if(!e){(0,o.yv)("アカウントUrlを入力してください。",{variant:"error"});return}let r=T(e);if(Y.current={accountId:r||"",accountName:"",profilePictureUrl:""},!r){(0,o.yv)("アカウントURLが不正です。",{variant:"error"});return}let n=X.apiGatewayUrl(),i=X.idToken();try{let t=await fetch("".concat(n,"/streamers/").concat(r,"/support"),{method:"GET",headers:{Authorization:"".concat(i),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw Error(e)}let e=await t.json();e.support?(Y.current.accountName=e.account.account_name,Y.current.profilePictureUrl=e.account.profile_picture_url,D("confirm")):D("error")}catch(t){console.error(t),(0,o.yv)("".concat(t),{variant:"error"});return}},Q=async()=>{let t=X.apiGatewayUrl(),e=X.idToken(),r=Y.current;if(!r){(0,o.yv)("アカウントURLが不正です。",{variant:"error"});return}try{let n=await fetch("".concat(t,"/user"),{method:"GET",headers:{Authorization:"".concat(e)}});if(!n.ok){let t=await n.text();throw Error(t)}let{following:i,billing_status:o,phone_number:c}=await n.json();if(!i.includes(r.accountId)){let n=await fetch("".concat(t,"/user/following"),{method:"POST",headers:{Authorization:"".concat(e),"Content-Type":"application/json"},body:JSON.stringify({streamer_id:r.accountId})});if(!n.ok){let t=await n.text();throw Error(t)}}if("unpaid"===o){window.location.href="".concat(l.X5);return}P(r),k()}catch(t){console.error(t),(0,o.yv)("".concat(t),{variant:"error"});return}};return(0,n.BX)(v.Z,{open:y,onClose:k,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(Z.Z,{children:"推しを追加"}),"enter-account"==E&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.BX)(x.Z,{variant:"standard",children:[(0,n.tZ)(C.Z,{children:"推しインスタアカウントURL"}),(0,n.tZ)(w.Z,{inputRef:L,onChange:t=>{U(T(t.target.value)||void 0)}})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",marginTop:"16px"}),children:[(0,n.tZ)(h.Z,{variant:"caption",children:"インスタグラムのプロフィールURLを貼り付けてください。"}),(0,n.tZ)(h.Z,{variant:"caption",children:"https://www.instagram.com/{アカウントID}"})]}),(0,n.tZ)(b.Z,{target:"_blank",rel:"noopener noreferrer",href:"https://star-anaconda-401.notion.site/URL-164d9d79105d80409dd1d6adc6afe106",css:(0,i.iv)({marginTop:"16px",textAlign:"center"}),children:"プロフィールURLの取得方法"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px",visibility:void 0===_?"hidden":"visible"}),children:[(0,n.tZ)(h.Z,{variant:"subtitle1",children:"アカウント名"}),(0,n.tZ)(h.Z,{variant:"subtitle1",css:{},children:void 0===_?(null===(e=L.current)||void 0===e?void 0:e.value)?"不正なURLです":"未入力":_})]})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(p.Z,{onClick:k,children:"キャンセル"}),(0,n.tZ)(p.Z,{variant:"contained",onClick:j,disabled:void 0===_,children:"登録する"})]})]}),"confirm"==E&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(I.Z,{children:"このアカウントを推しに追加しますか？"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120}),src:null===(r=Y.current)||void 0===r?void 0:r.profilePictureUrl}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null===(c=Y.current)||void 0===c?void 0:c.accountId})]}),(0,n.tZ)(h.Z,{variant:"caption",css:(0,i.iv)({marginTop:"8px"}),children:"登録から電話が来るようになるまで 最大24時間かかります。ご了承ください。"})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(p.Z,{onClick:k,children:"いいえ"}),(0,n.tZ)(p.Z,{variant:"contained",onClick:Q,children:"登録する"})]})]}),"error"==E&&(0,n.BX)(n.HY,{children:[(0,n.BX)(m.Z,{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(I.Z,{children:"このアカウントは登録できません。"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"16px"}),children:[(0,n.tZ)(f.Z,{css:(0,i.iv)({width:120,height:120})}),(0,n.tZ)(h.Z,{variant:"subtitle1",children:null===(a=Y.current)||void 0===a?void 0:a.accountId})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),children:[(0,n.tZ)(h.Z,{variant:"caption",css:(0,i.iv)({marginTop:"8px"}),children:"このアカウントは、クリエイター（またはビジネス）アカウントではないため登録できません。"}),(0,n.tZ)(b.Z,{children:"詳しくはこちら"})]})]}),(0,n.tZ)(g.Z,{children:(0,n.tZ)(p.Z,{onClick:()=>{U(void 0),D("enter-account")},children:"もどる"})})]})]})}var P=r(9689),S=r(5389),A=r(5860),B=r(4926);let X=(0,s.memo)(t=>{let{open:e,onClose:r}=t,[c,a]=(0,l.tN)(),d=c.apiClient,[u,f]=(0,s.useState)(""),[y,x]=(0,s.useState)(""),[C,w]=(0,s.useState)(!1),[b,I]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let t=async()=>{I(!0);let t=d.apiGatewayUrl(),e=d.idToken();try{let r=await fetch("".concat(t,"/user/notification/settings"),{method:"GET",headers:{Authorization:"".concat(e)}});if(!r.ok){let t=await r.text();throw Error(t)}let n=await r.json();console.log(n),w(null!==n.schedule),null!==n.schedule&&(f(n.schedule.start),x(n.schedule.end))}catch(t){console.error(t),(0,o.yv)("通知時間の取得に失敗しました",{variant:"error"})}I(!1)};e&&t()},[e,d]);let T=async()=>{console.log("timeStart: ".concat(u)),console.log("timeEnd: ".concat(y));let t={schedule:null};if(C){if(""===u||""===y){(0,o.yv)("時間を入力してください",{variant:"error"});return}t.schedule={start:u,end:y}}let e=d.apiGatewayUrl(),n=d.idToken();try{let i=await fetch("".concat(e,"/user/notification/settings"),{method:"PUT",headers:{Authorization:"".concat(n),"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){let t=await i.text();throw Error(t)}(0,o.yv)("通知時間を保存しました",{}),r()}catch(t){console.error(t),(0,o.yv)("通知時間の保存に失敗しました",{variant:"error"})}};return(0,n.BX)(v.Z,{open:e,onClose:r,sx:{"& .MuiDialog-paper":{borderRadius:3}},children:[(0,n.tZ)(Z.Z,{children:"スケジュール設定"}),(0,n.BX)(m.Z,{css:(0,i.iv)({position:"relative"}),children:[b&&(0,n.tZ)(P.Z,{in:!0,style:{transitionDelay:"800ms",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,n.tZ)(S.Z,{css:(0,i.iv)({margin:"auto"})})}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",visibility:b?"hidden":"visible"}),children:[(0,n.tZ)(A.Z,{control:(0,n.tZ)(B.Z,{defaultChecked:!0,checked:C,onChange:t=>w(t.target.checked)}),label:"時間帯の設定をする"}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",alignItems:"center",marginTop:8}),children:[(0,n.tZ)(h.Z,{css:(0,i.iv)({flex:1}),variant:"subtitle1",children:"開始"}),(0,n.tZ)("div",{css:(0,i.iv)({flex:1}),children:(0,n.tZ)("input",{type:"time",disabled:!C,value:u,onChange:t=>f(t.target.value)})})]}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",alignItems:"center",marginTop:8}),children:[(0,n.tZ)(h.Z,{css:(0,i.iv)({flex:1}),variant:"subtitle1",children:"終了"}),(0,n.tZ)("div",{css:(0,i.iv)({flex:1}),children:(0,n.tZ)("input",{type:"time",disabled:!C,value:y,onChange:t=>x(t.target.value)})})]})]})]}),(0,n.BX)(g.Z,{children:[(0,n.tZ)(p.Z,{onClick:r,children:"キャンセル"}),(0,n.tZ)(p.Z,{variant:"contained",onClick:T,children:"保存"})]})]})}),E=(0,s.memo)(t=>{let{followingList:e,onFollowingListChange:r}=t,[o]=(0,d.fl)(),c=(0,u.PQ)(u.YI.primary.getArgb(o.scheme)),a=(0,u.PQ)(u.YI.onSurface.getArgb(o.scheme));(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(o.scheme));let l=e.length>0?e[0]:void 0,[v,Z]=(0,s.useState)({open:!1,streamerAccount:void 0}),[m,g]=(0,s.useState)(!1),[x,C]=(0,s.useState)(!1);return(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:c,fontWeight:"bold",margin:"auto"}),children:"推しインスタアカウント"}),(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"32px"}),children:l?(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:a,fontWeight:"bold",margin:"auto"}),children:l.accountId}),(0,n.tZ)(h.Z,{children:l.accountName}),(0,n.tZ)(f.Z,{css:(0,i.iv)({width:"200px",height:"200px",margin:"16px"}),src:l.profilePictureUrl}),(0,n.tZ)(p.Z,{variant:"text",color:"error",onClick:()=>{Z({open:!0,streamerAccount:l})},children:"登録解除"}),(0,n.tZ)(p.Z,{css:(0,i.iv)({marginTop:"16px",alignSelf:"stretch"}),variant:"contained",onClick:()=>C(!0),children:"スケジュール設定"})]}):(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),children:[(0,n.tZ)(h.Z,{variant:"h6",css:(0,i.iv)({color:a,fontWeight:"bold",margin:"auto"}),children:"未登録"}),(0,n.tZ)(f.Z,{css:(0,i.iv)({width:"200px",height:"200px",margin:"16px"})}),(0,n.tZ)(p.Z,{variant:"contained",color:"primary",css:(0,i.iv)({alignSelf:"stretch"}),onClick:()=>{g(!0)},children:"推しを追加"})]})}),(0,n.tZ)(k,{open:m,onClose:()=>{g(!1)},onAdd:t=>{null==r||r([...e,t])}}),(0,n.tZ)(y,{open:v.open,streamerAccount:v.streamerAccount,onClose:()=>{Z({open:!1,streamerAccount:void 0})},onUnsubscribe:()=>{null==r||r(e.filter(t=>{var e;return t.accountId!==(null===(e=v.streamerAccount)||void 0===e?void 0:e.accountId)}))}}),(0,n.tZ)(X,{open:x,onClose:()=>{C(!1)}})]})});var D=r(9767);async function L(t,e){let r;for(let n=0;n<10;++n){let n=await fetch("".concat(t,"/user"),{method:"GET",headers:{Authorization:"".concat(e)}});if(!n.ok)throw Error(await n.text());let i=await n.json();if(console.log(i),"paid"===(r=i.billing_status)||0===i.following.length)break;await new Promise(t=>setTimeout(t,1e3))}return r}function Y(){let[t]=(0,d.fl)();(0,u.PQ)(u.YI.primary.getArgb(t.scheme)),(0,u.PQ)(u.YI.onSurface.getArgb(t.scheme)),(0,u.PQ)(u.YI.onSurfaceVariant.getArgb(t.scheme));let e=(0,c.useRouter)(),[r,h]=(0,l.tN)(),f=r.apiClient,[p,v]=(0,s.useState)(void 0),[Z,m]=(0,s.useState)(void 0),g=async()=>{let t=f.apiGatewayUrl(),e=f.idToken();try{let r=await L(t,e);if(m(r),void 0===r||"unpaid"===r){v([]);return}}catch(t){console.error(t),(0,o.yv)("".concat(t),{variant:"error"});return}try{let r=await fetch("".concat(t,"/user/following"),{method:"GET",headers:{Authorization:"".concat(e)}});if(!r.ok){let t=await r.text();throw Error(t)}let n=await r.json();console.log(n);let i=await Promise.all(n.map(async r=>{let n=await fetch("".concat(t,"/streamers/").concat(r),{method:"GET",headers:{Authorization:"".concat(e)}});if(!n.ok){let t=await n.text();throw Error(t)}let i=await n.json();return{accountId:i.account_id,accountName:i.account_name,profilePictureUrl:i.profile_picture_url}}));v(i)}catch(t){console.error(t),(0,o.yv)("".concat(t),{variant:"error"})}};return(0,s.useEffect)(()=>{let t=r.status;if(console.log(t),"unauthenticated"===t){e.push("/login");return}"loading"!==t&&"authenticated"===t&&g()},[r.status]),(0,n.BX)("div",{children:[(0,n.tZ)(a.Z,{}),(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",margin:"0 auto",maxWidth:"1040px",width:"100%",paddingTop:"80px",paddingLeft:"16px",paddingRight:"16px",minHeight:"100vh"}),children:[(0,n.tZ)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",flexGrow:1}),children:void 0===p?(0,n.tZ)(P.Z,{in:!0,style:{transitionDelay:"800ms"},children:(0,n.tZ)(S.Z,{css:(0,i.iv)({margin:"auto"})})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)(E,{followingList:p,onFollowingListChange:t=>{v(t)}})})}),(0,n.tZ)("div",{css:(0,i.iv)({marginTop:"64px",marginBottom:"64px",display:"flex",justifyContent:"center"}),children:"paid"===Z&&(0,n.tZ)(b.Z,{href:l.gC,children:"サブスクリプションを管理"})}),(0,n.tZ)("div",{css:(0,i.iv)({marginTop:"auto",alignSelf:"stretch"}),children:(0,n.tZ)(D.j,{css:(0,i.iv)({margin:"auto",maxWidth:"400px",paddingLeft:"16px",paddingRight:"16px"})})})]})]})}},8582:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(1595),i=r(1495),o=r(1004),c=r(5002),a=r(3146),l=r(3996),s=r(3448),d=r(8236),u=r(7648);function h(){let[t]=(0,l.fl)(),e=(0,s.PQ)(s.YI.primary.getArgb(t.scheme));return(0,s.PQ)(s.YI.onSurface.getArgb(t.scheme)),(0,s.PQ)(s.YI.onSurfaceVariant.getArgb(t.scheme)),(0,n.tZ)(i.Z,{position:"fixed",elevation:0,css:(0,a.iv)({backgroundColor:"transparent",color:e}),children:(0,n.tZ)(o.Z,{children:(0,n.BX)(u.default,{href:"/",css:(0,a.iv)({display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"}),children:[(0,n.tZ)(d.K,{css:(0,a.iv)({marginRight:"8px"})}),(0,n.tZ)(c.Z,{variant:"h6",css:(0,a.iv)({fontWeight:"bold"}),children:"推しコール"})]})})})}},9767:function(t,e,r){"use strict";r.d(e,{j:function(){return c}});var n=r(1595),i=r(3146),o=r(7312);function c(t){return(0,n.tZ)("footer",{...t,children:(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"column",fontSize:"0.75rem",alignItems:"center",width:"100%"}),children:[(0,n.BX)("div",{css:(0,i.iv)({display:"flex",flexDirection:"row",justifyContent:"space-around",alignSelf:"stretch"}),children:[(0,n.tZ)(o.Z,{children:"利用規約"}),(0,n.tZ)(o.Z,{children:"プライバシーポリシー"}),(0,n.tZ)(o.Z,{children:"お問い合わせ"})]}),(0,n.tZ)("div",{css:(0,i.iv)({marginTop:"8px",marginBottom:"8px"}),children:(0,n.tZ)(o.Z,{href:"https://www.notion.so/1-180d9d79105d807d95d0d00d2fffb762?pvs=4",children:"特定商法取引に基づく表記"})})]})})}},8236:function(t,e,r){"use strict";r.d(e,{K:function(){return o}});var n=r(1595),i=r(8416);function o(t){return(0,n.tZ)(i.Z,{...t,children:(0,n.BX)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.BX)("g",{"clip-path":"url(#clip0_676_7)",children:[(0,n.tZ)("path",{d:"M316.212 349.305C310.227 343.329 300.692 342.825 294.113 348.128L262.973 373.237C256.808 378.216 247.974 378.117 241.908 373.003C241.908 373.003 215.36 355.137 186.108 325.885C156.856 296.65 138.981 270.076 138.981 270.076C133.876 264.019 133.778 255.185 138.756 249.02L163.856 217.88C169.168 211.293 168.664 201.767 162.679 195.782L103.06 136.163C96.984 130.106 87.288 129.674 80.691 135.192L5.911 198.002C-0.0919976 203.052 -1.745 211.581 1.975 218.5C1.975 218.5 12.023 239.026 21.369 254.735C47.027 297.908 88.735 348.963 125.878 386.115C163.038 423.257 214.066 464.974 257.265 490.632C272.974 499.961 293.491 510.035 293.491 510.035C300.393 513.72 308.949 512.075 313.981 506.073L376.799 431.293C382.317 424.714 381.885 415.008 375.828 408.933L316.212 349.305Z"}),(0,n.tZ)("path",{d:"M330.906 269.349L355.727 265.413C351.531 239.009 339.2 213.532 318.818 193.158C298.472 172.812 273.003 160.482 246.582 156.267L242.637 181.08C264.035 184.531 284.533 194.416 301.051 210.935C317.578 227.452 327.481 247.96 330.906 269.349Z"}),(0,n.tZ)("path",{d:"M430.731 81.272C385.751 36.302 329.593 9.215 271.259 0.012001L267.359 24.834C320.677 33.264 371.813 57.924 412.946 99.048C454.07 140.172 478.721 191.343 487.16 244.644L512 240.726C502.779 182.383 475.693 126.242 430.731 81.272Z"}),(0,n.tZ)("path",{d:"M258.911 78.054L255.011 102.903C292.405 108.79 328.271 126.035 357.111 154.874C385.959 183.721 403.223 219.57 409.091 256.983L433.921 253.065C427.279 210.656 407.599 169.801 374.904 137.107C342.192 104.404 301.329 84.732 258.911 78.054Z"})]}),(0,n.tZ)("defs",{children:(0,n.tZ)("clipPath",{id:"clip0_676_7",children:(0,n.tZ)("rect",{width:"512",height:"512",fill:"white"})})})]})})}},156:function(t,e,r){"use strict";r.d(e,{X5:function(){return s},ZP:function(){return o},gC:function(){return l},st:function(){return v},tN:function(){return h},xh:function(){return c}});var n=r(1595),i=r(2265);let o="ap-northeast-1_QZrerTmNH",c="7ibhthrioi38cqgoh1a9lco365",a="https://w1w476hjrd.execute-api.ap-northeast-1.amazonaws.com/dev",l="https://billing.stripe.com/p/login/test_28o5ob3AmgGQ0FyaEE",s="https://buy.stripe.com/test_4gwcOa1Tz9oB2LC4gg",d=(0,i.createContext)({apiClient:p(a,void 0),status:"loading"}),u=(0,i.createContext)(()=>{}),h=()=>{let t=(0,i.useContext)(d),e=(0,i.useContext)(u);return[t,(0,i.useMemo)(()=>({setStatus:t=>{e({type:"setStatus",payload:{status:t}})}}),[])]},f=(t,e)=>"setStatus"===e.type?{...t,status:e.payload.status}:t;function p(t,e){return{apiGatewayUrl:()=>t,idToken:()=>e,setNewIdToken:t=>{localStorage.setItem("idToken",t),e=t},restoreIdToken:async()=>{let r=localStorage.getItem("idToken");if(r)try{if(!(await fetch("".concat(t,"/user"),{method:"GET",headers:{Authorization:"".concat(r)}})).ok)throw Error("Unauthorized");return e=r,r}catch(t){console.error(t);return}}}}function v(t){let{children:e}=t,[r,o]=(0,i.useReducer)(f,{apiClient:p(a,void 0),status:"loading"}),c=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{c.current||(c.current=!0,r.apiClient.restoreIdToken().then(t=>{o({type:"setStatus",payload:{status:t?"authenticated":"unauthenticated"}})}))},[]),(0,n.tZ)(d.Provider,{value:r,children:(0,n.tZ)(u.Provider,{value:o,children:e})})}},3996:function(t,e,r){"use strict";r.d(e,{ThemeStoreProvider:function(){return Z},fl:function(){return p}});var n=r(1595),i=r(7716),o=r.n(i),c=r(2017),a=r(9163),l=r(9026),s=r(3448),d=r(2265),u=r(4049);let h=(0,d.createContext)({scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}),f=(0,d.createContext)(()=>{}),p=()=>{let t=(0,d.useContext)(h),e=(0,d.useContext)(f);return[t,{resetSourceColor:()=>{e({type:"setTheme",payload:{scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}})}}]},v=(t,e)=>{if("setTheme"===e.type){let{scheme:r,sourceColor:n}=e.payload;return t.sourceColor===n?t:{...t,scheme:r,sourceColor:n}}return t},Z=t=>{let{children:e}=t,[r,i]=(0,d.useReducer)(v,{scheme:new s.S2(s.OP.fromInt(15569803),!1,0),sourceColor:15569803}),p=(0,c.Z)((0,a.Z)({palette:{mode:"light",primary:{main:(0,s.PQ)(s.YI.primary.getArgb(r.scheme))},secondary:{main:(0,s.PQ)(s.YI.secondary.getArgb(r.scheme))},background:{default:(0,s.PQ)(s.YI.surface.getArgb(r.scheme)),paper:(0,s.PQ)(s.YI.surfaceContainer.getArgb(r.scheme))},error:{main:(0,s.PQ)(s.YI.error.getArgb(r.scheme))},text:{primary:(0,s.PQ)(s.YI.onSurface.getArgb(r.scheme))}},typography:{fontFamily:o().style.fontFamily}}));return(0,n.BX)(l.Z,{theme:p,children:[(0,n.tZ)(u.Z,{styles:t=>({body:{transition:t.transitions.create(["background-color","transform"])}})}),(0,n.tZ)(h.Provider,{value:r,children:(0,n.tZ)(f.Provider,{value:i,children:e})})]})}}},function(t){t.O(0,[313,17,972,654,487,550,971,117,744],function(){return t(t.s=2379)}),_N_E=t.O()}]);