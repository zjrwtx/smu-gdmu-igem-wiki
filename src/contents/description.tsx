import Inspirations, { InspirationLink } from "../components/Inspirations";

const Description = () => {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
    { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
    { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
    { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
    { year: 2020, teamName: "St_Andrews", pageName: "Description" },
    { year: 2020, teamName: "MIT", pageName: "Description" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #3</h4>
            <p>Describe how and why you chose your iGEM project.</p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>A clear and concise description of your project.</li>
            <li>
              A detailed explanation of why your team chose to work on this
              particular project.
            </li>
            <li>References and sources to document your research.</li>
            <li>
              Use illustrations and other visual resources to explain your
              project.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Some advice</h2>
          <hr />
          <p>
            We encourage you to put up a lot of information and content on your
            wiki, but we also encourage you to include summaries as much as
            possible. If you think of the sections in your project description
            as the sections in a publication, you should try to be concise,
            accurate, and unambiguous in your achievements. Your Project
            Description should include more information than your project
            abstract.
          </p>
        </div>
        <div className="col-lg-4">
          <h2>References</h2>
          <hr />
          <p>
            iGEM teams are encouraged to record references you use during the
            course of your research. They should be posted somewhere on your
            wiki so that judges and other visitors can see how you thought about
            your project and what works inspired you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
