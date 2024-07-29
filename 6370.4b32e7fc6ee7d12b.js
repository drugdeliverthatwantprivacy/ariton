"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6370],{46370:(W,_,o)=>{o.r(_),o.d(_,{FriendsComponent:()=>Y});var u=o(10467),e=o(93953),F=o(86600),b=o(18617),E=o(60177);let D=0;const y="mat-badge-content",g=new Set;let M=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["ng-component"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(a,i){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}return n})(),j=(()=>{class n{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}constructor(t,a,i,r,d){this._ngZone=t,this._elementRef=a,this._ariaDescriber=i,this._renderer=r,this._animationMode=d,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=D++,this._isInitialized=!1,this._interactivityChecker=(0,e.WQX)(b.Z7),this._document=(0,e.WQX)(E.qQ);const c=(0,e.WQX)(e.o8S);if(!g.has(c)){g.add(c);const m=(0,e.a0P)(M,{environmentInjector:(0,e.WQX)(e.uvJ)});c.onDestroy(()=>{g.delete(c),0===g.size&&m.destroy()})}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const t=this._renderer.createElement("span"),a="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(y),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(a)})}):t.classList.add(a),t}_updateRenderedContent(t){const a=`${t??""}`.trim();this._isInitialized&&a&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=a),this._content=a}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){const a=this._elementRef.nativeElement.classList;a.remove(`mat-badge-${this._color}`),t&&a.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${y}`);for(const a of Array.from(t))a!==this._badgeElement&&a.remove()}static#e=this.\u0275fac=function(a){return new(a||n)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(b.vr),e.rXU(e.sFG),e.rXU(e.bc$,8))};static#t=this.\u0275dir=e.FsC({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(a,i){2&a&&e.AVh("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small","small"===i.size)("mat-badge-medium","medium"===i.size)("mat-badge-large","large"===i.size)("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",e.L39],disabled:[2,"matBadgeDisabled","disabled",e.L39],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",e.L39]},standalone:!0,features:[e.GFd]})}return n})(),R=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.$C({type:n});static#a=this.\u0275inj=e.G2t({imports:[b.Pd,F.yE,F.yE]})}return n})();var f=o(88834),s=o(25596),C=o(99213),T=o(3902),p=o(59115),h=o(96850),z=o(34635),k=o(22312),x=o(31439),A=o(39434),I=o(345),N=o(78013),v=o(14823),$=o(33347);let X=(()=>{class n{constructor(){this.did=e.hFB.required()}onClick(t){var a=this;return(0,u.A)(function*(){console.log(t);try{yield navigator.clipboard.writeText(a.did()),console.log("Text copied to clipboard")}catch(i){console.error("Failed to copy: ",i)}})()}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-did"]],hostBindings:function(a,i){1&a&&e.bIt("click",function(d){return i.onClick(d)})},inputs:{did:[1,"did"]},standalone:!0,features:[e.aNF],decls:3,vars:4,consts:[[3,"matTooltip"]],template:function(a,i){1&a&&(e.j41(0,"span",0),e.EFF(1),e.nI1(2,"did"),e.k0s()),2&a&&(e.Y8G("matTooltip",i.did()),e.R7$(),e.JRh(e.bMT(2,2,i.did())))},dependencies:[v.uc,v.oV,$.k],styles:["[_nghost-%COMP%]{cursor:pointer}"]})}return n})();const G=["*"];function P(n,l){if(1&n&&(e.j41(0,"p"),e.EFF(1),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.JRh(t.data().message)}}let O=(()=>{class n{constructor(){this.identity=(0,e.WQX)(z.K),this.profile=(0,e.WQX)(A.p),this.sanitizer=(0,e.WQX)(I.up),this.did=e.hFB.required(),this.data=(0,e.vPA)({})}ngAfterViewInit(){var t=this;return(0,u.A)(function*(){if(t.did()){const a=yield t.profile.loadProfile(t.did());console.log(a),t.data.set(a)}})()}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-profile-card"]],inputs:{did:[1,"did"]},standalone:!0,features:[e.aNF],ngContentSelectors:G,decls:13,vars:7,consts:[[3,"did"],["mat-card-image","","onerror","this.src='/avatar-placeholder.png';this.onerror='';",3,"src"]],template:function(a,i){if(1&a&&(e.NAR(),e.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e.EFF(3),e.k0s(),e.j41(4,"mat-card-subtitle"),e.nrm(5,"app-did",0),e.k0s()(),e.nrm(6,"br")(7,"img",1),e.nI1(8,"safeResourceUrl"),e.j41(9,"mat-card-content"),e.DNE(10,P,2,1,"p"),e.k0s(),e.j41(11,"mat-card-actions"),e.SdG(12),e.k0s()()),2&a){let r,d;e.R7$(3),e.Lme("",null==(r=i.data().profile)?null:r.name," (",null==(r=i.data().profile)?null:r.title,")"),e.R7$(2),e.Y8G("did",null==(d=i.data().profile)?null:d.did),e.R7$(2),e.Y8G("src",e.bMT(8,5,i.data().avatar),e.B4B),e.R7$(3),e.vxM(i.data().message?10:-1)}},dependencies:[X,v.uc,s.Hu,s.RN,s.YY,s.m2,s.MM,s.kF,s.Lc,s.dh,N.d]})}return n})();var L=o(71997);function w(n,l){1&n&&(e.j41(0,"mat-icon",6),e.EFF(1,"person"),e.k0s(),e.j41(2,"span",7),e.EFF(3,"Friends"),e.k0s())}function S(n,l){if(1&n&&(e.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e.EFF(3),e.k0s(),e.j41(4,"mat-card-title-group")(5,"button",8)(6,"mat-icon"),e.EFF(7,"more_vert"),e.k0s()()()(),e.nrm(8,"br")(9,"img",9),e.k0s()),2&n){const t=l.$implicit;e.XpG();const a=e.sdS(7);e.R7$(3),e.SpI("",t.name," "),e.R7$(2),e.Y8G("matMenuTriggerFor",a),e.R7$(4),e.Y8G("src",t.thumbnail,e.B4B)}}function V(n,l){if(1&n&&(e.j41(0,"mat-icon",6),e.EFF(1,"person_add"),e.k0s(),e.j41(2,"span",10),e.EFF(3,"Requests\xa0"),e.k0s()),2&n){const t=e.XpG();e.R7$(2),e.Y8G("matBadge",t.requests().length)}}function H(n,l){if(1&n){const t=e.RV6();e.j41(0,"button",11),e.EFF(1,"PENDING"),e.k0s(),e.j41(2,"button",12),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,r=e.XpG();return e.Njj(r.reject(null==i.record?null:i.record.recordId))}),e.EFF(3,"DELETE"),e.k0s()}2&n&&e.Y8G("disabled",!0)}function U(n,l){if(1&n){const t=e.RV6();e.j41(0,"button",13),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,r=e.XpG();return e.Njj(r.accept(null==i.record?null:i.record.recordId))}),e.EFF(1,"CONFIRM"),e.k0s(),e.j41(2,"button",12),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,r=e.XpG();return e.Njj(r.reject(null==i.record?null:i.record.recordId))}),e.EFF(3,"DELETE"),e.k0s()}}function Q(n,l){if(1&n&&(e.j41(0,"app-profile-card",5),e.DNE(1,H,4,1)(2,U,4,0),e.k0s()),2&n){const t=l.$implicit;e.Y8G("did",null==t.record?null:t.record.author),e.R7$(),e.vxM("out"==t.direction?1:2)}}let Y=(()=>{class n{constructor(){this.requests=(0,e.vPA)([]),this.friends=(0,e.vPA)([]),this.identity=(0,e.WQX)(z.K),this.app=(0,e.WQX)(x.d),(0,e.QZP)(()=>{this.app.initialized()&&this.loadRequests()})}loadRequests(){var t=this;return(0,u.A)(function*(){var{records:a}=yield t.identity.web5.dwn.records.query({message:{filter:{protocol:k.iU.uri,schema:"https://schema.ariton.app/message/schema/request",dataFormat:"application/json"}}});if(console.log("Records from requests:"),console.log(a),a)for(const d of a){let c=yield d.data.json(),m={record:d,data:c};d.author==t.identity.did&&(m.direction="out"),t.requests.update(B=>[...B,m])}})()}accept(t){}reject(t){}ngOnInit(){this.friends.set([{name:"Lu",thumbnail:"https://ariton.app/assets/lu.jpg"},{name:"Sondre",thumbnail:"https://ariton.app/assets/sondre.png"}])}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-friends"]],standalone:!0,features:[e.aNF],decls:24,vars:0,consts:[["menu","matMenu"],["mat-tab-label",""],[1,"container","responsive-grid"],["xPosition","before"],["mat-menu-item",""],[3,"did"],[1,"tab-icon"],[1,"hide-small"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-card-image","",3,"src"],["matBadgeOverlap","false",1,"hide-small",3,"matBadge"],["mat-flat-button","",3,"disabled"],["mat-button","",3,"click"],["mat-flat-button","",3,"click"]],template:function(a,i){1&a&&(e.j41(0,"mat-tab-group")(1,"mat-tab"),e.DNE(2,w,4,0,"ng-template",1),e.j41(3,"div",2),e.Z7z(4,S,10,3,"mat-card",null,e.fX1),e.k0s(),e.j41(6,"mat-menu",3,0)(8,"button",4)(9,"mat-icon"),e.EFF(10,"favorite"),e.k0s(),e.j41(11,"span"),e.EFF(12,"Favorite"),e.k0s()(),e.nrm(13,"mat-divider"),e.j41(14,"button",4)(15,"mat-icon"),e.EFF(16,"person_remove"),e.k0s(),e.j41(17,"span"),e.EFF(18,"Unfriend"),e.k0s()()()(),e.j41(19,"mat-tab"),e.DNE(20,V,4,1,"ng-template",1),e.j41(21,"div",2),e.Z7z(22,Q,3,2,"app-profile-card",5,e.fX1),e.k0s()()()),2&a&&(e.R7$(4),e.Dyx(i.friends()),e.R7$(18),e.Dyx(i.requests()))},dependencies:[E.MD,T.Fg,L.q,s.Hu,s.RN,s.MM,s.kF,s.dh,s.aJ,f.Hl,f.$z,f.iY,h.RI,h.ES,h.mq,h.T8,C.m_,C.An,R,j,p.Cn,p.kk,p.fb,p.Cp,O],styles:[".toolbox[_ngcontent-%COMP%]{display:flex;gap:1em;align-items:baseline}.toolbox-left[_ngcontent-%COMP%]{flex-grow:2}.toolbox-right[_ngcontent-%COMP%]{flex-grow:1}.search-input[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding:24px}img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.responsive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.2em}.mat-badge[_ngcontent-%COMP%]{margin-left:.5em;border-color:2px solid red}"]})}return n})()}}]);