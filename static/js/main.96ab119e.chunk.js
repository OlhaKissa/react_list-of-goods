(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),i=n(5),o=n(6),a=n(9),l=n(7),u=n(8),d=n(1),h=n.n(d),b=n(2),j=n.n(b),N=(n(14),n(15),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),console.log(n,r),c}!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleSort=function(t){e.setState((function(e){return{isReversed:t!==s.NONE&&e.isReversed,sortType:t}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isReversed,r=t.sortType;return Object(N.jsxs)("div",{className:"section content",children:[Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)("button",{type:"button",onClick:function(){return e.handleSort(s.ALPHABET)},className:j()("button is-info",{"is-light":r!==s.ALPHABET}),children:"Sort alphabetically"}),Object(N.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":r!==s.LENGTH}),onClick:function(){return e.handleSort(s.LENGTH)},children:"Sort by length"}),Object(N.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!this.state.isReversed}),onClick:this.reverse,children:"Reverse"}),(r!==s.NONE||n)&&Object(N.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return e.handleSort(s.NONE)},children:"Reset"})]}),Object(N.jsx)("ul",{children:v(p,this.state).map((function(e){return Object(N.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),n}(h.a.Component);c.a.render(Object(N.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.96ab119e.chunk.js.map