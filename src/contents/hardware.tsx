import { Inspirations, InspirationLink } from "../components";

export function Hardware() {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "Valencia_UPV", pageName: "Hardware" },
    { year: 2018, teamName: "Unesp_Brazil", pageName: "Hardware" },
    { year: 2019, teamName: "BIT", pageName: "Hardware" },
    { year: 2019, teamName: "Bielefeld-CeBiTec", pageName: "Hardware" },
    { year: 2019, teamName: "Nanjing-China", pageName: "Hardware" },
    { year: 2020, teamName: "Vilnius-Lithuania", pageName: "Hardware" },
    { year: 2020, teamName: "ZJUT_China_B", pageName: "Hardware" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Hardware</h4>
            <p>
              This is a prize for the team that has developed a piece of
              hardware for synthetic biology. Hardware in iGEM should make
              synthetic biology based on standard parts easier, faster, better
              or more accessible to our community. Did your team make a sensor
              to help teams characterize parts? Did you make a robot that can
              help teams perform experiments or do cloning more easily? Tell us
              what your team did for this award!
            </p>
            <p>
              To compete for the Best Hardware prize, select the prize on the{" "}
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
            In addition to encouraging teams to work with DNA parts and build
            biological devices in the lab, iGEM also encourages other types of
            technical solutions for synthetic biology. This can include physical
            devices (hardware) related to robotic assembly, microfluidics,
            low-cost measurement devices, to name a few examples. There are many
            exciting opportunities for hardware innovation in synthetic biology.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
