if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.user.hello_panel = (function hello_panel(this$){var e__17181__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello World!"], null));var seq__17408_17414 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__17409_17415 = null;var count__17410_17416 = 0;var i__17411_17417 = 0;while(true){
if((i__17411_17417 < count__17410_17416))
{var vec__17412_17418 = cljs.core._nth.call(null,chunk__17409_17415,i__17411_17417);var ev__17182__auto___17419 = cljs.core.nth.call(null,vec__17412_17418,0,null);var func__17183__auto___17420 = cljs.core.nth.call(null,vec__17412_17418,1,null);lt.util.dom.on.call(null,e__17181__auto__,ev__17182__auto___17419,func__17183__auto___17420);
{
var G__17421 = seq__17408_17414;
var G__17422 = chunk__17409_17415;
var G__17423 = count__17410_17416;
var G__17424 = (i__17411_17417 + 1);
seq__17408_17414 = G__17421;
chunk__17409_17415 = G__17422;
count__17410_17416 = G__17423;
i__17411_17417 = G__17424;
continue;
}
} else
{var temp__4126__auto___17425 = cljs.core.seq.call(null,seq__17408_17414);if(temp__4126__auto___17425)
{var seq__17408_17426__$1 = temp__4126__auto___17425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17408_17426__$1))
{var c__16538__auto___17427 = cljs.core.chunk_first.call(null,seq__17408_17426__$1);{
var G__17428 = cljs.core.chunk_rest.call(null,seq__17408_17426__$1);
var G__17429 = c__16538__auto___17427;
var G__17430 = cljs.core.count.call(null,c__16538__auto___17427);
var G__17431 = 0;
seq__17408_17414 = G__17428;
chunk__17409_17415 = G__17429;
count__17410_17416 = G__17430;
i__17411_17417 = G__17431;
continue;
}
} else
{var vec__17413_17432 = cljs.core.first.call(null,seq__17408_17426__$1);var ev__17182__auto___17433 = cljs.core.nth.call(null,vec__17413_17432,0,null);var func__17183__auto___17434 = cljs.core.nth.call(null,vec__17413_17432,1,null);lt.util.dom.on.call(null,e__17181__auto__,ev__17182__auto___17433,func__17183__auto___17434);
{
var G__17435 = cljs.core.next.call(null,seq__17408_17426__$1);
var G__17436 = null;
var G__17437 = 0;
var G__17438 = 0;
seq__17408_17414 = G__17435;
chunk__17409_17415 = G__17436;
count__17410_17416 = G__17437;
i__17411_17417 = G__17438;
continue;
}
}
} else
{}
}
break;
}
return e__17181__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","user.hello","lt.plugins.user/user.hello",3780889681),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user.hello","user.hello",1535287393)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.user","on-close-destroy","lt.plugins.user/on-close-destroy",4509098889)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.user.hello_panel.call(null,this$);
}));
lt.plugins.user.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","on-close-destroy","lt.plugins.user/on-close-destroy",4509098889),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__on_close_destroy);
lt.plugins.user.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.user","user.hello","lt.plugins.user/user.hello",3780889681));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.say-hello","user.say-hello",576535935),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.user.hello);
})], null));
lt.plugins.user.__BEH__on_open = (function __BEH__on_open(this$,ed){var temp__4126__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));if(cljs.core.truth_(temp__4126__auto__))
{var path = temp__4126__auto__;return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"name","name",1017277949)], null),clojure.string.join.call(null,lt.objs.files.separator,cljs.core.take_last.call(null,2,clojure.string.split.call(null,path,cljs.core.re_pattern.call(null,[cljs.core.str("\\"),cljs.core.str(lt.objs.files.separator)].join(''))))));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","on-open","lt.plugins.user/on-open",3459820488),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__on_open);
}

//# sourceMappingURL=user_compiled.js.map