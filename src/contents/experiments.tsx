import Inspirations, { InspirationLink } from "../components/Inspirations";

const ExperimentsPage = () => {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "Nantes", pageName: "Experiments" },
    { year: 2019, teamName: "TU_Eindhoven", pageName: "Experiments" },
    { year: 2019, teamName: "Mingdao", pageName: "Demonstrate" },
    { year: 2020, teamName: "Amsterdam", pageName: "Experiments" },
    { year: 2020, teamName: "NCTU_Formosa", pageName: "Experiments" },
    { year: 2020, teamName: "USAFA", pageName: "Experiments" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>What should this page contain?</h2>
          <hr />
          <p>
            Describe the research, experiments, and protocols you used in your
            iGEM project. These should be detailed enough for another team to
            repeat your experiments.
          </p>
          <p>
            If you made Parts this year, please remember to put all information,
            characterization, and measurement data on the Part's Main Page on
            the <a href="http://parts.igem.org/Main_Page">Registry</a>.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
};

export default ExperimentsPage;
