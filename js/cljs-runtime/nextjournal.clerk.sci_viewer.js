goog.provide('nextjournal.clerk.sci_viewer');
goog.scope(function(){
  nextjournal.clerk.sci_viewer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
var module$node_modules$framer_motion$dist$cjs$index=shadow.js.require("module$node_modules$framer_motion$dist$cjs$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
nextjournal.clerk.sci_viewer.color_classes = (function nextjournal$clerk$sci_viewer$color_classes(selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value-color","value-color",-1448916937),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-green"),new cljs.core.Keyword(null,"symbol-color","symbol-color",-983152467),(cljs.core.truth_(selected_QMARK_)?"white-90":"dark-blue"),new cljs.core.Keyword(null,"prefix-color","prefix-color",-1936761188),(cljs.core.truth_(selected_QMARK_)?"white-50":"black-30"),new cljs.core.Keyword(null,"label-color","label-color",813573617),(cljs.core.truth_(selected_QMARK_)?"white-90":"black-60"),new cljs.core.Keyword(null,"badge-background-color","badge-background-color",1563868990),(cljs.core.truth_(selected_QMARK_)?"bg-white-20":"bg-black-10")], null);
});


nextjournal.clerk.sci_viewer.nbsp = goog.string.unescapeEntities("&nbsp;");

nextjournal.clerk.sci_viewer.toc_items = (function nextjournal$clerk$sci_viewer$toc_items(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__77685){
var map__77686 = p__77685;
var map__77686__$1 = cljs.core.__destructure_map(map__77686);
var item = map__77686__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77686__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(content)){
var title = nextjournal.markdown.transform.__GT_text(item);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"path","path",-188191168),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.normalize.normalize_fragment(title))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),(nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1(children) : nextjournal.clerk.sci_viewer.toc_items.call(null,children))], null)));
} else {
var G__77687 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item);
return (nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.toc_items.cljs$core$IFn$_invoke$arity$1(G__77687) : nextjournal.clerk.sci_viewer.toc_items.call(null,G__77687));
}
}),cljs.core.PersistentVector.EMPTY,items);
});
nextjournal.clerk.sci_viewer.dark_mode_toggle = (function nextjournal$clerk$sci_viewer$dark_mode_toggle(_BANG_state){
var map__77688 = cljs.core.deref(_BANG_state);
var map__77688__$1 = cljs.core.__destructure_map(map__77688);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77688__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
var spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(200),new cljs.core.Keyword(null,"damping","damping",1054389681),(10)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.dark-mode-toggle","div.relative.dark-mode-toggle",-1696831098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer","button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer",-1717879008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not(dark_mode_QMARK_));
})], null),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 50 50",new cljs.core.Keyword(null,"key","key",-1516042587),"moon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"rotate","rotate",152705015),(90)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"sun",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.circle,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"11.9998",new cljs.core.Keyword(null,"cy","cy",755331060),"11.9998",new cljs.core.Keyword(null,"r","r",-471384190),"5.75375",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.g,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(45)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.08982",new cljs.core.Keyword(null,"cy","cy",755331060),"6.85502",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 3.08982 6.85502)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.0903",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 3.0903 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"22.2881",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 20.9101 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"6.8555",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 20.9101 6.8555)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"1.71143",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null))], null)], null);
});
nextjournal.clerk.sci_viewer.local_storage_dark_mode_key = "clerk-darkmode";
nextjournal.clerk.sci_viewer.set_dark_mode_BANG_ = (function nextjournal$clerk$sci_viewer$set_dark_mode_BANG_(dark_mode_QMARK_){
var class_list_77932 = document.querySelector("html").classList;
if(cljs.core.truth_(dark_mode_QMARK_)){
class_list_77932.add("dark");
} else {
class_list_77932.remove("dark");
}

return nextjournal.ui.components.localstorage.set_item_BANG_(nextjournal.clerk.sci_viewer.local_storage_dark_mode_key,dark_mode_QMARK_);
});
nextjournal.clerk.sci_viewer.setup_dark_mode_BANG_ = (function nextjournal$clerk$sci_viewer$setup_dark_mode_BANG_(_BANG_state){
var map__77689 = cljs.core.deref(_BANG_state);
var map__77689__$1 = cljs.core.__destructure_map(map__77689);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77689__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.sci-viewer","dark-mode","nextjournal.clerk.sci-viewer/dark-mode",-1934877842),(function (_,___$1,old,p__77690){
var map__77691 = p__77690;
var map__77691__$1 = cljs.core.__destructure_map(map__77691);
var dark_mode_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77691__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096).cljs$core$IFn$_invoke$arity$1(old),dark_mode_QMARK___$1)){
return nextjournal.clerk.sci_viewer.set_dark_mode_BANG_(dark_mode_QMARK___$1);
} else {
return null;
}
}));

if(cljs.core.truth_(dark_mode_QMARK_)){
return nextjournal.clerk.sci_viewer.set_dark_mode_BANG_(dark_mode_QMARK_);
} else {
return null;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_eval_counter !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_eval_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
nextjournal.clerk.sci_viewer.notebook = (function nextjournal$clerk$sci_viewer$notebook(p__77696){
var map__77697 = p__77696;
var map__77697__$1 = cljs.core.__destructure_map(map__77697);
var _doc = map__77697__$1;
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var toc_visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77697__$1,new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352));
var with_let77698 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77698","with-let77698",1951103300));
var temp__5757__auto___77939 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77939 == null)){
} else {
var c__62567__auto___77940 = temp__5757__auto___77939;
if((with_let77698.generation === c__62567__auto___77940.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77698.generation = c__62567__auto___77940.ratomGeneration);
}

var init77699 = (with_let77698.length === (0));
var local_storage_key = ((((init77699) || (cljs.core.not(with_let77698.hasOwnProperty((0))))))?(with_let77698[(0)] = "clerk-navbar"):(with_let77698[(0)]));
var _BANG_state = ((((init77699) || (cljs.core.not(with_let77698.hasOwnProperty((1))))))?(with_let77698[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.sci_viewer.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),nextjournal.ui.components.localstorage.get_item(nextjournal.clerk.sci_viewer.local_storage_dark_mode_key),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-over","slide-over",1619183007),"bg-slate-100 dark:bg-gray-800 font-sans border-r dark:border-slate-900"], null),new cljs.core.Keyword(null,"width","width",-384071477),(220),new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880),(300),new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558),local_storage_key,new cljs.core.Keyword(null,"open?","open?",1238443125),(function (){var temp__5755__auto__ = nextjournal.ui.components.localstorage.get_item(local_storage_key);
if((temp__5755__auto__ == null)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility);
} else {
var stored_open_QMARK_ = temp__5755__auto__;
return stored_open_QMARK_;
}
})()], null))):(with_let77698[(1)]));
var root_ref_fn = ((((init77699) || (cljs.core.not(with_let77698.hasOwnProperty((2))))))?(with_let77698[(2)] = (function (p1__77693_SHARP_){
if(cljs.core.truth_(p1__77693_SHARP_)){
return nextjournal.clerk.sci_viewer.setup_dark_mode_BANG_(_BANG_state);
} else {
return null;
}
})):(with_let77698[(2)]));
var ref_fn = ((((init77699) || (cljs.core.not(with_let77698.hasOwnProperty((3))))))?(with_let77698[(3)] = (function (p1__77694_SHARP_){
if(cljs.core.truth_(p1__77694_SHARP_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473),p1__77694_SHARP_);
} else {
return null;
}
})):(with_let77698[(3)]));
var res77700 = (function (){var map__77702 = cljs.core.deref(_BANG_state);
var map__77702__$1 = cljs.core.__destructure_map(map__77702);
var md_toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77702__$1,new cljs.core.Keyword(null,"md-toc","md-toc",401610567));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md_toc,toc)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.sci_viewer.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility)], 0));
}

var G__77703 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.dark_mode_toggle,_BANG_state], null)], null),(cljs.core.truth_((function (){var and__4251__auto__ = toc;
if(cljs.core.truth_(and__4251__auto__)){
return toc_visibility;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.toggle_button,_BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uppercase.tracking-wider.ml-1.font-bold","span.uppercase.tracking-wider.ml-1.font-bold",184219074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[12px]"], null),"ToC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-10 fixed right-2 top-2 md:right-auto md:left-3 md:top-3 text-slate-400 font-sans text-xs hover:underline cursor-pointer flex items-center bg-white dark:bg-gray-900 py-1 px-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-slate-200 dark:border-gray-500 shadow md:shadow-none dark:text-slate-400 dark:hover:text-white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.panel,_BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.navbar,_BANG_state], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.h-screen.overflow-y-auto.scroll-container","div.flex-auto.h-screen.overflow-y-auto.scroll-container",-676818277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.viewer-notebook.flex-auto","div.flex.flex-col.items-center.viewer-notebook.flex-auto",1639150866),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var map__77705 = nextjournal.clerk.viewer.__GT_viewer(x);
var map__77705__$1 = cljs.core.__destructure_map(map__77705);
var viewer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var inner_viewer_name = (function (){var G__77706 = x;
var G__77706__$1 = (((G__77706 == null))?null:nextjournal.clerk.viewer.__GT_value(G__77706));
var G__77706__$2 = (((G__77706__$1 == null))?null:nextjournal.clerk.viewer.__GT_viewer(G__77706__$1));
if((G__77706__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__77706__$2);
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(cljs.core.truth_(viewer_name)?["viewer-",cljs.core.name(viewer_name)].join(''):null),(cljs.core.truth_(inner_viewer_name)?["viewer-",cljs.core.name(inner_viewer_name)].join(''):null),(function (){var G__77709 = (function (){var or__4253__auto__ = nextjournal.clerk.viewer.width(x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__77710 = viewer_name;
var G__77710__$1 = (((G__77710 instanceof cljs.core.Keyword))?G__77710.fqn:null);
switch (G__77710__$1) {
case "code":
case "code-folded":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__77709__$1 = (((G__77709 instanceof cljs.core.Keyword))?G__77709.fqn:null);
switch (G__77709__$1) {
case "wide":
return "w-full max-w-wide";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8";

}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,x], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_eval_counter))].join('')], null));
}),xs))], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77703) : nextjournal.clerk.sci_viewer.html.call(null,G__77703));
})();
return res77700;
});
nextjournal.clerk.sci_viewer.eval_viewer_fn = (function nextjournal$clerk$sci_viewer$eval_viewer_fn(eval_f,form){
try{return (eval_f.cljs$core$IFn$_invoke$arity$1 ? eval_f.cljs$core$IFn$_invoke$arity$1(form) : eval_f.call(null,form));
}catch (e77714){if((e77714 instanceof Error)){
var e = e77714;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["error in render-fn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),form], null),e);
} else {
throw e77714;

}
}});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_edamame_opts !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_edamame_opts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all","all",892129742),true,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"location?","location?",425878086),cljs.core.seq_QMARK_,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),false,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (tag){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"viewer-fn","viewer-fn",1346728242,null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.eval_viewer_fn,nextjournal.clerk.viewer.__GT_viewer_fn),new cljs.core.Symbol(null,"viewer-eval","viewer-eval",-1125780039,null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.eval_viewer_fn,cljs.core._STAR_eval_STAR_)], null),tag);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"space?","space?",-1369314665),(!(cljs.core.vector_QMARK_(value))),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__77717 = value;
if(((cljs.core.vector_QMARK_(value)) && (typeof cljs.core.second(value) === 'number'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77717,(1),(function (memory_address){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-hex","number-hex",-9072138),memory_address);
}));
} else {
return G__77717;
}
})()], null));
});
}
}),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clj","clj",-660495428),null], null), null)], null));
}
nextjournal.clerk.sci_viewer.read_string = (function nextjournal$clerk$sci_viewer$read_string(s){
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_edamame_opts));
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.read_string', nextjournal.clerk.sci_viewer.read_string);
nextjournal.clerk.sci_viewer.opts__GT_query = (function nextjournal$clerk$sci_viewer$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77723_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__77723_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.clerk.sci_viewer.unreadable_edn_viewer = (function nextjournal$clerk$sci_viewer$unreadable_edn_viewer(edn){
var G__77725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap.cmt-default","span.inspected-value.whitespace-nowrap.cmt-default",1768608485),edn], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77725) : nextjournal.clerk.sci_viewer.html.call(null,G__77725));
});
nextjournal.clerk.sci_viewer.error_badge = (function nextjournal$clerk$sci_viewer$error_badge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77950 = arguments.length;
var i__4865__auto___77951 = (0);
while(true){
if((i__4865__auto___77951 < len__4864__auto___77950)){
args__4870__auto__.push((arguments[i__4865__auto___77951]));

var G__77952 = (i__4865__auto___77951 + (1));
i__4865__auto___77951 = G__77952;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex","div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex",1436970942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.text-red-400","svg.h-4.w-4.text-red-400",-439155594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.font-bold","div.ml-2.font-bold",1964855578)], null),content)], null);
}));

(nextjournal.clerk.sci_viewer.error_badge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.sci_viewer.error_badge.cljs$lang$applyTo = (function (seq77726){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77726));
}));

nextjournal.clerk.sci_viewer.error_view = (function nextjournal$clerk$sci_viewer$error_view(error){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose",1278649712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-mono.text-red-600.dark:text-red-300.font-bold","p.font-mono.text-red-600.dark:text-red-300.font-bold",-1938208543),error.message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2","pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2",113939522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] max-h-[155px]"], null),(function (){try{return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines(error.stack))));
}catch (e77728){if((e77728 instanceof Error)){
var _ = e77728;
return null;
} else {
throw e77728;

}
}})()], null),(function (){var temp__5757__auto__ = error.data;
if((temp__5757__auto__ == null)){
return null;
} else {
var data = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,data], null)], null);
}
})()], null);
});
nextjournal.clerk.sci_viewer.error_boundary = (function nextjournal$clerk$sci_viewer$error_boundary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77955 = arguments.length;
var i__4865__auto___77956 = (0);
while(true){
if((i__4865__auto___77956 < len__4864__auto___77955)){
args__4870__auto__.push((arguments[i__4865__auto___77956]));

var G__77957 = (i__4865__auto___77956 + (1));
i__4865__auto___77956 = G__77957;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.sci_viewer.error_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(nextjournal.clerk.sci_viewer.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (_BANG_error,_){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (___$1,___$2){
return null;
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (___$1,e,_info){
return cljs.core.reset_BANG_(_BANG_error,e);
}),new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
cljs.core.reset_BANG_(_BANG_error,e);

return ({});
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__77960__delegate = function (_error,children){
var temp__5751__auto__ = cljs.core.deref(_BANG_error);
if(cljs.core.truth_(temp__5751__auto__)){
var error = temp__5751__auto__;
return nextjournal.clerk.sci_viewer.error_view(error);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children);
}
};
var G__77960 = function (_error,var_args){
var children = null;
if (arguments.length > 1) {
var G__77961__i = 0, G__77961__a = new Array(arguments.length -  1);
while (G__77961__i < G__77961__a.length) {G__77961__a[G__77961__i] = arguments[G__77961__i + 1]; ++G__77961__i;}
  children = new cljs.core.IndexedSeq(G__77961__a,0,null);
} 
return G__77960__delegate.call(this,_error,children);};
G__77960.cljs$lang$maxFixedArity = 1;
G__77960.cljs$lang$applyTo = (function (arglist__77962){
var _error = cljs.core.first(arglist__77962);
var children = cljs.core.rest(arglist__77962);
return G__77960__delegate(_error,children);
});
G__77960.cljs$core$IFn$_invoke$arity$variadic = G__77960__delegate;
return G__77960;
})()
], null));
}));

(nextjournal.clerk.sci_viewer.error_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.sci_viewer.error_boundary.cljs$lang$applyTo = (function (seq77730){
var G__77731 = cljs.core.first(seq77730);
var seq77730__$1 = cljs.core.next(seq77730);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77731,seq77730__$1);
}));

nextjournal.clerk.sci_viewer.fetch_BANG_ = (function nextjournal$clerk$sci_viewer$fetch_BANG_(p__77737,opts){
var map__77738 = p__77737;
var map__77738__$1 = cljs.core.__destructure_map(map__77738);
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77738__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),((cljs.core.seq(opts))?["?",nextjournal.clerk.sci_viewer.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__77735_SHARP_){
return p1__77735_SHARP_.text();
})).then((function (p1__77736_SHARP_){
try{return nextjournal.clerk.sci_viewer.read_string(p1__77736_SHARP_);
}catch (e77743){if((e77743 instanceof Error)){
var e = e77743;
console.error(({"message": "sci read error", "blob-id": blob_id, "code-string": p1__77736_SHARP_, "error": e}));

return nextjournal.clerk.sci_viewer.unreadable_edn_viewer(p1__77736_SHARP_);
} else {
throw e77743;

}
}}));
});
nextjournal.clerk.sci_viewer.read_result = (function nextjournal$clerk$sci_viewer$read_result(p__77744,_BANG_error){
var map__77745 = p__77744;
var map__77745__$1 = cljs.core.__destructure_map(map__77745);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77745__$1,new cljs.core.Keyword("nextjournal","edn","nextjournal/edn",-1219681583));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77745__$1,new cljs.core.Keyword("nextjournal","string","nextjournal/string",304722890));
if(cljs.core.truth_(edn)){
try{return nextjournal.clerk.sci_viewer.read_string(edn);
}catch (e77746){if((e77746 instanceof Error)){
var e = e77746;
return cljs.core.reset_BANG_(_BANG_error,e);
} else {
throw e77746;

}
}} else {
return nextjournal.clerk.sci_viewer.unreadable_edn_viewer(string);
}
});
nextjournal.clerk.sci_viewer.result_viewer = (function nextjournal$clerk$sci_viewer$result_viewer(p__77748,_opts){
var map__77749 = p__77748;
var map__77749__$1 = cljs.core.__destructure_map(map__77749);
var result = map__77749__$1;
var fetch_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77749__$1,new cljs.core.Keyword("nextjournal","fetch-opts","nextjournal/fetch-opts",61437218));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77749__$1,new cljs.core.Keyword("nextjournal","hash","nextjournal/hash",669857928));
var G__77750 = (function (){var with_let77751 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77751","with-let77751",-497316207));
var temp__5757__auto___77963 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77963 == null)){
} else {
var c__62567__auto___77964 = temp__5757__auto___77963;
if((with_let77751.generation === c__62567__auto___77964.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77751.generation = c__62567__auto___77964.ratomGeneration);
}

var init77752 = (with_let77751.length === (0));
var _BANG_hash = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((0))))))?(with_let77751[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hash)):(with_let77751[(0)]));
var _BANG_error = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((1))))))?(with_let77751[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let77751[(1)]));
var _BANG_desc = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((2))))))?(with_let77751[(2)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.sci_viewer.read_result(result,_BANG_error))):(with_let77751[(2)]));
var _BANG_fetch_opts = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((3))))))?(with_let77751[(3)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(fetch_opts)):(with_let77751[(3)]));
var fetch_fn = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((4))))))?(with_let77751[(4)] = (cljs.core.truth_(cljs.core.deref(_BANG_fetch_opts))?(function (opts){
return nextjournal.clerk.sci_viewer.fetch_BANG_(cljs.core.deref(_BANG_fetch_opts),opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_desc,nextjournal.clerk.viewer.merge_presentations,more,opts);
}));
}):null)):(with_let77751[(4)]));
var _BANG_expanded_at = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((5))))))?(with_let77751[(5)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(_BANG_desc),new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),cljs.core.PersistentArrayMap.EMPTY))):(with_let77751[(5)]));
var on_key_down = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((6))))))?(with_let77751[(6)] = (function (event){
if(cljs.core.truth_(event.altKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}
})):(with_let77751[(6)]));
var on_key_up = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((7))))))?(with_let77751[(7)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
})):(with_let77751[(7)]));
var ref_fn = ((((init77752) || (cljs.core.not(with_let77751.hasOwnProperty((8))))))?(with_let77751[(8)] = (function (p1__77747_SHARP_){
if(cljs.core.truth_(p1__77747_SHARP_)){
if((typeof document !== 'undefined')){
document.addEventListener("keydown",on_key_down);

return document.addEventListener("keyup",on_key_up);
} else {
return null;
}
} else {
if((typeof document !== 'undefined')){
document.removeEventListener("keydown",on_key_down);

return document.removeEventListener("up",on_key_up);
} else {
return null;
}
}
})):(with_let77751[(8)]));
var res77753 = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hash,cljs.core.deref(_BANG_hash))){
} else {
cljs.core.reset_BANG_(_BANG_hash,hash);

cljs.core.reset_BANG_(_BANG_fetch_opts,fetch_opts);

cljs.core.reset_BANG_(_BANG_desc,nextjournal.clerk.sci_viewer.read_result(result,_BANG_error));

cljs.core.reset_BANG_(_BANG_error,null);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),fetch_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.error_boundary,_BANG_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-hidden","div.overflow-y-hidden",1952845994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),cljs.core.deref(_BANG_desc)], null)], null)], null)], null)], null);
})()
;
return res77753;
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77750) : nextjournal.clerk.sci_viewer.html.call(null,G__77750));
});
nextjournal.clerk.sci_viewer.toggle_expanded = (function nextjournal$clerk$sci_viewer$toggle_expanded(_BANG_expanded_at,path,event){
event.preventDefault();

event.stopPropagation();

var map__77760 = cljs.core.deref(_BANG_expanded_at);
var map__77760__$1 = cljs.core.__destructure_map(map__77760);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77760__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77760__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var hover_path_count = cljs.core.count(hover_path);
var hover_path_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
if(cljs.core.truth_((function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),hover_path_count);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (expanded_at){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__77761){
var vec__77762 = p__77761;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77762,(0),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77762,(1),null);
if(((cljs.core.coll_QMARK_(path__$1)) && (((cljs.core.vector_QMARK_(path__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path__$1),hover_path_count)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,cljs.core.not(hover_path_expanded_QMARK_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,expanded_QMARK_);
}
}),cljs.core.PersistentArrayMap.EMPTY,expanded_at);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.update,path,cljs.core.not);
}
});
nextjournal.clerk.sci_viewer.expandable_QMARK_ = (function nextjournal$clerk$sci_viewer$expandable_QMARK_(xs){
return ((1) < cljs.core.count(xs));
});
nextjournal.clerk.sci_viewer.inspect_children = (function nextjournal$clerk$sci_viewer$inspect_children(opts){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,x){
var G__77768 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
var G__77769 = x;
return (nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2(G__77768,G__77769) : nextjournal.clerk.sci_viewer.inspect_presented.call(null,G__77768,G__77769));
}));
});
nextjournal.clerk.sci_viewer.expand_style = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor-pointer","bg-indigo-50","hover:bg-indigo-100","border-b","border-gray-400","hover:border-gray-500","dark:bg-gray-900","dark:hover:bg-slate-700","dark:border-slate-600","dark:hover:border-slate-500"], null);
nextjournal.clerk.sci_viewer.triangle = (function nextjournal$clerk$sci_viewer$triangle(expanded_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),["w-[7px] h-[7px] fill-current inline-block transition-all mr-[1px] -mt-[2px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 "], null)], null)], null);
});
nextjournal.clerk.sci_viewer.triangle_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block w-[8px]"], null)], null);
nextjournal.clerk.sci_viewer.expand_button = (function nextjournal$clerk$sci_viewer$expand_button(_BANG_expanded_at,opening_paren,path){
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__77772 = cljs.core.deref(_BANG_expanded_at);
var map__77772__$1 = cljs.core.__destructure_map(map__77772);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var multi_expand_QMARK_ = (function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.count(hover_path));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer","span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer",-1703697853),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"bg-indigo-100 shadow ":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.sci_viewer.toggle_expanded,_BANG_expanded_at,path),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491),path);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400.group-hover:text-indigo-700","span.text-slate-400.group-hover:text-indigo-700",438525494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"text-indigo-700 ":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.triangle,expanded_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-hover:text-indigo-700","span.group-hover:text-indigo-700",-444234631),opening_paren], null)], null);
});
nextjournal.clerk.sci_viewer.coll_view = (function nextjournal$clerk$sci_viewer$coll_view(xs,p__77773){
var map__77774 = p__77773;
var map__77774__$1 = cljs.core.__destructure_map(map__77774);
var opts = map__77774__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77774__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77774__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77774__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__77775 = viewer;
var map__77775__$1 = cljs.core.__destructure_map(map__77775);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77775__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77775__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((1) < cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.sci_viewer.triangle_spacer,nextjournal.clerk.sci_viewer.nbsp,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(opening_paren)))?nextjournal.clerk.sci_viewer.nbsp:null)], null):" "))),xs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__77777 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__77777);
} else {
return G__77777;
}
})()], null)], null)], null);
});
nextjournal.clerk.sci_viewer.coll_viewer = (function nextjournal$clerk$sci_viewer$coll_viewer(xs,opts){
var G__77780 = nextjournal.clerk.sci_viewer.coll_view(xs,opts);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77780) : nextjournal.clerk.sci_viewer.html.call(null,G__77780));
});
nextjournal.clerk.sci_viewer.elision_viewer = (function nextjournal$clerk$sci_viewer$elision_viewer(p__77781,_){
var map__77782 = p__77781;
var map__77782__$1 = cljs.core.__destructure_map(map__77782);
var fetch_opts = map__77782__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77782__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77782__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77782__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
var G__77783 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.consume,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sans-serif.relative.whitespace-nowrap","span.sans-serif.relative.whitespace-nowrap",1223699353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"padding","padding",1660304693),((cljs.core.fn_QMARK_(fetch_fn))?"1px 3px":null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"top","top",-1856271961),(-1)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.fn_QMARK_(fetch_fn))?"cursor-pointer bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(fetch_fn)){
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(fetch_opts) : fetch_fn.call(null,fetch_opts));
} else {
return null;
}
})], null),(total - offset),(cljs.core.truth_(unbounded_QMARK_)?"+":null),((cljs.core.fn_QMARK_(fetch_fn))?" more\u2026":" more elided")], null);
})], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77783) : nextjournal.clerk.sci_viewer.html.call(null,G__77783));
});
nextjournal.clerk.sci_viewer.map_view = (function nextjournal$clerk$sci_viewer$map_view(xs,p__77786){
var map__77787 = p__77786;
var map__77787__$1 = cljs.core.__destructure_map(map__77787);
var opts = map__77787__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77787__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77787__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77787__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__77790 = viewer;
var map__77790__$1 = cljs.core.__destructure_map(map__77790);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77790__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((nextjournal.clerk.sci_viewer.expandable_QMARK_(xs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,"{",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.sci_viewer.triangle_spacer,nextjournal.clerk.sci_viewer.nbsp], null):" "))),xs),(function (){var G__77792 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__77792);
} else {
return G__77792;
}
})()], null)], null);
});
nextjournal.clerk.sci_viewer.map_viewer = (function nextjournal$clerk$sci_viewer$map_viewer(xs,opts){
var G__77793 = nextjournal.clerk.sci_viewer.map_view(xs,opts);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77793) : nextjournal.clerk.sci_viewer.html.call(null,G__77793));
});
nextjournal.clerk.sci_viewer.string_viewer = (function nextjournal$clerk$sci_viewer$string_viewer(s,p__77796){
var map__77798 = p__77796;
var map__77798__$1 = cljs.core.__destructure_map(map__77798);
var opts = map__77798__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77798__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77798__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var G__77799 = (function (){var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__77795_SHARP_){
if(typeof p1__77795_SHARP_ === 'string'){
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),clojure.string.split_lines(p1__77795_SHARP_)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400","span.text-slate-400",-1212905222),"\u21A9\uFE0E"], null),clojure.string.split_lines(p1__77795_SHARP_)));
}
} else {
return (nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2(opts,p1__77795_SHARP_) : nextjournal.clerk.sci_viewer.inspect_presented.call(null,opts,p1__77795_SHARP_));
}
})),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s));
})();
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77799) : nextjournal.clerk.sci_viewer.html.call(null,G__77799));
});
nextjournal.clerk.sci_viewer.quoted_string_viewer = (function nextjournal$clerk$sci_viewer$quoted_string_viewer(s,p__77802){
var map__77803 = p__77802;
var map__77803__$1 = cljs.core.__destructure_map(map__77803);
var opts = map__77803__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77803__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77803__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77803__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var map__77804 = viewer;
var map__77804__$1 = cljs.core.__destructure_map(map__77804);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77804__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
var G__77805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value.whitespace-nowrap.inline-flex","span.cmt-string.inspected-value.whitespace-nowrap.inline-flex",1767737962),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(cljs.core.some((function (p1__77801_SHARP_){
return ((typeof p1__77801_SHARP_ === 'string') && (clojure.string.includes_QMARK_(p1__77801_SHARP_,"\n")));
}),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.expand_button,_BANG_expanded_at,"\"",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\""], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nextjournal.clerk.viewer.__GT_value(nextjournal.clerk.sci_viewer.string_viewer(s,opts)),"\"",closing_paren], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77805) : nextjournal.clerk.sci_viewer.html.call(null,G__77805));
});
nextjournal.clerk.sci_viewer.number_viewer = (function nextjournal$clerk$sci_viewer$number_viewer(num){
var G__77808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(num))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(num))], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77808) : nextjournal.clerk.sci_viewer.html.call(null,G__77808));
});
nextjournal.clerk.sci_viewer.sort_BANG_ = (function nextjournal$clerk$sci_viewer$sort_BANG_(_BANG_sort,i,k){
var map__77811 = cljs.core.deref(_BANG_sort);
var map__77811__$1 = cljs.core.__destructure_map(map__77811);
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
return cljs.core.reset_BANG_(_BANG_sort,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222),i,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),k,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
});
nextjournal.clerk.sci_viewer.sort_data = (function nextjournal$clerk$sci_viewer$sort_data(p__77822,p__77823){
var map__77825 = p__77822;
var map__77825__$1 = cljs.core.__destructure_map(map__77825);
var sort_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77825__$1,new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77825__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__77826 = p__77823;
var map__77826__$1 = cljs.core.__destructure_map(map__77826);
var data = map__77826__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77826__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77826__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__77829 = data;
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77829,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__77814_SHARP_){
var G__77830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77814_SHARP_,sort_index);
if(typeof cljs.core.val === 'string'){
return clojure.string.lower_case(G__77830);
} else {
return G__77830;
}
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?(function (p1__77815_SHARP_,p2__77816_SHARP_){
return cljs.core.compare(p1__77815_SHARP_,p2__77816_SHARP_);
}):(function (p1__77818_SHARP_,p2__77817_SHARP_){
return cljs.core.compare(p2__77817_SHARP_,p1__77818_SHARP_);
})),rows)));
} else {
return G__77829;
}
});
nextjournal.clerk.sci_viewer.x_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.check_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.table_error = (function nextjournal$clerk$sci_viewer$table_error(p__77831){
var vec__77832 = p__77831;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77832,(0),null);
var G__77835 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose",472299052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide","h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide",-1114358129),"Table Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Clerk\u2019s table viewer does not recognize the format of your data:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex","div.mt-2.flex",-812335696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.mr-2","div.text-red-500.mr-2",-1965802655),nextjournal.clerk.sci_viewer.x_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Currently, the following formats are supported:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"column-2","column-2",1966117147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(1),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(2),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.sci_viewer.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.Keyword(null,"column-2","column-2",1966117147)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null)], null)], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77835) : nextjournal.clerk.sci_viewer.html.call(null,G__77835));
});
nextjournal.clerk.sci_viewer.throwable_view = (function nextjournal$clerk$sci_viewer$throwable_view(p__77836){
var map__77837 = p__77836;
var map__77837__$1 = cljs.core.__destructure_map(map__77837);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77837__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77837__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose","div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose",-741753812),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__77839){
var map__77840 = p__77839;
var map__77840__$1 = cljs.core.__destructure_map(map__77840);
var _ex = map__77840__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77840__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77840__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77840__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77840__$1,new cljs.core.Keyword(null,"_trace","_trace",-196725681));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.bg-red-100.border-b.border-b-gray-300","div.p-4.bg-red-100.border-b.border-b-gray-300",-1067794245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"Unhandled ",type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mt-1","div.font-bold.mt-1",-1699801213),message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect,data], null)], null)], null);
}),via)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-6.overflow-x-auto","div.py-6.overflow-x-auto",-1663715111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full","table.w-full",1746679141),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__77841){
var vec__77842 = p__77841;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77842,(0),null);
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77842,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77842,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77842,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-red-100.leading-tight","tr.hover:bg-red-100.leading-tight",96605729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.px-6","td.text-right.px-6",324007517),file,":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.pr-6","td.text-right.pr-6",1739173277),line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.pr-6","td.py-1.pr-6",1245547684),call], null)], null);
})),trace)], null)], null)], null);
});
nextjournal.clerk.sci_viewer.throwable_viewer = (function nextjournal$clerk$sci_viewer$throwable_viewer(ex){
var G__77845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.throwable_view,ex], null);
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77845) : nextjournal.clerk.sci_viewer.html.call(null,G__77845));
});
nextjournal.clerk.sci_viewer.tagged_value = (function nextjournal$clerk$sci_viewer$tagged_value(var_args){
var G__77847 = arguments.length;
switch (G__77847) {
case 2:
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),tag,value);
}));

(nextjournal.clerk.sci_viewer.tagged_value.cljs$core$IFn$_invoke$arity$3 = (function (p__77849,tag,value){
var map__77850 = p__77849;
var map__77850__$1 = cljs.core.__destructure_map(map__77850);
var space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77850__$1,new cljs.core.Keyword(null,"space?","space?",-1369314665));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),tag], null),(cljs.core.truth_(space_QMARK_)?nextjournal.clerk.sci_viewer.nbsp:null),value], null);
}));

(nextjournal.clerk.sci_viewer.tagged_value.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.sci_viewer.normalize_viewer_meta = (function nextjournal$clerk$sci_viewer$normalize_viewer_meta(x){
var temp__5751__auto__ = new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(temp__5751__auto__)){
var viewer = temp__5751__auto__;
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__77851 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),nextjournal.clerk.sci_viewer.html_viewer,new cljs.core.Keyword(null,"reagent","reagent",2131627322),nextjournal.clerk.sci_viewer.reagent_viewer], null);
return (fexpr__77851.cljs$core$IFn$_invoke$arity$2 ? fexpr__77851.cljs$core$IFn$_invoke$arity$2(viewer,viewer) : fexpr__77851.call(null,viewer,viewer));
})(),x);
} else {
return x;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_doc !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_doc = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_error !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_error = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_viewers !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_viewers = nextjournal.clerk.viewer._BANG_viewers;
}
nextjournal.clerk.sci_viewer.set_viewers_BANG_ = (function nextjournal$clerk$sci_viewer$set_viewers_BANG_(scope,viewers){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.sci_viewer._BANG_viewers,cljs.core.assoc,scope,cljs.core.vec(viewers));

return new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null);
});
nextjournal.clerk.sci_viewer.render_with_viewer = (function nextjournal$clerk$sci_viewer$render_with_viewer(opts,viewer,value){
if(((cljs.core.fn_QMARK_(viewer)) || (nextjournal.clerk.viewer.viewer_fn_QMARK_(viewer)))){
return (viewer.cljs$core$IFn$_invoke$arity$2 ? viewer.cljs$core$IFn$_invoke$arity$2(value,opts) : viewer.call(null,value,opts));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(viewer);
if(and__4251__auto__){
return new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer);
} else {
return and__4251__auto__;
}
})())){
var G__77853 = opts;
var G__77854 = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer);
var G__77855 = value;
return (nextjournal.clerk.sci_viewer.render_with_viewer.cljs$core$IFn$_invoke$arity$3 ? nextjournal.clerk.sci_viewer.render_with_viewer.cljs$core$IFn$_invoke$arity$3(G__77853,G__77854,G__77855) : nextjournal.clerk.sci_viewer.render_with_viewer.call(null,G__77853,G__77854,G__77855));
} else {
var G__77856 = nextjournal.clerk.sci_viewer.error_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unusable viewer `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([viewer], 0)),"`, value `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"`"], 0));
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77856) : nextjournal.clerk.sci_viewer.html.call(null,G__77856));

}
}
});
nextjournal.clerk.sci_viewer.valid_react_element_QMARK_ = (function nextjournal$clerk$sci_viewer$valid_react_element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
nextjournal.clerk.sci_viewer.inspect_presented = (function nextjournal$clerk$sci_viewer$inspect_presented(var_args){
var G__77859 = arguments.length;
switch (G__77859) {
case 1:
return nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$1 = (function (x){
var with_let77860 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77860","with-let77860",814565320));
var temp__5757__auto___77984 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77984 == null)){
} else {
var c__62567__auto___77985 = temp__5757__auto___77984;
if((with_let77860.generation === c__62567__auto___77985.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77860.generation = c__62567__auto___77985.ratomGeneration);
}

var init77861 = (with_let77860.length === (0));
var _BANG_expanded_at = ((((init77861) || (cljs.core.not(with_let77860.hasOwnProperty((0))))))?(with_let77860[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009).cljs$core$IFn$_invoke$arity$1(x))):(with_let77860[(0)]));
var res77862 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),x], null);
return res77862;
}));

(nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(nextjournal.clerk.sci_viewer.valid_react_element_QMARK_(x))){
return x;
} else {
var value = nextjournal.clerk.viewer.__GT_value(x);
var viewer = nextjournal.clerk.viewer.__GT_viewer(x);
return nextjournal.clerk.sci_viewer.inspect_presented.cljs$core$IFn$_invoke$arity$2(opts,nextjournal.clerk.sci_viewer.render_with_viewer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249).cljs$core$IFn$_invoke$arity$1(x)], 0)),viewer,value));
}
}));

(nextjournal.clerk.sci_viewer.inspect_presented.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.sci_viewer.in_process_fetch = (function nextjournal$clerk$sci_viewer$in_process_fetch(value,opts){
return Promise.resolve(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(value,opts));
});
nextjournal.clerk.sci_viewer.inspect = (function nextjournal$clerk$sci_viewer$inspect(value){
var with_let77864 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77864","with-let77864",2043047122));
var temp__5757__auto___77986 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77986 == null)){
} else {
var c__62567__auto___77987 = temp__5757__auto___77986;
if((with_let77864.generation === c__62567__auto___77987.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77864.generation = c__62567__auto___77987.ratomGeneration);
}

var init77865 = (with_let77864.length === (0));
var _BANG_state = ((((init77865) || (cljs.core.not(with_let77864.hasOwnProperty((0))))))?(with_let77864[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let77864[(0)]));
var res77866 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_state),new cljs.core.Keyword("nextjournal.clerk.sci-viewer","not-found","nextjournal.clerk.sci-viewer/not-found",1805376781)),value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(value)], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_opts){
return nextjournal.clerk.sci_viewer.in_process_fetch(value,fetch_opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.update,new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.merge_presentations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more,fetch_opts], 0));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state))], null)], null);
})()
;
return res77866;
});
nextjournal.clerk.sci_viewer.root = (function nextjournal$clerk$sci_viewer$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_doc)], null),(cljs.core.truth_(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.w-full.h-full","div.fixed.top-0.left-0.w-full.h-full",1721394456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_error)], null)], null):null)], null);
});
nextjournal.clerk.sci_viewer.set_state = (function nextjournal$clerk$sci_viewer$set_state(p__77869){
var map__77870 = p__77869;
var map__77870__$1 = cljs.core.__destructure_map(map__77870);
var state = map__77870__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77870__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var remount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77870__$1,new cljs.core.Keyword(null,"remount?","remount?",1072689773));
if(cljs.core.truth_(remount_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer._BANG_eval_counter,cljs.core.inc);
} else {
}

if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"doc","doc",1913296891))){
cljs.core.reset_BANG_(nextjournal.clerk.sci_viewer._BANG_doc,doc);
} else {
}

cljs.core.reset_BANG_(nextjournal.clerk.sci_viewer._BANG_error,error);

var temp__5757__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(doc));
} else {
return and__4251__auto__;
}
})();
if((temp__5757__auto__ == null)){
return null;
} else {
var title = temp__5757__auto__;
return (document.title = title);
}
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.set_state', nextjournal.clerk.sci_viewer.set_state);
nextjournal.clerk.sci_viewer.mount = (function nextjournal$clerk$sci_viewer$mount(){
var temp__5753__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return document.getElementById("clerk");
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.root], null),el);
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.mount', nextjournal.clerk.sci_viewer.mount);
nextjournal.clerk.sci_viewer.clerk_eval = (function nextjournal$clerk$sci_viewer$clerk_eval(form){
return goog.global.ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)));
});
nextjournal.clerk.sci_viewer.katex_viewer = (function nextjournal$clerk$sci_viewer$katex_viewer(tex_string,p__77880){
var map__77881 = p__77880;
var map__77881__$1 = cljs.core.__destructure_map(map__77881);
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77881__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var G__77882 = nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(tex_string,({"displayMode":cljs.core.not(inline_QMARK_)}));
return (nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.sci_viewer.html.cljs$core$IFn$_invoke$arity$1(G__77882) : nextjournal.clerk.sci_viewer.html.call(null,G__77882));
});
nextjournal.clerk.sci_viewer.html_render = (function nextjournal$clerk$sci_viewer$html_render(markup){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(((typeof markup === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markup], null)], null)], null):markup));
});
nextjournal.clerk.sci_viewer.html_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.sci_viewer.html_render], null);
nextjournal.clerk.sci_viewer.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.sci_viewer.html_viewer);
nextjournal.clerk.sci_viewer.reagent_viewer = (function nextjournal$clerk$sci_viewer$reagent_viewer(x){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__77887 = x;
if(cljs.core.fn_QMARK_(x)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__77887],null));
} else {
return G__77887;
}
})());
});
nextjournal.clerk.sci_viewer.with_d3_require = (function nextjournal$clerk$sci_viewer$with_d3_require(p__77890,f){
var map__77891 = p__77890;
var map__77891__$1 = cljs.core.__destructure_map(map__77891);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77891__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77891__$1,new cljs.core.Keyword(null,"then","then",460598070),cljs.core.identity);
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77891__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let77892 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77892","with-let77892",-2073824911));
var temp__5757__auto___77988 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77988 == null)){
} else {
var c__62567__auto___77989 = temp__5757__auto___77988;
if((with_let77892.generation === c__62567__auto___77989.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77892.generation = c__62567__auto___77989.ratomGeneration);
}

var init77893 = (with_let77892.length === (0));
var _BANG_package = ((((init77893) || (cljs.core.not(with_let77892.hasOwnProperty((0))))))?(with_let77892[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading","loading",-737050189),loading_view], null))):(with_let77892[(0)]));
var _ = ((((init77893) || (cljs.core.not(with_let77892.hasOwnProperty((1))))))?(with_let77892[(1)] = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$)).then(then).then(f).then((function (p1__77888_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__77888_SHARP_], null));
})).catch((function (p1__77889_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__77889_SHARP_], null));
}))):(with_let77892[(1)]));
var res77894 = (function (){var map__77895 = cljs.core.deref(_BANG_package);
var map__77895__$1 = cljs.core.__destructure_map(map__77895);
var loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77895__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77895__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77895__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(loading)){
return loading;
} else {
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.error_view,error], null);
} else {
if(cljs.core.truth_(value)){
return value;
} else {
return null;
}
}
}
})();
return res77894;
});
nextjournal.clerk.sci_viewer.vega_lite_viewer = (function nextjournal$clerk$sci_viewer$vega_lite_viewer(value){
if(cljs.core.truth_(value)){
return nextjournal.clerk.sci_viewer.html(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.with_d3_require,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vega-embed@6.11.1"], null),new cljs.core.Keyword(null,"then","then",460598070),(function (embed){
return embed.container(cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792))),cljs.core.clj__GT_js(new cljs.core.Keyword("embed","opts","embed/opts",187667792).cljs$core$IFn$_invoke$arity$2(value,cljs.core.PersistentArrayMap.EMPTY)));
})], null),(function (vega_el){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vega-lite","div.vega-lite",1198823274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__77896_SHARP_){
if(cljs.core.truth_(p1__77896_SHARP_)){
return p1__77896_SHARP_.appendChild(vega_el);
} else {
return null;
}
})], null)], null)], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)));
} else {
return null;
}
});
nextjournal.clerk.sci_viewer.plotly_viewer = (function nextjournal$clerk$sci_viewer$plotly_viewer(value){
if(cljs.core.truth_(value)){
return nextjournal.clerk.sci_viewer.html(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.with_d3_require,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["plotly.js-dist@2.15.1"], null),new cljs.core.Keyword(null,"then","then",460598070),(function (plotly){
var el = document.createElement("div");
plotly.newPlot(el,cljs.core.clj__GT_js(value));

return el;
})], null),(function (plotly_el){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plotly","div.plotly",-1155863466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__77897_SHARP_){
if(cljs.core.truth_(p1__77897_SHARP_)){
return p1__77897_SHARP_.appendChild(plotly_el);
} else {
return null;
}
})], null)], null)], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)));
} else {
return null;
}
});
nextjournal.clerk.sci_viewer.mathjax_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.mathjax.viewer);
nextjournal.clerk.sci_viewer.code_viewer = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_viewer.normalize_viewer_meta,nextjournal.viewer.code.viewer);
nextjournal.clerk.sci_viewer.expand_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.sci_viewer.foldable_code_viewer = (function nextjournal$clerk$sci_viewer$foldable_code_viewer(code_string){
var with_let77898 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77898","with-let77898",-1778675170));
var temp__5757__auto___77990 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77990 == null)){
} else {
var c__62567__auto___77991 = temp__5757__auto___77990;
if((with_let77898.generation === c__62567__auto___77991.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77898.generation = c__62567__auto___77991.ratomGeneration);
}

var init77899 = (with_let77898.length === (0));
var _BANG_hidden_QMARK_ = ((((init77899) || (cljs.core.not(with_let77898.hasOwnProperty((0))))))?(with_let77898[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let77898[(0)]));
var res77900 = nextjournal.clerk.sci_viewer.html((cljs.core.truth_(cljs.core.deref(_BANG_hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group",45115011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"show code"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1",1365696722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"hide code"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.mb-2.relative","div.viewer-code.mb-2.relative",-490925077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.sci_viewer.inspect_presented,nextjournal.clerk.sci_viewer.code_viewer(code_string)], null)], null)], null)));
return res77900;
});
nextjournal.clerk.sci_viewer.url_for = (function nextjournal$clerk$sci_viewer$url_for(p__77901){
var map__77902 = p__77901;
var map__77902__$1 = cljs.core.__destructure_map(map__77902);
var src = map__77902__$1;
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77902__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
if(typeof src === 'string'){
return src;
} else {
return ["/_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970)));
if(temp__5753__auto__){
var opts = temp__5753__auto__;
return ["?",nextjournal.clerk.sci_viewer.opts__GT_query(opts)].join('');
} else {
return null;
}
})()].join('');
}
});
/**
 * Stub implementation to be replaced during static site generation. Clerk is only serving one page currently.
 */
nextjournal.clerk.sci_viewer.doc_url = sci.core.new_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doc-url","doc-url",-1594574639,null),(function (x){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}));
nextjournal.clerk.sci_viewer.sci_viewer_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"katex-viewer","katex-viewer",2004115574,null),new cljs.core.Symbol(null,"clerk-eval","clerk-eval",-1698654052,null),new cljs.core.Symbol(null,"consume-view-context","consume-view-context",1580793251,null),new cljs.core.Symbol(null,"coll-viewer","coll-viewer",-1280598194,null),new cljs.core.Symbol(null,"map-viewer","map-viewer",-1236941263,null),new cljs.core.Symbol(null,"number-viewer","number-viewer",1292682692,null),new cljs.core.Symbol(null,"unreadable-edn-viewer","unreadable-edn-viewer",-1057394702,null),new cljs.core.Symbol(null,"plotly-viewer","plotly-viewer",746101319,null),new cljs.core.Symbol(null,"code-viewer","code-viewer",1979928782,null),new cljs.core.Symbol(null,"result-viewer","result-viewer",-341122584,null),new cljs.core.Symbol(null,"reagent-viewer","reagent-viewer",-1176806495,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"notebook-viewer","notebook-viewer",-1214195350,null),new cljs.core.Symbol(null,"with-viewer","with-viewer",-1694579498,null),new cljs.core.Symbol(null,"tagged-value","tagged-value",-110559503,null),new cljs.core.Symbol(null,"with-d3-require","with-d3-require",1881546427,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"foldable-code-viewer","foldable-code-viewer",850003550,null),new cljs.core.Symbol(null,"inspect","inspect",-1965641712,null),new cljs.core.Symbol(null,"vega-lite-viewer","vega-lite-viewer",2144084555,null),new cljs.core.Symbol(null,"vl","vl",-569341961,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"inspect-presented","inspect-presented",441285562,null),new cljs.core.Symbol(null,"with-viewers","with-viewers",-1936045103,null),new cljs.core.Symbol(null,"url-for","url-for",-246007553,null),new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),new cljs.core.Symbol(null,"present","present",415886062,null),new cljs.core.Symbol(null,"string-viewer","string-viewer",-607088827,null),new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null),new cljs.core.Symbol(null,"doc-url","doc-url",-1594574639,null),new cljs.core.Symbol(null,"inspect-children","inspect-children",248949464,null),new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"quoted-string-viewer","quoted-string-viewer",-2051886522,null),new cljs.core.Symbol(null,"md","md",-1947149114,null),new cljs.core.Symbol(null,"table-error","table-error",1752759269,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"valid-react-element?","valid-react-element?",1123695246,null),new cljs.core.Symbol(null,"mathjax-viewer","mathjax-viewer",1826404592,null),new cljs.core.Symbol(null,"map-view","map-view",-147290072,null),new cljs.core.Symbol(null,"throwable-viewer","throwable-viewer",1465154138,null),new cljs.core.Symbol(null,"elision-viewer","elision-viewer",194263113,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"coll-view","coll-view",-498321674,null),new cljs.core.Symbol(null,"plotly","plotly",-1836810311,null)],[nextjournal.clerk.sci_viewer.katex_viewer,nextjournal.clerk.sci_viewer.clerk_eval,nextjournal.view.context.consume,nextjournal.clerk.sci_viewer.coll_viewer,nextjournal.clerk.sci_viewer.map_viewer,nextjournal.clerk.sci_viewer.number_viewer,nextjournal.clerk.sci_viewer.unreadable_edn_viewer,nextjournal.clerk.sci_viewer.plotly_viewer,nextjournal.clerk.sci_viewer.code_viewer,nextjournal.clerk.sci_viewer.result_viewer,nextjournal.clerk.sci_viewer.reagent_viewer,nextjournal.clerk.viewer.col,nextjournal.clerk.sci_viewer.notebook,nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.sci_viewer.tagged_value,nextjournal.clerk.sci_viewer.with_d3_require,nextjournal.clerk.viewer.table,nextjournal.clerk.sci_viewer.foldable_code_viewer,nextjournal.clerk.sci_viewer.inspect,nextjournal.clerk.sci_viewer.vega_lite_viewer,nextjournal.clerk.viewer.vl,nextjournal.clerk.viewer.code,nextjournal.clerk.sci_viewer.inspect_presented,nextjournal.clerk.viewer.with_viewers,nextjournal.clerk.sci_viewer.url_for,nextjournal.clerk.sci_viewer.read_string,nextjournal.clerk.viewer.present,nextjournal.clerk.sci_viewer.string_viewer,nextjournal.clerk.sci_viewer.set_viewers_BANG_,nextjournal.clerk.sci_viewer.doc_url,nextjournal.clerk.sci_viewer.inspect_children,nextjournal.clerk.viewer.row,nextjournal.clerk.sci_viewer.quoted_string_viewer,nextjournal.clerk.viewer.md,nextjournal.clerk.sci_viewer.table_error,nextjournal.clerk.sci_viewer.html_render,nextjournal.clerk.sci_viewer.valid_react_element_QMARK_,nextjournal.clerk.sci_viewer.mathjax_viewer,nextjournal.clerk.sci_viewer.map_view,nextjournal.clerk.sci_viewer.throwable_viewer,nextjournal.clerk.sci_viewer.elision_viewer,nextjournal.clerk.viewer.tex,nextjournal.clerk.sci_viewer.coll_view,nextjournal.clerk.viewer.plotly]);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.sci_viewer !== 'undefined') && (typeof nextjournal.clerk.sci_viewer._BANG_sci_ctx !== 'undefined')){
} else {
nextjournal.clerk.sci_viewer._BANG_sci_ctx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(sci.core.init(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async?","async?",1523057758),true,new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206),true,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Symbol(null,"framer-motion","framer-motion",718962013,null),module$node_modules$framer_motion$dist$cjs$index,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null),new cljs.core.Keyword(null,"aliases","aliases",1346874714),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"j","j",242556762,null),new cljs.core.Symbol(null,"applied-science.js-interop","applied-science.js-interop",1279968603,null),new cljs.core.Symbol(null,"reagent","reagent",-522808447,null),new cljs.core.Symbol(null,"reagent.core","reagent.core",1841519592,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"nextjournal.clerk.sci-viewer","nextjournal.clerk.sci-viewer",1325183955,null)], null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"nextjournal.clerk.sci-viewer","nextjournal.clerk.sci-viewer",1325183955,null),nextjournal.clerk.sci_viewer.sci_viewer_namespace], null),sci.configs.applied_science.js_interop.namespaces,sci.configs.reagent.reagent.namespaces], 0))], null)));
}
nextjournal.clerk.sci_viewer.eval_form = (function nextjournal$clerk$sci_viewer$eval_form(f){
return sci.core.eval_form(cljs.core.deref(nextjournal.clerk.sci_viewer._BANG_sci_ctx),f);
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.eval_form', nextjournal.clerk.sci_viewer.eval_form);
nextjournal.clerk.sci_viewer.get_rgba = (function nextjournal$clerk$sci_viewer$get_rgba(x,y,img_width,img_data){
var coord = (((img_width * y) + x) * (4));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),img_data.at(coord),new cljs.core.Keyword(null,"g","g",1738089905),img_data.at((coord + (1))),new cljs.core.Keyword(null,"b","b",1482224470),img_data.at((coord + (2))),new cljs.core.Keyword(null,"a","a",-2123407586),img_data.at((coord + (3)))], null);
});
nextjournal.clerk.sci_viewer.white_QMARK_ = (function nextjournal$clerk$sci_viewer$white_QMARK_(x,y,img_width,img_data){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(255),new cljs.core.Keyword(null,"b","b",1482224470),(255),new cljs.core.Keyword(null,"a","a",-2123407586),(255)], null),nextjournal.clerk.sci_viewer.get_rgba(x,y,img_width,img_data));
});
nextjournal.clerk.sci_viewer.scan_y = (function nextjournal$clerk$sci_viewer$scan_y(from_top_QMARK_,img_width,img_height,img_data){
var y = (cljs.core.truth_(from_top_QMARK_)?(0):(img_height - (1)));
var colored_col = null;
while(true){
if((function (){var and__4251__auto__ = cljs.core.not(colored_col);
if(and__4251__auto__){
if(cljs.core.truth_(from_top_QMARK_)){
return (y < img_height);
} else {
return ((-1) < y);
}
} else {
return and__4251__auto__;
}
})()){
var G__77992 = (cljs.core.truth_(from_top_QMARK_)?(y + (1)):(y - (1)));
var G__77993 = (function (){var x = (0);
while(true){
if((!(nextjournal.clerk.sci_viewer.white_QMARK_(x,y,img_width,img_data)))){
return y;
} else {
if((x < (img_width - (1)))){
var G__77994 = (x + (1));
x = G__77994;
continue;
} else {
return null;
}
}
break;
}
})();
y = G__77992;
colored_col = G__77993;
continue;
} else {
return colored_col;
}
break;
}
});
nextjournal.clerk.sci_viewer.scan_x = (function nextjournal$clerk$sci_viewer$scan_x(from_left_QMARK_,img_width,img_height,img_data){
var x = (cljs.core.truth_(from_left_QMARK_)?(0):(img_width - (1)));
var colored_row = null;
while(true){
if((function (){var and__4251__auto__ = cljs.core.not(colored_row);
if(and__4251__auto__){
if(cljs.core.truth_(from_left_QMARK_)){
return (x < img_width);
} else {
return ((0) <= x);
}
} else {
return and__4251__auto__;
}
})()){
var G__77995 = (cljs.core.truth_(from_left_QMARK_)?(x + (1)):(x - (1)));
var G__77996 = (function (){var y = (0);
while(true){
if((!(nextjournal.clerk.sci_viewer.white_QMARK_(x,y,img_width,img_data)))){
return x;
} else {
if((y < (img_height - (1)))){
var G__77997 = (y + (1));
y = G__77997;
continue;
} else {
return null;
}
}
break;
}
})();
x = G__77995;
colored_row = G__77996;
continue;
} else {
return colored_row;
}
break;
}
});
nextjournal.clerk.sci_viewer.trim_image = (function nextjournal$clerk$sci_viewer$trim_image(var_args){
var G__77904 = arguments.length;
switch (G__77904) {
case 1:
return nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.trim_image', nextjournal.clerk.sci_viewer.trim_image);

(nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$1 = (function (img){
return nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$2(img,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$2 = (function (img,p__77905){
var map__77906 = p__77905;
var map__77906__$1 = cljs.core.__destructure_map(map__77906);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77906__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),(0));
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var img_width = img.naturalWidth;
var img_height = img.naturalHeight;
var _ = canvas.setAttribute("width",img_width);
var ___$1 = canvas.setAttribute("height",img_height);
var ___$2 = ctx.drawImage(img,(0),(0),img_width,img_height);
var img_data = ctx.getImageData((0),(0),img_width,img_height).data;
var x1 = nextjournal.clerk.sci_viewer.scan_x(true,img_width,img_height,img_data);
var y1 = nextjournal.clerk.sci_viewer.scan_y(true,img_width,img_height,img_data);
var x2 = nextjournal.clerk.sci_viewer.scan_x(false,img_width,img_height,img_data);
var y2 = nextjournal.clerk.sci_viewer.scan_y(false,img_width,img_height,img_data);
var dx = ((x2 - x1) + (1));
var dy = ((y2 - y1) + (1));
var trimmed_data = ctx.getImageData(x1,y1,dx,dy);
var ___$3 = canvas.setAttribute("width",(dx + (padding * (2))));
var ___$4 = canvas.setAttribute("height",(dy + (padding * (2))));
var ___$5 = ctx.clearRect((0),(0),(dx + padding),(dy + padding));
var ___$6 = (ctx.fillStyle = "white");
var ___$7 = ctx.fillRect((0),(0),canvas.width,canvas.height);
var ___$8 = ctx.putImageData(trimmed_data,padding,padding);
var result_img = document.createElement("img");
result_img.setAttribute("src",canvas.toDataURL("image/png"));

return result_img;
}));

(nextjournal.clerk.sci_viewer.trim_image.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.sci_viewer.append_trimmed_image = (function nextjournal$clerk$sci_viewer$append_trimmed_image(base64,id){
var img = document.createElement("img");
img.addEventListener("load",(function (event){
var trimmed_img = nextjournal.clerk.sci_viewer.trim_image.cljs$core$IFn$_invoke$arity$2(event.target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null));
trimmed_img.setAttribute("id",id);

return document.body.appendChild(trimmed_img);
}));

return img.setAttribute("src",base64);
});
goog.exportSymbol('nextjournal.clerk.sci_viewer.append_trimmed_image', nextjournal.clerk.sci_viewer.append_trimmed_image);
(cljs.core._STAR_eval_STAR_ = nextjournal.clerk.sci_viewer.eval_form);

//# sourceMappingURL=nextjournal.clerk.sci_viewer.js.map