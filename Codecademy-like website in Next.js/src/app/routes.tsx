import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CourseDetail } from "./pages/CourseDetail";
import { CategoryPage } from "./pages/CategoryPage";
import { CatalogPage } from "./pages/CatalogPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { CommunityPage } from "./pages/CommunityPage";
import { PlansPage } from "./pages/PlansPage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/course/:courseId",
    Component: CourseDetail,
  },
  {
    path: "/category/:categorySlug",
    Component: CategoryPage,
  },
  {
    path: "/catalog",
    Component: CatalogPage,
  },
  {
    path: "/resources",
    Component: ResourcesPage,
  },
  {
    path: "/community",
    Component: CommunityPage,
  },
  {
    path: "/plans",
    Component: PlansPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/careers",
    Component: CareersPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
]);
