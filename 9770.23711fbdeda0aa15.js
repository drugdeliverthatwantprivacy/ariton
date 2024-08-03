"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9770],{99770:(Je,U,a)=>{a.r(U),a.d(U,{NotesComponent:()=>Ye});var f=a(10467),e=a(93953),h=a(89417),b=a(88834),se=a(65571),v=a(53719),O=a(99213),Q=a(99631),oe=a(36815),re=a(3902),R=a(60177),C=a(59115),H=a(36471),T=a(25596),E=a(14823),_=a(75351);const z=i=>({backgroundColor:i});let ae=(()=>{class i{constructor(t,n){this.dialogRef=t,this.data=n,this.fb=(0,e.WQX)(h.ok),this.form=this.fb.group({title:[null],body:[null,h.k0.required],collaborators:["did:dht:6sf3y5rj4f8sq8rctpkp6w3npotmqrypnsdkc74j1n7uiu1raaco"],background:[null]})}ngAfterViewInit(){}onColorChange(t){var n=this;return(0,f.A)(function*(){n.data.background=t.target.value})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.rXU(_.CP),e.rXU(_.Vh))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-note-dialog"]],standalone:!0,features:[e.aNF],decls:21,vars:11,consts:[["body",""],["fileColor",""],[1,"mat-typography",3,"ngStyle"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Title","maxlength","200",3,"ngModelChange","ngModel"],["maxlength","300","rows","6","matInput","","placeholder","Note",3,"ngModelChange","ngModel"],["align","end"],["align","end",3,"ngStyle"],["mat-icon-button","","matTooltip","Collaborator",3,"disabled"],["mat-icon-button","","matTooltip","Background",3,"click"],["type","color",1,"color-picker",3,"change"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","type","submit","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(n,s){if(1&n){const o=e.RV6();e.j41(0,"mat-dialog-content",2)(1,"mat-form-field",3)(2,"input",4),e.mxI("ngModelChange",function(u){return e.eBV(o),e.DH7(s.data.title,u)||(s.data.title=u),e.Njj(u)}),e.k0s()(),e.j41(3,"mat-form-field",3)(4,"textarea",5,0),e.mxI("ngModelChange",function(u){return e.eBV(o),e.DH7(s.data.body,u)||(s.data.body=u),e.Njj(u)}),e.k0s(),e.j41(6,"mat-hint",6),e.EFF(7),e.k0s()()(),e.j41(8,"mat-dialog-actions",7)(9,"button",8)(10,"mat-icon"),e.EFF(11,"person_add_alt"),e.k0s()(),e.j41(12,"button",9),e.bIt("click",function(){e.eBV(o);const u=e.sdS(16);return e.Njj(u.click())}),e.j41(13,"mat-icon"),e.EFF(14,"palette"),e.k0s()(),e.j41(15,"input",10,1),e.bIt("change",function(u){return e.eBV(o),e.Njj(s.onColorChange(u))}),e.k0s(),e.j41(17,"button",11),e.EFF(18,"Cancel"),e.k0s(),e.j41(19,"button",12),e.EFF(20,"Save"),e.k0s()()}if(2&n){const o=e.sdS(5);e.Y8G("ngStyle",e.eq3(7,z,s.data.background)),e.R7$(2),e.R50("ngModel",s.data.title),e.R7$(2),e.R50("ngModel",s.data.body),e.R7$(3),e.SpI("",o.value.length," / 300"),e.R7$(),e.Y8G("ngStyle",e.eq3(9,z,s.data.background)),e.R7$(),e.Y8G("disabled",!0),e.R7$(10),e.Y8G("mat-dialog-close",!0)}},dependencies:[R.MD,R.B3,E.uc,E.oV,C.Cn,O.m_,O.An,b.Hl,b.$z,b.iY,Q.fS,Q.fg,v.rl,v.MV,_.hM,_.tx,_.E7,_.Yi,h.YN,h.me,h.BC,h.tU,h.vS],styles:["form[_ngcontent-%COMP%]{display:inline}"]})}return i})();var k=a(69314),ce=a(34635),le=a(31439),V=a(82798),g=a(66969);a(67336),a(99172),a(70152),a(23294),a(5964),a(56977),a(31397),a(73703),a(26365),a(25558),a(39974),a(54360),a(65245),a(45024),a(21413),a(57786),a(33726),a(59030),a(58750),a(76939),a(18617),a(28203),a(36860);let He=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[g.z_]})}return i})();var Ve=a(86600),Xe=a(71997);const We=i=>({backgroundColor:i});function Ge(i,c){if(1&i){const t=e.RV6();e.j41(0,"mat-chip-option",9),e.bIt("click",function(s){e.eBV(t);const o=e.XpG();return e.Njj(o.onSelectionChange(s))}),e.EFF(1),e.k0s()}if(2&i){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function Ke(i,c){if(1&i){const t=e.RV6();e.j41(0,"mat-card-title",18),e.bIt("click",function(){e.eBV(t);const s=e.XpG().$implicit,o=e.XpG();return e.Njj(o.editNote(s))}),e.EFF(1),e.k0s()}if(2&i){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.data.title)}}function Le(i,c){if(1&i&&(e.j41(0,"span",21),e.EFF(1),e.k0s()),2&i){const t=e.XpG(2).$implicit;e.R7$(),e.Lme(" (+",((null==t.data.labels?null:t.data.labels.length)||0)-1," ",2===(null==t.data.labels?null:t.data.labels.length)?"other":"others",") ")}}function $e(i,c){if(1&i&&(e.j41(0,"mat-option",6),e.EFF(1),e.k0s()),2&i){const t=c.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function Ue(i,c){if(1&i){const t=e.RV6();e.j41(0,"mat-card")(1,"mat-form-field",19)(2,"mat-label"),e.EFF(3,"Labels"),e.k0s(),e.j41(4,"mat-select",20),e.mxI("ngModelChange",function(s){e.eBV(t);const o=e.XpG().$implicit;return e.DH7(o.data.labels,s)||(o.data.labels=s),e.Njj(s)}),e.j41(5,"mat-select-trigger"),e.EFF(6),e.DNE(7,Le,2,2,"span",21),e.k0s(),e.Z7z(8,$e,2,2,"mat-option",6,e.fX1),e.k0s()()()}if(2&i){const t=e.XpG().$implicit,n=e.XpG();e.R7$(4),e.R50("ngModel",t.data.labels),e.R7$(2),e.SpI(" ",(null==t.data.labels?null:t.data.labels[0])||""," "),e.R7$(),e.vxM(((null==t.data.labels?null:t.data.labels.length)||0)>1?7:-1),e.R7$(),e.Dyx(n.labels())}}function ze(i,c){if(1&i){const t=e.RV6();e.j41(0,"mat-card",8),e.DNE(1,Ke,2,1,"mat-card-title"),e.j41(2,"mat-card-content",10),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.editNote(s))}),e.EFF(3),e.k0s(),e.j41(4,"mat-card-footer")(5,"button",11)(6,"mat-icon"),e.EFF(7,"person_add_alt"),e.k0s()(),e.j41(8,"button",12),e.bIt("click",function(){e.eBV(t);const s=e.sdS(12);return e.Njj(s.click())}),e.j41(9,"mat-icon"),e.EFF(10,"palette"),e.k0s()(),e.j41(11,"input",13,0),e.bIt("change",function(s){const o=e.eBV(t).$implicit,r=e.XpG();return e.Njj(r.onColorChange(s,o))}),e.k0s(),e.j41(13,"button",14,1),e.bIt("click",function(){const s=e.eBV(t).$implicit;return e.Njj(s.open=!s.open)}),e.j41(15,"mat-icon"),e.EFF(16,"new_label"),e.k0s()(),e.DNE(17,Ue,10,3,"ng-template",15),e.bIt("backdropClick",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.closeLabelsMenu(s))}),e.j41(18,"button",16)(19,"mat-icon"),e.EFF(20,"more_vert"),e.k0s()(),e.j41(21,"mat-menu",null,2)(23,"button",17),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.editNote(s))}),e.j41(24,"mat-icon"),e.EFF(25,"edit"),e.k0s(),e.j41(26,"span"),e.EFF(27,"Edit note"),e.k0s()(),e.j41(28,"button",17),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.copyNote(s))}),e.j41(29,"mat-icon"),e.EFF(30,"file_copy"),e.k0s(),e.j41(31,"span"),e.EFF(32,"Make a copy"),e.k0s()(),e.nrm(33,"mat-divider"),e.j41(34,"button",17),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.deleteNote(s))}),e.j41(35,"mat-icon"),e.EFF(36,"delete"),e.k0s(),e.j41(37,"span"),e.EFF(38,"Delete note"),e.k0s()()()()()}if(2&i){const t=c.$implicit,n=e.sdS(14),s=e.sdS(22);e.Y8G("ngStyle",e.eq3(9,We,t.data.background)),e.R7$(),e.vxM(t.data.title?1:-1),e.R7$(2),e.JRh(t.data.body),e.R7$(2),e.Y8G("disabled",!0),e.R7$(12),e.Y8G("cdkConnectedOverlayHasBackdrop",!0)("cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop")("cdkConnectedOverlayOrigin",n)("cdkConnectedOverlayOpen",t.open),e.R7$(),e.Y8G("matMenuTriggerFor",s)}}let Ye=(()=>{class i{closeLabelsMenu(t){var n=this;return(0,f.A)(function*(){t.open=!1,console.log("Menu closed:",t),yield n.saveNote(t,t.data)})()}constructor(){var t=this;this.viewStyle=(0,e.geq)("card"),this.selectedTag="",this.bold=!1,this.bold2=!1,this.dialog=(0,e.WQX)(_.bZ),this.layout=(0,e.WQX)(oe.Y),this.identity=(0,e.WQX)(ce.K),this.app=(0,e.WQX)(le.d),this.toppings=new h.MJ(""),this.labels=(0,e.vPA)(["Reminders","Inspiration","Personal","Work"]),this.labelMap={Reminders:"label1",Inspiration:"label2",Personal:"label3",Work:"label4"},this.records=(0,e.vPA)([]),this.checkedColumns=[],this.columnsCopy=[{key:1,title:"test"}],this.layout.disableNavigation(),this.layout.addAction({name:"New Note",icon:"note_add",action:()=>{this.editNote({data:{title:"",body:"",background:"",collaborators:[],labels:[]}})}}),(0,e.QZP)((0,f.A)(function*(){t.app.initialized()&&(yield t.loadNotes())}))}deleteNote(t){var n=this;return(0,f.A)(function*(){const{status:s}=yield t.record.delete();s&&n.records.update(o=>o.filter(r=>r.record!=t.record))})()}loadNotes(t){var n=this;return(0,f.A)(function*(){console.log("VALUE OF TAGS:",t);var{records:s}=yield n.identity.web5.dwn.records.query({message:{filter:{tags:t,protocol:k.Q.protocol,schema:k.Q.types.note.schema,dataFormat:k.Q.types.note.dataFormats[0]}}});if(n.records.set([]),s)for(const o of s){let r=yield o.data.json(),u={record:o,data:r};n.records.update(j=>[...j,u])}console.log("All requests:",n.records())})()}onSelectionChange(t){console.log("Selection changed:",t),console.log(this.selectedTag),this.selectedTag?this.loadNotes({labels:this.selectedTag}):this.loadNotes()}ngOnDestroy(){this.layout.enableScrolling()}copyNote(t){const n=JSON.parse(JSON.stringify(t.data));this.saveNote({data:n},n)}editNote(t){var n=this;let s={title:t.data.title,body:t.data.body,background:t.data.background,collaborators:["12","33333"],labels:["label2","label3"]};const o=JSON.parse(JSON.stringify(s)),r=this.dialog.open(ae,{maxWidth:"80vw",maxHeight:"80vh",data:s});return r.afterClosed().subscribe(function(){var u=(0,f.A)(function*(j){j?(console.log("data result for saving:",s),yield n.saveNote(t,s),n.records().find(Ze=>Ze.record==t.record).data=s):s=o});return function(j){return u.apply(this,arguments)}}()),r.afterClosed()}ngOnInit(){}selectColor(){}onColorChange(t,n){return(0,f.A)(function*(){const s=t.target.value;console.log("Input value changed:",s),n.data.background=s;const{status:o,record:r}=yield n.record.update({data:n.data});console.log("Record created:",r),console.log("Record status:",o)})()}saveNote(t,n){var s=this;return(0,f.A)(function*(){if(t.record){t.record.tags.labels=n.labels;const{status:o,record:r}=yield t.record.update({data:n});console.log("Record created:",r),console.log("Record status:",o)}else{const{record:o,status:r}=yield s.identity.web5.dwn.records.create({data:n,message:{tags:{labels:n.labels},protocol:k.Q.protocol,protocolPath:"note",schema:k.Q.types.note.schema,dataFormat:k.Q.types.note.dataFormats[0]}});console.log("Record created:",o),console.log("Record status:",r),o&&(t.record=o,s.records.update(u=>[...u,t]))}})()}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-notes"]],inputs:{viewStyle:[1,"viewStyle"]},outputs:{viewStyle:"viewStyleChange"},standalone:!0,features:[e.aNF],decls:8,vars:2,consts:[["fileColor",""],["trigger","cdkOverlayOrigin"],["menuActions","matMenu"],[1,"notes"],[1,"notes-top"],[3,"ngModelChange","multiple","ngModel"],[3,"value"],[1,"notes-items"],[1,"marketplace-category",3,"ngStyle"],[3,"click","value"],[1,"note-body",3,"click"],["mat-icon-button","","matTooltip","Collaborator",3,"disabled"],["mat-icon-button","","matTooltip","Background",3,"click"],["type","color",1,"color-picker",3,"change"],["mat-icon-button","","matTooltip","Labels","type","button","cdkOverlayOrigin","",3,"click"],["cdkConnectedOverlay","",3,"backdropClick","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayBackdropClass","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen"],["mat-icon-button","","matTooltip","Options",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[3,"click"],["subscriptSizing","dynamic"],["multiple","",3,"ngModelChange","ngModel"],[1,"example-additional-selection"]],template:function(n,s){1&n&&(e.j41(0,"div",3)(1,"div",4)(2,"mat-chip-listbox",5),e.mxI("ngModelChange",function(r){return e.DH7(s.selectedTag,r)||(s.selectedTag=r),r}),e.Z7z(3,Ge,2,2,"mat-chip-option",6,e.fX1),e.k0s()(),e.j41(5,"div",7),e.Z7z(6,ze,39,11,"mat-card",8,e.fX1),e.k0s()()),2&n&&(e.R7$(2),e.Y8G("multiple",!1),e.R50("ngModel",s.selectedTag),e.R7$(),e.Dyx(s.labels()),e.R7$(3),e.Dyx(s.records()))},dependencies:[R.MD,R.B3,V.Ve,v.rl,v.nJ,V.VO,V.$2,Ve.wT,_.hM,E.uc,E.oV,T.Hu,T.RN,T.m2,T.WQ,T.dh,H.YN,H.uI,H.gq,h.YN,h.BC,h.vS,b.Hl,b.iY,O.m_,O.An,Q.fS,re.Fg,Xe.q,C.Cn,C.kk,C.fb,C.Cp,se.Vg,v.RG,h.X1,g.z_,g.WB,g.$Q,He],styles:["[_nghost-%COMP%]{background-color:#ff0;padding-bottom:100px}.notes[_ngcontent-%COMP%]{height:100%}.note-body[_ngcontent-%COMP%]{white-space:pre-wrap}.notes-top[_ngcontent-%COMP%]{margin-bottom:1em}.large-icon[_ngcontent-%COMP%]{transform:scale(2)}.marketplace-category[_ngcontent-%COMP%]{display:inline-block;padding:12px 16px;margin-right:1em;margin-bottom:1em;max-width:210px;font-size:.9em}mat-card-content[_ngcontent-%COMP%]{cursor:pointer;padding:0!important;margin-bottom:.4em}mat-card-title[_ngcontent-%COMP%]{cursor:pointer}mat-card-footer[_ngcontent-%COMP%]{font-size:1.2em;width:100%;text-align:center;display:block}"]})}return i})()}}]);