import { Inspirations, InspirationLink } from "../components";

export function Home() {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "" },
    { year: 2022, teamName: "Virginia", pageName: "" },
    { year: 2022, teamName: "Crete", pageName: "" },
    { year: 2022, teamName: "Estonia_TUIT", pageName: "" },
    { year: 2022, teamName: "AshesiGhana", pageName: "" },
    { year: 2021, teamName: "SDU-Denmark", pageName: "" },
    { year: 2020, teamName: "XMU-China", pageName: "" },
    { year: 2020, teamName: "TAS_Taipei", pageName: "" },
  ];

  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Before you start</h2>
          <hr />
          <p>Please read the following pages:</p>
          <ul>
            <li>
              <a
                href="https://competition.igem.org/deliverables/team-wiki"
                target="_blank"
              >
                Wiki Requirements page
              </a>
            </li>
            <li>
              <a
                href="https://competition.igem.org/judging/pages-for-awards"
                target="_blank"
              >
                Standard URL Pages for Awards
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Styling your wiki</h2>
          <hr />
          <p>
            Feel free to customize the page styling according to your
            preferences, or you can simply leave the style as it is. It's wise
            to focus on a clear content first, and on a clean design later.
          </p>
          <p>
            Be cautious with the size of the assets like images, videos, and
            more, that you put in your wiki. Large file sizes can hinder the
            presentation of wikis due to slow internet connections. Remember to
            compress large files before uploading them to iGEM servers.
          </p>
          <p>
            This default wiki meets the requirements, enhances navigability, and
            provides a user-friendly experience for visitors. You should not
            feel obligated to go beyond the provided styling.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Tips</h2>
          <hr />
          <p>
            This wiki will be your team's first interaction with the rest of the
            world, so here are a few tips to help you get started:
          </p>
          <ul>
            <li>
              State your accomplishments! Tell people what you have achieved
              from the start.
            </li>
            <li>
              Be clear about what you are doing and how you plan to do this.
            </li>
            <li>
              You have a global audience! Consider the different backgrounds
              that your users come from.
            </li>
            <li>
              Make sure information is easy to find; nothing should be more than
              3 clicks away.
            </li>
            <li>
              Avoid using very small fonts and low contrast colors; information
              should be easy to read.
            </li>
            <li>
              Start documenting your project as early as possible; don't leave
              anything to the last minute before the Wiki Freeze. For a complete
              list of deadlines visit the{" "}
              <a href="https://competition.igem.org/calendar" target="_blank">
                iGEM Competition calendar
              </a>
            </li>
            <li>Have lots of fun!</li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
