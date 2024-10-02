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
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Overview</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Rural outreach program</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Assistance Engineering</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>From evidence to narrative: humanistic care and inclusive practice in medicine</Nav.Link>
        <Nav.Link as={Link} to="section7" smooth={true} duration={500} className={activeLink === 'section7' ? 'active' : 'notActive'}>Inclusivity within our team</Nav.Link>
        <Nav.Link as={Link} to="section8" smooth={true} duration={500} className={activeLink === 'section8' ? 'active' : 'notActive'}>Link within the world</Nav.Link>
        <Nav.Link as={Link} to="section9" smooth={true} duration={500} className={activeLink === 'section9' ? 'active' : 'notActive'}>Conclusion</Nav.Link>
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
          
              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Overview</h2>
              <p>"We are all connected in the great web of existence. — Chief Seattle</p>
              <div className="rounded-border">
              <h4 className="center-text">To see</h4>
              <p className="indent">Through iGEM, we recognize the importance of diversity and inclusivity in the scientific community. Our team is committed to the inclusion of people from diverse backgrounds in scientific research, particularly in the areas of educational equity and social inclusion in urban and rural areas. Through a series of concrete activities, we help people of different identities and backgrounds to learn about science, in particular the importance and applications of hepatic encephalopathy and synthetic biology. Our aim is to enable everyone to do their part to improve health and promote scientific progress, and to stimulate interest in scientific research, wherever they come from.</p>
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
                <figcaption className='caption'>The team members are distributing medical supplies.</figcaption>
              </div>
              </div>

              <div className="rounded-border">
              <h4 className="center-text">Language Engineering</h4>
              <p className="indent">(1) Language-Diverse Educational Brochures:</p>
              <p className="indent">To overcome language barriers and promote inclusivity in our outreach efforts, we have created educational brochures in both Tibetan and Chinese languages for the residents of Wa Rizhen. This initiative aims to ensure that all community members, regardless of their primary language, can access and understand the information provided. By offering materials in multiple languages, we are committed to eliminating linguistic obstacles and fostering a more inclusive environment where everyone can benefit from the shared knowledge.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/2.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Tibetan version Science Popularization Pamphlet 1</figcaption>
              </div>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/3.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Tibetan version Science Popularization Pamphlet 2</figcaption>
              </div>
              <p className="indent">(2) Sign Language Interpretation:</p>
              <p className="indent">To ensure that our educational videos reach a wider audience, the SMU-GDMU team has specifically included sign language interpretation in our videos. This initiative aims to remove communication barriers for individuals who are deaf or hard of hearing, enabling them to access and understand the scientific information presented just as easily as the general audience. We consulted professional sign language interpreters to display sign language synchronously within the videos, ensuring the accuracy and clarity of the information conveyed. We believe that such efforts not only help improve the accessibility of the information but also strive to create a more inclusive environment where everyone can benefit from the knowledge we share, allowing people from different backgrounds to have equal access to scientific educational resources.</p>              
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/4.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Sign Language Version Science Popularization Video 1</figcaption>
              </div>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/5.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Sign Language Version Science Popularization Video 2</figcaption>
              </div>
              </div>
              
              <div className="rounded-border">
              <h4 className="center-text">Public Health Regimen</h4>
              <p className="indent">To promote inclusivity and enhance community engagement, the SMU-GDMU team introduced a series of self-compiled health exercises to the villagers. These exercises are designed to be both enjoyable and beneficial to physical health. By teaching these routines, we aim to encourage regular physical activity that is accessible to everyone, regardless of age or fitness level. The health exercises include simple movements that are easy to follow, ensuring that all participants can engage actively and derive health benefits. Through this initiative, we strive to create a fun and supportive environment where every individual can participate and enjoy the positive effects on their well-being, thereby fostering a sense of community and mutual support.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/6.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Health Exercise Instructional Video</figcaption>
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
                <figcaption className='caption'>Free Clinic Service Site</figcaption>
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
                <figcaption className='caption'>Health Record Form</figcaption>
                </div>
              </div>
              
              
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Assistance Engineering</h2>
              <p>To Address Regional Development Imbalances and Unequal Resource Distribution (Such as Educational Opportunities, Service Access, and Resource Acquisition), Southern Medical University (SMU) has formed a support team to assist Guangdong Medical University (GDMU) in various ways. Through this mutually beneficial partnership, SMU and GDMU demonstrate how support and collaboration can lead to significant progress for both institutions. Notably, our team consists of students from both universities, which is a vivid representation of this cooperative relationship. Through an interview with Professor Li Ling, the leader of the SMU support team and mentor of the SMU&GDMU iGEM team, we learned that the goals of this support initiative are:</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/7.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Group Photo of the Assistance Team Members</figcaption>
                </div>
              <div className="rounded-border">
              <h4 className="center-text">(1) Achieving Interdisciplinary Integration:</h4>
              <p className="indent">By forming research teams in foundational medical sciences, clinical medicine, and other fields, we aim to promote interdisciplinary integration, reflecting the interdisciplinary spirit of iGEM. For example, SMU and GMU can jointly conduct a research project on genetic disease gene therapy, combining SMU's expertise in genetics with GMU's experience in clinical applications to form complementary research strengths.</p>
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
              <h2>From evidence to narrative: humanistic care and inclusive practice in medicine</h2>
              <p>Against the backdrop of rapidly evolving medical technology, we recognise that relying on data and standardised treatments alone cannot fully meet the needs of patients. For this reason, we have turned to narrative medicine. Through an in-depth conversation with Professor Xiaolin Yang from the Centre for Narrative Medicine at Southern Medical University, we have learned how to incorporate more humanistic care into medical practice and communicate with doctors to apply it in their clinical practice. Narrative medicine emphasises an equal dialogue between doctors and patients, understanding patients' unique experiences by listening to their stories and engaging them to provide a more personalised treatment plan.</p>
              <div className="rounded-border">
              <h4 className="left-text">（1）Narrative Intervention and Prescription:</h4>
              <p className="indent">Doctors actively listen to the patient's personal story and use it as part of the treatment plan, while providing emotional support and psychological relief to enhance treatment outcomes.</p>
              <h4 className="left-text">（2）Establishment of a support network:</h4>
              <p className="indent">Create a community of patients, family members and healthcare professionals to facilitate experience sharing and resource exchange, and enhance mutual psychological support.</p>
              <h4 className="left-text">（3）Diversified participation:</h4>
              <p className="indent">Provide scholarships and internship opportunities for students from different backgrounds, especially supporting members of underrepresented groups such as women and ethnic minorities.</p>
              <h4 className="left-text">（4）Elimination of social prejudice:</h4>
              <p className="indent">Increase public awareness of hepatic encephalopathy through media and community activities to reduce misunderstanding and discrimination.</p>
              <h4 className="left-text">（5）Patient participation mechanisms:</h4>
              <p className="indent">Encourage patients to participate in their own treatment decisions, and provide channels for feedback so that patients' voices can be heard.</p>
              <h4 className="left-text">（6）Interdisciplinary co-operation:</h4>
              <p className="indent">Collaborate with experts from multiple fields to form a multidisciplinary team to provide comprehensive services and support. This philosophy holds true for iGEM, synthetic biology, and the broader sciences as well. We believe that anyone should have the opportunity to have a voice and contribute to these communities.</p>
              </div>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/15-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>11 September 2024 at the Southern Hospital Life Narrative Centre</figcaption>
              </div>
              </Element>

              <Element name="section7" className="element rounded-border" id='section7'>
              <h2>Inclusivity within our team</h2>
              <div className="rounded-border">
              <h4 className="center-text">(1) Interdisciplinary Team:</h4>
              <p className="indent">Modern science is both highly differentiated and highly integrated, while intersectional science combines differentiation and synthesis to realize the integration of science. Interdisciplinary  science is a comprehensive and interdisciplinary product, which is conducive to solving the major complex scientific problems, social problems and global problems faced by mankind.</p>
              <p className="indent">Our team is composed of students from various disciplines, including Clinical Medicine, Statistics, Bioinformatics, Psychiatry, Preventive Medicine, Medical Laboratory Technology, Biomedical Materials Science, Applied Psychology, Information Management and Information Systems, and Health Insurance Studies, etc.. This diversity contributes to inspiring thinking collisions and continuous innovation.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/8.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>SMU-GDMU iGEM Team</figcaption>
                </div>
              <h4 className="center-text">(2) Multi-Ethnic Team</h4>
              <p className="indent">Our team is a multicultural ensemble, composed of members from various ethnic backgrounds, including Tibetan, Hani, Tujia, Miao, and Han ethnicities. This diversity enriches our perspectives and enhances our ability to address challenges inclusively. By bringing together individuals from different cultural backgrounds, we foster a collaborative environment that values unique viewpoints and experiences. Each member contributes to our team's strength, allowing us to approach problems with a broader and more inclusive mindset.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/9-3.webp"
                alt="example"
                className="image-height"
                />
                <figcaption className='caption'>Team Members from Different Ethnic Groups</figcaption>
                </div>
              <h4 className="center-text">(3) Team Building</h4>
              <p className="indent">"Alone we can do so little; together we can do so much."Team building is highly valued, and we owe our success and harmonious atmosphere to it. When we build connections with each other, when we realize our responsibility for the project, when we feel a sense of belonging to the team, it's natural to dedicate to the research. We hope all future iGEM teams attach importance to team building, which undoubtedly contributes to work efficiency and most importantly, precious relationships.</p>
              </div>
              
              </Element>

              <Element name="section8" className="element rounded-border" id='section8'>
              <h2>Link within the world</h2>
              <div className="rounded-border">
              <h4 className="center-text">Female Strength</h4>
              <p className="indent">(1)Female Leadership:</p>
              <p className="indent">In promoting diversity and inclusivity and fostering female leadership, we have made many noticeable efforts. Our team leader, Fang Zhixin, a remarkable woman from the eight-year Clinical Medicine program, inspires us all with her love and strength. Her leadership creates a supportive and empowering environment for all team members, embodying the importance of diversity and inclusivity.</p>
              <p className="indent">(2) Research Innovation:</p>
              <p className="indent">To challenge the stereotype that women are not good at rational thinking or lack practical skills, it is worth noting that several key experiment designers in our team are women. Their outstanding contributions prove that these stereotypes are baseless. By showcasing the talents and abilities of our female team members, we aim to promote gender equality and inclusivity in science.</p>
              <p className="indent">(3) Interdisciplinary Collaboration:</p>
              <p className="indent">Our team consists of 16 women and 13 men, with female members bringing diverse disciplinary backgrounds such as Biostatistics, Information Management and Information Systems, Medical Laboratory Technology, Clinical Medicine, and Preventive Medicine. Through interdisciplinary collaboration, they have made critical contributions to the team, collectively driving the success of our project.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/10-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>The girls from our team are introducing our project to other teams</figcaption>
                </div>
                <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/11-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Our team leader's interaction with other teams.</figcaption>
                </div>
              </div>

              <div className="rounded-border">
              <h4 className="center-text">Collaboration</h4>
              <p className="indent">Our team collaborates with the Hepatology Center at Nanfang Hospital and the Microecology Treatment Center at Zhujiang Hospital. Under their guidance, we collected serum samples from patients with cirrhosis before undergoing TIPS surgery and performed metabolomics testing. We also followed up with the patients for three months to record the occurrence of HE.</p>
              <p className="indent">Our team participated in the South China Exchange Conference, where we shared our project progress and experiences with Shenzhen University, Southern University of Science and Technology, and others.</p>
              <p className="indent">Our team was invited to participate in the 11th China Regional iGEMer Exchange Conference (CCIC), where we engaged in in-depth discussions with other teams regarding project optimization and improvements. This enhanced our collaborative abilities and promoted the development of each team's projects.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/12.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>11th China Regional iGEMer Exchange Conference</figcaption>
                </div>
                <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/13-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>8th iGEM South China Exchange Conference</figcaption>
                </div>
                <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/14.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>SMU-GDMU iGEM and AIS-China exchange at Southern Medical University</figcaption>
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
                src="https://static.igem.wiki/teams/5378/award-inclusivity/15-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>11 September 2024 at the Southern Hospital Life Narrative Centre</figcaption>
                </div>
                <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/16.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>Exchanging with teachers from Shenzhen University</figcaption>
                </div>
                <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/award-inclusivity/17-1.webp"
                alt="example"
                className="image-wide"
                />
                <figcaption className='caption'>"iGEMers exchanging suggestions" or "iGEMers exchanging advice</figcaption>
                </div>
              
              </div>

              </Element>

              <Element name="section9" className="element rounded-border" id='section9'>
              <h2>Conclusion</h2>
              <div className="rounded-border">
              <h4 className="center-text">Maximizing Inclusivity</h4>
              <p className="indent">Through these measures, our team has succeeded in increasing the participation and representation of people from different backgrounds in scientific research. The Rural Outreach Programme and the Language Project remove information and language barriers and make scientific knowledge more accessible to a wider range of people. Project Help and Project Ethics, on the other hand, helped disadvantaged groups overcome barriers through resource sharing and financial assistance. These efforts not only enhance the scientific value of the projects, but also lay a solid foundation for building a more inclusive and equitable scientific community. We hope that through these practical actions, we can motivate more people to understand iGEM, and can inspire more people to participate in scientific research, so that everyone's voice can be heard, and everyone has the opportunity to be a force for change in the world.</p>
              </div>
              </Element>

            

        </div>
        

          
        
      </div>
    </>
  );
}
