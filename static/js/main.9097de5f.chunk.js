(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,n,t){},25:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),u=t(16),a=t.n(u),o=t(4),s=(t(22),t(3)),i=t.n(s),j=(t(25),t(0));function b(e){return Object(j.jsxs)("div",{className:"group",children:[Object(j.jsx)("input",{type:"text",value:e.amount,onChange:function(n){return e.onAmountChange(n.target.value)}}),Object(j.jsx)("select",{value:e.currency,onChange:function(n){return e.onCurrencyChange(n.target.value)},children:e.currencies.map((function(e){return Object(j.jsxs)("option",{value:e,children:["  ",e," "]},e)}))})]})}b.protoTypes={amount:i.a.number.isRequired,currency:i.a.string.isRequired,currencies:i.a.array,onAmountChange:i.a.func,onCurrencyChange:i.a.func};var O=b,f=t(17),h=t.n(f);var l=function(){var e=Object(c.useState)(1),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(1),a=Object(o.a)(u,2),s=a[0],i=a[1],b=Object(c.useState)("USD"),f=Object(o.a)(b,2),l=f[0],g=f[1],y=Object(c.useState)("EUR"),d=Object(o.a)(y,2),p=d[0],C=d[1],m=Object(c.useState)([]),v=Object(o.a)(m,2),x=v[0],S=v[1];function k(e){return e.toFixed(4)}return Object(c.useEffect)((function(){h.a.get("/api/latest?access_key=07696e1a379f7034b73ae179d1283caf").then((function(e){S(e.data.rates)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Currency Converter"}),Object(j.jsx)(O,{currencies:Object.keys(x),amount:t,currency:l,onAmountChange:function(e){console.log(e*x[p]/x[l]),i(k(e*x[p]/x[l])),r(e)},onCurrencyChange:function(e){i(k(t*x[p]/x[e])),g(e)}}),Object(j.jsx)(O,{currencies:Object.keys(x),amount:s,currency:p,onAmountChange:function(e){console.log(e*x[l]/x[p]),r(k(e*x[l]/x[p])),i(e)},onCurrencyChange:function(e){r(k(s*x[l]/x[e])),C(e)}})]})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9097de5f.chunk.js.map