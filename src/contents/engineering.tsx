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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Overview</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Sensing Module Engineering</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Metabolic Module Engineering</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Reference</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Section 5</Nav.Link>
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


export function Engineering() { 
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
    <div className="custom-header-engineering">
        <h1 className='centered-title'>
        <img 
                src="https://static.igem.wiki/teams/5378/header/engineering.png"
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
                 <h2>Overview </h2>
                 <p>The engineering of the sensing and metabolic modules are two critical steps in the development of Liver-Brain Gardian, our HE prevention probiotics (see the detailed design of Liver-Brain Gardian in the Description and Design pages).</p>
                 <p>Through multiple design-build-test-learn cycles, we have successfully engineered the PEA-sensing module, which could automatically respond to the increased level of a risk factor, PEA, of HE and initiate downstream expression of the metabolic module. Simultaneously, we have been working on constructing an efficient module that can degrade the pathogenic factor of HE. </p>
                 <p>During actual operation, we started the first cycle after fully literation research, making the first attempt with theoretical support. Normally problems would arise which urge us to trouble-shoot with experts and dig further into literature to enter the next iteration of engineering cycle. After several iterations, we were able to achieve the original goal in most scenarios and get a comprehensive understanding of our contributions.</p>
                 <p>In this section on engineering success, we will go through the engineering cycles we went through to develop the PEA-sensing and ammonia-metabolizing EcN. (Figure 1).</p>
                 
                 <img 
                src="https://static.igem.wiki/teams/5378/testengineering/engineering01.webp"
                alt="example"
                className="responsive-img"
              />
               
               
               </Element>
          
               <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Sensing Module Engineering</h2>
                <h3>Cycle 1: Determination of a proper Sensor</h3>
                <h4>Design</h4>
                <p>Since over-accumulated ammonia is one of the pathogenic factors of HE (see our Description page to learn more), we decided to design an ammonia-sensing module first. We envisioned our sensing module to specifically respond to the level of ammonia and could activate the downstream metabolic module to eliminate ammonia. </p>
                <p>After literature research, we learned that most bio-sensors are based on transcriptional factor-inducible promoter systems [1]. However, we failed to find such an inducible promoter that can be activated by NH3 with high specificity. Therefore, we had to switch our design to sensing another risk factor of cirrhosis progression that may lead to HE.</p>
                <h4>Redesign & Build</h4>
                <p>During the next round of literature reading and brain storming, we learned that the level of bile acid decreases in cirrhosis patients and it was verified in some clinical studies[2-3], so we endeavored to seek systems that could respond to bile acids. Under the generous help and suggestions of Professor Zhu Bo (find more in our integrated human practice page), we found Martínez et al in 2019 developed bile acid inducible promoters in Lactobacillus strains[4]. </p>
                <p>However, the level of bile acid is negatively related to the severity of cirrhosis, so we tried to utilize the "NOT" logic gate by introducing Cl/Plam genetic circuit. Plam is a potent promoter found in the lambda bacteriophage, while Cl is an inhibitory protein that can bind to the Plam promoter, thereby repressing downstream gene expression[5].</p>
                <p>Next, we re-designed the sensing module as shown in Figure 2. The normal level of bile acid can activate the expression of pchA downstream of the inducible bile acid promoter, releasing transcriptional factor pchA to activate PLEE1 and express CL, which can inhibit Plam to express metabolic module. In contrast, when bile acid decreases in cirrhosis patients who are likely to develop HE, the inhibitory effect can be eliminated and thus initiate the expression of metabolic module to work.</p>
               
                <img 
                src="https://static.igem.wiki/teams/5378/testengineering/engineering02.webp"
                alt="example"
                className="responsive-img"
              />
                
               
                <h4>Test</h4>
                <p>To ensure the feasibility of our design before construction of plasmids, we did broad HP investigations, literature reviews, group discussions and expert outreach. Professor Zhu Bo suggested us to interview experts in the field of liver diseases, especially in HE. Our HP group reached Professor He Xiaolong, who has been studying the mechanism of gut microbiota and its metabolites in the development of HE. He pointed out that although our design seemed very interesting, bile acids are not specific enough as a biomarker for HE. </p>
                <p>Coincidentally, his team currently found a new type of gut microbiota-derived metabolite, PEA, and verified its specificity and sensitivity in animal models and patients (Figure 3, unpublished work in submission). He generously reported this work to us and showed great interest in the concept of engineering probiotics to prevent HE from progressing. Therefore, we invited him to our team as secondary PI and moved our attention to PEA as the sensor.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/testengineering/engineering03.webp"
                alt="example"
                className="responsive-img"
              />


                <h4>Learn</h4>
                <p>We ultimately chose to use PEA as the sensing marker for our engineered bacteria. </p>
                <h3>Cycle 2: Construction of the Sensing Module</h3>
                <h4>Design & Build</h4>
                <p>To specifically respond to PEA, we designed a TynA-FeaR-PTynA inducible system. In Escherichia coli, TynA is a monoamine oxidase that can oxidize aromatic amines such as PEA to the corresponding aldehyde, PAG. FeaR is a transcription factor, which was shown to activate PtynA in the presence of aldehydes. Therefore, we designed a plasmid that constantly express TynA and FeaR and another plasmid with the inducibel promoter PTynA and downstream gene to be activated. </p>
                <p>However, TynA can oxidize various kinds of aromatic amines and lack specificity to PEA. Through literature reading, we learned that Rottinghaus et al found the mutant TynA-G494S and FeaR-A81L showed a more specific response to PEA and PAG[6]. Therefore, we constructed the plasmid Pcon-FeaR+Pcon-TynA with the two mutants and a plasmid with inducible promoter PTynA and a reporter gene GFP (Figure 4).</p>
                
            
                <h4>Test</h4>
                <p>We planned to co-transformed EcN with two plasmids via electroporation (Protocol-1). However, colony PCR suggested we only transformed successfully with plasmid Pcon-feaR-PcontynA and failed in transforming plasmid PTynA-GFP. We tried several times but all came with negative results (Figure 5).</p>
                
             
                
                
                <h4>Learn</h4>
                <p>Our experiment group members analyzed reasons carefully and searched for chemical transformation protocol in EcN (Protocol-2). Fortunately, colony PCR showed successful construction of our engineered EcN (Figure 6) and it was verified by DNA sequencing.</p>
                <h3>Cycle 3: Optimizing inducing condition of the Sensing Module</h3>
                <h4>Design & Build</h4>
                <p>After transformation of two plasmids in EcN, we tried to validate the PEA-sensing GFP reporting system with different concentrations of PEA (0, 5, 25, 50 and 100 ng/ml) and explored the optimized inducing concentration of PEA.</p>
                <h4>Test</h4>
                <p>After co-culture with different concentraions of PEA for different time (0,4,8,12 and 24h), the fluorescence was measured on microplate reader by excitation at 410 nm and detection of emission at 500 nm. OD600 (absorbance of 600nm) was also measured on  microplate reader for normalization.</p>
                <h4>Learn</h4>
                <p>Results showed a significant increase in fluorescent intensity along with the increased level of PEA concentration. 100 ng/ml PEA presented the best capability of induction, and showed significant difference compared with other concentrations of PEA starting from 12 hours.</p>
               
                <p>Therefore, the design of sensing module, which detects the rising level of HE risk factor PEA and induces the expression of gene downstream, is feasible. The opmized concentration of PEA can be set at 100 ng/ml. </p>
                <img 
                src="https://static.igem.wiki/teams/5378/testengineering/engineering04.webp"
                alt="example"
                className="responsive-img"
              />
               <img 
                src="https://static.igem.wiki/teams/5378/testengineering/engineering05.webp"
                alt="example"
                className="responsive-img"
              />
              
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Metabolic Module Engineering</h2>
              <h3>Cycle 1: Determination of a proper pathogenic factor</h3>
              <h4>Design</h4>
              <p>1</p>
              <h4>Build & Test</h4>
              <p>2</p>
              <h4>Learn</h4>
              <p>3</p>
              <h3>Cycle 2: </h3>
              <h4>Design</h4>
              <p>1</p>
              <h4>Build & Test</h4>
              <p>2</p>
              <h4>Learn</h4>
              <p>3</p>
              <p>4</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>Section 4</h2>
              <p>Content for section 4.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Section 5</h2>
              <p>Content for section 5.</p>
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
