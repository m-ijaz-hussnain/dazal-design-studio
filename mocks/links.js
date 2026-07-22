import { Bag, Email, Home, Profile, Store, Writing } from "@/components/Icons";

const links = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <Bag />,
  },
  {
    title: "About",
    url: "/about",
    icon: <Profile />,
  },
  {
    title: "Writings",
    url: "/writings",
    icon: <Writing />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <Email />,
  },
];

export { links };
