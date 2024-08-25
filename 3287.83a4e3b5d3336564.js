"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{63287:(at,D,i)=>{i.r(D),i.d(D,{DataComponent:()=>nt});var t=i(93953),f=i(99213),y=i(96850),l=i(10467),h=i(88834),C=i(3902),j=i(60177),A=i(30046),u=i(47358),T=i(72279);const M=[{name:"components",type:"folder",children:[{name:"src",type:"folder",children:[{name:"cdk",type:"folder",children:[{name:"package.json",type:"file"},{name:"BUILD.bazel",type:"file"}]},{name:"material",type:"folder"}]}]},{name:"angular",type:"folder",children:[{name:"packages",type:"folder",children:[{name:".travis.yml",type:"file"},{name:"firebase.json",type:"file"}]},{name:"package.json",type:"file"}]},{name:"angularjs",type:"folder",children:[{name:"gulpfile.js",type:"file"},{name:"README.md",type:"file"}]}];var R=i(28741),g=i(53719),S=i(99631),E=i(22312),P=i(95416),k=i(34635);const x=a=>["view",a];function w(a,c){if(1&a&&(t.j41(0,"div",4)(1,"span",8),t.EFF(2,"ID: "),t.j41(3,"a",9),t.EFF(4),t.k0s()(),t.nrm(5,"br"),t.j41(6,"span"),t.EFF(7),t.nrm(8,"br"),t.EFF(9),t.nrm(10,"br"),t.EFF(11),t.nI1(12,"size"),t.nrm(13,"br"),t.EFF(14),t.nrm(15,"br"),t.EFF(16),t.nrm(17,"br"),t.EFF(18),t.nrm(19,"br"),t.k0s()()),2&a){const e=c.$implicit;t.R7$(3),t.Y8G("routerLink",t.eq3(10,x,e.id)),t.R7$(),t.JRh(e.id),t.R7$(3),t.SpI(" Format: ",e.dataFormat,""),t.R7$(2),t.SpI(" Schema: ",e.schema,""),t.R7$(2),t.SpI(" Size: ",t.bMT(12,8,e.dataSize),""),t.R7$(3),t.SpI(" Created: ",e.dateCreated,""),t.R7$(2),t.SpI(" Published: ",e.published,""),t.R7$(2),t.SpI(" Date Published: ",e.datePublished,"")}}function N(a,c){if(1&a&&(t.j41(0,"mat-tree-node",10),t.nrm(1,"button",11),t.j41(2,"mat-icon",12),t.EFF(3),t.k0s(),t.EFF(4),t.k0s()),2&a){const e=c.$implicit;t.R7$(2),t.BMQ("aria-label",e.type+"icon"),t.R7$(),t.SpI(" ","file"===e.type?"description":"folder"," "),t.R7$(),t.SpI(" ",e.name," ")}}function z(a,c){if(1&a&&(t.j41(0,"mat-tree-node",13)(1,"button",14)(2,"mat-icon",15),t.EFF(3),t.k0s()(),t.j41(4,"mat-icon",12),t.EFF(5),t.k0s(),t.EFF(6),t.k0s()),2&a){const e=c.$implicit,o=t.XpG();t.R7$(),t.BMQ("aria-label","Toggle "+e.name),t.R7$(2),t.SpI(" ",o.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),t.R7$(),t.BMQ("aria-label",e.type+"icon"),t.R7$(),t.SpI(" ","file"===e.type?"description":"folder"," "),t.R7$(),t.SpI(" ",e.name," ")}}let Q=(()=>{class a{onInput(e){this.didInput.set(e.target.value)}createRoleAssignment(){var e=this;return(0,l.A)(function*(){const{status:o,record:n}=yield e.identityService.web5.dwn.records.create({data:"test",message:{recipient:e.didInput(),protocol:E.Aq.uri,protocolPath:"friend",schema:"https://schema.ariton.app/community/schema/friend",dataFormat:"text/plain"}});console.log("Assingment made",o),console.log("Assingment record",n)})()}createDataRequiringRoleAssignment(){var e=this;return(0,l.A)(function*(){const{status:o,record:n}=yield e.identityService.web5.dwn.records.create({data:"test",message:{recipient:e.didInput(),protocol:E.Aq.uri,protocolPath:"album",protocolRole:"friend",schema:"https://schema.ariton.app/community/schema/album",dataFormat:"text/plain"}});if(console.log("Album create",o),n){const{status:r}=yield n.send(e.didInput());console.log("Status from external write:",r),401==r.code&&e.snackBar.open(r.detail,"Close",{duration:3e3})}})()}listAlbums(){var e=this;return(0,l.A)(function*(){var{records:o}=yield e.identityService.web5.dwn.records.query({message:{filter:{protocol:E.Aq.uri}}});console.log("All records:"),console.log(o),e.albums.set(JSON.stringify(o))})()}constructor(e){this.identityService=e,this.didInput=(0,t.vPA)(""),this.snackBar=(0,t.WQX)(P.UG),this.albums=(0,t.vPA)(""),this.record=(0,t.vPA)(null),this.records=(0,t.vPA)([]),(0,t.QZP)(()=>{this.identityService.initialized()&&this.load()}),this.treeFlattener=new u.yj(this.transformer,this.getLevel,this.isExpandable,this.getChildren),this.treeControl=new T.XW(this.getLevel,this.isExpandable),this.dataSource=new u.zw(this.treeControl,this.treeFlattener),this.dataSource.data=M}transformer(e,o){return{name:e.name,type:e.type,level:o,expandable:!!e.children}}getLevel(e){return e.level}isExpandable(e){return e.expandable}hasChild(e,o){return o.expandable}getChildren(e){return e.children}load(){var e=this;return(0,l.A)(function*(){const{protocols:o}=yield e.identityService.web5.dwn.protocols.query({message:{filter:{protocol:"https://social-media.xyz"}}});console.log(o);var{records:r}=yield e.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://social-media.xyz"}}});console.log("All records:"),console.log(r),r&&e.records.set(r);var{records:r}=yield e.identityService.web5.dwn.records.query({from:e.identityService.did,message:{filter:{schema:"https://schema.org/Playlist",dataFormat:"application/json"}}});console.log(r);const n=yield e.identityService.web5.dwn.records.query({message:{filter:{parentId:"bafyreianzpmhbgcgam5mys722vnsiuwn7y4ek6kjeyjptttquasw4hge2m"}}});console.log(n.records);var{records:r}=yield e.identityService.web5.dwn.records.query({message:{filter:{protocol:"https://playlist.org/protocol",protocolPath:"playlist/video"}}});console.log(r)})()}registerChatProtocol(){var e=this;return(0,l.A)(function*(){const{protocol:n,status:r}=yield e.identityService.web5.dwn.protocols.configure({message:{definition:{protocol:"https://social-media.xyz",published:!0,types:{post:{schema:"https://social-media.xyz/schemas/postSchema",dataFormats:["text/plain"]},reply:{schema:"https://social-media.xyz/schemas/replySchema",dataFormats:["text/plain"]},image:{dataFormats:["image/jpeg"]},caption:{schema:"https://social-media.xyz/schemas/captionSchema",dataFormats:["text/plain"]}},structure:{post:{$actions:[{who:"anyone",can:["create","read"]}],reply:{$actions:[{who:"recipient",of:"post",can:["create"]},{who:"author",of:"post",can:["create"]}]}},image:{$actions:[{who:"anyone",can:["create","read"]}],caption:{$actions:[{who:"anyone",can:["read"]},{who:"author",of:"image",can:["create"]}]},reply:{$actions:[{who:"author",of:"image",can:["read"]},{who:"recipient",of:"image",can:["create"]}]}}}}}});if(202===r.code&&console.log("Protocol accepted"),console.log(n),console.log(r),n){const{status:s}=yield n.send("did:dht:83azq4wzkghcacu4mt57ne8d5gumnytxxjkpmn5h1shwkafzi5so");202===s.code?console.log("Protocol sent to remote DWNs"):console.error(`Failed to send protocol to remote DWNs. Code: ${s.detail}, Detail: ${s.detail}`)}})()}createChatRecord(){var e=this;return(0,l.A)(function*(){const{record:o,status:n}=yield e.identityService.web5.dwn.records.create({data:"Hey this is my first post!",message:{recipient:"did:dht:83azq4wzkghcacu4mt57ne8d5gumnytxxjkpmn5h1shwkafzi5so",schema:"https://social-media.xyz/schemas/postSchema",dataFormat:"text/plain",protocol:"https://social-media.xyz",protocolPath:"post"}});202===n.code?console.log("Record created successfully!"):console.error(`Failed to create record. Code: ${n.detail}, Detail: ${n.detail}`),console.log(o)})()}createRegistry(){return(0,l.A)(function*(){})()}readRegistries(){return(0,l.A)(function*(){})()}createRecord(e){var o=this;return(0,l.A)(function*(){var{record:n}=yield o.identityService.web5.dwn.records.create({data:{content:"Hello Web5 child!",description:"Keep Building child!",tags:["web5","ariton","did"]},message:{dataFormat:"application/json",published:e,protocolPath:"playlist/video",parentContextId:"bafyreicvvzlgrovmwhoi6snnsiuvgs5eucy4f766vkfgb6sfcqveth5nhy"}});console.log(n)})()}updateRecord(){return(0,l.A)(function*(){})()}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(k.K))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data-management"]],standalone:!0,features:[t.Jv_([R.M]),t.aNF],decls:37,vars:4,consts:[["subscriptSizing","dynamic"],["matInput","",3,"input"],["mat-flat-button","",3,"click"],[1,"example-list-wrapping"],[1,"record-line"],[3,"dataSource","treeControl"],["matTreeNodeToggle","","matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matListItemTitle",""],[3,"routerLink"],["matTreeNodeToggle","","matTreeNodePadding",""],["mat-icon-button","","disabled",""],[1,"type-icon"],["matTreeNodePadding",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(o,n){1&o&&(t.nrm(0,"br"),t.j41(1,"p")(2,"mat-form-field",0)(3,"mat-label"),t.EFF(4,"Target DID"),t.k0s(),t.j41(5,"input",1),t.bIt("input",function(s){return n.onInput(s)}),t.k0s()(),t.nrm(6,"br"),t.j41(7,"button",2),t.bIt("click",function(){return n.createRoleAssignment()}),t.EFF(8,"Create Role Assignment"),t.k0s(),t.nrm(9,"br"),t.j41(10,"button",2),t.bIt("click",function(){return n.createDataRequiringRoleAssignment()}),t.EFF(11,"Create Data Requiring Role Assignment"),t.k0s(),t.nrm(12,"br"),t.j41(13,"button",2),t.bIt("click",function(){return n.listAlbums()}),t.EFF(14,"List Albums"),t.k0s(),t.EFF(15),t.k0s(),t.nrm(16,"br"),t.j41(17,"button",2),t.bIt("click",function(){return n.load()}),t.EFF(18,"Load Data"),t.k0s(),t.EFF(19,"\n\xa0\n"),t.j41(20,"button",2),t.bIt("click",function(){return n.createRecord(!1)}),t.EFF(21,"Create Private Record"),t.k0s(),t.EFF(22,"\n\xa0\n"),t.j41(23,"button",2),t.bIt("click",function(){return n.createRecord(!0)}),t.EFF(24,"Create Public Record"),t.k0s(),t.EFF(25,"\n\xa0\n"),t.j41(26,"button",2),t.bIt("click",function(){return n.registerChatProtocol()}),t.EFF(27,"Register Chat Protocol"),t.k0s(),t.EFF(28,"\n\xa0\n"),t.j41(29,"button",2),t.bIt("click",function(){return n.createChatRecord()}),t.EFF(30,"Create Chat Record"),t.k0s(),t.j41(31,"mat-list",3),t.Z7z(32,w,20,12,"div",4,t.fX1),t.k0s(),t.j41(34,"mat-tree",5),t.DNE(35,N,5,3,"mat-tree-node",6)(36,z,7,5,"mat-tree-node",7),t.k0s()),2&o&&(t.R7$(15),t.SpI(" ",n.albums(),"\n"),t.R7$(17),t.Dyx(n.records()),t.R7$(2),t.Y8G("dataSource",n.dataSource)("treeControl",n.treeControl),t.R7$(2),t.Y8G("matTreeNodeDefWhen",n.hasChild))},dependencies:[g.RG,g.rl,g.nJ,S.fS,S.fg,A.Wk,j.MD,y.RI,f.m_,f.An,h.Hl,h.$z,h.iY,C.Fg,C.jt,C.yE,u.jH,u.yI,u.yF,u.pO,u.lQ,u.d6,R.M],styles:[".record-line[_ngcontent-%COMP%]{border-bottom:1px solid #e0e0e0}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}.type-icon[_ngcontent-%COMP%]{color:#757575;margin-right:5px}"]})}return a})();var I=i(4053),$=i(45189),O=i(49245),L=i(62060),_=i(67136),B=i(1639),W=i(69371),p=i(9454),F=i(25596);function G(a,c){if(1&a&&(t.j41(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),t.EFF(3),t.k0s(),t.j41(4,"mat-panel-description"),t.EFF(5),t.j41(6,"mat-icon"),t.EFF(7,"format_list_bulleted"),t.k0s()()(),t.j41(8,"h3"),t.EFF(9,"Types"),t.k0s(),t.nrm(10,"div",4),t.j41(11,"h3"),t.EFF(12,"Structure"),t.k0s(),t.nrm(13,"div",4),t.j41(14,"mat-action-row")(15,"button",5),t.EFF(16,"Previous"),t.k0s(),t.j41(17,"button",5),t.EFF(18,"End"),t.k0s()()()),2&a){const e=c.$implicit,o=t.XpG();t.R7$(3),t.SpI(" ",e.definition.protocol," "),t.R7$(2),t.SpI(" Published: ",e.definition.published," "),t.R7$(5),t.Y8G("innerHTML",o.getFormattedTypes(e.definition.types),t.npT),t.R7$(3),t.Y8G("innerHTML",o.getFormattedStructure(e.definition.structure),t.npT)}}let X=(()=>{class a{constructor(){this.accordion=t.ebz.required(p.BS),this.identityService=(0,t.WQX)(k.K),this.protocols=(0,t.vPA)([]),(0,t.QZP)(()=>{this.identityService.initialized()&&this.load()})}ngOnInit(){return(0,l.A)(function*(){})()}load(){var e=this;return(0,l.A)(function*(){const{protocols:o}=yield e.identityService.web5.dwn.protocols.query({message:{}});console.log(o),e.protocols.set(o)})()}getFormattedTypes(e){let o="";for(const n in e)e.hasOwnProperty(n)&&(o+=`<div class="type">\n                            <strong>${n}</strong>`,e[n].schema&&(o+=`<div>Schema: <a href="${e[n].schema}">${e[n].schema}</a></div>`),e[n].dataFormats&&(o+=`<div>Data Formats: ${e[n].dataFormats.join(", ")}</div>`),o+="</div>");return o}getFormattedStructure(e){let o="";const n=s=>s.map(d=>`<div class="action">\n                        <strong>Can:</strong> ${d.can.join(", ")}<br>\n                        <strong>Who:</strong> ${d.who}<br>\n                        ${d.of?`<strong>Of:</strong> ${d.of}<br>`:""}\n                    </div>`).join(""),r=(s,d=0)=>{let v="";for(const b in s)s.hasOwnProperty(b)&&(v+=`<div class="structure" style="margin-left: ${20*d}px;">\n                                <strong>${b}</strong>`,v+="$actions"===b?n(s[b]):r(s[b],d+1),v+="</div>");return v};return o=r(e),o}installProfileProtocol(){var e=this;return(0,l.A)(function*(){const{protocol:o,status:n}=yield e.identityService.web5.dwn.protocols.configure({message:{definition:I.Q}});console.log("Install status:",n),console.log("Protocol:",o)})()}installSocialProtocol(){var e=this;return(0,l.A)(function*(){const{protocol:o,status:n}=yield e.identityService.web5.dwn.protocols.configure({message:{definition:$.Q}});console.log("Install status:",n),console.log("Protocol:",o)})()}installProtocols(){var e=this;return(0,l.A)(function*(){const o=[I.Q,$.Q,O.Q,L.Q,_.Q,B.Q,W.Q];for(const n of o){const{protocol:r,status:s}=yield e.identityService.web5.dwn.protocols.configure({message:{definition:n}});console.log("Install status:",s),console.log("Protocol:",r)}yield e.load()})()}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data-protocols"]],viewQuery:function(o,n){1&o&&t.wEZ(n.accordion,p.BS,5),2&o&&t.NyB()},standalone:!0,features:[t.aNF],decls:15,vars:0,consts:[[1,"action-buttons"],["mat-flat-button","",3,"click"],["mat-button","",3,"click"],["multi","",1,"example-headers-align"],[3,"innerHTML"],["mat-button",""]],template:function(o,n){1&o&&(t.j41(0,"h2"),t.EFF(1,"Data Protocol Management"),t.k0s(),t.j41(2,"p"),t.EFF(3," Ariton stores your data on Decentralized Web Nodes and on your DWNs you have protocols that controls the behavior of your data. Here you can manage your protocols.\n"),t.k0s(),t.j41(4,"div",0)(5,"button",1),t.bIt("click",function(){return n.installProtocols()}),t.EFF(6,"Install Protocols"),t.k0s()(),t.j41(7,"div",0)(8,"button",2),t.bIt("click",function(){return n.accordion().openAll()}),t.EFF(9,"Expand All"),t.k0s(),t.j41(10,"button",2),t.bIt("click",function(){return n.accordion().closeAll()}),t.EFF(11,"Collapse All"),t.k0s()(),t.j41(12,"mat-accordion",3),t.Z7z(13,G,19,4,"mat-expansion-panel",null,t.fX1),t.k0s()),2&o&&(t.R7$(13),t.Dyx(n.protocols()))},dependencies:[F.Hu,h.Hl,h.$z,C.Fg,j.MD,p.MY,p.BS,p.GK,p.c0,p.Z2,p.WN,p.Q6,f.m_,f.An],styles:[".action-buttons[_ngcontent-%COMP%]{margin-bottom:.5em}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1em;margin-bottom:1em}.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.example-headers-align[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] + .mat-mdc-form-field[_ngcontent-%COMP%]{margin-left:8px}"]})}return a})();var m=i(89417),Y=i(5951),H=i(82798),U=i(98703);function V(a,c){1&a&&(t.j41(0,"mat-error"),t.EFF(1,"Message is "),t.j41(2,"strong"),t.EFF(3,"required"),t.k0s()())}function Z(a,c){if(1&a&&(t.j41(0,"div",11),t.EFF(1),t.nI1(2,"ago"),t.nrm(3,"br"),t.EFF(4),t.nrm(5,"br"),t.EFF(6),t.nrm(7,"br"),t.EFF(8),t.nrm(9,"br"),t.k0s()),2&a){const e=c.$implicit;t.R7$(),t.SpI(" Date: ",t.bMT(2,4,e.created),""),t.R7$(3),t.SpI(" Author: ",e.author,""),t.R7$(2),t.SpI(" Name: ",e.name,""),t.R7$(2),t.SpI(" Message: ",e.message,"")}}let J=(()=>{class a{constructor(){var e=this;this.fb=(0,t.WQX)(m.ok),this.identity=(0,t.WQX)(k.K),this.snackBar=(0,t.WQX)(P.UG),this.form=this.fb.group({name:[null,m.k0.required],receiver:["did:dht:6sf3y5rj4f8sq8rctpkp6w3npotmqrypnsdkc74j1n7uiu1raaco",m.k0.required],message:[null,m.k0.required]}),this.records=(0,t.vPA)([]),(0,t.QZP)((0,l.A)(function*(){e.identity.initialized()&&setInterval((0,l.A)(function*(){const o=yield e.identity.web5.dwn.records.query({message:{filter:{protocol:"http://free-for-all-protocol.xyz",protocolPath:"post",schema:"eph",dataFormat:"application/json"}}});e.records.set([]),o.records&&o.records.forEach(function(){var n=(0,l.A)(function*(r){let s=yield r.data.json();s={...s,id:r.dataCid,author:r.author,created:r.dateCreated},e.records.update(d=>[...d,s])});return function(r){return n.apply(this,arguments)}}())}),5e3)}))}ngOnInit(){return(0,l.A)(function*(){})()}onSubmit(){var e=this;return(0,l.A)(function*(){const o=e.form.controls.name.value,n=e.form.controls.message.value,r=e.form.controls.receiver.value,{record:s}=yield e.identity.web5.dwn.records.create({data:{name:o,message:n},store:!1,message:{protocol:"http://free-for-all-protocol.xyz",protocolPath:"post",schema:"eph",dataFormat:"application/json"}});if(s){const{status:d}=yield s.send(r);console.log("Record sent:",d,s),e.snackBar.open("Record sent successfully!","Close",{duration:3e3})}})()}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data-live"]],standalone:!0,features:[t.aNF],decls:32,vars:3,consts:[["name",""],["receiver",""],["message",""],["novalidate","",3,"ngSubmit","formGroup"],[1,"row"],[1,"full-width"],["matInput","","placeholder","Name","maxlength","200","formControlName","name"],["matInput","","placeholder","Receiver","maxlength","200","formControlName","receiver"],["maxlength","300","matInput","","placeholder","Message","formControlName","message"],["align","end"],["mat-flat-button","","color","primary","type","submit"],[1,"message"]],template:function(o,n){if(1&o){const r=t.RV6();t.j41(0,"h1"),t.EFF(1,"Live Data Demo"),t.k0s(),t.j41(2,"form",3),t.bIt("ngSubmit",function(){return t.eBV(r),t.Njj(n.onSubmit())}),t.j41(3,"mat-card")(4,"mat-card-content")(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t.EFF(8,"Name"),t.k0s(),t.nrm(9,"input",6,0),t.k0s()(),t.j41(11,"div",4)(12,"mat-form-field",5)(13,"mat-label"),t.EFF(14,"Receiver"),t.k0s(),t.nrm(15,"input",7,1),t.k0s()(),t.j41(17,"div",4)(18,"mat-form-field",5)(19,"mat-label"),t.EFF(20,"Message"),t.k0s(),t.nrm(21,"textarea",8,2),t.DNE(23,V,4,0,"mat-error"),t.j41(24,"mat-hint",9),t.EFF(25),t.k0s()()()(),t.j41(26,"mat-card-actions",9)(27,"button",10),t.EFF(28,"Submit"),t.k0s()()()(),t.nrm(29,"br"),t.Z7z(30,Z,10,6,"div",11,t.fX1)}if(2&o){const r=t.sdS(22);t.R7$(2),t.Y8G("formGroup",n.form),t.R7$(21),t.vxM(n.form.controls.message.hasError("required")?23:-1),t.R7$(2),t.SpI("",r.value.length," / 300"),t.R7$(5),t.Dyx(n.records())}},dependencies:[U.g,j.MD,S.fS,S.fg,g.rl,g.nJ,g.MV,g.TL,h.Hl,h.$z,H.Ve,f.m_,Y.Wk,F.Hu,F.RN,F.YY,F.m2,m.X1,m.qT,m.me,m.BC,m.cb,m.tU,m.j4,m.JD],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.message[_ngcontent-%COMP%]{border:1px solid silver;padding:1em;margin-bottom:.5em}"]})}return a})();var K=i(36815);function q(a,c){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"source"),t.k0s(),t.EFF(2," Your Data "))}function tt(a,c){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"folder"),t.k0s(),t.EFF(2," Public Data "))}function et(a,c){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"format_list_bulleted"),t.k0s(),t.EFF(2," Protocols "))}function ot(a,c){1&a&&(t.j41(0,"mat-icon",1),t.EFF(1,"stream"),t.k0s(),t.EFF(2," Live (Demo) "))}let nt=(()=>{class a{constructor(){this.layout=(0,t.WQX)(K.Y),this.layout.resetActions()}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-data"]],standalone:!0,features:[t.aNF],decls:14,vars:0,consts:[["mat-tab-label",""],[1,"example-tab-icon"]],template:function(o,n){1&o&&(t.j41(0,"mat-tab-group")(1,"mat-tab"),t.DNE(2,q,3,0,"ng-template",0),t.nrm(3,"app-data-management"),t.k0s(),t.j41(4,"mat-tab"),t.DNE(5,tt,3,0,"ng-template",0),t.j41(6,"p"),t.EFF(7,'Not implemented yet. See "Your Data" tab.'),t.k0s()(),t.j41(8,"mat-tab"),t.DNE(9,et,3,0,"ng-template",0),t.nrm(10,"app-data-protocols"),t.k0s(),t.j41(11,"mat-tab"),t.DNE(12,ot,3,0,"ng-template",0),t.nrm(13,"app-data-live"),t.k0s()())},dependencies:[y.RI,y.ES,y.mq,y.T8,f.m_,f.An,Q,X,J],styles:[".example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}"]})}return a})()}}]);