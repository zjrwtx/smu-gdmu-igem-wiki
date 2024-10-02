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
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>Section 6</Nav.Link>
        <Nav.Link as={Link} to="section7" smooth={true} duration={500} className={activeLink === 'section7' ? 'active' : 'notActive'}>Section 7</Nav.Link>
        <Nav.Link as={Link} to="section8" smooth={true} duration={500} className={activeLink === 'section8' ? 'active' : 'notActive'}>Section 8</Nav.Link>
        <Nav.Link as={Link} to="section9" smooth={true} duration={500} className={activeLink === 'section9' ? 'active' : 'notActive'}>Section 9</Nav.Link>
        <Nav.Link as={Link} to="section10" smooth={true} duration={500} className={activeLink === 'section10' ? 'active' : 'notActive'}>Section 10</Nav.Link>
        <Nav.Link as={Link} to="section11" smooth={true} duration={500} className={activeLink === 'section11' ? 'active' : 'notActive'}>Section 11</Nav.Link>
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
                src="https://static.igem.wiki/teams/5378/header/header-bar.webp"
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
                 <p>To demonstrate that PEA, a reliable risk factor of HE identified by the current work of our secondary PI (see details in our Design page) , could initiate the downstream gene circuit, we first engineered Escherichia coli Nissle 1917(EcN) to produce FeaR and TynA constantly by transforming EcN with plasmid Pcon-tynA-Pcon-feaR. Thereby, PEA could be degraded by the enzyme TynA into PAG and PAG could bind with FeaR as a transcriptional factor, which could activate the inducible promoter PTynA. Then we transformed the engineered EcN with plasmid PTynA-GFP to demonstrate the feasibility and efficiency of sensing module via fluorensence (Figure 1a).</p>
                 <p>After coculturing with 0, 5, 25, 50 and 100ng/ml PEA for 12 hours, results showed a significant increase in fluorensence  under microscopy, along with the the increased level in PEA concentration (Figure 1b), suggesting a successful expression and high feasibility of the sensing module. Moreover, the fluorescent intensity under different concentrations of PEA throughout 24 hours also verified that our engineered EcN could indeed be more sensitive to the increase in PEA concentration  (Figure 1c).</p>
                 <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              <figcaption className='caption'>Figure 1. Validation of the feasibility of the sensing module. (a)Schematic representation of the construction and mechanism of engineered EcN with sensing module. EcN was co-transformed with plasmid Pcon-FeaR-Pcon-TynA and plasmid PTynA-GFP via electroporation. After co-culturing with different concentration of PEA for different time, fluorescence intensity was measure by microplate reader and fluorescence microscopy. (b)Fluorescence Intensity with 100ng/ml, 50ng/ml, 25ng/ml, 5ng/mland 0ng/ml PEA cocultured in engineered EcN. The fluorescence was measured on microplate reader by excitation at 410 nm and detection of emission at 500 nm. OD600 (absorbance of 600nm) was also measured on  microplate reader for normalization. Data shows mean±SD, n=3 independent experiments.(c)Fluorescence observation of the Pcon-FeaR-Pcon-TynA and PTynA-GFP engineered bacteria fluid cocultured with different concentrations of PEA. Fluorescence was observed after 12-hour co-culturing through fluorescence microscopy. </figcaption>
               </Element>
               <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>

          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Metabolic Module Validation</h2>
                <h3>Ammonia degrading ability of GS enzyme</h3>
                <p>Our metabolic module aims to degrade the over-accumulated NH3 in patients' gut by expressing GS, an enzyme that could utilize NH4+ and metabolize it into glutamine which does no harm to the human body. To validate the feasibility of this module, we transformed EcN with plasmid Ptac-GS and used IPTG to induce the expression of GS (Figure 2a). Meanwhile, we transformed EcN with the vector plasmid PET-32a as control gruop and coculture them with differnt concentratioon of NH4Cl in M9 minimal culture medium (Why in M9 rather than the regular LB medium? See details in our Engineering Page).</p>
                <p>To our joy, the ammonia level in EcN_GS group cocultured with 50μM NH4Cl for 12 hours is significantly lower than the control group (Figure 2b), and this trend remains when we extended coculturing time to 24 hours (Figure 2c). These results indicate the successful expression and function of the metabolic module.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/result-fig2.webp"
                alt="example"
                className="responsive-img"
              />
               <figcaption className='caption'>Figure 2. Validation of the feasibility of the metabolic module. (a)Schematic representation of the construction and mechanism of engineered EcN with metabolic module. EcN was transformed with plasmid Ptac-GS via electroporation. After co-culturing with different concentration of NH4Cl for different time, NH3 concentration was measured and calculated by NH3 detection kit based on indigol blue reaction via microplate reader (OD 630nm). The structure of GS was predicted based on AlphaFold3. (b)NH3 concentration after coculturing 0μM, 0.5μM, 5μM and 50μM NH4Cl with engineered EcNs for 12 hours. EcN_vector was transformed with the vector plasmid, pET-32a. Data shows mean±SD, n=3 independent experiments. (c)NH3 concentration in 0h, 4h, 8h, 12h and 24h after coculturing 50μM NH3Cl with engineered EcNs. Data shows mean±SD, n=3 independent experiments.</figcaption>
                <h3>Tackling Intrinsic Ammonia of Engineered EcN</h3>
                <p>Interestingly, the level of NH3 increased rather than decreased as we expected throughout 24 hours after coculturing with additional NH4Cl. This can be explained by the complicated metabolic curcuits of nitrogen, especially the urea metabolism[1]. Therefore, we tried to seek paths to knock out relative genes to lower the intrinsic ammonia production (See details in our Model Page) but due to time limit, we didn't conduct wet lab experiments, which is well-planned in our future optimization.</p>
                <h3>Safety concerns of GS enzyme to degrade normal level of ammonia</h3>
                <p>According to a review in Journal of Hepatology[2] , the physiological level of blood ammonia is around 35~50μM, a level of 120μM is associated with high risk of death in HE patients.</p>
                <p>As shown in Figure 2b, the difference between EcN_vector and EcN_GS with lower NH4Cl concentration such as 5μM decreased and was even not significant with 0.5μM. This indicates that the GS enzyme requires a rather high level NH4Cl to reach the most efficient status. Therefore, when the level of ammonia is in a normal range, the metabolic module is not likely to cause a significant decrease in ammonia, which might be useful in other metabolic cycles. </p>
                <p>These results could allay some safety concerns of expressing GS enzymes to some extent, but more animal experiments are essential for further evaluation.</p>
                <img 
                src=""
                alt="result"
                className="responsive-img"
              />
               <figcaption className='caption'></figcaption>
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Altogether: Sensing-Metabolic System Validation</h2>
              <p>To demonstrate the function of our system after assembly, we co-transformed EcNs with plasmid Pcon-tynA-Pcon-feaR and plasmid PTynA-GS and coculture the engineered bacteria with different concentrations of PEA and NH4Cl (Figure 3a). Results showed that with the concentration of 50μM NH4Cl, 100ng/ml PEA induced the most significant decrease in ammonia (Figure 3b), which was consistent with the trend in both sensing and metabolic modules. </p>
              <p>We also transformed plasmid Pcon-tynA-Pcon-feaR into EcN as the control group, and cocultured them with 100ng/ml PEA and 50μM NH4Cl for 4,8,12 and 24 hours. Results demonstrated a significant ammonia decrease in experiment group compared with the control group (Figure 3c), indicateing that a rahter high level of PEA could iniitate downstream metabolic module to express GS and resulted in the decrease of over-accumulated ammonia.</p>
              <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               <figcaption className='caption'>Figure 3. Functionality verification of the PEA-sensing NH3-metabolizing system. (a)Schematic representation of the process of sensing and metabolic module. EcN was co-transformed with plasmid Pcon-FeaR-Pcon-TynA and plasmid PTynA-GS via electroporation. (b)NH3 concentration after coculturing different concentration of PEA and NH4Cl with engineered EcN for 12 hours. Data shows mean±SD, n=3 independent experiments. (c)NH3 concentration after coculturing 100ng/ml PEA and 50μM NH4Cl engineered EcN for 0, 4, 8,12 and 24 hours. EcN-FeaR-TynA was transformed with only plasmid Pcon-FeaR-Pcon-TynA as the control group. Data shows mean±SD, n=3 independent experiments.</figcaption>
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
              <p>The secretion of TFF3-fused curli was proved successful (Fig.3-c), however, In some cases, basal expression of the csgA genes was observed without induction.</p>
              <p>A quantitative Congo Red-binding (CR) assay, normally used for curli fiber detection, indicated that CsgA-TFF3 fusions could be expressed and assembled into curli fibers under these conditions, while EcN control vector showed no CR binding(Fig3-d).</p>
              <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               <figcaption className='caption'>Figure 4. Expression of the safety module. (a)Schematic diagram of safety module plasmid and expected product. PBbB8k plasmid was transformed into EcNvia electroporation to achieve the secretion and self-assembly of EcN-derived TFF-fused curli. The structure of CsgA-TFF3 was predicted based on AlphaFold3. (b)Validation of TFF3 expression by Elisa. The fluorescence was measured on microplate reader by OD450 and OD650 (absorbance of 450nm and 650nm).Data shows mean±SD,n=3 independent experiments. (c)Validation of TFF3 expression by SDS-PAGE. 1: bacteria after inducible expression by arabinose. 2: supernatant after inducible expression. 3: bacteria before inducible expression by arabinose. 4: supernatant before inducible expression. (d)Schematic of quantitative Congo Red (CR)-binding assay. White ovals = E. coli; Orange and green lines = engineered curli fibers; Red circles = Congo Red (left). Normalized amyloid production of each EcN variant, as measured by CR binding assay (right), after induction with arabinose (Ara) at 37 °C in LB media.</figcaption>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Model Results</h2>
              <p>Content for section 5.</p>
              <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section6" className="element rounded-border" id='section6'>
              <h2>Section 6</h2>
              <p>Content for section 6.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section7" className="element rounded-border" id='section7'>
              <h2>Section 7</h2>
              <p>Content for section 7.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section8" className="element rounded-border" id='section8'>
              <h2>Section 8</h2>
              <p>Content for section 8.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section9" className="element rounded-border" id='section9'>
              <h2>Section 9</h2>
              <p>Content for section 9.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section10" className="element rounded-border" id='section10'>
              <h2>Section 10</h2>
              <p>Content for section 10.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section11" className="element rounded-border" id='section11'>
              <h2>Section 11</h2>
              <p>Content for section 11.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>
          

        </div>
        <div className="col-1"></div>

          
        
      </div>
    </>
  );
}
