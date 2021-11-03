import { MainLayout } from "../layouts";
import {
  HomePage,
  EducationPage,
  ExperiencePage,
  ProjectsPage,
  ContactPage,
  SplashPage,
} from "../pages";

const ROUTES_DATA = [
  {
    Layout: null,
    data: [
      {
        path: "/",
        Component: SplashPage,
        isExact: true,
        sortOrder: 0,
      },
      {
        path: "/splash",
        Component: SplashPage,
        isExact: true,
        sortOrder: 5,
      },
    ],
  },
  {
    Layout: MainLayout,
    data: [
      {
        path: "/home",
        Component: HomePage,
        isExact: true,
        sortOrder: 1,
      },
      {
        path: "/experience",
        Component: ExperiencePage,
        isExact: true,
        sortOrder: 2,
      },
      {
        path: "/education",
        Component: EducationPage,
        isExact: true,
        sortOrder: 3,
      },
      {
        path: "/contact",
        Component: ContactPage,
        isExact: true,
        sortOrder: 4,
      },
      {
        path: "/projects",
        Component: ProjectsPage,
        isExact: true,
        sortOrder: 6,
      },
    ],
  },
];

export default ROUTES_DATA;
