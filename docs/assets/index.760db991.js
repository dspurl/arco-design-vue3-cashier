import{u as C,_ as x,a as U,I as D,b as R}from"./index.3d01aa72.js";/* empty css              */import{d as P,c as E,E as i,F as g,I as a,aK as e,aJ as n,aM as z,aL as A,u as v,b5 as G,aG as J,aP as t,b6 as K,e as O,r as Q,aO as b,aX as T,b7 as X,b8 as Y,b9 as j,ba as H,bb as W,aY as Z,bc as ee,bd as oe,be as se,bf as ae,bg as ne}from"./arco.ba71ebb9.js";import{l as re,F as te}from"./index.0ebd1741.js";/* empty css              *//* empty css               *//* empty css               */import{f as le,g as ce}from"./vue.a49450d0.js";import{u as ie}from"./loading.069aae80.js";import"./chart.b4158a50.js";const k="/arco-design-vue3-cashier/assets/login-banner.426fb77f.png",_e={class:"banner"},de={class:"banner-inner"},ue={class:"carousel-title"},me={class:"carousel-sub-title"},ge=["src"],pe=P({__name:"banner",setup(c){const{t:r}=C(),p=E(()=>[{slogan:r("login.banner.slogan1"),subSlogan:r("login.banner.subSlogan1"),image:k},{slogan:r("login.banner.slogan2"),subSlogan:r("login.banner.subSlogan2"),image:k},{slogan:r("login.banner.slogan3"),subSlogan:r("login.banner.subSlogan3"),image:k}]);return(_,h)=>{const f=K,w=G;return i(),g("div",_e,[a("div",de,[e(w,{class:"carousel","animation-name":"fade"},{default:n(()=>[(i(!0),g(z,null,A(v(p),s=>(i(),J(f,{key:s.slogan},{default:n(()=>[(i(),g("div",{key:s.slogan,class:"carousel-item"},[a("div",ue,t(s.slogan),1),a("div",me,t(s.subSlogan),1),a("img",{class:"carousel-image",src:s.image},null,8,ge)]))]),_:2},1024))),128))]),_:1})])])}}});const fe=x(pe,[["__scopeId","data-v-2ce84fe6"]]),be={class:"login-form-wrapper"},ve={class:"login-form-title"},he={class:"login-form-sub-title"},we={class:"login-form-error-msg"},$e={class:"login-form-password-actions"},ye=P({__name:"login-form",setup(c){const r=le(),{t:p}=C(),_=O(""),{loading:h,setLoading:f}=ie(),w=U(),s=ce("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),d=Q({username:s.value.username,password:s.value.password}),F=async({errors:o,values:l})=>{if(!h.value&&!o){f(!0);try{await w.login(l);const{redirect:u,...$}=r.currentRoute.value.query;r.push({name:u||"Dashboard",query:{...$}}),T.success(p("login.form.login.success"));const{rememberPassword:m}=s.value,{username:y,password:I}=l;s.value.username=m?y:"",s.value.password=m?I:""}catch(u){_.value=u.message}finally{f(!1)}}},L=o=>{s.value.rememberPassword=o};return(o,l)=>{const u=D,$=X,m=Y,y=R,I=j,B=H,M=W,V=Z,N=ee,q=oe;return i(),g("div",be,[a("div",ve,t(o.$t("login.form.title")),1),a("div",he,t(o.$t("login.form.title")),1),a("div",we,t(_.value),1),e(q,{ref:"loginForm",model:d,class:"login-form",layout:"vertical",onSubmit:F},{default:n(()=>[e(m,{field:"username",rules:[{required:!0,message:o.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e($,{modelValue:d.username,"onUpdate:modelValue":l[0]||(l[0]=S=>d.username=S),placeholder:o.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(u)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(m,{field:"password",rules:[{required:!0,message:o.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(I,{modelValue:d.password,"onUpdate:modelValue":l[1]||(l[1]=S=>d.password=S),placeholder:o.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e(y)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(N,{size:16,direction:"vertical"},{default:n(()=>[a("div",$e,[e(B,{checked:"rememberPassword","model-value":v(s).rememberPassword,onChange:L},{default:n(()=>[b(t(o.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(M,null,{default:n(()=>[b(t(o.$t("login.form.forgetPassword")),1)]),_:1})]),e(V,{type:"primary","html-type":"submit",long:"",loading:v(h)},{default:n(()=>[b(t(o.$t("login.form.login")),1)]),_:1},8,["loading"]),e(V,{type:"text",long:"",class:"login-form-register-btn"},{default:n(()=>[b(t(o.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const Ie=x(ye,[["__scopeId","data-v-846eae5d"]]),Se=c=>(ae("data-v-9183188d"),c=c(),ne(),c),ke={class:"container"},xe={class:"logo"},Pe=Se(()=>a("div",{class:"logo-text"},"Arco Design Pro for Vue3 Cashier",-1)),Ve={class:"content"},Ce={class:"content-inner"},Fe={class:"footer"},Le=P({__name:"index",setup(c){return(r,p)=>{const _=se;return i(),g("div",ke,[a("div",xe,[e(_,{alt:"logo",width:"30",src:v(re)},null,8,["src"]),Pe]),e(fe),a("div",Ve,[a("div",Ce,[e(Ie)]),a("div",Fe,[e(te)])])])}}});const Ge=x(Le,[["__scopeId","data-v-9183188d"]]);export{Ge as default};
