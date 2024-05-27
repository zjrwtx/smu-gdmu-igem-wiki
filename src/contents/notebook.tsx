import { Inspirations, InspirationLink } from "../components";

export function Notebook() {
  const links: InspirationLink[] = [
    { year: 2018, teamName: "Munich", pageName: "Notebook" },
    { year: 2019, teamName: "Georgia_State", pageName: "Notebook" },
    { year: 2019, teamName: "Newcastle", pageName: "Notebook" },
    { year: 2020, teamName: "IISER-Pune-India", pageName: "Notebook" },
    { year: 2020, teamName: "Lund", pageName: "Notebook" },
    { year: 2020, teamName: "NOVA_LxPortugal", pageName: "Notebook" },
    { year: 2020, teamName: "RDFZ-China", pageName: "NoteBook" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>Chronological notes of what your team is doing.</li>
            <li>Brief descriptions of daily important events.</li>
            <li>Pictures of your progress.</li>
            <li>Mention who participated in what task.</li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
