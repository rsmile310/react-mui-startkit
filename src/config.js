// @mui
import { enUS, frFR } from "@mui/material/locale";

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "horizontal",
  themeColorPresets: "blue",
  themeStretch: false,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
    icon: "/assets/icons/flags/ic_flag_fr.svg",
  },
];

export const defaultLang = allLangs[0]; // English

export const NewsConfig = [
  {
    img: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/1",
  },
  {
    img: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/2",
  },
  {
    img: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/3",
  },
  {
    img: "https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/4",
  },
  {
    img: "https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/5",
  },
  {
    img: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est pariatur nemo tempore repellat? Ullam sed officia iure
    architecto deserunt distinctio, pariatur`,
    url: "/news/6",
  },
];

