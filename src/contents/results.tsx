import { Nav } from 'react-bootstrap';
import { Link,Element } from 'react-scroll';
import React,{useEffect,useState} from 'react';

// sidenavbar begin
interface SideNavbarProps {
  activeLink: string;
}
const SideNavbar: React.FC<SideNavbarProps> = ({ activeLink }) => {
  return (
    <div className="side-navbar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Sensing Module Validation</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Metabolic Module Validation</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Altogether: Sensing-Metabolic System Validation</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Safety Module Validation</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Model Results</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>Future Plans</Nav.Link>
        <Nav.Link as={Link} to="section7" smooth={true} duration={500} className={activeLink === 'section7' ? 'active' : 'notActive'}>Reference</Nav.Link>
        
        {/* 添加更多导航链接 */}
      </Nav>
    </div>
  );
};
// sidenavbar end 

export function Results() {
  // sidenavbar begin
  const [activeLink, setActiveLink] = useState<string>('');
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('.element');
        let currentSection = '';
          sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight / 2 && sectionTop > -section.clientHeight) {
              currentSection = section.id;
            }
          });
        setActiveLink(currentSection);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // sidenavbar end



  return (
    <>
    <div className="custom-header-results">
<h1 className="centered-title">
              <img 
                src="https://static.igem.wiki/teams/5378/header/results.png"
                alt="safety header"
                className="header-img"
              />
                            <img 
                src="https://static.igem.wiki/teams/5378/header/headerbar2.webp"
                alt="safety header"
                className="header-bar"
              />
</h1>
</div>
      <div className="row  bg-rice_yellow">
        <div className="col-2">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-10">
          
              
              <Element name="section1" className="element rounded-border" id='section1'>
                 <h2>Sensing Module Validation</h2>
                 <p>To demonstrate that PEA, a reliable risk factor of HE identified by the current work of our secondary PI (see details in our <a href='https://2024.igem.wiki/smu-gdmu-china/design'>Design page</a>) , could initiate the downstream gene circuit, we first engineered Escherichia coli Nissle 1917(EcN) to produce FeaR and TynA constantly by transforming EcN with plasmid Pcon-tynA-Pcon-feaR. Thereby, PEA could be degraded by the enzyme TynA into PAG and PAG could bind with FeaR as a transcriptional factor, which could activate the inducible promoter PTynA. Then we transformed the engineered EcN with plasmid PTynA-GFP to demonstrate the feasibility and efficiency of sensing module via fluorensence (Figure 1a).</p>
                 <p>After coculturing with 0, 5, 25, 50 and 100ng/ml PEA for 12 hours, results showed a significant increase in fluorensence  under microscopy, along with the the increased level in PEA concentration (Figure 1b), suggesting a successful expression and high feasibility of the sensing module. Moreover, the fluorescent intensity under different concentrations of PEA throughout 24 hours also verified that our engineered EcN could indeed be more sensitive to the increase in PEA concentration  (Figure 1c).</p>
                 <div className='image-container'>
                 <img 
                src="https://static.igem.wiki/teams/5378/result/result-fig1.webp"
                alt="result1"
                className="responsive-img"
              />
              <figcaption className='caption'>Figure 1. Validation of the feasibility of the sensing module. (a)Schematic representation of the construction and mechanism of engineered EcN with sensing module. EcN was co-transformed with plasmid Pcon-FeaR-Pcon-TynA and plasmid PTynA-GFP via electroporation. After co-culturing with different concentration of PEA for different time, fluorescence intensity was measure by microplate reader and fluorescence microscopy. (b)Fluorescence Intensity with 100ng/ml, 50ng/ml, 25ng/ml, 5ng/mland 0ng/ml PEA cocultured in engineered EcN. The fluorescence was measured on microplate reader by excitation at 410 nm and detection of emission at 500 nm. OD600 (absorbance of 600nm) was also measured on  microplate reader for normalization. Data shows mean±SD, n=3 independent experiments.(c)Fluorescence observation of the Pcon-FeaR-Pcon-TynA and PTynA-GFP engineered bacteria fluid cocultured with different concentrations of PEA. Fluorescence was observed after 12-hour co-culturing through fluorescence microscopy. </figcaption>
                 </div>

                          
               </Element>


          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Metabolic Module Validation</h2>
                <h3>Ammonia degrading ability of GS enzyme</h3>
                <p>Our metabolic module aims to degrade the over-accumulated NH3 in patients' gut by expressing GS, an enzyme that could utilize NH4+ and metabolize it into glutamine which does no harm to the human body. To validate the feasibility of this module, we transformed EcN with plasmid Ptac-GS and used IPTG to induce the expression of GS (Figure 2a). Meanwhile, we transformed EcN with the vector plasmid PET-32a as control gruop and coculture them with differnt concentratioon of NH4Cl in M9 minimal culture medium (Why in M9 rather than the regular LB medium? See details in our <a href='https://2024.igem.wiki/smu-gdmu-china/engineering'>Engineering Page</a>).</p>
                <p>To our joy, the ammonia level in EcN_GS group cocultured with 50μM NH4Cl for 12 hours is significantly lower than the control group (Figure 2b), and this trend remains when we extended coculturing time to 24 hours (Figure 2c). These results indicate the successful expression and function of the metabolic module.</p>
                <div className='image-container'>
                <img 
                src="https://static.igem.wiki/teams/5378/result/result-fig2.webp"
                alt="result2"
                className="image-wide"
              />
               <figcaption className='caption'>Figure 2. Validation of the feasibility of the metabolic module. (a)Schematic representation of the construction and mechanism of engineered EcN with metabolic module. EcN was transformed with plasmid Ptac-GS via electroporation. After co-culturing with different concentration of NH4Cl for different time, NH3 concentration was measured and calculated by NH3 detection kit based on indigol blue reaction via microplate reader (OD 630nm). The structure of GS was predicted based on AlphaFold3. (b)NH3 concentration after coculturing 0μM, 0.5μM, 5μM and 50μM NH4Cl with engineered EcNs for 12 hours. EcN_vector was transformed with the vector plasmid, pET-32a. Data shows mean±SD, n=3 independent experiments. (c)NH3 concentration in 0h, 4h, 8h, 12h and 24h after coculturing 50μM NH3Cl with engineered EcNs. Data shows mean±SD, n=3 independent experiments.</figcaption>
                </div>
                <h3>Tackling Intrinsic Ammonia of Engineered EcN</h3>
                <p>Interestingly, the level of NH3 increased rather than decreased as we expected throughout 24 hours after coculturing with additional NH4Cl. This can be explained by the complicated metabolic curcuits of nitrogen, especially the urea metabolism[1]. Therefore, we tried to seek paths to knock out relative genes to lower the intrinsic ammonia production (See details in our <a href='https://2024.igem.wiki/smu-gdmu-china/model'>Model Page</a>) but due to time limit, we didn't conduct wet lab experiments, which is well-planned in our future optimization.</p>
                <h3>Safety concerns of GS enzyme to degrade normal level of ammonia</h3>
                <p>According to a review in Journal of Hepatology[2] , the physiological level of blood ammonia is around 35~50μM, a level of 120μM is associated with high risk of death in HE patients.</p>
                <p>As shown in Figure 2b, the difference between EcN_vector and EcN_GS with lower NH4Cl concentration such as 5μM decreased and was even not significant with 0.5μM. This indicates that the GS enzyme requires a rather high level NH4Cl to reach the most efficient status. Therefore, when the level of ammonia is in a normal range, the metabolic module is not likely to cause a significant decrease in ammonia, which might be useful in other metabolic cycles. </p>
                <p>These results could allay some safety concerns of expressing GS enzymes to some extent, but more animal experiments are essential for further evaluation.</p>
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Altogether: Sensing-Metabolic System Validation</h2>
              <p>To demonstrate the function of our system after assembly, we co-transformed EcNs with plasmid Pcon-tynA-Pcon-feaR and plasmid PTynA-GS and coculture the engineered bacteria with different concentrations of PEA and NH4Cl (Figure 3a). Results showed that with the concentration of 50μM NH4Cl, 100ng/ml PEA induced the most significant decrease in ammonia (Figure 3b), which was consistent with the trend in both sensing and metabolic modules. </p>
              <p>We also transformed plasmid Pcon-tynA-Pcon-feaR into EcN as the control group, and cocultured them with 100ng/ml PEA and 50μM NH4Cl for 4,8,12 and 24 hours. Results demonstrated a significant ammonia decrease in experiment group compared with the control group (Figure 3c), indicateing that a rahter high level of PEA could iniitate downstream metabolic module to express GS and resulted in the decrease of over-accumulated ammonia.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/result/result-fig3.webp"
                alt="result3"
                className="image-wide"
              />
               <figcaption className='caption'>Figure 3. Functionality verification of the PEA-sensing NH3-metabolizing system. (a)Schematic representation of the process of sensing and metabolic module. EcN was co-transformed with plasmid Pcon-FeaR-Pcon-TynA and plasmid PTynA-GS via electroporation. (b)NH3 concentration after coculturing different concentration of PEA and NH4Cl with engineered EcN for 12 hours. Data shows mean±SD, n=3 independent experiments. (c)NH3 concentration after coculturing 100ng/ml PEA and 50μM NH4Cl engineered EcN for 0, 4, 8,12 and 24 hours. EcN-FeaR-TynA was transformed with only plasmid Pcon-FeaR-Pcon-TynA as the control group. Data shows mean±SD, n=3 independent experiments.</figcaption>
              
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Section 3</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>Safety Module Validation</h2>
              <p>In order to confirm that curli fibers decorated with TFFs could be produced by EcN, as they can in laboratory strains of E. coli, we transformed EcN with the panel of synthetic curli plasmid constructs (Fig.3-a), in addition to a vector in place of the curli genes as a negative control. The transformed cells were cultured at 37 °C and induced with L-(+)-arabinose.</p>
              <p>The secretion of TFF3 can be detected by Mouse trefoil factor 3(TFF3) enzyme-linked immunosorbent Assay kit. Results show that the engineered EcN was strongly induced by L-(+)-arabinose with twice as much TFF3 is produced comparing to no induction (Fig3-b).</p>
              <p>The position of the bands in SDS-PAGE is generally consistent with the molecular weight of TFF3 (Fig.3-c), Therefore, it is initially believed that TFF3 was successfully expressed. However, In some cases, basal expression of the csgA genes was observed without induction.</p>
              <p>A quantitative Congo Red-binding (CR) assay, normally used for curli fiber detection, indicated that CsgA-TFF3 fusions could be expressed and assembled into curli fibers under these conditions, while EcN control vector showed no CR binding(Fig.3-d).</p>
              <img 
                src="https://static.igem.wiki/teams/5378/result/result-fig4-1.webp"
                alt="result4"
                className="responsive-img"
              />
               <figcaption className='caption'>Figure 4. Expression of the safety module. (a)Schematic diagram of safety module plasmid and expected product. PBbB8k plasmid was transformed into EcNvia electroporation to achieve the secretion and self-assembly of EcN-derived TFF-fused curli. The structure of CsgA-TFF3 was predicted based on AlphaFold3. (b)Validation of TFF3 expression by Elisa. The fluorescence was measured on microplate reader by OD450 and OD650 (absorbance of 450nm and 650nm).Data shows mean±SD,n=3 independent experiments. (c)Validation of TFF3 expression by SDS-PAGE. 1: bacteria after inducible expression by arabinose. 2: supernatant after inducible expression. 3: bacteria before inducible expression by arabinose. 4: supernatant before inducible expression. (d)Schematic of quantitative Congo Red (CR)-binding assay. White ovals = E. coli; Orange and green lines = engineered curli fibers; Red circles = Congo Red (left). Normalized amyloid production of each EcN variant, as measured by CR binding assay (right), after induction with arabinose (Ara) at 37 °C in LB media.</figcaption>
              
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Model Results</h2>
              <p>Content for section 5.</p>
              <img 
                src="https://static.igem.wiki/teams/5378/modelresult.webp"
                alt="example"
                className="responsive-img"
              />
          
              </Element>

              <Element name="section6" className="element rounded-border" id='section6'>
              <h2>Future Plans</h2>
              <h3>Step1 Optimize the safety module by validating the self-killing switch</h3>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/we1.webp"
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Optimize the safety module by validating the self-killing switch</figcaption>
              </div>
              <p className='indent'>From the beginning of the project, we carefully considered the safety problems of engineering EcN. We have conducted a broad investigation into self-killing switches to prevent EcN from overproliferation in the eco-system and human bodies.</p>
              <h3>Switch 1: Dynamically Regulated CAP Encapsulation System</h3>
              <p className='indent'>Key gene kfiC, responsible for the expression of surface polysaccharide capsules in ECN, was knocked out. Subsequently, kfiC was cloned under the control of the lac promoter, which is responsive to IPTG induction. After oral administration of IPTG, ECN can produce CAP. Experimental results indicate that increasing the IPTG concentration can enhance bacterial survival by at least 10^5 times. In the absence of an inducer in vivo, the loss of CAP allows for effective clearance of bacteria while minimizing long-term immune responses. By editing the CAP expression system of ECN, we can precisely control the immunogenicity and survival of bacteria in vivo, thereby increasing dosage and in situ transport to maximize therapeutic efficacy and safety.</p>
              <h3>Switch 2: Oxygen Concentration Switch</h3>
              <p className='indent'>We utilized a synthetic nirB promoter that does not respond to chemical inducers (such as nitrites or nitrates) and is only activated under anaerobic conditions.</p>
              <p className='indent'>Transport Scenario: In a vacuum environment (e.g., yogurt/capsules), the survival of <span className='bold-font'>ECN</span> is ensured.</p>
              <p className='indent'>In Vivo Scenario: The low oxygen content in the intestinal lumen reaches conditions suitable for anaerobic promoter expression, while the oral administration of IPTG induces the expression of CAP, allowing for normal bacterial survival.</p>
              <p className='indent'>Excretion Scenario: In an aerobic environment outside the body, <span className='bold-font'>ECN</span> cannot express CAP and subsequently dies.</p>
              <p className='indent'>However, due to the bumpy road of exploring sensing and metabolic modules, we failed to spare more time to conduct relevant experiments to validate our designs in the iGEM season this year. We will construct plasmids to confirm our designs and select an optimized one to ensure safety in our engineered EcN.</p>
              
              <h2>Step2 Determine and validate a proper way to deliver the engineered EcN</h2>
              <p className='indent'>Our team envisions our Liver-Brain Guardian to be delivered in the form of air-dry microencapsulation so that the patients will just have to "take a pill" and the microencapsulation will protect the engineered bacteria from the acidic environment of the stomach and successfully enter the colony and colonize to start their work. We have consulted relevant bio-tech companies that can provide us with the technology of microencapsulation so we plan to test the feasibility of such delivery approach by in vitro and in vivo experiments in the future.</p>
              
              <h2>Step3 Carry out experiments on animals</h2>
              <p className='indent'>Application of a medical product must be tested in animals. Due to conditions and time constraints, we were unable to conduct in vivo validation experiments. Subsequently, we plan to conduct more tests after we refine the designs and experiments in step1~3 and carry out in vivo experiments to validate the therapeutic effect in HE mice model,to obtain more convincing experimental data in vivo.</p>

              </Element>

              <Element name="section7" className="element rounded-border" id='section7'>
              <h2>reference</h2>
              <p>[1]Konieczna I, Zarnowiec P, Kwinkowski M, Kolesinska B, Fraczyk J, Kaminski Z, Kaca W. Bacterial urease and its role in long-lasting human diseases. Curr Protein Pept Sci. 2012 Dec;13(8):789-806. <br />
              [2] Rose CF, Amodio P, Bajaj JS, Dhiman RK, Montagnese S, Taylor-Robinson SD, Vilstrup H, Jalan R. Hepatic encephalopathy: Novel insights into classification, pathophysiology and therapy. J Hepatol. 2020 Dec;73(6):1526-1547. 
              </p>
              </Element>
        </div>


          
        
      </div>
    </>
  );
}
