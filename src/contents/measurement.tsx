import Inspirations, { InspirationLink } from "../components/Inspirations";

const Measurement = () => {
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
              There are a lot of exciting Parts in the Registry, but many Parts
              have still not been characterized. Designing great measurement
              approaches for characterizing new parts, or developing and
              implementing an efficient new method for characterizing thousands
              of parts are good examples.
            </p>
            <p>
              To compete for the Best Measurement prize, please describe your
              work on this page and also fill out the description on the{" "}
              <a href="https://competition.igem.org/deliverables/judging-form">
                judging form
              </a>
              .
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
};

export default Measurement;
