import { COMPLEX_EQUIPMENT_CATEGORIES_URL, CONTACTS_URL, PROJECTS_URL } from "../../../../routes/routes-constants";

interface INavigationItem {
  text: string;
  href: string;
}

export const navigationData: INavigationItem[] = [
  {
    text: "Комплексное оснащение",
    href: COMPLEX_EQUIPMENT_CATEGORIES_URL,
  },
  {
    text: "Проекты",
    href: PROJECTS_URL,
  },
  {
    text: "Новости",
    href: "/news",
  },
  {
    text: "Контакты",
    href: CONTACTS_URL,
  },
  // {
  //   text: "О нас",
  //   href: ABOUT_URL,
  // },
];
