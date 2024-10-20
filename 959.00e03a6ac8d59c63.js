"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[959],{60959:(P,m,n)=>{n.r(m),n.d(m,{SettingsComponent:()=>G});var d=n(10467),t=n(54438);class h{constructor(){this.state=(0,t.vPA)({})}select(o){return(0,t.EWP)(()=>this.state()[o])}set(o,s){this.state.update(i=>({...i,[o]:s}))}setState(o){this.state.update(s=>({...s,...o}))}}let u=(()=>{class e extends h{constructor(){super()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac})}}return e})();var k=n(88834),a=n(3902),F=n(99213),g=n(30046),p=n(37064),E=n(60177),v=n(36815),l=n(25596);const f=()=>["connections"],y=()=>["roles"],j=()=>["blocks"],b=()=>["notifications"],R=()=>["debug"],S=()=>["about"],D=()=>["licenses"],C=()=>["privacy"],$=()=>["/storage"];function L(e,o){if(1&e&&(t.j41(0,"mat-list-item")(1,"mat-icon",2),t.EFF(2,"hub"),t.k0s(),t.j41(3,"div",8),t.EFF(4),t.k0s()()),2&e){const s=o.$implicit;t.R7$(4),t.JRh(s)}}function J(e,o){if(1&e&&(t.j41(0,"mat-list")(1,"div",0),t.EFF(2),t.k0s(),t.Z7z(3,L,5,1,"mat-list-item",null,t.fX1),t.k0s()),2&e){const s=o.$implicit;t.R7$(2),t.JRh(s.type),t.R7$(),t.Dyx(s.serviceEndpoint)}}function Y(e,o){if(1&e&&(t.j41(0,"p"),t.Z7z(1,J,5,1,"mat-list",null,t.fX1),t.k0s(),t.j41(3,"mat-card")(4,"mat-card-content"),t.EFF(5," You can rent DWeb Nodes or host your own. Check out our "),t.j41(6,"a",7),t.EFF(7,"Storage options"),t.k0s(),t.EFF(8," to upgrade your node. "),t.k0s()()),2&e){const s=t.XpG();t.R7$(),t.Dyx(s.nodes()),t.R7$(5),t.Y8G("routerLink",t.lJ4(1,$))}}let G=(()=>{class e{constructor(s){this.settingsState=s,this.debug=this.settingsState.select("debug"),this.identity=(0,t.WQX)(p.K),this.layout=(0,t.WQX)(v.Y),this.document=(0,t.vPA)(void 0),this.nodes=(0,t.vPA)([]),this.settings=this.settingsState.state.asReadonly(),this.layout.marginOn(),this.layout.resetActions(),(0,t.QZP)(()=>{this.identity.initialized()&&this.loadDIDDocument()})}loadDIDDocument(){var s=this;return(0,d.A)(function*(){const i=yield s.identity.web5.did.resolve(s.identity.did);s.document.set(i);let r=i.didDocument?.service?.filter(c=>"DecentralizedWebNode"===c.type);s.nodes.set(r)})()}toggleDebug(){this.settingsState.setState({debug:!this.settings().debug})}static{this.\u0275fac=function(i){return new(i||e)(t.rXU(u))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-settings"]],standalone:!0,features:[t.Jv_([u]),t.aNF],decls:57,vars:17,consts:[["mat-subheader",""],["mat-list-item","",3,"routerLink"],["matListItemIcon",""],["mat-list-item","","href","https://help.ariton.app","target","_blank"],["mat-list-item","","href","https://ariton.app","target","_blank"],["mat-list-item","","href","https://github.com/block-core/ariton/releases","target","_blank"],["mat-list-item","","href","https://github.com/block-core/ariton","target","_blank"],[3,"routerLink"],["matListItemTitle",""]],template:function(i,r){if(1&i&&(t.j41(0,"h1"),t.EFF(1,"Settings"),t.k0s(),t.DNE(2,Y,9,2),t.j41(3,"mat-nav-list")(4,"div",0),t.EFF(5,"Actions"),t.k0s(),t.j41(6,"a",1)(7,"mat-icon",2),t.EFF(8,"connect_without_contact"),t.k0s(),t.EFF(9," Manage Connections "),t.k0s(),t.j41(10,"a",1)(11,"mat-icon",2),t.EFF(12,"manage_accounts"),t.k0s(),t.EFF(13," Manage Roles "),t.k0s(),t.j41(14,"a",1)(15,"mat-icon",2),t.EFF(16,"block"),t.k0s(),t.EFF(17," Manage Blocks "),t.k0s(),t.j41(18,"a",1)(19,"mat-icon",2),t.EFF(20,"settings"),t.k0s(),t.EFF(21," Notifications Settings "),t.k0s(),t.j41(22,"a",1)(23,"mat-icon",2),t.EFF(24,"bug_report"),t.k0s(),t.EFF(25," Debug Tool "),t.k0s()(),t.j41(26,"mat-nav-list")(27,"div",0),t.EFF(28,"Information"),t.k0s(),t.j41(29,"a",1)(30,"mat-icon",2),t.EFF(31,"new_releases"),t.k0s(),t.EFF(32," About "),t.k0s(),t.j41(33,"a",3)(34,"mat-icon",2),t.EFF(35,"help"),t.k0s(),t.EFF(36," Help "),t.k0s(),t.j41(37,"a",1)(38,"mat-icon",2),t.EFF(39,"description"),t.k0s(),t.EFF(40," Third Party Licenses "),t.k0s(),t.j41(41,"a",1)(42,"mat-icon",2),t.EFF(43,"privacy_tip"),t.k0s(),t.EFF(44," Privacy Policy "),t.k0s(),t.j41(45,"a",4)(46,"mat-icon",2),t.EFF(47,"public"),t.k0s(),t.EFF(48," Ariton Website "),t.k0s(),t.j41(49,"a",5)(50,"mat-icon",2),t.EFF(51,"update"),t.k0s(),t.EFF(52," Release 0.0.2 "),t.k0s(),t.j41(53,"a",6)(54,"mat-icon",2),t.EFF(55,"code"),t.k0s(),t.EFF(56," Source Code "),t.k0s()()),2&i){let c;t.R7$(2),t.vxM(null!=(c=r.document())&&null!=c.didDocument&&c.didDocument.service?2:-1),t.R7$(4),t.Y8G("routerLink",t.lJ4(9,f)),t.R7$(4),t.Y8G("routerLink",t.lJ4(10,y)),t.R7$(4),t.Y8G("routerLink",t.lJ4(11,j)),t.R7$(4),t.Y8G("routerLink",t.lJ4(12,b)),t.R7$(4),t.Y8G("routerLink",t.lJ4(13,R)),t.R7$(7),t.Y8G("routerLink",t.lJ4(14,S)),t.R7$(8),t.Y8G("routerLink",t.lJ4(15,D)),t.R7$(4),t.Y8G("routerLink",t.lJ4(16,C))}},dependencies:[l.Hu,l.RN,l.m2,E.MD,k.Hl,a.Fg,a.jt,a._L,a.YE,a.ZV,a.EI,a.yE,F.m_,F.An,g.Wk],styles:[".selectable-list-item[_ngcontent-%COMP%]{cursor:pointer}.selectable-list-item[_ngcontent-%COMP%]:hover{background-color:var(--mdc-list-list-item-leading-avatar-color)}"],changeDetection:0})}}return e})()}}]);