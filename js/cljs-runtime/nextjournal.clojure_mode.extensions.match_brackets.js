goog.provide('nextjournal.clojure_mode.extensions.match_brackets');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.match_brackets.base_theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.baseTheme(({"$matchingBracket":({"color":"#0b0"}),"$nonmatchingBracket":({"color":"#a22"})}));
nextjournal.clojure_mode.extensions.match_brackets.matching_mark = module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(({"class":"cm-matchingBracket"}));
nextjournal.clojure_mode.extensions.match_brackets.nonmatching_mark = module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(({"class":"cm-nonmatchingBracket"}));
nextjournal.clojure_mode.extensions.match_brackets.mark_node = (function nextjournal$clojure_mode$extensions$match_brackets$mark_node(node,mark){
return mark.range(nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
});
nextjournal.clojure_mode.extensions.match_brackets.state = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (deco,p__66653){
var map__66657 = p__66653;
var map__66657__$1 = (((((!((map__66657 == null))))?(((((map__66657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66657):map__66657);
var tr = map__66657__$1;
var state = (function (){var obj66662 = map__66657__$1;
if((!((obj66662 == null)))){
return (obj66662["state"]);
} else {
return undefined;
}
})();
var docChanged = (function (){var obj66664 = map__66657__$1;
if((!((obj66664 == null)))){
return (obj66664["docChanged"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj66665 = map__66657__$1;
if((!((obj66665 == null)))){
return (obj66665["selection"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = docChanged;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return selection;
}
})())){
var decos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__66666){
var map__66679 = p__66666;
var map__66679__$1 = (((((!((map__66679 == null))))?(((((map__66679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66679):map__66679);
var head = (function (){var obj66681 = map__66679__$1;
if((!((obj66681 == null)))){
return (obj66681["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj66682 = map__66679__$1;
if((!((obj66682 == null)))){
return (obj66682["empty"]);
} else {
return undefined;
}
})();
var or__4253__auto__ = (function (){var temp__5753__auto__ = (function (){var and__4251__auto__ = empty;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start_edge_QMARK_,nextjournal.clojure_mode.node.end_edge_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1)),nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(1))], null)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var bracket = temp__5753__auto__;
var temp__5751__auto__ = ((((nextjournal.clojure_mode.node.start_edge_QMARK_(bracket)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start(bracket),nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.up(bracket))))))?nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.node.down_last(nextjournal.clojure_mode.node.up(bracket)),(function (p1__66647_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.name(p1__66647_SHARP_),nextjournal.clojure_mode.node.closed_by(bracket));
})):((((nextjournal.clojure_mode.node.end_edge_QMARK_(bracket)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.end(bracket),nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.up(bracket))))))?nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.node.down(nextjournal.clojure_mode.node.up(bracket)),(function (p1__66649_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.name(p1__66649_SHARP_),nextjournal.clojure_mode.node.opened_by(bracket));
})):null));
if(cljs.core.truth_(temp__5751__auto__)){
var other_bracket = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(out,nextjournal.clojure_mode.extensions.match_brackets.mark_node(bracket,nextjournal.clojure_mode.extensions.match_brackets.matching_mark),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.extensions.match_brackets.mark_node(other_bracket,nextjournal.clojure_mode.extensions.match_brackets.matching_mark)], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nextjournal.clojure_mode.extensions.match_brackets.mark_node(bracket,nextjournal.clojure_mode.extensions.match_brackets.nonmatching_mark));
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = (function (){var and__4251__auto__ = cljs.core.not(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,head),nextjournal.clojure_mode.node.string_QMARK_));
if(and__4251__auto__){
var G__66720 = tr.state.doc.slice(head,(head + (1))).toString();
var fexpr__66719 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"]",null,"}",null], null), null);
return (fexpr__66719.cljs$core$IFn$_invoke$arity$1 ? fexpr__66719.cljs$core$IFn$_invoke$arity$1(G__66720) : fexpr__66719.call(null,G__66720));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var unparsed_bracket = temp__5753__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nextjournal.clojure_mode.extensions.match_brackets.mark_node(nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2(head,(head + (1))),nextjournal.clojure_mode.extensions.match_brackets.nonmatching_mark));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return out;
}
}
}),cljs.core.PersistentVector.EMPTY,tr.state.selection.ranges);
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(decos),true);
} else {
return deco;
}
})}));
nextjournal.clojure_mode.extensions.match_brackets.extension = (function nextjournal$clojure_mode$extensions$match_brackets$extension(){
return [nextjournal.clojure_mode.extensions.match_brackets.base_theme,nextjournal.clojure_mode.extensions.match_brackets.state,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.match_brackets.state)];
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.match_brackets.js.map