"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[380],{37380:(v,_,i)=>{i.r(_),i.d(_,{ProfileEditComponent:()=>P});var t=i(93953),n=i(89417),d=i(88834),s=i(25596),c=i(99213),f=i(99631),p=i(5951),E=i(82798),u=i(53719);function k(o,l){1&o&&(t.j41(0,"mat-error"),t.EFF(1,"Title is "),t.j41(2,"strong"),t.EFF(3,"required"),t.k0s()())}function C(o,l){1&o&&(t.j41(0,"mat-error"),t.EFF(1,"Status is "),t.j41(2,"strong"),t.EFF(3,"required"),t.k0s()())}function g(o,l){1&o&&(t.j41(0,"mat-error"),t.EFF(1,"Bio is "),t.j41(2,"strong"),t.EFF(3,"required"),t.k0s()())}function F(o,l){1&o&&(t.j41(0,"mat-error"),t.EFF(1,"Location is "),t.j41(2,"strong"),t.EFF(3,"required"),t.k0s()())}function h(o,l){if(1&o){const e=t.RV6();t.j41(0,"div",12)(1,"mat-form-field",4),t.nrm(2,"input",16),t.k0s(),t.j41(3,"button",13),t.bIt("click",function(){const r=t.eBV(e).$index,m=t.XpG();return t.Njj(m.removeLink(r))}),t.EFF(4,"Remove"),t.k0s(),t.j41(5,"button",17),t.bIt("click",function(){const r=t.eBV(e).$index,m=t.XpG();return t.Njj(m.removeLink(r))}),t.j41(6,"mat-icon"),t.EFF(7,"clear"),t.k0s()()()}if(2&o){const e=l.$index;t.R7$(2),t.Y8G("formControlName",e)}}let P=(()=>{class o{constructor(){this.fb=(0,t.WQX)(n.ok),this.addressForm=this.fb.group({name:null,title:[null,n.k0.required],status:[null,n.k0.required],bio:[null,n.k0.required],address2:null,location:[null,n.k0.required],state:[null,n.k0.required],postalCode:[null,n.k0.compose([n.k0.required,n.k0.minLength(5),n.k0.maxLength(5)])],shipping:["free",n.k0.required],links:this.fb.array([this.fb.control("")])})}get links(){return this.addressForm.get("links")}addLink(){this.links.push(this.fb.control(""))}ngOnInit(){}removeLink(e){this.links.removeAt(e)}onSubmit(){alert("Thanks!")}static#t=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=t.VBU({type:o,selectors:[["app-edit"]],standalone:!0,features:[t.aNF],decls:47,vars:5,consts:[["novalidate","",3,"ngSubmit","formGroup"],[1,"shipping-card"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","Title","formControlName","title"],["matInput","","placeholder","Status","formControlName","status"],["matSuffix",""],["matInput","","placeholder","Bio","formControlName","bio"],["matInput","","placeholder","Location","formControlName","location"],["formArrayName","links"],[1,"link-input"],["mat-stroked-button","","type","button",3,"click"],["align","end"],["mat-flat-button","","color","primary","type","submit"],["matInput","","type","text","placeholder","Enter link (URL)",3,"formControlName"],["mat-icon-button","","type","button",3,"click"]],template:function(a,r){1&a&&(t.j41(0,"h1"),t.EFF(1,"Edit your profile"),t.k0s(),t.j41(2,"form",0),t.bIt("ngSubmit",function(){return r.onSubmit()}),t.j41(3,"mat-card",1)(4,"mat-card-content")(5,"div",2)(6,"div",3)(7,"mat-form-field",4),t.nrm(8,"input",5),t.k0s()()(),t.j41(9,"div",2)(10,"div",3)(11,"mat-form-field",4),t.nrm(12,"input",6),t.DNE(13,k,4,0,"mat-error"),t.k0s()(),t.j41(14,"div",3)(15,"mat-form-field",4),t.nrm(16,"input",7),t.DNE(17,C,4,0,"mat-error"),t.j41(18,"mat-icon",8),t.EFF(19,"place"),t.k0s()()()(),t.j41(20,"div",2)(21,"div",3)(22,"mat-form-field",4),t.nrm(23,"textarea",9),t.DNE(24,g,4,0,"mat-error"),t.k0s()()(),t.j41(25,"div",2),t.nrm(26,"div",3),t.k0s(),t.j41(27,"div",2)(28,"div",3)(29,"mat-form-field",4),t.nrm(30,"input",10),t.DNE(31,F,4,0,"mat-error"),t.j41(32,"mat-icon",8),t.EFF(33,"place"),t.k0s()()(),t.nrm(34,"div",3),t.k0s(),t.j41(35,"div",2)(36,"div",3)(37,"div",11),t.Z7z(38,h,8,1,"div",12,t.fX1),t.k0s(),t.j41(40,"button",13),t.bIt("click",function(){return r.addLink()}),t.j41(41,"mat-icon"),t.EFF(42,"add_link"),t.k0s(),t.EFF(43," Add Link"),t.k0s()()()(),t.j41(44,"mat-card-actions",14)(45,"button",15),t.EFF(46,"Submit"),t.k0s()()()()),2&a&&(t.R7$(2),t.Y8G("formGroup",r.addressForm),t.R7$(11),t.vxM(r.addressForm.controls.title.hasError("required")?13:-1),t.R7$(4),t.vxM(r.addressForm.controls.status.hasError("required")?17:-1),t.R7$(7),t.vxM(r.addressForm.controls.bio.hasError("required")?24:-1),t.R7$(7),t.vxM(r.addressForm.controls.location.hasError("required")?31:-1),t.R7$(7),t.Dyx(r.links.controls))},dependencies:[f.fS,f.fg,u.rl,u.TL,u.yw,d.Hl,d.$z,d.iY,E.Ve,c.m_,c.An,p.Wk,s.Hu,s.RN,s.YY,s.m2,n.X1,n.qT,n.me,n.BC,n.cb,n.j4,n.JD,n.v8],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.link-input[_ngcontent-%COMP%]{display:flex;align-items:baseline}.link-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:.4em}"]})}return o})()}}]);