"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[12],{88012:(R,_,o)=>{o.r(_),o.d(_,{PasswordComponent:()=>F});var u=o(10467),t=o(93953),m=o(88834),r=o(89417),c=o(9183),l=o(53719),f=o(99631),E=o(99213),p=o(25596),w=o(86100),v=o(67402),P=o(18498);function h(n,i){1&n&&(t.j41(0,"h1"),t.EFF(1,"Change your password"),t.k0s())}function g(n,i){1&n&&(t.j41(0,"h1"),t.EFF(1,"Set your password"),t.k0s())}function C(n,i){if(1&n&&(t.j41(0,"mat-form-field",1)(1,"mat-label"),t.EFF(2,"Enter your old password"),t.k0s(),t.nrm(3,"input",2),t.k0s(),t.nrm(4,"br")),2&n){const s=t.XpG();t.R7$(3),t.Y8G("formControl",s.passwordInputPrevious)}}function M(n,i){1&n&&t.nrm(0,"mat-spinner",4)}function I(n,i){1&n&&(t.j41(0,"span"),t.EFF(1,"Save new password"),t.k0s())}function D(n,i){1&n&&(t.j41(0,"mat-error"),t.EFF(1,"Password is "),t.j41(2,"strong"),t.EFF(3,"invalid"),t.k0s()())}let F=(()=>{class n{constructor(s,a,e){this.appService=s,this.identityService=a,this.router=e,this.passwordInputPrevious=new r.MJ("",r.k0.required),this.passwordInput=new r.MJ("",r.k0.required),this.passwordInputRepeat=new r.MJ("",r.k0.required),this.reset=(0,t.EWP)(()=>this.appService.account().passwordHash),this.unlocking=(0,t.vPA)(!1),this.invalidPassword=(0,t.vPA)(!1)}ngOnLoad(){return(0,u.A)(function*(){})()}changePassword(s,a,e){var d=this;return(0,u.A)(function*(){if(a!=e)throw new Error("Passwords do not match");s||(s="insecure-static-phrase"),yield d.identityService.changePassword(s,a),d.appService.account().password=void 0,d.appService.account().passwordHash="123",d.appService.saveAccounts(),console.log("Password changed")})()}onSubmit(){var s=this;return(0,u.A)(function*(){if(s.unlocking.set(!0),s.passwordInput.value!==s.passwordInputRepeat.value)throw s.invalidPassword.set(!0),s.unlocking.set(!1),console.error("Passwords do not match"),new Error("Passwords do not match");try{let a="";a=s.reset()?s.passwordInputPrevious.value:s.appService.account().password,yield s.changePassword(a,s.passwordInput.value,s.passwordInputRepeat.value)}catch(a){return console.error(a),s.invalidPassword.set(!0),void s.unlocking.set(!1)}s.invalidPassword.set(!1),s.unlocking.set(!1),s.router.navigate(["/account","did:dht:umj7apgmkodtrb7mdpjo4h7xinqdnatzgy38j7wi67k9c7sdns1o"])})()}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(w.d),t.rXU(v.K),t.rXU(P.Ix))};static#s=this.\u0275cmp=t.VBU({type:n,selectors:[["app-password"]],standalone:!0,features:[t.aNF],decls:28,vars:7,consts:[[3,"ngSubmit"],["appearance","outline",1,"full-width"],["matInput","","type","password",3,"formControl"],["mat-flat-button","","type","submit","color","primary",3,"disabled"],["diameter","20"],["appearance","outlined"]],template:function(a,e){1&a&&(t.DNE(0,h,2,0,"h1")(1,g,2,0,"h1"),t.j41(2,"form",0),t.bIt("ngSubmit",function(){return e.onSubmit()}),t.DNE(3,C,5,1),t.j41(4,"mat-form-field",1)(5,"mat-label"),t.EFF(6,"Enter your new password"),t.k0s(),t.nrm(7,"input",2),t.k0s(),t.nrm(8,"br"),t.j41(9,"mat-form-field",1)(10,"mat-label"),t.EFF(11,"Repeat your new password"),t.k0s(),t.nrm(12,"input",2),t.k0s(),t.EFF(13," \xa0 "),t.j41(14,"button",3),t.DNE(15,M,1,0,"mat-spinner",4)(16,I,2,0,"span"),t.k0s(),t.j41(17,"p"),t.DNE(18,D,4,0,"mat-error"),t.k0s(),t.j41(19,"mat-card",5)(20,"mat-card-content")(21,"strong"),t.EFF(22,"WARNING:"),t.k0s(),t.EFF(23," If you forget this password, "),t.j41(24,"strong"),t.EFF(25,"your account and all data will be lost."),t.k0s(),t.j41(26,"p"),t.EFF(27," It is impossible for anyone else, even us, to recover your account if you forget your password. We suggest you write it down and store it in a safe place."),t.k0s()()()()),2&a&&(t.vxM(e.reset()?0:1),t.R7$(3),t.vxM(e.reset()?3:-1),t.R7$(4),t.Y8G("formControl",e.passwordInput),t.R7$(5),t.Y8G("formControl",e.passwordInputRepeat),t.R7$(2),t.Y8G("disabled",!(e.passwordInput.valid&&!e.unlocking())),t.R7$(),t.vxM(e.unlocking()?15:16),t.R7$(3),t.vxM(e.invalidPassword()?18:-1))},dependencies:[p.Hu,p.RN,p.m2,r.YN,r.qT,r.me,r.BC,r.cb,r.cV,c.D6,c.LG,r.X1,r.l_,l.RG,l.rl,l.nJ,l.TL,f.fS,f.fg,m.Hl,m.$z,E.m_],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]})}return n})()}}]);