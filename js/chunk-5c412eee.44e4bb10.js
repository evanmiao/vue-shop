(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c412eee"],{"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),c=r("17c2"),i=r("9112");for(var o in n){var s=a[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{i(u,"forEach",c)}catch(l){u.forEach=c}}},"16cd":function(t,e,r){},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),c=r("ae40"),i=n("forEach"),o=c("forEach");t.exports=i&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2adb":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.getTabs,(function(e,a){return r("div",{key:a,staticClass:"tab-control-item",class:{active:t.getCurrent===a},on:{click:function(e){return t.itemClick(a)}}},[r("span",[t._v(t._s(e))])])})),0)},n=[],c=(r("a9e3"),{name:"TabControl",props:{tabs:{type:Array,default:function(){return[]}},current:{type:Number,default:0}},computed:{getTabs:function(){return this.tabs},getCurrent:function(){var t=Number(this.current);return t>this.getTabs.length-1?this.getTabs.length-1:t}},methods:{itemClick:function(t){this.$emit("itemClick",t)}}}),i=c,o=(r("ad6f"),r("2877")),s=Object(o["a"])(i,a,n,!1,null,"0d60ee94",null);e["a"]=s.exports},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,c=r("1dde"),i=r("ae40"),o=c("filter"),s=i("filter");a({target:"Array",proto:!0,forced:!o||!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"730f":function(t,e,r){"use strict";var a=r("e2bd"),n=r.n(a);n.a},ad6f:function(t,e,r){"use strict";var a=r("dc6c"),n=r.n(a);n.a},b503:function(t,e,r){"use strict";var a=r("d8e1"),n=r.n(a);n.a},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),c=r("df75"),i=r("d039"),o=i((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(n(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"nav-bar"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"content"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{attrs:{id:"tab-content",data:[t.categoryData]}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{tabs:["综合","新品","销量"],current:t.current},on:{itemClick:t.tabClick}}),r("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)])],1)],1)},n=[];r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r("61b0"),u=r("e3c8"),l=r("2adb"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,a){return r("div",{key:a,staticClass:"menu-list-item",class:{active:a===t.currentIndex},on:{click:function(e){return t.itemClick(a)}}},[t._v(t._s(e.title))])})),0)])},b=[],d={name:"TabMenu",components:{Scroll:u["a"]},props:{categories:Array},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},g=d,y=(r("b503"),r("2877")),h=Object(y["a"])(g,f,b,!1,null,"3f0a14d2",null),p=h.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,a){return r("div",{key:a,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.img}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},v=[],C=r("4660"),O={name:"TabContentCategory",components:{GridView:C["a"]},props:{subcategories:{type:Object,default:function(){return{}}}}},D=O,w=(r("730f"),Object(y["a"])(D,m,v,!1,null,"3cf4333d",null)),j=w.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("grid-view",t._l(t.categoryDetail,(function(t,e){return r("goods-list-item",{key:e,attrs:{goods:t}})})),1)},k=[],x=r("d008"),E={name:"TabContentDetail",components:{GridView:C["a"],GoodsListItem:x["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},I=E,T=Object(y["a"])(I,_,k,!1,null,"dbbfca54",null),P=T.exports,S=r("b775");function $(){return Object(S["a"])({url:"/category"})}function A(t){return Object(S["a"])({url:"/subcategory",params:{maitKey:t}})}function G(t,e){return Object(S["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var N=r("ac0d"),J={name:"Category",components:{NavBar:s["a"],Scroll:u["a"],TabControl:l["a"],TabMenu:p,TabContentCategory:j,TabContentDetail:P},mixins:[N["b"]],data:function(){return{categories:[],categoryData:{},currentIndex:-1}},created:function(){this.getCategory()},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{getCategory:function(){var t=this;$().then((function(e){t.categories=e.data.data.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t.getSubcategories(0)}))},getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;A(r).then((function(r){e.categoryData[t].subcategories=r.data.data,e.categoryData=o({},e.categoryData),e.getCategoryDetail("pop"),e.getCategoryDetail("sell"),e.getCategoryDetail("new")}))},getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;G(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r.data.data.list,e.categoryData=o({},e.categoryData)}))},selectItem:function(t){this.getSubcategories(t)}}},K=J,M=(r("f83e"),Object(y["a"])(K,a,n,!1,null,"6183df06",null));e["default"]=M.exports},d8e1:function(t,e,r){},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),c=r("56ef"),i=r("fc6a"),o=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,u=c(a),l={},f=0;while(u.length>f)r=n(a,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},dc6c:function(t,e,r){},e2bd:function(t,e,r){},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),c=r("fc6a"),i=r("06cf").f,o=r("83ab"),s=n((function(){i(1)})),u=!o||s;a({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},f83e:function(t,e,r){"use strict";var a=r("16cd"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-5c412eee.44e4bb10.js.map