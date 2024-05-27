import { Inspirations, InspirationLink } from "../components";

export function Plant() {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "Cardiff_Wales", pageName: "Plant" },
    { year: 2019, teamName: "Sorbonne_U_Paris", pageName: "Plant" },
    { year: 2019, teamName: "TU_Kaiserslautern", pageName: "Plant" },
    { year: 2019, teamName: "Humboldt_Berlin", pageName: "Plant" },
    { year: 2020, teamName: "Sorbonne_U_Paris", pageName: "Plant" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Plant Synthetic Biology</h4>
            <p>
              This award is designed to celebrate exemplary work done in plant
              synthetic biology. Did you build a project in a plant chassis? Did
              you submit plant parts to the Registry? This award could also be
              given to a team working with algae or another photosynthetic
              eukaryotic chassis. Show us what you made and remember to adhere
              to iGEM safety guidelines!
            </p>
            <p>
              To compete for the Best Plant Synthetic Biology prize, select the
              prize on the{" "}
              <a href="https://competition.igem.org/deliverables/judging-form">
                judging form
              </a>{" "}
              and describe your work on this page.
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
