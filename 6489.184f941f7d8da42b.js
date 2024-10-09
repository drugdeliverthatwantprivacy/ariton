"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6489],{58249:(W,x,a)=>{a.d(x,{K:()=>O});var f=a(10467),t=a(54438),R=a(34635),D=a(5363),k=a(69371),v=a(76336),P=a(22312),T=a(81317),b=a(68530);let O=(()=>{class y{constructor(){this.requests=(0,t.vPA)([]),this.friends=(0,t.vPA)([]),this.identity=(0,t.WQX)(R.K),this.connection=(0,t.WQX)(T.K),this.app=(0,t.WQX)(D.d)}createRequest(s){var c=this;return(0,f.A)(function*(){const u=yield v.l6.create({type:"FriendshipCredential",issuer:c.identity.did,subject:s,data:null});console.log("VC:",u);const g=yield c.identity.activeAgent().identity.get({didUri:c.identity.did}),m=yield u.sign({did:g.did});return console.log("VC JWT:",m),{record:(yield c.connection.request(s,{app:"friends",title:"I want to be your friend.",vc:m},T.X.Friend)).record}})()}accept(s){var c=this;return(0,f.A)(function*(){const u=s.data.vc;if(!u)throw new Error("The incoming VC is missing.");if(console.log("signedVcJwt:",u),!u)return;try{yield v.l6.verify({vcJwt:u})}catch($){return void console.error("Error verifying VC:",$)}const g=v.l6.parseJwt({vcJwt:u}),m=g.issuer;if(g.issuer!=s.record.creator)return void console.error("VC issuer is different than data record author");console.log("Friend request validated");const F=yield v.l6.create({type:P.eE.friendship,issuer:c.identity.did,subject:m,data:{vc:u}});console.log("TWO WAY VC:",F);const r=yield c.identity.activeAgent().identity.get({didUri:c.identity.did}),C=yield F.sign({did:r.did});console.log("TWO WAY VC JWT:",C);const{record:l}=yield c.identity.web5.dwn.records.create({data:C,message:{schema:P.eE.friendship,dataFormat:P.eE.format,published:!1}});console.log("TWO WAY VC RECORD:",l),l.send(c.identity.did);const d={title:s.data.title,vc:C,app:"friends"},E={type:T.X.Credential};console.log("SENDING FRIEND REQUEST TO TARGET:",m);const{status:A,record:I}=yield c.identity.web5.dwn.records.create({data:d,store:!1,message:{tags:E,recipient:m,protocol:b.Q.protocol,protocolPath:"request",schema:b.Q.types.request.schema,dataFormat:b.Q.types.request.dataFormats[0]}});console.log("Request create status:",A);const{status:B}=yield I.send(m);return console.log("SENT TO TARGET!!!",B),c.app.openSnackBar(202!==B.code?`Friend request failed.Code: ${B.code}, Details: ${B.detail}.`:"Friend request accepted"),{record:I,data:d,id:I.id}})()}reject(s){var c=this;return(0,f.A)(function*(){console.log("Rejecting request:",s);const u=s.record.recipient==c.identity.did?s.record.creator:s.record.recipient;console.log("Target DID:",u),console.log("this.identity.did:",c.identity.did),console.log("entry.record.recipient:",s.record.recipient),console.log("entry.record.author:",s.record.author),console.log("entry.record.creator:",s.record.creator);const{status:g}=yield s.record.delete(),{status:m}=yield s.record.send(u);console.log("Delete status:",g),console.log("deleteSendStatus:",m),c.requests.update(F=>F.filter(r=>r!==s))})()}processFriends(){var s=this;return(0,f.A)(function*(){var{records:c}=yield s.identity.web5.dwn.records.query({message:{filter:{protocol:P.iU.uri,schema:k.Q.types.credential.schema,dataFormat:k.Q.types.credential.dataFormats[0]}}});console.log("VC Records:",c);for(const u of c){console.log("Record:",u);const g=yield u.data.json();console.log("JSON:",g);try{yield v.l6.verify({vcJwt:g.vc})}catch(C){console.error("Error verifying VC:",C),console.log("THIS REQUEST SHOULD BE DELETED FROM DWN",u.id)}const m=v.l6.parseJwt({vcJwt:g.vc});console.log("PARSED INVCOMING VC:",m),console.log("vc.issuer === this.identity.did:",m.issuer===s.identity.did);const{record:F}=yield s.identity.web5.dwn.records.create({data:g.vc,message:{schema:P.eE.friendship,dataFormat:P.eE.format,published:!1}});console.log("TWO WAY VC RECORD:",F);const{status:r}=yield F.send(s.identity.did);console.log("Record sent:",r,F),yield u?.delete()}})()}loadFriends(){var s=this;return(0,f.A)(function*(){var{records:c}=yield s.identity.web5.dwn.records.query({message:{filter:{schema:P.eE.friendship,dataFormat:P.eE.format}}});if(console.log("Friend VCs:"),console.log(c),s.friends.set([]),c)for(const m of c){let F=yield m.data.text(),r=v.l6.parseJwt({vcJwt:F}),C=r.issuer;r.issuer==s.identity.did&&(C=v.l6.parseJwt({vcJwt:r.vcDataModel.credentialSubject.vc}).issuer);let l={record:m,data:{did:C}};s.friends.update(d=>[...d,l]),console.log("All friends:",s.friends())}})()}static#t=this.\u0275fac=function(c){return new(c||y)};static#e=this.\u0275prov=t.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})}return y})()},96489:(W,x,a)=>{a.r(x),a.d(x,{ProfileComponent:()=>ct});var f=a(10467),t=a(54438),R=a(88834),D=a(71997),k=a(99213),v=a(59115),P=a(30046),T=a(39434),b=a(96850),O=a(34635),y=a(78013),M=a(75351),s=a(51889),c=a(5363),u=a(60177),g=a(9183),m=a(29508),F=a(36815),r=a(58249),C=a(81317),l=a(25596),d=a(89417),E=a(99631),A=a(14823),I=a(53719);let B=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o,this.fb=(0,t.WQX)(d.ok),this.form=this.fb.group({body:[null,d.k0.required]})}ngAfterViewInit(){}onColorChange(e){var o=this;return(0,f.A)(function*(){o.data.background=e.target.value})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(M.CP),t.rXU(M.Vh))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-post-dialog"]],standalone:!0,features:[t.aNF],decls:11,vars:3,consts:[["body",""],["appearance","outline",1,"full-width"],["maxlength","1200","rows","6","matInput","","placeholder","Post",3,"ngModelChange","ngModel"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","type","submit","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(o,i){if(1&o){const p=t.RV6();t.j41(0,"mat-dialog-content")(1,"mat-form-field",1)(2,"textarea",2,0),t.mxI("ngModelChange",function(h){return t.eBV(p),t.DH7(i.data.body,h)||(i.data.body=h),t.Njj(h)}),t.k0s(),t.j41(4,"mat-hint",3),t.EFF(5),t.k0s()()(),t.j41(6,"mat-dialog-actions",3)(7,"button",4),t.EFF(8,"Cancel"),t.k0s(),t.j41(9,"button",5),t.EFF(10,"Post"),t.k0s()()}if(2&o){const p=t.sdS(3);t.R7$(2),t.R50("ngModel",i.data.body),t.R7$(3),t.SpI("",p.value.length," / 1200"),t.R7$(4),t.Y8G("mat-dialog-close",!0)}},dependencies:[u.MD,A.uc,v.Cn,k.m_,R.Hl,R.$z,E.fS,E.fg,I.rl,I.MV,M.hM,M.tx,M.E7,M.Yi,d.YN,d.me,d.BC,d.tU,d.vS],styles:["form[_ngcontent-%COMP%]{display:inline}"]})}return n})();var $=a(60385),X=a(98703),U=a(42745),N=a(345);const V=n=>["/app","chat",n],L=()=>["edit"],S=(n,_)=>["/profile",n,"posts",_];function Q(n,_){if(1&n&&(t.nrm(0,"img",4),t.nI1(1,"safeResourceUrl")),2&n){const e=t.XpG(2);t.Y8G("src",t.bMT(1,1,e.data().avatar),t.B4B)}}function J(n,_){1&n&&t.nrm(0,"img",5)}function K(n,_){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.SpI("(",e.data().profile.title,")")}}function Y(n,_){if(1&n){const e=t.RV6();t.j41(0,"button",22)(1,"mat-icon"),t.EFF(2,"chat_bubble"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Message"),t.k0s()(),t.j41(5,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.addFriend(i.data().did))}),t.j41(6,"mat-icon"),t.EFF(7,"person_add"),t.k0s(),t.j41(8,"span"),t.EFF(9,"Add Friend"),t.k0s()(),t.nrm(10,"mat-divider")}if(2&n){const e=t.XpG(2);t.Y8G("routerLink",t.eq3(1,V,e.data().did))}}function w(n,_){1&n&&(t.j41(0,"button",22)(1,"mat-icon"),t.EFF(2,"edit"),t.k0s(),t.j41(3,"span"),t.EFF(4,"Edit Profile"),t.k0s()(),t.nrm(5,"mat-divider")),2&n&&t.Y8G("routerLink",t.lJ4(1,L))}function H(n,_){if(1&n){const e=t.RV6();t.nrm(0,"mat-divider"),t.j41(1,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.block(i.data().did))}),t.j41(2,"mat-icon"),t.EFF(3,"block"),t.k0s(),t.j41(4,"span"),t.EFF(5,"Block"),t.k0s()()}}function z(n,_){1&n&&(t.j41(0,"mat-icon",23),t.EFF(1,"notes"),t.k0s(),t.j41(2,"span",24),t.EFF(3,"Posts"),t.k0s())}function Z(n,_){if(1&n){const e=t.RV6();t.j41(0,"mat-card",18)(1,"mat-card-header")(2,"div",25),t.nrm(3,"app-profile-header",26),t.j41(4,"button",27)(5,"mat-icon"),t.EFF(6,"more_vert"),t.k0s()(),t.j41(7,"mat-menu",null,1)(9,"button",11),t.bIt("click",function(){const i=t.eBV(e).$implicit,p=t.XpG(2);return t.Njj(p.editPost(i))}),t.j41(10,"mat-icon"),t.EFF(11,"edit"),t.k0s(),t.j41(12,"span"),t.EFF(13,"Edit post"),t.k0s()(),t.j41(14,"button",22)(15,"mat-icon"),t.EFF(16,"note"),t.k0s(),t.j41(17,"span"),t.EFF(18,"View post"),t.k0s()(),t.j41(19,"button",11),t.bIt("click",function(){const i=t.eBV(e).$implicit,p=t.XpG(2);return t.Njj(p.copyUrl(i))}),t.j41(20,"mat-icon"),t.EFF(21,"content_copy"),t.k0s(),t.j41(22,"span"),t.EFF(23,"Copy URL"),t.k0s()(),t.nrm(24,"mat-divider"),t.j41(25,"button",11),t.bIt("click",function(){const i=t.eBV(e).$implicit,p=t.XpG(2);return t.Njj(p.deletePost(i))}),t.j41(26,"mat-icon"),t.EFF(27,"delete"),t.k0s(),t.j41(28,"span"),t.EFF(29,"Delete post"),t.k0s()()()()(),t.j41(30,"mat-card-content")(31,"div",28)(32,"a",29),t.EFF(33),t.nI1(34,"ago"),t.k0s()(),t.j41(35,"div",30),t.EFF(36),t.k0s()()()}if(2&n){const e=_.$implicit,o=t.sdS(8);t.R7$(3),t.Y8G("did",e.record.creator),t.R7$(),t.Y8G("matMenuTriggerFor",o),t.R7$(10),t.Y8G("routerLink",t.l_i(8,S,e.record.creator,e.record.id)),t.R7$(18),t.Y8G("routerLink",t.l_i(11,S,e.record.creator,e.record.id)),t.R7$(),t.JRh(t.bMT(34,6,e.record.dateCreated)),t.R7$(3),t.JRh(e.data.body)}}function q(n,_){1&n&&(t.j41(0,"mat-icon",23),t.EFF(1,"badge"),t.k0s(),t.j41(2,"span",24),t.EFF(3,"About"),t.k0s())}function tt(n,_){if(1&n&&(t.j41(0,"mat-icon"),t.EFF(1,"event"),t.k0s(),t.j41(2,"span"),t.EFF(3),t.k0s()),2&n){const e=t.XpG(2);t.R7$(3),t.JRh(e.data().profile.birthDate)}}function et(n,_){if(1&n&&(t.j41(0,"mat-icon"),t.EFF(1,"place"),t.k0s(),t.j41(2,"span"),t.EFF(3),t.k0s()),2&n){const e=t.XpG(2);t.R7$(3),t.JRh(e.data().profile.location)}}function ot(n,_){if(1&n&&(t.j41(0,"mat-icon"),t.EFF(1,"event"),t.k0s(),t.j41(2,"span"),t.EFF(3),t.k0s()),2&n){const e=t.XpG(2);t.R7$(3),t.JRh(e.data().profile.status)}}function nt(n,_){if(1&n&&(t.j41(0,"mat-icon"),t.EFF(1,"link"),t.k0s(),t.EFF(2,"\xa0"),t.j41(3,"a",31),t.EFF(4),t.k0s(),t.EFF(5,"\xa0 ")),2&n){const e=_.$implicit;t.R7$(3),t.Y8G("href",e,t.B4B),t.R7$(),t.JRh(e)}}function it(n,_){if(1&n&&t.Z7z(0,nt,6,2,null,null,t.fX1),2&n){const e=t.XpG(2);t.Dyx(e.data().profile.links)}}function at(n,_){if(1&n&&(t.j41(0,"div",21),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.SpI(" ",e.data().profile.bio," ")}}function rt(n,_){1&n&&(t.j41(0,"mat-icon",23),t.EFF(1,"diversity_2"),t.k0s(),t.j41(2,"span",24),t.EFF(3,"Communities"),t.k0s())}function st(n,_){1&n&&(t.j41(0,"mat-icon",23),t.EFF(1,"folder_shared"),t.k0s(),t.j41(2,"span",24),t.EFF(3,"Data"),t.k0s())}function lt(n,_){if(1&n){const e=t.RV6();t.j41(0,"div",3),t.DNE(1,Q,2,3,"img",4)(2,J,1,0,"img",5),t.j41(3,"div",6)(4,"h1"),t.EFF(5),t.DNE(6,K,2,1,"span"),t.k0s(),t.j41(7,"span",7),t.EFF(8),t.k0s()(),t.nrm(9,"div",8),t.j41(10,"div",9)(11,"button",10)(12,"mat-icon"),t.EFF(13,"more_vert"),t.k0s()(),t.j41(14,"mat-menu",null,0),t.DNE(16,Y,11,3)(17,w,6,2),t.j41(18,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.copyDID(i.data().did))}),t.j41(19,"mat-icon"),t.EFF(20,"content_copy"),t.k0s(),t.j41(21,"span"),t.EFF(22,"Copy DID"),t.k0s()(),t.j41(23,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.showQR(i.data().did))}),t.j41(24,"mat-icon"),t.EFF(25,"qr_code"),t.k0s(),t.j41(26,"span"),t.EFF(27,"Show QR"),t.k0s()(),t.j41(28,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.shareProfile(i.data()))}),t.j41(29,"mat-icon"),t.EFF(30,"send"),t.k0s(),t.j41(31,"span"),t.EFF(32,"Share Profile"),t.k0s()(),t.DNE(33,H,6,0),t.k0s()()(),t.j41(34,"div",12)(35,"mat-tab-group")(36,"mat-tab"),t.DNE(37,z,4,0,"ng-template",13),t.j41(38,"mat-card",14)(39,"mat-card-content")(40,"button",15),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.newPost())}),t.j41(41,"mat-icon"),t.EFF(42,"chat"),t.k0s(),t.EFF(43," Post "),t.k0s(),t.j41(44,"button",16)(45,"mat-icon"),t.EFF(46,"photo_library"),t.k0s(),t.EFF(47," Media "),t.k0s(),t.j41(48,"button",16)(49,"mat-icon"),t.EFF(50,"attach_file"),t.k0s(),t.EFF(51," File "),t.k0s()()(),t.j41(52,"div",17),t.Z7z(53,Z,37,14,"mat-card",18,t.fX1),t.k0s()(),t.j41(55,"mat-tab"),t.DNE(56,q,4,0,"ng-template",13),t.j41(57,"div",19)(58,"div",20),t.DNE(59,tt,4,1)(60,et,4,1)(61,ot,4,1)(62,it,2,0),t.k0s(),t.DNE(63,at,2,1,"div",21),t.k0s()(),t.j41(64,"mat-tab"),t.DNE(65,rt,4,0,"ng-template",13),t.EFF(66," Not implemented yet. "),t.k0s(),t.j41(67,"mat-tab"),t.DNE(68,st,4,0,"ng-template",13),t.EFF(69," Not implemented yet. "),t.k0s()()()}if(2&n){const e=t.sdS(15),o=t.XpG();t.R7$(),t.vxM(o.data().avatar?1:2),t.R7$(4),t.SpI(" ",o.data().profile.name," "),t.R7$(),t.vxM(o.data().profile.title?6:-1),t.R7$(2),t.JRh(o.data().did),t.R7$(3),t.Y8G("matMenuTriggerFor",e),t.R7$(5),t.vxM(o.data().did!==o.identity.did?16:-1),t.R7$(),t.vxM(o.data().did===o.identity.did?17:-1),t.R7$(16),t.vxM(o.identity.did!==o.data().did?33:-1),t.R7$(11),t.Y8G("disabled",!0),t.R7$(4),t.Y8G("disabled",!0),t.R7$(5),t.Dyx(o.posts()),t.R7$(6),t.vxM(o.data().profile.birthDate?59:-1),t.R7$(),t.vxM(o.data().profile.location?60:-1),t.R7$(),t.vxM(o.data().profile.status?61:-1),t.R7$(),t.vxM(o.data().profile.links&&o.data().profile.links.length>0?62:-1),t.R7$(),t.vxM(o.data().profile.bio?63:-1)}}function dt(n,_){1&n&&(t.j41(0,"div",2),t.nrm(1,"mat-spinner"),t.k0s())}let ct=(()=>{class n{ngOnDestroy(){URL.revokeObjectURL(this.avatarSrc)}constructor(e,o){var i=this;this.sanitizer=e,this.route=o,this.posts=(0,t.vPA)([]),this.profileService=(0,t.WQX)(T.p),this.identity=(0,t.WQX)(O.K),this.connection=(0,t.WQX)(C.K),this.app=(0,t.WQX)(c.d),this.layout=(0,t.WQX)(F.Y),this.friend=(0,t.WQX)(r.K),this.dialog=(0,t.WQX)(M.bZ),this.data=(0,t.vPA)(void 0),this.avatarSrc=null,this.layout.marginOff(),(0,t.QZP)((0,f.A)(function*(){i.app.initialized()&&i.route.paramMap.subscribe(function(){var p=(0,f.A)(function*(j){const h=j.get("id");h&&"undefined"!==h&&(i.did=h,console.log("USER ID SET!!",h),yield i.loadPosts(h),i.loadUserProfile(h))});return function(j){return p.apply(this,arguments)}}())}))}loadPosts(e){var o=this;return(0,f.A)(function*(){const i={from:e,message:{filter:{author:e,protocol:m.Q.protocol,protocolPath:"post",schema:m.Q.types.post.schema,dataFormat:m.Q.types.post.dataFormats[0]},dateSort:U.U0.CreatedDescending}};console.log("QUERY: ",i);var{records:p}=yield o.identity.web5.dwn.records.query(i);if(o.posts.set([]),p)for(const h of p){let G=yield h.data.json(),pt={record:h,data:G};o.posts.update(mt=>[...mt,pt])}console.log("All posts:",o.posts())})()}newPost(){this.editPost({data:{title:"",body:"",background:"",collaborators:[],labels:[]}})}editPost(e){var o=this;let i={title:e.data.title,body:e.data.body,background:e.data.background,collaborators:[],labels:[""]};const p=JSON.parse(JSON.stringify(i)),j=this.dialog.open(B,{maxWidth:"80vw",maxHeight:"80vh",data:i});return j.afterClosed().subscribe(function(){var h=(0,f.A)(function*(G){G?(console.log("data result for saving:",i),e.data=i,yield o.savePost(e,i)):i=p});return function(G){return h.apply(this,arguments)}}()),j.afterClosed()}deletePost(e){var o=this;return(0,f.A)(function*(){const{status:i}=yield e.record.delete();i&&o.posts.update(p=>p.filter(j=>j.record!=e.record))})()}savePost(e,o){var i=this;return(0,f.A)(function*(){if(e.record)e.record.tags.labels=o.labels,yield e.record.update({data:o,published:!0});else{const{record:p}=yield i.identity.web5.dwn.records.create({data:o,message:{published:!0,tags:{labels:o.labels},protocol:m.Q.protocol,protocolPath:"post",schema:m.Q.types.post.schema,dataFormat:m.Q.types.post.dataFormats[0]}});p&&(e.record=p,i.posts.update(h=>[e,...h]),yield e.record.send(i.identity.did))}})()}ngOnInit(){return(0,f.A)(function*(){})()}loadData(){return(0,f.A)(function*(){})()}addFriend(e){var o=this;return(0,f.A)(function*(){yield o.friend.createRequest(e),o.app.openSnackBar("Friend request sent")})()}block(e){var o=this;return(0,f.A)(function*(){yield o.connection.block(e)})()}loadUserProfile(e){var o=this;return(0,f.A)(function*(){try{const i=yield o.profileService.loadProfile(e);o.data.set(i)}catch(i){console.error(i)}})()}copyDID(e){var o=this;return(0,f.A)(function*(){try{yield navigator.clipboard.writeText(e),o.app.openSnackBar("DID copied to clipboard")}catch(i){console.error("Failed to copy: ",i)}})()}copyUrl(e){var o=this;return(0,f.A)(function*(){const i=`${document.location.origin}/profile/${e.record.creator}/posts/${e.record.id}`;try{yield navigator.clipboard.writeText(i),o.app.openSnackBar("Url copied to clipboard")}catch(p){console.error("Failed to copy: ",p)}})()}showQR(e){this.dialog.open(s.k,{data:{did:e}})}shareProfile(e){var o=this;return(0,f.A)(function*(){const i=e.profile.name,p=document.location.href;try{yield navigator.share({title:i,url:p,text:"Check out this profile on Ariton"}),o.app.openSnackBar("Thanks for sharing!")}catch(h){o.app.openSnackBar(`Couldn't share ${h}`)}})()}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(N.up),t.rXU(P.nX))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-profile"]],standalone:!0,features:[t.aNF],decls:2,vars:1,consts:[["menuProfile","matMenu"],["menuActions","matMenu"],[1,"loading-indicator"],[1,"profile-header"],["onerror","this.src='/avatar-placeholder.png';this.onerror='';",1,"profile-header-icon",3,"src"],["src","/avatar-placeholder.png",1,"profile-header-icon"],[1,"profile-header-text"],[1,"ellipsis"],[1,"spacer"],[1,"profile-header-menu"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"profile-content"],["mat-tab-label",""],[1,"toolbar-actions","margin"],["type","button","mat-button","",3,"click"],["type","button","mat-button","",3,"disabled"],[1,"posts-items","margin"],[1,"margin-bottom"],[1,"about-tab-container"],[1,"profile-items"],[1,"profile-bio"],["mat-menu-item","",3,"routerLink"],[1,"example-tab-icon"],[1,"hide-small"],[1,"posts-header"],[3,"did"],["mat-icon-button","","matTooltip","Options",3,"matMenuTriggerFor"],[1,"post-info"],[1,"link",3,"routerLink"],[1,"post-body"],["target","_blank",3,"href"]],template:function(o,i){1&o&&t.DNE(0,lt,70,15)(1,dt,2,0,"div",2),2&o&&t.vxM(i.data()?0:1)},dependencies:[M.hM,y.d,b.RI,b.ES,b.mq,b.T8,k.m_,k.An,R.Hl,R.$z,R.iY,v.Cn,v.kk,v.fb,v.Cp,P.Wk,D.w,D.q,u.MD,g.D6,g.LG,l.Hu,l.RN,l.m2,l.MM,$.w,X.g],styles:[".profile-header[_ngcontent-%COMP%]{display:flex;gap:1em;align-items:center}.profile-header-icon[_ngcontent-%COMP%]{border-radius:50%;width:128px;margin:1em}.profile-header-menu[_ngcontent-%COMP%]{padding-right:4px}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300}h1[_ngcontent-%COMP%]{margin:0;padding:0}.example-tab-icon[_ngcontent-%COMP%]{margin-right:8px}.profile-content[_ngcontent-%COMP%]{margin-top:.4em}.about-tab-container[_ngcontent-%COMP%]{padding:1em}.profile-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-left:.2em;margin-right:1em}.profile-bio[_ngcontent-%COMP%]{margin-top:1em}.profile-header-text[_ngcontent-%COMP%]{width:100%}@media (max-width: 959.98px){.profile-header[_ngcontent-%COMP%]{gap:10;flex-direction:column;margin-left:1em;margin-right:1em}}.post-body[_ngcontent-%COMP%]{white-space:pre-wrap}.post-info[_ngcontent-%COMP%]{margin-bottom:8px;font-size:.9em}.posts-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.posts-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{flex-grow:1}.posts-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{flex-shrink:0}"]})}return n})()},60385:(W,x,a)=>{a.d(x,{w:()=>F});var f=a(10467),t=a(54438),R=a(34635),D=a(25596),k=a(39434),v=a(345),P=a(78013),T=a(33347),b=a(14823),O=a(30046);const y=r=>["/profile",r];function M(r,C){if(1&r&&(t.nrm(0,"img",0),t.nI1(1,"safeResourceUrl")),2&r){const l=t.XpG();t.Y8G("routerLink",t.eq3(4,y,l.did()))("src",t.bMT(1,2,l.data().avatar),t.B4B)}}function s(r,C){if(1&r&&t.nrm(0,"img",1),2&r){const l=t.XpG();t.Y8G("routerLink",t.eq3(2,y,l.did()))("src","/avatar-placeholder.png",t.B4B)}}function c(r,C){if(1&r&&t.EFF(0),2&r){let l;const d=t.XpG(2);t.SpI(" (",null==(l=d.data().profile)?null:l.title,") ")}}function u(r,C){if(1&r&&(t.j41(0,"a",3),t.EFF(1),t.DNE(2,c,1,1),t.k0s()),2&r){let l,d;const E=t.XpG();t.Y8G("routerLink",t.eq3(3,y,E.did())),t.R7$(),t.SpI("",null==(l=E.data().profile)?null:l.name," "),t.R7$(),t.vxM(null!=(d=E.data().profile)&&d.title?2:-1)}}function g(r,C){if(1&r&&t.EFF(0),2&r){let l;const d=t.XpG(2);t.SpI(" (",null==(l=d.data().profile)?null:l.title,") ")}}function m(r,C){if(1&r&&(t.j41(0,"em")(1,"a",3),t.EFF(2,"No name set "),t.DNE(3,g,1,1),t.k0s()()),2&r){let l;const d=t.XpG();t.R7$(),t.Y8G("routerLink",t.eq3(2,y,d.did())),t.R7$(2),t.vxM(null!=(l=d.data().profile)&&l.title?3:-1)}}let F=(()=>{class r{constructor(){this.identity=(0,t.WQX)(R.K),this.profile=(0,t.WQX)(k.p),this.sanitizer=(0,t.WQX)(v.up),this.did=t.hFB.required(),this.data=(0,t.vPA)({})}ngAfterViewInit(){var l=this;return(0,f.A)(function*(){if(l.did()){let d=yield l.profile.loadProfile(l.did());l.data.set(d)}})()}static#t=this.\u0275fac=function(d){return new(d||r)};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-profile-header"]],inputs:{did:[1,"did"]},standalone:!0,features:[t.aNF],decls:10,vars:9,consts:[["mat-card-avatar","","onerror","this.src='/avatar-placeholder.png';this.onerror='';",1,"profile-thumbnail",3,"routerLink","src"],["mat-card-avatar","",1,"profile-thumbnail",3,"routerLink","src"],[1,"profile-header-title"],[3,"routerLink"],[1,"profile-header-subtitle"],[3,"routerLink","matTooltip"]],template:function(d,E){if(1&d&&(t.DNE(0,M,2,6,"img",0)(1,s,1,4,"img",1),t.j41(2,"div")(3,"div",2),t.DNE(4,u,3,5,"a",3)(5,m,4,4,"em"),t.k0s(),t.j41(6,"div",4)(7,"a",5),t.EFF(8),t.nI1(9,"did"),t.k0s()()()),2&d){let A;t.vxM(E.data().avatar?0:1),t.R7$(4),t.vxM(null!=(A=E.data().profile)&&A.name?4:5),t.R7$(3),t.Y8G("routerLink",t.eq3(7,y,E.did()))("matTooltip",E.did()),t.R7$(),t.JRh(t.bMT(9,5,E.did()))}},dependencies:[O.iI,O.Wk,b.uc,b.oV,D.Hu,D.QG,P.d,T.k],styles:[".profile-thumbnail[_ngcontent-%COMP%]{cursor:pointer;border-radius:50%;margin-right:1em}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}[_nghost-%COMP%]{display:flex}.profile-header-title[_ngcontent-%COMP%]{font-size:1.4em}.profile-header-subtitle[_ngcontent-%COMP%]{font-size:1em}"]})}return r})()}}]);