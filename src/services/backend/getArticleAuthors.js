import config from "../../config";
import getData from "./getData";
const { backendURL } = config();

const url = backendURL + "/data/articleAuthors";

export default async function getArticleAuthors() {
  return getData(url);
}
