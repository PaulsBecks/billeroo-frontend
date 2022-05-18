import parsePrice from "./parsePrice";

export default (invoice) => {
  // we are choosing the simple way by making the most expensive vat the one that will be used for porto
  const portoVat = Math.max(
    ...invoice.articles.map((article) => parsePrice(article.vat))
  );
  const articlesPrice = invoice.articles
    .map(({ price, toBePayed }) => {
      const totalPrice = parsePrice(price) * toBePayed;
      return totalPrice - totalPrice * (invoice.customer.discount / 100);
    })
    .reduce((total, x) => x + total, 0);

  const servicesPrice = invoice.services.reduce((total, s) => {
    return total + parsePrice(s.price) * (1 - invoice.customer.discount / 100);
  }, 0);

  if (invoice.shippingDisabled) {
    return articlesPrice + servicesPrice;
  }

  const price =
    articlesPrice +
    servicesPrice +
    parsePrice(invoice.porto) * (1 + portoVat / 100);

  console.log(price);
  return price;
};
