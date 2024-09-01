"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{69226:(L,M,r)=>{r.d(M,{x:()=>h});var C=r(10467),t=r(93953),O=r(31439);let h=(()=>{class u{constructor(){this.appService=(0,t.WQX)(O.d),this.loaded=(0,t.vPA)(!1),this.bsn={tokens:[],sources:[],accounts:[],tags:[],accounts_filtered:[]},(0,t.QZP)(()=>{this.appService.initialized()&&this.load()})}shorten(o){return o.substring(0,5)+"..."+o.substring(o.length-5)}filter(o){this.bsn.accounts_filtered=o&&0!=o.length?this.bsn.accounts.filter(p=>p.tags.some(_=>o.includes(_.id))):this.bsn.accounts}load(){var o=this;return(0,C.A)(function*(){var p=yield fetch("https://bsn.mtla.me/json");if(p.ok){var _=yield p.json();o.updated=_.createDate;let E=_.knownTokens.map(s=>{const[l,d]=s.split("-");return{id:d,name:l,short:o.shorten(d)}}),c=_.usedSources.map(s=>{const[l,d]=s.split("-");return{id:d,name:l,short:o.shorten(d)}}),P=Object.entries(_.accounts).map(([s,l])=>({id:s,short:o.shorten(s),balances:l.balances,profile:l.profile,tags:l.tags?Object.entries(l.tags).map(([d,g])=>({id:d,value:g})):[]}));o.bsn.tokens=E,o.bsn.sources=c,o.bsn.accounts=P;const v=new Set;P.forEach(s=>{s.tags.forEach(l=>{v.add(l.id)})}),o.bsn.tags=Array.from(v).sort(),o.bsn.accounts_filtered=o.bsn.accounts,o.loaded.set(!0)}})()}static#t=this.\u0275fac=function(p){return new(p||u)};static#e=this.\u0275prov=t.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},60385:(L,M,r)=>{r.d(M,{w:()=>I});var C=r(10467),t=r(93953),O=r(34635),h=r(25596),u=r(39434),R=r(345),o=r(78013),p=r(33347),_=r(14823),E=r(30046);const c=e=>["/profile",e];function P(e,m){if(1&e&&(t.nrm(0,"img",0),t.nI1(1,"safeResourceUrl")),2&e){let n;const i=t.XpG();t.Y8G("routerLink",t.eq3(4,c,null==(n=i.data().profile)?null:n.did))("src",t.bMT(1,2,i.data().avatar),t.B4B)}}function v(e,m){if(1&e&&t.nrm(0,"img",1),2&e){let n;const i=t.XpG();t.Y8G("routerLink",t.eq3(2,c,null==(n=i.data().profile)?null:n.did))("src","/avatar-placeholder.png",t.B4B)}}function s(e,m){if(1&e&&t.EFF(0),2&e){let n;const i=t.XpG(2);t.SpI(" (",null==(n=i.data().profile)?null:n.title,") ")}}function l(e,m){if(1&e&&(t.j41(0,"a",3),t.EFF(1),t.DNE(2,s,1,1),t.k0s()),2&e){let n,i,a;const f=t.XpG();t.Y8G("routerLink",t.eq3(3,c,null==(n=f.data().profile)?null:n.did)),t.R7$(),t.SpI("",null==(i=f.data().profile)?null:i.name," "),t.R7$(),t.vxM(null!=(a=f.data().profile)&&a.title?2:-1)}}function d(e,m){if(1&e&&t.EFF(0),2&e){let n;const i=t.XpG(2);t.SpI(" (",null==(n=i.data().profile)?null:n.title,") ")}}function g(e,m){if(1&e&&(t.j41(0,"em")(1,"a",3),t.EFF(2,"No name set "),t.DNE(3,d,1,1),t.k0s()()),2&e){let n,i;const a=t.XpG();t.R7$(),t.Y8G("routerLink",t.eq3(2,c,null==(n=a.data().profile)?null:n.did)),t.R7$(2),t.vxM(null!=(i=a.data().profile)&&i.title?3:-1)}}let I=(()=>{class e{constructor(){this.identity=(0,t.WQX)(O.K),this.profile=(0,t.WQX)(u.p),this.sanitizer=(0,t.WQX)(R.up),this.did=t.hFB.required(),this.data=(0,t.vPA)({})}ngAfterViewInit(){var n=this;return(0,C.A)(function*(){if(n.did()){const i=yield n.profile.loadProfile(n.did());console.log(i),n.data.set(i)}})()}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-profile-header"]],inputs:{did:[1,"did"]},standalone:!0,features:[t.aNF],decls:10,vars:9,consts:[["mat-card-avatar","","onerror","this.src='/avatar-placeholder.png';this.onerror='';",1,"profile-thumbnail",3,"routerLink","src"],["mat-card-avatar","",1,"profile-thumbnail",3,"routerLink","src"],[1,"profile-header-title"],[3,"routerLink"],[1,"profile-header-subtitle"],[3,"routerLink","matTooltip"]],template:function(i,a){if(1&i&&(t.DNE(0,P,2,6,"img",0)(1,v,1,4,"img",1),t.j41(2,"div")(3,"div",2),t.DNE(4,l,3,5,"a",3)(5,g,4,4,"em"),t.k0s(),t.j41(6,"div",4)(7,"a",5),t.EFF(8),t.nI1(9,"did"),t.k0s()()()),2&i){let f,D,T,b;t.vxM(a.data().avatar?0:1),t.R7$(4),t.vxM(null!=(f=a.data().profile)&&f.name?4:5),t.R7$(3),t.Y8G("routerLink",t.eq3(7,c,null==(D=a.data().profile)?null:D.did))("matTooltip",null==(T=a.data().profile)?null:T.did),t.R7$(),t.JRh(t.bMT(9,5,null==(b=a.data().profile)?null:b.did))}},dependencies:[E.iI,E.Wk,_.uc,_.oV,h.Hu,h.QG,o.d,p.k],styles:[".profile-thumbnail[_ngcontent-%COMP%]{cursor:pointer;border-radius:50%;margin-right:1em}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}[_nghost-%COMP%]{display:flex}.profile-header-title[_ngcontent-%COMP%]{font-size:1.4em}.profile-header-subtitle[_ngcontent-%COMP%]{font-size:1em}"]})}return e})()}}]);