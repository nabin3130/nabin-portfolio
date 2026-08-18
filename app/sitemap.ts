import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

const baseUrl = "https://nabin.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/work", "/beyond"];
  const projectRoutes = projects.map(({ slug }) => `/projects/${slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
