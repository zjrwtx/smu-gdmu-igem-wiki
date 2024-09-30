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
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Overview</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Rural outreach program</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>The arts</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>Link with the world</Nav.Link>
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
<h1 className="centered-title">
              <img 
                src="https://static.igem.wiki/teams/5378/header/inclusivity.png"
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
                 <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               </Element>
          

               <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
              
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
              <h2>Overview</h2>
              <p>"We are all connected in the great web of existence." — Chief Seattle</p>
              <div className="rounded-border">
              <h4 className="center-text">To see</h4>
              <p className="indent">Through iGEM, we recognize the importance of diversity and inclusivity in the scientific community.Our team is committed to the inclusion of people from diverse backgrounds in scientific research, particularly in the areas of educational equity and social inclusion in urban and rural areas. Through a series of concrete activities, we help people of different identities and backgrounds to learn about science, in particular the importance and applications of hepatic encephalopathy and synthetic biology. Our aim is to enable everyone to do their part to improve health and promote scientific progress, and to stimulate interest in scientific research, wherever they come from.</p>
              </div>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>SMU-GDMU iGEM Team Members Group Photo</figcaption>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>Rural outreach program</h2>
              <div className="rounded-border">
              <h4 className="center-text">Research and Advocacy</h4>
              <p className="indent">On July 14, 2024, the SMU-GDMU iGEM team, in collaboration with a doctoral medical team from Southern Medical University, embarked on a journey to Wa Ri Town, Daofu County, Garze Tibetan Autonomous Prefecture, Sichuan Province, located at an altitude of 3000 meters. As well, the iGEM team's visit brought medical supplies and equipment to the villagers of Wa Ri Town for their daily healthcare services.</p>
              <p className="indent">The iGEM team collaborated with local health clinics to conduct in-depth interviews and focus group discussions. Through accurate data collection, the team gained a comprehensive understanding of the recent trends in the incidence of hepatic encephalopathy and the current state of treatment in the area. Subsequently, we provided educational sessions on synthetic biology for the local villagers and held a popular science lecture on "hepatic encephalopathy" for them. To gauge the villagers' understanding and feedback on the knowledge of "hepatic encephalopathy" we shared, we visited villagers' homes for follow-up, hoping to further promote their awareness of the condition.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/1-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
              </div>
              </div>

              <div className="rounded-border">
              <h4 className="center-text">Language Engineering</h4>
              <p className="indent">（1）Language-Diverse Educational Brochures:</p>
              <p className="indent">To overcome language barriers and promote inclusivity in our outreach efforts, we have created educational brochures in both Tibetan and Chinese languages for the residents of Wa Rizhen. This initiative aims to ensure that all community members, regardless of their primary language, can access and understand the information provided. By offering materials in multiple languages, we are committed to eliminating linguistic obstacles and fostering a more inclusive environment where everyone can benefit from the shared knowledge.</p>
              <p className="indent">（2）Sign Language Interpretation:</p>
              <p className="indent">To ensure that our educational videos reach a wider audience, the SMU-GDMU team has specifically included sign language interpretation in our videos. This initiative aims to remove communication barriers for individuals who are deaf or hard of hearing, enabling them to access and understand the scientific information presented just as easily as the general audience. We consulted professional sign language interpreters to display sign language synchronously within the videos, ensuring the accuracy and clarity of the information conveyed. We believe that such efforts not only help improve the accessibility of the information but also strive to create a more inclusive environment where everyone can benefit from the knowledge we share, allowing people from different backgrounds to have equal access to scientific educational resources.</p>              <p className="indent">（1）Language-Diverse Educational Brochures:</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/20240922214356-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/44-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
              </div>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Free Medical Services</h4>
              <p className="indent">Not only that, but to better serve the villagers, the iGEM team, in collaboration with town government and health clinic staff, also provided comprehensive free medical services to the left-behind villagers by going deep into the villages. While waiting for the free medical services, Teacher Li Ling, the guidance teacher of the iGEM team, and other team members conducted a detailed survey among the villagers. The aim was to understand their awareness of the prevention and treatment of hepatic encephalopathy, as well as the treatment experiences and living habits of the patients.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/555555-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              <p className="indent">At the same time, the team also had in-depth exchanges with the local health clinic, collected detailed information about hepatic encephalopathy, and compiled a list of villagers. Starting with the patients who needed the most attention, team members conducted one-on-one visits, communication, and health guidance in each household. We hope that through this initiative, we can help them understand and prevent hepatic encephalopathy, and eliminate the information barriers associated with living in rural areas.</p>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Health Records</h4>
              <p className="indent">Furthermore, the iGEM team also assisted the doctors at the local health clinic in improving the health records of the villagers, providing more meticulous care and support for the health of the local residents. This series of activities not only enhanced the villagers' understanding of hepatic encephalopathy but also made a positive contribution to the improvement of public health standards in the area.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/666666666-1.webp"
                alt="example"
                className="image-height"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              </div>
              
              
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>The arts</h2>
              <p>Squeezy toys, made primarily from memory foam, are a type of handicraft. These crafts have the ability to deform slowly, returning to their original shape after an external force has deformed them. Handmade squishy toys are not only simple stress-relief toys but also artistic crafts that provide a variety of sensory experiences. Through the skillful hands and creativity of artisans, squishy toys can become unique works with personalized and artistic value. Due to their fun and ornamental nature, they are very popular in society. Therefore, the iGEM team decided to combine "squishy toys" with synthetic biology for a collision of art and science.</p>
              <div className="rounded-border">
              <h4 className="center-text">Charity Sale Event</h4>
              <p className="indent">Our team members participated in a charity sale event at Jiayu Sun City Square, Baiyun District, Guangzhou City, Guangdong Province. We integrated elements of synthetic biology and hepatic encephalopathy into our squishy toy creations, printing related patterns and scientific knowledge on them. We hope that through this creation, we can combine art with science, retaining fun, ornamental value, and educational significance.</p>
              </div>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/77777-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Community Service Station</h4>
              <p className="indent">In addition, our team also went to the community service station to attract the public with our handicrafts—"squishy toys"—and promote knowledge about synthetic biology and hepatic encephalopathy to them. Subsequently, we issued a survey questionnaire to receive feedback from the public, and the results showed that we indeed played an educational role for the general public."</p>
              </div>
              
               </Element>

              <Element name="section6" className="element rounded-border" id='section6'>
              <h2>Link with the world</h2>
              <p>Content for section 6.</p>
              <div className="rounded-border">
              <h4 className="center-text">Inclusivity within our team</h4>
              <p className="indent">Modern science is both highly differentiated and highly integrated, while intersectional science combines differentiation and synthesis to realize the integration of science. Interdisciplinary  science is a comprehensive and interdisciplinary product, which is conducive to solving the major complex scientific problems, social problems and global problems faced by mankind.</p>
              <p className="indent">Our team is composed of students from various disciplines, including Clinical Medicine, Statistics, Bioinformatics, Psychiatry, Preventive Medicine, Medical Laboratory Technology, Biomedical Materials Science, Applied Psychology, Information Management and Information Systems, and Health Insurance Studies, etc.. This diversity contributes to inspiring thinking collisions and continuous innovation.</p>
              <p className="indent">"Alone we can do so little; together we can do so much."Team building is highly valued, and we owe our success and harmonious atmosphere to it. When we build connections with each other, when we realize our responsibility for the project, when we feel a sense of belonging to the team, it's natural to dedicate to the research. We hope all future iGEM teams attach importance to team building, which undoubtedly contributes to work efficiency and most importantly, precious relationships.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/888888888-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Collaboration</h4>
              <p className="indent">The team collaborated with the Liver Disease Center of Southern Hospital and the Microecological Diagnosis and Treatment Center of Pearl River Hospital. Under their guidance, the team collected the serum of cirrhosis patients before TIPS operation and conducted metabolomics detection. They also followed up on the patients for three months to record the incidence of HE;</p>
              <p className="indent">The team participated in the South China Exchange Conference, sharing the progress of the project and project experience with Shenzhen University, Southern University of Science and Technology, etc.;</p>
              <p className="indent">The team was invited to participate in the China Regional Exchange Conference CCIC, where they had in-depth communication with other teams to improve project optimization and cooperation, promoting the development of their respective projects.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/1010101001-4-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>

                <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/12121212-1-1-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              
              
              </div>

              <div className="rounded-border">
              <h4 className="center-text">Communication with professors</h4>
              <p className="indent">To refine our project design, we interviewed several doctors and professors for their advice.</p>
              <p className="indent">To perfect and determine the direction of the sensing module, we interviewed Professor Zhu from the First Affiliated Hospital of Sun Yat-sen University, who suggested that we switch to a bile acid-responsive marker to address the issue of not finding a suitable ammonia-inducible promoter; subsequently, following the advice of Professor He from the Zhujiang Hospital of Southern Medical University, our team replaced bile acid with PEA.</p>
              <p className="indent">To refine the design of the safety module, we approached President Zhou from Shenzhen Hospital, an expert in hepatic encephalopathy and gut microbiota, who offered valuable suggestions to address complications.</p>
              <p className="indent">To resolve experimental issues, we consulted with Professor Chen from the School of Basic Medical Sciences at Southern Medical University and also had an online discussion with Teacher Qiu from the National University of Defense Technology.</p>
              <p className="indent">Additionally, another female scientist we interviewed was Professor Ren from the School of Marxism, who provided us with advice from an ethical safety perspective. She advised that any genetic editing of organisms must be conducted in accordance with existing ethical regulations, especially adhering to the "do not disseminate principle"; at the same time, it is imperative not to release genetically modified organisms or products of genetically modified organisms from the laboratory into the environment, and any sites of genetic editing or deletion and the sequences edited must be reported to the safety committee.</p>
              <p className="indent">Subsequently, she reminded us that our project should be educational and popularizing, capable of enhancing the public's understanding and awareness of synthetic biology, and through public interaction and the organization of science popularization activities, allow more people to understand the significance, value, and application prospects of the project.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/999999999-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>

                <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/13131313-2-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              
              
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
