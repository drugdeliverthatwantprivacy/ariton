"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9058],{99058:(W,x,i)=>{i.r(x),i.d(x,{TextComponent:()=>J});var p=i(10467),t=i(93953),r=i(89417),g=i(88834),N=i(65571),b=i(53719),C=i(99213),y=i(99631),R=i(36815),O=i(3902),F=i(60177),f=i(59115),T=i(36471),_=i(25596),k=i(14823),m=i(75351),M=i(82765);const E=l=>({backgroundColor:l});let $=(()=>{class l{constructor(e,n){this.dialogRef=e,this.data=n,this.fb=(0,t.WQX)(r.ok),this.form=this.fb.group({title:[null],body:[null,r.k0.required],collaborators:["did:dht:6sf3y5rj4f8sq8rctpkp6w3npotmqrypnsdkc74j1n7uiu1raaco"],background:[null]})}ngAfterViewInit(){}static#t=this.\u0275fac=function(n){return new(n||l)(t.rXU(m.CP),t.rXU(m.Vh))};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["app-text-dialog"]],standalone:!0,features:[t.aNF],decls:20,vars:10,consts:[["body",""],["appearance","outline",1,"full-width"],["matInput","","placeholder","Title","maxlength","200",3,"ngModelChange","ngModel"],["matInput","","placeholder","Image","maxlength","200",3,"ngModelChange","ngModel"],["maxlength","300","rows","6","matInput","","placeholder","Text",3,"ngModelChange","ngModel"],["align","end"],["align","end",3,"ngStyle"],["mat-icon-button","","matTooltip","Collaborator",3,"disabled"],[1,"published-checkbox",3,"ngModelChange","ngModel"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","type","submit","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(n,o){if(1&n){const a=t.RV6();t.j41(0,"mat-dialog-content")(1,"mat-form-field",1)(2,"input",2),t.mxI("ngModelChange",function(s){return t.eBV(a),t.DH7(o.data.title,s)||(o.data.title=s),t.Njj(s)}),t.k0s()(),t.j41(3,"mat-form-field",1)(4,"input",3),t.mxI("ngModelChange",function(s){return t.eBV(a),t.DH7(o.data.image,s)||(o.data.image=s),t.Njj(s)}),t.k0s()(),t.j41(5,"mat-form-field",1)(6,"textarea",4,0),t.mxI("ngModelChange",function(s){return t.eBV(a),t.DH7(o.data.body,s)||(o.data.body=s),t.Njj(s)}),t.k0s(),t.j41(8,"mat-hint",5),t.EFF(9),t.k0s()()(),t.j41(10,"mat-dialog-actions",6)(11,"button",7)(12,"mat-icon"),t.EFF(13,"person_add_alt"),t.k0s()(),t.j41(14,"mat-checkbox",8),t.mxI("ngModelChange",function(s){return t.eBV(a),t.DH7(o.data.published,s)||(o.data.published=s),t.Njj(s)}),t.EFF(15,"Publish"),t.k0s(),t.j41(16,"button",9),t.EFF(17,"Cancel"),t.k0s(),t.j41(18,"button",10),t.EFF(19,"Save"),t.k0s()()}if(2&n){const a=t.sdS(7);t.R7$(2),t.R50("ngModel",o.data.title),t.R7$(2),t.R50("ngModel",o.data.image),t.R7$(2),t.R50("ngModel",o.data.body),t.R7$(3),t.SpI("",a.value.length," / 300"),t.R7$(),t.Y8G("ngStyle",t.eq3(8,E,o.data.background)),t.R7$(),t.Y8G("disabled",!0),t.R7$(3),t.R50("ngModel",o.data.published),t.R7$(4),t.Y8G("mat-dialog-close",!0)}},dependencies:[F.MD,F.B3,k.uc,k.oV,f.Cn,C.m_,C.An,g.Hl,g.$z,g.iY,y.fS,y.fg,b.rl,b.MV,m.hM,m.tx,m.E7,m.Yi,r.YN,r.me,r.BC,r.tU,r.vS,M.g7,M.So],styles:["form[_ngcontent-%COMP%]{display:inline}.published-checkbox[_ngcontent-%COMP%]{margin-left:.6em;margin-right:.6em}"]})}return l})();var u=i(70669),S=i(34635),V=i(31439),v=i(82798),j=i(66969),I=i(48067),D=i(86600),G=i(71997);function X(l,d){if(1&l){const e=t.RV6();t.j41(0,"mat-chip-option",10),t.bIt("click",function(o){t.eBV(e);const a=t.XpG();return t.Njj(a.onSelectionChange(o))}),t.EFF(1),t.k0s()}if(2&l){const e=d.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function B(l,d){if(1&l){const e=t.RV6();t.j41(0,"mat-card-title",20),t.bIt("click",function(){t.eBV(e);const o=t.XpG().$implicit,a=t.XpG();return t.Njj(a.editNote(o))}),t.EFF(1),t.k0s()}if(2&l){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.data.title)}}function P(l,d){1&l&&(t.j41(0,"mat-icon",14),t.EFF(1,"check_box"),t.k0s())}function A(l,d){1&l&&(t.j41(0,"mat-icon",15),t.EFF(1,"check_box_outline_blank"),t.k0s())}function Y(l,d){if(1&l&&(t.j41(0,"span",23),t.EFF(1),t.k0s()),2&l){const e=t.XpG(2).$implicit;t.R7$(),t.Lme(" (+",((null==e.data.labels?null:e.data.labels.length)||0)-1," ",2===(null==e.data.labels?null:e.data.labels.length)?"other":"others",") ")}}function Q(l,d){if(1&l&&(t.j41(0,"mat-option",7),t.EFF(1),t.k0s()),2&l){const e=d.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function H(l,d){if(1&l){const e=t.RV6();t.j41(0,"mat-card")(1,"mat-form-field",21)(2,"mat-label"),t.EFF(3,"Labels"),t.k0s(),t.j41(4,"mat-select",22),t.mxI("ngModelChange",function(o){t.eBV(e);const a=t.XpG().$implicit;return t.DH7(a.data.labels,o)||(a.data.labels=o),t.Njj(o)}),t.j41(5,"mat-select-trigger"),t.EFF(6),t.DNE(7,Y,2,2,"span",23),t.k0s(),t.Z7z(8,Q,2,2,"mat-option",7,t.fX1),t.k0s()()()}if(2&l){const e=t.XpG().$implicit,n=t.XpG();t.R7$(4),t.R50("ngModel",e.data.labels),t.R7$(2),t.SpI(" ",(null==e.data.labels?null:e.data.labels[0])||""," "),t.R7$(),t.vxM(((null==e.data.labels?null:e.data.labels.length)||0)>1?7:-1),t.R7$(),t.Dyx(n.labels())}}function z(l,d){if(1&l){const e=t.RV6();t.j41(0,"mat-card",9),t.DNE(1,B,2,1,"mat-card-title"),t.j41(2,"mat-card-content",11),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.editNote(o))}),t.EFF(3),t.k0s(),t.j41(4,"mat-card-footer")(5,"button",12)(6,"mat-icon"),t.EFF(7,"person_add_alt"),t.k0s()(),t.j41(8,"button",13),t.DNE(9,P,2,0,"mat-icon",14)(10,A,2,0,"mat-icon",15),t.k0s(),t.j41(11,"button",16,0),t.bIt("click",function(){const o=t.eBV(e).$implicit;return t.Njj(o.open=!o.open)}),t.j41(13,"mat-icon"),t.EFF(14,"new_label"),t.k0s()(),t.DNE(15,H,10,3,"ng-template",17),t.bIt("backdropClick",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.closeLabelsMenu(o))}),t.j41(16,"button",18)(17,"mat-icon"),t.EFF(18,"more_vert"),t.k0s()(),t.j41(19,"mat-menu",null,1)(21,"button",19),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.editNote(o))}),t.j41(22,"mat-icon"),t.EFF(23,"edit"),t.k0s(),t.j41(24,"span"),t.EFF(25,"Edit note"),t.k0s()(),t.j41(26,"button",19),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.copyNote(o))}),t.j41(27,"mat-icon"),t.EFF(28,"file_copy"),t.k0s(),t.j41(29,"span"),t.EFF(30,"Make a copy"),t.k0s()(),t.nrm(31,"mat-divider"),t.j41(32,"button",19),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.deleteNote(o))}),t.j41(33,"mat-icon"),t.EFF(34,"delete"),t.k0s(),t.j41(35,"span"),t.EFF(36,"Delete note"),t.k0s()()()()()}if(2&l){const e=d.$implicit,n=t.sdS(12),o=t.sdS(20);t.R7$(),t.vxM(e.data.title?1:-1),t.R7$(2),t.JRh(e.data.body),t.R7$(2),t.Y8G("disabled",!0),t.R7$(3),t.Y8G("matTooltip",e.record.published?"Published":"Not published")("matTooltipDisabled",!1),t.R7$(),t.vxM(e.record.published?9:10),t.R7$(6),t.Y8G("cdkConnectedOverlayHasBackdrop",!0)("cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop")("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",e.open),t.R7$(),t.Y8G("matMenuTriggerFor",o)}}let J=(()=>{class l{closeLabelsMenu(e){var n=this;return(0,p.A)(function*(){e.open=!1,console.log("Menu closed:",e),yield n.saveNote(e,e.data)})()}constructor(){var e=this;this.viewStyle=(0,t.geq)("card"),this.selectedTag="",this.bold=!1,this.bold2=!1,this.dialog=(0,t.WQX)(m.bZ),this.layout=(0,t.WQX)(R.Y),this.identity=(0,t.WQX)(S.K),this.app=(0,t.WQX)(V.d),this.toppings=new r.MJ(""),this.labels=(0,t.vPA)(["Reminders","Inspiration","Personal","Work"]),this.labelMap={Reminders:"label1",Inspiration:"label2",Personal:"label3",Work:"label4"},this.records=(0,t.vPA)([]),this.checkedColumns=[],this.columnsCopy=[{key:1,title:"test"}],this.layout.marginOn(),this.layout.disableNavigation(),this.layout.resetActions(),(0,t.QZP)((0,p.A)(function*(){e.app.initialized()&&(yield e.loadNotes())}))}deleteNote(e){var n=this;return(0,p.A)(function*(){const{status:o}=yield e.record.delete();o&&n.records.update(a=>a.filter(c=>c.record!=e.record))})()}newNote(){this.editNote({data:{title:"",body:"",background:"",collaborators:[],labels:[],published:!0}})}loadNotes(e){var n=this;return(0,p.A)(function*(){console.log("VALUE OF TAGS:",e);var{records:o}=yield n.identity.web5.dwn.records.query({message:{filter:{tags:e,protocol:u.Q.protocol,schema:u.Q.types.entry.schema,dataFormat:u.Q.types.entry.dataFormats[0]}}});if(n.records.set([]),o)for(const a of o){let c=yield a.data.json(),s={record:a,data:c};n.records.update(h=>[...h,s])}console.log("All requests:",n.records())})()}onSelectionChange(e){console.log("Selection changed:",e),console.log(this.selectedTag),this.selectedTag?this.loadNotes({labels:this.selectedTag}):this.loadNotes()}ngOnDestroy(){this.layout.enableScrolling()}copyNote(e){const n=JSON.parse(JSON.stringify(e.data));this.saveNote({data:n},n)}editNote(e){var n=this;let o={title:e.data.title,body:e.data.body,background:e.data.background,collaborators:[],labels:[""],published:e.record?e.record.published:e.data.published,image:e.data.image};const a=JSON.parse(JSON.stringify(o)),c=this.dialog.open($,{maxWidth:"80vw",maxHeight:"80vh",data:o});return c.afterClosed().subscribe(function(){var s=(0,p.A)(function*(h){h?(console.log("data result for saving:",o),e.data=o,yield n.saveNote(e,o)):o=a});return function(h){return s.apply(this,arguments)}}()),c.afterClosed()}ngOnInit(){}selectColor(){}saveNote(e,n){var o=this;return(0,p.A)(function*(){const a=n.published;if(delete n.published,e.record){e.record.tags.labels=n.labels,e.record.tags.title=n.title,e.record.tags.image=n.image??"";const{status:c}=yield e.record.update({data:n,published:a});console.log("Record status:",c)}else{const{record:c,status:s}=yield o.identity.web5.dwn.records.create({data:n,message:{published:a,tags:{image:n.image??"",title:n.title,labels:n.labels},protocol:u.Q.protocol,protocolPath:"entry",schema:u.Q.types.entry.schema,dataFormat:u.Q.types.entry.dataFormats[0]}});console.log("Record created:",c),console.log("Record status:",s),c&&(e.record=c,o.records.update(h=>[...h,e]))}})()}static#t=this.\u0275fac=function(n){return new(n||l)};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["app-text"]],inputs:{viewStyle:[1,"viewStyle"]},outputs:{viewStyle:"viewStyleChange"},standalone:!0,features:[t.aNF],decls:14,vars:2,consts:[["trigger","cdkOverlayOrigin"],["menuActions","matMenu"],[1,"toolbar-actions","margin-bottom"],["type","button","mat-button","",3,"click"],[1,"notes"],[1,"notes-top"],[3,"ngModelChange","multiple","ngModel"],[3,"value"],[1,"notes-items"],[1,"marketplace-category"],[3,"click","value"],[1,"note-body",3,"click"],["mat-icon-button","","matTooltip","Collaborator",3,"disabled"],["mat-icon-button","",3,"matTooltip","matTooltipDisabled"],["title","Published"],["title","Not published"],["mat-icon-button","","matTooltip","Labels","type","button","cdkOverlayOrigin","",3,"click"],["cdkConnectedOverlay","",3,"backdropClick","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen"],["mat-icon-button","","matTooltip","Options",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[3,"click"],["subscriptSizing","dynamic"],["multiple","",3,"ngModelChange","ngModel"],[1,"example-additional-selection"]],template:function(n,o){1&n&&(t.j41(0,"mat-card",2)(1,"mat-card-content")(2,"button",3),t.bIt("click",function(){return o.newNote()}),t.j41(3,"mat-icon"),t.EFF(4,"create"),t.k0s(),t.EFF(5," New text "),t.k0s()()(),t.j41(6,"div",4)(7,"div",5)(8,"mat-chip-listbox",6),t.mxI("ngModelChange",function(c){return t.DH7(o.selectedTag,c)||(o.selectedTag=c),c}),t.Z7z(9,X,2,2,"mat-chip-option",7,t.fX1),t.k0s()(),t.j41(11,"div",8),t.Z7z(12,z,37,11,"mat-card",9,t.fX1),t.k0s()()),2&n&&(t.R7$(8),t.Y8G("multiple",!1),t.R50("ngModel",o.selectedTag),t.R7$(),t.Dyx(o.labels()),t.R7$(3),t.Dyx(o.records()))},dependencies:[F.MD,v.Ve,b.rl,b.nJ,v.VO,v.$2,D.wT,m.hM,k.uc,k.oV,_.Hu,_.RN,_.m2,_.WQ,_.dh,T.YN,T.uI,T.gq,r.YN,r.BC,r.vS,g.Hl,g.$z,g.iY,C.m_,C.An,y.fS,O.Fg,G.q,f.Cn,f.kk,f.fb,f.Cp,N.Vg,b.RG,r.X1,j.z_,j.WB,j.$Q,I.iw],styles:[".notes[_ngcontent-%COMP%]{height:100%}.note-body[_ngcontent-%COMP%]{white-space:pre-wrap}.notes-top[_ngcontent-%COMP%]{margin-bottom:1em}.large-icon[_ngcontent-%COMP%]{transform:scale(2)}.marketplace-category[_ngcontent-%COMP%]{display:inline-block;padding:12px 16px;margin-right:1em;margin-bottom:1em;max-width:210px;font-size:.9em}.notes-items[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{cursor:pointer;padding:0!important;margin-bottom:.4em}.notes-items[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{cursor:pointer}.notes-items[_ngcontent-%COMP%]   mat-card-footer[_ngcontent-%COMP%]{font-size:1.2em;width:100%;text-align:center;display:block}"]})}return l})()}}]);