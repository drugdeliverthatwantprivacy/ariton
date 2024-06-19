"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[301],{55301:(j,p,o)=>{o.r(p),o.d(p,{DataComponent:()=>E});var c=o(21801),s=o(96850),l=o(10467),t=o(93953),u=o(88834),d=o(3902),F=o(60177),g=o(18498),b=o(58653);const y=a=>["view",a];function f(a,m){if(1&a&&(t.j41(0,"div",2)(1,"span",3),t.EFF(2,"ID: "),t.j41(3,"a",4),t.EFF(4),t.k0s()(),t.j41(5,"span"),t.EFF(6),t.nrm(7,"br"),t.EFF(8),t.nrm(9,"br"),t.EFF(10),t.nrm(11,"br"),t.EFF(12),t.nrm(13,"br"),t.EFF(14),t.nrm(15,"br"),t.EFF(16),t.nrm(17,"br"),t.k0s()()),2&a){const e=m.$implicit;t.R7$(3),t.Y8G("routerLink",t.eq3(8,y,e.id)),t.R7$(),t.JRh(e.id),t.R7$(2),t.SpI("Author: ",e.author,""),t.R7$(2),t.SpI(" Format: ",e.dataFormat,""),t.R7$(2),t.SpI(" Size: ",e.dataSize,""),t.R7$(2),t.SpI(" Created: ",e.dateCreated,""),t.R7$(2),t.SpI(" Published: ",e.published,""),t.R7$(2),t.SpI(" Date Published: ",e.datePublished,"")}}let v=(()=>{class a{constructor(e){this.identityService=e,this.record=(0,t.vPA)(null),this.records=(0,t.vPA)([])}load(){var e=this;return(0,l.A)(function*(){const{protocols:n}=yield e.identityService.web5.dwn.protocols.query({message:{filter:{protocol:"https://music.org/protocol"}}});console.log(n);var{records:i}=yield e.identityService.web5.dwn.records.query({message:{filter:{dataFormat:"application/json"}}});console.log("All records:"),console.log(i),i&&e.records.set(i);var{records:i}=yield e.identityService.web5.dwn.records.query({from:e.identityService.did,message:{filter:{schema:"https://schema.org/Playlist",dataFormat:"application/json"}}});console.log(i);const r=yield e.identityService.web5.dwn.records.query({message:{filter:{parentId:"bafyreianzpmhbgcgam5mys722vnsiuwn7y4ek6kjeyjptttquasw4hge2m"}}});console.log(r.records);var{records:i}=yield e.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://playlist.org/protocol",protocolPath:"playlist/video"}}});console.log(i)})()}createRecord(e){var n=this;return(0,l.A)(function*(){var{record:r}=yield n.identityService.web5.dwn.records.create({data:{content:"Hello Web5",description:"Keep Building!",tags:["web5","ariton","did"]},message:{dataFormat:"application/json",published:e}});console.log(r);var{record:r}=yield n.identityService.web5.dwn.records.create({data:"this record will be written to the local DWN",message:{dataFormat:"text/plain"}});console.log(r)})()}updateRecord(){return(0,l.A)(function*(){})()}static#t=this.\u0275fac=function(n){return new(n||a)(t.rXU(b.K))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data-management"]],standalone:!0,features:[t.aNF],decls:12,vars:0,consts:[["mat-flat-button","",3,"click"],[1,"example-list-wrapping"],[1,"record-line"],["matListItemTitle",""],[3,"routerLink"]],template:function(n,r){1&n&&(t.nrm(0,"br"),t.j41(1,"button",0),t.bIt("click",function(){return r.load()}),t.EFF(2,"Load Data"),t.k0s(),t.EFF(3,"\n\xa0\n"),t.j41(4,"button",0),t.bIt("click",function(){return r.createRecord(!1)}),t.EFF(5,"Create Private Record"),t.k0s(),t.EFF(6,"\n\xa0\n"),t.j41(7,"button",0),t.bIt("click",function(){return r.createRecord(!0)}),t.EFF(8,"Create Public Record"),t.k0s(),t.j41(9,"mat-list",1),t.Z7z(10,f,18,10,"div",2,t.fX1),t.k0s()),2&n&&(t.R7$(10),t.Dyx(r.records()))},dependencies:[g.Wk,F.MD,s.RI,c.m_,u.Hl,u.$z,d.Fg,d.jt,d.yE],styles:[".record-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #e0e0e0}"]})}return a})();function h(a,m){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"source"),t.k0s(),t.EFF(2," Your Data "))}function D(a,m){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"folder"),t.k0s(),t.EFF(2," Public Data "))}let E=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data"]],standalone:!0,features:[t.aNF],decls:8,vars:0,consts:[["mat-tab-label",""],[1,"example-tab-icon"]],template:function(n,r){1&n&&(t.j41(0,"mat-tab-group")(1,"mat-tab"),t.DNE(2,h,3,0,"ng-template",0),t.nrm(3,"app-data-management"),t.k0s(),t.j41(4,"mat-tab"),t.DNE(5,D,3,0,"ng-template",0),t.j41(6,"p"),t.EFF(7,'Not implemented yet. See "Your Data" tab.'),t.k0s()()())},dependencies:[s.RI,s.ES,s.mq,s.T8,c.m_,c.An,v],styles:[".example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]})}return a})()}}]);