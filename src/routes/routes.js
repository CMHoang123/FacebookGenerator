
import HomePage from "../page/home";
import NewPage from "../page/news";
import AboutPage from "../page/about";
import EventPage from "../page/event";
import ContactPage from "../page/contact";
import GalleryPage from "../page/gallery";

export const Routes = [
  {
    component: HomePage,
    exact: "true",
    path: "/"
  },
  {
    component: HomePage,
    path: "/Home"
  },
  {
    component: NewPage,
    path: "/News"
  },
  {
    component: AboutPage,
    path: "/About"
  },
  {
    component: EventPage,
    path: "/Event"
  },
  {
    component: ContactPage,
    path: "/Contact"
  },
  {
    component: GalleryPage,
    path: "/Gallery"
  }
];
