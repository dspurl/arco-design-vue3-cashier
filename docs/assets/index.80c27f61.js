import{d as C,i as w,E as r,aG as b,aJ as e,aK as t,u,aO as o,aP as _,aH as E,bW as A,bX as P,by as I,c0 as N,aY as T,c1 as U,bv as $,bS as V,e as L,p as F,F as S,I as l}from"./arco.ba71ebb9.js";import{U as j}from"./index.6074fc4b.js";import{_ as D}from"./index.83bb2bb4.js";import{t as z}from"./index.e58ad9f7.js";/* empty css               *//* empty css              *//* empty css               *//* empty css              *//* empty css               */import{u as G}from"./loading.069aae80.js";import"./chart.b4158a50.js";import"./vue.a49450d0.js";const H=C({__name:"info",setup(B){const{user:n}=w("user"),{loading:s,setLoading:m}=G(),i=[{identification:"1663389047305999440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"},{identification:"1663389047305993440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"},{identification:"1663389047305499440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"},{identification:"1663389047305199440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"},{identification:"1663389047305659440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"},{identification:"1663389017305999440",number:3,total:1200,amountPaid:1200,state:"\u5DF2\u5B8C\u6210",time:"2023-07-01"}],p=[{type:"\u6536\u5165",money:100,time:"2023-07-01",remark:"\u4F1A\u5458\u5145\u503C100\u5143"},{type:"\u652F\u51FA",money:100,time:"2023-07-01",remark:"\u5BF9\u8BA2\u5355\uFF1A123123123123\u7684\u4ED8\u6B3E"}];return(x,q)=>{const d=A,y=P,c=I,a=N,h=T,f=U,v=$,g=V;return r(),b(g,{class:"general-card classify-box","header-style":{paddingBottom:"0"},"body-style":{padding:"15px"}},{default:e(()=>[t(v,{"lazy-load":""},{default:e(()=>[t(c,{key:"1",title:"\u4F1A\u5458\u4FE1\u606F"},{default:e(()=>[u(n)?(r(),b(y,{key:0,loading:u(s),column:3,layout:"vertical",bordered:""},{default:e(()=>[t(d,{label:"\u6635\u79F0"},{default:e(()=>[o(_(u(n).nickname),1)]),_:1}),t(d,{label:"\u624B\u673A\u53F7\u7801"},{default:e(()=>[o(_(u(n).cellphone),1)]),_:1}),t(d,{label:"\u4F59\u989D"},{default:e(()=>[o(_(u(z)(u(n).money)),1)]),_:1})]),_:1},8,["loading"])):E("",!0)]),_:1}),t(c,{key:"2",title:"\u6D88\u8D39\u660E\u7EC6"},{default:e(()=>[t(f,{data:i,scroll:{x:800}},{columns:e(()=>[t(a,{title:"\u8BA2\u5355ID",width:200,"data-index":"identification"}),t(a,{title:"\u5546\u54C1\u6570\u91CF","data-index":"number",width:200,align:"center"}),t(a,{title:"\u5546\u54C1\u603B\u4EF7",width:200,"data-index":"total"}),t(a,{title:"\u5B9E\u4ED8\u91D1\u989D",width:200,"data-index":"amountPaid"}),t(a,{title:"\u8BA2\u5355\u72B6\u6001",width:200,align:"center","data-index":"state"}),t(a,{width:200,title:"\u8BA2\u5355\u65F6\u95F4","data-index":"time"}),t(a,{title:"\u64CD\u4F5C",width:120},{cell:e(({record:k})=>[t(h,{onClick:Q=>x.$modal.info({title:"Name",content:k.name})},{default:e(()=>[o("\u8BE6\u60C5")]),_:2},1032,["onClick"])]),_:1})]),_:1})]),_:1}),t(c,{key:"3",title:"\u8D44\u91D1\u8BB0\u5F55"},{default:e(()=>[t(f,{data:p,scroll:{x:800}},{columns:e(()=>[t(a,{title:"\u64CD\u4F5C\u7C7B\u578B",width:100,"data-index":"type"}),t(a,{title:"\u64CD\u4F5C\u91D1\u989D","data-index":"money",width:200,align:"center"}),t(a,{title:"\u64CD\u4F5C\u65F6\u95F4",width:200,"data-index":"time"}),t(a,{title:"\u64CD\u4F5C\u8BF4\u660E",width:300,"data-index":"remark"})]),_:1})]),_:1})]),_:1})]),_:1})}}});const J=D(H,[["__scopeId","data-v-34919bf0"]]),K={class:"container"},M={class:"left-side"},O={class:"panel"},W={class:"right-side"},X={name:"Member"},Y=C({...X,setup(B){const n=L(),s=!0;function m(i){n.value=i}return F("user",{user:n,updateUser:m}),F("isDefaultUser",s),(i,p)=>(r(),S("div",K,[l("div",M,[l("div",O,[t(j)])]),l("div",W,[t(J)])]))}});const _t=D(Y,[["__scopeId","data-v-bc5f563f"]]);export{_t as default};
