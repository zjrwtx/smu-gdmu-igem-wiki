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
              <h4 className="center-text">Public Health Regimen</h4>
              <p className="indent">To promote inclusivity and enhance community engagement, the SMU-GDMU team introduced a series of self-compiled health exercises to the villagers. These exercises are designed to be both enjoyable and beneficial to physical health. By teaching these routines, we aim to encourage regular physical activity that is accessible to everyone, regardless of age or fitness level. The health exercises include simple movements that are easy to follow, ensuring that all participants can engage actively and derive health benefits. Through this initiative, we strive to create a fun and supportive environment where every individual can participate and enjoy the positive effects on their well-being, thereby fostering a sense of community and mutual support.</p>
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
              <h4 className="center-text">Free Medical Services</h4>
              <p className="indent">Not only that, but to better serve the villagers, the iGEM team, in collaboration with town government and health clinic staff, also provided comprehensive free medical services to the left-behind villagers by going deep into the villages. At the same time, the team also had in-depth exchanges with the local health clinic, collected detailed information about hepatic encephalopathy, and compiled a list of villagers. Starting with the patients who needed the most attention, team members conducted one-on-one visits, communication, and health guidance in each household. We hope that through this initiative, we can help them understand and prevent hepatic encephalopathy, and eliminate the information barriers associated with living in rural areas.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/555555-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
               </div>
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
              <h2>Assistance Engineering</h2>
              <p>To Address Regional Development Imbalances and Unequal Resource Distribution (Such as Educational Opportunities, Service Access, and Resource Acquisition)，Southern Medical University (SMU) has formed a support team to assist Guangdong Medical University (GMU) in various ways. Through this mutually beneficial partnership, SMU and GMU demonstrate how support and collaboration can lead to significant progress for both institutions. Notably, our team consists of students from both universities, which is a vivid representation of this cooperative relationship. Through an interview with Professor Li Ling, the leader of the SMU support team and mentor of the SMU&GDMU iGEM team, we learned that the goals of this support initiative are:</p>
              <div className="rounded-border">
              <h4 className="center-text">（1）Achieving Interdisciplinary Integration:</h4>
              <p className="indent">By forming research teams in foundational medical sciences, clinical medicine, and other fields, we aim to promote interdisciplinary integration, reflecting the interdisciplinary spirit of iGEM. For example, SMU and GMU can jointly conduct a research project on genetic disease gene therapy, combining SMU's expertise in genetics with GMU's experience in clinical applications to form complementary research strengths.</p>
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
              <h4 className="center-text">（2）Building a 'Collaborative Talent Cultivation' System:</h4>
              <p className="indent">Through joint talent cultivation programs, such as integrated undergraduate-master’s degree programs and exchange student initiatives, we provide students with broader learning platforms, emphasizing iGEM's commitment to talent development. Additionally, we implement summer internship programs, allowing students to conduct research internships in the laboratories of the partner university, enhancing practical experience and research capabilities.</p>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">（3）Research Collaboration:</h4>
              <p className="indent">The support team facilitates the establishment of shared laboratories and research centers, promoting the sharing of research resources and enhancing collaboration between researchers in synthetic biology and related fields, reflecting iGEM's ethos of shared research. Furthermore, the support team regularly organizes joint research projects, inviting researchers from both sides to apply for national and international research grants, driving high-level research outcomes.</p>
              </div>

              <div className="rounded-border">
              <h4 className="center-text">（4）Achieving Equal Access to Educational Resources:</h4>
              <p className="indent">The support team promotes the opening of course resources and online education platforms, benefiting more students from both universities, reflecting iGEM's principle of equitable access to educational resources. Additionally, student exchange programs are established, and regular academic symposiums are held to promote interaction and cooperation among students, eliminating barriers caused by unequal distribution of educational resources.</p>
              <p className="indent">Through this support process, both institutions ultimately benefit and achieve a win-win situation. SMU is not only supporting GMU but also achieving its own growth and progress. For example, by jointly undertaking national-level research projects, both research teams can showcase their achievements on high-level platforms, enhancing research capabilities and innovation. Simultaneously, shared resources and best practices elevate the overall quality of education. Moreover, this support initiative helps both institutions build a broader academic and professional network, increasing opportunities for future collaborations.</p>
              </div>
              
               </Element>

              <Element name="section6" className="element rounded-border" id='section6'>
              <h2>Ethical Engineering</h2>
              <p>By integrating evidence-based medicine with narrative medicine, our team aims to enhance the quality of the doctor-patient relationship, making the medical process more humane. Specifically, we pay special attention to patient groups facing additional challenges due to economic, social, or other reasons, striving to eliminate the barriers they face so that everyone can benefit.</p>
              <div className="rounded-border">
              <h4 className="center-text">（1）Eliminating Economic Pressures:</h4>
              <p className="indent">Providing financial assistance and medical subsidies to alleviate the economic burden on patients. For example, collaborating with charitable organizations to offer free or low-cost medical services to economically disadvantaged patients.</p>
              <h4 className="center-text">（2）Eliminating Social Stigmas:</h4>
              <p className="indent">Conducting public education campaigns to dispel misunderstandings and reduce discrimination against patients with hepatic encephalopathy. Through media and community events, we aim to raise public awareness about hepatic encephalopathy and reduce societal biases.</p>
              <h4 className="center-text">（3）Promoting Multidimensional Participation:</h4>
              <p className="indent">Our team is dedicated to promoting patient involvement, community support, and interdisciplinary collaboration. First, by collecting patient feedback and suggestions, we better understand their needs to develop more suitable treatment plans. Second, establishing community support systems to provide psychological support and practical assistance, helping to address real-life issues faced by patients. Additionally, we have formed an interdisciplinary team including doctors, nurses, psychologists, and social workers to provide comprehensive support to patients.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/888888888-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>12345678</figcaption>
                </div>
              
              </div>

              </Element>

              <Element name="section7" className="element rounded-border" id='section7'>
              <h2>Inclusivity within our team</h2>
              <div className="rounded-border">
              <h4 className="center-text">（1）Interdisciplinary Team:</h4>
              <p className="indent">Modern science is both highly differentiated and highly integrated, while intersectional science combines differentiation and synthesis to realize the integration of science. Interdisciplinary  science is a comprehensive and interdisciplinary product, which is conducive to solving the major complex scientific problems, social problems and global problems faced by mankind.</p>
              <p className="indent">Our team is composed of students from various disciplines, including Clinical Medicine, Statistics, Bioinformatics, Psychiatry, Preventive Medicine, Medical Laboratory Technology, Biomedical Materials Science, Applied Psychology, Information Management and Information Systems, and Health Insurance Studies, etc.. This diversity contributes to inspiring thinking collisions and continuous innovation.</p>
              <h4 className="center-text">（2）Multi-Ethnic Team</h4>
              <p className="indent">Our team is a multicultural ensemble, composed of members from various ethnic backgrounds, including Tibetan, Hani, Tujia, Miao, and Han ethnicities. This diversity enriches our perspectives and enhances our ability to address challenges inclusively. By bringing together individuals from different cultural backgrounds, we foster a collaborative environment that values unique viewpoints and experiences. Each member contributes to our team's strength, allowing us to approach problems with a broader and more inclusive mindset.</p>
              <h4 className="center-text">（3）Team Building</h4>
              <p className="indent">"Alone we can do so little; together we can do so much."Team building is highly valued, and we owe our success and harmonious atmosphere to it. When we build connections with each other, when we realize our responsibility for the project, when we feel a sense of belonging to the team, it's natural to dedicate to the research. We hope all future iGEM teams attach importance to team building, which undoubtedly contributes to work efficiency and most importantly, precious relationships.</p>
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
