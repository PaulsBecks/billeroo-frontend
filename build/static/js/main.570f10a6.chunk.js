(this["webpackJsonpreact-4798tj"]=this["webpackJsonpreact-4798tj"]||[]).push([[0],{303:function(e,a,t){e.exports=t(560)},375:function(e,a,t){},377:function(e,a,t){},552:function(e,a,t){},560:function(e,a,t){"use strict";t.r(a);var n=t(18),l=t(0),r=t.n(l),c=t(41);function o(e,a){var t=Object(l.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),r=Object(n.a)(t,2),c=r[0],o=r[1];return[c,function(a){try{var t=a instanceof Function?a(c):a;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}var i=t(579),m=function(){var e=o("customers",[]),a=Object(n.a)(e,2),t=a[0];a[1];return r.a.createElement(i.a,{celled:!0},r.a.createElement(i.a.Header,null,r.a.createElement(i.a.Row,null,r.a.createElement(i.a.HeaderCell,null,"Name"),r.a.createElement(i.a.HeaderCell,null,"Adresse"),r.a.createElement(i.a.HeaderCell,null,"PLZ"),r.a.createElement(i.a.HeaderCell,null,"Stadt"),r.a.createElement(i.a.HeaderCell,null,"Rabatt"),r.a.createElement(i.a.HeaderCell,null,"MwST"))),r.a.createElement(i.a.Body,null,t.map((function(e){return r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Cell,null,e.name),r.a.createElement(i.a.Cell,null,e.address),r.a.createElement(i.a.Cell,null,e.postCode),r.a.createElement(i.a.Cell,null,e.city),r.a.createElement(i.a.Cell,null,e.discount),r.a.createElement(i.a.Cell,null,e.ust))}))))},u=(t(375),t(575)),s=t(578),d=function(){var e=o("articles",[]),a=Object(n.a)(e,2),t=a[0];a[1];return r.a.createElement(i.a,{celled:!0},r.a.createElement(i.a.Header,null,r.a.createElement(i.a.Row,null,r.a.createElement(i.a.HeaderCell,null,"Name"),r.a.createElement(i.a.HeaderCell,null,"ISBN"),r.a.createElement(i.a.HeaderCell,null,"Menge"),r.a.createElement(i.a.HeaderCell,null,"Preis"))),r.a.createElement(i.a.Body,null,t.map((function(e){return r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Cell,null,e.name),r.a.createElement(i.a.Cell,null,e.isbn),r.a.createElement(i.a.Cell,null,e.amount),r.a.createElement(i.a.Cell,null,e.price))}))))},E=t(23),v=t(565),b=t(62),p=t(94),f=t(21),g=t(580),h=t(581),C=t(93),N=t(573),y=t(577),j=t(576),O=t(574),F=t(138),A=t.n(F),w={name:"",empty:!0,price:"",isbn:"",amount:1},k={name:"",addition:"",address:"",postCode:"",city:"",discount:0,ust:7},x={invoiceDate:(new Date).toString(),shippingDate:(new Date).toString(),orderDate:(new Date).toString(),invoiceNumber:"",porto:"5.00",finalText:"",articles:[]},S={name:"",executive:"",firstAddress:{name:"",address:"",postCode:"",city:"",phone:""},secondAddress:{name:"",address:"",postCode:"",city:"",phone:""},firstEmail:"",secondEmail:"",taxNumber:"",taxOffice:"",bank:"",iban:"",bic:"",logo:""};t(376),t(377);function D(e){var a=new Date(e),t=a.getDate(),n=a.getMonth()+1;return"".concat(t<10?"0"+t:t,".").concat(n<10?"0"+n:n,".").concat(a.getFullYear())}function H(e){var a=e.article,t=e.setArticle,c=Object(l.useState)(a.price),o=Object(n.a)(c,2),i=o[0],m=o[1],u=function(e,n){var l=n.name,r=n.value;if(console.log(l,r),"price"===l){if(r=parseFloat(r),console.log(r),isNaN(r))return void m("");r=r.toFixed(2),m(r)}t(Object(E.a)({},a,Object(f.a)({},l,r)))};return r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{width:"equal"},r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Name",placeholder:"Name",name:"name",onChange:u,value:a.name}),r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Lagerbestand",placeholder:"Menge",type:"number",onChange:u,name:"amount",value:a.amount})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"ISBN",placeholder:"ISBN",name:"isbn",onChange:u,value:a.isbn}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Preis",placeholder:"Preis",name:"price",icon:"euro sign",onChange:function(e,a){var t=a.value;return m(t)},onBlur:function(e){console.log("blur"),u(0,{name:e.target.name,value:e.target.value})},value:i})))}var P=function(e){var a,t=e.invoice,c=e.setInvoice,i=o("customers",[]),m=Object(n.a)(i,2),s=m[0],d=m[1],F=Object(l.useState)(k),x=Object(n.a)(F,2),S=x[0],D=x[1],P=Object(l.useState)(void 0),R=Object(n.a)(P,2),I=R[0],M=R[1],B=Object(l.useState)(""),G=Object(n.a)(B,2),L=G[0],T=G[1],Z=o("articles",[]),z=Object(n.a)(Z,2),K=z[0],q=z[1],J=Object(l.useState)(w),U=Object(n.a)(J,2),V=U[0],W=U[1],Y=Object(l.useState)(1),Q=Object(n.a)(Y,2),X=Q[0],$=Q[1],_=Object(l.useState)(""),ee=Object(n.a)(_,2),ae=ee[0],te=ee[1],ne=Object(l.useState)(void 0),le=Object(n.a)(ne,2),re=le[0],ce=le[1],oe=o("invoices",[]),ie=Object(n.a)(oe,2),me=ie[0],ue=ie[1],se=Object(l.useState)(t.porto),de=Object(n.a)(se,2),Ee=de[0],ve=de[1],be=function(e,a){var n=a.name,l=a.value;if(console.log(e,n,l),"porto"===n){if(l=parseFloat(l),isNaN(l))return void ve("");l=l.toFixed(2),ve(l)}c(Object(E.a)({},t,Object(f.a)({},n,l)))},pe=function(){return ce(!re)},fe=Object(l.useMemo)((function(){return s.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}))}),[s,L]),ge=Object(l.useMemo)((function(){return K.filter((function(e){return e.name.toLowerCase().includes(ae.toLowerCase())}))}),[K,ae]),he=function(e,a){var t=a.name,n=a.value;("ust"!==t&&"discount"!==t||(n=parseFloat(n),!isNaN(n)))&&D(Object(E.a)({},S,Object(f.a)({},t,n)))},Ce=function(e){c(Object(E.a)({},t,{articles:[].concat(Object(p.a)(t.articles),[Object(E.a)({},e,{amount:X})])})),$(1)},Ne=function(){M(!I)},ye=function(e,a){c(Object(E.a)({},t,Object(f.a)({},a,e.toString())))};return r.a.createElement("div",{className:"invoice-form"},r.a.createElement(u.a,null,r.a.createElement(g.a,{fluid:!0},r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,"Rechnungsdaten")),r.a.createElement(g.a.Content,null,r.a.createElement(h.a,null,r.a.createElement(h.a.Title,{index:0},r.a.createElement(b.a,{name:"dropdown"}),"Kunde"),r.a.createElement(h.a.Content,{active:!0},t.customer?r.a.createElement("div",{class:"invoice-form-label-container"},r.a.createElement(C.a,null,t.customer.name,r.a.createElement(b.a,{name:"delete",onClick:function(){c(Object(E.a)({},t,{customer:void 0}))}}))):r.a.createElement("div",null,r.a.createElement(N.a,{placeholder:"Suche...",onChange:function(e,a){var t=a.value;return T(t)},value:L}),""==L?r.a.createElement(v.a,{onClick:Ne},"Neuer Kunde"):r.a.createElement("div",{className:"invoice-form-label-container"},fe.map((function(e){return r.a.createElement(C.a,{onClick:function(){return c(Object(E.a)({},t,{customer:e}))}},e.name)})),0==fe.length&&r.a.createElement("p",null,"No Customers found.")),r.a.createElement(y.a,{open:I,onClose:Ne},r.a.createElement(y.a.Header,null,"Neuer Kunde"),r.a.createElement(y.a.Content,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{width:"equal"},r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Name",placeholder:"Name",name:"name",onChange:he,value:S.name}),r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Zusatz",placeholder:"Zusatz",name:"addition",onChange:he,value:S.addition})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Anschrift",placeholder:"Musterschstra\xdfe 3",name:"address",onChange:he,value:S.address}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"PLZ",placeholder:"PLZ",name:"postCode",onChange:he,value:S.postCode})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Stadt",placeholder:"Stadt",name:"city",onChange:he,value:S.city})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"MwST",placeholder:"7",name:"ust",icon:"percent",onChange:he,value:S.ust}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Rabat",placeholder:"0",icon:"percent",name:"discount",onChange:he,value:S.discount})))),r.a.createElement(y.a.Actions,null,r.a.createElement(v.a,{onClick:Ne,content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),r.a.createElement(v.a,{onClick:function(){d([].concat(Object(p.a)(s),[S])),c(Object(E.a)({},t,{customer:S})),Ne()},content:"Anlegen",primary:!0,icon:"check",labelPosition:"right"}))))),r.a.createElement(h.a.Title,{index:1},r.a.createElement(b.a,{name:"dropdown"}),"Artikel"),r.a.createElement(h.a.Content,{active:!0},r.a.createElement("div",{className:"invoice-form-label-container"},t.articles.map((function(e,a){return r.a.createElement(C.a,null,e.name,r.a.createElement(C.a.Detail,null,e.articleAmount),r.a.createElement(b.a,{name:"delete",onClick:function(){return e=a,void c(Object(E.a)({},t,{articles:t.articles.filter((function(a,t){return t!==e}))}));var e}}))}))),r.a.createElement("div",null,r.a.createElement(N.a,{name:"amount",type:"number",label:"Menge",value:X,onChange:function(e,a){var t=a.value;return $(t)}}),r.a.createElement(N.a,{name:"article",placeholder:"Suche...",value:ae,onChange:function(e,a){var t=a.value;return te(t)}}),""==ae?r.a.createElement(v.a,{onClick:pe},"Neuer Artikel"):r.a.createElement("div",{className:"invoice-form-label-container"},ge.map((function(e){return r.a.createElement(C.a,{onClick:function(){return Ce(e)}},e.name)})))),r.a.createElement(y.a,{open:re,onClose:pe},r.a.createElement(y.a.Header,null,"Neuer Artikel"),r.a.createElement(y.a.Content,null,r.a.createElement(H,{article:V,setArticle:W})),r.a.createElement(y.a.Actions,null,r.a.createElement(v.a,{onClick:pe,content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),r.a.createElement(v.a,{onClick:function(){q([].concat(Object(p.a)(K),[V])),Ce(V),pe()},content:"Anlegen",primary:!0,icon:"check",labelPosition:"right"})))),r.a.createElement(h.a.Title,null,r.a.createElement(b.a,{name:"dropdown"}),"Allgemein"),r.a.createElement(h.a.Content,{active:!0},r.a.createElement(j.a,null,r.a.createElement(j.a.Field,{label:"Rechnungsdatum",name:"invoiceDate",selected:new Date(t.invoiceDate),onChange:function(e){return ye(e,"invoiceDate")},control:A.a,dateFormat:"dd/MM/yyyy"}),r.a.createElement(j.a.Field,{label:"Bestelldatum",name:"orderDate",selected:new Date(t.orderDate),onChange:function(e){return ye(e,"orderDate")},control:A.a,dateFormat:"dd/MM/yyyy"}),r.a.createElement(j.a.Field,{label:"Versanddatum",name:"shippingDate",selected:new Date(t.shippingDate),onChange:function(e){return ye(e,"shippingDate")},control:A.a,dateFormat:"dd/MM/yyyy"}),r.a.createElement(j.a.Field,(a={label:"Porto",name:"shippingDate",value:Ee},Object(f.a)(a,"name","porto"),Object(f.a)(a,"onChange",(function(e,a){var t=a.value;return ve(t)})),Object(f.a)(a,"control",N.a),Object(f.a)(a,"onBlur",(function(e){return be(e,{name:e.target.name,value:e.target.value})})),Object(f.a)(a,"icon","euro"),a)),r.a.createElement(j.a.Field,{label:"Rechnungsnummer",name:"invoiceNumber",value:t.invoiceNumber,onChange:be,control:N.a}),r.a.createElement(O.a,{value:t.finalText,onChange:be,name:"finalText"})))))),r.a.createElement(v.a,{onClick:function(){return c()},content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),t.customer&&r.a.createElement(v.a,{onClick:function(){t.totalPrice=function(e){return e.articles.map((function(a){var t=a.price*a.amount;return t-t*(e.customer.discount/100)})).reduce((function(e,a){return a+e}),0)}(t);var e=Object(p.a)(me);e[t.id]=t,ue(e),c()},content:"Speichern",primary:!0,icon:"check",labelPosition:"right"})))},R=t(288),I=t.n(R),M=t(188),B=t.n(M),G=function(e){var a=e.id,t=e.label,n=e.fileName;return r.a.createElement("div",{className:"tc mb4 mt2"},r.a.createElement("div",{id:"myMm",style:{height:"1mm"}}),r.a.createElement("div",{className:"pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1",onClick:function(){var e,t,l,r,c=document.getElementById(a),o=(e=c.offsetHeight,Math.floor(e/document.getElementById("myMm").offsetHeight)),i=(t=297,document.getElementById("myMm").offsetHeight*t),m=o<=297?1:Math.floor(o/297)+1;console.log({input:c,inputHeightMm:o,a4HeightMm:297,a4HeightPx:i,numPages:m,range:(l=0,r=m,Array(r-l).join(0).split(0).map((function(e,a){return a+l}))),comp:o<=297,inputHeightPx:c.offsetHeight}),I()(c,{scale:1}).then((function(e){var a,t=e.toDataURL("image/png",1);(a=o>297?new B.a("p","mm",[o+16,210]):new B.a).addImage(t,"PNG",0,0),a.save("".concat(n,".pdf"))}))}},t))},L=function(e){var a=e.children,t=e.singleMode,n=e.id;return r.a.createElement("div",{id:n,className:"bg-white shadow-1 center pa4",style:{width:"210mm",height:t?"297mm":""}},a)},T=(t(552),function(e){var a=e.id,t=e.invoice,l=t.orderDate,c=t.invoiceDate,i=t.shippingDate,m=t.invoiceNumber,u=t.porto,s=t.finalText,d=t.customer,E=d.name,v=d.ust,b=d.discount,p=d.address,f=d.city,g=d.postCode,h=d.addition,C=t.articles,N=void 0===C?[]:C,y=o("company",S),j=Object(n.a)(y,1)[0],O=N.map((function(e){var a=e.price*e.amount;return(a-a*(b/100))/(1+v/100)})).reduce((function(e,a){return parseFloat(a)+e}),0);return r.a.createElement(L,{singleMode:!0,id:a},r.a.createElement("div",{className:"invoice-page-pdf"},r.a.createElement("div",{className:"invoice-page-top"},r.a.createElement("img",{className:"invoice-header-company-logo",src:j.logo}),r.a.createElement("div",{className:"invoice-header"},r.a.createElement("div",{className:"invoice-header-customer-address"},r.a.createElement("div",{className:"invoice-header-customer-company"},j.name," \u2022 ",j.firstAddress.address," \u2022"," ",j.firstAddress.postCode," ",j.firstAddress.city),r.a.createElement("div",{className:"invoice-header-customer-info"},r.a.createElement("p",null,r.a.createElement("b",null,E)),r.a.createElement("p",{className:"invoice-header-customer-info-name"},r.a.createElement("b",null,h)),r.a.createElement("p",null,r.a.createElement("b",null,p)),r.a.createElement("p",null,r.a.createElement("b",null,g," ",f)))),r.a.createElement("div",{className:"invoice-header-company-info"},r.a.createElement("p",null,j.name),r.a.createElement("p",null,j.executive),r.a.createElement("br",null),r.a.createElement("p",null,j.firstAddress.name),r.a.createElement("p",null,j.firstAddress.address),r.a.createElement("p",null,j.firstAddress.postCode," ",j.firstAddress.city),r.a.createElement("p",null,"Telefon ",j.firstAddress.phone),r.a.createElement("br",null),r.a.createElement("p",null,j.firstEmail),r.a.createElement("p",null,j.secondEmail),r.a.createElement("br",null),r.a.createElement("p",null,"Steuernummer ",j.taxNumber),r.a.createElement("p",null,j.taxOffice)))),r.a.createElement("div",{className:"invoice-body"},r.a.createElement("div",{className:"invoice-body-top"},r.a.createElement("div",{className:"invoice-subject"},r.a.createElement("h4",null,"Rechnung"),r.a.createElement("p",null,"Wir erlauben uns in Rechnung zu stellen:"),r.a.createElement("div",{className:"invoice-body-subject-key-values"},r.a.createElement("div",{className:"invoice-body-subject-keys"},r.a.createElement("div",{className:"invoice-body-order-date"},r.a.createElement("p",null,r.a.createElement("b",null,"Bestelldatum:"))),r.a.createElement("div",{className:"invoice-body-send-date"},r.a.createElement("p",null,r.a.createElement("b",null,"Versand am:"))),r.a.createElement("div",{className:"invoice-body-send-to"},r.a.createElement("p",null,r.a.createElement("b",null,"Versand an:")))),r.a.createElement("div",{className:"invoice-body-subject-values"},r.a.createElement("div",{className:"invoice-body-order-date"},r.a.createElement("p",null,r.a.createElement("b",null,D(l)))),r.a.createElement("div",{className:"invoice-body-send-date"},r.a.createElement("p",null,r.a.createElement("b",null,D(i)))),r.a.createElement("div",{className:"invoice-body-send-to"},r.a.createElement("p",null,r.a.createElement("b",null,E," \u2022 ",h)),r.a.createElement("p",null,r.a.createElement("b",null,p," \u2022 ",g," ",f)))))),r.a.createElement("div",null,r.a.createElement("div",{className:"invoice-body-invoice-date"},r.a.createElement("p",null,"Rechnungsdatum: ",r.a.createElement("b",null,D(c)))),r.a.createElement("div",{className:"invoice-body-invoice-nr"},r.a.createElement("p",null,"Rechnungsnummer: ",r.a.createElement("b",null,m))),r.a.createElement("div",{className:"invoice-body-invoice-hint"},r.a.createElement("p",null,"(Bitte bei Zahlungen angeben)")))),r.a.createElement("div",{className:"invoice-body-article-wrapper"},N.map((function(e){var a=e.amount,t=e.price,n=e.name,l=e.isbn,c=parseInt(a)>1,o=t*a,i=o-o*(b/100),m=i/(1+v/100);return r.a.createElement("div",{className:"invoice-body-article"},r.a.createElement("div",{className:"invoice-body-article-left"},r.a.createElement("div",{className:"invoice-body-article-description"},r.a.createElement("div",null,r.a.createElement("b",null,a," Exemplar",c&&"e")),r.a.createElement("div",{className:"invoice-body-article-title"},r.a.createElement("b",null,"\u201e",n,"\u201c")),r.a.createElement("div",{className:"invoice-body-article-title"},l)),r.a.createElement("div",{className:"invoice-body-artivle-price-calc"},"Preis ".concat(c?"je":""," ").concat(t," \u20ac").concat(c?" = ".concat(o.toFixed(2),"\u20ac"):"").concat(b>0?", abz\xfcglich ".concat(b," % Rabatt = ").concat(i.toFixed(2)," \u20ac"):""," (beinhaltet ").concat(v," % MwST = ").concat((i-m).toFixed(2),")"))),r.a.createElement("div",{className:"invoice-body-article-price"},r.a.createElement("b",null,m.toFixed(2),"\u20ac")))}))),r.a.createElement("div",{className:"invoice-body-price-calculation"},r.a.createElement("div",null,r.a.createElement("p",null,"Netto"),r.a.createElement("p",null,r.a.createElement("b",null,O.toFixed(2),"\u20ac"))),r.a.createElement("div",null,r.a.createElement("p",null,"Versandpauschale"),r.a.createElement("p",null,r.a.createElement("b",null,u,"\u20ac"))),r.a.createElement("div",null,r.a.createElement("p",null,"+".concat(v,"% Mehrwertsteuer")),r.a.createElement("p",null,r.a.createElement("b",null,((O+parseFloat(u))*parseFloat(v)/100).toFixed(2),"\u20ac")))),r.a.createElement("div",{className:"invoice-body-price"},r.a.createElement("p",null,"Rechnungsbetrag"),r.a.createElement("p",null,r.a.createElement("b",null,((O+parseFloat(u))*(1+parseFloat(v)/100)).toFixed(2),"\u20ac"))),r.a.createElement("div",null,r.a.createElement("p",{className:"invoice-body-final-text"},s))),r.a.createElement("div",{className:"invoice-footer"},r.a.createElement("div",{className:"invoice-footer-executive"},r.a.createElement("b",null,"Gesch\xe4ftsf\xfchrung")," ",j.executive),r.a.createElement("div",{className:"invoice-footer-bank-account"},r.a.createElement("b",null,"Bankverbindung")," ",j.bank," \u2022 IBAN ",j.iban," \u2022 BIC"," ",j.bic),r.a.createElement("div",{className:"invoice-footer-tax"},r.a.createElement("b",null,"Steuernummer")," ",j.taxNumber," | ",r.a.createElement("b",null,"USt-IdNr.")," ",j.ustNr))))}),Z=function(e){var a=e.invoice,t=e.setInvoice;return r.a.createElement("div",{className:"invoice-page"},r.a.createElement("div",{className:"invoice-form-wrapper"},r.a.createElement(P,{invoice:a,setInvoice:t})),a.customer&&r.a.createElement("div",{className:"invoice-page-wrapper"},r.a.createElement(G,{id:"singlePage",label:"Rechnung Drucken",fileName:a.invoiceNumber}),r.a.createElement(T,{id:"singlePage",invoice:a})))},z=function(){var e=o("invoices",[]),a=Object(n.a)(e,2),t=a[0],c=(a[1],Object(l.useState)()),m=Object(n.a)(c,2),u=m[0],s=m[1];return u?r.a.createElement(Z,{invoice:u,setInvoice:s}):r.a.createElement("div",{className:"invoice-tab-container"},r.a.createElement(v.a,{onClick:function(){return s(Object(E.a)({},x,{id:t.length}))},primary:!0},"Neue Rechnung"),r.a.createElement(i.a,{celled:!0},r.a.createElement(i.a.Header,null,r.a.createElement(i.a.Row,null,r.a.createElement(i.a.HeaderCell,null,"Rechnungsnummer"),r.a.createElement(i.a.HeaderCell,null,"Rechnungsdatum"),r.a.createElement(i.a.HeaderCell,null,"Kunde"),r.a.createElement(i.a.HeaderCell,null,"Artikel"),r.a.createElement(i.a.HeaderCell,null,"Gesamtpreis"),r.a.createElement(i.a.HeaderCell,null))),r.a.createElement(i.a.Body,null,t.map((function(e){return r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Cell,null,e.invoiceNumber),r.a.createElement(i.a.Cell,null,D(e.invoiceDate)),r.a.createElement(i.a.Cell,null,e.customer.name),r.a.createElement(i.a.Cell,null,e.articles.map((function(e){return r.a.createElement("p",null,e.name)}))),r.a.createElement(i.a.Cell,null,e.totalPrice.toFixed(2),"\u20ac"),r.a.createElement(i.a.Cell,null,r.a.createElement(v.a,{icon:!0,onClick:function(){return s(e)}},r.a.createElement(b.a,{name:"eye"}))))})))))},K=t(190),q=t(189),J={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},U={borderColor:"#2196f3"},V={borderColor:"#00e676"},W={borderColor:"#ff1744"};function Y(e){var a=e.onDrop,t=Object(q.b)({accept:"image/*"}),n=(t.getRootProps,t.getInputProps,t.isDragActive),c=t.isDragAccept,o=t.isDragReject,i=Object(l.useMemo)((function(){return Object(E.a)({},J,{},n?U:{},{},c?V:{},{},o?W:{})}),[n,o]);return r.a.createElement(q.a,{onDrop:a},(function(e){var a=e.getRootProps,t=e.getInputProps;return r.a.createElement("div",{className:"container"},r.a.createElement("div",a({style:i,onDrop:function(e){return e.stopPropagation()}}),r.a.createElement("input",t()),r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))}))}function Q(){var e=o("company",S),a=Object(n.a)(e,2),t=a[0],l=a[1],c=function(e,a){var n=a.name,r=a.value;l(Object(E.a)({},t,Object(f.a)({},n,r)))},i=function(e,a){var n=a.name,r=a.value;l(Object(E.a)({},t,{firstAddress:Object(E.a)({},t.firstAddress,Object(f.a)({},n,r))}))},m=function(e,a){var n=a.name,r=a.value;l(Object(E.a)({},t,{secondAddress:Object(E.a)({},t.secondAddress,Object(f.a)({},n,r))}))};return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(j.a.Field,{label:"Firmename",control:N.a,name:"name",onChange:c,value:t.name}),r.a.createElement(j.a.Field,{label:"Firmenf\xfchrung",control:N.a,name:"executive",onChange:c,value:t.executive}),r.a.createElement(K.a,null,r.a.createElement("h4",null,"Erste Adresse"),r.a.createElement(j.a.Group,{width:"equal"},r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Name",name:"name",onChange:i,value:t.firstAddress.name}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Anschrift",name:"address",onChange:i,value:t.firstAddress.address})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"PLZ",name:"postCode",onChange:i,value:t.firstAddress.postcode}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Stadt",name:"city",onChange:i,value:t.firstAddress.city})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Telefon",name:"phone",onChange:i,value:t.firstAddress.phone}))),r.a.createElement(K.a,null,r.a.createElement("h4",null,"Zweite Adresse"),r.a.createElement(j.a.Group,{width:"equal"},r.a.createElement(j.a.Field,{id:"form-input-control-name",control:N.a,label:"Name",name:"name",onChange:m,value:t.secondAddress.name}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Anschrift",name:"address",onChange:m,value:t.secondAddress.address})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"PLZ",name:"postCode",onChange:m,value:t.secondAddress.postcode}),r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Stadt",name:"city",onChange:m,value:t.secondAddress.city})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Field,{id:"form-input-control-last-name",control:N.a,label:"Telefon",name:"phone",onChange:m,value:t.secondAddress.phone}))),r.a.createElement(j.a.Field,{label:"1. Email",control:N.a,name:"firstEmail",onChange:c,value:t.firstEmail}),r.a.createElement(j.a.Field,{label:"2. Email",control:N.a,name:"secondEmail",onChange:c,value:t.secondEmail}),r.a.createElement(j.a.Field,{label:"Steuernummer",control:N.a,name:"taxNumber",onChange:c,value:t.taxNumber}),r.a.createElement(j.a.Field,{label:"Finanzamt",control:N.a,name:"taxOffice",onChange:c,value:t.taxOffice}),r.a.createElement(j.a.Field,{label:"Ust-Nr.",control:N.a,name:"ustNr",onChange:c,value:t.ustNr}),r.a.createElement(K.a,null,r.a.createElement("h4",null,"Bankinformationen"),r.a.createElement(j.a.Field,{label:"Bank",control:N.a,name:"bank",onChange:c,value:t.bank}),r.a.createElement(j.a.Field,{label:"IBAN",control:N.a,name:"iban",onChange:c,value:t.iban}),r.a.createElement(j.a.Field,{label:"BIC",control:N.a,name:"bic",onChange:c,value:t.bic}))),r.a.createElement(K.a,null,r.a.createElement("h4",null,"Logo"),""!=t.logo?r.a.createElement("div",null,r.a.createElement("img",{src:t.logo}),r.a.createElement(v.a,{negative:!0,onClick:function(){return l(Object(E.a)({},t,{logo:""}))}},"L\xf6schen")):r.a.createElement(Y,{onDrop:function(e){var a=e[0],n=new FileReader;n.onload=function(e){l(Object(E.a)({},t,{logo:e.target.result}))},n.readAsDataURL(a)}})))}var X={articles:[]};Object(c.render)(r.a.createElement((function(){var e=Object(l.useState)(X),a=Object(n.a)(e,2),t=a[0];a[1];return console.log(t),r.a.createElement("div",{className:"invoice-app-container"},r.a.createElement(u.a,null,r.a.createElement(s.a,{panes:[{menuItem:"Rechnungen",render:function(){return r.a.createElement("div",{className:""},r.a.createElement(z,null))}},{menuItem:"Kunden",render:function(){return r.a.createElement("div",{className:""},r.a.createElement(m,null))}},{menuItem:"Artikel",render:function(){return r.a.createElement("div",{className:""},r.a.createElement(d,null))}},{menuItem:"Firma",render:function(){return r.a.createElement("div",{className:""},r.a.createElement(Q,null))}}]})))}),null),document.getElementById("root"))}},[[303,1,2]]]);
//# sourceMappingURL=main.570f10a6.chunk.js.map