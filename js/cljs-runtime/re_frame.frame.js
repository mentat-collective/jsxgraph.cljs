goog.provide('re_frame.frame');

/**
 * @interface
 */
re_frame.frame.IFrame = function(){};

var re_frame$frame$IFrame$dispatch$dyn_65358 = (function (this$,event_v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.dispatch[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_v) : m__4551__auto__.call(null,this$,event_v));
} else {
var m__4549__auto__ = (re_frame.frame.dispatch["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_v) : m__4549__auto__.call(null,this$,event_v));
} else {
throw cljs.core.missing_protocol("IFrame.dispatch",this$);
}
}
});
re_frame.frame.dispatch = (function re_frame$frame$dispatch(this$,event_v){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$dispatch$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$dispatch$arity$2(this$,event_v);
} else {
return re_frame$frame$IFrame$dispatch$dyn_65358(this$,event_v);
}
});

var re_frame$frame$IFrame$dispatch_sync$dyn_65362 = (function (this$,event_v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.dispatch_sync[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_v) : m__4551__auto__.call(null,this$,event_v));
} else {
var m__4549__auto__ = (re_frame.frame.dispatch_sync["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_v) : m__4549__auto__.call(null,this$,event_v));
} else {
throw cljs.core.missing_protocol("IFrame.dispatch-sync",this$);
}
}
});
re_frame.frame.dispatch_sync = (function re_frame$frame$dispatch_sync(this$,event_v){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$dispatch_sync$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$dispatch_sync$arity$2(this$,event_v);
} else {
return re_frame$frame$IFrame$dispatch_sync$dyn_65362(this$,event_v);
}
});

var re_frame$frame$IFrame$reg_sub_raw$dyn_65367 = (function (this$,query_id,handler_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_sub_raw[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_id,handler_fn) : m__4551__auto__.call(null,this$,query_id,handler_fn));
} else {
var m__4549__auto__ = (re_frame.frame.reg_sub_raw["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_id,handler_fn) : m__4549__auto__.call(null,this$,query_id,handler_fn));
} else {
throw cljs.core.missing_protocol("IFrame.reg-sub-raw",this$);
}
}
});
re_frame.frame.reg_sub_raw = (function re_frame$frame$reg_sub_raw(this$,query_id,handler_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_sub_raw$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_sub_raw$arity$3(this$,query_id,handler_fn);
} else {
return re_frame$frame$IFrame$reg_sub_raw$dyn_65367(this$,query_id,handler_fn);
}
});

var re_frame$frame$IFrame$reg_sub$dyn_65368 = (function (this$,query_id,args){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_sub[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_id,args) : m__4551__auto__.call(null,this$,query_id,args));
} else {
var m__4549__auto__ = (re_frame.frame.reg_sub["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,query_id,args) : m__4549__auto__.call(null,this$,query_id,args));
} else {
throw cljs.core.missing_protocol("IFrame.reg-sub",this$);
}
}
});
re_frame.frame.reg_sub = (function re_frame$frame$reg_sub(this$,query_id,args){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_sub$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_sub$arity$3(this$,query_id,args);
} else {
return re_frame$frame$IFrame$reg_sub$dyn_65368(this$,query_id,args);
}
});

var re_frame$frame$IFrame$subscribe$dyn_65369 = (function (this$,query_v){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.subscribe[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4551__auto__.call(null,this$,query_v));
} else {
var m__4549__auto__ = (re_frame.frame.subscribe["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_v) : m__4549__auto__.call(null,this$,query_v));
} else {
throw cljs.core.missing_protocol("IFrame.subscribe",this$);
}
}
});
re_frame.frame.subscribe = (function re_frame$frame$subscribe(this$,query_v){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$subscribe$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$subscribe$arity$2(this$,query_v);
} else {
return re_frame$frame$IFrame$subscribe$dyn_65369(this$,query_v);
}
});

var re_frame$frame$IFrame$clear_sub$dyn_65372 = (function (this$,query_id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.clear_sub[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_id) : m__4551__auto__.call(null,this$,query_id));
} else {
var m__4549__auto__ = (re_frame.frame.clear_sub["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,query_id) : m__4549__auto__.call(null,this$,query_id));
} else {
throw cljs.core.missing_protocol("IFrame.clear-sub",this$);
}
}
});
re_frame.frame.clear_sub = (function re_frame$frame$clear_sub(this$,query_id){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$clear_sub$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$clear_sub$arity$2(this$,query_id);
} else {
return re_frame$frame$IFrame$clear_sub$dyn_65372(this$,query_id);
}
});

var re_frame$frame$IFrame$clear_subscriptions_cache$dyn_65376 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.clear_subscriptions_cache[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (re_frame.frame.clear_subscriptions_cache["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFrame.clear-subscriptions-cache",this$);
}
}
});
re_frame.frame.clear_subscriptions_cache = (function re_frame$frame$clear_subscriptions_cache(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$clear_subscriptions_cache$arity$1 == null)))))){
return this$.re_frame$frame$IFrame$clear_subscriptions_cache$arity$1(this$);
} else {
return re_frame$frame$IFrame$clear_subscriptions_cache$dyn_65376(this$);
}
});

var re_frame$frame$IFrame$reg_fx$dyn_65377 = (function (this$,fx_id,handler_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_fx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,fx_id,handler_fn) : m__4551__auto__.call(null,this$,fx_id,handler_fn));
} else {
var m__4549__auto__ = (re_frame.frame.reg_fx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,fx_id,handler_fn) : m__4549__auto__.call(null,this$,fx_id,handler_fn));
} else {
throw cljs.core.missing_protocol("IFrame.reg-fx",this$);
}
}
});
re_frame.frame.reg_fx = (function re_frame$frame$reg_fx(this$,fx_id,handler_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_fx$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_fx$arity$3(this$,fx_id,handler_fn);
} else {
return re_frame$frame$IFrame$reg_fx$dyn_65377(this$,fx_id,handler_fn);
}
});

var re_frame$frame$IFrame$clear_fx$dyn_65378 = (function (this$,fx_id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.clear_fx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,fx_id) : m__4551__auto__.call(null,this$,fx_id));
} else {
var m__4549__auto__ = (re_frame.frame.clear_fx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,fx_id) : m__4549__auto__.call(null,this$,fx_id));
} else {
throw cljs.core.missing_protocol("IFrame.clear-fx",this$);
}
}
});
re_frame.frame.clear_fx = (function re_frame$frame$clear_fx(this$,fx_id){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$clear_fx$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$clear_fx$arity$2(this$,fx_id);
} else {
return re_frame$frame$IFrame$clear_fx$dyn_65378(this$,fx_id);
}
});

var re_frame$frame$IFrame$reg_cofx$dyn_65380 = (function (this$,cofx_id,handler_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_cofx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,cofx_id,handler_fn) : m__4551__auto__.call(null,this$,cofx_id,handler_fn));
} else {
var m__4549__auto__ = (re_frame.frame.reg_cofx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,cofx_id,handler_fn) : m__4549__auto__.call(null,this$,cofx_id,handler_fn));
} else {
throw cljs.core.missing_protocol("IFrame.reg-cofx",this$);
}
}
});
re_frame.frame.reg_cofx = (function re_frame$frame$reg_cofx(this$,cofx_id,handler_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_cofx$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_cofx$arity$3(this$,cofx_id,handler_fn);
} else {
return re_frame$frame$IFrame$reg_cofx$dyn_65380(this$,cofx_id,handler_fn);
}
});

var re_frame$frame$IFrame$inject_cofx$dyn_65386 = (function() {
var G__65387 = null;
var G__65387__2 = (function (this$,cofx_id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.inject_cofx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,cofx_id) : m__4551__auto__.call(null,this$,cofx_id));
} else {
var m__4549__auto__ = (re_frame.frame.inject_cofx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,cofx_id) : m__4549__auto__.call(null,this$,cofx_id));
} else {
throw cljs.core.missing_protocol("IFrame.inject-cofx",this$);
}
}
});
var G__65387__3 = (function (this$,cofx_id,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.inject_cofx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,cofx_id,value) : m__4551__auto__.call(null,this$,cofx_id,value));
} else {
var m__4549__auto__ = (re_frame.frame.inject_cofx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,cofx_id,value) : m__4549__auto__.call(null,this$,cofx_id,value));
} else {
throw cljs.core.missing_protocol("IFrame.inject-cofx",this$);
}
}
});
G__65387 = function(this$,cofx_id,value){
switch(arguments.length){
case 2:
return G__65387__2.call(this,this$,cofx_id);
case 3:
return G__65387__3.call(this,this$,cofx_id,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65387.cljs$core$IFn$_invoke$arity$2 = G__65387__2;
G__65387.cljs$core$IFn$_invoke$arity$3 = G__65387__3;
return G__65387;
})()
;
re_frame.frame.inject_cofx = (function re_frame$frame$inject_cofx(var_args){
var G__65016 = arguments.length;
switch (G__65016) {
case 2:
return re_frame.frame.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.frame.inject_cofx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.frame.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (this$,cofx_id){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$inject_cofx$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$inject_cofx$arity$2(this$,cofx_id);
} else {
return re_frame$frame$IFrame$inject_cofx$dyn_65386(this$,cofx_id);
}
}));

(re_frame.frame.inject_cofx.cljs$core$IFn$_invoke$arity$3 = (function (this$,cofx_id,value){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$inject_cofx$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$inject_cofx$arity$3(this$,cofx_id,value);
} else {
return re_frame$frame$IFrame$inject_cofx$dyn_65386(this$,cofx_id,value);
}
}));

(re_frame.frame.inject_cofx.cljs$lang$maxFixedArity = 3);


var re_frame$frame$IFrame$clear_cofx$dyn_65390 = (function (this$,cofx_id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.clear_cofx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,cofx_id) : m__4551__auto__.call(null,this$,cofx_id));
} else {
var m__4549__auto__ = (re_frame.frame.clear_cofx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,cofx_id) : m__4549__auto__.call(null,this$,cofx_id));
} else {
throw cljs.core.missing_protocol("IFrame.clear-cofx",this$);
}
}
});
re_frame.frame.clear_cofx = (function re_frame$frame$clear_cofx(this$,cofx_id){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$clear_cofx$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$clear_cofx$arity$2(this$,cofx_id);
} else {
return re_frame$frame$IFrame$clear_cofx$dyn_65390(this$,cofx_id);
}
});

var re_frame$frame$IFrame$clear_event$dyn_65394 = (function (this$,event_id){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.clear_event[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_id) : m__4551__auto__.call(null,this$,event_id));
} else {
var m__4549__auto__ = (re_frame.frame.clear_event["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_id) : m__4549__auto__.call(null,this$,event_id));
} else {
throw cljs.core.missing_protocol("IFrame.clear-event",this$);
}
}
});
re_frame.frame.clear_event = (function re_frame$frame$clear_event(this$,event_id){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$clear_event$arity$2 == null)))))){
return this$.re_frame$frame$IFrame$clear_event$arity$2(this$,event_id);
} else {
return re_frame$frame$IFrame$clear_event$dyn_65394(this$,event_id);
}
});

var re_frame$frame$IFrame$reg_event_db$dyn_65397 = (function() {
var G__65398 = null;
var G__65398__3 = (function (this$,id,db_handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_db[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,db_handler) : m__4551__auto__.call(null,this$,id,db_handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_db["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,db_handler) : m__4549__auto__.call(null,this$,id,db_handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-db",this$);
}
}
});
var G__65398__4 = (function (this$,id,interceptors,db_handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_db[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,db_handler) : m__4551__auto__.call(null,this$,id,interceptors,db_handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_db["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,db_handler) : m__4549__auto__.call(null,this$,id,interceptors,db_handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-db",this$);
}
}
});
G__65398 = function(this$,id,interceptors,db_handler){
switch(arguments.length){
case 3:
return G__65398__3.call(this,this$,id,interceptors);
case 4:
return G__65398__4.call(this,this$,id,interceptors,db_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65398.cljs$core$IFn$_invoke$arity$3 = G__65398__3;
G__65398.cljs$core$IFn$_invoke$arity$4 = G__65398__4;
return G__65398;
})()
;
re_frame.frame.reg_event_db = (function re_frame$frame$reg_event_db(var_args){
var G__65024 = arguments.length;
switch (G__65024) {
case 3:
return re_frame.frame.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame.frame.reg_event_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.frame.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,db_handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_db$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_db$arity$3(this$,id,db_handler);
} else {
return re_frame$frame$IFrame$reg_event_db$dyn_65397(this$,id,db_handler);
}
}));

(re_frame.frame.reg_event_db.cljs$core$IFn$_invoke$arity$4 = (function (this$,id,interceptors,db_handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_db$arity$4 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_db$arity$4(this$,id,interceptors,db_handler);
} else {
return re_frame$frame$IFrame$reg_event_db$dyn_65397(this$,id,interceptors,db_handler);
}
}));

(re_frame.frame.reg_event_db.cljs$lang$maxFixedArity = 4);


var re_frame$frame$IFrame$reg_event_fx$dyn_65409 = (function() {
var G__65410 = null;
var G__65410__3 = (function (this$,id,fx_handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_fx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,fx_handler) : m__4551__auto__.call(null,this$,id,fx_handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_fx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,fx_handler) : m__4549__auto__.call(null,this$,id,fx_handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-fx",this$);
}
}
});
var G__65410__4 = (function (this$,id,interceptors,fx_handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_fx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,fx_handler) : m__4551__auto__.call(null,this$,id,interceptors,fx_handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_fx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,fx_handler) : m__4549__auto__.call(null,this$,id,interceptors,fx_handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-fx",this$);
}
}
});
G__65410 = function(this$,id,interceptors,fx_handler){
switch(arguments.length){
case 3:
return G__65410__3.call(this,this$,id,interceptors);
case 4:
return G__65410__4.call(this,this$,id,interceptors,fx_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65410.cljs$core$IFn$_invoke$arity$3 = G__65410__3;
G__65410.cljs$core$IFn$_invoke$arity$4 = G__65410__4;
return G__65410;
})()
;
re_frame.frame.reg_event_fx = (function re_frame$frame$reg_event_fx(var_args){
var G__65034 = arguments.length;
switch (G__65034) {
case 3:
return re_frame.frame.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame.frame.reg_event_fx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.frame.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,fx_handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_fx$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_fx$arity$3(this$,id,fx_handler);
} else {
return re_frame$frame$IFrame$reg_event_fx$dyn_65409(this$,id,fx_handler);
}
}));

(re_frame.frame.reg_event_fx.cljs$core$IFn$_invoke$arity$4 = (function (this$,id,interceptors,fx_handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_fx$arity$4 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_fx$arity$4(this$,id,interceptors,fx_handler);
} else {
return re_frame$frame$IFrame$reg_event_fx$dyn_65409(this$,id,interceptors,fx_handler);
}
}));

(re_frame.frame.reg_event_fx.cljs$lang$maxFixedArity = 4);


var re_frame$frame$IFrame$reg_event_ctx$dyn_65422 = (function() {
var G__65423 = null;
var G__65423__3 = (function (this$,id,handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_ctx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4551__auto__.call(null,this$,id,handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_ctx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,handler) : m__4549__auto__.call(null,this$,id,handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-ctx",this$);
}
}
});
var G__65423__4 = (function (this$,id,interceptors,handler){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (re_frame.frame.reg_event_ctx[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,handler) : m__4551__auto__.call(null,this$,id,interceptors,handler));
} else {
var m__4549__auto__ = (re_frame.frame.reg_event_ctx["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,interceptors,handler) : m__4549__auto__.call(null,this$,id,interceptors,handler));
} else {
throw cljs.core.missing_protocol("IFrame.reg-event-ctx",this$);
}
}
});
G__65423 = function(this$,id,interceptors,handler){
switch(arguments.length){
case 3:
return G__65423__3.call(this,this$,id,interceptors);
case 4:
return G__65423__4.call(this,this$,id,interceptors,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65423.cljs$core$IFn$_invoke$arity$3 = G__65423__3;
G__65423.cljs$core$IFn$_invoke$arity$4 = G__65423__4;
return G__65423;
})()
;
re_frame.frame.reg_event_ctx = (function re_frame$frame$reg_event_ctx(var_args){
var G__65036 = arguments.length;
switch (G__65036) {
case 3:
return re_frame.frame.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame.frame.reg_event_ctx.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.frame.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (this$,id,handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_ctx$arity$3 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_ctx$arity$3(this$,id,handler);
} else {
return re_frame$frame$IFrame$reg_event_ctx$dyn_65422(this$,id,handler);
}
}));

(re_frame.frame.reg_event_ctx.cljs$core$IFn$_invoke$arity$4 = (function (this$,id,interceptors,handler){
if((((!((this$ == null)))) && ((!((this$.re_frame$frame$IFrame$reg_event_ctx$arity$4 == null)))))){
return this$.re_frame$frame$IFrame$reg_event_ctx$arity$4(this$,id,interceptors,handler);
} else {
return re_frame$frame$IFrame$reg_event_ctx$dyn_65422(this$,id,interceptors,handler);
}
}));

(re_frame.frame.reg_event_ctx.cljs$lang$maxFixedArity = 4);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {re_frame.frame.IFrame}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
re_frame.frame.Frame = (function (registry,event_queue,app_db,subs_cache,default_interceptors,__meta,__extmap,__hash){
this.registry = registry;
this.event_queue = event_queue;
this.app_db = app_db;
this.subs_cache = subs_cache;
this.default_interceptors = default_interceptors;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(re_frame.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(re_frame.frame.Frame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k65038,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__65046 = k65038;
var G__65046__$1 = (((G__65046 instanceof cljs.core.Keyword))?G__65046.fqn:null);
switch (G__65046__$1) {
case "registry":
return self__.registry;

break;
case "event-queue":
return self__.event_queue;

break;
case "app-db":
return self__.app_db;

break;
case "subs-cache":
return self__.subs_cache;

break;
case "default-interceptors":
return self__.default_interceptors;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65038,else__4505__auto__);

}
}));

(re_frame.frame.Frame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__65047){
var vec__65048 = p__65047;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65048,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65048,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(re_frame.frame.Frame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#re-frame.frame.Frame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),self__.event_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),self__.subs_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),self__.default_interceptors],null))], null),self__.__extmap));
}));

(re_frame.frame.Frame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65037){
var self__ = this;
var G__65037__$1 = this;
return (new cljs.core.RecordIter((0),G__65037__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(re_frame.frame.Frame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(re_frame.frame.Frame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,self__.subs_cache,self__.default_interceptors,self__.__meta,self__.__extmap,self__.__hash));
}));

(re_frame.frame.Frame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(re_frame.frame.Frame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (575380991 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(re_frame.frame.Frame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65039,other65040){
var self__ = this;
var this65039__$1 = this;
return (((!((other65040 == null)))) && ((((this65039__$1.constructor === other65040.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.registry,other65040.registry)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.event_queue,other65040.event_queue)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.app_db,other65040.app_db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.subs_cache,other65040.subs_cache)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.default_interceptors,other65040.default_interceptors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65039__$1.__extmap,other65040.__extmap)))))))))))))));
}));

(re_frame.frame.Frame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"registry","registry",1021159018),null,new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),null,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),null,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,self__.subs_cache,self__.default_interceptors,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(re_frame.frame.Frame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k65038){
var self__ = this;
var this__4509__auto____$1 = this;
var G__65134 = k65038;
var G__65134__$1 = (((G__65134 instanceof cljs.core.Keyword))?G__65134.fqn:null);
switch (G__65134__$1) {
case "registry":
case "event-queue":
case "app-db":
case "subs-cache":
case "default-interceptors":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65038);

}
}));

(re_frame.frame.Frame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__65037){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__65146 = cljs.core.keyword_identical_QMARK_;
var expr__65147 = k__4511__auto__;
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"registry","registry",1021159018),expr__65147) : pred__65146.call(null,new cljs.core.Keyword(null,"registry","registry",1021159018),expr__65147)))){
return (new re_frame.frame.Frame(G__65037,self__.event_queue,self__.app_db,self__.subs_cache,self__.default_interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),expr__65147) : pred__65146.call(null,new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),expr__65147)))){
return (new re_frame.frame.Frame(self__.registry,G__65037,self__.app_db,self__.subs_cache,self__.default_interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__65147) : pred__65146.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__65147)))){
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,G__65037,self__.subs_cache,self__.default_interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),expr__65147) : pred__65146.call(null,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),expr__65147)))){
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,G__65037,self__.default_interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65146.cljs$core$IFn$_invoke$arity$2 ? pred__65146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),expr__65147) : pred__65146.call(null,new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),expr__65147)))){
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,self__.subs_cache,G__65037,self__.__meta,self__.__extmap,null));
} else {
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,self__.subs_cache,self__.default_interceptors,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__65037),null));
}
}
}
}
}
}));

(re_frame.frame.Frame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"registry","registry",1021159018),self__.registry,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),self__.event_queue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),self__.subs_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),self__.default_interceptors,null))], null),self__.__extmap));
}));

(re_frame.frame.Frame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__65037){
var self__ = this;
var this__4501__auto____$1 = this;
return (new re_frame.frame.Frame(self__.registry,self__.event_queue,self__.app_db,self__.subs_cache,self__.default_interceptors,G__65037,self__.__extmap,self__.__hash));
}));

(re_frame.frame.Frame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_sub_raw$arity$3 = (function (this$,query_id,handler_fn){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.register_handler(self__.registry,re_frame.subs.kind,query_id,handler_fn);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$subscribe$arity$2 = (function (this$,query_v){
var self__ = this;
var this$__$1 = this;
return re_frame.subs.subscribe(this$__$1,query_v);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_sub$arity$3 = (function (this$,query_id,args){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_frame.subs.reg_sub,this$__$1,query_id,args);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$clear_fx$arity$2 = (function (this$,fx_id){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.clear_handlers(self__.registry,re_frame.fx.kind,fx_id);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_db$arity$3 = (function (this$,id,db_handler){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$frame$IFrame$reg_event_db$arity$4(null,id,null,db_handler);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_db$arity$4 = (function (this$,id,interceptors,db_handler){
var self__ = this;
var this$__$1 = this;
return re_frame.events.register(self__.registry,id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.default_interceptors,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(db_handler)], null));
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$dispatch_sync$arity$2 = (function (this$,event_v){
var self__ = this;
var this$__$1 = this;
return re_frame.router.dispatch_sync(this$__$1,event_v);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$clear_event$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.clear_handlers(self__.registry,re_frame.events.kind,id);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$inject_cofx$arity$2 = (function (this$,cofx_id){
var self__ = this;
var this$__$1 = this;
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(self__.registry,cofx_id);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$inject_cofx$arity$3 = (function (this$,cofx_id,value){
var self__ = this;
var this$__$1 = this;
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$3(self__.registry,cofx_id,value);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$clear_cofx$arity$2 = (function (this$,cofx_id){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.clear_handlers(self__.registry,re_frame.cofx.kind,cofx_id);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_ctx$arity$3 = (function (this$,id,handler){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$frame$IFrame$reg_event_ctx$arity$4(null,id,null,handler);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_ctx$arity$4 = (function (this$,id,interceptors,handler){
var self__ = this;
var this$__$1 = this;
return re_frame.events.register(self__.registry,id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.default_interceptors,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_fx$arity$3 = (function (this$,fx_id,handler_fn){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.register_handler(self__.registry,re_frame.fx.kind,fx_id,handler_fn);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$clear_subscriptions_cache$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return re_frame.subs.clear_subscription_cache_BANG_(self__.subs_cache);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$clear_sub$arity$2 = (function (this$,query_id){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.clear_handlers(self__.registry,re_frame.subs.kind,query_id);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$dispatch$arity$2 = (function (this$,event_v){
var self__ = this;
var this$__$1 = this;
return re_frame.router.dispatch(self__.event_queue,event_v);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_cofx$arity$3 = (function (this$,cofx_id,handler_fn){
var self__ = this;
var this$__$1 = this;
return re_frame.registry.register_handler(self__.registry,re_frame.cofx.kind,cofx_id,handler_fn);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_fx$arity$3 = (function (this$,id,fx_handler){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$frame$IFrame$reg_event_fx$arity$4(null,id,null,fx_handler);
}));

(re_frame.frame.Frame.prototype.re_frame$frame$IFrame$reg_event_fx$arity$4 = (function (this$,id,interceptors,fx_handler){
var self__ = this;
var this$__$1 = this;
return re_frame.events.register(self__.registry,id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.default_interceptors,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(fx_handler)], null));
}));

(re_frame.frame.Frame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"registry","registry",-1633276751,null),new cljs.core.Symbol(null,"event-queue","event-queue",666954814,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null),new cljs.core.Symbol(null,"subs-cache","subs-cache",-1831599048,null),new cljs.core.Symbol(null,"default-interceptors","default-interceptors",-893771721,null)], null);
}));

(re_frame.frame.Frame.cljs$lang$type = true);

(re_frame.frame.Frame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"re-frame.frame/Frame",null,(1),null));
}));

(re_frame.frame.Frame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"re-frame.frame/Frame");
}));

/**
 * Positional factory function for re-frame.frame/Frame.
 */
re_frame.frame.__GT_Frame = (function re_frame$frame$__GT_Frame(registry,event_queue,app_db,subs_cache,default_interceptors){
return (new re_frame.frame.Frame(registry,event_queue,app_db,subs_cache,default_interceptors,null,null,null));
});

/**
 * Factory function for re-frame.frame/Frame, taking a map of keywords to field values.
 */
re_frame.frame.map__GT_Frame = (function re_frame$frame$map__GT_Frame(G__65041){
var extmap__4542__auto__ = (function (){var G__65269 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65041,new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048)], 0));
if(cljs.core.record_QMARK_(G__65041)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65269);
} else {
return G__65269;
}
})();
return (new re_frame.frame.Frame(new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(G__65041),new cljs.core.Keyword(null,"event-queue","event-queue",-973576713).cljs$core$IFn$_invoke$arity$1(G__65041),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__65041),new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(G__65041),new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048).cljs$core$IFn$_invoke$arity$1(G__65041),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

re_frame.frame.frame_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * Creates a new frame, which bundles the registry (subscriptions, event-handlers,
 *   fx, cofx), app-db, subscription cache, default interceptors, and event queue.
 * 
 *   :registry, :app-db, and :interceptors can be provided through an options map.
 */
re_frame.frame.make_frame = (function re_frame$frame$make_frame(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65499 = arguments.length;
var i__4865__auto___65501 = (0);
while(true){
if((i__4865__auto___65501 < len__4864__auto___65499)){
args__4870__auto__.push((arguments[i__4865__auto___65501]));

var G__65503 = (i__4865__auto___65501 + (1));
i__4865__auto___65501 = G__65503;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frame.frame.make_frame.cljs$core$IFn$_invoke$arity$variadic = (function (p__65294){
var vec__65295 = p__65294;
var map__65298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65295,(0),null);
var map__65298__$1 = cljs.core.__destructure_map(map__65298);
var extra_keys = map__65298__$1;
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var registry__$1 = (function (){var or__4253__auto__ = registry;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_frame.registry.make_registry();
}
})();
var app_db__$1 = (function (){var or__4253__auto__ = app_db;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var default_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(registry__$1,new cljs.core.Keyword(null,"db","db",993250759)),re_frame.fx.do_fx(registry__$1)], null);
var frame = re_frame.frame.map__GT_Frame(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.frame.frame_id,cljs.core.inc),new cljs.core.Keyword(null,"registry","registry",1021159018),registry__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db__$1,new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721),re_frame.subs.__GT_SubscriptionCache(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"default-interceptors","default-interceptors",1760664048),(cljs.core.truth_(interceptors)?(cljs.core.truth_(new cljs.core.Keyword(null,"replace","replace",-786587770).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(interceptors)))?interceptors:cljs.core.into.cljs$core$IFn$_invoke$arity$2(default_interceptors,interceptors)):default_interceptors),new cljs.core.Keyword(null,"event-queue","event-queue",-973576713),re_frame.router.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY,null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(extra_keys,new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951)], 0))], 0)));
(frame.event_queue.frame = frame);

return frame;
}));

(re_frame.frame.make_frame.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.frame.make_frame.cljs$lang$applyTo = (function (seq65291){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65291));
}));

/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 */
re_frame.frame.make_restore_fn = (function re_frame$frame$make_restore_fn(frame){
var handlers = cljs.core.deref(new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(frame)));
var app_db = cljs.core.deref(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame));
var subs_cache = cljs.core.deref(new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(frame));
return (function (){
var original_subs_65529 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_65530 = cljs.core.vals(cljs.core.deref(new cljs.core.Keyword(null,"subs-cache","subs-cache",822836721).cljs$core$IFn$_invoke$arity$1(frame)));
var seq__65313_65531 = cljs.core.seq(current_subs_65530);
var chunk__65315_65532 = null;
var count__65316_65533 = (0);
var i__65317_65534 = (0);
while(true){
if((i__65317_65534 < count__65316_65533)){
var sub_65535 = chunk__65315_65532.cljs$core$IIndexed$_nth$arity$2(null,i__65317_65534);
if((!(cljs.core.contains_QMARK_(original_subs_65529,sub_65535)))){
re_frame.interop.dispose_BANG_(sub_65535);


var G__65536 = seq__65313_65531;
var G__65537 = chunk__65315_65532;
var G__65538 = count__65316_65533;
var G__65539 = (i__65317_65534 + (1));
seq__65313_65531 = G__65536;
chunk__65315_65532 = G__65537;
count__65316_65533 = G__65538;
i__65317_65534 = G__65539;
continue;
} else {
var G__65540 = seq__65313_65531;
var G__65541 = chunk__65315_65532;
var G__65542 = count__65316_65533;
var G__65543 = (i__65317_65534 + (1));
seq__65313_65531 = G__65540;
chunk__65315_65532 = G__65541;
count__65316_65533 = G__65542;
i__65317_65534 = G__65543;
continue;
}
} else {
var temp__5753__auto___65544 = cljs.core.seq(seq__65313_65531);
if(temp__5753__auto___65544){
var seq__65313_65547__$1 = temp__5753__auto___65544;
if(cljs.core.chunked_seq_QMARK_(seq__65313_65547__$1)){
var c__4679__auto___65548 = cljs.core.chunk_first(seq__65313_65547__$1);
var G__65549 = cljs.core.chunk_rest(seq__65313_65547__$1);
var G__65550 = c__4679__auto___65548;
var G__65551 = cljs.core.count(c__4679__auto___65548);
var G__65552 = (0);
seq__65313_65531 = G__65549;
chunk__65315_65532 = G__65550;
count__65316_65533 = G__65551;
i__65317_65534 = G__65552;
continue;
} else {
var sub_65553 = cljs.core.first(seq__65313_65547__$1);
if((!(cljs.core.contains_QMARK_(original_subs_65529,sub_65553)))){
re_frame.interop.dispose_BANG_(sub_65553);


var G__65554 = cljs.core.next(seq__65313_65547__$1);
var G__65555 = null;
var G__65556 = (0);
var G__65557 = (0);
seq__65313_65531 = G__65554;
chunk__65315_65532 = G__65555;
count__65316_65533 = G__65556;
i__65317_65534 = G__65557;
continue;
} else {
var G__65558 = cljs.core.next(seq__65313_65547__$1);
var G__65559 = null;
var G__65560 = (0);
var G__65561 = (0);
seq__65313_65531 = G__65558;
chunk__65315_65532 = G__65559;
count__65316_65533 = G__65560;
i__65317_65534 = G__65561;
continue;
}
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"kind->id->handler","kind->id->handler",-214642779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(frame)),handlers);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(frame),app_db);

return null;
});
});

//# sourceMappingURL=re_frame.frame.js.map