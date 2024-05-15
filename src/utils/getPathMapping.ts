import pages from "../pages.ts";

const getPathMapping = () => {
  const map: {
    [key: string]: { name: string; title: string; lead: string };
  } = {};
  pages.forEach((item) => {
    if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        map[page.path] = {
          name: page.name,
          title: page.title,
          lead: page.lead || "",
        };
      });
    } else if ("path" in item && item.path) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        lead: item.lead || "",
      };
    }
  });
  return map;
};

export default getPathMapping;
