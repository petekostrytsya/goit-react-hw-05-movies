"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[932],{932:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,o,i,c,s,u,p,l,d=t(861),f=t(439),x=t(687),h=t.n(x),v=t(791),g=t(689),m=t(87),b=t(323),w=t(585),Z=t(168),k=t(686),j=k.Z.span(r||(r=(0,Z.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n  }\n\n  a::before {\n    content: '';\n    display: block;\n\n    border-color: #ffc700;\n    border-style: solid;\n    border-width: 0 0 2px 2px;\n    height: 6px;\n    left: 0;\n    position: absolute;\n    width: 6px;\n    margin-top: -4px;\n    top: 50%;\n\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n\n  :hover,\n  :focus {\n    color: #ffc700;\n    a::before {\n      border-color: white;\n    }\n  }\n"]))),y=k.Z.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),_=k.Z.img(o||(o=(0,Z.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),U=k.Z.h2(i||(i=(0,Z.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),S=k.Z.h3(c||(c=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),z=k.Z.p(s||(s=(0,Z.Z)(["\n  font-size: 16px;\n  color: yellow;\n  background-color: #7a89df;\n  margin-bottom: 12px;\n"]))),L=k.Z.ul(u||(u=(0,Z.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: yellow;\n  margin-bottom: 12px;\n"]))),O=k.Z.ul(p||(p=(0,Z.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  /* border-radius: 20px; */\n"]))),C=k.Z.li(l||(l=(0,Z.Z)(["\n  span {\n    color: #ffc700;\n  }\n\n  a:hover,\n  a:focus,\n  a:active {\n    color: #ffc700;\n    span {\n      color: white;\n    }\n  }\n"]))),P=t(184),R=function(){var n,e,t,r=(0,g.UO)().movieId,a=(0,v.useState)(""),o=(0,f.Z)(a,2),i=o[0],c=o[1],s=(0,g.TH)(),u=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,v.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.Pg)(r);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(j,{children:(0,P.jsx)(m.rU,{to:u,children:"Go back"})}),(0,P.jsxs)(y,{children:[(0,P.jsx)(_,{src:"".concat(i.poster_path?w.f+i.poster_path:w.l+"?text="+i.original_title),alt:"get"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(U,{children:i.original_title}),(0,P.jsxs)(S,{children:["Rating: ",Math.round(i.vote_average)]}),(0,P.jsx)(S,{children:"Overview"}),(0,P.jsx)(z,{children:i.overview}),(0,P.jsx)(S,{children:"Genres"}),(0,P.jsx)(L,{children:null===(t=i.genres)||void 0===t?void 0:t.map((function(n){return(0,P.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Additional information"}),(0,P.jsxs)(O,{children:[(0,P.jsx)(C,{children:(0,P.jsx)(m.OL,{to:"cast",state:s.state,children:"Cast"})}),(0,P.jsx)(C,{children:(0,P.jsx)(m.OL,{to:"reviews",state:s.state,children:"Reviews"})})]}),(0,P.jsx)(v.Suspense,{fallback:(0,P.jsx)("div",{children:"Loading subpage..."}),children:(0,P.jsx)(g.j3,{})})]})]})}},323:function(n,e,t){t.d(e,{Df:function(){return s},Eb:function(){return l},Hu:function(){return d},Pg:function(){return p},Ph:function(){return u}});var r=t(861),a=t(687),o=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="1e55a261b3f7dff24c919e8356225a2d",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},585:function(n,e,t){t.d(e,{f:function(){return r},l:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=932.1756fd30.chunk.js.map