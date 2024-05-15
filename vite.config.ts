import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

function stringToSlug(string: string): string {
  let slug = String(string).toLowerCase();
  slug = slug.replace(/[^a-z0-9-]/g, "-");
  slug = slug.replace(/-+/g, "-");
  // remove dashes at start and end
  const start = slug.search(/[^-]/); // find index of first non-dash
  const end = slug.search(/-+$/); // find index of first end dash
  return slug.substring(start, end === -1 ? undefined : end);
}

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
    plugins: [react()],
  });
};
