import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug, useDocumentTitle } from "../../utils";
import {
  AttributionsPage,
  ContributionPage,
  DescriptionPage,
  EducationPage,
  EngineeringPage,
  EntrepreneurshipPage,
  ExperimentsPage,
  HardwarePage,
  HomePage,
  HumanPracticesPage,
  InclusivityPage,
  MeasurementPage,
  ModelPage,
  NotebookPage,
  PlantPage,
  ResultsPage,
  SafetyPage,
  SoftwarePage,
  SustainablePage,
  TeamPage,
} from "../../contents";

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
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <Routes>
        {Object.keys(pathMapping).map((path) => {
          const title = pathMapping[path].title;
          const lead = pathMapping[path].lead;
          return (
            <Route
              key={path}
              path={path}
              element={<Header title={title} lead={lead} />}
            />
          );
        })}
        <Route
          path="*"
          element={
            <Header
              title="Not Found"
              lead="The page you are looking for does not exist."
            />
          }
        />
      </Routes>

      {/* Page Content */}
      <div className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          {/* Team */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/attributions" element={<AttributionsPage />} />
          {/*  Project  */}
          <Route path="/contribution" element={<ContributionPage />} />
          <Route path="/description" element={<DescriptionPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="/results" element={<ResultsPage />} />
          {/*  Safety  */}
          <Route path="/safety" element={<SafetyPage />} />
          {/*  Human Practices  */}
          <Route path="/human-practices" element={<HumanPracticesPage />} />
          {/*  Awards  */}
          <Route path="/education" element={<EducationPage />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/inclusivity" element={<InclusivityPage />} />
          <Route path="/measurement" element={<MeasurementPage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/plant" element={<PlantPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/sustainable" element={<SustainablePage />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </>
  );
};

export default App;
