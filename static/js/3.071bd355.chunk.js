(this["webpackJsonpreact-4798tj"]=this["webpackJsonpreact-4798tj"]||[]).push([[3],{831:function(e,a,t){"use strict";var n=t(11),l=t(0),c=t.n(l),r=t(825),i=t(265),o=t(6),u=t.n(o),m=(t(39),t(4)),d=t.n(m),s=(t(1),t(26)),E=t(135),b=t(136),C=t(8),j=t(99),p=t(413),O=t(137);function h(e){var a=e.children,t=e.className,n=e.content,l=d()("sub header",t),r=Object(E.a)(h,e),i=Object(b.a)(h,e);return c.a.createElement(i,u()({},r,{className:l}),C.a.isNil(a)?n:a)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=Object(O.e)(h,(function(e){return{content:e}}));var f=h;function k(e){var a=e.children,t=e.className,n=e.content,l=d()("content",t),r=Object(E.a)(k,e),i=Object(b.a)(k,e);return c.a.createElement(i,u()({},r,{className:l}),C.a.isNil(a)?n:a)}k.handledProps=["as","children","className","content"],k.propTypes={};var y=k;function v(e){var a=e.attached,t=e.block,n=e.children,l=e.className,r=e.color,i=e.content,o=e.disabled,m=e.dividing,O=e.floated,h=e.icon,k=e.image,N=e.inverted,g=e.size,H=e.sub,_=e.subheader,S=e.textAlign,A=d()("ui",r,g,Object(s.a)(t,"block"),Object(s.a)(o,"disabled"),Object(s.a)(m,"dividing"),Object(s.d)(O,"floated"),Object(s.a)(!0===h,"icon"),Object(s.a)(!0===k,"image"),Object(s.a)(N,"inverted"),Object(s.a)(H,"sub"),Object(s.b)(a,"attached"),Object(s.c)(S),"header",l),w=Object(E.a)(v,e),R=Object(b.a)(v,e);if(!C.a.isNil(n))return c.a.createElement(R,u()({},w,{className:A}),n);var P=j.a.create(h,{autoGenerateKey:!1}),z=p.a.create(k,{autoGenerateKey:!1}),B=f.create(_,{autoGenerateKey:!1});return P||z?c.a.createElement(R,u()({},w,{className:A}),P||z,(i||B)&&c.a.createElement(y,null,i,B)):c.a.createElement(R,u()({},w,{className:A}),i,B)}v.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],v.propTypes={},v.Content=y,v.Subheader=f;var N=v;function g(e){var a=e.onDelete,t=e.type,o=Object(l.useState)(!1),u=Object(n.a)(o,2),m=u[0],d=u[1];return c.a.createElement(r.a,Object.assign({},e,{basic:!0,size:"small",trigger:c.a.createElement(i.a,{negative:!0,icon:"trash",onClick:function(){return d(!0)}}),open:m,onClose:function(){return d(!1)}}),c.a.createElement(N,{icon:"trash",content:"".concat(t," l\xf6schen")}),c.a.createElement(r.a.Content,null,c.a.createElement("p",null,"Bist du dir sicher, dass du dieses Element l\xf6schen willst?")),c.a.createElement(r.a.Actions,null,c.a.createElement(i.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return d(!1)}},c.a.createElement(j.a,{name:"remove"})," Nein"),c.a.createElement(i.a,{color:"green",inverted:!0,onClick:function(){a(),d(!1)}},c.a.createElement(j.a,{name:"checkmark"})," Ja")))}t.d(a,"a",(function(){return g}))},835:function(e,a,t){},843:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(11),c=t(0),r=t.n(c),i=t(27),o=t(94),u=t(265),m=t(825),d=t(827),s=t(379),E=t(831),b=(t(835),t(24)),C=t(272),j=function(){var e=Object(i.b)(),a=Object(l.a)(e,5),t=a[0],j=a[2],p=a[3],O=a[4],h=Object(c.useState)(),f=Object(l.a)(h,2),k=f[0],y=f[1],v=Object(c.useState)(),N=Object(l.a)(v,2),g=N[0],H=N[1],_=Object(i.i)(),S=Object(l.a)(_,1)[0].articleStats,A=Object(C.a)(),w=Object(l.a)(A,3)[2],R=Object(i.c)(),P=Object(l.a)(R,6)[5];return Object(i.f)(),r.a.createElement("div",{className:"articles-tab-container"},r.a.createElement(u.a,{onClick:function(){return y(Object(n.a)({},o.a,{id:O}))},primary:!0},"Neuer Artikel"),k&&r.a.createElement(m.a,{onClose:function(){return y()},open:!0},r.a.createElement(m.a.Header,null,"Artikel"),r.a.createElement(m.a.Content,null,r.a.createElement(s.a,{article:k,setArticle:y,totalSend:S[k._id]?S[k._id].totalSend:0})),r.a.createElement(m.a.Actions,null,r.a.createElement(u.a,{onClick:function(){return y()},content:"Abbrechen",negative:!0,icon:"close",labelPosition:"right"}),r.a.createElement(u.a,{onClick:function(){p(k),y()},content:"Speichern",positive:!0,icon:"check",labelPosition:"right"}))),g&&r.a.createElement(m.a,{onClose:function(){return H()},open:!0},r.a.createElement(m.a.Header,null,"Rechnungen"),r.a.createElement(m.a.Content,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.HeaderCell,null,"Rechnungsnummer"),r.a.createElement(d.a.HeaderCell,null,"Kunde"),r.a.createElement(d.a.HeaderCell,null,"Verkaufte Exemplare"),r.a.createElement(d.a.HeaderCell,null,"Umsatz"),r.a.createElement(d.a.HeaderCell,null,"Zahlungsdatum"))),r.a.createElement(d.a.Body,null,S[g._id]&&S[g._id].invoices.map((function(e){return r.a.createElement(d.a.Row,{key:e._id},r.a.createElement(d.a.Cell,null,e.invoiceNumber),r.a.createElement(d.a.Cell,null,e.customerName),r.a.createElement(d.a.Cell,null,e.payed),r.a.createElement(d.a.Cell,null,Object(b.c)(e.payed*Object(b.d)(g.price))," ","\u20ac"),r.a.createElement(d.a.Cell,null,e.paymentDate?Object(b.b)(e.paymentDate):"Ausstehend"))})),S[g._id]&&r.a.createElement(d.a.Row,{active:!0,key:"final-row"},r.a.createElement(d.a.Cell,null),r.a.createElement(d.a.Cell,null),r.a.createElement(d.a.Cell,null,S[g._id].totalSold),r.a.createElement(d.a.Cell,null,Object(b.c)(S[g._id].totalSold*Object(b.d)(g.price))," ","\u20ac"),r.a.createElement(d.a.Cell,null)))))),r.a.createElement(d.a,{celled:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.HeaderCell,null,"Id"),r.a.createElement(d.a.HeaderCell,null,"Name"),r.a.createElement(d.a.HeaderCell,null,"ISBN"),r.a.createElement(d.a.HeaderCell,null,"Lagerbestand"),r.a.createElement(d.a.HeaderCell,null,"Preis"),r.a.createElement(d.a.HeaderCell,null,"Autoren"),r.a.createElement(d.a.HeaderCell,null))),r.a.createElement(d.a.Body,null,t.map((function(e,a){return e&&r.a.createElement(d.a.Row,{key:e._id},r.a.createElement(d.a.Cell,{key:"_id"},e._id),r.a.createElement(d.a.Cell,{key:"name"},e.name),r.a.createElement(d.a.Cell,{key:"isbn"},e.isbn),r.a.createElement(d.a.Cell,{key:"amount"},S[e._id]?parseInt(e.amount+"")-S[e._id].totalSend:e.amount),r.a.createElement(d.a.Cell,{key:"price"},e.price," \u20ac"),r.a.createElement(d.a.Cell,{key:"authors"},w(e._id).map((function(e){return r.a.createElement("p",{key:e._id},P(e.authorId).name)}))),r.a.createElement(d.a.Cell,{key:"buttons"},r.a.createElement(u.a,{onClick:function(){return y(e)},primary:!0,icon:"edit"}),r.a.createElement(u.a,{onClick:function(){return H(e)},icon:"list",secondary:!0}),r.a.createElement(E.a,{type:"Artikel",onDelete:function(){return j(e._id)}})))})))))};t.d(a,"default",(function(){return j}))}}]);
//# sourceMappingURL=3.071bd355.chunk.js.map