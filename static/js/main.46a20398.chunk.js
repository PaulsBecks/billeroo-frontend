(this["webpackJsonpreact-4798tj"]=this["webpackJsonpreact-4798tj"]||[]).push([[0],{304:function(e,a,t){e.exports=t(562)},376:function(e,a,t){},411:function(e,a,t){},464:function(e,a,t){},554:function(e,a,t){},562:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(44),c=t(17);function o(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),l=Object(c.a)(t,2),r=l[0],o=l[1];return[r,function(a){try{var t=a instanceof Function?a(r):a;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}var i={name:"",empty:!0,price:"",isbn:"",amount:1,authors:[]},m={name:"",addition:"",address:"",postCode:"",city:"",discount:0,ust:7},u={invoiceDate:(new Date).toString(),shippingDate:(new Date).toString(),orderDate:(new Date).toString(),invoiceNumber:"",porto:"5.00",finalText:"",articles:[]},d={name:"",executive:"",firstAddress:{name:"",address:"",postCode:"",city:"",phone:""},secondAddress:{name:"",address:"",postCode:"",city:"",phone:""},firstEmail:"",secondEmail:"",taxNumber:"",taxOffice:"",bank:"",iban:"",bic:"",logo:"",finalText:""},s={name:"",contact:"",books:[]};function E(){return o("company",d)}function v(){return o("invoices",[])}function b(){return o("articles",[])}function p(){return o("authors",[])}var f=t(580),h=function(){var e=o("customers",[]),a=Object(c.a)(e,1)[0];return l.a.createElement(f.a,{celled:!0},l.a.createElement(f.a.Header,null,l.a.createElement(f.a.Row,null,l.a.createElement(f.a.HeaderCell,null,"Name"),l.a.createElement(f.a.HeaderCell,null,"Adresse"),l.a.createElement(f.a.HeaderCell,null,"PLZ"),l.a.createElement(f.a.HeaderCell,null,"Stadt"),l.a.createElement(f.a.HeaderCell,null,"Rabatt"),l.a.createElement(f.a.HeaderCell,null,"MwST"))),l.a.createElement(f.a.Body,null,a.map((function(e){return l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Cell,null,e.name),l.a.createElement(f.a.Cell,null,e.address),l.a.createElement(f.a.Cell,null,e.postCode),l.a.createElement(f.a.Cell,null,e.city),l.a.createElement(f.a.Cell,null,e.discount),l.a.createElement(f.a.Cell,null,e.ust))}))))},g=(t(376),t(576)),C=t(579),y=t(19),N=t(29),j=t(566),O=t(578),F=t(23),A=t(577),k=t(575),w=t(95);function x(e){var a=e.article,t=e.setArticle,r=Object(n.useState)(a.price),o=Object(c.a)(r,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),s=d[0],E=d[1],v=p(),b=Object(c.a)(v,1)[0],f=Object(n.useMemo)((function(){return b.filter((function(e){return e&&e.name.includes(s)}))}),[b,s]);var h=function(e,n){var l=n.name,r=n.value;if("price"===l){if(r=parseFloat(r),isNaN(r))return void m("");r=r.toFixed(2),m(r)}t(Object(y.a)({},a,Object(F.a)({},l,r)))};return l.a.createElement(A.a,null,l.a.createElement(A.a.Group,{width:"equal"},l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Name",placeholder:"Name",name:"name",onChange:h,value:a.name}),l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Lagerbestand",placeholder:"Menge",type:"number",onChange:h,name:"amount",value:a.amount})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"ISBN",placeholder:"ISBN",name:"isbn",onChange:h,value:a.isbn}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Preis",placeholder:"Preis",name:"price",icon:"euro sign",onChange:function(e,a){var t=a.value;return m(t)},onBlur:function(e){h(0,{name:e.target.name,value:e.target.value})},value:i})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,"Autoren")),l.a.createElement("div",null,a.authors.map((function(e){return l.a.createElement(w.a,null,e.name)}))),l.a.createElement(k.a,{name:"author",placeholder:"Suche...",value:s,onChange:function(e,a){var t=a.value;return E(t)}}),""!==s&&l.a.createElement("div",null,f.map((function(e){return l.a.createElement(w.a,{onClick:function(){return n=e,void t(Object(y.a)({},a,{authors:[].concat(Object(N.a)(a.authors),[n])}));var n}},e.name)})))))}t(411);function H(e){var a=new Date(e),t=a.getDate(),n=a.getMonth()+1;return"".concat(t<10?"0"+t:t,".").concat(n<10?"0"+n:n,".").concat(a.getFullYear())}var S=function(){var e=b(),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),m=Object(c.a)(o,2),u=m[0],d=m[1],s=Object(n.useState)(),E=Object(c.a)(s,2),p=E[0],h=E[1],g=v(),C=Object(c.a)(g,1)[0],F=Object(n.useMemo)((function(){return p?C.reduce((function(e,a){for(var t in a.articles){var n=a.articles[t];if(n.id===p.id)return[].concat(Object(N.a)(e),[Object(y.a)({},a,{article:n})])}return e}),[]):null}),[C,p]);return l.a.createElement("div",{className:"articles-tab-container"},l.a.createElement(j.a,{onClick:function(){return d(Object(y.a)({},i,{id:t.length}))},primary:!0},"Neuer Artikel"),u&&l.a.createElement(O.a,{onClose:function(){return d()},open:!0},l.a.createElement(O.a.Header,null,"Edit Article"),l.a.createElement(O.a.Content,null,l.a.createElement(x,{article:u,setArticle:d})),l.a.createElement(O.a.Actions,null,l.a.createElement(j.a,{onClick:function(){return d()},content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),l.a.createElement(j.a,{onClick:function(){var e=Object(N.a)(t);e[u.id]=u,r(e),d()},content:"Speichern",primary:!0,icon:"check",labelPosition:"right"}))),p&&l.a.createElement(O.a,{onClose:function(){return h()},open:!0},l.a.createElement(O.a.Header,null,"Rechnungen"),l.a.createElement(O.a.Content,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Header,null,l.a.createElement(f.a.Row,null,l.a.createElement(f.a.HeaderCell,null,"Rechnungsnummer"),l.a.createElement(f.a.HeaderCell,null,"Kunde"),l.a.createElement(f.a.HeaderCell,null,"Verkaufte Exemplare"),l.a.createElement(f.a.HeaderCell,null,"Umsatz"),l.a.createElement(f.a.HeaderCell,null,"Zahlungsdatum"))),l.a.createElement(f.a.Body,null,F.map((function(e){return l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Cell,null,e.invoiceNumber),l.a.createElement(f.a.Cell,null,e.customer.name),l.a.createElement(f.a.Cell,null,e.article.amount),l.a.createElement(f.a.Cell,null,e.article.price),l.a.createElement(f.a.Cell,null,H(e.paymentDate)))})))))),l.a.createElement(f.a,{celled:!0},l.a.createElement(f.a.Header,null,l.a.createElement(f.a.Row,null,l.a.createElement(f.a.HeaderCell,null,"Id"),l.a.createElement(f.a.HeaderCell,null,"Name"),l.a.createElement(f.a.HeaderCell,null,"ISBN"),l.a.createElement(f.a.HeaderCell,null,"Menge"),l.a.createElement(f.a.HeaderCell,null,"Preis"),l.a.createElement(f.a.HeaderCell,null,"Autoren"),l.a.createElement(f.a.HeaderCell,null))),l.a.createElement(f.a.Body,null,t.map((function(e,a){return e&&l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Cell,null,e.id),l.a.createElement(f.a.Cell,null,e.name),l.a.createElement(f.a.Cell,null,e.isbn),l.a.createElement(f.a.Cell,null,e.amount),l.a.createElement(f.a.Cell,null,e.price),l.a.createElement(f.a.Cell,null,e.authors.map((function(e){return l.a.createElement("p",null,e.name)}))),l.a.createElement(f.a.Cell,null,l.a.createElement(j.a,{onClick:function(){return d(e)},icon:"edit"}),l.a.createElement(j.a,{onClick:function(){return h(e)},icon:"list"}),l.a.createElement(j.a,{onClick:function(){return function(e){var a=Object(N.a)(t);a[e]=void 0,r(a)}(a)},icon:"delete"})))})))))},D=t(64),I=t(581),P=t(582),R=t(574),M=t(96),B=t.n(M),T=(t(463),t(464),function(e){var a=e.invoice,t=e.setInvoice,r=e.setInvoices,u=o("customers",[]),d=Object(c.a)(u,2),s=d[0],E=d[1],v=Object(n.useState)(Object(y.a)({},m,{id:s.length})),b=Object(c.a)(v,2),p=b[0],f=b[1],h=Object(n.useState)(void 0),C=Object(c.a)(h,2),H=C[0],S=C[1],M=Object(n.useState)(""),T=Object(c.a)(M,2),G=T[0],L=T[1],z=o("articles",[]),Z=Object(c.a)(z,2),K=Z[0],q=Z[1],U=Object(n.useState)(Object(y.a)({},i,{id:K.length})),V=Object(c.a)(U,2),J=V[0],W=V[1],Y=Object(n.useState)(1),Q=Object(c.a)(Y,2),X=Q[0],$=Q[1],_=Object(n.useState)(""),ee=Object(c.a)(_,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(void 0),le=Object(c.a)(ne,2),re=le[0],ce=le[1],oe=o("invoices",[]),ie=Object(c.a)(oe,1)[0],me=Object(n.useState)(a.porto),ue=Object(c.a)(me,2),de=ue[0],se=ue[1],Ee=function(e,n){var l=n.name,r=n.value,c=n.checked;if("porto"===l){if(r=parseFloat(r),isNaN(r))return void se("");r=r.toFixed(2),se(r)}"payed"===l&&(r=c),t(Object(y.a)({},a,Object(F.a)({},l,r)))},ve=function(){return ce(!re)},be=Object(n.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(G.toLowerCase())}))}),[s,G]),pe=Object(n.useMemo)((function(){return K.filter((function(e){return e.name.toLowerCase().includes(ae.toLowerCase())}))}),[K,ae]),fe=function(e,a){var t=a.name,n=a.value;("ust"!==t&&"discount"!==t||(n=parseFloat(n),!isNaN(n)))&&f(Object(y.a)({},p,Object(F.a)({},t,n)))},he=function(e,a){var t=Object(N.a)(K),n=t[e];t[e]=Object(y.a)({},n,{amount:parseFloat(n.amount)+a}),q(t)},ge=function(e){t(Object(y.a)({},a,{articles:[].concat(Object(N.a)(a.articles),[Object(y.a)({},e,{amount:X})])})),W(),$(1)},Ce=function(){S(!H)},ye=function(e,n){t(Object(y.a)({},a,Object(F.a)({},n,e.toString())))};return console.log(a),l.a.createElement("div",{className:"invoice-form"},l.a.createElement(g.a,null,l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement(I.a.Header,null,"Rechnungsdaten")),l.a.createElement(I.a.Content,null,l.a.createElement(P.a,null,l.a.createElement(P.a.Title,{index:0},l.a.createElement(D.a,{name:"dropdown"}),"Kunde"),l.a.createElement(P.a.Content,{active:!0},a.customer?l.a.createElement("div",{className:"invoice-form-label-container"},l.a.createElement(w.a,null,a.customer.name,l.a.createElement(D.a,{name:"delete",onClick:function(){t(Object(y.a)({},a,{customer:void 0}))}}))):l.a.createElement("div",null,l.a.createElement(k.a,{placeholder:"Suche...",onChange:function(e,a){var t=a.value;return L(t)},value:G}),""===G?l.a.createElement(j.a,{onClick:Ce},"Neuer Kunde"):l.a.createElement("div",{className:"invoice-form-label-container"},be.map((function(e){return l.a.createElement(w.a,{onClick:function(){return t(Object(y.a)({},a,{customer:e}))}},e.name)})),0===be.length&&l.a.createElement("p",null,"No Customers found.")),l.a.createElement(O.a,{open:H,onClose:Ce},l.a.createElement(O.a.Header,null,"Neuer Kunde"),l.a.createElement(O.a.Content,null,l.a.createElement(A.a,null,l.a.createElement(A.a.Group,{width:"equal"},l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Name",placeholder:"Name",name:"name",onChange:fe,value:p.name}),l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Zusatz",placeholder:"Zusatz",name:"addition",onChange:fe,value:p.addition})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Anschrift",placeholder:"Musterschstra\xdfe 3",name:"address",onChange:fe,value:p.address}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"PLZ",placeholder:"PLZ",name:"postCode",onChange:fe,value:p.postCode})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Stadt",placeholder:"Stadt",name:"city",onChange:fe,value:p.city})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"MwST",placeholder:"7",name:"ust",icon:"percent",onChange:fe,value:p.ust}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Rabat",placeholder:"0",icon:"percent",name:"discount",onChange:fe,value:p.discount})))),l.a.createElement(O.a.Actions,null,l.a.createElement(j.a,{onClick:Ce,content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),l.a.createElement(j.a,{onClick:function(){E([].concat(Object(N.a)(s),[p])),t(Object(y.a)({},a,{customer:p})),Ce()},content:"Anlegen",primary:!0,icon:"check",labelPosition:"right"}))))),l.a.createElement(P.a.Title,{index:1},l.a.createElement(D.a,{name:"dropdown"}),"Artikel"),l.a.createElement(P.a.Content,{active:!0},l.a.createElement("div",{className:"invoice-form-label-container"},a.articles.map((function(e,n){return l.a.createElement(w.a,null,e.name,l.a.createElement(w.a.Detail,null,e.articleAmount),l.a.createElement(D.a,{name:"delete",onClick:function(){return e=n,void t(Object(y.a)({},a,{articles:a.articles.filter((function(a,t){return t!==e}))}));var e}}))}))),l.a.createElement("div",null,l.a.createElement(k.a,{name:"amount",type:"number",label:"Menge",value:X,onChange:function(e,a){var t=a.value;return $(t)}}),l.a.createElement(k.a,{name:"article",placeholder:"Suche...",value:ae,onChange:function(e,a){var t=a.value;return te(t)}}),""===ae?l.a.createElement(j.a,{onClick:ve},"Neuer Artikel"):l.a.createElement("div",{className:"invoice-form-label-container"},pe.map((function(e){return l.a.createElement(w.a,{onClick:function(){return ge(e)}},e.name)})))),l.a.createElement(O.a,{open:re,onClose:ve},l.a.createElement(O.a.Header,null,"Neuer Artikel"),l.a.createElement(O.a.Content,null,l.a.createElement(x,{article:J,setArticle:W})),l.a.createElement(O.a.Actions,null,l.a.createElement(j.a,{onClick:ve,content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),l.a.createElement(j.a,{onClick:function(){q([].concat(Object(N.a)(K),[J])),ge(J),ve()},content:"Anlegen",primary:!0,icon:"check",labelPosition:"right"})))),l.a.createElement(P.a.Title,null,l.a.createElement(D.a,{name:"dropdown"}),"Allgemein"),l.a.createElement(P.a.Content,{active:!0},l.a.createElement(A.a,null,l.a.createElement(A.a.Field,{label:"Rechnungsdatum",name:"invoiceDate",selected:new Date(a.invoiceDate),onChange:function(e){return ye(e,"invoiceDate")},control:B.a,dateFormat:"dd/MM/yyyy"}),l.a.createElement(A.a.Field,{label:"Bestelldatum",name:"orderDate",selected:new Date(a.orderDate),onChange:function(e){return ye(e,"orderDate")},control:B.a,dateFormat:"dd/MM/yyyy"}),l.a.createElement(A.a.Field,{label:"Versanddatum",name:"shippingDate",selected:new Date(a.shippingDate),onChange:function(e){return ye(e,"shippingDate")},control:B.a,dateFormat:"dd/MM/yyyy"}),l.a.createElement(A.a.Field,{label:"Porto",value:de,name:"porto",onChange:function(e,a){var t=a.value;return se(t)},control:k.a,onBlur:function(e){return Ee(0,{name:e.target.name,value:e.target.value})},icon:"euro"}),l.a.createElement(A.a.Field,{label:"Rechnungsnummer",name:"invoiceNumber",value:a.invoiceNumber,onChange:Ee,control:k.a}),l.a.createElement(A.a.TextArea,{label:"Freitext",value:a.finalText,onChange:Ee,name:"finalText"}),l.a.createElement(A.a.Field,null,l.a.createElement("label",null,"Bezahlt"),l.a.createElement(R.a,{onChange:function(e,n){var l,r,c=n.name,o=n.checked;o?t(Object(y.a)({},a,(l={},Object(F.a)(l,c,o),Object(F.a)(l,"paymentDate",new Date),l))):t(Object(y.a)({},a,(r={},Object(F.a)(r,c,o),Object(F.a)(r,"paymentDate",void 0),r)))},name:"payed",checked:a.payed,toggle:!0})),a.payed&&l.a.createElement(A.a.Field,{label:"Zahlungseingangsdatum",name:"paymentDate",selected:new Date(a.paymentDate),onChange:function(e){return ye(e,"paymentDate")},control:B.a,dateFormat:"dd/MM/yyyy"})))))),l.a.createElement(j.a,{onClick:function(){return t()},content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),a.customer&&l.a.createElement(j.a,{onClick:function(){var e=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e)for(var t in e.articles)he(e.articles[t].id,a*e.articles[t].amount)};a.totalPrice=function(e){return e.articles.map((function(a){var t=a.price*a.amount;return t-t*(e.customer.discount/100)})).reduce((function(e,a){return a+e}),0)}(a);var n=Object(N.a)(ie);e(ie[a.id]),n[a.id]=a,e(n[a.id],-1),r(n),t()},content:"Speichern",primary:!0,icon:"check",labelPosition:"right"})))}),G=t(288),L=t.n(G),z=t(189),Z=t.n(z),K=function(e){var a=e.id,t=e.label,n=e.fileName;return l.a.createElement("div",{className:"tc mb4 mt2"},l.a.createElement("div",{id:"myMm",style:{height:"1mm"}}),l.a.createElement("div",{className:"pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1",onClick:function(){var e,t,l,r,c=document.getElementById(a),o=(e=c.offsetHeight,Math.floor(e/document.getElementById("myMm").offsetHeight)),i=(t=297,document.getElementById("myMm").offsetHeight*t),m=o<=297?1:Math.floor(o/297)+1;console.log({input:c,inputHeightMm:o,a4HeightMm:297,a4HeightPx:i,numPages:m,range:(l=0,r=m,Array(r-l).join(0).split(0).map((function(e,a){return a+l}))),comp:o<=297,inputHeightPx:c.offsetHeight}),L()(c,{scale:1}).then((function(e){var a,t=e.toDataURL("image/png",1);(a=o>297?new Z.a("p","mm",[o+16,210]):new Z.a).addImage(t,"PNG",0,0),a.save("".concat(n,".pdf"))}))}},t))},q=function(e){var a=e.children,t=e.singleMode,n=e.id;return l.a.createElement("div",{id:n,className:"bg-white shadow-1 center",style:{width:"210mm",height:t?"297mm":""}},a)},U=(t(554),function(e){var a=e.id,t=e.invoice,n=t.orderDate,r=t.invoiceDate,o=t.shippingDate,i=t.invoiceNumber,m=t.porto,u=t.finalText,d=t.customer,s=t.articles,v=void 0===s?[]:s,b=E(),p=Object(c.a)(b,1)[0],f=v.map((function(e){var a=e.price*e.amount;return(a-a*(d.discount/100))/(1+d.ust/100)})).reduce((function(e,a){return parseFloat(a)+e}),0);return l.a.createElement(q,{singleMode:!0,id:a},l.a.createElement("div",{className:"invoice-folding-line",style:p.companyColor?{borderColor:p.companyColor}:{}}),l.a.createElement("div",{className:"invoice-page-pdf"},l.a.createElement("div",{className:"invoice-page-top"},l.a.createElement("img",{className:"invoice-header-company-logo",src:p.logo,alt:"company logo"}),l.a.createElement("div",{className:"invoice-header"},l.a.createElement("div",{className:"invoice-header-customer-address"},l.a.createElement("div",{className:"invoice-header-customer-company"},p.name," \u2022 ",p.firstAddress.address," \u2022"," ",p.firstAddress.postCode," ",p.firstAddress.city),d?l.a.createElement("div",{className:"invoice-header-customer-info"},l.a.createElement("p",null,l.a.createElement("b",null,d.name)),l.a.createElement("p",{className:"invoice-header-customer-info-name"},l.a.createElement("b",null,d.addition)),l.a.createElement("p",null,l.a.createElement("b",null,d.address)),l.a.createElement("p",null,l.a.createElement("b",null,d.postCode," ",d.city))):l.a.createElement(j.a,null,"Kunde hinzuf\xfcgen")),l.a.createElement("div",{className:"invoice-header-company-info"},l.a.createElement("p",null,p.name),l.a.createElement("p",null,p.executive),l.a.createElement("br",null),l.a.createElement("p",null,p.firstAddress.name),l.a.createElement("p",null,p.firstAddress.address),l.a.createElement("p",null,p.firstAddress.postCode," ",p.firstAddress.city),l.a.createElement("p",null,"Telefon ",p.firstAddress.phone),l.a.createElement("br",null),l.a.createElement("p",null,p.secondAddress.name),l.a.createElement("p",null,p.secondAddress.address),l.a.createElement("p",null,p.secondAddress.postCode," ",p.secondAddress.city),l.a.createElement("p",null,"Telefon ",p.secondAddress.phone),l.a.createElement("br",null),l.a.createElement("p",null,p.firstEmail),l.a.createElement("p",null,p.secondEmail),l.a.createElement("br",null),l.a.createElement("p",null,"Steuernummer ",p.taxNumber),l.a.createElement("p",null,p.taxOffice)))),l.a.createElement("div",{className:"invoice-body"},l.a.createElement("div",{className:"invoice-body-top"},l.a.createElement("div",{className:"invoice-subject"},l.a.createElement("h4",null,"Rechnung"),l.a.createElement("p",null,"Wir erlauben uns in Rechnung zu stellen:"),l.a.createElement("div",{className:"invoice-body-subject-key-values"},l.a.createElement("div",{className:"invoice-body-subject-keys"},l.a.createElement("div",{className:"invoice-body-order-date"},l.a.createElement("p",null,l.a.createElement("b",null,"Bestelldatum:"))),l.a.createElement("div",{className:"invoice-body-send-date"},l.a.createElement("p",null,l.a.createElement("b",null,"Versand am:"))),l.a.createElement("div",{className:"invoice-body-send-to"},l.a.createElement("p",null,l.a.createElement("b",null,"Versand an:")))),l.a.createElement("div",{className:"invoice-body-subject-values"},l.a.createElement("div",{className:"invoice-body-order-date"},l.a.createElement("p",null,l.a.createElement("b",null,H(n)))),l.a.createElement("div",{className:"invoice-body-send-date"},l.a.createElement("p",null,l.a.createElement("b",null,H(o)))),l.a.createElement("div",{className:"invoice-body-send-to"},l.a.createElement("p",null,l.a.createElement("b",null,d.name," \u2022 ",d.addition)),l.a.createElement("p",null,l.a.createElement("b",null,d.address," \u2022 ",d.postCode," ",d.city)))))),l.a.createElement("div",{className:"invoice-body-top-right"},l.a.createElement("div",{className:"invoice-body-invoice-date"},l.a.createElement("p",null,"Rechnungsdatum: ",l.a.createElement("b",null,H(r)))),l.a.createElement("div",{className:"invoice-body-invoice-nr"},l.a.createElement("p",null,"Rechnungsnummer: ",l.a.createElement("b",null,i))),l.a.createElement("div",{className:"invoice-body-invoice-hint"},l.a.createElement("p",null,"(Bitte bei Zahlungen angeben)")))),l.a.createElement("div",{className:"invoice-body-article-wrapper"},v.map((function(e){var a=e.amount,t=e.price,n=e.name,r=e.isbn,c=parseInt(a)>1,o=t*a,i=o-o*(d.discount/100),m=i/(1+d.ust/100);return l.a.createElement("div",{className:"invoice-body-article"},l.a.createElement("div",{className:"invoice-body-article-left"},l.a.createElement("div",{className:"invoice-body-article-description"},l.a.createElement("div",null,l.a.createElement("b",null,a," Exemplar",c&&"e")),l.a.createElement("div",{className:"invoice-body-article-title"},l.a.createElement("b",null,"\u201e",n,"\u201c")),l.a.createElement("div",{className:"invoice-body-article-title"},r)),l.a.createElement("div",{className:"invoice-body-artivle-price-calc"},"Preis ".concat(c?"je":""," ").concat(t," \u20ac").concat(c?" = ".concat(o.toFixed(2),"\u20ac"):"").concat(d.discount>0?", abz\xfcglich ".concat(d.discount," % Rabatt = ").concat(i.toFixed(2)," \u20ac"):""," (beinhaltet ").concat(d.ust," % MwST = ").concat((i-m).toFixed(2),")"))),l.a.createElement("div",{className:"invoice-body-article-price"},l.a.createElement("b",null,v.length>1&&"".concat(m.toFixed(2)," \u20ac"))))}))),l.a.createElement("div",{className:"invoice-body-price-calculation"},l.a.createElement("div",null,l.a.createElement("p",null,"Netto"),l.a.createElement("p",null,l.a.createElement("b",null,f.toFixed(2)," \u20ac"))),l.a.createElement("div",null,l.a.createElement("p",null,"Versandkosten"),l.a.createElement("p",null,l.a.createElement("b",null,m," \u20ac"))),l.a.createElement("div",null,l.a.createElement("p",null,"+".concat(d.ust,"% Mehrwertsteuer")),l.a.createElement("p",null,l.a.createElement("b",null,((f+parseFloat(m))*parseFloat(d.ust)/100).toFixed(2)," ","\u20ac")))),l.a.createElement("div",{className:"invoice-body-price"},l.a.createElement("p",null,"Rechnungsbetrag"),l.a.createElement("p",null,l.a.createElement("b",null,((f+parseFloat(m))*(1+parseFloat(d.ust)/100)).toFixed(2)," ","\u20ac"))),l.a.createElement("div",null,l.a.createElement("p",{className:"invoice-body-final-text"},u))),l.a.createElement("div",{className:"invoice-footer",style:p.companyColor?{borderColor:p.companyColor}:{}},l.a.createElement("div",{className:"invoice-footer-executive"},l.a.createElement("b",null,"Gesch\xe4ftsf\xfchrung")," ",p.executive),l.a.createElement("div",{className:"invoice-footer-bank-account"},l.a.createElement("b",null,"Bankverbindung")," ",p.bank," \u2022 IBAN ",p.iban," \u2022 BIC"," ",p.bic),l.a.createElement("div",{className:"invoice-footer-tax"},l.a.createElement("b",null,"Steuernummer")," ",p.taxNumber," | ",l.a.createElement("b",null,"USt-IdNr.")," ",p.ustNr))))}),V=function(e){var a=e.invoice,t=e.setInvoice,n=e.setInvoices;return l.a.createElement("div",{className:"invoice-page"},l.a.createElement("div",{className:"invoice-form-wrapper"},l.a.createElement(T,{invoice:a,setInvoice:t,setInvoices:n})),a.customer&&l.a.createElement("div",{className:"invoice-page-wrapper"},l.a.createElement(K,{id:"singlePage",label:"Rechnung Drucken",fileName:a.invoiceNumber}),l.a.createElement(U,{id:"singlePage",invoice:a})))},J=function(){var e=v(),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),i=Object(c.a)(o,2),m=i[0],d=i[1],s=E(),b=Object(c.a)(s,1)[0];return m?l.a.createElement(V,{invoice:m,setInvoice:d,setInvoices:r}):l.a.createElement("div",{className:"invoice-tab-container"},l.a.createElement(j.a,{onClick:function(){return d(Object(y.a)({},u,{id:t.length,finalText:b.finalText}))},primary:!0},"Neue Rechnung"),l.a.createElement(f.a,{celled:!0},l.a.createElement(f.a.Header,null,l.a.createElement(f.a.Row,null,l.a.createElement(f.a.HeaderCell,null,"Rechnungsnummer"),l.a.createElement(f.a.HeaderCell,null,"Rechnungsdatum"),l.a.createElement(f.a.HeaderCell,null,"Kunde"),l.a.createElement(f.a.HeaderCell,null,"Artikel"),l.a.createElement(f.a.HeaderCell,null,"Gesamtpreis"),l.a.createElement(f.a.HeaderCell,null,"Zahlungseingang"),l.a.createElement(f.a.HeaderCell,null))),l.a.createElement(f.a.Body,null,t.map((function(e){return l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Cell,null,e.invoiceNumber),l.a.createElement(f.a.Cell,null,H(e.invoiceDate)),l.a.createElement(f.a.Cell,null,e.customer.name),l.a.createElement(f.a.Cell,null,e.articles.map((function(e){return l.a.createElement("p",null,e.name)}))),l.a.createElement(f.a.Cell,null,e.totalPrice.toFixed(2),"\u20ac"),l.a.createElement(f.a.Cell,null,e.paymentDate?H(e.paymentDate):"Ausstehend"),l.a.createElement(f.a.Cell,null,l.a.createElement(j.a,{icon:!0,onClick:function(){return d(e)}},l.a.createElement(D.a,{name:"eye"}))))})))))},W=t(191),Y=t(190),Q={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},X={borderColor:"#2196f3"},$={borderColor:"#00e676"},_={borderColor:"#ff1744"};function ee(e){var a=e.onDrop,t=Object(Y.b)({accept:"image/*"}),r=t.isDragActive,c=t.isDragAccept,o=t.isDragReject,i=Object(n.useMemo)((function(){return Object(y.a)({},Q,{},r?X:{},{},c?$:{},{},o?_:{})}),[r,o,c]);return l.a.createElement(Y.a,{onDrop:a},(function(e){var a=e.getRootProps,t=e.getInputProps;return l.a.createElement("div",{className:"container"},l.a.createElement("div",a({style:i,onDrop:function(e){return e.stopPropagation()}}),l.a.createElement("input",t()),l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))}))}function ae(){var e=o("company",d),a=Object(c.a)(e,2),t=a[0],n=a[1],r=function(e,a){var l=a.name,r=a.value;n(Object(y.a)({},t,Object(F.a)({},l,r)))},i=function(e,a){var l=a.name,r=a.value;n(Object(y.a)({},t,{firstAddress:Object(y.a)({},t.firstAddress,Object(F.a)({},l,r))}))},m=function(e,a){var l=a.name,r=a.value;n(Object(y.a)({},t,{secondAddress:Object(y.a)({},t.secondAddress,Object(F.a)({},l,r))}))};return l.a.createElement("div",null,l.a.createElement(A.a,null,l.a.createElement(A.a.Field,{label:"Firmename",control:k.a,name:"name",onChange:r,value:t.name}),l.a.createElement(W.a,null,l.a.createElement("h4",null,"Logo"),""!==t.logo?l.a.createElement("div",null,l.a.createElement("img",{src:t.logo,alt:"company logo"}),l.a.createElement(j.a,{negative:!0,onClick:function(){return n(Object(y.a)({},t,{logo:""}))}},"L\xf6schen")):l.a.createElement(ee,{onDrop:function(e){var a=e[0],l=new FileReader;l.onload=function(e){n(Object(y.a)({},t,{logo:e.target.result}))},l.readAsDataURL(a)}})),l.a.createElement(A.a.Field,{label:"Firmenf\xfchrung",control:k.a,name:"executive",onChange:r,value:t.executive}),l.a.createElement(W.a,null,l.a.createElement("h4",null,"Erste Adresse"),l.a.createElement(A.a.Group,{width:"equal"},l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Name",name:"name",onChange:i,value:t.firstAddress.name}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Anschrift",name:"address",onChange:i,value:t.firstAddress.address})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"PLZ",name:"postCode",onChange:i,value:t.firstAddress.postcode}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Stadt",name:"city",onChange:i,value:t.firstAddress.city})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Telefon",name:"phone",onChange:i,value:t.firstAddress.phone}))),l.a.createElement(W.a,null,l.a.createElement("h4",null,"Zweite Adresse"),l.a.createElement(A.a.Group,{width:"equal"},l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Name",name:"name",onChange:m,value:t.secondAddress.name}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Anschrift",name:"address",onChange:m,value:t.secondAddress.address})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"PLZ",name:"postCode",onChange:m,value:t.secondAddress.postcode}),l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Stadt",name:"city",onChange:m,value:t.secondAddress.city})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Telefon",name:"phone",onChange:m,value:t.secondAddress.phone}))),l.a.createElement(A.a.Field,{label:"1. Email",control:k.a,name:"firstEmail",onChange:r,value:t.firstEmail}),l.a.createElement(A.a.Field,{label:"2. Email",control:k.a,name:"secondEmail",onChange:r,value:t.secondEmail}),l.a.createElement(A.a.Field,{label:"Steuernummer",control:k.a,name:"taxNumber",onChange:r,value:t.taxNumber}),l.a.createElement(A.a.Field,{label:"Finanzamt",control:k.a,name:"taxOffice",onChange:r,value:t.taxOffice}),l.a.createElement(A.a.Field,{label:"Ust-Nr.",control:k.a,name:"ustNr",onChange:r,value:t.ustNr}),l.a.createElement(W.a,null,l.a.createElement("h4",null,"Bankinformationen"),l.a.createElement(A.a.Field,{label:"Bank",control:k.a,name:"bank",onChange:r,value:t.bank}),l.a.createElement(A.a.Field,{label:"IBAN",control:k.a,name:"iban",onChange:r,value:t.iban}),l.a.createElement(A.a.Field,{label:"BIC",control:k.a,name:"bic",onChange:r,value:t.bic})),l.a.createElement(A.a.Field,null,l.a.createElement(A.a.TextArea,{label:"Standard Freitext",value:t.finalText,onChange:r,name:"finalText"})),l.a.createElement(A.a.Field,{label:"Farbe",control:k.a,placeholder:"z.B. #ffffff oder rgb(120,0,0)",name:"companyColor",onChange:r,value:t.color})))}function te(e){var a=e.author,t=e.setAuthor,r=Object(n.useState)(a.percent),o=Object(c.a)(r,2),i=o[0],m=o[1],u=function(e,n){var l=n.name,r=n.value;if("percent"===l){if(r=parseFloat(r),isNaN(r))return void m("");r=r.toFixed(2),m(r)}t(Object(y.a)({},a,Object(F.a)({},l,r)))};return l.a.createElement(A.a,null,l.a.createElement(A.a.Group,{width:"equal"},l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Name",placeholder:"Name",name:"name",onChange:u,value:a.name}),l.a.createElement(A.a.Field,{id:"form-input-control-name",control:k.a,label:"Kontakt",placeholder:"Tel, Email, ...",onChange:u,name:"contact",value:a.contact})),l.a.createElement(A.a.Group,null,l.a.createElement(A.a.Field,{id:"form-input-control-last-name",control:k.a,label:"Prozent",placeholder:"Prozent",name:"percent",icon:"percent",onChange:function(e,a){var t=a.value;return m(t)},onBlur:function(e){u(0,{name:e.target.name,value:e.target.value})},value:i})))}function ne(){var e=p(),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),i=Object(c.a)(o,2),m=i[0],u=i[1];return l.a.createElement("div",null,l.a.createElement(j.a,{onClick:function(){return u({authorSceleton:s,id:t.length})},primary:!0},"Neuer Autor"),m&&l.a.createElement(O.a,{onClose:function(){return u()},open:!0},l.a.createElement(O.a.Header,null,"Author"),l.a.createElement(O.a.Content,null,l.a.createElement(te,{author:m,setAuthor:u})),l.a.createElement(O.a.Actions,null,l.a.createElement(j.a,{onClick:function(){return u()},content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),l.a.createElement(j.a,{onClick:function(e){var a=Object(N.a)(t);a[m.id]=m,r(a),u()},content:"Speichern",primary:!0,icon:"check",labelPosition:"right"}))),l.a.createElement(f.a,{celled:!0},l.a.createElement(f.a.Header,null,l.a.createElement(f.a.Row,null,l.a.createElement(f.a.HeaderCell,null,"Id"),l.a.createElement(f.a.HeaderCell,null,"Name"),l.a.createElement(f.a.HeaderCell,null,"Kontakt"),l.a.createElement(f.a.HeaderCell,null,"Prozent"),l.a.createElement(f.a.HeaderCell,null))),l.a.createElement(f.a.Body,null,t.map((function(e,a){return e&&l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Cell,null,e.id),l.a.createElement(f.a.Cell,null,e.name),l.a.createElement(f.a.Cell,null,e.contact),l.a.createElement(f.a.Cell,null,e.percent," %"),l.a.createElement(f.a.Cell,null,l.a.createElement(j.a,{onClick:function(){return u(e)},icon:"eye"}),l.a.createElement(j.a,{onClick:function(){return function(e){var a=Object(N.a)(t);a[e]=void 0,r(a)}(a)},icon:"delete"})))})))))}function le(){var e=b(),a=Object(c.a)(e,2),t=a[0];(0,a[1])(t.map((function(e){return Object(y.a)({},e,{authors:[]})})))}var re=function(){return function(e,a){var t=o("version","1"),n=Object(c.a)(t,2),l=n[0],r=n[1];parseInt(l)<a&&e(),r(a)}(le,2)};function ce(){re()}Object(r.render)(l.a.createElement((function(){return ce(),l.a.createElement("div",{className:"invoice-app-container"},l.a.createElement(g.a,null,l.a.createElement(C.a,{panes:[{menuItem:"Rechnungen",render:function(){return l.a.createElement("div",{className:""},l.a.createElement(J,null))}},{menuItem:"Kunden",render:function(){return l.a.createElement("div",{className:""},l.a.createElement(h,null))}},{menuItem:"Artikel",render:function(){return l.a.createElement("div",{className:""},l.a.createElement(S,null))}},{menuItem:"Autoren",render:function(){return l.a.createElement("div",{className:""},l.a.createElement(ne,null))}},{menuItem:"Firma",render:function(){return l.a.createElement("div",{className:""},l.a.createElement(ae,null))}}]})))}),null),document.getElementById("root"))}},[[304,1,2]]]);
//# sourceMappingURL=main.46a20398.chunk.js.map