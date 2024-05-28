import { Inspirations, InspirationLink } from "../components";

export function Results() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "Newcastle", pageName: "Results" },
    { year: 2019, teamName: "Munich", pageName: "Results" },
    { year: 2019, teamName: "Tec-Chihuahua", pageName: "Results" },
    { year: 2020, teamName: "Aalto-Helsinki", pageName: "Results" },
    { year: 2020, teamName: "GreatBay_SCIE", pageName: "Results" },
    { year: 2020, teamName: "Queens_Canada", pageName: "Results" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-5">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>Clearly and objectively describe the results of your work.</li>
            <li>Future plans for the project.</li>
            <li>Considerations for replicating the experiments.</li>
          </ul>
        </div>
        <div className="col-lg-7">
          <h2>Describe what your results mean</h2>
          <hr />
          <ul>
            <li>
              Interpretation of the results obtained during your project. Don't
              just show a plot/figure/graph/other, tell us what you think the
              data means. This is an important part of your project that the
              judges will look for.
            </li>
            <li>
              Show data, but remember{" "}
              <b>
                all measurement and characterization data must also be on the
                Part's Main Page on the{" "}
                <a href="https://parts.igem.org/Main_Page">Registry</a>.
              </b>{" "}
              Otherwise these data will not be in consideration for any medals
              or part awards!
            </li>
            <li>
              Consider including an analysis summary section to discuss what
              your results mean. Judges like to read what you think your data
              means, beyond all the data you have acquired during your project.
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Project Achievements</h2>
          <hr />
          <p>
            You can also include a list of bullet points (and links) of the
            successes and failures you have had over your summer. It is a quick
            reference page for the judges to see what you achieved during your
            summer.
          </p>
          <ul>
            <li>
              A list of linked bullet points of the successful results during
              your project
            </li>
            <li>
              A list of linked bullet points of the unsuccessful results during
              your project and what you learned from them. This is about being
              scientifically honest. If you worked on an area for a long time
              with no success, tell us so we know where you put your effort.
              Furthermore, you can still impress the judges by thoughtfully
              discussing what went wrong and how you might change things.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
