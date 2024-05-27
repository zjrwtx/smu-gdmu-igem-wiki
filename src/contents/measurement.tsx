import { Inspirations, InspirationLink } from "../components";

export function Measurement() {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "UC_Davis", pageName: "Measurement" },
    { year: 2019, teamName: "Newcastle", pageName: "Measurement" },
    { year: 2019, teamName: "Evry_Paris-Saclay", pageName: "Measurement" },
    { year: 2019, teamName: "GENAS_China", pageName: "Measurement" },
    { year: 2020, teamName: "Calgary", pageName: "Measurement" },
    { year: 2020, teamName: "CSMU_Taiwan", pageName: "Measurement" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Measurement</h4>
            <p>
              Measurements are critical to scientific communication and
              advancement. Well-reported measurements are the only way to show
              whether hardware is functioning correctly, whether data are
              reliable, and whether a result is actually important. There is a
              high value in identifying appropriate targets for measurement,
              collecting precise measurements, and reporting results clearly and
              with appropriate units. Document your careful measurement efforts
              and you could win this award!
            </p>
            <p>
              To compete for the Best Measurement prize, select the prize on the{" "}
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

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Overview</h2>
          <hr />
          <p>
            {" "}
            If you've done excellent work in measurement, you should consider
            nominating your team for this special prize. Synthetic Biology needs
            great measurement approaches for characterizing parts, and efficient
            new methods for characterizing many parts at once. If you've done
            something exciting in the area of Measurement, describe it here!
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
