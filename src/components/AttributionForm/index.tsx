function AttributionForm() {
  const team_name = import.meta.env.VITE_TEAM_NAME;

  // Listen to size change and update form height
  window.addEventListener("message", function (e) {
    if (e.origin === "https://attributions.igem.org") {
      const { type, data } = JSON.parse(e.data);
      if (type === "igem-attribution-form") {
        const element = document.getElementById("igem-attribution-form");
        if (element) {
          element.style.height = `${data + 50}px`;
        }
      }
    }
  });

  return (
    <>
      <iframe
        style={{ width: "100%" }}
        id="igem-attribution-form"
        src={`https://attributions.igem.org?team=${team_name}&year=2024`}
      />
    </>
  );
}

export default AttributionForm;
