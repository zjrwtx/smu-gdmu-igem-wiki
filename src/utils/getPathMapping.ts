import pages from "../pages.ts";

const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      lead: string | undefined;
    };
  }>((map, item) => {
    if ("path" in item && item.path) {
      map[item.path] = { name: item.name, title: item.title, lead: item.lead };
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            lead: page.lead,
          };
        }
      });
    }
    return map;
  }, {});
};

export default getPathMapping;
