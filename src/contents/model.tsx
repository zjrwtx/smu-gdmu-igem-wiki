import { Inspirations, InspirationLink } from "../components";

export function Model() {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "GreatBay_China", pageName: "Model" },
    { year: 2018, teamName: "Leiden", pageName: "Model" },
    { year: 2019, teamName: "IISER_Kolkata", pageName: "Model" },
    { year: 2019, teamName: "Exeter", pageName: "Model" },
    { year: 2019, teamName: "Mingdao", pageName: "Model" },
    { year: 2020, teamName: "Harvard", pageName: "Model" },
    { year: 2020, teamName: "Leiden", pageName: "Model" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Best Model</h4>
            <p>
              Models and computer simulations can help us understand the
              function and operation of BioBrick Parts and Devices. Simulation
              and modeling are critical engineering skills that can contribute
              to project design or provide a better understanding of the modeled
              process. These processes are even more useful and/or informative
              when real world data are included in the model. This award is for
              teams who build a model of their system and use it to inform
              system design or simulate expected behavior before, or in
              conjunction with, experiments in the wetlab.
            </p>
            <p>
              To compete for the Best Model prize, select the prize on the{" "}
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
            Mathematical models and computer simulations provide a great way to
            describe the function and operation of Parts and Devices. Synthetic
            Biology is an engineering discipline, and part of engineering is
            simulation and modeling to determine the behavior of your design
            before you build it. Designing and simulating can be iterated many
            times in a computer before moving to the lab.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
