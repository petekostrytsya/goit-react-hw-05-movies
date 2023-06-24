"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{595:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,o=t(689),u=t(87),c=t(168),i=t(686),s=i.Z.ul(r||(r=(0,c.Z)(["\n  margin-top: 12px;\n"]))),f=i.Z.li(a||(a=(0,c.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n\n  background-color: #5d16cf;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #ffc700;\n    color: #111111;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),p=t(184),l=function(n){var e=n.movies,t=(0,o.TH)();return(0,p.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(u.rU,{state:{from:t},to:"/movies/".concat(e),children:r})},e)}))})}},755:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,o=t(861),u=t(439),c=t(687),i=t.n(c),s=t(791),f=t(87),p=t(323),l=t(168),d=t(686),v=d.Z.input(r||(r=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 15px 16px;\n\n  color: yellow;\n\n  background: #8a12fa;\n  border-radius: 10px;\n  border-style: none;\n\n  \n  :active,\n  :focus,\n  :hover {\n    color: white;\n    border-style: none;\n    border-color: #8a12fa;\n  }\n"]))),h=d.Z.button(a||(a=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  margin-left: 12px;\n  padding: 15px 16px;\n\n  color: yellow;\n\n  background: #8a12fa;\n  border-radius: 10px;\n\n  :not(:disabled):active,\n  :focus,\n  :not(:disabled):hover {\n    color: #3a3939;\n  }\n"]))),x=t(184),g=function(n){var e=n.setSearchParams,t=(0,s.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e({query:a})},children:[(0,x.jsx)(v,{type:"text",placeholder:"Name movie",autoFocus:!0,value:a,onChange:function(n){var e=n.target.value;o(e)}}),(0,x.jsx)(h,{type:"submit",disabled:!a,children:"Search"})]})},m=t(595),b=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,f.lr)(),c=(0,u.Z)(a,2),l=c[0],d=c[1];return(0,s.useEffect)((function(){var n=l.get("query");if(n){var e=function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Ph)(n);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{setSearchParams:d}),t.length>0&&(0,x.jsx)(m.Z,{movies:t})]})}},323:function(n,e,t){t.d(e,{Df:function(){return i},Eb:function(){return f},Hu:function(){return p},Ph:function(){return s}});var r=t(861),a=t(687),o=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="1e55a261b3f7dff24c919e8356225a2d",i=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=755.be51c616.chunk.js.map