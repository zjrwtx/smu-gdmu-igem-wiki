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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Section 1</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Section 2</Nav.Link>


        {/* 添加更多导航链接 */}
      </Nav>
    </div>
  );
};
// sidenavbar end 

export function Experiments() {
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


      <div className="row  bg-rice_yellow">
        <div className="col-2">
          <SideNavbar activeLink={activeLink}          />
      </div>
      
        
        <div className="col-10">
          
              
              <Element name="section1" className="element rounded-border" id='section1'>
                 <h2>Section 1</h2>
                 <p>Content for section 1.</p>
               </Element>
          
               <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
          
              
              {/* <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Section 2</h2>
                <p>Content for section 2.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              </Element> */}
          

              <Element name="section3" className="element rounded-border" id='section2'>
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
