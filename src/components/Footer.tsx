import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="pt-5 pb-5 footer py-5 mt-0 bg-dark text-white">
      <div className="container">
        <div className="row mb-4">
            <div className="col-lg-2 col-xs-12">
              <img
                src="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                alt="SMU brand"
                className="responsive-img"
              />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2 col-xs-12">
              <img
                src="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                alt="GDMU brand"
                className="responsive-img"
              />
            </div>
            <div className="col-lg-2"></div>
          <div className="col-lg-4 col-xs-12 row justify-content-center">
          <img
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="Yanyin tech"
                className="responsive-img"
              />
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2024 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
