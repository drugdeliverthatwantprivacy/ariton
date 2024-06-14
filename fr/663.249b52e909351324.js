"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[663],{48663:(ie,b,d)=>{d.r(b),d.d(b,{TreeComponent:()=>ne});var g=d(45024),D=d(74402),p=d(21413),u=d(84412),P=d(7673),F=d(96697),v=(d(5964),d(56977)),C=d(96354),V=d(23294),t=d(93953),G=d(28203);class k{constructor(){this.expansionModel=new g.CB(!0)}toggle(i){this.expansionModel.toggle(this._trackByValue(i))}expand(i){this.expansionModel.select(this._trackByValue(i))}collapse(i){this.expansionModel.deselect(this._trackByValue(i))}isExpanded(i){return this.expansionModel.isSelected(this._trackByValue(i))}toggleDescendants(i){this.expansionModel.isSelected(this._trackByValue(i))?this.collapseDescendants(i):this.expandDescendants(i)}collapseAll(){this.expansionModel.clear()}expandDescendants(i){let e=[i];e.push(...this.getDescendants(i)),this.expansionModel.select(...e.map(n=>this._trackByValue(n)))}collapseDescendants(i){let e=[i];e.push(...this.getDescendants(i)),this.expansionModel.deselect(...e.map(n=>this._trackByValue(n)))}_trackByValue(i){return this.trackBy?this.trackBy(i):i}}class Q extends k{constructor(i,e,n){super(),this.getLevel=i,this.isExpandable=e,this.options=n,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(i){const n=[];for(let r=this.dataNodes.indexOf(i)+1;r<this.dataNodes.length&&this.getLevel(i)<this.getLevel(this.dataNodes[r]);r++)n.push(this.dataNodes[r]);return n}expandAll(){this.expansionModel.select(...this.dataNodes.map(i=>this._trackByValue(i)))}}const _=new t.nKC("CDK_TREE_NODE_OUTLET_NODE");let f=(()=>{class s{constructor(e,n){this.viewContainer=e,this._node=n}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(t.c1b),t.rXU(_,8))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","cdkTreeNodeOutlet",""]],standalone:!0})}return s})();class ${constructor(i){this.$implicit=i}}let m=(()=>{class s{constructor(e){this.template=e}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(t.C4Q))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]},standalone:!0})}return s})(),h=(()=>{class s{get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}constructor(e,n){this._differs=e,this._changeDetectorRef=n,this._onDestroy=new p.B,this._levels=new Map,this.viewChange=new u.t({start:0,end:Number.MAX_VALUE})}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(n=>!n.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;(0,g.y4)(this._dataSource)?e=this._dataSource.connect(this):(0,D.A)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,P.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,v.Q)(this._onDestroy)).subscribe(n=>this.renderNodeChanges(n)))}renderNodeChanges(e,n=this._dataDiffer,r=this._nodeOutlet.viewContainer,o){const a=n.diff(e);a&&(a.forEachOperation((l,E,y)=>{if(null==l.previousIndex)this.insertNode(e[y],y,r,o);else if(null==y)r.remove(E),this._levels.delete(l.item);else{const se=r.get(E);r.move(se,y)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,n){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(o=>o.when&&o.when(n,e))||this._defaultNodeDef}insertNode(e,n,r,o){const a=this._getNodeDef(e,n),l=new $(e);l.level=this.treeControl.getLevel?this.treeControl.getLevel(e):typeof o<"u"&&this._levels.has(o)?this._levels.get(o)+1:0,this._levels.set(e,l.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(a.template,l,n),c.mostRecentTreeNode&&(c.mostRecentTreeNode.data=e)}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(t._q3),t.rXU(t.gRc))};static#t=this.\u0275cmp=t.VBU({type:s,selectors:[["cdk-tree"]],contentQueries:function(n,r,o){if(1&n&&t.wni(o,m,5),2&n){let a;t.mGM(a=t.lsd())&&(r._nodeDefs=a)}},viewQuery:function(n,r){if(1&n&&t.GBs(f,7),2&n){let o;t.mGM(o=t.lsd())&&(r._nodeOutlet=o.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],standalone:!0,features:[t.aNF],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(n,r){1&n&&t.eu8(0,0)},dependencies:[f],encapsulation:2})}return s})(),c=(()=>{class s{get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}static#e=this.mostRecentTreeNode=null;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}constructor(e,n){this._elementRef=e,this._tree=n,this._destroyed=new p.B,this._dataChanges=new p.B,this._changeDetectorRef=(0,t.WQX)(t.gRc),s.mostRecentTreeNode=this,this.role="treeitem"}ngOnInit(){this._parentNodeAriaLevel=function j(s){let i=s.parentElement;for(;i&&!J(i);)i=i.parentElement;return i?i.classList.contains("cdk-nested-tree-node")?(0,t.Udg)(i.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`),this._tree.treeControl.expansionModel.changed.pipe((0,C.T)(()=>this.isExpanded),(0,V.F)()).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){s.mostRecentTreeNode===this&&(s.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(t.aKT),t.rXU(h))};static#n=this.\u0275dir=t.FsC({type:s,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:1,hostBindings:function(n,r){2&n&&t.BMQ("aria-expanded",r.isExpanded)},inputs:{role:"role"},exportAs:["cdkTreeNode"],standalone:!0})}return s})();function J(s){const i=s.classList;return!(!i?.contains("cdk-nested-tree-node")&&!i?.contains("cdk-tree"))}const K=/([A-Za-z%]+)$/;let x=(()=>{class s{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}constructor(e,n,r,o){this._treeNode=e,this._tree=n,this._element=r,this._dir=o,this._destroyed=new p.B,this.indentUnits="px",this._indent=40,this._setPadding(),o&&o.change.pipe((0,v.Q)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,n=null==this._level?e:this._level;return"number"==typeof n?`${n*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const n=this._paddingIndent();if(n!==this._currentPadding||e){const r=this._element.nativeElement,o=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",a="paddingLeft"===o?"paddingRight":"paddingLeft";r.style[o]=n||"",r.style[a]="",this._currentPadding=n}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let n=e,r="px";if("string"==typeof e){const o=e.split(K);n=o[0],r=o[1]||r}this.indentUnits=r,this._indent=(0,t.Udg)(n),this._setPadding()}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(c),t.rXU(h),t.rXU(t.aKT),t.rXU(G.dS,8))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",t.Udg],indent:[0,"cdkTreeNodePaddingIndent","indent"]},standalone:!0,features:[t.GFd]})}return s})(),N=(()=>{class s{constructor(e,n){this._tree=e,this._treeNode=n,this.recursive=!1}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(h),t.rXU(c))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(n,r){1&n&&t.bIt("click",function(a){return r._toggle(a)})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",t.L39]},standalone:!0,features:[t.GFd]})}return s})(),H=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=t.$C({type:s});static#n=this.\u0275inj=t.G2t({})}return s})();var w=d(86600),S=d(57786);let B=(()=>{class s extends c{constructor(e,n,r){super(e,n),this.disabled=!1,this.tabIndex=Number(r)||0}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(t.aKT),t.rXU(h),t.kS0("tabindex"))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],inputs:{disabled:[2,"disabled","disabled",t.L39],tabIndex:[2,"tabIndex","tabIndex",e=>null==e?0:(0,t.Udg)(e)]},exportAs:["matTreeNode"],standalone:!0,features:[t.Jv_([{provide:c,useExisting:s}]),t.GFd,t.Vt3]})}return s})(),O=(()=>{class s extends m{static#e=this.\u0275fac=(()=>{let e;return function(r){return(e||(e=t.xGo(s)))(r||s)}})();static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},standalone:!0,features:[t.Jv_([{provide:m,useExisting:s}]),t.Vt3]})}return s})(),A=(()=>{class s extends x{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static#e=this.\u0275fac=(()=>{let e;return function(r){return(e||(e=t.xGo(s)))(r||s)}})();static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",t.Udg],indent:[0,"matTreeNodePaddingIndent","indent"]},standalone:!0,features:[t.Jv_([{provide:x,useExisting:s}]),t.GFd,t.Vt3]})}return s})(),M=(()=>{class s{constructor(e,n){this.viewContainer=e,this._node=n}static#e=this.\u0275fac=function(n){return new(n||s)(t.rXU(t.c1b),t.rXU(_,8))};static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","matTreeNodeOutlet",""]],standalone:!0,features:[t.Jv_([{provide:f,useExisting:s}])]})}return s})(),I=(()=>{class s extends h{constructor(){super(...arguments),this._nodeOutlet=void 0}static#e=this.\u0275fac=(()=>{let e;return function(r){return(e||(e=t.xGo(s)))(r||s)}})();static#t=this.\u0275cmp=t.VBU({type:s,selectors:[["mat-tree"]],viewQuery:function(n,r){if(1&n&&t.GBs(M,7),2&n){let o;t.mGM(o=t.lsd())&&(r._nodeOutlet=o.first)}},hostAttrs:["role","tree",1,"mat-tree"],exportAs:["matTree"],standalone:!0,features:[t.Jv_([{provide:h,useExisting:s}]),t.Vt3,t.aNF],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(n,r){1&n&&t.eu8(0,0)},dependencies:[M],styles:[".mat-tree{display:block;background-color:var(--mat-tree-container-background-color)}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color);font-family:var(--mat-tree-node-text-font);font-size:var(--mat-tree-node-text-size);font-weight:var(--mat-tree-node-text-weight)}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"],encapsulation:2})}return s})(),R=(()=>{class s extends N{static#e=this.\u0275fac=(()=>{let e;return function(r){return(e||(e=t.xGo(s)))(r||s)}})();static#t=this.\u0275dir=t.FsC({type:s,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},standalone:!0,features:[t.Jv_([{provide:N,useExisting:s}]),t.Vt3]})}return s})(),z=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=t.$C({type:s});static#n=this.\u0275inj=t.G2t({imports:[H,w.yE,w.yE]})}return s})();class Y{constructor(i,e,n,r){this.transformFunction=i,this.getLevel=e,this.isExpandable=n,this.getChildren=r}_flattenNode(i,e,n,r){const o=this.transformFunction(i,e);if(n.push(o),this.isExpandable(o)){const a=this.getChildren(i);a&&(Array.isArray(a)?this._flattenChildren(a,e,n,r):a.pipe((0,F.s)(1)).subscribe(l=>{this._flattenChildren(l,e,n,r)}))}return n}_flattenChildren(i,e,n,r){i.forEach((o,a)=>{let l=r.slice();l.push(a!=i.length-1),this._flattenNode(o,e+1,n,l)})}flattenNodes(i){let e=[];return i.forEach(n=>this._flattenNode(n,0,e,[])),e}expandFlattenedNodes(i,e){let n=[],r=[];return r[0]=!0,i.forEach(o=>{let a=!0;for(let l=0;l<=this.getLevel(o);l++)a=a&&r[l];a&&n.push(o),this.isExpandable(o)&&(r[this.getLevel(o)+1]=e.isExpanded(o))}),n}}class Z extends g.qS{get data(){return this._data.value}set data(i){this._data.next(i),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}constructor(i,e,n){super(),this._treeControl=i,this._treeFlattener=e,this._flattenedData=new u.t([]),this._expandedData=new u.t([]),this._data=new u.t([]),n&&(this.data=n)}connect(i){return(0,S.h)(i.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe((0,C.T)(()=>(this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value,this._treeControl)),this._expandedData.value)))}disconnect(){}}var U=d(88834),L=d(21801);const q=[{name:"components",type:"folder",children:[{name:"src",type:"folder",children:[{name:"cdk",type:"folder",children:[{name:"package.json",type:"file"},{name:"BUILD.bazel",type:"file"}]},{name:"material",type:"folder"}]}]},{name:"angular",type:"folder",children:[{name:"packages",type:"folder",children:[{name:".travis.yml",type:"file"},{name:"firebase.json",type:"file"}]},{name:"package.json",type:"file"}]},{name:"angularjs",type:"folder",children:[{name:"gulpfile.js",type:"file"},{name:"README.md",type:"file"}]}];function ee(s,i){if(1&s&&(t.j41(0,"mat-tree-node",3),t.nrm(1,"button",4),t.j41(2,"mat-icon",5),t.EFF(3),t.k0s(),t.EFF(4),t.k0s()),2&s){const e=i.$implicit;t.R7$(2),t.BMQ("aria-label",e.type+"icon"),t.R7$(),t.SpI(" ","file"===e.type?"description":"folder"," "),t.R7$(),t.SpI(" ",e.name," ")}}function te(s,i){if(1&s&&(t.j41(0,"mat-tree-node",6)(1,"button",7)(2,"mat-icon",8),t.EFF(3),t.k0s()(),t.j41(4,"mat-icon",5),t.EFF(5),t.k0s(),t.EFF(6),t.k0s()),2&s){const e=i.$implicit,n=t.XpG();t.R7$(),t.BMQ("aria-label","Toggle "+e.name),t.R7$(2),t.SpI(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),t.R7$(),t.BMQ("aria-label",e.type+"icon"),t.R7$(),t.SpI(" ","file"===e.type?"description":"folder"," "),t.R7$(),t.SpI(" ",e.name," ")}}let ne=(()=>{class s{constructor(){this.treeFlattener=new Y(this.transformer,this.getLevel,this.isExpandable,this.getChildren),this.treeControl=new Q(this.getLevel,this.isExpandable),this.dataSource=new Z(this.treeControl,this.treeFlattener),this.dataSource.data=q}transformer(e,n){return{name:e.name,type:e.type,level:n,expandable:!!e.children}}getLevel(e){return e.level}isExpandable(e){return e.expandable}hasChild(e,n){return n.expandable}getChildren(e){return e.children}static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275cmp=t.VBU({type:s,selectors:[["app-tree"]],standalone:!0,features:[t.aNF],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["matTreeNodeToggle","","matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle","","matTreeNodePadding",""],["mat-icon-button","","disabled",""],[1,"type-icon"],["matTreeNodePadding",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(n,r){1&n&&(t.j41(0,"mat-tree",0),t.DNE(1,ee,5,3,"mat-tree-node",1)(2,te,7,5,"mat-tree-node",2),t.k0s()),2&n&&(t.Y8G("dataSource",r.dataSource)("treeControl",r.treeControl),t.R7$(2),t.Y8G("matTreeNodeDefWhen",r.hasChild))},dependencies:[z,O,A,R,I,B,U.Hl,U.iY,L.m_,L.An],styles:[".type-icon[_ngcontent-%COMP%]{color:#757575;margin-right:5px}"]})}return s})()}}]);