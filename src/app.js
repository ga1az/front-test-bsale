import "../style.css";
import Category from "./component/Category";
import Header from "./component/Header";
import ListItem from "./component/ListItem";
import Loader from "./component/Loader";
import getData from "./data/getData";
const getUrl = new URLSearchParams(window.location.search);

const app = async () => {
  document.getElementById("header").innerHTML = Header();
  const categories = await getData.getByCategory(getUrl.get("category"));
  document.getElementById("list-category").innerHTML = Category(
    await getData.getAllCategories()
  );
  document.getElementById("list-item").innerHTML = Loader();
  const products = await getData.getProducts(getUrl.get("fname"));
  document.getElementById("list-item").innerHTML = ListItem(
    getUrl.get("fname") ? products : categories
  );
};

app();
