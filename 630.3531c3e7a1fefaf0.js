"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[630],{64630:(F,s,t)=>{t.r(s),t.d(s,{IntroductionComponent:()=>m});var l=t(10467),e=t(93953),i=t(88834),r=t(71997),u=t(18498),c=t(43794);const d=()=>["/communities"],p=()=>["/account/password"],E=()=>["/account/backup"];let m=(()=>{class o{constructor(){this.storage=(0,e.WQX)(c.n)}wipe(){var a=this;return(0,l.A)(function*(){a.storage.clear(),console.log("Local storage data has been wiped!"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/DID_RESOLVERCACHE"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/DWN_DATASTORE"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/DWN_EVENTLOG"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/DWN_MESSAGEINDEX"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/DWN_MESSAGESTORE"),yield indexedDB.deleteDatabase("level-js-DATA/AGENT/VAULT_STORE"),console.log("Data has been wiped!"),window.location.reload()})()}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.VBU({type:o,selectors:[["app-introduction"]],standalone:!0,features:[e.aNF],decls:64,vars:6,consts:()=>{let a;return a=$localize`Introduction to Ariton`,[a,["src","community.png",1,"community-illustration"],["mat-stroked-button","",3,"routerLink"],["mat-flat-button","",3,"routerLink"],["mat-flat-button","","color","warn",3,"click"]]},template:function(n,_){1&n&&(e.j41(0,"h1"),e.EFF(1,"Welcome"),e.k0s(),e.nrm(2,"img",1),e.j41(3,"p"),e.EFF(4,"Ariton is different than your average app. "),e.j41(5,"strong"),e.EFF(6,"You don't need to register to sign up"),e.k0s(),e.EFF(7,", Ariton has already made a new account for you."),e.k0s(),e.j41(8,"p"),e.EFF(9," If you want to keep your account, you can "),e.j41(10,"strong"),e.EFF(11,"take a backup"),e.k0s(),e.EFF(12," of it. This will allow you to use your account on other devices, and if you delete your browser data, you can restore it. "),e.k0s(),e.j41(13,"p"),e.EFF(14,"We also suggest you start protecting your account by "),e.j41(15,"strong"),e.EFF(16,"securing it with your personal password"),e.k0s(),e.EFF(17,". Right now anyone who have access to your device, can access your Ariton account. "),e.k0s(),e.j41(18,"p")(19,"button",2),e.EFF(20,"Skip and jump into the app"),e.k0s(),e.j41(21,"button",3),e.EFF(22,"Set a secure password"),e.k0s(),e.j41(23,"button",3),e.EFF(24,"Backup your account"),e.k0s(),e.j41(25,"button",4),e.bIt("click",function(){return _.wipe()}),e.EFF(26,"Reset (Wipe) Data"),e.k0s()(),e.nrm(27,"mat-divider"),e.j41(28,"h1"),e.pXf(29,0),e.k0s(),e.j41(30,"p"),e.EFF(31," Remember that, during the alpha phase, all data entered into Ariton will be wiped and lost at any time.\n"),e.k0s(),e.j41(32,"p")(33,"strong"),e.EFF(34,"Dashboard"),e.k0s(),e.EFF(35," will be a dynamic home page where users can see a summary of their data and access the various parts of the app.\n"),e.k0s(),e.j41(36,"p")(37,"strong"),e.EFF(38,"Communities"),e.k0s(),e.EFF(39," will be a place where users can create and join communities of interest, and also see the latest updates from each community.\n"),e.k0s(),e.j41(40,"p")(41,"strong"),e.EFF(42,"Marketplace"),e.k0s(),e.EFF(43," will be a unified view of all available goods and services across all communities you are a member of.\n"),e.k0s(),e.j41(44,"p")(45,"strong"),e.EFF(46,"Apps"),e.k0s(),e.EFF(47," will list your prefered apps and other (mini) apps that are available for you to use within Ariton.\n"),e.k0s(),e.j41(48,"p")(49,"strong"),e.EFF(50,"Registries"),e.k0s(),e.EFF(51," is currently listed in the menu, but might be turned into a miniapp.\n"),e.k0s(),e.j41(52,"p")(53,"strong"),e.EFF(54,"Data"),e.k0s(),e.EFF(55,' is the place where you can find data you can use for different purposes. You can be come a data provider yourself. Data available here, is data that can be used by the (mini) apps within Ariton. Example app: "Video Viewer" that can show videos from the "Child Safe Video" data registry.\n'),e.k0s(),e.j41(56,"p")(57,"strong"),e.EFF(58,"Identity"),e.k0s(),e.EFF(59," is where you can view and manage your identity. You can also take a backup of your identity.\n"),e.k0s(),e.j41(60,"p")(61,"strong"),e.EFF(62,"Settings"),e.k0s(),e.EFF(63," you can use to change the behavior and preferences of Ariton.\n"),e.k0s()),2&n&&(e.R7$(19),e.Y8G("routerLink",e.lJ4(3,d)),e.R7$(2),e.Y8G("routerLink",e.lJ4(4,p)),e.R7$(2),e.Y8G("routerLink",e.lJ4(5,E)))},dependencies:[i.Hl,i.$z,r.w,r.q,u.Wk],styles:[".community-illustration[_ngcontent-%COMP%]{max-width:256px;float:right;margin-left:1em}h1[_ngcontent-%COMP%]{clear:both}button[_ngcontent-%COMP%]{margin-right:1em;margin-top:1em}mat-divider[_ngcontent-%COMP%]{margin-top:3em;margin-bottom:3em}"]})}return o})()}}]);