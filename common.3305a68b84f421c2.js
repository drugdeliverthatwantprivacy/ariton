"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{85297:(E,p,n)=>{n.d(p,{u:()=>c});var a=n(10467),o=n(54438),d=n(96084),l=n(32794);let c=(()=>{class h{constructor(){var s=this;this.app=(0,o.WQX)(d.d),this.configuration={protocol:l.Q.protocol,protocolPath:"data",schema:l.Q.types.data.schema,dataFormat:l.Q.types.data.dataFormats[0]},(0,o.QZP)((0,a.A)(function*(){s.app.initialized()&&(yield s.initialize())}))}initialize(){return(0,a.A)(function*(){})()}save(s,e){var _=this;return(0,a.A)(function*(){return _.app.storage.save(_.configuration,s,e)})()}load(s){var e=this;return(0,a.A)(function*(){return e.app.storage.load(e.configuration,s)})()}get(s){var e=this;return(0,a.A)(function*(){return e.app.storage.get(s)})()}update(s,e,_){var f=this;return(0,a.A)(function*(){return f.app.storage.update(s,e,_)})()}delete(s){var e=this;return(0,a.A)(function*(){return e.app.storage.delete(s)})()}static{this.\u0275fac=function(e){return new(e||h)}}static{this.\u0275prov=o.jDH({token:h,factory:h.\u0275fac,providedIn:"root"})}}return h})()},69226:(E,p,n)=>{n.d(p,{x:()=>l});var a=n(10467),o=n(54438),d=n(96084);let l=(()=>{class c{constructor(){this.appService=(0,o.WQX)(d.d),this.loaded=(0,o.vPA)(!1),this.bsn={tokens:[],sources:[],accounts:[],tags:[],accounts_filtered:[]},(0,o.QZP)(()=>{this.appService.initialized()&&this.load()})}shorten(t){return t.substring(0,5)+"..."+t.substring(t.length-5)}filter(t){this.bsn.accounts_filtered=t&&0!=t.length?this.bsn.accounts.filter(s=>s.tags.some(e=>t.includes(e.id))):this.bsn.accounts}load(){var t=this;return(0,a.A)(function*(){var s=yield fetch("https://bsn.mtla.me/json");if(s.ok){var e=yield s.json();t.updated=e.createDate;let _=e.knownTokens.map(i=>{const[r,u]=i.split("-");return{id:u,name:r,short:t.shorten(u)}}),f=e.usedSources.map(i=>{const[r,u]=i.split("-");return{id:u,name:r,short:t.shorten(u)}}),v=Object.entries(e.accounts).map(([i,r])=>({id:i,short:t.shorten(i),balances:r.balances,profile:r.profile,tags:r.tags?Object.entries(r.tags).map(([u,g])=>({id:u,value:g})):[]}));t.bsn.tokens=_,t.bsn.sources=f,t.bsn.accounts=v;const m=new Set;v.forEach(i=>{i.tags.forEach(r=>{m.add(r.id)})}),t.bsn.tags=Array.from(m).sort(),t.bsn.accounts_filtered=t.bsn.accounts,t.loaded.set(!0)}})()}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=o.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})()}}]);