goog.provide('nextjournal.clojure_mode.node');
var module$node_modules$$lezer$common$dist$index_cjs=shadow.js.require("module$node_modules$$lezer$common$dist$index_cjs", {});
var module$node_modules$lezer_clojure$dist$index_cjs=shadow.js.require("module$node_modules$lezer_clojure$dist$index_cjs", {});
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
nextjournal.clojure_mode.node.coll_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.coll;
nextjournal.clojure_mode.node.prefix_coll_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixColl;
nextjournal.clojure_mode.node.prefix_edge_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixEdge;
nextjournal.clojure_mode.node.prefix_container_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.prefixContainer;
nextjournal.clojure_mode.node.start_edge_prop = module$node_modules$$lezer$common$dist$index_cjs.NodeProp.closedBy;
nextjournal.clojure_mode.node.end_edge_prop = module$node_modules$$lezer$common$dist$index_cjs.NodeProp.openedBy;
nextjournal.clojure_mode.node.same_edge_prop = module$node_modules$lezer_clojure$dist$index_cjs.props.sameEdge;
nextjournal.clojure_mode.node.node_prop = (function nextjournal$clojure_mode$node$node_prop(prop_name){
var G__66445 = prop_name;
switch (G__66445) {
case "prefixColl":
return nextjournal.clojure_mode.node.prefix_coll_prop;

break;
case "coll":
return nextjournal.clojure_mode.node.coll_prop;

break;
case "prefixEdge":
return nextjournal.clojure_mode.node.prefix_edge_prop;

break;
case "prefixContainer":
return nextjournal.clojure_mode.node.prefix_container_prop;

break;
case "sameEdge":
return nextjournal.clojure_mode.node.same_edge_prop;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66445)].join('')));

}
});
nextjournal.clojure_mode.node.type = (function nextjournal$clojure_mode$node$type(node){
return node.type;
});
nextjournal.clojure_mode.node.start = (function nextjournal$clojure_mode$node$start(node){
if(cljs.core.truth_(node.from)){
} else {
throw (new Error("Assert failed: (.-from node)"));
}

return node.from;
});
nextjournal.clojure_mode.node.end = (function nextjournal$clojure_mode$node$end(node){
if(cljs.core.truth_(node.to)){
} else {
throw (new Error("Assert failed: (.-to node)"));
}

return node.to;
});
nextjournal.clojure_mode.node.up = (function nextjournal$clojure_mode$node$up(node){
return node.parent;
});
nextjournal.clojure_mode.node.down = (function nextjournal$clojure_mode$node$down(node){
if((!(cljs.core.fn_QMARK_(node.lastChild)))){
} else {
throw (new Error("Assert failed: (not (fn? (.-lastChild node)))"));
}

return node.firstChild;
});
nextjournal.clojure_mode.node.down_last = (function nextjournal$clojure_mode$node$down_last(node){
if((!(cljs.core.fn_QMARK_(node.lastChild)))){
} else {
throw (new Error("Assert failed: (not (fn? (.-lastChild node)))"));
}

return node.lastChild;
});
nextjournal.clojure_mode.node.depth = (function nextjournal$clojure_mode$node$depth(node){
var node__$1 = node;
var i = (0);
while(true){
var temp__5755__auto__ = nextjournal.clojure_mode.node.up(node__$1);
if((temp__5755__auto__ == null)){
return i;
} else {
var parent = temp__5755__auto__;
var G__66671 = parent;
var G__66672 = (i + (1));
node__$1 = G__66671;
i = G__66672;
continue;
}
break;
}
});
nextjournal.clojure_mode.node.left = (function nextjournal$clojure_mode$node$left(node){
return nextjournal.clojure_mode.node.up(node).childBefore(nextjournal.clojure_mode.node.start(node));
});
nextjournal.clojure_mode.node.lefts = (function nextjournal$clojure_mode$node$lefts(node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(nextjournal.clojure_mode.node.left,nextjournal.clojure_mode.node.left(node)));
});
nextjournal.clojure_mode.node.right = (function nextjournal$clojure_mode$node$right(node){
return nextjournal.clojure_mode.node.up(node).childAfter(nextjournal.clojure_mode.node.end(node));
});
nextjournal.clojure_mode.node.rights = (function nextjournal$clojure_mode$node$rights(node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(nextjournal.clojure_mode.node.right,nextjournal.clojure_mode.node.right(node)));
});
nextjournal.clojure_mode.node.coll_type_QMARK_ = (function nextjournal$clojure_mode$node$coll_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.coll_prop);
});
nextjournal.clojure_mode.node.prefix_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_coll_prop);
});
nextjournal.clojure_mode.node.prefix_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_edge_prop);
});
nextjournal.clojure_mode.node.prefix_container_type_QMARK_ = (function nextjournal$clojure_mode$node$prefix_container_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.prefix_container_prop);
});
nextjournal.clojure_mode.node.same_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$same_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.same_edge_prop);
});
nextjournal.clojure_mode.node.start_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$start_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.start_edge_prop);
});
nextjournal.clojure_mode.node.end_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$end_edge_type_QMARK_(node_type){
return node_type.prop(nextjournal.clojure_mode.node.end_edge_prop);
});
nextjournal.clojure_mode.node.top_type_QMARK_ = (function nextjournal$clojure_mode$node$top_type_QMARK_(node_type){
return node_type.isTop;
});
nextjournal.clojure_mode.node.error_type_QMARK_ = (function nextjournal$clojure_mode$node$error_type_QMARK_(node_type){
return node_type.isError;
});
nextjournal.clojure_mode.node.prefix_QMARK_ = (function nextjournal$clojure_mode$node$prefix_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.prefix_edge_QMARK_ = (function nextjournal$clojure_mode$node$prefix_edge_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.prefix_container_QMARK_ = (function nextjournal$clojure_mode$node$prefix_container_QMARK_(n){
return nextjournal.clojure_mode.node.prefix_container_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.same_edge_QMARK_ = (function nextjournal$clojure_mode$node$same_edge_QMARK_(n){
return nextjournal.clojure_mode.node.same_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.start_edge_QMARK_ = (function nextjournal$clojure_mode$node$start_edge_QMARK_(n){
return nextjournal.clojure_mode.node.start_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.end_edge_QMARK_ = (function nextjournal$clojure_mode$node$end_edge_QMARK_(n){
return nextjournal.clojure_mode.node.end_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.left_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$left_edge_type_QMARK_(t){
return ((nextjournal.clojure_mode.node.start_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(t)))));
});
nextjournal.clojure_mode.node.left_edge_QMARK_ = (function nextjournal$clojure_mode$node$left_edge_QMARK_(n){
return nextjournal.clojure_mode.node.left_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.right_edge_type_QMARK_ = (function nextjournal$clojure_mode$node$right_edge_type_QMARK_(t){
return ((nextjournal.clojure_mode.node.end_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)));
});
nextjournal.clojure_mode.node.right_edge_QMARK_ = (function nextjournal$clojure_mode$node$right_edge_QMARK_(n){
return nextjournal.clojure_mode.node.right_edge_type_QMARK_(nextjournal.clojure_mode.node.type(n));
});
nextjournal.clojure_mode.node.edge_QMARK_ = (function nextjournal$clojure_mode$node$edge_QMARK_(n){
var t = nextjournal.clojure_mode.node.type(n);
return ((nextjournal.clojure_mode.node.start_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(t)) || (((nextjournal.clojure_mode.node.same_edge_type_QMARK_(t)) || (nextjournal.clojure_mode.node.prefix_type_QMARK_(t)))))));
});
nextjournal.clojure_mode.node.closed_by = (function nextjournal$clojure_mode$node$closed_by(n){
var G__66504 = nextjournal.clojure_mode.node.type(n).prop(module$node_modules$$lezer$common$dist$index_cjs.NodeProp.closedBy);
if((G__66504 == null)){
return null;
} else {
return (G__66504[(0)]);
}
});
nextjournal.clojure_mode.node.opened_by = (function nextjournal$clojure_mode$node$opened_by(n){
var G__66506 = nextjournal.clojure_mode.node.type(n).prop(module$node_modules$$lezer$common$dist$index_cjs.NodeProp.openedBy);
if((G__66506 == null)){
return null;
} else {
return (G__66506[(0)]);
}
});
nextjournal.clojure_mode.node.name = (function nextjournal$clojure_mode$node$name(node){
return node.name;
});
nextjournal.clojure_mode.node.error_QMARK_ = (function nextjournal$clojure_mode$node$error_QMARK_(node){
return nextjournal.clojure_mode.node.error_type_QMARK_(node);
});
nextjournal.clojure_mode.node.top_QMARK_ = (function nextjournal$clojure_mode$node$top_QMARK_(node){
return nextjournal.clojure_mode.node.top_type_QMARK_(nextjournal.clojure_mode.node.type(node));
});
nextjournal.clojure_mode.node.string_QMARK_ = (function nextjournal$clojure_mode$node$string_QMARK_(node){
return ("String" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.regexp_QMARK_ = (function nextjournal$clojure_mode$node$regexp_QMARK_(node){
return ("RegExp" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.line_comment_QMARK_ = (function nextjournal$clojure_mode$node$line_comment_QMARK_(node){
return ("LineComment" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.discard_QMARK_ = (function nextjournal$clojure_mode$node$discard_QMARK_(node){
return ("Discard" === nextjournal.clojure_mode.node.name(node));
});
nextjournal.clojure_mode.node.coll_QMARK_ = (function nextjournal$clojure_mode$node$coll_QMARK_(node){
return nextjournal.clojure_mode.node.coll_type_QMARK_(nextjournal.clojure_mode.node.type(node));
});
nextjournal.clojure_mode.node.terminal_type_QMARK_ = (function nextjournal$clojure_mode$node$terminal_type_QMARK_(node_type){
if(nextjournal.clojure_mode.node.top_type_QMARK_(node_type)){
return false;
} else {
if(cljs.core.truth_(node_type.prop(nextjournal.clojure_mode.node.prefix_coll_prop))){
return false;
} else {
if(cljs.core.truth_(node_type.prop(nextjournal.clojure_mode.node.coll_prop))){
return false;
} else {
if(("Meta" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
if(("TaggedLiteral" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
if(("ConstructorCall" === nextjournal.clojure_mode.node.name(node_type))){
return false;
} else {
return true;

}
}
}
}
}
}
});
nextjournal.clojure_mode.node.balanced_QMARK_ = (function nextjournal$clojure_mode$node$balanced_QMARK_(p__66524){
var map__66526 = p__66524;
var map__66526__$1 = (((((!((map__66526 == null))))?(((((map__66526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66526):map__66526);
var node = map__66526__$1;
var firstChild = (function (){var obj66530 = map__66526__$1;
if((!((obj66530 == null)))){
return (obj66530["firstChild"]);
} else {
return undefined;
}
})();
var lastChild = (function (){var obj66533 = map__66526__$1;
if((!((obj66533 == null)))){
return (obj66533["lastChild"]);
} else {
return undefined;
}
})();
var temp__5751__auto__ = nextjournal.clojure_mode.node.closed_by(firstChild);
if(cljs.core.truth_(temp__5751__auto__)){
var closing = temp__5751__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,nextjournal.clojure_mode.node.name(lastChild))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.end(firstChild),nextjournal.clojure_mode.node.end(lastChild))));
} else {
return true;
}
});
nextjournal.clojure_mode.node.ancestors = (function nextjournal$clojure_mode$node$ancestors(node){
var temp__5757__auto__ = nextjournal.clojure_mode.node.up(node);
if((temp__5757__auto__ == null)){
return null;
} else {
var parent = temp__5757__auto__;
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (nextjournal.clojure_mode.node.ancestors.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.node.ancestors.cljs$core$IFn$_invoke$arity$1(parent) : nextjournal.clojure_mode.node.ancestors.call(null,parent));
}),null,null)));
}
});
nextjournal.clojure_mode.node.closest = (function nextjournal$clojure_mode$node$closest(node,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(node) : pred.call(null,node)))){
return node;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,nextjournal.clojure_mode.node.ancestors(node));
}
});
nextjournal.clojure_mode.node.highest = (function nextjournal$clojure_mode$node$highest(node,pred){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (found,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.reduced(found);
}
}),null,cljs.core.cons(node,nextjournal.clojure_mode.node.ancestors(node)));
});
nextjournal.clojure_mode.node.children = (function nextjournal$clojure_mode$node$children(var_args){
var G__66538 = arguments.length;
switch (G__66538) {
case 3:
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3 = (function (parent,from,dir){
var temp__5757__auto__ = (function (){var G__66539 = dir;
switch (G__66539) {
case (1):
return parent.childAfter(from);

break;
case (-1):
return parent.childBefore(from);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66539)].join('')));

}
})();
if((temp__5757__auto__ == null)){
return null;
} else {
var child = temp__5757__auto__;
return cljs.core.cons(child,(new cljs.core.LazySeq(null,(function (){
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,(function (){var G__66540 = dir;
switch (G__66540) {
case (1):
return nextjournal.clojure_mode.node.end(child);

break;
case (-1):
return nextjournal.clojure_mode.node.start(child);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66540)].join('')));

}
})(),dir);
}),null,null)));
}
}));

(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$1 = (function (subtree){
return nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(subtree,nextjournal.clojure_mode.node.start(subtree),(1));
}));

(nextjournal.clojure_mode.node.children.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.eq_QMARK_ = (function nextjournal$clojure_mode$node$eq_QMARK_(x,y){
return (((nextjournal.clojure_mode.node.start(x) === nextjournal.clojure_mode.node.start(y))) && ((((nextjournal.clojure_mode.node.end(x) === nextjournal.clojure_mode.node.end(y))) && ((nextjournal.clojure_mode.node.depth(x) === nextjournal.clojure_mode.node.depth(y))))));
});
/**
 * Node only contains whitespace
 */
nextjournal.clojure_mode.node.empty_QMARK_ = (function nextjournal$clojure_mode$node$empty_QMARK_(node){
var type_name = nextjournal.clojure_mode.node.name(node);
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_QMARK_(node))){
return nextjournal.clojure_mode.node.eq_QMARK_(nextjournal.clojure_mode.node.right(nextjournal.clojure_mode.node.down(node)),nextjournal.clojure_mode.node.down_last(node));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("String",type_name)){
return (nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)) === nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.down_last(node)));
} else {
return false;

}
}
});
nextjournal.clojure_mode.node.from_to = (function nextjournal$clojure_mode$node$from_to(var_args){
var G__66545 = arguments.length;
switch (G__66545) {
case 2:
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return ({"from": from, "to": to});
}));

(nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.from_to.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.node.range = (function nextjournal$clojure_mode$node$range(node){
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
});
nextjournal.clojure_mode.node.string = (function nextjournal$clojure_mode$node$string(var_args){
var G__66549 = arguments.length;
switch (G__66549) {
case 2:
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2 = (function (state,node){
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3 = (function (state,from,to){
return state.doc.sliceString(from,to,"\n");
}));

(nextjournal.clojure_mode.node.string.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.ancestor_QMARK_ = (function nextjournal$clojure_mode$node$ancestor_QMARK_(parent,child){
return cljs.core.boolean$((((nextjournal.clojure_mode.node.start(parent) <= nextjournal.clojure_mode.node.start(child))) && ((((nextjournal.clojure_mode.node.end(parent) >= nextjournal.clojure_mode.node.end(child))) && ((nextjournal.clojure_mode.node.depth(parent) < nextjournal.clojure_mode.node.depth(child)))))));
});
/**
 * Returns next loc moving toward `to-path`, skipping children
 */
nextjournal.clojure_mode.node.move_toward = (function nextjournal$clojure_mode$node$move_toward(node,to_node){
if(nextjournal.clojure_mode.node.eq_QMARK_(node,to_node)){
return null;
} else {
var G__66550 = cljs.core.compare(nextjournal.clojure_mode.node.start(to_node),nextjournal.clojure_mode.node.start(node));
switch (G__66550) {
case (0):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(to_node,node)){
return nextjournal.clojure_mode.node.up(node);
} else {
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down(node);
} else {
return null;
}
}

break;
case (-1):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down_last(node);
} else {
var or__4253__auto__ = nextjournal.clojure_mode.node.left(node);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.node.up(node);
}
}

break;
case (1):
if(nextjournal.clojure_mode.node.ancestor_QMARK_(node,to_node)){
return nextjournal.clojure_mode.node.down(node);
} else {
var or__4253__auto__ = nextjournal.clojure_mode.node.right(node);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.node.up(node);
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66550)].join('')));

}
}
});
nextjournal.clojure_mode.node.nodes_between = (function nextjournal$clojure_mode$node$nodes_between(node,to_node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate((function (p1__66555_SHARP_){
return nextjournal.clojure_mode.node.move_toward(p1__66555_SHARP_,to_node);
}),node));
});
nextjournal.clojure_mode.node.require_balance_QMARK_ = (function nextjournal$clojure_mode$node$require_balance_QMARK_(node){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(node);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(node)) || (nextjournal.clojure_mode.node.regexp_QMARK_(node)));
}
});
nextjournal.clojure_mode.node.tree = (function nextjournal$clojure_mode$node$tree(var_args){
var G__66562 = arguments.length;
switch (G__66562) {
case 1:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1 = (function (state){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state);
}));

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2 = (function (state,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state).resolve(pos);
}));

(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3 = (function (state,pos,dir){
return module$node_modules$$codemirror$language$dist$index_cjs.syntaxTree(state).resolve(pos,dir);
}));

(nextjournal.clojure_mode.node.tree.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.cursor = (function nextjournal$clojure_mode$node$cursor(var_args){
var G__66570 = arguments.length;
switch (G__66570) {
case 1:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return tree.cursor();
}));

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$2 = (function (tree,pos){
return tree.cursorAt(pos);
}));

(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3 = (function (tree,pos,dir){
return tree.cursorAt(pos,dir);
}));

(nextjournal.clojure_mode.node.cursor.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.node.terminal_cursor = (function nextjournal$clojure_mode$node$terminal_cursor(tree,pos,dir){
var i = pos;
while(true){
var c = nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3(tree,i,dir);
var type = c.type;
if(nextjournal.clojure_mode.node.top_type_QMARK_(type)){
return null;
} else {
if(nextjournal.clojure_mode.node.terminal_type_QMARK_(c.type)){
return c;
} else {
var G__66763 = (dir + i);
i = G__66763;
continue;

}
}
break;
}
});
/**
 * Returns topmost node at same starting position
 */
nextjournal.clojure_mode.node.up_here = (function nextjournal$clojure_mode$node$up_here(node){
var from = nextjournal.clojure_mode.node.start(node);
var or__4253__auto__ = nextjournal.clojure_mode.node.highest(node,(function (p1__66574_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,nextjournal.clojure_mode.node.start(p1__66574_SHARP_));
}));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.node.topmost_cursor = (function nextjournal$clojure_mode$node$topmost_cursor(state,from){
return nextjournal.clojure_mode.node.up_here(nextjournal.clojure_mode.node.cursor.cljs$core$IFn$_invoke$arity$3(state,from,(1)).node).cursor();
});
nextjournal.clojure_mode.node.terminal_nodes = (function nextjournal$clojure_mode$node$terminal_nodes(state,from,to){
var cursor = nextjournal.clojure_mode.node.topmost_cursor(state,from);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
var node_type = nextjournal.clojure_mode.node.type(cursor);
if((nextjournal.clojure_mode.node.start(cursor) > to)){
return found;
} else {
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(node_type)) || (nextjournal.clojure_mode.node.error_QMARK_(node_type)))){
var found__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found,({"type": node_type, "from": nextjournal.clojure_mode.node.start(cursor), "to": nextjournal.clojure_mode.node.end(cursor)}));
cursor.lastChild();

if(cljs.core.truth_(cursor.next())){
var G__66765 = found__$1;
found = G__66765;
continue;
} else {
return found__$1;
}
} else {
if(cljs.core.truth_(cursor.next())){
var G__66767 = found;
found = G__66767;
continue;
} else {
return found;
}

}
}
break;
}
});
nextjournal.clojure_mode.node.balanced_range = (function nextjournal$clojure_mode$node$balanced_range(var_args){
var G__66592 = arguments.length;
switch (G__66592) {
case 2:
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2 = (function (state,node){
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.node.start(node),nextjournal.clojure_mode.node.end(node));
}));

(nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3 = (function (state,from,to){
var vec__66599 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null));
var from__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66599,(0),null);
var to__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66599,(1),null);
var from_node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from__$1,(1));
var to_node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,to__$1,(-1));
var from__$2 = (cljs.core.truth_(nextjournal.clojure_mode.node.require_balance_QMARK_(from_node))?nextjournal.clojure_mode.node.start(from_node):from__$1);
var to__$2 = (cljs.core.truth_(nextjournal.clojure_mode.node.require_balance_QMARK_(to_node))?nextjournal.clojure_mode.node.end(to_node):to__$1);
var vec__66602 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66607,node_between){
var vec__66609 = p__66607;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66609,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66609,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((nextjournal.clojure_mode.node.ancestor_QMARK_(node_between,from_node))?nextjournal.clojure_mode.node.start(node_between):left),((nextjournal.clojure_mode.node.ancestor_QMARK_(node_between,to_node))?nextjournal.clojure_mode.node.end(node_between):right)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from__$2,to__$2], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66586_SHARP_){
var G__66612 = p1__66586_SHARP_;
if(nextjournal.clojure_mode.node.edge_QMARK_(p1__66586_SHARP_)){
return nextjournal.clojure_mode.node.up(G__66612);
} else {
return G__66612;
}
}),nextjournal.clojure_mode.node.nodes_between(from_node,to_node)));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66602,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66602,(1),null);
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2(left,right);
}));

(nextjournal.clojure_mode.node.balanced_range.cljs$lang$maxFixedArity = 3);

/**
 * Span of collection not including edges
 */
nextjournal.clojure_mode.node.inner_span = (function nextjournal$clojure_mode$node$inner_span(p__66613){
var map__66614 = p__66613;
var map__66614__$1 = (((((!((map__66614 == null))))?(((((map__66614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66614):map__66614);
var node = map__66614__$1;
var firstChild = (function (){var obj66617 = map__66614__$1;
if((!((obj66617 == null)))){
return (obj66617["firstChild"]);
} else {
return undefined;
}
})();
var lastChild = (function (){var obj66618 = map__66614__$1;
if((!((obj66618 == null)))){
return (obj66618["lastChild"]);
} else {
return undefined;
}
})();
return ({"from": ((nextjournal.clojure_mode.node.left_edge_QMARK_(firstChild))?nextjournal.clojure_mode.node.end(firstChild):nextjournal.clojure_mode.node.start(node)), "to": ((nextjournal.clojure_mode.node.right_edge_QMARK_(lastChild))?nextjournal.clojure_mode.node.start(lastChild):nextjournal.clojure_mode.node.end(node))});
});
/**
 * within (exclusive of edges)
 */
nextjournal.clojure_mode.node.within_QMARK__LT_ = (function nextjournal$clojure_mode$node$within_QMARK__LT_(parent,child){
var c1 = cljs.core.compare(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.start(child));
var c2 = cljs.core.compare(nextjournal.clojure_mode.node.end(parent),nextjournal.clojure_mode.node.end(child));
return (((((c1 > (0))) || ((c2 < (0))))) && ((((!((c1 < (0))))) && ((!((c2 > (0))))))));
});
/**
 * within (inclusive of edges)
 */
nextjournal.clojure_mode.node.within_QMARK_ = (function nextjournal$clojure_mode$node$within_QMARK_(parent,child){
return (((!((cljs.core.compare(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.start(child)) < (0))))) && ((!((cljs.core.compare(nextjournal.clojure_mode.node.end(parent),nextjournal.clojure_mode.node.end(child)) > (0))))));
});
nextjournal.clojure_mode.node.follow_edges = (function nextjournal$clojure_mode$node$follow_edges(node){
if(nextjournal.clojure_mode.node.edge_QMARK_(node)){
return nextjournal.clojure_mode.node.up(node);
} else {
return node;
}
});
nextjournal.clojure_mode.node.prefix = (function nextjournal$clojure_mode$node$prefix(node){
var temp__5757__auto__ = nextjournal.clojure_mode.node.up(node);
if((temp__5757__auto__ == null)){
return null;
} else {
var parent = temp__5757__auto__;
var or__4253__auto__ = nextjournal.clojure_mode.util.guard(parent,nextjournal.clojure_mode.node.prefix_container_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.node.down(parent),nextjournal.clojure_mode.node.prefix_edge_QMARK_);
}
}
});
nextjournal.clojure_mode.node.left_edge_with_prefix = (function nextjournal$clojure_mode$node$left_edge_with_prefix(state,node){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__66623 = nextjournal.clojure_mode.node.prefix(node);
if((G__66623 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,G__66623);
}
})()),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down(node))].join('');
});
nextjournal.clojure_mode.node.with_prefix = (function nextjournal$clojure_mode$node$with_prefix(node){
var G__66624 = node;
if(cljs.core.truth_(nextjournal.clojure_mode.node.prefix(node))){
return nextjournal.clojure_mode.node.up(G__66624);
} else {
return G__66624;
}
});
/**
 * Node ending immediately to the left of pos
 */
nextjournal.clojure_mode.node.node_BAR_ = (function nextjournal$clojure_mode$node$node_BAR_(state,pos){
var G__66626 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(-1));
if((G__66626 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66626,(function (p1__66625_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,nextjournal.clojure_mode.node.end(p1__66625_SHARP_));
}));
}
});
/**
 * Node starting immediately to the right of pos
 */
nextjournal.clojure_mode.node._BAR_node = (function nextjournal$clojure_mode$node$_BAR_node(state,pos){
var G__66628 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(1));
if((G__66628 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66628,(function (p1__66627_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,nextjournal.clojure_mode.node.start(p1__66627_SHARP_));
}));
}
});
nextjournal.clojure_mode.node.nearest_touching = (function nextjournal$clojure_mode$node$nearest_touching(state,pos,dir){
var L = (function (){var G__66631 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(-1));
if((G__66631 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66631,(function (p__66632){
var map__66633 = p__66632;
var map__66633__$1 = (((((!((map__66633 == null))))?(((((map__66633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66633):map__66633);
var to = (function (){var obj66635 = map__66633__$1;
if((!((obj66635 == null)))){
return (obj66635["to"]);
} else {
return undefined;
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,to);
}));
}
})();
var R = (function (){var G__66636 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,pos,(1));
if((G__66636 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__66636,(function (p__66640){
var map__66641 = p__66640;
var map__66641__$1 = (((((!((map__66641 == null))))?(((((map__66641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66641):map__66641);
var from = (function (){var obj66643 = map__66641__$1;
if((!((obj66643 == null)))){
return (obj66643["from"]);
} else {
return undefined;
}
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,from);
}));
}
})();
var mid = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos);
var G__66644 = dir;
switch (G__66644) {
case (1):
var or__4253__auto__ = nextjournal.clojure_mode.util.guard(R,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function (p1__66629_SHARP_){
return ((nextjournal.clojure_mode.node.same_edge_QMARK_(p1__66629_SHARP_)) || ((!(nextjournal.clojure_mode.node.right_edge_QMARK_(p1__66629_SHARP_)))));
})));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = L;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = R;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return mid;
}
}
}

break;
case (-1):
var or__4253__auto__ = nextjournal.clojure_mode.util.guard(L,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function (p1__66630_SHARP_){
return ((nextjournal.clojure_mode.node.same_edge_QMARK_(p1__66630_SHARP_)) || ((!(nextjournal.clojure_mode.node.left_edge_QMARK_(p1__66630_SHARP_)))));
})));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = R;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = L;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return mid;
}
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66644)].join('')));

}
});

//# sourceMappingURL=nextjournal.clojure_mode.node.js.map