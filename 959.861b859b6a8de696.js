"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[959],{60959:(E,c,a)=>{a.r(c),a.d(c,{SettingsComponent:()=>d});var t=a(93953);class F{constructor(){this.state=(0,t.vPA)({})}select(o){return(0,t.EWP)(()=>this.state()[o])}set(o,s){this.state.update(n=>({...n,[o]:s}))}setState(o){this.state.update(s=>({...s,...o}))}}let l=(()=>{class e extends F{constructor(){super()}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac})}return e})();var u=a(88834),i=a(3902),g=a(99213),m=a(18498);const h=()=>["handler"],k=()=>["about"],p=()=>["licenses"],b=()=>["privacy"];let d=(()=>{class e{constructor(s){this.settingsState=s,this.debug=this.settingsState.select("debug"),this.settings=this.settingsState.state.asReadonly()}toggleDebug(){this.settingsState.setState({debug:!this.settings().debug})}static#t=this.\u0275fac=function(n){return new(n||e)(t.rXU(l))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-settings"]],standalone:!0,features:[t.Jv_([l]),t.aNF],decls:46,vars:11,consts:[["mat-flat-button","",3,"click"],["mat-subheader",""],["mat-list-item","",3,"routerLink"],["matListItemIcon",""],["mat-list-item","","href","https://ariton.app","target","_blank"],["mat-list-item","","href","https://github.com/block-core/ariton/releases","target","_blank"],["mat-list-item","","href","https://github.com/block-core/ariton","target","_blank"]],template:function(n,r){1&n&&(t.j41(0,"h1"),t.EFF(1,"Settings"),t.k0s(),t.nrm(2,"br"),t.EFF(3),t.nrm(4,"br"),t.EFF(5),t.nrm(6,"br"),t.EFF(7),t.nrm(8,"br")(9,"br"),t.j41(10,"button",0),t.bIt("click",function(){return r.toggleDebug()}),t.EFF(11,"Toggle debug"),t.k0s(),t.j41(12,"mat-nav-list")(13,"div",1),t.EFF(14,"Other Actions"),t.k0s(),t.j41(15,"a",2)(16,"mat-icon",3),t.EFF(17,"search"),t.k0s(),t.EFF(18," Register Protocol Handler "),t.k0s()(),t.j41(19,"mat-nav-list")(20,"div",1),t.EFF(21,"Information"),t.k0s(),t.j41(22,"a",2)(23,"mat-icon",3),t.EFF(24,"new_releases"),t.k0s(),t.EFF(25," About "),t.k0s(),t.j41(26,"a",2)(27,"mat-icon",3),t.EFF(28,"description"),t.k0s(),t.EFF(29," Third Party Licenses "),t.k0s(),t.j41(30,"a",2)(31,"mat-icon",3),t.EFF(32,"privacy_tip"),t.k0s(),t.EFF(33," Privacy Policy "),t.k0s(),t.j41(34,"a",4)(35,"mat-icon",3),t.EFF(36,"public"),t.k0s(),t.EFF(37," Ariton Website "),t.k0s(),t.j41(38,"a",5)(39,"mat-icon",3),t.EFF(40,"update"),t.k0s(),t.EFF(41," Release 0.0.1 "),t.k0s(),t.j41(42,"a",6)(43,"mat-icon",3),t.EFF(44,"code"),t.k0s(),t.EFF(45," Source Code "),t.k0s()()),2&n&&(t.R7$(3),t.SpI("\nDebug: ",r.settings().debug,"\n"),t.R7$(2),t.SpI("\nServers: ",r.settings().servers,"\n"),t.R7$(2),t.SpI("\nLanguage: ",r.settings().language,"\n"),t.R7$(8),t.Y8G("routerLink",t.lJ4(7,h)),t.R7$(7),t.Y8G("routerLink",t.lJ4(8,k)),t.R7$(4),t.Y8G("routerLink",t.lJ4(9,p)),t.R7$(4),t.Y8G("routerLink",t.lJ4(10,b)))},dependencies:[u.Hl,u.$z,i.Fg,i._L,i.YE,i.ZV,i.EI,g.m_,g.An,m.Wk],styles:[".selectable-list-item[_ngcontent-%COMP%]{cursor:pointer}.selectable-list-item[_ngcontent-%COMP%]:hover{background-color:var(--mdc-list-list-item-leading-avatar-color)}"],changeDetection:0})}return e})()}}]);