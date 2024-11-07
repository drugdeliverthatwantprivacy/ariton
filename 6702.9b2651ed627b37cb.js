"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6702],{6702:(tt,C,a)=>{a.r(C),a.d(C,{CommunitiesComponent:()=>q});var l=a(10467),t=a(54438),p=a(65571),v=a(99213),S=a(99631),R=a(53719),u=a(89417),w=a(60177),d=a(2042),h=a(96695),m=a(9159),c=a(25596),y=a(88834);a(45024),a(96354),a(57786),a(7673);class x extends m.I6{constructor(n){super(),this.dataService=n,this.load()}load(){var n=this;return(0,l.A)(function*(){const e=yield n.dataService.load({type:"community",status:"active"});n.data=e})()}}var f=a(30046),E=a(30450),$=a(55911),_=a(96084),M=a(36815),G=a(85297);const I=()=>["/communities","create"],N=i=>["/communities","create",i],F=i=>["/community",i],Y=()=>[5,10,25,100];function L(i,n){if(1&i&&(t.j41(0,"a",10),t.EFF(1),t.k0s(),t.nrm(2,"br")),2&i){const e=n.$implicit;t.Y8G("routerLink",t.eq3(2,N,e.id)),t.R7$(),t.SpI("",e.data.name," - Awaiting approval")}}function P(i,n){if(1&i&&(t.j41(0,"mat-card",0)(1,"mat-card-content",1)(2,"strong"),t.EFF(3,"NOTICE"),t.k0s(),t.j41(4,"div"),t.EFF(5," You have communities in draft mode. Please review any status update on their verification status. "),t.nrm(6,"br")(7,"br"),t.Z7z(8,L,3,4,null,null,t.fX1),t.k0s()()()),2&i){const e=t.XpG();t.R7$(8),t.Dyx(e.drafts())}}function A(i,n){if(1&i){const e=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title")(3,"a",11),t.EFF(4),t.k0s()()(),t.nrm(5,"br")(6,"img",12),t.j41(7,"mat-card-content"),t.nrm(8,"br"),t.j41(9,"p"),t.EFF(10),t.k0s()(),t.j41(11,"mat-card-actions")(12,"button",13),t.bIt("click",function(){const s=t.eBV(e).$implicit,r=t.XpG(3);return t.Njj(r.open(s.id))}),t.EFF(13,"VIEW"),t.k0s(),t.j41(14,"button",13),t.bIt("click",function(){const s=t.eBV(e).$implicit,r=t.XpG(3);return t.Njj(r.join(s.id))}),t.EFF(15,"JOIN"),t.k0s()()()}if(2&i){const e=n.$implicit;t.R7$(3),t.Y8G("routerLink",t.eq3(4,F,e.id)),t.R7$(),t.JRh(e.data.name),t.R7$(2),t.Y8G("src",e.data.avatar,t.B4B),t.R7$(4),t.SpI(" ",e.data.bio," ")}}function V(i,n){if(1&i&&t.Z7z(0,A,16,6,"mat-card",null,t.fX1),2&i){const e=t.XpG(2);t.Dyx(e.dataSource.data)}}function X(i,n){if(1&i&&(t.j41(0,"div",8),t.DNE(1,V,2,0),t.k0s()),2&i){const e=t.XpG();t.R7$(),t.vxM(e.dataSource?1:-1)}}function O(i,n){1&i&&(t.j41(0,"th",23),t.EFF(1,"Id"),t.k0s())}function z(i,n){if(1&i&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(),t.JRh(e.id)}}function B(i,n){1&i&&(t.j41(0,"th",23),t.EFF(1,"Name"),t.k0s())}function J(i,n){if(1&i&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(),t.JRh(e.data.name)}}function Q(i,n){1&i&&(t.j41(0,"th",23),t.EFF(1,"Description"),t.k0s())}function H(i,n){if(1&i&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&i){const e=n.$implicit;t.R7$(),t.JRh(e.data.bio)}}function W(i,n){1&i&&t.nrm(0,"tr",25)}function Z(i,n){1&i&&t.nrm(0,"tr",26),2&i&&t.Y8G("routerLink",t.eq3(1,F,n.$implicit.id))}function U(i,n){if(1&i&&t.nrm(0,"mat-paginator",22),2&i){const e=t.XpG(2);t.Y8G("length",e.dataSource.data.length)("pageSizeOptions",t.lJ4(2,Y))}}function K(i,n){if(1&i&&(t.j41(0,"div",9)(1,"table",14),t.qex(2,15),t.DNE(3,O,2,0,"th",16)(4,z,2,1,"td",17),t.bVm(),t.qex(5,18),t.DNE(6,B,2,0,"th",16)(7,J,2,1,"td",17),t.bVm(),t.qex(8,19),t.DNE(9,Q,2,0,"th",16)(10,H,2,1,"td",17),t.bVm(),t.DNE(11,W,1,0,"tr",20)(12,Z,1,3,"tr",21),t.k0s(),t.DNE(13,U,1,3,"mat-paginator",22),t.k0s()),2&i){const e=t.XpG();t.R7$(),t.Y8G("dataSource",e.dataSource),t.R7$(10),t.Y8G("matHeaderRowDef",e.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",e.displayedColumns),t.R7$(),t.vxM(e.dataSource?13:-1)}}let q=(()=>{class i{constructor(e){var o=this;this.router=e,this.search=new u.MJ(""),this.app=(0,t.WQX)(_.d),this.layout=(0,t.WQX)(M.Y),this.images=["nature","sky","grass","mountains","rivers","glacier","forest"],this.viewStyle=(0,t.geq)("thumbnail"),this.checked=(0,t.geq)(!1),this.displayedColumns=["name","description"],this.data=(0,t.WQX)(G.u),this.drafts=(0,t.vPA)([]),this.communities=(0,t.vPA)([]),this.layout.marginOn(),(0,t.QZP)(()=>{const r=this.viewStyle();console.log(`View style changed to: ${r}`),"table"===r&&console.log("DATA SOURCE: ",this.dataSource)}),(0,t.QZP)((0,l.A)(function*(){o.app.initialized()&&(yield o.loadDrafts(),o.dataSource=new x(o.data),o.dataSource.paginator=o.paginator,o.dataSource.sort=o.sort)}));const s=[];for(let r=0;r<this.images.length;r++)s.push({id:"id1",name:`Community ${r+1}`,description:"This is a description of community. We are a great community with many members.",thumbnail:`https://picsum.photos/seed/${this.images[r]}x/200/300`,private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]});s.push({id:"id1",name:"Craft Knitting",description:"Join the craft knitting community to share amazing patterns and socialize with other knitters.",thumbnail:"https://www.studioknitsf.com/wp-content/uploads/2021/02/thumbnails-pattern-book-2021.jpg.webp",private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]}),s.push({id:"id1",name:"Montenegro Liberterian Festival 2024",description:"Join the MTLFest 2024 community group.",thumbnail:"https://optim.tildacdn.one/tild3333-6237-4666-b532-336530656464/-/resize/600x/-/format/webp/FMF_Yellow_Circle.png",private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]}),s.push({id:"id1",name:"Montelibero",description:"Free Society Project Europe.",thumbnail:"https://montelibero.org/wp-content/uploads/2023/04/fspe_logo_3-05-200.png",private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]}),s.push({id:"id1",name:"Liberstad",description:"The Free City of Liberstad",thumbnail:"https://free-communities.org/wp-content/uploads/2023/10/liberstad-flag-10.23.webp",private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]})}open(e){this.router.navigate(["/community",e])}join(e){this.router.navigate(["/community",e],{queryParams:{join:!0}})}ngOnInit(){this.layout.resetActions()}ngAfterViewInit(){}loadDrafts(){var e=this;return(0,l.A)(function*(){const o=yield e.data.load({type:"community",status:"draft"});e.drafts.set(o)})()}loadCommunities(){var e=this;return(0,l.A)(function*(){const o=yield e.data.load({type:"community",status:"active"});e.communities.set(o)})()}createTest(){var e=this;return(0,l.A)(function*(){const o={type:"community",status:"draft"},s=yield e.data.save({name:"Test Community",description:"This is a test community."},o);console.log("Community Data Record:",s),yield e.data.update(s.record,{name:"Test Community 2",description:"This is a test community 2."},o);const r=yield e.data.load(o);console.log("Community Data Records:",r)})()}static{this.\u0275fac=function(o){return new(o||i)(t.rXU(f.Ix))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-communities"]],viewQuery:function(o,s){if(1&o&&(t.GBs(h.iy,5),t.GBs(d.B4,5)),2&o){let r;t.mGM(r=t.lsd())&&(s.paginator=r.first),t.mGM(r=t.lsd())&&(s.sort=r.first)}},inputs:{viewStyle:[1,"viewStyle"],checked:[1,"checked"]},outputs:{viewStyle:"viewStyleChange",checked:"checkedChange"},standalone:!0,features:[t.aNF],decls:18,vars:5,consts:[[1,"toolbar-actions","margin-bottom"],[1,"flex"],["type","button","mat-button","",3,"routerLink"],[1,"toolbar-spacer"],["type","search","placeholder","Filter communities",1,"search-input"],["hideSingleSelectionIndicator","true",3,"ngModelChange","ngModel"],["value","thumbnail"],["value","list"],[1,"container","responsive-grid"],[1,"mat-elevation-z8"],[3,"routerLink"],[1,"link",3,"routerLink"],["mat-card-image","",3,"src"],["mat-button","",3,"click"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","description"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable-row",3,"routerLink",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"clickable-row",3,"routerLink"]],template:function(o,s){1&o&&(t.j41(0,"mat-card",0)(1,"mat-card-content",1)(2,"button",2)(3,"mat-icon"),t.EFF(4,"add"),t.k0s(),t.EFF(5," Create "),t.k0s(),t.j41(6,"span",3),t.nrm(7,"input",4),t.k0s(),t.j41(8,"mat-button-toggle-group",5),t.mxI("ngModelChange",function(g){return t.DH7(s.viewStyle,g)||(s.viewStyle=g),g}),t.j41(9,"mat-button-toggle",6)(10,"mat-icon"),t.EFF(11,"grid_view"),t.k0s()(),t.j41(12,"mat-button-toggle",7)(13,"mat-icon"),t.EFF(14,"view_list"),t.k0s()()()()(),t.DNE(15,P,10,0,"mat-card",0)(16,X,2,1,"div",8)(17,K,14,4,"div",9)),2&o&&(t.R7$(2),t.Y8G("routerLink",t.lJ4(4,I)),t.R7$(6),t.R50("ngModel",s.viewStyle),t.R7$(7),t.vxM(s.drafts().length>0?15:-1),t.R7$(),t.vxM("thumbnail"==s.viewStyle()?16:17))},dependencies:[f.iI,f.Wk,p.Vg,p.ec,p.pc,v.m_,v.An,S.fS,R.RG,u.X1,u.BC,w.MD,y.Hl,y.$z,c.Hu,c.RN,c.YY,c.m2,c.MM,c.kF,c.dh,m.tP,m.Zl,m.tL,m.ji,m.cC,m.YV,m.iL,m.KS,m.$R,m.YZ,m.NB,h.Ou,h.iy,d.NQ,d.B4,d.aE,E.mV,u.YN,u.vS,$.s5],styles:[".search-input[_ngcontent-%COMP%]{width:100%}img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px}.clickable-row[_ngcontent-%COMP%]{cursor:pointer}.clickable-row[_ngcontent-%COMP%]:hover{background-color:#0000000a}"]})}}return i})()}}]);