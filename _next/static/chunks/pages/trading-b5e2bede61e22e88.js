(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{87536:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trading",function(){return n(56645)}])},27023:function(e,l,n){"use strict";var o=n(85893),t=n(3779),a=n(2593),r=n(17988),i=n(3718),s=n(77349);let d=e=>{let{title:l,value:n,setValue:d,decimalsShift:c,children:u}=e;return(0,o.jsxs)(r.Z.Group,{controlId:"_",children:[(0,o.jsx)(r.Z.ControlLabel,{children:l}),(0,o.jsxs)(i.Z,{style:{marginTop:5,marginBottom:5},children:[(0,o.jsx)(i.Z.Button,{onClick:()=>d(new t.Z(n.amount.sub(a.O$.from(10).pow(n.decimals+c)),n.decimals)),children:"-"}),(0,o.jsx)(s.Z,{className:"no-arrows-input-number",step:.1,value:n.toHumanString(18),onChange:e=>d(t.Z.fromString("string"==typeof e?e:e.toString(),n.decimals))}),(0,o.jsx)(i.Z.Button,{onClick:()=>d(new t.Z(n.amount.add(a.O$.from(10).pow(n.decimals+c)),n.decimals)),children:"+"})]}),u]})};l.Z=d},56645:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return T}});var o=n(85893),t=n(55581),a=n(82770),r=n(3779),i=n(2593),s=n(35553),d=n(67294),c=n(40492),u=n(3365),m=n(39987),h=n(17988),x=n(58918),p=n(3718),j=n(77349),Z=n(4647),g=n(50053),b=n(22543),v=n(4934),S=n(27023),w=n(20901);let y=()=>{var e,l;let n=d.useContext(a.J),t=(0,u.Z)(),s=n.getRusdBalance(),c=n.getRusdLoanAllowance(),b=n.minLoanColateralRatio(),v=n.getAvailableSynths(),[S,y]=d.useState(null!==(l=null==v?void 0:null===(e=v[v.length-1])||void 0===e?void 0:e.address)&&void 0!==l?l:"0x0"),[f,C]=d.useState(new r.Z(i.O$.from(0),18)),[H,k]=d.useState(new r.Z(i.O$.from(0),18)),B=n.getSynthBalance(S),R=n.synthPrice(S),T=n.predictBorrowCollateralRatio(void 0,S,f,H,!0),I=n.borrowSynthCallback(S,f,H,(0,w.lZ)(t)),$=n.setRusdLoanAllowanceCallback(H,(0,w.lZ)(t));return(0,o.jsx)(m.Z,{bordered:!0,shaded:!0,header:"Borrowing",children:(0,o.jsxs)("div",{style:{textAlign:"left"},children:[(0,o.jsx)(h.Z.Group,{children:(0,o.jsx)(x.Z,{label:"Synth",data:v.map(e=>({label:e.fullName,value:e.address})),block:!0,onChange:y,defaultValue:S})}),(0,o.jsx)("br",{}),(0,o.jsxs)(h.Z.Group,{controlId:"_",children:[(0,o.jsx)(h.Z.ControlLabel,{children:"Borrow amount (synth)"}),(0,o.jsxs)(p.Z,{style:{marginTop:5,marginBottom:5},children:[(0,o.jsx)(p.Z.Button,{onClick:()=>C(new r.Z(f.amount.sub(i.O$.from(10).pow(f.decimals+1)),f.decimals)),children:"-"}),(0,o.jsx)(j.Z,{className:"no-arrows-input-number",value:f.toHumanString(2),onChange:e=>C(r.Z.fromString("string"==typeof e?e:e.toString(),f.decimals))}),(0,o.jsx)(p.Z.Button,{onClick:()=>C(new r.Z(f.amount.add(i.O$.from(10).pow(f.decimals+1)),f.decimals)),children:"+"})]}),(0,o.jsxs)(h.Z.HelpText,{children:["Balance: ",null==B?void 0:B.toHumanString(4)," (price: ",null==R?void 0:R.toHumanString(6),"$)"]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(h.Z.Group,{controlId:"_",children:[(0,o.jsx)(h.Z.ControlLabel,{children:"Pledge amount (rUSD)"}),(0,o.jsxs)(p.Z,{style:{marginTop:5,marginBottom:5},children:[(0,o.jsx)(p.Z.Button,{onClick:()=>k(new r.Z(H.amount.sub(i.O$.from(10).pow(H.decimals+1)),H.decimals)),children:"-"}),(0,o.jsx)(j.Z,{className:"no-arrows-input-number",value:H.toHumanString(18),onChange:e=>k(r.Z.fromString("string"==typeof e?e:e.toString(),H.decimals))}),(0,o.jsx)(p.Z.Button,{onClick:()=>k(new r.Z(H.amount.add(i.O$.from(10).pow(H.decimals+1)),H.decimals)),children:"+"})]}),(0,o.jsxs)(h.Z.HelpText,{children:["Balance: ",null==s?void 0:s.toHumanString(4)]}),(0,o.jsxs)(h.Z.HelpText,{children:["Allowance: ",null==c?void 0:c.toHumanString(4)]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(h.Z.HelpText,{children:["New C-ratio: ",T,"%"]}),(0,o.jsxs)(h.Z.HelpText,{children:["Min C-ratio: ",b,"%"]}),(0,o.jsx)("br",{}),(0,o.jsxs)(Z.Z,{justified:!0,children:[(0,o.jsx)(g.Z,{style:{borderColor:"#f26d9e",color:"#f26d9e",borderWidth:2},disabled:parseFloat(null==c?void 0:c.toHumanString(18))>=parseFloat(null==H?void 0:H.toHumanString(18)),async onClick(){$()},appearance:"ghost",children:(0,o.jsx)("b",{children:"Approve"})}),(0,o.jsx)(g.Z,{style:{borderColor:"#f26d9e",color:"#f26d9e",borderWidth:2},async onClick(){I()},disabled:parseFloat(null==c?void 0:c.toHumanString(18))<parseFloat(null==H?void 0:H.toHumanString(18)),appearance:"ghost",children:(0,o.jsx)("b",{children:"Borrow"})})]})]})})},f=()=>{var e;let l=d.useContext(a.J),n=(0,u.Z)(),t=l.userLoans(),[s,c]=d.useState(void 0),[p,j]=d.useState(new r.Z(i.O$.from(0),18)),Z=null==t?void 0:t.find(e=>e.borrowId===s),b=l.predictBorrowCollateralRatio(s,null!==(e=null==Z?void 0:Z.synthAddress)&&void 0!==e?e:"0x0",new r.Z(i.O$.from(0),18),p,!1),v=l.withdrawLoanCallback(s,p,(0,w.lZ)(n));return(0,o.jsxs)(m.Z,{bordered:!0,shaded:!0,header:"Withdraw collateral from a loan",children:[(0,o.jsx)("p",{children:"Select your borrow"}),(0,o.jsx)(x.Z,{block:!0,size:"lg",label:"Borrow",data:(null!=t?t:[]).filter(e=>"rUSD"!==e.synthSymbol).map(e=>({label:"".concat(e.borrowId.slice(0,9)," (").concat(e.collateral.toHumanString(2)," rUSD & ").concat(e.borrowedSynthAmount.toHumanString(5)," ").concat(e.synthSymbol,", ratio: ").concat(e.collateralRation,"% over min ").concat(e.minCollateralRatio,"%)"),value:e.borrowId})),onChange:c,cleanable:!1,style:{marginTop:5},defaultValue:s}),(0,o.jsx)("br",{}),(0,o.jsxs)(S.Z,{title:"Amount to withdraw (rUSD)",value:p,setValue:j,decimalsShift:1,children:[(0,o.jsxs)(h.Z.HelpText,{children:["New C-Ratio: ",b,"%"]}),(0,o.jsxs)(h.Z.HelpText,{children:["Min C-Ratio: ",null==Z?void 0:Z.minCollateralRatio,"%"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(g.Z,{block:!0,disabled:void 0===s,appearance:"primary",style:{backgroundColor:void 0==s?"#48738a":"#2e6585"},async onClick(){v()},children:"Withdraw"})]})},C=()=>{var e;let l=d.useContext(a.J),n=(0,u.Z)(),t=l.userLoans(),[s,c]=d.useState(void 0),[p,j]=d.useState(new r.Z(i.O$.from(0),18)),Z=null==t?void 0:t.find(e=>e.borrowId===s),b=l.predictBorrowCollateralRatio(s,null!==(e=null==Z?void 0:Z.synthAddress)&&void 0!==e?e:"0x0",p,new r.Z(i.O$.from(0),18),!1),v=l.repayLoanCallback(s,p,(0,w.lZ)(n));return(0,o.jsxs)(m.Z,{bordered:!0,shaded:!0,header:"Repay a borrow",children:[(0,o.jsx)("p",{children:"Select your borrow"}),(0,o.jsx)(x.Z,{block:!0,size:"lg",label:"Borrow",data:(null!=t?t:[]).filter(e=>"rUSD"!==e.synthSymbol).map(e=>({label:"".concat(e.borrowId.slice(0,9)," (").concat(e.collateral.toHumanString(2)," rUSD & ").concat(e.borrowedSynthAmount.toHumanString(5)," ").concat(e.synthSymbol,", ratio: ").concat(e.collateralRation,"% over min ").concat(e.minCollateralRatio,"%)"),value:e.borrowId})),onChange:c,cleanable:!1,style:{marginTop:5},defaultValue:s}),(0,o.jsx)("br",{}),(0,o.jsxs)(S.Z,{title:"Amount to repay (synth)",value:p,setValue:j,decimalsShift:1,children:[(0,o.jsxs)(h.Z.HelpText,{children:["New C-Ratio: ",b,"%"]}),(0,o.jsxs)(h.Z.HelpText,{children:["Min C-Ratio: ",null==Z?void 0:Z.minCollateralRatio,"%"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(g.Z,{block:!0,disabled:void 0===s,appearance:"primary",style:{backgroundColor:void 0==s?"#8a7f48":"#85782e"},async onClick(){v()},children:"Repay"})]})},H=()=>{var e;let l=d.useContext(a.J),n=(0,u.Z)(),t=l.userLoans(),s=l.getRusdLoanAllowance(),[c,p]=d.useState(void 0),[j,b]=d.useState(new r.Z(i.O$.from(0),18)),v=null==t?void 0:t.find(e=>e.borrowId===c),y=l.predictBorrowCollateralRatio(c,null!==(e=null==v?void 0:v.synthAddress)&&void 0!==e?e:"0x0",new r.Z(i.O$.from(0),18),j,!0),f=l.setRusdLoanAllowanceCallback(j,(0,w.lZ)(n)),C=l.depositLoanCallback(c,j,(0,w.lZ)(n));return(0,o.jsxs)(m.Z,{bordered:!0,shaded:!0,header:"Depostit collateral to a loan",children:[(0,o.jsx)("p",{children:"Select your borrow"}),(0,o.jsx)(x.Z,{block:!0,size:"lg",label:"Borrow",data:(null!=t?t:[]).filter(e=>"rUSD"!==e.synthSymbol).map(e=>({label:"".concat(e.borrowId.slice(0,9)," (").concat(e.collateral.toHumanString(2)," rUSD & ").concat(e.borrowedSynthAmount.toHumanString(5)," ").concat(e.synthSymbol,", ratio: ").concat(e.collateralRation,"% over min ").concat(e.minCollateralRatio,"%)"),value:e.borrowId})),onChange:p,cleanable:!1,style:{marginTop:5},defaultValue:c}),(0,o.jsx)("br",{}),(0,o.jsxs)(S.Z,{title:"Amount to deposit (rUSD)",value:j,setValue:b,decimalsShift:1,children:[(0,o.jsxs)(h.Z.HelpText,{children:["Allowance: ",null==s?void 0:s.toHumanString(2)]}),(0,o.jsxs)(h.Z.HelpText,{children:["New C-Ratio: ",y,"%"]}),(0,o.jsxs)(h.Z.HelpText,{children:["Min C-Ratio: ",null==v?void 0:v.minCollateralRatio,"%"]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(Z.Z,{justified:!0,children:[(0,o.jsx)(g.Z,{appearance:"primary",style:{backgroundColor:void 0==c?"#8a5e48":"#854c2e"},async onClick(){f()},disabled:parseFloat(null==s?void 0:s.toHumanString(18))>=parseFloat(null==j?void 0:j.toHumanString(18))||void 0===c,children:"Approve"}),(0,o.jsx)(g.Z,{disabled:parseFloat(null==s?void 0:s.toHumanString(18))<parseFloat(null==j?void 0:j.toHumanString(18))||void 0===c,appearance:"primary",style:{backgroundColor:void 0==c?"#8a5e48":"#854c2e"},async onClick(){C()},children:"Deposit"})]})]})},k=()=>{var e,l,n,t,c,Z,b,v;let S=d.useContext(a.J),y=(0,u.Z)(),f=S.getAvailableSynths(),[C,H]=d.useState(new r.Z(i.O$.from(0),18)),[k,B]=d.useState(new r.Z(i.O$.from(0),18)),[R,T]=d.useState("swapFrom"),[I,$]=d.useState(null!==(b=null==f?void 0:null===(e=f[0])||void 0===e?void 0:e.address)&&void 0!==b?b:"0x0"),[A,O]=d.useState(null!==(v=null==f?void 0:null===(l=f[f.length-1])||void 0===l?void 0:l.address)&&void 0!==v?v:"0x0"),_=S.getSynthBalance(I),N=S.getSynthBalance(A),F=S.synthPrice(I),L=S.synthPrice(A),D=S.swapSynthCallback(R,I,A,"swapFrom"===R?C:k,(0,w.lZ)(y));return(0,o.jsxs)(m.Z,{bordered:!0,shaded:!0,header:"Swap Synthes",children:[(0,o.jsxs)(h.Z.Group,{controlId:"_",children:[(0,o.jsxs)(p.Z,{style:{marginBottom:5},children:[(0,o.jsx)(j.Z,{placeholder:"From",step:1e-5,onChange(e){let l=r.Z.fromString("string"==typeof e?e:e.toString(),18);H(l),T("swapFrom");let n=(null==F?void 0:F.amount)/(null==L?void 0:L.amount),o=s.parseUnits((n*parseFloat(l.toHumanString(18))).toString(),18);B(new r.Z(o,18))},value:C.toHumanString(18)}),(0,o.jsx)(p.Z.Button,{className:"selector-in-input",children:(0,o.jsx)(x.Z,{size:"sm",label:"Synth",data:f.map(e=>({label:e.fullName,value:e.address})),onChange(e){$(e),H(new r.Z(i.O$.from(0),18)),B(new r.Z(i.O$.from(0),18))},defaultValue:null==f?void 0:null===(n=f[0])||void 0===n?void 0:n.address})})]}),(0,o.jsxs)(h.Z.HelpText,{children:["Balance: ",null==_?void 0:_.toHumanString(5)," (price: ",null==F?void 0:F.toHumanString(6),"$)"]})]}),(0,o.jsx)("br",{}),(0,o.jsxs)(h.Z.Group,{controlId:"_",children:[(0,o.jsxs)(p.Z,{style:{marginBottom:5},children:[(0,o.jsx)(j.Z,{step:1e-5,placeholder:"To",onChange(e){let l=r.Z.fromString("string"==typeof e?e:e.toString(),18);B(l),T("swapTo");let n=(null==L?void 0:L.amount)/(null==F?void 0:F.amount),o=s.parseUnits((n*parseFloat(l.toHumanString(18))).toString(),18);H(new r.Z(o,18))},value:k.toHumanString(18)}),(0,o.jsx)(p.Z.Button,{className:"selector-in-input",children:(0,o.jsx)(x.Z,{size:"sm",label:"Synth",data:(null!=f?f:[]).map(e=>({label:e.fullName,value:e.address})),onChange(e){O(e),B(new r.Z(i.O$.from(0),18)),H(new r.Z(i.O$.from(0),18))},defaultValue:null==f?void 0:null===(t=f[f.length-1])||void 0===t?void 0:t.address})})]}),(0,o.jsxs)(h.Z.HelpText,{children:["Balance: ",null==N?void 0:N.toHumanString(5)," (price: ",null==L?void 0:L.toHumanString(6),"$)"]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(g.Z,{color:"yellow",appearance:"ghost",block:!0,style:{marginBottom:7,borderWidth:2},onClick:async()=>D(),children:(0,o.jsx)("b",{children:"Swap"})}),(0,o.jsxs)(h.Z.HelpText,{children:["Price: 2323.33 (",null===(c=null==f?void 0:f.find(e=>e.address===A))||void 0===c?void 0:c.fullName," in ",null===(Z=f.find(e=>e.address===I))||void 0===Z?void 0:Z.fullName,")"]})]})},B=e=>{let{synthAddress:l,...n}=e,t=d.useContext(a.J),r=t.totalShorts(l),i=t.totalLongs(l),s=parseFloat(null==r?void 0:r.toHumanString(18))/(parseFloat(null==i?void 0:i.toHumanString(18))+parseFloat(null==r?void 0:r.toHumanString(18)));return(0,o.jsxs)(b.Z,{style:{paddingTop:5,paddingLeft:25},justify:"space-between",children:[(0,o.jsx)(b.Z.Item,{style:{paddingTop:4},colspan:1,children:(0,o.jsx)("h5",{children:"Skew:"})}),(0,o.jsx)(b.Z.Item,{colspan:21,children:(0,o.jsx)(v.Z.Line,{percent:Math.round((1-s)*100),strokeColor:"#1d5f5e",trailColor:"#82363a"})})]})},R=()=>{var e,l,n;let t=d.useContext(a.J),r=t.getAvailableSynths(),[i,s]=d.useState(null!==(n=null==r?void 0:null===(e=r[r.length-1])||void 0===e?void 0:e.address)&&void 0!==n?n:"0x0");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b.Z,{justify:"space-between",children:[(0,o.jsx)(b.Z.Item,{colspan:18,children:(0,o.jsxs)(b.Z,{style:{flexDirection:"column",alignItems:"center"},justify:"space-between",children:[(0,o.jsx)(b.Z.Item,{colspan:23,children:(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(b.Z.Item,{colspan:8,children:(0,o.jsx)(x.Z,{size:"lg",label:"Synth",data:r.filter(e=>"rUSD"!==e.symbol).map(e=>({label:e.fullName,value:e.address})),style:{width:300,minWidth:250},onChange:s,defaultValue:i})}),(0,o.jsx)(b.Z.Item,{colspan:16,children:(0,o.jsx)(B,{synthAddress:i})})]})}),(0,o.jsx)("br",{}),(0,o.jsx)(b.Z.Item,{colspan:23,children:(0,o.jsx)(c.rJ,{height:780,width:"auto",theme:"dark",symbol:null===(l=r.find(e=>e.address===i))||void 0===l?void 0:l.tradingViewSymbol,allow_symbol_change:!1,container_id:"tradingview_aaab4"})})]})}),(0,o.jsxs)(b.Z.Item,{colspan:6,children:[(0,o.jsx)(k,{}),(0,o.jsx)("br",{}),(0,o.jsx)(y,{})]})]}),(0,o.jsxs)("div",{style:{marginTop:10,marginBottom:30},children:[(0,o.jsxs)(b.Z,{justify:"space-around",children:[(0,o.jsx)(b.Z.Item,{colspan:11,children:(0,o.jsx)(C,{})}),(0,o.jsx)(b.Z.Item,{colspan:11,children:(0,o.jsx)(f,{})})]}),(0,o.jsx)("br",{})]}),(0,o.jsx)("div",{style:{marginLeft:40,marginRight:40},children:(0,o.jsx)(H,{})}),(0,o.jsx)("br",{})]})};function T(){return(0,o.jsx)(t.Z,{active:"trading",children:(0,o.jsx)("div",{style:{paddingTop:25,paddingRight:25},children:(0,o.jsx)(R,{})})})}}},function(e){e.O(0,[801,681,632,581,774,888,179],function(){return e(e.s=87536)}),_N_E=e.O()}]);