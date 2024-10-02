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
        <Nav.Link 
          as={Link} 
          to="section9" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section9' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section9')}
        >
          Verification for sensor module
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section10" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section10' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section10')}
        >
          Verification for metabolic module
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section11" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section11' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section11')}
        >
          In vitro expression of engineered curli fibers
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section12" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section12' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section12')}
        >
          Quantitative Congo red binding assay
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section13" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section13' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section13')}
        >
          Eliza for the verification of TFF3 products
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="section14" 
          smooth={true} 
          duration={500} 
          className={activeLink === 'section14' ? 'active' : 'notActive'}
          onClick={() => onLinkClick('section14')}
        >
          example
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
            src="https://static.igem.wiki/teams/5378/header/header-bar2.webp"
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
              <p className="indent">(1) Material<br />
Plasmid DNA<br />
10× FastDigest or 10× FastDigest Green Buffer<br />
Double Distillation Water (ddH2O)<br />
FastDigest enzyme<br />
Alkaline phosphatase<br />
</p>
              <p className="indent">(2) Steps<br />	
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
              <p className="indent">(1) Material<br />
TIANGEN Universal DNA Purification Kit<br />
Gel with DNA sample<br />
Double Distillation Water (ddH2O)<br />
Centrifuge<br />
Shaker<br />
Water Bath<br />
</p>
              <p className="indent">(2) Step (take 30ml gel for instance)<br />
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
              <p className="indent">(1) Material
5 × CE MultiS Buffer
Exnase MultiS
Double Distillation Water (ddH2O)
Primer</p>
              <p className="indent">(2) Steps<br />
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
              <p className="indent">(3) Note:<br />
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
              <p className="indent">(1) Material<br />
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
              <p className="indent">(2) Steps<br />
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
<p className="indent">(3) Note:<br />
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
            <h2>Plasimd conservation</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Plasimd conservation</h4>
              <p className="indent">(1) Material<br />
Cryopreservation tube<br />
50% Glycerin<br />
Alcohol lamp<br />
</p>
              <p className="indent">(2) Steps<br />
1.Add 400μl 50% Glycerin and 600μl bacterial liquid.<br />
2.Mix it upside down and put it in the refrigerator at -80℃.<br />
</p>
<p className="indent">(3)	Note:<br />
Burn the mouth and cap of the flask with an alcohol lamp before and after opening the glycerin bottle.</p>
            </div>
          </Element>



          <Element 
            name="section7" 
            className="element rounded-border" 
            id='section7' 
            onMouseEnter={() => handleMouseEnter('section7')}
            style={{ display: visibleSection === 'section7' ? 'block' : 'none' }}
          >
            <h2>Plasmid extraction</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Plasmid extraction</h4>
              <p className="indent">(1)	Material<br />
TIANprep Mini Plasmid Kit II<br />
Absolute Ethanol<br />
Double Distillation Water (ddH2O)<br />
Centrifuge<br />
</p>
              <p className="indent">(2) Steps<br />
1.Insert the adsorption column into a collection tube, add 500μl BL equilibrium solution, centrifuge at 13,400G for 1 minute, discard the filtrate and reuse the collection tube.<br />
2.Add the bacterium liquid to a centrifuge tube, centrifuge at 13,400G for 1 minute, remove the supernatant as much as possible, keep the precipitate in the tube.<br />
3.Add 500μl solution P1 (the RNase A need to be added in advance) into the centrifuge tube. Use a pipette or vortex oscillator to completely suspend the bacterial cell precipitate.<br />
4.Add 500μl solution P2 into the centrifuge tube and turn it up and down gently for 6-8 times till the cells are fully lysed, when the liquid should be clear and sticky, meanwhile the time should not be longer than 5min.<br />
5.Add 700μl solution P3 into the centrifuge tube and turn it up and down gently for 6-8 times immediately when the white flocculent precipitate will appear. Centrifuge at 13,400G for 10 minutes.<br />
6.Add the supernatant collected in the previous step into the adsorption column (the adsorption column is put into the collection tube). Centrifuge at 13,400G for 1 minute, discard the filtrate and reuse the collection tube.<br />
7.Add 500μl solution PD to the adsorption column. Centrifuge at 13,400G for 1 minute, discard the filtrate and reuse the collection tube.<br />
8.Add 600μl solution PW (the absolute ethanol need to be added in advance) to the adsorption column. Centrifuge at 13,400G for 1min, discard the filtrate and reuse the collection tube.<br />
9.Repeat the step above.<br />
10.Centrifuge the adsorption with collection tube at 13,400G for 2min, discard the filtrate and reuse the collection tube. Open the cover of adsorption column and dry it out in the air for 5 minutes.<br />
11.Place the adsorption column into a clean centrifuge tube. Add 200μl ddH2O to the middle part of the adsorption membrane, placed it at room temperature for 2-5 minutes, and centrifuge at 13,400G for 2 minutes. The plasmid solution was collected into the centrifuge tube.<br />
</p>
              <p className="indent">(3)	Notes:<br />
Add RNase A to solution P1 before using. After adding solution P2, do not shake the tube violently to avoid pollution. In step six, pay attention not to draw the white precipitate in the centrifuge tube out. Add absolute ethanol to solution PW before using. In step eleven, in order to increase the recovery efficiency of plasmid, the solution obtained in the centrifuge tube can be readded into the centrifugal adsorption column and repeat step eleven again. 
</p>
            </div>
          </Element>



          <Element 
            name="section8" 
            className="element rounded-border" 
            id='section8' 
            onMouseEnter={() => handleMouseEnter('section8')}
            style={{ display: visibleSection === 'section8' ? 'block' : 'none' }}
          >
            <h2>Transformation</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">Transformation</h4>
              <p className="indent">(1)	Material<br />
Nissle E. coli suspension (OD600: 0.6-0.8)<br />
10% glycerol<br />
Eppendorf Tube (EP tube)<br />
Centrifuge<br />
Double Distillation Water (ddH2O)<br />
Gibco LB medium (GYT Medium)<br />
Luria-Bertani liquid medium (LB Medium)<br />
Electroporation System<br />
</p>
              <p className="indent">(2)	Steps<br />
	1.Divide the Nissle E. coli suspension into two 50ml centrifuge tubes and cool with ice for 15 minutes.<br />
	2.Freeze the ultrapure water, 10% glycerol and EP tube in advance.<br />
	3.Centrifuge the suspension at 3000 rpm for 10 minutes and discard the supernatant.<br />
	4.Resuspend with ultrapure water and centrifuge at 4000 rpm for 10 minutes and discard the supernatant after each suspension.<br />
	5.Resuspend with 10% glycerol. <br />
	6.Add 50μL GYT to each 50ml centrifuge tube and transfer to a cooled EP tube. Freeze on ice for 10 minutes.<br />
	7.Centrifuge the suspension at 5000 rpm for 5 minutes and discard the supernatant. Resuspend with 5μL ddH2O.<br />
	8.Repeat the previous step.<br />
	9.Centrifuge the suspension at 5000 rpm for 5 minutes and discard the supernatant. Resuspend with 200μL ddH2O。<br />
	10.Add 50μL suspension and 3μL plasmid to the electroporator for electron transformation.<br />
	11.Electrotransform with 1.8kV, 5.8ms. Resuspend with 900μL and place the EP tuber in a shaker at 37℃, 250rpm for 2 hours.<br />
	12.Spread the plate and place in the incubator.<br />
</p>
              <p className="indent">(3)	Note:<br />
Flip upside down from time to time to make sure the sample is cooled evenly. During the centrifuge session, invert the supernatant on the clean filter paper quickly is to remove the culture medium as much as possible. If the electroporation cup is used, it should be soaked in 75% alcohol for 2 hours in advance and dried in the clean bench. The LB Medium is better preheated to 37℃.
</p>
            </div>
          </Element>
          <Element 
            name="section9" 
            className="element rounded-border" 
            id='section9' 
            onMouseEnter={() => handleMouseEnter('section9')}
            style={{ display: visibleSection === 'section9' ? 'block' : 'none' }}
          >
            <h2>Verification for sensor module</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">Verification for sensor module</h4>
              <p className="indent">(1)	Material<br />
LB Medium<br />
96-well cell culture plates<br />
shaker<br />
M9 Medium<br />
Palmitoylethanolamide solution (PEA)<br />
Phosphate Buffered Saline (PBS)<br />
</p>
              <p className="indent">(2)	Steps<br />
1.Take a single colony into 5mL LB medium, then centrifuge it at 250rpm and 37℃ environments, overnight.<br />
3.Place the 96-well cell culture plate in a shaker at 37℃, 250rpm for 24 hours. Then, collect the samples after 5 and 24 hours, respectively.<br />
4.Fluorescence was observed through fluorescence microscopy.<br />
5.The fluorescence was measured on microplate reader by excitation at 410 nm and detection of emission at 500 nm. OD600(absorbance of 600 nm) was also measured on microplate readear for normalization.<br />
</p>
              <p className="indent">(3)	Note:<br />
The M9 Medium is supplemented with 1mM MgSO4, 100 μM CaCl2 and 2% w/v glycerol. The sterile PBS contains corresponding resistance antibiotics and the final volume of the diluted solution is 200μL. Flow cytometry data were gated by forward scatter and side scatter. 
</p>
            </div>
          </Element>
          <Element 
            name="section10" 
            className="element rounded-border" 
            id='section10' 
            onMouseEnter={() => handleMouseEnter('section10')}
            style={{ display: visibleSection === 'section10' ? 'block' : 'none' }}
          >
            <h2>Verification for metabolic module</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">Verification for metabolic module</h4>
              <p className="indent">(1)	Material<br />
Transferred single colony<br />
LB Medium<br />
Shaker<br />
Centrifuge<br />
PBS solution<br />
M9 Medium<br />
96-well cell culture plates<br />
Breath-easier membrane<br />
0.5% glucose<br />
25μg/mL chloramphenicol<br />
</p>
              <p className="indent">(2)	Steps<br />
1.Incubate the transferred single colony in the LB medium with 250rpm at 37℃ overnight.<br />
2.Add 200μL cultures into 20mL LB medium, then incubate in the shaker for 2 hours.<br />
3.Incubate for another 2 hours after the activation of promoter under static situation.<br />
4.Centrifuge at 3200g and discard the supernatant, and resuspend the precipitate in 10mL M9 minimal medium.<br />
5.Dilute the 1μL suspension 1000 times with PBS solution, then do the bacteria counting.<br />
6.Adjust the concentration of the suspension to 109 cells/mL with adjusted M9 medium.<br />
7.Add 1mL cell suspension in each well of 96-well cell culture plates, then add 10μL 5mol/L ammonium chloride solution in each cell. Each sample has three duplicates.<br />
8.Cover the plates with breath-easier membrane, then incubate at 37℃ for 3 hours.<br />
9.Take 150μL cultures for further detection with corresponding kits.<br />
</p>
              <p className="indent">(3)	Note:<br />
The M9 minimal medium contains 0.5% glucose, and add 10μg/mL chloramphenicol during the adjustment section. The detection will be conducted for samples collect at 0,1,2 and 3 hours after the transformation. 
</p>
            </div>
          </Element>
          <Element 
            name="section11" 
            className="element rounded-border" 
            id='section11' 
            onMouseEnter={() => handleMouseEnter('section11')}
            style={{ display: visibleSection === 'section11' ? 'block' : 'none' }}
          >
            <h2>In vitro expression of engineered curli fibers</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">In vitro expression of engineered curli fibers</h4>
              <p className="indent">(1)	Material<br />
Nissel 1917<br />
pBbB8k plasmid<br />
LB Medium<br />
Kanamycin<br />
L-(+)-arabinose<br />
Shaking incubator<br />

</p>
              <p className="indent">(2)	Steps<br />
1.Nissel 1917 is transformed with pBbB8k plasmid using electroporation to generate variants of curli-producing cells.<br />
2.The cells are plated on the LB medium and incubated overnight at 37℃.<br />
3.Single colonies are inoculated in 5mL of LB medium, grown overnight in the shaking incubator at 37℃.<br />
4.Overnight starters are diluted 100-fold in fresh LB medium and grown overnight in the shaking incubator at 37℃ each time.<br />
5.Add 0.05%(wt/vol) L-(+)-arabinose to induce protein expression, then the cultures will be grown overnight in the shaking incubator at 37℃.<br />
</p>
              <p className="indent">(3)	Note:<br />
The LB Mediums used above all contain 50 μg/mL kanamycin. The dilution will be ended until the cultures reaches logarithmic phase with an optical density (OD) of 0.5 to 0.8 at 600 nm.
</p>
            </div>
          </Element>
          <Element 
            name="section12" 
            className="element rounded-border" 
            id='section12' 
            onMouseEnter={() => handleMouseEnter('section12')}
            style={{ display: visibleSection === 'section12' ? 'block' : 'none' }}
          >
            <h2>Quantitative Congo red binding assay</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">Quantitative Congo red binding assay</h4>
              <p className="indent">(1)	Material<br />
Induced-Bacterial Culture<br />
Congo red solution<br />
Phosphate Buffered Saline (PBS)<br />
Centrifuge<br />
Ultraviolet Spec-Tropometer<br />
</p>
              <p className="indent">(2)	Steps<br />
1.1mL bacterial culture is pelleted at 8000 rpm for 10 minutes.<br />
2.Resuspend in 0.025mM Congo red solution for 10 minutes.<br />
3.Pelleting again at 14000rpm for 10 minutes.<br />
4.Measure the absorbance of the supernatant at 490nm using a microplate reader and ultraviolet spec-tropometer.<br />
</p>
              <p className="indent">(3)	Note:<br />
              Curly fiber yield will be measure by subtracting the measured absorbance value with 0.025 mM Congo red in PBS and normalized with the OD600 of the original bacterial culture.
</p>
            </div>
          </Element>

          <Element 
            name="section13" 
            className="element rounded-border" 
            id='section13' 
            onMouseEnter={() => handleMouseEnter('section13')}
            style={{ display: visibleSection === 'section13' ? 'block' : 'none' }}
          >
            <h2>Eliza for the verification of TFF3 products</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">Eliza for the verification of TFF3 products</h4>
              <p className="indent">(1)	Material<br />
Anti-TFF3 primary antibody (1:50 50, Sigma, WH0007033M1)<br />
TBST buffer<br />
Goat anti-mouse HRP-conjugated secondary antibody (1:50000, Thermo Fisher, 31430)<br />
Ultra-TMB (3,3', 5,5' tetramethylbenzidine) ELISA substrate<br />
2 M sulfuric acid<br />
96-well cell culture plate<br />
</p>
              <p className="indent">(2)	Steps<br />
1.Incubate the sample with 50μL anti-TFF3 primary antibody for 2 hours at 25℃.<br />
2.Wash the sample three times with TBST buffer.<br />
3.Incubate with 100μL goat anti-mouse HRP-conjugated secondary antibody for 1 hour at 25℃, also followed by three times washes.<br />
4.Each well will be added 100μL Ultra-TMB ELISA substrate and incubated for 10 minutes at 25℃.<br />
5.Add 50μL 2 M sulfuric acid to halt the reaction.<br />
6.Transfer the final cultures to the 96-well cell culture plate and measure the absorbance at 450 and 650nm.<br />
</p>
              <p className="indent">(3)	Note:<br />
The amount of TFF3 products will be gained by subtracting the absorbance at 650 nm from the absorbance at 450 nm.
</p>
            </div>
          </Element>

          <Element 
            name="section14" 
            className="element rounded-border" 
            id='section14' 
            onMouseEnter={() => handleMouseEnter('section14')}
            style={{ display: visibleSection === 'section14' ? 'block' : 'none' }}
          >
            <h2>example</h2>
            <p>Content for section .</p>
            <div className="rounded-border">
              <h4 className="center-text">example</h4>
              <p className="indent">(1)	Material<br />

</p>
              <p className="indent">(2)	Steps<br />

</p>
              <p className="indent">(3)	Note:<br />
</p>
            </div>
          </Element>

        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
}