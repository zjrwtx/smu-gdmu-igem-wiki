import { Inspirations, InspirationLink } from "../components";

export function Software() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "Sydney_Australia", pageName: "Software" },
    { year: 2019, teamName: "SMMU-China", pageName: "Software" },
    { year: 2019, teamName: "Grenoble-Alpes", pageName: "Software" },
    { year: 2020, teamName: "DTU-Denmark", pageName: "Software" },
    { year: 2020, teamName: "GunnVistaPingry_US", pageName: "Software" },
    { year: 2020, teamName: "Rochester", pageName: "Software" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Software Tool</h4>
            <p>
              Regardless what's the topic, iGEM projects often create or adapt
              computational tools to move the bigger project forward. Because
              they are born out of a direct practical need, these software tools
              (or new computational methods) can even prove surprisingly useful
              for others. Without necessarily being big or complex, they can
              make the crucial difference to a project's success. This award
              tries to find and honor such "nuggets" of computational work. To
              be eligible, your software has to be documented and made available
              under an OSI-approved open source license. Teams nominating
              themselves for this prize must host the source code of their
              software on the dedicated repository on{" "}
              <a href="https://gitlab.igem.org/2024/software-tools/">
                iGEM's GitLab
              </a>
              .
            </p>
            <p>
              To compete for the Best Software Tool prize, select the prize on
              the{" "}
              <a href="https://competition.igem.org/deliverables/judging-form">
                judging form
              </a>
              , host your software on{" "}
              <a href="https://gitlab.igem.org/2024/software-tools/">
                iGEM's GitLab
              </a>
              , and describe your work on this page.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/awards">
                2024 Awards Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
      <Inspirations inspirationLinkList={links} />
    </>
  );
}
