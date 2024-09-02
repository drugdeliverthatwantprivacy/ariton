"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4779],{67160:(W,_,r)=>{r.r(_),r.d(_,{ConnectionsComponent:()=>L});var t=r(93953),l=r(81317),u=r(50296),m=r(60177),a=r(25596),s=r(88834),d=r(99213),p=r(30046),C=r(98703),f=r(60385);function g(e,c){1&e&&t.EFF(0," people ")}function y(e,c){1&e&&t.EFF(0," connect_without_contact ")}function E(e,c){if(1&e){const n=t.RV6();t.j41(0,"mat-card",0)(1,"mat-card-header")(2,"mat-icon",1),t.DNE(3,g,1,0)(4,y,1,0),t.k0s(),t.j41(5,"mat-card-title"),t.EFF(6," App: "),t.j41(7,"span",2),t.EFF(8),t.k0s()(),t.j41(9,"mat-card-subtitle"),t.EFF(10,"Type: "),t.j41(11,"span",2),t.EFF(12),t.k0s(),t.EFF(13),t.nI1(14,"ago"),t.k0s()(),t.j41(15,"mat-card-content")(16,"div",3),t.EFF(17),t.k0s(),t.nrm(18,"app-profile-header",4),t.k0s(),t.j41(19,"mat-card-actions")(20,"button",5),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.deleteConnection(o.entry))}),t.EFF(21,"DELETE"),t.k0s(),t.EFF(22,"\xa0 "),t.j41(23,"button",5),t.bIt("click",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.block(o.entry))}),t.EFF(24,"BLOCK"),t.k0s()()()}if(2&e){const n=t.XpG();t.R7$(3),t.vxM("friend"==n.entry.record.tags.type?3:4),t.R7$(5),t.JRh(n.entry.data.app),t.R7$(4),t.JRh(n.entry.record.tags.type),t.R7$(),t.SpI(" (",t.bMT(14,8,n.entry.record.dateCreated),")"),t.R7$(4),t.SpI("Title: ",n.entry.data.title,""),t.R7$(),t.Y8G("did",n.entry.record.recipient),t.R7$(2),t.Y8G("disabled",n.entry.loading),t.R7$(3),t.Y8G("disabled",n.entry.loading)}}let R=(()=>{class e{constructor(){this.entry=void 0,this.connection=(0,t.WQX)(l.K),this.app=(0,t.WQX)(u.d)}deleteConnection(n){n.loading=!0,this.connection.deleteConnection(n),"credential"===n.record.tags.type&&this.connection.removeFriendship(n)}block(n){n.loading=!0,console.log("Blocking user",n),this.connection.block(n.record.recipient)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-connection"]],inputs:{entry:"entry"},standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[["appearance","outlined",1,"card-notification"],["inline","true","mat-card-avatar","",1,"card-icon"],[1,"capitalize"],[1,"notification-description"],[3,"did"],["mat-button","",3,"click","disabled"]],template:function(i,o){1&i&&t.DNE(0,E,25,10,"mat-card",0),2&i&&t.vxM(o.entry?0:-1)},dependencies:[f.w,C.g,m.MD,a.Hu,a.RN,a.YY,a.QG,a.m2,a.MM,a.Lc,a.dh,s.Hl,s.$z,d.m_,d.An,p.iI],styles:[".card-icon[_ngcontent-%COMP%]{font-size:3em}.card-notification[_ngcontent-%COMP%]{margin-bottom:1em}.notifications-title[_ngcontent-%COMP%]{display:flex;width:100%}.notifications-card[_ngcontent-%COMP%]{max-width:600px;width:100%}.card-notification[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.notification-description[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})();var F=r(10467),x=r(34635),b=r(58249);function k(e,c){1&e&&t.EFF(0," people ")}function M(e,c){1&e&&t.EFF(0," connect_without_contact ")}function T(e,c){1&e&&t.EFF(0," Friend Request ")}function j(e,c){1&e&&t.EFF(0," Connect Request ")}function v(e,c){1&e&&t.EFF(0," This user wants to be your friend, do you accept? This will give them access to send you sharing requets, such as shared Tasks, collabrative apps and more. ")}function G(e,c){if(1&e&&(t.EFF(0," This is a data sharing request. Do you want to accept? "),t.j41(1,"p"),t.EFF(2," App: "),t.j41(3,"span",2),t.EFF(4),t.k0s(),t.nrm(5,"br"),t.EFF(6),t.k0s()),2&e){const n=t.XpG(2);t.R7$(4),t.JRh(n.entry.data.app),t.R7$(2),t.SpI("Title: ",n.entry.data.title," ")}}function $(e,c){1&e&&t.EFF(0," Shared Credential. This will be automatically processed. ")}function O(e,c){1&e&&t.nrm(0,"br")}function P(e,c){if(1&e&&t.nrm(0,"app-profile-header",4),2&e){const n=t.XpG(2);t.Y8G("did",n.entry.record.recipient)}}function N(e,c){if(1&e&&t.nrm(0,"app-profile-header",4),2&e){const n=t.XpG(2);t.Y8G("did",n.entry.record.author)}}function X(e,c){}function q(e,c){if(1&e){const n=t.RV6();t.j41(0,"button",5),t.EFF(1,"PENDING"),t.k0s(),t.EFF(2,"\xa0 "),t.j41(3,"button",6),t.bIt("click",function(){t.eBV(n);const o=t.XpG(3);return t.Njj(o.reject(o.entry))}),t.EFF(4,"CANCEL"),t.k0s()}if(2&e){const n=t.XpG(3);t.Y8G("disabled",!0),t.R7$(3),t.Y8G("disabled",n.entry.loading)}}function D(e,c){if(1&e){const n=t.RV6();t.j41(0,"button",7),t.bIt("click",function(){t.eBV(n);const o=t.XpG(3);return t.Njj(o.accept(o.entry))}),t.EFF(1,"ACCEPT"),t.k0s(),t.EFF(2,"\xa0 "),t.j41(3,"button",6),t.bIt("click",function(){t.eBV(n);const o=t.XpG(3);return t.Njj(o.reject(o.entry))}),t.EFF(4,"DELETE"),t.k0s(),t.EFF(5,"\xa0 "),t.j41(6,"button",6),t.bIt("click",function(){t.eBV(n);const o=t.XpG(3);return t.Njj(o.block(o.entry))}),t.EFF(7,"BLOCK"),t.k0s()}if(2&e){const n=t.XpG(3);t.Y8G("disabled",n.entry.loading),t.R7$(3),t.Y8G("disabled",n.entry.loading),t.R7$(3),t.Y8G("disabled",n.entry.loading)}}function I(e,c){if(1&e&&(t.j41(0,"mat-card-actions"),t.DNE(1,q,5,2)(2,D,8,3),t.k0s()),2&e){const n=t.XpG(2);t.R7$(),t.vxM("out"==n.entry.direction?1:2)}}function Y(e,c){if(1&e&&(t.j41(0,"mat-card",0)(1,"mat-card-header")(2,"mat-icon",1),t.DNE(3,k,1,0)(4,M,1,0),t.k0s(),t.j41(5,"mat-card-title"),t.DNE(6,T,1,0)(7,j,1,0),t.k0s(),t.j41(8,"mat-card-subtitle"),t.EFF(9,"Type: "),t.j41(10,"span",2),t.EFF(11),t.k0s(),t.EFF(12),t.nI1(13,"ago"),t.k0s()(),t.j41(14,"mat-card-content")(15,"div",3),t.DNE(16,v,1,0)(17,G,7,2,"p")(18,$,1,0)(19,O,1,0,"br"),t.k0s(),t.DNE(20,P,1,1,"app-profile-header",4)(21,N,1,1,"app-profile-header",4),t.k0s(),t.DNE(22,X,0,0)(23,I,3,1,"mat-card-actions"),t.k0s()),2&e){const n=t.XpG();t.R7$(3),t.vxM("friend"==n.entry.record.tags.type?3:4),t.R7$(3),t.vxM("friend"==n.entry.record.tags.type?6:7),t.R7$(5),t.JRh(n.entry.record.tags.type),t.R7$(),t.SpI(" (",t.bMT(13,7,n.entry.record.dateCreated),")"),t.R7$(4),t.vxM("friend"==n.entry.record.tags.type?16:"data"==n.entry.record.tags.type?17:"credential"==n.entry.record.tags.type?18:19),t.R7$(4),t.vxM("out"==n.entry.direction?20:21),t.R7$(2),t.vxM("credential"==n.entry.record.tags.type?22:23)}}let B=(()=>{class e{constructor(){this.entry=void 0,this.connection=(0,t.WQX)(l.K),this.friend=(0,t.WQX)(b.K),this.identity=(0,t.WQX)(x.K),this.app=(0,t.WQX)(u.d)}deleteConnection(n){n.loading=!0,this.connection.deleteConnection(n)}accept(n){var i=this;return(0,F.A)(function*(){n.loading=!0,console.log("Accepting connection request",n),n.data.did=n.record.author;const o=n.record.tags.type;if(o==l.X.Friend){const h=yield i.friend.accept(n);n.data.vc=h?.data.vc,n.data.recordId=h?.id}yield i.connection.create(n,o),yield i.connection.deleteRequest(n)})()}block(n){var i=this;return(0,F.A)(function*(){n.loading=!0,console.log("Blocking user",n);const o=yield i.connection.block(n.record.author);console.log("Block result: ",o),yield i.connection.deleteConnections(n.record.author),yield i.connection.deleteRequests(n.record.author)})()}reject(n){n.loading=!0,this.connection.deleteRequest(n)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-request"]],inputs:{entry:"entry"},standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[["appearance","outlined",1,"card-notification"],["inline","true","mat-card-avatar","",1,"card-icon"],[1,"capitalize"],[1,"notification-description"],[3,"did"],["mat-flat-button","",3,"disabled"],["mat-button","",3,"click","disabled"],["mat-flat-button","",3,"click","disabled"]],template:function(i,o){1&i&&t.DNE(0,Y,24,9,"mat-card",0),2&i&&t.vxM(o.entry?0:-1)},dependencies:[f.w,C.g,m.MD,a.Hu,a.RN,a.YY,a.QG,a.m2,a.MM,a.Lc,a.dh,s.Hl,s.$z,d.m_,d.An,p.iI],styles:[".card-icon[_ngcontent-%COMP%]{font-size:3em}.card-notification[_ngcontent-%COMP%]{margin-bottom:1em}.notifications-title[_ngcontent-%COMP%]{display:flex;width:100%}.notifications-card[_ngcontent-%COMP%]{max-width:600px;width:100%}.card-notification[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.notification-description[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})();const A=()=>["..","blocks"];function V(e,c){1&e&&t.nrm(0,"app-request",1),2&e&&t.Y8G("entry",c.$implicit)}function w(e,c){1&e&&t.EFF(0," No requests found. ")}function Q(e,c){1&e&&t.nrm(0,"app-connection",1),2&e&&t.Y8G("entry",c.$implicit)}function z(e,c){1&e&&t.EFF(0," No connections found. ")}let L=(()=>{class e{constructor(){this.connection=(0,t.WQX)(l.K),this.app=(0,t.WQX)(u.d)}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-connections"]],standalone:!0,features:[t.aNF],decls:26,vars:4,consts:[[1,"notifications-card"],[3,"entry"],[3,"routerLink"]],template:function(i,o){1&i&&(t.j41(0,"h1"),t.EFF(1,"Connections Management"),t.k0s(),t.j41(2,"mat-card",0)(3,"mat-card-header")(4,"mat-card-title"),t.EFF(5,"Requests"),t.k0s()(),t.j41(6,"mat-card-content")(7,"p"),t.Z7z(8,V,1,1,"app-request",1,t.fX1,!1,w,1,0),t.k0s()()(),t.nrm(11,"br"),t.j41(12,"mat-card",0)(13,"mat-card-header")(14,"mat-card-title"),t.EFF(15,"Connections"),t.k0s()(),t.j41(16,"mat-card-content")(17,"p"),t.Z7z(18,Q,1,1,"app-connection",1,t.fX1,!1,z,1,0),t.k0s()()(),t.j41(21,"p"),t.EFF(22,"Missing requests? Make sure you have not "),t.j41(23,"a",2),t.EFF(24,"blocked"),t.k0s(),t.EFF(25," the request."),t.k0s()),2&i&&(t.R7$(8),t.Dyx(o.connection.requests()),t.R7$(10),t.Dyx(o.connection.connections()),t.R7$(5),t.Y8G("routerLink",t.lJ4(3,A)))},dependencies:[B,R,m.MD,a.Hu,a.RN,a.m2,a.MM,a.dh,s.Hl,d.m_,p.iI,p.Wk],styles:[".card-icon[_ngcontent-%COMP%]{font-size:3em}.card-notification[_ngcontent-%COMP%]{margin-bottom:1em}.notifications-title[_ngcontent-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.notifications-card[_ngcontent-%COMP%]{max-width:600px;width:100%}.card-notification[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.notification-description[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})()}}]);