import { SITE_URL } from "@/lib/site";

const paths = [
  "/",
  "/product",
  "/team",
  "/pricing",
  "/about",
  "/contact",
  "/jobs",
  "/login",
  "/signup",
  "/privacy",
  "/terms",
];

export default function sitemap() {
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
