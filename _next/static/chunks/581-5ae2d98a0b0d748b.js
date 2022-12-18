"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{55581:function(a,t,e){var n=e(85893),i=e(74855),r=e(17006),o=e(7158),d=e(89884),s=e(50053),l=e(58918),c=e(13289),u=e(81),h=e(67294),m=e(34789),w=e(82770),v=e(41664),g=e.n(v);let f=h.forwardRef((a,t)=>{let{as:e,href:i,...r}=a;return(0,n.jsx)(g(),{href:i,as:e,legacyBehavior:!0,children:(0,n.jsx)("a",{ref:t,...r})})}),b={padding:"0 15px 0 15px",color:"#FFF"},S=a=>{var t;let{changeNetworkCallback:e,...i}=a,r=m.g0(),o=m.LN(),[d,c]=h.useState((null===(t=o.chain)||void 0===t?void 0:t.id)==50?"mainnet":"testnet");return console.log("NET",d,o.chain,w.Z[d]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{size:"lg",label:"Network",data:C,style:{width:300,minWidth:250},onChange(a){var t;null===(t=r.switchNetwork)||void 0===t||t.call(r,"testnet"==a?51:50),e(w.Z[a]),console.log("NETC",w.Z[a]),c(a)},cleanable:!1,defaultValue:d,searchable:!1}),"\xa0",(()=>{let a=w.Z[d].showWallet(),t=w.Z[d].connectButton(),[e,i]=h.useState("");(0,h.useEffect)(()=>{i("".concat(null==a?void 0:a.network_currency_symbol," ").concat(null==a?void 0:a.network_currency_amount,"\n                 (").concat(null==a?void 0:a.address.slice(0,5),"..").concat(null==a?void 0:a.address.slice((null==a?void 0:a.address.length)-5,null==a?void 0:a.address.length),")\n            "))},[a]);let r=(0,n.jsx)(s.Z,{color:"green",appearance:"ghost",style:{borderColor:"#6474a7",color:"rgba(255, 255, 255, 0.9"},children:e});return(0,n.jsx)("div",{children:a?r:t})})()]})},C=[{label:(0,n.jsx)("span",{children:"XDC Apothem"}),value:"testnet"},{label:(0,n.jsx)("span",{children:"XDC Mainnet"}),value:"mainnet"}],p=a=>{var t,e,s;let{children:l,active:v,...g}=a,C=m.LN(),[p,N]=h.useState(w.Z[(null===(t=C.chain)||void 0===t?void 0:t.id)==50?"mainnet":"testnet"]);return console.log("NEWNET",null===(e=C.chain)||void 0===e?void 0:e.id),(0,h.useEffect)(()=>{var a,t;N(w.Z[(null===(a=C.chain)||void 0===a?void 0:a.id)===50?"mainnet":"testnet"]),console.log("NEWNET",w.Z[(null===(t=C.chain)||void 0===t?void 0:t.id)===50?"mainnet":"testnet"])},[null===(s=C.chain)||void 0===s?void 0:s.id]),(0,n.jsxs)(w.J.Provider,{value:p,children:[(0,n.jsxs)(c.Z,{style:{backgroundColor:"#21273a"},children:[(0,n.jsxs)(u.Z,{activeKey:v,children:[(0,n.jsx)(u.Z.Item,{as:f,href:"/",active:"home"==v,style:b,icon:(0,n.jsx)(i.Z,{}),children:"Home"}),(0,n.jsx)(u.Z.Item,{as:f,href:"/trading",active:"trading"==v,style:b,icon:(0,n.jsx)(d.Z,{}),children:"Trading"}),(0,n.jsx)(u.Z.Item,{as:f,href:"/rusd",active:"rusd"==v,style:b,icon:(0,n.jsx)(r.Z,{}),children:"Mint/Burn rUSD"}),(0,n.jsx)(u.Z.Item,{as:f,href:"/faucet",active:"faucet"==v,style:b,icon:(0,n.jsx)(o.Z,{}),children:"Faucet"})]}),(0,n.jsx)(u.Z,{pullRight:!0,children:(0,n.jsx)(u.Z.Item,{children:(0,n.jsx)(S,{changeNetworkCallback:N})})})]}),l]})};t.Z=p},82770:function(a,t,e){e.d(t,{J:function(){return O},Z:function(){return j}});var n=e(67294),i=e(66397),r=e(85893),o=e(70070),d=e(84644),s=e(34789),l=e(6911),c=e(42392),u=e(13492),h=e(34719),m=e(21116),w=e(20404),v=e(9095),g=e(72289),f=e(99616),b=e(2593),S=e(57218),C=e(3779),p=e(46791),N=e(86957),Z=e(50053),k=e(3365),A=e(36264),D=e(20901);o.tS.arbitrum;let{provider:L,webSocketProvider:F,chains:y}=d.QB([{id:50,name:"XDC Network",network:"XDC Network",nativeCurrency:{name:"XDC",symbol:"XDC",decimals:18},rpcUrls:{default:"https://rpc1.xinfin.network",public:"https://rpc1.xinfin.network"},testnet:!1}],[(0,A.I)()]);s.eI({autoConnect:!0,connectors:[new d._k({chains:y})],provider:L,webSocketProvider:F});let x="0xE0fd1bb6d8FB34daeFF08021Fa0752Ff061D4b4F",R="0xcB8ADE5a0122D2Ee4fD91b0d533d4d7c63044ce7",_={rGLD:"GOLD",rGAS:"NATURALGAS"},E=n.createContext(void 0);class G extends p.Z{connectButton(){n.useContext(E);let{connect:a,connectors:t}=s.$4();return(0,r.jsx)("div",{children:(0,r.jsx)("div",{id:"ethereum-connect-button",style:{color:"white"},children:(0,r.jsx)(Z.Z,{appearance:"primary",color:"cyan",onClick:()=>a({connector:t[0]}),children:(0,r.jsx)("b",{children:"Connect Injected"})})})})}showWallet(){let a=s.mA(),t=s.KQ({address:a.address});if(console.log("WAL",t.error),!1==a.isConnected||void 0===t.data)return;let e={address:a.address,network_currency_symbol:"XDC",network_currency_amount:new C.Z(t.data.value,18).toHumanString(6)};return e}getRusdBalance(){var a;let t=s.mA(),e=s.do({address:x,abi:u,functionName:"rUsd"}),n=s.dQ({address:e.data}),i=s.do({address:e.data,abi:c,functionName:"balanceOf",args:[t.address],watch:!0});if(void 0!==i.data&&(null===(a=n.data)||void 0===a?void 0:a.decimals)!==void 0){let r=i.data;return new C.Z(r,n.data.decimals)}}getRawBalance(){var a;let t=s.mA(),e=s.do({address:x,abi:u,functionName:"raw"}),n=s.dQ({address:e.data}),i=s.do({address:e.data,abi:l,functionName:"balanceOf",args:[t.address],watch:!0});if(void 0!==i.data&&(null===(a=n.data)||void 0===a?void 0:a.decimals)!==void 0){let r=i.data;return new C.Z(r,n.data.decimals)}}getRawPrice(){let a=s.do({address:x,abi:u,functionName:"oracle"}),t=s.do({address:x,abi:u,functionName:"raw"}),e=s.do({address:a.data,abi:h,functionName:"getPrice",args:[t.data]});if(void 0!==e.data){let n=e.data[0],i=e.data[1];return new C.Z(n,i)}}getWethPrice(){s.mA();let a=s.do({address:x,abi:u,functionName:"oracle"}),t=s.do({address:x,abi:u,functionName:"wEth"}),e=s.do({address:a.data,abi:h,functionName:"getPrice",args:[t.data]});if(void 0!==e.data){let n=e.data[0],i=e.data[1];return n.div(b.O$.from(10).pow(i)).toNumber()}}getWethBalance(){var a;let t=s.mA(),e=s.do({address:x,abi:u,functionName:"wEth"}),n=s.dQ({address:e.data}),i=s.do({address:e.data,abi:w,functionName:"balanceOf",args:[t.address],watch:!0});if(console.log("WETHB",i.error),void 0!==i.data&&(null===(a=n.data)||void 0===a?void 0:a.decimals)!==void 0){let r=i.data;return new C.Z(r,n.data.decimals)}}getWethAllowance(){var a;let t=s.mA(),e=s.do({address:x,abi:u,functionName:"wEth"}),n=s.dQ({address:e.data}),i=s.do({address:e.data,abi:w,functionName:"allowance",args:[t.address,x],watch:!0});if(void 0!==i.data&&(null===(a=n.data)||void 0===a?void 0:a.decimals)!==void 0){let r=i.data;return new C.Z(r,n.data.decimals)}}getAvailableSynths(){return[{address:"0x4d19BC4b07F97926544CEAC7CaAA6023F942A720",fullName:"rUSD",symbol:"rUSD",tradingViewSymbol:"-"},{address:"0x1FA0c70dD4A072eF4F21dFbD98c708889eFF5f59",fullName:"rGLD",symbol:"rGLD",tradingViewSymbol:_.rGLD},{address:"0x18Cd2C6dD35EED4c06226618A2717F61A7FDAa0e",fullName:"rGAS",symbol:"rGAS",tradingViewSymbol:_.rGAS}]}getCurrentCRatio(){let a=s.mA(),t=s.do({address:x,abi:u,functionName:"collateralRatio",args:[a.address],watch:!0});if(void 0!==t.data)return t.data/1e6}getMinCRatio(){let a=s.do({address:x,abi:u,functionName:"minCollateralRatio"});if(void 0!==a.data){let t=a.data;return t/1e8*100}}getNewWethAllowanceCallback(a,t){var e;let n=(0,k.Z)(),i=s.do({address:x,abi:u,functionName:"wEth",watch:!0}),r=s.PJ({address:i.data,abi:w,functionName:"approve",args:[x,a.amount]}),o=s.GG(r.config),d=s.BX({hash:null===(e=o.data)||void 0===e?void 0:e.hash}),l=this._defineStateChangesCallback(d.isFetching,o.isLoading,d.status,this.wethApproveState);return this.wethApproveState!==l&&(this.wethApproveState=l,t(l)),this._writeContractOrShowErrorFunction(r.error,o.write,n)}predictCollateralRatio(a,t,e){let n=s.mA(),i=s.do({address:x,abi:u,functionName:"predictCollateralRatio",args:[n.address,a.amount,t.amount,e],watch:!0});if(void 0!==i.data){let r=i.data,o=new C.Z(r,6);return parseFloat(o.toHumanString(2))}}getMintCallback(a,t,e){var n;this.getWethAllowance();let i=s.PJ({address:x,abi:u,functionName:"mint",args:[a.amount,t.amount]}),r=(0,k.Z)(),o=s.GG(i.config),d=s.BX({hash:null===(n=o.data)||void 0===n?void 0:n.hash}),l=this._defineStateChangesCallback(d.isFetching,o.isLoading,d.status,this.mintState);return this.mintState!==l&&(this.mintState=l,e(l)),this._writeContractOrShowErrorFunction(i.error,o.write,r)}getBurnRusdCallback(a,t,e){var n;let i=s.PJ({address:x,abi:u,functionName:"burn",args:[a.amount,t]}),r=(0,k.Z)(),o=s.GG(i.config),d=s.BX({hash:null===(n=o.data)||void 0===n?void 0:n.hash}),l=this._defineStateChangesCallback(d.isFetching,o.isLoading,d.status,this.burnState);return this.burnState!==l&&(this.burnState=l,e(l)),this._writeContractOrShowErrorFunction(i.error,o.write,r)}getUserInssurances(){var a,t,e,n;let i=s.mA();s.do({address:R,abi:v,functionName:"totalInsurances",args:[i.address]});let o=s.xD({cacheKey:"userInsurances",...s.Ui(a=>[{address:R,abi:v,functionName:"userInsurances",args:[i.address,b.O$.from(a)]}],{start:0,perPage:20,direction:"increment"})}),d=s.Dm({contracts:null===(a=o.data)||void 0===a?void 0:a.pages[0].filter(a=>a).map(a=>({address:R,abi:v,functionName:"insurances",args:[a]}))}),l=s.Dm({contracts:null===(t=o.data)||void 0===t?void 0:t.pages[0].filter(a=>a).map(a=>({address:R,abi:v,functionName:"availableCompensation",args:[a]}))}),c=null!==(n=null===(e=d.data)||void 0===e?void 0:e.filter(a=>a).map(a=>{var t,e,n,i;let s=new C.Z(null===(e=l.data)||void 0===e?void 0:e[null===(t=d.data)||void 0===t?void 0:t.indexOf(a)],18);return{id:null===(n=o.data)||void 0===n?void 0:n.pages[0][null===(i=d.data)||void 0===i?void 0:i.indexOf(a)],rawLocked:new C.Z(a.stakedRaw,18).toHumanString(4),lockedAt:new Date(1e3*a.startTime.toNumber()).toString(),availableAt:new Date(1e3*a.startTime.add(a.lockTime)).toString(),rawRepaid:new C.Z(a.repaidRaw,18).toHumanString(18),availableCompensation:s,availableCompensationString:s.toHumanString(3),unstakeButton:(0,r.jsx)(Z.Z,{style:{borderWidth:2},color:"red",appearance:"ghost",block:!0,disabled:Date.now()/1e3<a.startTime.toNumber()+a.lockTime,children:"Unstake"})}}))&&void 0!==n?n:[];return c}rawRepay(){let a=s.mA(),t=s.do({address:x,abi:u,functionName:"userDebt",args:[a.address]}),e=s.do({address:x,abi:u,functionName:"userDebts",args:[a.address]});if(void 0!==t.data&&void 0!==e.data&&null!==t.data&&null!==e.data){let n=t.data.sub(e.data.minted);return n.lt(b.O$.from(0))&&(n=b.O$.from(0)),new C.Z(n,18)}}stakeRawCallback(a,t,e){var n;let i=(0,k.Z)(),r=t.getTime()-Date.now();this.getRawInsuranceAllowance(),console.log(t.getTime(),Date.now());let o=s.PJ({address:R,abi:v,functionName:"stakeRaw",args:[Math.round(r/1e3),a.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(n=d.data)||void 0===n?void 0:n.hash}),c=this._defineStateChangesCallback(l.isFetching,d.isLoading,o.status,this.stakeRawState);return this.stakeRawState!==c&&(this.stakeRawState=c,e(c)),this._writeContractOrShowErrorFunction(o.error,d.write,i)}getRawInsuranceAllowance(){var a;let t=s.mA(),e=s.do({address:x,abi:u,functionName:"raw"}),n=s.dQ({address:e.data}),i=s.do({address:e.data,abi:l,functionName:"allowance",args:[t.address,R],watch:!0});if(void 0!==i.data&&(null===(a=n.data)||void 0===a?void 0:a.decimals)!==void 0){let r=i.data;return new C.Z(r,n.data.decimals)}}userDebt(){let a=s.mA(),t=s.do({address:x,abi:u,functionName:"userDebt",args:[a.address],watch:!0});if(void 0!==t.data&&null!==t.data){let e=new C.Z(t.data,18);return e}}predictBorrowCollateralRatio(a,t,e,n,i){let r=s.do({address:x,abi:u,functionName:"loan"}),o=s.do({address:r.data,abi:f,functionName:"predictCollateralRatio",args:[null!=a?a:S.R,t,e.amount,n.amount,i]});if(void 0!==o.data&&null!==o.data){let d=new C.Z(o.data,6);return parseFloat(d.toHumanString(2))}}depositLoanCallback(a,t,e){var n;let i=(0,k.Z)(),r=s.do({address:x,abi:u,functionName:"loan"});this.getRusdLoanAllowance();let o=s.PJ({address:r.data,abi:f,functionName:"deposit",args:[a,t.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(n=d.data)||void 0===n?void 0:n.hash}),c=this._defineStateChangesCallback(l.isFetching,d.isLoading,l.status,this.depositLoanState);return this.depositLoanState!==c&&(this.depositLoanState=c,e(c)),this._writeContractOrShowErrorFunction(o.error,d.write,i)}borrowSynthCallback(a,t,e,n){var i;let r=(0,k.Z)(),o=s.do({address:x,abi:u,functionName:"loan"});this.getRusdLoanAllowance();let d=s.PJ({address:o.data,abi:f,functionName:"borrow",args:[a,t.amount,e.amount]}),l=s.GG(d.config),c=s.BX({hash:null===(i=l.data)||void 0===i?void 0:i.hash}),h=this._defineStateChangesCallback(c.isFetching,l.isLoading,c.status,this.borrowSynthState);return this.borrowSynthState!==h&&(this.borrowSynthState=h,n(h)),this._writeContractOrShowErrorFunction(d.error,l.write,r)}getRusdLoanAllowance(){let a=s.mA(),t=s.do({address:x,abi:u,functionName:"rUsd"}),e=s.do({address:x,abi:u,functionName:"loan"}),n=s.do({address:t.data,abi:l,functionName:"allowance",args:[a.address,e.data],watch:!0});if(void 0!==n.data){let i=n.data;return new C.Z(i,18)}}getNewRawAllowanceCallback(a,t){var e;let n=(0,k.Z)(),i=s.do({address:x,abi:u,functionName:"raw"}),r=s.PJ({address:i.data,abi:l,functionName:"approve",args:[R,a.amount]}),o=s.GG(r.config),d=s.BX({hash:null===(e=o.data)||void 0===e?void 0:e.hash});console.log(d.isFetching,o.isLoading,d.status,this.rawApproveState);let c=this._defineStateChangesCallback(d.isFetching,o.isLoading,d.status,this.rawApproveState);return this.rawApproveState!==c&&(this.rawApproveState=c,t(c)),this._writeContractOrShowErrorFunction(r.error,o.write,n)}unstakeCallback(a,t){console.log("TODO")}synthPrice(a){let t=s.do({address:x,abi:u,functionName:"oracle"}),e=s.do({address:t.data,abi:h,functionName:"getPrice",args:[a]});if(void 0!==e.data&&null!==e.data){let n=new C.Z(e.data[0],e.data[1]);return n}}swapSynthCallback(a,t,e,n,i){var r;let o=(0,k.Z)(),d=s.do({address:x,abi:u,functionName:"synter"}),l=s.PJ({address:d.data,abi:m,functionName:a,args:[t,e,n.amount]}),c=s.GG(l.config),h=s.BX({hash:null===(r=c.data)||void 0===r?void 0:r.hash}),w=this._defineStateChangesCallback(h.isFetching,c.isLoading,h.status,this.swapState);return this.swapState!==w&&(this.swapState=w,i(w)),this._writeContractOrShowErrorFunction(l.error,c.write,o)}wethLocked(){var a,t;let e=s.mA(),n=s.do({address:x,abi:u,functionName:"userDebts",args:[null==e?void 0:e.address],watch:!0});if((null===(a=n.data)||void 0===a?void 0:a.collateral)!==void 0){let i=new C.Z(null===(t=n.data)||void 0===t?void 0:t.collateral,18);return i}}unlockWethCallback(a,t){var e;let n=(0,k.Z)(),i=s.PJ({address:x,abi:u,functionName:"withdraw",args:[a.amount]}),r=s.GG(i.config),o=s.BX({hash:null===(e=r.data)||void 0===e?void 0:e.hash}),d=this._defineStateChangesCallback(o.isFetching,r.isLoading,o.status,this.unlockWethState);return this.unlockWethState!==d&&(this.unlockWethState=d,t(d)),this._writeContractOrShowErrorFunction(i.error,r.write,n)}mintWethCallback(a,t){var e;let n=(0,k.Z)(),i=s.mA(),r=s.do({address:x,abi:u,functionName:"wEth"}),o=s.PJ({address:r.data,abi:w,functionName:"mint",args:[i.address,a.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(e=d.data)||void 0===e?void 0:e.hash}),c=this._defineStateChangesCallback(l.isFetching,d.isLoading,l.status,this.mintWethState);return this.mintWethState!==c&&(this.mintWethState=c,t(c)),this._writeContractOrShowErrorFunction(o.error,d.write,n)}mintRawCallback(a,t){var e;let n=(0,k.Z)();s.mA();let i=s.do({address:x,abi:u,functionName:"raw"}),r=s.PJ({address:i.data,abi:l,functionName:"mintTest",args:[a.amount]}),o=s.GG(r.config),d=s.BX({hash:null===(e=o.data)||void 0===e?void 0:e.hash}),c=this._defineStateChangesCallback(d.isFetching,o.isLoading,d.status,this.mintRawState);return this.mintRawState!==c&&(this.mintRawState=c,t(c)),this._writeContractOrShowErrorFunction(r.error,o.write,n)}getSynthBalance(a){let t=s.mA(),e=s.do({address:a,abi:c,functionName:"balanceOf",args:[t.address],watch:!0});if(void 0!==e.data&&null!==e.data){let n=new C.Z(e.data,18);return n}}setRusdLoanAllowanceCallback(a,t){var e;let n=(0,k.Z)(),i=s.do({address:x,abi:u,functionName:"rUsd"}),r=s.do({address:x,abi:u,functionName:"loan"}),o=s.PJ({address:i.data,abi:c,functionName:"approve",args:[r.data,a.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(e=d.data)||void 0===e?void 0:e.hash}),h=this._defineStateChangesCallback(l.isFetching,d.isLoading,l.status,this.rusdLoanAllowance);return this.rusdLoanAllowance!==h&&(this.rusdLoanAllowance=h,t(h)),this._writeContractOrShowErrorFunction(o.error,d.write,n)}minLoanColateralRatio(){let a=s.do({address:x,abi:u,functionName:"loan"}),t=s.do({address:a.data,abi:f,functionName:"minCollateralRatio"});if(void 0!==t.data&&null!==t.data){let e=new C.Z(b.O$.from(t.data),6);return parseFloat(e.toHumanString(2))}}totalLongs(a){let t=s.do({address:x,abi:u,functionName:"loan"}),e=s.do({address:t.data,abi:f,functionName:"totalLongs",args:[a],watch:!0});if(void 0!==e.data&&null!==e.data){let n=new C.Z(e.data,18);return n}}totalShorts(a){let t=s.do({address:x,abi:u,functionName:"loan"}),e=s.do({address:t.data,abi:f,functionName:"totalShorts",args:[a],watch:!0});if(void 0!==e.data&&null!==e.data){let n=new C.Z(e.data,18);return n}}userLoans(){var a,t,e,i;let[r,o]=n.useState([]),d=s.mA(),l=s.do({address:x,abi:u,functionName:"loan"}),c=s.xD({cacheKey:"userLoans",...s.Ui(a=>[{address:l.data,abi:f,functionName:"userLoans",args:[d.address,b.O$.from(a)]}],{start:0,perPage:20,direction:"increment"})});r||c.refetch();let h=s.Dm({contracts:null===(a=c.data)||void 0===a?void 0:a.pages[0].filter(a=>a).map(a=>({address:l.data,abi:f,functionName:"loans",args:[a]}))});r||h.refetch();let m=s.Dm({contracts:null===(t=c.data)||void 0===t?void 0:t.pages[0].filter(a=>a).map(a=>({address:l.data,abi:f,functionName:"collateralRatio",args:[a]}))});r||m.refetch();let w=s.Dm({contracts:null!==(i=null==h?void 0:null===(e=h.data)||void 0===e?void 0:e.filter(a=>a).map(a=>({address:a.syntAddress,abi:g,functionName:"symbol"})))&&void 0!==i?i:[]});return r||w.refetch(),(0,n.useEffect)(()=>{var a;o(null===(a=c.data)||void 0===a?void 0:a.pages[0].filter(a=>a).map(a=>{var t,e,n,i,r,o,d,s;let l=null===(t=c.data)||void 0===t?void 0:t.pages[0].indexOf(a),u=null!==(d=null===(e=h.data)||void 0===e?void 0:e[null!=l?l:0])&&void 0!==d?d:{},v=null!==(s=null===(n=m.data)||void 0===n?void 0:n[null!=l?l:0])&&void 0!==s?s:0;return{borrowId:null===(i=c.data)||void 0===i?void 0:i.pages[0][l],borrowedAt:new Date((null===(r=u.timestamp)||void 0===r?void 0:r.toNumber())*1e3),synthAddress:u.syntAddress,synthSymbol:null==w?void 0:null===(o=w.data)||void 0===o?void 0:o[l],borrowedSynthAmount:new C.Z(u.borrowed,18),collateral:new C.Z(u.collateral,18),collateralRation:Math.round(v/1e6),minCollateralRatio:Math.round(u.minCollateralRatio/1e6)}}))},[h.data,w.data]),r}withdrawLoanCallback(a,t,e){var n;let i=(0,k.Z)(),r=s.do({address:x,abi:u,functionName:"loan"}),o=s.PJ({address:r.data,abi:f,functionName:"withdraw",args:[a,t.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(n=d.data)||void 0===n?void 0:n.hash}),c=this._defineStateChangesCallback(l.isFetching,d.isLoading,l.status,this.withdrawLoanState);return this.withdrawLoanState!==c&&(this.withdrawLoanState=c,e(c)),this._writeContractOrShowErrorFunction(o.error,d.write,i)}repayLoanCallback(a,t,e){var n;let i=(0,k.Z)(),r=s.do({address:x,abi:u,functionName:"loan"}),o=s.PJ({address:r.data,abi:f,functionName:"repay",args:[a,t.amount]}),d=s.GG(o.config),l=s.BX({hash:null===(n=d.data)||void 0===n?void 0:n.hash}),c=this._defineStateChangesCallback(l.isFetching,d.isLoading,l.status,this.repayLoanState);return this.repayLoanState!==c&&(this.repayLoanState=c,e(c)),this._writeContractOrShowErrorFunction(o.error,d.write,i)}_defineStateChangesCallback(a,t,e,n){if("loading"===e&&n===N.Z.AwaitWalletConfirmation)return N.Z.Broadcasting;if("success"==e&&n===N.Z.Broadcasting)return N.Z.Success;switch([a,t,n].toString()){case[!1,!0,N.Z.Done].toString():case[!1,!0,N.Z.AwaitWalletConfirmation].toString():return N.Z.AwaitWalletConfirmation;case[!0,!1,N.Z.Success].toString():case[!1,!1,N.Z.Done].toString():return N.Z.Done;default:return n}}_writeContractOrShowErrorFunction(a,t,e){return()=>{a?(console.error(a),e.push((0,r.jsx)(D.oL,{message:a.reason}),{placement:"topStart"}),setTimeout(()=>{e.clear()},1e4)):null==t||t()}}constructor(...a){super(...a),this.wethApproveState=N.Z.Done,this.rawApproveState=N.Z.Done,this.unlockWethState=N.Z.Done,this.mintState=N.Z.Done,this.burnState=N.Z.Done,this.stakeRawState=N.Z.Done,this.swapState=N.Z.Done,this.borrowSynthState=N.Z.Done,this.rusdLoanAllowance=N.Z.Done,this.mintWethState=N.Z.Done,this.mintRawState=N.Z.Done,this.withdrawLoanState=N.Z.Done,this.depositLoanState=N.Z.Done,this.repayLoanState=N.Z.Done,this.showedTxs=[]}}let B={testnet:new i.Z,mainnet:new G},O=n.createContext(B.mainnet);var j=B}}]);