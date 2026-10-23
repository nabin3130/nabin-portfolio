import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

const baseUrl = "https://nabin.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work/ecosystem",
    "/work/marketing",
    "/work/events",
    "/work/media",
    "/beyond",
  ];
  const projectRoutes = projects.map(({ slug }) => `/projects/${slug}`);

  const routes = [...staticRoutes, ...projectRoutes];

  return routes.flatMap((route) => {
    const en = `${baseUrl}${route}`;
    const ko = `${baseUrl}${route === "" ? "/ko" : `/ko${route}`}`;
    return [
      {
        url: en,
        alternates: { languages: { en, ko } },
      },
      {
        url: ko,
        alternates: { languages: { en, ko } },
      },
    ];
  });
}
