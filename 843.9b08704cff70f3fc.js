"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[843],{2843:($,g,i)=>{i.r(g),i.d(g,{DataComponent:()=>T});var p=i(99213),d=i(96850),m=i(10467),e=i(93953),h=i(88834),u=i(3902),y=i(60177),F=i(18498),s=i(47358),b=i(64109);const v=[{name:"components",type:"folder",children:[{name:"src",type:"folder",children:[{name:"cdk",type:"folder",children:[{name:"package.json",type:"file"},{name:"BUILD.bazel",type:"file"}]},{name:"material",type:"folder"}]}]},{name:"angular",type:"folder",children:[{name:"packages",type:"folder",children:[{name:".travis.yml",type:"file"},{name:"firebase.json",type:"file"}]},{name:"package.json",type:"file"}]},{name:"angularjs",type:"folder",children:[{name:"gulpfile.js",type:"file"},{name:"README.md",type:"file"}]}];let f=(()=>{class a{transform(t,o){if(0===t)return"0 Bytes";const l=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,l)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB","PB"][l]}static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275pipe=e.EJ8({name:"size",type:a,pure:!0,standalone:!0})}return a})();var C=i(27413);const E=a=>["view",a];function k(a,c){if(1&a&&(e.j41(0,"div",2)(1,"span",6),e.EFF(2,"ID: "),e.j41(3,"a",7),e.EFF(4),e.k0s()(),e.nrm(5,"br"),e.j41(6,"span"),e.EFF(7),e.nrm(8,"br"),e.EFF(9),e.nrm(10,"br"),e.EFF(11),e.nI1(12,"size"),e.nrm(13,"br"),e.EFF(14),e.nrm(15,"br"),e.EFF(16),e.nrm(17,"br"),e.EFF(18),e.nrm(19,"br"),e.k0s()()),2&a){const t=c.$implicit;e.R7$(3),e.Y8G("routerLink",e.eq3(10,E,t.id)),e.R7$(),e.JRh(t.id),e.R7$(3),e.SpI(" Format: ",t.dataFormat,""),e.R7$(2),e.SpI(" Schema: ",t.schema,""),e.R7$(2),e.SpI(" Size: ",e.bMT(12,8,t.dataSize),""),e.R7$(3),e.SpI(" Created: ",t.dateCreated,""),e.R7$(2),e.SpI(" Published: ",t.published,""),e.R7$(2),e.SpI(" Date Published: ",t.datePublished,"")}}function S(a,c){if(1&a&&(e.j41(0,"mat-tree-node",8),e.nrm(1,"button",9),e.j41(2,"mat-icon",10),e.EFF(3),e.k0s(),e.EFF(4),e.k0s()),2&a){const t=c.$implicit;e.R7$(2),e.BMQ("aria-label",t.type+"icon"),e.R7$(),e.SpI(" ","file"===t.type?"description":"folder"," "),e.R7$(),e.SpI(" ",t.name," ")}}function D(a,c){if(1&a&&(e.j41(0,"mat-tree-node",11)(1,"button",12)(2,"mat-icon",13),e.EFF(3),e.k0s()(),e.j41(4,"mat-icon",10),e.EFF(5),e.k0s(),e.EFF(6),e.k0s()),2&a){const t=c.$implicit,o=e.XpG();e.R7$(),e.BMQ("aria-label","Toggle "+t.name),e.R7$(2),e.SpI(" ",o.treeControl.isExpanded(t)?"expand_more":"chevron_right"," "),e.R7$(),e.BMQ("aria-label",t.type+"icon"),e.R7$(),e.SpI(" ","file"===t.type?"description":"folder"," "),e.R7$(),e.SpI(" ",t.name," ")}}let R=(()=>{class a{constructor(t){this.identityService=t,this.record=(0,e.vPA)(null),this.records=(0,e.vPA)([]),(0,e.QZP)(()=>{this.identityService.initialized()&&this.load()}),this.treeFlattener=new s.yj(this.transformer,this.getLevel,this.isExpandable,this.getChildren),this.treeControl=new b.XW(this.getLevel,this.isExpandable),this.dataSource=new s.zw(this.treeControl,this.treeFlattener),this.dataSource.data=v}transformer(t,o){return{name:t.name,type:t.type,level:o,expandable:!!t.children}}getLevel(t){return t.level}isExpandable(t){return t.expandable}hasChild(t,o){return o.expandable}getChildren(t){return t.children}load(){var t=this;return(0,m.A)(function*(){const{protocols:o}=yield t.identityService.web5.dwn.protocols.query({message:{filter:{protocol:"https://social-media.xyz"}}});console.log(o);var{records:r}=yield t.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://social-media.xyz"}}});console.log("All records:"),console.log(r),r&&t.records.set(r);var{records:r}=yield t.identityService.web5.dwn.records.query({from:t.identityService.did,message:{filter:{schema:"https://schema.org/Playlist",dataFormat:"application/json"}}});console.log(r);const n=yield t.identityService.web5.dwn.records.query({message:{filter:{parentId:"bafyreianzpmhbgcgam5mys722vnsiuwn7y4ek6kjeyjptttquasw4hge2m"}}});console.log(n.records);var{records:r}=yield t.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://playlist.org/protocol",protocolPath:"playlist/video"}}});console.log(r)})()}registerChatProtocol(){var t=this;return(0,m.A)(function*(){const{protocol:n,status:r}=yield t.identityService.web5.dwn.protocols.configure({message:{definition:{protocol:"https://social-media.xyz",published:!0,types:{post:{schema:"https://social-media.xyz/schemas/postSchema",dataFormats:["text/plain"]},reply:{schema:"https://social-media.xyz/schemas/replySchema",dataFormats:["text/plain"]},image:{dataFormats:["image/jpeg"]},caption:{schema:"https://social-media.xyz/schemas/captionSchema",dataFormats:["text/plain"]}},structure:{post:{$actions:[{who:"anyone",can:["create","read"]}],reply:{$actions:[{who:"recipient",of:"post",can:["create"]},{who:"author",of:"post",can:["create"]}]}},image:{$actions:[{who:"anyone",can:["create","read"]}],caption:{$actions:[{who:"anyone",can:["read"]},{who:"author",of:"image",can:["create"]}]},reply:{$actions:[{who:"author",of:"image",can:["read"]},{who:"recipient",of:"image",can:["create"]}]}}}}}});if(202===r.code&&console.log("Protocol accepted"),console.log(n),console.log(r),n){const{status:l}=yield n.send("did:dht:83azq4wzkghcacu4mt57ne8d5gumnytxxjkpmn5h1shwkafzi5so");202===l.code?console.log("Protocol sent to remote DWNs"):console.error(`Failed to send protocol to remote DWNs. Code: ${l.detail}, Detail: ${l.detail}`)}})()}createChatRecord(){var t=this;return(0,m.A)(function*(){const{record:o,status:n}=yield t.identityService.web5.dwn.records.create({data:"Hey this is my first post!",message:{recipient:"did:dht:83azq4wzkghcacu4mt57ne8d5gumnytxxjkpmn5h1shwkafzi5so",schema:"https://social-media.xyz/schemas/postSchema",dataFormat:"text/plain",protocol:"https://social-media.xyz",protocolPath:"post"}});202===n.code?console.log("Record created successfully!"):console.error(`Failed to create record. Code: ${n.detail}, Detail: ${n.detail}`),console.log(o)})()}createRecord(t){var o=this;return(0,m.A)(function*(){var{record:n}=yield o.identityService.web5.dwn.records.create({data:{content:"Hello Web5 child!",description:"Keep Building child!",tags:["web5","ariton","did"]},message:{dataFormat:"application/json",published:t,protocolPath:"playlist/video",parentContextId:"bafyreicvvzlgrovmwhoi6snnsiuvgs5eucy4f766vkfgb6sfcqveth5nhy"}});console.log(n)})()}updateRecord(){return(0,m.A)(function*(){})()}static#e=this.\u0275fac=function(o){return new(o||a)(e.rXU(C.K))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-data-management"]],standalone:!0,features:[e.Jv_([f]),e.aNF],decls:21,vars:3,consts:[["mat-flat-button","",3,"click"],[1,"example-list-wrapping"],[1,"record-line"],[3,"dataSource","treeControl"],["matTreeNodeToggle","","matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matListItemTitle",""],[3,"routerLink"],["matTreeNodeToggle","","matTreeNodePadding",""],["mat-icon-button","","disabled",""],[1,"type-icon"],["matTreeNodePadding",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(o,n){1&o&&(e.nrm(0,"br"),e.j41(1,"button",0),e.bIt("click",function(){return n.load()}),e.EFF(2,"Load Data"),e.k0s(),e.EFF(3,"\n\xa0\n"),e.j41(4,"button",0),e.bIt("click",function(){return n.createRecord(!1)}),e.EFF(5,"Create Private Record"),e.k0s(),e.EFF(6,"\n\xa0\n"),e.j41(7,"button",0),e.bIt("click",function(){return n.createRecord(!0)}),e.EFF(8,"Create Public Record"),e.k0s(),e.EFF(9,"\n\xa0\n"),e.j41(10,"button",0),e.bIt("click",function(){return n.registerChatProtocol()}),e.EFF(11,"Register Chat Protocol"),e.k0s(),e.EFF(12,"\n\xa0\n"),e.j41(13,"button",0),e.bIt("click",function(){return n.createChatRecord()}),e.EFF(14,"Create Chat Record"),e.k0s(),e.j41(15,"mat-list",1),e.Z7z(16,k,20,12,"div",2,e.fX1),e.k0s(),e.j41(18,"mat-tree",3),e.DNE(19,S,5,3,"mat-tree-node",4)(20,D,7,5,"mat-tree-node",5),e.k0s()),2&o&&(e.R7$(16),e.Dyx(n.records()),e.R7$(2),e.Y8G("dataSource",n.dataSource)("treeControl",n.treeControl),e.R7$(2),e.Y8G("matTreeNodeDefWhen",n.hasChild))},dependencies:[F.Wk,y.MD,d.RI,p.m_,p.An,h.Hl,h.$z,h.iY,u.Fg,u.jt,u.yE,s.jH,s.yI,s.yF,s.pO,s.lQ,s.d6,f],styles:[".record-line[_ngcontent-%COMP%]{border-bottom:1px solid #e0e0e0}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}.type-icon[_ngcontent-%COMP%]{color:#757575;margin-right:5px}"]})}return a})();function j(a,c){1&a&&(e.j41(0,"mat-icon",1),e.EFF(1,"source"),e.k0s(),e.EFF(2," Your Data "))}function w(a,c){1&a&&(e.j41(0,"mat-icon",1),e.EFF(1,"folder"),e.k0s(),e.EFF(2," Public Data "))}let T=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-data"]],standalone:!0,features:[e.aNF],decls:8,vars:0,consts:[["mat-tab-label",""],[1,"example-tab-icon"]],template:function(o,n){1&o&&(e.j41(0,"mat-tab-group")(1,"mat-tab"),e.DNE(2,j,3,0,"ng-template",0),e.nrm(3,"app-data-management"),e.k0s(),e.j41(4,"mat-tab"),e.DNE(5,w,3,0,"ng-template",0),e.j41(6,"p"),e.EFF(7,'Not implemented yet. See "Your Data" tab.'),e.k0s()()())},dependencies:[d.RI,d.ES,d.mq,d.T8,p.m_,p.An,R],styles:[".example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]})}return a})()}}]);