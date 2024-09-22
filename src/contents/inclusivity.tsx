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
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Section 3</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Section 4</Nav.Link>
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

export function Inclusivity() {
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
<h1 className="centered-title">INCLUSIVITY</h1>
</div>
      <div className="row  bg-rice_yellow">
        <div className="col-3">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-8">
          
              
              <Element name="section1" className="element rounded-border" id='section1'>
                 <h2>Section 1</h2>
                 <p>Content for section 1.</p>
                 <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               </Element>
          

          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Section 2</h2>
                <p>Content for section 2.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>To see</h2>
              <p>"We are all connected in the great web of existence." — Chief Seattle</p>
              <div className="rounded-border">
              <h4 className="center-text">To see</h4>
              <p className="indent">Through iGEM, we recognize the importance of diversity and inclusivity in the scientific community. We are committed to making the synthetic biology community more accessible to minority groups and creating a learning environment where everyone feels welcome. Our project focuses on the urban-rural divide, aiming to help rural residents break down barriers to information and promote educational equity. At the same time, we have adopted a completely new approach by combining synthetic biology with Socially popular art crafts, allowing everyone to benefit from our education. In our project, we have consulted experts in various fields and communicated with other iGEM teams. We are convinced that through these initiatives, we are connected to the entire world.</p>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>Rural outreach program</h2>
              <p>Content for section 4.</p>
              <div className="rounded-border">
              <h4 className="center-text">First Encounter and Gifts</h4>
              <p className="indent">On July 14, 2024, the SMU-GDMU iGEM team, in collaboration with a doctoral medical team from Southern Medical University, embarked on a journey to Wa Ri Town, Daofu County, Garze Tibetan Autonomous Prefecture, Sichuan Province, located at an altitude of 3000 meters. Daofu County is nestled along the Xianshui River, where the river's relentless erosion over the years has created a series of fertile valleys, giving birth to a constellation of villages. The iGEM team's visit brought medical supplies and equipment to the villagers of Wa Ri Town for their daily healthcare services.</p>
              </div>

              <div className="rounded-border">
              <h4 className="center-text">Research and Advocacy</h4>
              <p className="indent">The iGEM team collaborated with local health clinics to conduct in-depth interviews and focus group discussions. Through accurate data collection, the team gained a comprehensive understanding of the recent trends in the incidence of hepatic encephalopathy and the current state of treatment in the area. Subsequently, we provided educational sessions on synthetic biology for the local villagers and held a popular science lecture on "hepatic encephalopathy" for them. To gauge the villagers' understanding and feedback on the knowledge of "hepatic encephalopathy" we shared, we visited villagers' homes for follow-up, hoping to further promote their awareness of the condition.</p>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Free Medical Services</h4>
              <p className="indent">Not only that, but to better serve the villagers, the iGEM team, in collaboration with town government and health clinic staff, also provided comprehensive free medical services to the left-behind villagers by going deep into the villages. While waiting for the free medical services, Teacher Li Ling, the guidance teacher of the iGEM team, and other team members conducted a detailed survey among the villagers. The aim was to understand their awareness of the prevention and treatment of hepatic encephalopathy, as well as the treatment experiences and living habits of the patients.</p>
              <p className="indent">At the same time, the team also had in-depth exchanges with the local health clinic, collected detailed information about hepatic encephalopathy, and compiled a list of villagers. Starting with the patients who needed the most attention, team members conducted one-on-one visits, communication, and health guidance in each household. We hope that through this initiative, we can help them understand and prevent hepatic encephalopathy, and eliminate the information barriers associated with living in rural areas.</p>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Health Records</h4>
              <p className="indent">Furthermore, the iGEM team also assisted the doctors at the local health clinic in improving the health records of the villagers, providing more meticulous care and support for the health of the local residents. This series of activities not only enhanced the villagers' understanding of hepatic encephalopathy but also made a positive contribution to the improvement of public health standards in the area.</p>
              </div>
              
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>The arts</h2>
              <p>Squeezy toys, made primarily from memory foam, are a type of handicraft. These crafts have the ability to deform slowly, returning to their original shape after an external force has deformed them. Handmade squishy toys are not only simple stress-relief toys but also artistic crafts that provide a variety of sensory experiences. Through the skillful hands and creativity of artisans, squishy toys can become unique works with personalized and artistic value. Due to their fun and ornamental nature, they are very popular in society. Therefore, the iGEM team decided to combine "squishy toys" with synthetic biology for a collision of art and science.</p>
              <div className="rounded-border">
              <h4 className="center-text">Charity Sale Event</h4>
              <p className="indent">Our team members participated in a charity sale event at Jiayu Sun City Square, Baiyun District, Guangzhou City, Guangdong Province. We integrated elements of synthetic biology and hepatic encephalopathy into our squishy toy creations, printing related patterns and scientific knowledge on them. We hope that through this creation, we can combine art with science, retaining fun, ornamental value, and educational significance.</p>
              </div>
             
              <div className="rounded-border">
              <h4 className="center-text">Community Service Station</h4>
              <p className="indent">In addition, our team also went to the community service station to attract the public with our handicrafts—"squishy toys"—and promote knowledge about synthetic biology and hepatic encephalopathy to them. Subsequently, we issued a survey questionnaire to receive feedback from the public, and the results showed that we indeed played an educational role for the general public."</p>
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
