import React from "react";
import {
  ABOUT_URL,
  COMPLEX_EQUIPMENTS_URL,
  COMPLEX_EQUIPMENT_CATEGORIES_URL,
  COMPLEX_EQUIPMENT_URL,
  HOME_URL,
  PRODUCTS_CATEGORIES_URL,
  PRODUCTS_URL,
  PRODUCT_URL,
  PROJECTS_URL,
  CONTACTS_URL,
  NEWS_LIST_URL,
  NEWS_URL,
  PROJECT_URL,
} from "./routes-constants";
import AboutUs from "../components/AboutUs/AboutUs";
import ProductsCategories from "../pages/Category/ProducsCategories/ProductsCategoriesPage";
import Products from "../pages/Products/Products";
import Projects from "../pages/Category/ProjectsCategories/Projects";
import ComplexEquipmentCategory from "../pages/Category/ComplexEquipment/ComplexEquipment";
import Product from "../pages/Product/Product";
import Home from "../pages/Home/Home";
import ComplexEquipments from "../pages/ComplexEquipments/ComplexEquipments";
import ComplexEquipmentPage from "../pages/ComplexEquipment/ComplexEquipment";
import Contacts from "../pages/Contacts/Contacts";
import NewsPage from "../pages/News/News";
import NewsListPage from "../pages/News/NewsList";
import Project from "../pages/Project/Project";

// const Home = React.lazy(async () => await import("../pages/Home/Home"));
export interface IRouterItem {
  name: string;
  link: string;
  component: React.ComponentType<unknown>;
}

export interface IRouter {
  items: IRouterItem[];
}
export const routerData: IRouter = {
  items: [
    {
      link: HOME_URL,
      name: "Home",
      component: Home,
    },
    {
      link: PRODUCTS_CATEGORIES_URL,
      name: "Категории продукции",
      component: ProductsCategories,
    },
    {
      link: PRODUCTS_URL,
      name: "Список продукции по категории",
      component: Products,
    },
    {
      link: PRODUCT_URL,
      name: "Страница продукта",
      component: Product,
    },
    {
      link: PROJECTS_URL,
      name: "Проекты",
      component: Projects,
    },
    {
      link: PROJECT_URL,
      name: "Проект",
      component: Project,
    },
    {
      link: ABOUT_URL,
      name: "О нас",
      component: AboutUs,
    },
    {
      link: COMPLEX_EQUIPMENT_CATEGORIES_URL,
      name: "Категории комплексного оснащения",
      component: ComplexEquipmentCategory,
    },
    {
      link: COMPLEX_EQUIPMENTS_URL,
      name: "Список комплексного оснащения по категории",
      component: ComplexEquipments,
    },
    {
      link: COMPLEX_EQUIPMENT_URL,
      name: "Единица комплексного оснащения",
      component: ComplexEquipmentPage,
    },
    {
      link: CONTACTS_URL,
      name: "Контакты",
      component: Contacts,
    },
    {
      link: NEWS_LIST_URL,
      name: "Новости",
      component: NewsListPage,
    },
    {
      link: NEWS_URL,
      name: "Новость",
      component: NewsPage,
    },
  ],
};
