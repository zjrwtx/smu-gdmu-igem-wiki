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
              <p className="indent">(1)	Material
LB Broth Agar Powder, Miller
LB Broth Powder, Miller
Ultrapure (UP) Water
Double Distillation Water (ddH2O)
Ampicillin
Kanamycin
Chloramphenicol

(2)	Steps
LB liquid medium
1.	Weigh 12.5g of LB Broth Powder.
2.	Add the powder into 500ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.

LB solid medium
1.	Weigh 12g of LB Broth Agar Powder.
2.	Add the powder into 300ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.
4.	Pour the medium into culture dishes in the ultraclean worktable.

LB selective medium (Ampicillin)
1.	Weigh 12g of LB Broth Agar Powder.
2.	Add the powder into 300ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.
4.	Weigh 1g of Ampicillin.
5.	Add the ampicillin into ddH2O and volume to 10mL. The ddH2O is sterilized previously. Shake the mixture fully.
6.	Filter the mixture through a filter to remove microorganism.
7.	Add 500μL of mixture into an EP tube with 500μL ddH2O. The ddH2O is sterilized previously.
8.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes.

LB selective medium (Kanamycin)
1.	Weigh 12g of LB Broth Agar Powder.
2.	Add the powder into 300ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.
4.	Weigh 100mg of Kanamycin.
5.	Add the kanamycin into ddH2O and volume to 10mL. The ddH2O is sterilized previously. Shake the mixture fully.
6.	Filter the mixture through a filter to remove microorganism.
7.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes.

LB selective medium (Chloramphenicol)
1.	Weigh 12g of LB Broth Agar Powder.
2.	Add the powder into 300ml UP Water.
3.	Autoclave entire bottle of LB medium under 121°C for 20 minutes.
4.	Weigh 500mg of Chloramphenicol.
5.	Add the ampicillin into anhydrous ethanol and volume to 10mL. Shake the mixture fully.
6.	Filter the mixture through a filter to remove microorganism.
7.	When the LB medium cool down to nearly 50°C, add 300μL antibiotic mixture into it in the ultraclean worktable, then pour it into culture dishes.
</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>
       
          
          <Element 
            name="section2" 
            className="element rounded-border" 
            id='section2' 
            onMouseEnter={() => handleMouseEnter('section2')}
            style={{ display: visibleSection === 'section2' ? 'block' : 'none' }}
          >
            <h2>LB medium preparation</h2>
            <p>Content for section 2.</p>
            <div className="rounded-border">
              <h4 className="center-text">LB medium preparation</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>




          <Element 
            name="section3" 
            className="element rounded-border" 
            id='section3' 
            onMouseEnter={() => handleMouseEnter('section3')}
            style={{ display: visibleSection === 'section3' ? 'block' : 'none' }}
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
            name="section4" 
            className="element rounded-border" 
            id='section4' 
            onMouseEnter={() => handleMouseEnter('section4')}
            style={{ display: visibleSection === 'section4' ? 'block' : 'none' }}
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
            name="section5" 
            className="element rounded-border" 
            id='section5' 
            onMouseEnter={() => handleMouseEnter('section5')}
            style={{ display: visibleSection === 'section5' ? 'block' : 'none' }}
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