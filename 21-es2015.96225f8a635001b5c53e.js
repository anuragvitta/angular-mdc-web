(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hBXH:function(e,t,r){"use strict";r.r(t);var s=r("d2mR"),n=r("tyNb"),i=r("leug"),o=r("fXoL"),a=r("LuDt"),c=r("5l+6"),b=r("9UYg"),d=r("f6B5"),l=r("sEbM"),u={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},p={ARIA_VALUENOW:"aria-valuenow",BUFFER_SELECTOR:".mdc-linear-progress__buffer",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},h=r("mrSG"),m=r("tJqG"),f=function(e){function t(r){return e.call(this,h.a({},t.defaultAdapter,r))||this}return h.c(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},getBuffer:function(){return null},getPrimaryBar:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){},setStyle:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(u.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(u.REVERSED_CLASS),this.progress_=0,this.buffer_=1},t.prototype.setDeterminate=function(e){this.isDeterminate_=e,this.isDeterminate_?(this.adapter_.removeClass(u.INDETERMINATE_CLASS),this.adapter_.setAttribute(p.ARIA_VALUENOW,this.progress_.toString()),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_),this.setScale_(this.adapter_.getBuffer(),this.buffer_)):(this.isReversed_&&(this.adapter_.removeClass(u.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(u.REVERSED_CLASS)),this.adapter_.addClass(u.INDETERMINATE_CLASS),this.adapter_.removeAttribute(p.ARIA_VALUENOW),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))},t.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&(this.setScale_(this.adapter_.getPrimaryBar(),e),this.adapter_.setAttribute(p.ARIA_VALUENOW,e.toString()))},t.prototype.setBuffer=function(e){this.buffer_=e,this.isDeterminate_&&this.setScale_(this.adapter_.getBuffer(),e)},t.prototype.setReverse=function(e){this.isReversed_=e,this.isDeterminate_||(this.adapter_.removeClass(u.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(u.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(u.REVERSED_CLASS):this.adapter_.removeClass(u.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(u.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(u.CLOSED_CLASS)},t.prototype.setScale_=function(e,t){if(e){var r="scaleX("+t+")";this.adapter_.setStyle(e,Object(m.b)(window,"transform"),r)}},t}(r("m9I9").a),_=r("Hj8T");let R=(()=>{class e extends l.a{constructor(e,t,r){super(r),this._platform=e,this._changeDetectorRef=t,this.elementRef=r,this._initialized=!1,this.label=void 0,this._progress=0,this._determinate=!1,this._buffer=0,this._reversed=!1,this._root=this.elementRef.nativeElement}get progress(){return this._progress}set progress(e){this._progress=Object(d.e)(e)}get determinate(){return this._determinate}set determinate(e){this._determinate=Object(d.b)(e)}get buffer(){return this._buffer}set buffer(e){this._buffer=Object(d.e)(e)}get reversed(){return this._reversed}set reversed(e){this._reversed=Object(d.b)(e),this._syncReversedWithFoundation()}getDefaultFoundation(){return new f({addClass:e=>this._root.classList.add(e),forceLayout:()=>this._root.offsetWidth,getPrimaryBar:()=>this._root.querySelector(p.PRIMARY_BAR_SELECTOR),getBuffer:()=>this._root.querySelector(p.BUFFER_SELECTOR),hasClass:e=>this._root.classList.contains(e),removeClass:e=>this._root.classList.remove(e),setStyle:(e,t,r)=>e.style.setProperty(t,r),removeAttribute:e=>this._root.removeAttribute(e),setAttribute:(e,t)=>this._root.setAttribute(e,t)})}ngOnInit(){this._platform.isBrowser&&(this._initialized=!0,this._foundation.init(),this._syncProgressWithFoundation(),this._syncBufferWithFoundation(),this._syncDeterminateWithFoundation(),this._syncReversedWithFoundation(),this._changeDetectorRef.markForCheck())}ngOnChanges(e){this._initialized&&(e.progress&&this._syncProgressWithFoundation(),e.buffer&&this._syncBufferWithFoundation(),e.determinate&&this._syncDeterminateWithFoundation(),e.reversed&&this._syncReversedWithFoundation())}open(){this._foundation.open()}close(){this._foundation.close()}_syncProgressWithFoundation(){this._foundation.setProgress(this.progress)}_syncBufferWithFoundation(){this._foundation.setBuffer(this.buffer)}_syncDeterminateWithFoundation(){this._foundation.setDeterminate(this.determinate)}_syncReversedWithFoundation(){this._foundation.setReverse(this.reversed)}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(_.a),o.Lb(o.h),o.Lb(o.l))},e.\u0275cmp=o.Fb({type:e,selectors:[["mdc-linear-progress"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mdc-linear-progress"],hostVars:3,hostBindings:function(e,t){2&e&&(o.Cb("aria-label",t.label),o.Db("mdc-linear-progress--indeterminate",!t.determinate))},inputs:{label:"label",progress:"progress",determinate:"determinate",buffer:"buffer",reversed:"reversed"},exportAs:["mdcLinearProgress"],features:[o.yb,o.zb()],decls:6,vars:0,consts:[[1,"mdc-linear-progress__buffering-dots"],[1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],[1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Rb(2,"div",2),o.Mb(3,"span",3),o.Qb(),o.Rb(4,"div",4),o.Mb(5,"span",3),o.Qb())},encapsulation:2,changeDetection:0}),e})();var g=r("dkiD");const v=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Linear Progress",description:"Progress indicators express an unspecified wait time or display the length of a process.",references:[{name:"Material Design guidelines: Progress Activity",url:"https://material.io/components/progress-indicators/"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md"}],code:"import {MdcLinearProgressModule} from '@angular-mdc/web';",sass:"@use '@material/linear-progress/mdc-linear-progress';\n@use '@material/linear-progress';"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&o.tc(i.a,!0),2&e&&o.nc(r=o.ac())&&(t._componentViewer=r.first)},decls:1,vars:0,template:function(e,t){1&e&&o.Mb(0,"component-viewer")},directives:[a.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:59,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h3",1),o.xc(2,"MdcLinearProgress"),o.Qb(),o.Rb(3,"p"),o.xc(4," Selector: "),o.Rb(5,"span",2),o.xc(6,"mdc-linear-progress"),o.Qb(),o.Qb(),o.xc(7," Exported as: "),o.Rb(8,"span",2),o.xc(9,"mdcLinearProgress"),o.Qb(),o.Rb(10,"h4",3),o.xc(11,"Properties"),o.Qb(),o.Rb(12,"table"),o.Rb(13,"thead"),o.Rb(14,"tr"),o.Rb(15,"th"),o.xc(16,"Name"),o.Qb(),o.Rb(17,"th"),o.xc(18,"Description"),o.Qb(),o.Qb(),o.Qb(),o.Rb(19,"tbody"),o.Rb(20,"tr"),o.Rb(21,"td"),o.xc(22,"determinate: boolean"),o.Qb(),o.Rb(23,"td"),o.xc(24,"Puts the linear progress indicator in an determinate or indeterminate state."),o.Qb(),o.Qb(),o.Rb(25,"tr"),o.Rb(26,"td"),o.xc(27,"reversed: boolean"),o.Qb(),o.Rb(28,"td"),o.xc(29,"Reverses the direction of the linear progress indicator."),o.Qb(),o.Qb(),o.Rb(30,"tr"),o.Rb(31,"td"),o.xc(32,"progress: number"),o.Qb(),o.Rb(33,"td"),o.xc(34,"Sets the progress bar to this value. Value should be between [0, 1]."),o.Qb(),o.Qb(),o.Rb(35,"tr"),o.Rb(36,"td"),o.xc(37,"buffer: number"),o.Qb(),o.Rb(38,"td"),o.xc(39,"Sets the buffer bar to this value. Value should be between [0, 1]."),o.Qb(),o.Qb(),o.Rb(40,"tr"),o.Rb(41,"td"),o.xc(42,"label: string"),o.Qb(),o.Rb(43,"td"),o.xc(44,"Label indicating how the progress bar should be announced to the user."),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(45,"h4",3),o.xc(46,"Methods"),o.Qb(),o.Rb(47,"table"),o.Rb(48,"tbody"),o.Rb(49,"tr"),o.Rb(50,"td"),o.xc(51,"open()"),o.Qb(),o.Rb(52,"td"),o.xc(53,"Puts the component in the open state."),o.Qb(),o.Qb(),o.Rb(54,"tr"),o.Rb(55,"td"),o.xc(56,"close()"),o.Qb(),o.Rb(57,"td"),o.xc(58,"Puts the component in the closed state."),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[c.i,c.l],encapsulation:2}),e})()},{path:"sass",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:23,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h4",1),o.xc(2,"Sass Mixins"),o.Qb(),o.Rb(3,"table"),o.Rb(4,"thead"),o.Rb(5,"tr"),o.Rb(6,"th"),o.xc(7,"Mixin"),o.Qb(),o.Rb(8,"th"),o.xc(9,"Description"),o.Qb(),o.Qb(),o.Qb(),o.Rb(10,"tbody"),o.Rb(11,"tr"),o.Rb(12,"td"),o.Rb(13,"code"),o.xc(14,"bar-color($color)"),o.Qb(),o.Qb(),o.Rb(15,"td"),o.xc(16,"Sets the color of the progress bar"),o.Qb(),o.Qb(),o.Rb(17,"tr"),o.Rb(18,"td"),o.Rb(19,"code"),o.xc(20,"buffer-color($color)"),o.Qb(),o.Qb(),o.Rb(21,"td"),o.xc(22,"Sets the color of the buffer bar and dots"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[c.l],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.exampleIndeterminate={html:"<mdc-linear-progress></mdc-linear-progress>",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"},this.exampleDeterminate={html:'<mdc-linear-progress determinate [progress]="0.5" [buffer]="0.75"></mdc-linear-progress>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"}}alternateColors(e){const t="demo-linear-progress--custom";e.elementRef.nativeElement.classList.contains(t)?e.elementRef.nativeElement.classList.remove(t):e.elementRef.nativeElement.classList.add(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:30,vars:4,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["lp",""],[3,"example"],["determinate","",3,"progress","buffer"],["deter",""]],template:function(e,t){if(1&e){const e=o.Sb();o.Rb(0,"div",0),o.Rb(1,"h3",1),o.xc(2,"Indeterminate Progress"),o.Qb(),o.Rb(3,"div",2),o.Rb(4,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(13);return t.reversed=!t.reversed})),o.xc(5,"Reverse"),o.Qb(),o.Rb(6,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(13).open()})),o.xc(7,"Open"),o.Qb(),o.Rb(8,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(13).close()})),o.xc(9,"Close"),o.Qb(),o.Rb(10,"button",3),o.Zb("click",(function(){o.pc(e);const r=o.oc(13);return t.alternateColors(r)})),o.xc(11,"Alternate Colors"),o.Qb(),o.Qb(),o.Mb(12,"mdc-linear-progress",null,4),o.Mb(14,"example-viewer",5),o.Qb(),o.Rb(15,"div",0),o.Rb(16,"h3",1),o.xc(17,"Determinate Progress"),o.Qb(),o.Rb(18,"div",2),o.Rb(19,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(28);return t.reversed=!t.reversed})),o.xc(20,"Reverse"),o.Qb(),o.Rb(21,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(28).open()})),o.xc(22,"Open"),o.Qb(),o.Rb(23,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(28).close()})),o.xc(24,"Close"),o.Qb(),o.Rb(25,"button",3),o.Zb("click",(function(){o.pc(e);const r=o.oc(28);return t.alternateColors(r)})),o.xc(26,"Alternate Colors"),o.Qb(),o.Qb(),o.Mb(27,"mdc-linear-progress",6,7),o.Mb(29,"example-viewer",5),o.Qb()}2&e&&(o.Bb(14),o.ic("example",t.exampleIndeterminate),o.Bb(13),o.ic("progress",.5)("buffer",.75),o.Bb(2),o.ic("example",t.exampleDeterminate))},directives:[b.a,R,g.a],encapsulation:2}),e})()}]}];let Q=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[n.e.forChild(v)],n.e]}),e})();r.d(t,"LinearProgressModule",(function(){return S}));let S=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[s.a,Q]]}),e})()}}]);