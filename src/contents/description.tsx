import { Inspirations, InspirationLink } from "../components";

export function Description() {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
    { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
    { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
    { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
    { year: 2020, teamName: "St_Andrews", pageName: "Description" },
    { year: 2020, teamName: "MIT", pageName: "Description" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
          Hepatic encephalopathy (HE) is a complication of cirrhosis characterized by neuropsychiatric and motor dysfunction. In 2023 it was estimated that there were 112 million individuals with liver cirrhosis worldwide, 40-60% of whom develop HE. Manifestations of HE can range from subtle (MHE) to severe (OHE) and even coma, which considerably affect the quality of life and even the survival of patients. Emerging data demonstrate the increased level of ammonia caused by liver dysfunction and overactivated microbiota in the context of cirrhosis plays an essential role in the pathogenesis of HE. Microbiome-targeted therapies for HE such as lactulose, rifaximin, probiotics, and FMT are showing promise. However, the resilience of the microbiome to sustainable change and unpredictable clinical outcomes from microbiota alterations remain challenging in the effective application of microbiome therapeutics in HE. In our project, we plan to design safe and controllable engineered bacteria that can metabolize the excessive accumulation of ammonia in the intestine of patients. We aim to improve the quality of life of patients with MHE, delaying their progression to OHE, and provide a novel idea for the microbial therapy of HE.
          </div>
        </div>
      </div>
    </>
  );
}
