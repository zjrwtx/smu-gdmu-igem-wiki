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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Team profile</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Project overview</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Cooperation needs and directions</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Cooperation mode</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Conclusion</Nav.Link>
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

export function collaboration() {
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

<div className="custom-header-inclusivity">
<h1 className="centered-title">
              <img 
                src="https://static.igem.wiki/teams/5378/header/collaboration.png"
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
        <div className='row bg-rice_yellow'>
        <div className="col-2">
            <SideNavbar activeLink={activeLink}          />
          </div>
          
          <div className="col-10">
            
          <div className="vh20">
                <a href="https://2024.igem.wiki/cjuh-jlu-china/collaboration" >CJUH-JLU-china</a>
            </div>
                <Element name="section1" className="element rounded-border" id='section1'>
                   <h2>Team profile</h2>
                   <p>The SMU-GDMU iGEM (International Genetically Engineered Machine Competition) team, as a pioneering force of research innovation at the University, is committed to exploring the latest boundaries of synthetic biology. Our team brings together the best students from different disciplines, including medicine, biology, computer science, chemical engineering and materials science, to solve global challenges through interdisciplinary collaboration.</p>
                   
                 </Element>
            
                <Element name="section2" className="element rounded-border" id='section2'>
                  <h2>Project overview</h2>
                  <p>This year, the iGEM team at Southern Medical University carried out a project called "Liver-Brain Guardian". This project aims to use synthetic biology technology to design and construct an improved genetically engineered bacterial ammonia metabolism system that can efficiently reduce the concentration of ammonia in human intestinal tract, in order to provide new ideas and new methods for solving the problem of human hepatic encephalopathy.</p>
                </Element>
            
  
                <Element name="section3" className="element rounded-border" id='section3'>
                <h2>cooperation needs and directions</h2>
                {/* <p>Content for section 3.</p> */}
                <div className="rounded-border">
                <h4 className="center-text">Bioinformatics support</h4>
                <p className="indent">Collaboration: Invite teams or individuals with a background in bioinformatics to assist us in gene sequencing, metabolic pathway optimization, and microbial community dynamics modeling. Expected results: Through big data analysis and machine learning algorithm, accurately locate key genes, optimize microbial metabolic efficiency, predict and adjust microbial community structure to achieve the best heavy metal removal effect.</p>
               </div>

               <div className="rounded-border">
                <h4 className="center-text">Materials Science and Nanotechnology</h4>
                <p className="indent">Collaboration: Working with teams in materials science to develop novel nanomaterials (capsules/probiotic powders) as microbial carriers or catalysts to enhance the sensitivity of microorganisms to PEA, i.e. their ability to respond to signals and transform metabolism.</p>
                <p className="indent">Expected results: Develop efficient, stable and recyclable nanocomposite materials, and enhance the practical application value of the project results.</p>
               </div>

               <div className="rounded-border">
                <h4 className="center-text">Computer Science and artificial Intelligence</h4>
                <p className="indent">Collaboration: Use AI technology to optimize experimental design and improve experimental efficiency; At the same time, an intelligent monitoring system is developed to monitor and predict the dynamic process of microbial treatment of ammonia in the body in real time.</p>
                <p className="indent">Expected results: Optimize the experimental process through the algorithm, reduce the consumption of manpower and material resources; Establish an intelligent early warning mechanism to ensure the safe and stable operation of the project.</p>
               </div>

               <div className="rounded-border">
                <h4 className="center-text">Environmental science and policy research</h4>
                <p className="indent">Collaboration: Environmental science experts and policy researchers will be invited to assess the environmental impact of the project results, and explore the feasibility of application and policy recommendations.</p>
                <p className="indent">Expected results: Develop scientific and rigorous environmental impact assessment reports to provide policy support and guidance for the transformation and application of project results.</p>
               </div>
                </Element>

                <Element name="section4" className="element rounded-border" id='section4'>
                <h2>Cooperation mode</h2>
                <div className="rounded-border">
                <h4 className="center-text">Regular communication meetings</h4>
                <p className="indent">Set up online or offline meetings to regularly share research progress, discuss problems encountered and solutions.</p>
               </div>

               <div className="rounded-border">
                <h4 className="center-text">Resource sharing</h4>
                <p className="indent">Open experimental data, computing resources and research results to promote knowledge sharing and technical exchange among teams.</p>
                 </div>

               <div className="rounded-border">
                <h4 className="center-text">Joint publication</h4>
                <p className="indent">Team members are encouraged to jointly sign and publish the scientific research results obtained together to enhance the academic influence and depth of cooperation.</p>
               </div>

               <div className="rounded-border">
                <h4 className="center-text">Talent cultivation</h4>
                <p className="indent">Through interdisciplinary cooperation projects, provide valuable practical opportunities and interdisciplinary vision for participating students, and cultivate interdisciplinary talents.</p>
              </div>
              
              
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Conclusion</h2>
              <p>The SMU-GDMU iGEM team looks forward to working hand in hand with people from all walks of life at home and abroad to jointly promote the development of the field of synthetic biology and contribute wisdom and strength to solving global problems. We believe that through close collaboration and innovation, we can create a greener and more sustainable future.</p>     
              
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
        </div>
        
      </>
    );
  }