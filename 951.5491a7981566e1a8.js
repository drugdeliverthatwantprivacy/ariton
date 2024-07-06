"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[951],{5951:(A,p,d)=>{d.d(p,{VT:()=>h,Wk:()=>I,_g:()=>l});var g=d(18617),v=d(45024),i=d(93953),f=d(89417),n=d(86600),k=d(60177);const R=["input"],y=["formField"],C=["*"];let u=0;class m{constructor(M,e){this.source=M,this.value=e}}const D={provide:f.kq,useExisting:(0,i.Rfq)(()=>h),multi:!0},_=new i.nKC("MatRadioGroup"),E=new i.nKC("mat-radio-default-options",{providedIn:"root",factory:function G(){return{color:"accent"}}});let h=(()=>{class a{get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+u++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new i.bkB}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&(this.onTouched(),this._changeDetector.markForCheck())}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new m(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static#e=this.\u0275fac=function(t){return new(t||a)(i.rXU(i.gRc))};static#i=this.\u0275dir=i.FsC({type:a,selectors:[["mat-radio-group"]],contentQueries:function(t,o,r){if(1&t&&i.wni(r,l,5),2&t){let c;i.mGM(c=i.lsd())&&(o._radios=c)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",i.L39],required:[2,"required","required",i.L39]},outputs:{change:"change"},exportAs:["matRadioGroup"],standalone:!0,features:[i.Jv_([D,{provide:_,useExisting:a}]),i.GFd]})}return a})(),l=(()=>{class a{get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(e,t,o,r,c,s,T,b){this._elementRef=t,this._changeDetector=o,this._focusMonitor=r,this._radioDispatcher=c,this._providerOverride=T,this._uniqueId="mat-radio-"+ ++u,this.id=this._uniqueId,this.disableRipple=!1,this.tabIndex=0,this.change=new i.bkB,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this._injector=(0,i.WQX)(i.zZn),this.radioGroup=e,this._noopAnimations="NoopAnimations"===s,b&&(this.tabIndex=(0,i.Udg)(b,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new m(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){const e=this.radioGroup;let t;if(t=e&&e.selected&&!this.disabled?e.selected===this?this.tabIndex:-1:this.tabIndex,t!==this._previousTabIndex){const o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",t+""),this._previousTabIndex=t,(0,i.mal)(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static#e=this.\u0275fac=function(t){return new(t||a)(i.rXU(_,8),i.rXU(i.aKT),i.rXU(i.gRc),i.rXU(g.FN),i.rXU(v.zP),i.rXU(i.bc$,8),i.rXU(E,8),i.kS0("tabindex"))};static#i=this.\u0275cmp=i.VBU({type:a,selectors:[["mat-radio-button"]],viewQuery:function(t,o){if(1&t&&(i.GBs(R,5),i.GBs(y,7,i.aKT)),2&t){let r;i.mGM(r=i.lsd())&&(o._inputElement=r.first),i.mGM(r=i.lsd())&&(o._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(t,o){1&t&&i.bIt("focus",function(){return o._inputElement.nativeElement.focus()}),2&t&&(i.BMQ("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),i.AVh("mat-primary","primary"===o.color)("mat-accent","accent"===o.color)("mat-warn","warn"===o.color)("mat-mdc-radio-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",i.L39],tabIndex:[2,"tabIndex","tabIndex",e=>null==e?0:(0,i.Udg)(e)],checked:[2,"checked","checked",i.L39],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",i.L39],required:[2,"required","required",i.L39],color:"color"},outputs:{change:"change"},exportAs:["matRadioButton"],standalone:!0,features:[i.GFd,i.aNF],ngContentSelectors:C,decls:13,vars:16,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,o){if(1&t){const r=i.RV6();i.NAR(),i.j41(0,"div",2,0)(2,"div",3)(3,"div",4),i.bIt("click",function(s){return i.eBV(r),i.Njj(o._onTouchTargetClick(s))}),i.k0s(),i.j41(4,"input",5,1),i.bIt("change",function(s){return i.eBV(r),i.Njj(o._onInputInteraction(s))}),i.k0s(),i.j41(6,"div",6),i.nrm(7,"div",7)(8,"div",8),i.k0s(),i.j41(9,"div",9),i.nrm(10,"div",10),i.k0s()(),i.j41(11,"label",11),i.SdG(12),i.k0s()()}2&t&&(i.Y8G("labelPosition",o.labelPosition),i.R7$(2),i.AVh("mdc-radio--disabled",o.disabled),i.R7$(2),i.Y8G("id",o.inputId)("checked",o.checked)("disabled",o.disabled)("required",o.required),i.BMQ("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby),i.R7$(5),i.Y8G("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),i.R7$(2),i.Y8G("for",o.inputId))},dependencies:[n.r6,n.tO],styles:['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color);opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color);opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio--disabled{cursor:default;pointer-events:none}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color);font-family:var(--mat-radio-label-text-font);line-height:var(--mat-radio-label-text-line-height);font-size:var(--mat-radio-label-text-size);letter-spacing:var(--mat-radio-label-text-tracking);font-weight:var(--mat-radio-label-text-weight)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0})}return a})(),I=(()=>{class a{static#e=this.\u0275fac=function(t){return new(t||a)};static#i=this.\u0275mod=i.$C({type:a});static#t=this.\u0275inj=i.G2t({imports:[n.yE,k.MD,n.pZ,l,n.yE]})}return a})()}}]);