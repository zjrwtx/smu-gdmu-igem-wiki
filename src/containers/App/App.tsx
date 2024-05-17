import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug, useDocumentTitle } from "../../utils";

const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";
  useDocumentTitle(title);

  return (
    <>
      <>
        {/* Navigation */}
        <Navbar />

        {/* Header and PageContent */}
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, lead, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <Header title={title || ""} lead={lead || ""} />
                    <div className="container">
                      <Component />
                    </div>
                  </>
                }
              />
            ),
          )}
          <Route
            path="*"
            element={
              <>
                <Header
                  title="Not Found"
                  lead="The page you are looking for does not exist."
                />
                <NotFound />
              </>
            }
          />
        </Routes>

        {/* Footer */}
        {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
        <Footer />
      </>
    </>
  );
};

export default App;
