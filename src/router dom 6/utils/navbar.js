import { Home } from "../components/home";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";
import { Login } from "../components/login";
import { Single } from "../components/single";

export const navbar = [
  {
    id: 1,
    element: <Home />,
    title: "Home",
    path: "/home",
    isPrivate: false,
		hidden: false,
  },
  {
    id: 2,
    element: <About />,
    title: "About",
    path: "/about",
    isPrivate: false,
		hidden: false,
  },
  {
    id: 3,
    element: <Gallery />,
    title: "Gallery",
    path: "/gallery",
    isPrivate: true,
		hidden: false,
  },
  {
    id: 4,
    element: <Contact />,
    title: "Contact",
    path: "/contact",
    isPrivate: false,
		hidden: false,
  },
  {
    id: 5,
    element: <Login />,
    title: "Login",
    path: "/login",
    isPrivate: false,
		hidden: false,
  },
  {
    id: 6,
    element: <Single />,
    title: "Single",
    path: ":id",
    isPrivate: false,
		hidden: true,
  },
];
