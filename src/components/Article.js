import React, { useState } from "react";

import { Form, Input, Dropdown } from "semantic-ui-react";
import { useAuthors, useArticleAuthors } from "../hooks";
import { formatPrice } from "../services";
import ArticleAuthorForm from "../components/ArticleAuthorForm";

export default function Article({
  article,
  setArticle,
  totalSend = 0,
  authorsEnabled = true,
}) {
  const [articlePrice, setArticlePrice] = useState(article.price);
  const [articleVat, setArticleVat] = useState(article.vat || "19,00");
  const [
    ,
    ,
    authorsByArticle,
    addArticleAuthor,
    removeArticleAuthor,
    updateArticleAuthor,
  ] = useArticleAuthors();

  const [authors, , , , , getAuthorById] = useAuthors();

  const handleArticleChange = (e, { name, value }) => {
    if (name === "price") {
      value = parseFloat(value.replace(",", "."));
      if (isNaN(value)) {
        setArticlePrice("0,00");
        return;
      }
      value = formatPrice(value);
      setArticlePrice(value);
    }
    if (name === "vat") {
      value = parseFloat(value.replace(",", "."));
      if (isNaN(value)) {
        setArticlePrice("0,00");
        return;
      }
      value = formatPrice(value);
      setArticleVat(value);
    }
    setArticle({ ...article, [name]: value });
  };

  const authorOptions = authors.map((a) => ({
    key: a._id,
    value: a._id,
    text: a.name,
  }));

  const handleAuthorChange = (e, { value }) => {
    // add new articleAuthor if new got added
    if (value.length > authorsByArticle(article._id).length) {
      const newAuthors = value.filter(
        (v) => !authorsByArticle(article._id).find((a) => a.authorId === v)
      );
      for (var i in newAuthors) {
        addArticleAuthor({
          authorId: newAuthors[i],
          articleId: article._id,
          percent: "5,00",
        });
      }
    }
    // remove articleAuthors
    else if (value.length < authorsByArticle(article._id).length) {
      const removedAuthors = authorsByArticle(article._id).filter(
        (a) => !value.includes(a.authorId)
      );
      for (var ir in removedAuthors) {
        removeArticleAuthor(removedAuthors[ir]._id);
      }
    }
  };

  const handleAmountChange = (e, { value }) => {
    const amount = parseInt(value) + totalSend;
    setArticle({ ...article, amount });
  };

  return (
    <Form>
      <Form.Group width="equal">
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Name"
          placeholder="Name"
          name="name"
          onChange={handleArticleChange}
          value={article.name}
        />
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Lagerbestand"
          placeholder="Menge"
          type="number"
          onChange={handleAmountChange}
          name="amount"
          value={parseInt(article.amount) - totalSend}
        />
      </Form.Group>
      <Form.Group>
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="ISBN"
          placeholder="ISBN"
          name="isbn"
          onChange={handleArticleChange}
          value={article.isbn}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Preis"
          placeholder="Preis"
          name="price"
          icon="euro sign"
          onChange={(e, { value }) => setArticlePrice(value)}
          onBlur={(e) => {
            handleArticleChange(e, {
              name: e.target.name,
              value: e.target.value,
            });
          }}
          value={articlePrice}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Umsatzsteuer"
          placeholder="19,00"
          name="vat"
          icon="percent"
          onChange={(e, { value }) => setArticleVat(value)}
          onBlur={(e) => {
            handleArticleChange(e, e.target);
          }}
          value={articleVat}
        />
      </Form.Group>
      {authorsEnabled && (
        <div>
          <Form.Field
            label="Wählen Sie einen Autoren aus:"
            control={Dropdown}
            search
            selection
            multiple
            options={authorOptions}
            value={authorsByArticle(article._id).map((aa) => aa.authorId)}
            onChange={handleAuthorChange}
          />
          <div>
            {authorsByArticle(article._id).map((aa) => (
              <ArticleAuthorForm
                key={aa.authorId}
                updateArticleAuthor={updateArticleAuthor}
                articleAuthor={aa}
              />
            ))}
          </div>
        </div>
      )}
    </Form>
  );
}
