import {useEffect} from 'react';

export function Attributions () {
  const teamID = import.meta.env.VITE_TEAM_ID;

  useEffect(() => {
    function listenToIframeHeight(e: MessageEvent) {
      if (e.origin === "https://teams.igem.org") {
        const { type, data } = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          if (element) {
            element.style.height = `${data + 50}px`;
          }
        }
      }
    }
    window.addEventListener("message", listenToIframeHeight);
    return () => {
      window.removeEventListener("message", listenToIframeHeight)
    }
  }, [])

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #2</h4>
            <p>
              Describe what work your team members did and what other people did
              for your project.
            </p>
            <p>
              The form that bas been embded in an iframe in this page shows your
              team's Project Attribution form. This page must keep the form as
              it is.
            </p>
            <p>
              If you use a different website framework, make sure to embed the
              right URL for your team's form.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/deliverables/project-attribution">
                Project Attribution page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
      <iframe
        style={{ width: "100%" }}
        id="igem-attribution-form"
        src={`https://teams.igem.org/wiki/${teamID}/attributions`}
      />
    </>
  );
}