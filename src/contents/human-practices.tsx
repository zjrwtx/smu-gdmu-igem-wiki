import { Inspirations, InspirationLink } from "../components";

export function HumanPractices() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "Thessaly", pageName: "Human_Practices" },
    { year: 2019, teamName: "Linkoping_Sweden", pageName: "Human_Practices" },
    { year: 2019, teamName: "FDR-HB_Peru", pageName: "Human_Practices" },
    { year: 2020, teamName: "William_and_Mary", pageName: "Human_Practices" },
    { year: 2020, teamName: "Rochester", pageName: "Human_Practices" },
    { year: 2020, teamName: "Leiden", pageName: "Human_Practices" },
    { year: 2020, teamName: "Baltimore_BioCrew", pageName: "Human_Practices" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Silver Medal Criterion #2</h4>
            <p>
              Explain how you have determined your work is responsible and good
              for the world.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>

          <div className="bd-callout bd-callout-info">
            <h4>Best Integrated Human Practices</h4>
            <p>
              How does your project affect society and how does society
              influence the direction of your project? How might ethical
              considerations and stakeholder input guide your project purpose
              and design and the experiments you conduct in the lab? How does
              this feedback enter into the process of your work all through the
              iGEM competition? Document a thoughtful and creative approach to
              exploring these questions and how your project evolved in the
              process to compete for this award!
            </p>
            <p>
              To compete for the Best Integrated Human Practices prize, select
              the prize on the{" "}
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
            At iGEM we believe societal considerations should be upfront and
            integrated throughout the design and execution of synthetic biology
            projects. “Human Practices” refers to iGEM teams' efforts to
            actively consider how the world affects their work and their work
            affects the world. Through your Human Practices activities, your
            team should demonstrate how you have thought carefully and
            creatively about whether your project is responsible and good for
            the world. We invite you to explore issues relating (but not
            limited) to the ethics, safety, security, and sustainability of your
            project, and to show how this exploration feeds back into your
            project purpose, design, and execution.
          </p>
          <p>
            Please note you can compete for the Silver Medal criterion #2 and
            the Best Integrated Human Practices prize with this page.
          </p>
          <p>
            For more information, please see the{" "}
            <a href="https://responsibility.igem.org/human-practices/what-is-human-practices">
              Human Practices Hub
            </a>
            .
          </p>
          <p>
            On this page, your team should document all of your Human Practices
            work and activities. You should write about the Human Practices
            topics you considered in your project, document any activities you
            conducted to explore these topics (such as engaging with experts and
            stakeholders), describe why you took a particular approach
            (including referencing any work you built upon), and explain if and
            how you integrated takeaways from your Human Practices work back
            into your project purpose, design and/or execution.
          </p>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
