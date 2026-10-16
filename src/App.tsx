import { useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { RouterProvider, Routes, usePathname } from "./router/Router";
import { HomePage } from "./pages/HomePage";
import { DiscoverIndexPage, DiscoverThemePage } from "./pages/DiscoverThemePage";
import { DestinationPage } from "./pages/DestinationPage";
import { PackagesPage } from "./pages/PackagesPage";
import { AboutPage } from "./pages/AboutPage";
import { MarketingGalleryPage } from "./pages/MarketingGalleryPage";
import { OffersPage } from "./pages/OffersPage";
import { CreateQueryPage } from "./pages/CreateQueryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { getTheme } from "./data/themes";
import { getDestination } from "./data/destinations";

function DocumentTitle() {
  const pathname = usePathname();

  useEffect(() => {
    let title = "Enchanting Madhya Pradesh | Exclusive B2B Travel Portal";
    if (pathname.startsWith("/discover/")) {
      const theme = getTheme(pathname.split("/")[2] ?? "");
      if (theme) title = theme.seoTitle;
    } else if (pathname === "/discover") title = "Discover Madhya Pradesh | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/packages")) title = "Our Offerings | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/about")) title = "About Us | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/marketing-support")) title = "Marketing Support | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/offers")) title = "Limited Time Offers | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/create-query")) title = "Create Query | Enchanting Madhya Pradesh";
    else if (pathname.startsWith("/destinations/")) {
      const destination = getDestination(pathname.split("/")[2] ?? "");
      title = destination
        ? `${destination.name} | Enchanting Madhya Pradesh`
        : "Destination | Enchanting Madhya Pradesh";
    }
    document.title = title;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <DocumentTitle />
        <Routes
          fallback={<NotFoundPage />}
          routes={[
            { path: "/", element: <HomePage /> },
            { path: "/discover", element: <DiscoverIndexPage /> },
            { path: "/discover/:slug", element: <DiscoverThemePage /> },
            { path: "/destinations/:slug", element: <DestinationPage /> },
            { path: "/packages", element: <PackagesPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/about/:slug", element: <AboutPage /> },
            { path: "/marketing-support", element: <MarketingGalleryPage /> },
            { path: "/offers", element: <OffersPage /> },
            { path: "/create-query", element: <CreateQueryPage /> },
          ]}
        />
      </Layout>
    </RouterProvider>
  );
}
