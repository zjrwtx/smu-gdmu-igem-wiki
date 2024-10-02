import { Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import React, { useEffect, useState } from 'react';

// sidenavbar begin
interface SideNavbarProps {
  activeLink: string;
  onLinkClick: (section: string) => void;
}
const SideNavbar: React.FC<SideNavbarProps> = ({ activeLink, onLinkClick }) => {
  return (
    <div className="side-navbar">
      <Nav className="flex-column">
        <Nav.Link 
          as={Link} 
          to="section1" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section1' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section1')}
        >
          LB medium preparation
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section2" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section2' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section2')}
        >
          Double Enzyme DNA Digestion& Agarose Gel Electrophoresis
        </Nav.Link>
        {/* 添加更多导航链接 */}

  
        <Nav.Link 
          as={Link} 
          to="section3" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section3' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section3')}
        >
          Agarose Gel Electrophoresis
        </Nav.Link>
  
        <Nav.Link 
          as={Link} 
          to="section4" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section4' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section4')}
        >
          Infusion
        </Nav.Link>

        <Nav.Link 
          as={Link} 
          to="section5" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section5' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section5')}
        >
          Colony PCR
        </Nav.Link>
  
        <Nav.Link 
          as={Link} 
          to="section6" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section6' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section6')}
        >
          Plasmid conservation
        </Nav.Link>
   
        <Nav.Link 
          as={Link} 
          to="section7" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section7' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section7')}
        >
          Plasmid Extraction
        </Nav.Link>
 
        <Nav.Link 
          as={Link} 
          to="section8" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section8' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section8')}
        >
          Transformation
        </Nav.Link>
      </Nav>
    </div>
  );
};
// sidenavbar end 

export function Experiments() {
  // sidenavbar begin
  const [activeLink, setActiveLink] = useState<string>('section1');
  const [visibleSection, setVisibleSection] = useState<string>('section1');

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

  const handleMouseEnter = (section: string) => {
    setVisibleSection(section);
  };

  const handleLinkClick = (section: string) => {
    setVisibleSection(section);
  };

  return (
    <>
      <div className="custom-header-experiments">
        <h1 className="centered-title">
          <img 
            src="https://static.igem.wiki/teams/5378/header/experiment.png"
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

      <div className="row bg-rice_yellow">
        <div className="col-2">
          <SideNavbar activeLink={activeLink} onLinkClick={handleLinkClick} />
        </div>
        
        <div className="col-10">
        <Element 
            name="section 1" 
            className="element rounded-border" 
            id='section 1' 
            onMouseEnter={() => handleMouseEnter('section1')}
            style={{ display: visibleSection === 'section1' ? 'block' : 'none' }}
          >
            <h2>LB medium preparation</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">LB medium preparation</h4>
              <p className="indent">(1)	Material<br />
LB Broth Agar Powder, Miller<br />
LB Broth Powder, Miller<br />
Ultrapure (UP) Water<br />
Double Distillation Water (ddH2O)<br />
Ampicillin<br />
Kanamycin<br />
Chloramphenicol<br />
</p>
<br />
              <p className="indent">(2)	Steps<br />
LB liquid medium<br />
1.	Weigh 12.5g of LB Broth Powder.<br />
2.	Add the powder into 500ml UP Water.<br />
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.<br />
<br />
LB solid medium<br />
1.	Weigh 12g of LB Broth Agar Powder.<br />
2.	Add the powder into 300ml UP Water.<br />
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.<br />
4.	Pour the medium into culture dishes in the ultraclean worktable.<br />
<br />
LB selective medium (Ampicillin)<br />
1.	Weigh 12g of LB Broth Agar Powder.<br />
2.	Add the powder into 300ml UP Water.<br />
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.<br />
4.	Weigh 1g of Ampicillin.<br />
5.	Add the ampicillin into ddH2O and volume to 10mL. The ddH2O is sterilized previously. Shake the mixture fully.
6.	Filter the mixture through a filter to remove microorganism.
7.	Add 500μL of mixture into an EP tube with 500μL ddH2O. The ddH2O is sterilized previously.
8.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes.
<br />
LB selective medium (Kanamycin)
1.	Weigh 12g of LB Broth Agar Powder.
2.	Add the powder into 300ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.
4.	Weigh 100mg of Kanamycin.
5.	Add the kanamycin into ddH2O and volume to 10mL. The ddH2O is sterilized previously. Shake the mixture fully.<br />
6.	Filter the mixture through a filter to remove microorganism.<br />
7.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes.<br />
<br />
LB selective medium (Chloramphenicol)<br />
1.	Weigh 12g of LB Broth Agar Powder.<br />
2.	Add the powder into 300ml UP Water.<br />
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.<br />
4.	Weigh 500mg of Chloramphenicol.<br />
5.	Add the ampicillin into anhydrous ethanol and volume to 10mL. Shake the mixture fully.<br />
6.	Filter the mixture through a filter to remove microorganism.<br />
7.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes..</p>
            </div>
          </Element>
       
          
          <Element 
            name="section2" 
            className="element rounded-border" 
            id='section2' 
            onMouseEnter={() => handleMouseEnter('section2')}
            style={{ display: visibleSection === 'section2' ? 'block' : 'none' }}
          >
            <h2>Double Enzyme DNA Digestion& Agarose Gel Electrophoresis</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Double Enzyme DNA Digestion& Agarose Gel Electrophoresis</h4>
              <p className="indent">（1）Material<br />
Plasmid DNA<br />
10× FastDigest or 10× FastDigest Green Buffer<br />
Double Distillation Water (ddH2O)<br />
FastDigest enzyme<br />
Alkaline phosphatase<br />
</p>
              <p className="indent">（2）Steps<br />	
1.Add 1μg plasmid DNA, 1μl FastDigest enzyme, 2μl 10× FastDigest or 10× FastDigest<br />
2.	Green Buffer and ddH2O to 20μl into an PCR tube.<br />
3.	Put the tube into the oven at 37℃ for 1h to 1.5h.<br />
4.	Add 1μl Alkaline phosphatase.<br />
5.	Put the tube into the oven at 37℃ for 0.5h.<br />
6.	Stop the reaction by placing the tube at -4°C for 5 to 10 minutes.<br />
7.	Agarose Gel Electrophoresis.<br />
8.	Store the tube into the refrigerator at -20℃.<br />
</p>
            </div>
          </Element>




          <Element 
            name="section3" 
            className="element rounded-border" 
            id='section3' 
            onMouseEnter={() => handleMouseEnter('section3')}
            style={{ display: visibleSection === 'section3' ? 'block' : 'none' }}
          >
            <h2>Agarose Gel Electrophoresis</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Agarose Gel Electrophoresis</h4>
              <p className="indent">(1)Material<br />
TIANGEN Universal DNA Purification Kit<br />
Gel with DNA sample<br />
Double Distillation Water (ddH2O)<br />
Centrifuge<br />
Shaker<br />
Water Bath<br />
</p>
              <p className="indent">（2）Step (take 30ml gel for instance)<br />
1.Weigh 0.3g agarose powder and 30μl 1%TAE buffer, then add to a flask;<br />
2.Heat up until the solution is completely dissolved. If it boils, move away from the heat until it cools down and put it back on the heat until it absolutely dissolved.<br />
3.While heating, prepare the bed where the gel polymerizes. Make sure that it is well balanced and tight, and that the comb is well placed.<br />
4.When the solution cools down to approximately 55 ℃ , add 1µl EB to the homogeneous solution and mix well.<br />
5.Pour the solution into the bed and clear all the bubbles in it with a tip.<br />
6.When the gel solidification solidifies, carefully pull out the “comb”;<br />
7.Place the gel in the electrophoresis chamber, then add enough TAE buffer till there is about 2-3 mm of buffer over the gel.<br />
8.Mix the samples with loading buffer in a 10:1 ratio, then put the samples into the wells, as well as marker into the first well.<br />
9.Run the gel at 120V for about 30 minutes, then check the result under the Blue Light Gel Imager.<br />
</p>
            </div>
          </Element>


          <Element 
            name="section4" 
            className="element rounded-border" 
            id='section4' 
            onMouseEnter={() => handleMouseEnter('section4')}
            style={{ display: visibleSection === 'section4' ? 'block' : 'none' }}
          >
            <h2>Infusion</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Infusion</h4>
              <p className="indent">(1)Material
5 × CE MultiS Buffer
Exnase MultiS
Double Distillation Water (ddH2O)
Primer</p>
              <p className="indent">(2)Steps<br />
1.Calculate the amount of DNA required for the recombination reaction according to the formula.<br />
2.Prepare the following reaction system on ice:<br />
a. X/Y calculates the amount of vector and the amount of each insert according to the formula.<br />
b. Negative control-1 can be used to confirm whether there is a circular plasmid residue in the linearized cloning vector, and it is recommended.<br />
c. Negative control-2 is recommended when the insert amplification template is a circular plasmid with the same resistance as the cloning vector.<br />
It is recommended that the circular plasmid residue detection of the linearized vector and insert be performed independently.<br />
d. Positive control reactions can be used to exclude the influence of other experimental materials and operating factors.<br />
3.Use a pipette to gently mix (do not shake to mix), and centrifuge briefly to collect the reaction solution to the bottom of the tube.<br />
4.React at 37°C for 30 min; drop to 4°C or cool on ice immediately.<br />
</p>
              <p className="indent">(3)Note:<br />
1.In order to ensure the accuracy of sample addition, the linearized vector and insert can be properly diluted before preparing the recombinant system, and the sample amount of each component is not less than 1 μl.<br />
2.Calculation of vector and fragment usage:<br />
Optimum usage per segment=(0.02×Fragment base pairs) ng (0.03 pmol)<br />
For example, when the inserts with lengths of 0.5 kb, 1 kb, and 2 kb are cloned into a cloning vector with a length of 5 kb, the optimal amount of the vector and each fragment to be used is: Optimum use amount of linearized cloning vector: 0.02 × 5000 = 100 ng;<br />
Optimum usage of 0.5 kb insert: 0.02 × 500 = 10 ng;<br />
Optimum usage of 1 kb insert: 0.02 × 1000 = 20 ng;<br />
Optimum use of 2 kb insert: 0.02 × 2000 = 40 ng.<br />
a. The amount of linearized cloning vector should be between 50 - 200 ng. When using the above formula to calculate the optimal amount of DNA to be used beyond this range, simply select the minimum/maximum amount of use.<br />
b. The amount of each insert should be greater than 10 ng. When using the above formula to calculate the optimum usage amount is lower than this value, just use 10 ng directly.<br />
c. When the linearized cloning vector and the amplified product of the insert fragment are used directly without DNA purification, the total volume added should not exceed 1/5 of the volume of the reaction system, that is, 4 μl.<br />
</p>
            </div>
          </Element>



          <Element 
            name="section5" 
            className="element rounded-border" 
            id='section5' 
            onMouseEnter={() => handleMouseEnter('section5')}
            style={{ display: visibleSection === 'section5' ? 'block' : 'none' }}
          >
            <h2>Colony PCR</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Colony PCR</h4>
              <p className="indent">(1)Material<br />
Green Taq Mix<br />
Primer<br />
Double Distillation Water (ddH2O)<br />
Eight tube centrifuge<br />
EP Tube<br />
Tweezers<br />
plastic wrap<br />
Shaker<br />
PCR Eight-Tube<br />
DNA Marker<br />
</p>
              <p className="indent">(2)Steps<br />
(Take 5 tubes of eight tube centrifuge for example)<br />
1) Pick bacteria<br />
1.Add 1mL Amp LB to 1.5mL EP Tube.<br />
2. Use a small tip with tweezers to pick out a single clone and put them into the EP Tube.<br />
3.Put the EP tube on the Rank and wrap it with plastic wrap.<br />
4.Insert it into the shaker obliquely, shake for 2h.<br />
<br />
2) Colony PCR（after shaking for 2h）(take eight tubes for instance)<br />
1.Adding 6.6μl Primer Mix(5μl), 41.3μl 2 x Green Taq, 29.1μl of ddH2O to the first tube of eight-tube, then draw 9ul from the first tube to the next 4 tubes.<br />
2.Centrifuge the eight-tube in a centrifuge for several seconds.<br />
3.Take the eight-tube into Clean bench.<br />
4.Add 1μl Bacteria Liquid.<br />
5.Set the protocol as follow: begin at 95℃ for 3 mins, then keep 95℃ for 15 secs for denaturation, decrease to 55℃ for 15 secs, 72℃ for 1 min and repeat that cycle 30 times, 72℃ for 1 min, finally maintain 4℃ infinity.<br />
6.Adding all the samples to the hole. Run the gel at 120V for about 25 minutes.<br />
Check the result under the Blue Light Gel Imager.<br />
8. Select the right System for Shaking bacteria and Plasmid Extraction.<br />
</p>
<p className="indent">(3)Note:<br />
1. The lid of the PCR Eight-tube is placed in the ultra-clean workbench to make sure we add Bacteria Liquid at the ultra-clean workbench.<br />
2.As we use Green Taq Mix, we don’t need to add Loading when Agarose Gel Electrophoresis.<br />
</p>
            </div>
          </Element>


          <Element 
            name="section6" 
            className="element rounded-border" 
            id='section6' 
            onMouseEnter={() => handleMouseEnter('section6')}
            style={{ display: visibleSection === 'section6' ? 'block' : 'none' }}
          >
            <h2>Section 2</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Section 2</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>



          <Element 
            name="section7" 
            className="element rounded-border" 
            id='section7' 
            onMouseEnter={() => handleMouseEnter('section7')}
            style={{ display: visibleSection === 'section7' ? 'block' : 'none' }}
          >
            <h2>Section 2</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Section 2</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>



          <Element 
            name="section8" 
            className="element rounded-border" 
            id='section8' 
            onMouseEnter={() => handleMouseEnter('section8')}
            style={{ display: visibleSection === 'section8' ? 'block' : 'none' }}
          >
            <h2>Section 2</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Section 2</h4>
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