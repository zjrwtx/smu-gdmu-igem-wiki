import { stringToSlug } from "../utils";
import { WaveAnimation } from "./wave";
export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="pt-0 pb-1 py-5 mt--8 text-white">
        {/* <div className="wave-container bg-rice_yellow">
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
        </div> */}
        <div className="bg-rice_yellow"><WaveAnimation /></div>
        
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row bg-wine-red footer-container">
          <div className="col-7">

            {/* <div className="col-1"></div> */}
            {/* <div className="col-5"> */}
              <div className="slideshow-container mb-5">
                      <div className="slide fade1 ">
                        <img className="fade-img" src="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp" alt="Image 1" />
                      </div>
                      <div className="slide fade2">
                        <img className="fade-img" src="https://static.igem.wiki/teams/5378/school-badge/smu.webp" alt="Image 2" />
                      </div>
                      <div className="slide fade3">
                        <img className="fade-img" src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp" alt="Image 3" />
                    </div>
              </div>
              {/* <img
                    src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                    alt="Yanyin tech"
                    className="responsive-img"
                  /> */}

          </div>
        </div>
        <div className="row bg-wine-red footer-container">
          <div>
            <p className="mb-0">
              <small className="footer-container">
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
              <small className="footer-container">
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
        <div className="bg-wine-red pb-5"></div>
    </footer>
  );
}
