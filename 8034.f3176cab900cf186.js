"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8034],{98034:(U,v,s)=>{s.r(v),s.d(v,{FilesComponent:()=>D});var m=s(10467),t=s(93953),A=s(31439),R=s(36815),j=s(34635),d=s(97372),F=s(60177),r=s(89417),y=s(88834),c=s(75351),p=s(99213),C=s(99631),E=s(59115),Q=s(14823),I=s(53719);let M=(()=>{class l{constructor(e,o){this.dialogRef=e,this.data=o,this.fb=(0,t.WQX)(r.ok),this.form=this.fb.group({name:[null,r.k0.required]})}ngAfterViewInit(){}static#t=this.\u0275fac=function(o){return new(o||l)(t.rXU(c.CP),t.rXU(c.Vh))};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["app-folder-dialog"]],standalone:!0,features:[t.aNF],decls:10,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],["appearance","outline",1,"full-width"],["matInput","","required","true","placeholder","Name","maxlength","200",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","type","submit","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(o,a){1&o&&(t.j41(0,"h2",0),t.EFF(1,"New folder"),t.k0s(),t.j41(2,"mat-dialog-content",1)(3,"mat-form-field",2)(4,"input",3),t.mxI("ngModelChange",function(i){return t.DH7(a.data.name,i)||(a.data.name=i),i}),t.k0s()()(),t.j41(5,"mat-dialog-actions",4)(6,"button",5),t.EFF(7,"Cancel"),t.k0s(),t.j41(8,"button",6),t.EFF(9,"Create"),t.k0s()()),2&o&&(t.R7$(4),t.R50("ngModel",a.data.name),t.R7$(4),t.Y8G("mat-dialog-close",!0))},dependencies:[F.MD,Q.uc,E.Cn,p.m_,y.Hl,y.$z,C.fS,C.fg,I.rl,c.hM,c.tx,c.BI,c.E7,c.Yi,r.YN,r.me,r.BC,r.YS,r.tU,r.vS],styles:["form[_ngcontent-%COMP%]{display:inline}"]})}return l})();var f=s(3902),T=s(98703),N=s(71997);function X(l,g){if(1&l&&(t.j41(0,"mat-list-item")(1,"mat-icon",1),t.EFF(2,"folder"),t.k0s(),t.j41(3,"div",2),t.EFF(4),t.k0s(),t.j41(5,"div",3),t.EFF(6),t.nI1(7,"ago"),t.k0s()()),2&l){const e=g.$implicit;t.R7$(4),t.JRh(e.data.name),t.R7$(2),t.JRh(t.bMT(7,2,e.record.dateCreated))}}function $(l,g){if(1&l&&(t.j41(0,"mat-list-item")(1,"mat-icon",1),t.EFF(2,"note"),t.k0s(),t.j41(3,"div",2),t.EFF(4),t.k0s(),t.j41(5,"div",3),t.EFF(6),t.nI1(7,"date"),t.k0s()()),2&l){const e=g.$implicit;t.R7$(4),t.JRh(e.name),t.R7$(2),t.JRh(t.bMT(7,2,e.updated))}}let D=(()=>{class l{constructor(){var e=this;this.app=(0,t.WQX)(A.d),this.layout=(0,t.WQX)(R.Y),this.identity=(0,t.WQX)(j.K),this.dialog=(0,t.WQX)(c.bZ),this.folders=(0,t.vPA)([]),this.files=(0,t.vPA)([]),this.layout.disableNavigation(),this.layout.addAction({name:"New File",icon:"upload_file",action:()=>{this.editFile({data:{title:"",body:"",background:"",collaborators:[],labels:[]}})}}),this.layout.addAction({name:"New Folder",icon:"create_new_folder",action:()=>{this.editFolder({data:{name:"Untitled folder"}})}}),(0,t.QZP)((0,m.A)(function*(){e.app.initialized()&&(yield e.loadFolders(),yield e.loadFiles())}))}editFile(e){return(0,m.A)(function*(){})()}editFolder(e){var o=this;return(0,m.A)(function*(){let a={name:e.data.name};const n=JSON.parse(JSON.stringify(a)),i=o.dialog.open(M,{maxWidth:"80vw",maxHeight:"80vh",data:a});return i.afterClosed().subscribe(function(){var u=(0,m.A)(function*(h){h?(console.log("data result for saving:",a),e.data=a,yield o.saveFolder(e,a)):a=n});return function(h){return u.apply(this,arguments)}}()),i.afterClosed()})()}saveFolder(e,o){var a=this;return(0,m.A)(function*(){if(e.record){const{status:n,record:i}=yield e.record.update({data:o});console.log("Record created:",i),console.log("Record status:",n)}else{const{record:n,status:i}=yield a.identity.web5.dwn.records.create({data:o,message:{protocol:d.Q.protocol,protocolPath:"folder",schema:d.Q.types.folder.schema,dataFormat:d.Q.types.folder.dataFormats[0]}});console.log("Record created:",n),console.log("Record status:",i),n&&(e.record=n,a.folders.update(u=>[...u,e]))}})()}loadFolders(e){var o=this;return(0,m.A)(function*(){console.log("VALUE OF TAGS:",e);var{records:a}=yield o.identity.web5.dwn.records.query({message:{filter:{protocol:d.Q.protocol,schema:d.Q.types.folder.schema,dataFormat:d.Q.types.folder.dataFormats[0]}}});if(o.folders.set([]),a)for(const n of a){let i=yield n.data.json(),u={record:n,data:i};o.folders.update(h=>[...h,u])}console.log("All requests:",o.folders())})()}loadFiles(e){var o=this;return(0,m.A)(function*(){console.log("VALUE OF TAGS:",e);var{records:a}=yield o.identity.web5.dwn.records.query({message:{filter:{protocol:d.Q.protocol,schema:d.Q.types.file.schema,dataFormat:d.Q.types.file.dataFormats[0]}}});if(o.files.set([]),a)for(const n of a){let i=yield n.data.json(),u={record:n,data:i};o.files.update(h=>[...h,u])}console.log("All requests:",o.files())})()}static#t=this.\u0275fac=function(o){return new(o||l)};static#e=this.\u0275cmp=t.VBU({type:l,selectors:[["app-files"]],standalone:!0,features:[t.aNF],decls:10,vars:0,consts:[["mat-subheader",""],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""]],template:function(o,a){1&o&&(t.j41(0,"mat-list")(1,"div",0),t.EFF(2,"Folders"),t.k0s(),t.Z7z(3,X,8,4,"mat-list-item",null,t.fX1),t.nrm(5,"mat-divider"),t.j41(6,"div",0),t.EFF(7,"Files"),t.k0s(),t.Z7z(8,$,8,4,"mat-list-item",null,t.fX1),t.k0s()),2&o&&(t.R7$(3),t.Dyx(a.folders()),t.R7$(5),t.Dyx(a.files()))},dependencies:[F.MD,F.vh,f.Fg,f.jt,f.YE,f.ZV,f.EI,N.q,f.C_,f.yE,p.m_,p.An,T.g]})}return l})()}}]);