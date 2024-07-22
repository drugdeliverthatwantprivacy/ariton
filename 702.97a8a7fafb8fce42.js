"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[702],{6702:(H,f,i)=>{i.r(f),i.d(f,{CommunitiesComponent:()=>Q});var t=i(93953),p=i(65571),C=i(99213),v=i(99631),d=i(53719),c=i(89417),y=i(60177),u=i(2042),h=i(96695),m=i(9159),r=i(25596),x=i(88834),F=i(45024),b=i(96354),j=i(57786),R=i(7673);class E extends F.qS{constructor(){super()}connect(){if(this.paginator&&this.sort)return(0,j.h)((0,R.of)(this.data),this.paginator.page,this.sort.sortChange).pipe((0,b.T)(()=>this.getPagedData(this.getSortedData([...this.data]))));throw Error("Please set the paginator and sort on the data source before connecting.")}disconnect(){}getPagedData(o){return this.paginator?o.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize):o}getSortedData(o){return this.sort&&this.sort.active&&""!==this.sort.direction?o.sort((n,s)=>{const a="asc"===this.sort?.direction;switch(this.sort?.active){case"name":return S(n.name,s.name,a);case"id":return S(+n.id,+s.id,a);default:return 0}}):o}}function S(e,o,n){return(e<o?-1:1)*(n?1:-1)}var D=i(30450),T=i(55911),M=i(31439),$=i(36815),k=i(18498);const I=()=>[5,10,20];function G(e,o){if(1&e){const n=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3),t.k0s()(),t.nrm(4,"br")(5,"img",13),t.j41(6,"mat-card-content"),t.nrm(7,"br"),t.j41(8,"p"),t.EFF(9),t.k0s()(),t.j41(10,"mat-card-actions")(11,"button",14),t.bIt("click",function(){t.eBV(n);const a=t.XpG(2);return t.Njj(a.open("did:dht:my6nm5s1n9xmuuh5yixe668k7xbkmmuddzatn1fojzgdg5f5to8y"))}),t.EFF(12,"JOIN"),t.k0s(),t.j41(13,"button",14),t.bIt("click",function(){t.eBV(n);const a=t.XpG(2);return t.Njj(a.open("did:dht:my6nm5s1n9xmuuh5yixe668k7xbkmmuddzatn1fojzgdg5f5to8y"))}),t.EFF(14,"PREVIEW"),t.k0s()()()}if(2&e){const n=o.$implicit;t.R7$(3),t.SpI("",n.name," "),t.R7$(2),t.Y8G("src",n.thumbnail,t.B4B),t.R7$(4),t.SpI(" ",n.description," ")}}function w(e,o){if(1&e&&(t.j41(0,"div",10),t.DNE(1,G,15,3,"mat-card",12),t.k0s()),2&e){const n=t.XpG();t.R7$(),t.Y8G("ngForOf",n.cards())}}function N(e,o){1&e&&(t.j41(0,"th",24),t.EFF(1,"Id"),t.k0s())}function P(e,o){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=o.$implicit;t.R7$(),t.JRh(n.id)}}function O(e,o){1&e&&(t.j41(0,"th",24),t.EFF(1,"Name"),t.k0s())}function z(e,o){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=o.$implicit;t.R7$(),t.JRh(n.name)}}function B(e,o){1&e&&(t.j41(0,"th",24),t.EFF(1,"Description"),t.k0s())}function V(e,o){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=o.$implicit;t.R7$(),t.JRh(n.description)}}function Y(e,o){1&e&&t.nrm(0,"tr",26)}function X(e,o){1&e&&t.nrm(0,"tr",27)}function J(e,o){if(1&e&&(t.j41(0,"div",11)(1,"table",15),t.qex(2,16),t.DNE(3,N,2,0,"th",17)(4,P,2,1,"td",18),t.bVm(),t.qex(5,19),t.DNE(6,O,2,0,"th",17)(7,z,2,1,"td",18),t.bVm(),t.qex(8,20),t.DNE(9,B,2,0,"th",17)(10,V,2,1,"td",18),t.bVm(),t.DNE(11,Y,1,0,"tr",21)(12,X,1,0,"tr",22),t.k0s(),t.nrm(13,"mat-paginator",23,0),t.k0s()),2&e){const n=t.XpG();t.R7$(11),t.Y8G("matHeaderRowDef",n.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",n.displayedColumns),t.R7$(),t.Y8G("length",n.dataSource.data.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",t.lJ4(6,I))}}let Q=(()=>{class e{constructor(n){this.router=n,this.search=new c.MJ(""),this.dataSource=new E,this.cards=(0,t.vPA)([]),this.app=(0,t.WQX)(M.d),this.layout=(0,t.WQX)($.Y),this.images=["nature","sky","grass","mountains","rivers","glacier","forest","streams","rain","clouds"],this.viewStyle=(0,t.geq)("card"),this.checked=(0,t.geq)(!1),this.displayedColumns=["name","description"],(0,t.QZP)(()=>{setTimeout(()=>{this.table&&(this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.table.dataSource=this.dataSource)})}),(0,t.QZP)(()=>{console.log(`The checked is: ${this.checked()})`)});const s=[];for(let a=0;a<this.images.length;a++)s.push({id:"id1",name:`Community ${a+1}`,description:"This is a description of community. We are a great community with many members.",thumbnail:`https://picsum.photos/seed/${this.images[a]}x/200/300`,private:!1,visibility:"public",type:"generic",features:{discussion:!0,members:!0,events:!0,media:!0,files:!0},apps:["events","media","files"]});this.cards.set(s),this.dataSource.data=s}open(n){this.router.navigate(["community",n])}ngOnInit(){this.layout.addAction({name:"Create",icon:"add",action:()=>{this.router.navigate(["communities","create"])}})}ngAfterViewInit(){}static#t=this.\u0275fac=function(s){return new(s||e)(t.rXU(k.Ix))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-communities"]],viewQuery:function(s,a){if(1&s&&(t.GBs(h.iy,5),t.GBs(u.B4,5),t.GBs(m.Zl,5)),2&s){let l;t.mGM(l=t.lsd())&&(a.paginator=l.first),t.mGM(l=t.lsd())&&(a.sort=l.first),t.mGM(l=t.lsd())&&(a.table=l.first)}},inputs:{viewStyle:[1,"viewStyle"],checked:[1,"checked"]},outputs:{viewStyle:"viewStyleChange",checked:"checkedChange"},standalone:!0,features:[t.aNF],decls:16,vars:2,consts:[["paginator",""],[1,"toolbox"],[1,"toolbox-left"],[1,"search-input"],["matInput","","placeholder","Filter communities..."],["matSuffix",""],[1,"toolbox-right"],["hideSingleSelectionIndicator","true",3,"ngModelChange","ngModel"],["value","card"],["value","table"],[1,"container","responsive-grid"],[1,"mat-elevation-z8"],[4,"ngFor","ngForOf"],["mat-card-image","",3,"src"],["mat-button","",3,"click"],["mat-table","","matSort","","aria-label","Elements",1,"full-width-table"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","description"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(s,a){1&s&&(t.j41(0,"div",1)(1,"div",2)(2,"mat-form-field",3)(3,"mat-label"),t.EFF(4,"Search"),t.k0s(),t.nrm(5,"input",4),t.j41(6,"mat-icon",5),t.EFF(7,"search"),t.k0s()()(),t.j41(8,"div",6)(9,"mat-button-toggle-group",7),t.mxI("ngModelChange",function(g){return t.DH7(a.viewStyle,g)||(a.viewStyle=g),g}),t.j41(10,"mat-button-toggle",8),t.EFF(11,"Cards"),t.k0s(),t.j41(12,"mat-button-toggle",9),t.EFF(13,"Table"),t.k0s()()()(),t.DNE(14,w,2,1,"div",10)(15,J,15,7,"div",11)),2&s&&(t.R7$(9),t.R50("ngModel",a.viewStyle),t.R7$(5),t.vxM("card"==a.viewStyle()?14:15))},dependencies:[p.Vg,p.ec,p.pc,C.m_,C.An,v.fS,v.fg,d.rl,d.nJ,d.yw,d.RG,c.X1,c.BC,y.MD,y.Sq,x.Hl,x.$z,r.Hu,r.RN,r.YY,r.m2,r.MM,r.kF,r.dh,m.tP,m.Zl,m.tL,m.ji,m.cC,m.YV,m.iL,m.KS,m.$R,m.YZ,m.NB,h.Ou,h.iy,u.NQ,u.B4,u.aE,D.mV,c.YN,c.vS,T.s5],styles:[".toolbox[_ngcontent-%COMP%]{display:flex;gap:1em;align-items:baseline}.toolbox-left[_ngcontent-%COMP%]{flex-grow:2}.toolbox-right[_ngcontent-%COMP%]{flex-grow:1}.search-input[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding:24px}img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px}"]})}return e})()}}]);