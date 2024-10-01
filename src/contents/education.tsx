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
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Science Brochure - Foundation Project</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Patient level - Care Project</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>School level - Universalisation Project</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Regional level - Coverage Project</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>World Level - Extension Project</Nav.Link>
        <Nav.Link as={Link} to="section7" smooth={true} duration={500} className={activeLink === 'section7' ? 'active' : 'notActive'}>Conclusions and outlook</Nav.Link>
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


export function Education() { // sidenavbar begin
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
    <div className="custom-header-education">
<h1 className="centered-title">
<img 
                src="https://static.igem.wiki/teams/5378/header/education.png"
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
                 <h1>1.overview</h1>
                 <p className="indent">This year, our team has devoted a great deal of effort to the field of education, as we are convinced that the development and popularisation of synthetic biology cannot be achieved without the broad participation and support of the public, which is at the heart of science education.</p>
                 <p className="indent">To this end, we have elaborated a series of promotional materials, taken the initiative to reach out to patient groups, carried out science popularisation activities in schools, and worked to expand our regional influence while actively speaking out on the international stage. At the local level, in particular, we are working hard to reach out to a wider range of people, with a view to creating a far-reaching social impact.</p>
                 <p className="indent">At the same time, we have established a systematic educational mechanism that aims to transform high school students from passive recipients of knowledge to active practitioners at the university level, thus forming a sustainable educational loop.</p>
                <div className='image-container'>
                <img 
                src="https://static.igem.wiki/teams/5378/overview.webp"
                alt="example"
                className="image-wide"
                  />  
                 <figcaption className='caption'>1234567687</figcaption>
                </div>
               </Element>
          
              <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
              </div>
          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h1>Science Brochure - Foundation Project</h1>
                <p className="indent">In order to help you understand hepatic encephalopathy more easily and comprehensively, we have created the following science brochure. It begins with a brief introduction to the functions of the liver, followed by a brief disease overview of hepatic encephalopathy. After a brief understanding of hepatic encephalopathy, the causes, diagnosis and prevention of the disease are introduced to the public. For patients with hepatic encephalopathy, we also hope that by introducing the pathogenesis and staging of the disease, we can help them better understand their own situation and target their treatment and care, so as to mitigate the development of the disease and even achieve the effect of treatment and cure.</p>
                <p className="indent">This pamphlet will support a series of activities that we will follow up. Not only does it provide the public with easy-to-understand medical knowledge, it will also serve as an educational tool to complement our talks in schools, community centres and other venues. Through these activities, we can further expand the reach of our science outreach, ensure that more people have access to the necessary health information, and raise the level of awareness of hepatic encephalopathy in the community as a whole. </p>
                <div className='image-container'>
                <img 
                src="https://static.igem.wiki/teams/5378/pdf/brochures1.webp"
                alt="example"
                className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                <img 
                src="https://static.igem.wiki/teams/5378/pdf/brochures2.webp"
                alt="example"
                className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
                <h1>Patient level - Care Project</h1>
                <p className="indent">In order to gain a deeper understanding of the actual needs of our patients, we plan to conduct an exhaustive interview with them. Our interview will cover a wide range of aspects such as disease experience, medical history, abdominal infections and personal feelings, aiming to gain a comprehensive understanding of the patient's life situation and treatment experience. Through this interview, we hope to not only educate patients on disease management and self-care, but also pay special attention to collecting feedback from patients on our existing services and to understand where they would like us to improve or provide additional support. </p>
                <div className='image-container'>
                <img 
                src="https://static.igem.wiki/teams/5378/patients1.webp"
                alt="example"
                className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                <img 
                src="https://static.igem.wiki/teams/5378/patients2.webp"
                alt="example"
                className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>

                </div>
                
                <p className="indent">In particular, we will introduce a new treatment option - the oral administration of yoghurt containing specific probiotics to help alleviate the condition and reduce inflammation - and ask patients about their expectations and suggestions for such new treatments. We expect that through this feedback, we will be able to more accurately meet the needs of our patients, improve our programme design, and enhance patient outcomes and quality of life.</p>
              </Element>


              <Element name="section4" className="element rounded-border" id='section4'>
                <h1>School level - Universalisation Project</h1>
                <p className="bold-font">(1) Lectures for high school students - recipients of knowledge</p>
                <p className="indent">In order to promote the knowledge of synthetic biology and to enhance the interest of young people in this cutting-edge field of science and technology, we have successfully travelled to Xiangyin No. 1 High School in Hunan Province, China and Foshan High School in Guangdong Province to deliver in-school lectures. During this event, high school students showed great enthusiasm and curiosity as active absorbers of knowledge. The lectures focused on the basic concepts of synthetic biology and its applications, with a special introduction to our team's research project on tackling hepatic encephalopathy by means of synthetic biology.</p>
                <div className='col-8'>
                <img 
                  src="https://static.igem.wiki/teams/5378/037e7fc08b8f8518098e3af706f9eef.webp"
                  alt="example"
                  className="responsive-img"
                />  
                 <figcaption className='caption'>1234567687</figcaption>
                </div>
                <div className='col-4'>
                <img 
                  src="https://static.igem.wiki/teams/5378/b4c93550a4f89a9080ca9516245d152.webp"
                  alt="example"
                  className="responsive-img"
                />  
                 <figcaption className='caption'>1234567687</figcaption>
                </div>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/high-school1.webp"
                  alt="example"
                  className="image-wide"
                />
                <figcaption className='caption'>1234567687</figcaption>
                </div>
                <figcaption className='caption'>1234567687</figcaption>
                <p className="indent">After the lecture, a questionnaire was distributed to the students to assess whether they had increased their understanding of the field and their interest in synthetic biology through the lecture. The questionnaire was designed to include questions of multiple dimensions, such as the understanding of the basic concepts of synthetic biology, the level of interest in the content of the lecture, and the willingness to participate in related activities in the future.</p>
   
                <p className="indent">By collecting and analysing students' feedback, we can more accurately grasp the current situation of young people's knowledge of synthetic biology, and then adjust and improve the content of our lectures to ensure the effectiveness and attractiveness of our educational activities.</p>
                <p className="indent">This process is not only a one-way information transfer, but also a two-way communication and feedback mechanism. Based on the valuable feedback provided by students, we have optimised and adjusted some of the lectures, such as adding more illustrative examples and interactive sessions to enhance students' participation and depth of understanding.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/2aa0ec5a9fb4f335edaec4f17198721.webp"
                  alt="example"
                  className="image-wide"
                />  
                 <figcaption className='caption'>1234567687</figcaption>
                </div>

                <p></p>
                <p></p>
                <p className="bold-font">(2) University Lectures - Practitioners of Knowledge</p>
                <p className="indent">After the completion of science education at the high school level, we further set our sights on university campuses, aiming to train university students to become practitioners of knowledge. We first distributed pamphlets about hepatic encephalopathy on campus, and at the same time, we distributed questionnaires to survey college students about their interest in synthetic biology and their current level of knowledge.</p>
                <p className="indent">The survey found that most university students have some basic knowledge about hepatic encephalopathy and synthetic biology, but it is not comprehensive and in-depth enough. Therefore, we have strengthened the popularisation of science in the publicity process to help people better understand these contents through in-depth explanations. This initiative was widely welcomed, with many students reporting a clearer understanding of these areas.</p>
                <p className="indent">In view of the keen interest shown by the university students, we organised a science talk dedicated to hepatic encephalopathy and synthetic biology, covering the basics, the latest research results and development trends. The lecture was well received by the participants, many of whom expressed that they had benefited from it and developed a deeper interest in the related fields.</p>
                <p className="indent">After the lecture, the participating members had an in-depth and friendly discussion and exchange with our team. Through this exchange, we clarified the interest points of university students and collected valuable suggestions and feedback. These feedbacks pointed out the direction for our subsequent educational work, and we will continue to optimise the content of science popularisation and enhance the interactivity, aiming to benefit more people.</p>
                

                <p></p>
                <p></p>
                <p className="bold-font">(3) Guided Laboratory Tours - A Two-Way Touch of Knowledge</p>
                <p className="indent">We had the honour of inviting the iGEM team from Spirit Spider Labs to visit our Pathogenic Microbiology Laboratory and experience a number of fun lab activities first hand.</p>
                <p className="indent">Under our guidance, they had an initial training on mosquito rearing techniques and operations, covering the basics of mosquito biology, environmental settings and rearing management. Through this training, they gained a preliminary understanding of the full cycle of rearing techniques from egg hatching to adult, and mastered how to adjust the laboratory environment to suit the needs of different mosquitoes. Particularly worth mentioning is that we briefly introduced the basic concepts and tools of synthetic biology, such as CRISPR-Cas9 gene editing technology, which helped them understand how to optimise the rearing conditions of mosquitoes and improve their resistance to diseases through gene editing.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/lingzhu1.webp"
                  alt="example"
                  className="image-wide"
                />  
                <figcaption className='caption'>1234567687</figcaption>

                </div>
                


                <p className="indent">Meanwhile, the iGEM team from Spirit Spider Lab also brought their latest research results and innovative ideas in the field of synthetic biology. They shared their experience in gene circuit design and biosensor development, which provided us with valuable reference and inspiration. This two-way communication not only enriches our research vision, but also promotes the deep integration of technology, methodology and concepts between both sides.</p>
                <p className="indent">Through this activity, we not only improved the professional and technical level of our team members, but also strengthened the two-way educational outreach between us and the iGEM team of Spirit Spider Labs. We believe that this two-way communication and educational outreach will make a greater contribution to promoting the development of synthetic biology and the level of iGEM competition.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/lingzhu2.webp"
                  alt="example"
                  className="image-wide"
                />                
                <figcaption className='caption'>1234567687</figcaption>
                </div>
                

              </Element>


              <Element name="section5" className="element rounded-border" id='section5'>
                <h1>Regional level - Coverage Project</h1>
                <p className="bold-font">(1) Mid-Autumn Festival Community Bazaar Promotion</p>
                <p className="indent">During this year's Mid-Autumn Festival, we followed the community volunteers to participate in the Mid-Autumn Cultural and Creative Sale in front of the local mall with heavy traffic. We cleverly incorporated the concept of synthetic biology into the cultural and creative products we sold, which not only attracted the attention of many citizens, but also actively promoted the knowledge of synthetic biology and popularised the content of hepatic encephalopathy to the public during the publicity process. Through this form of education and fun, we successfully raised public awareness of synthetic biology and hepatic encephalopathy.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/sun1.webp"
                  alt="example"
                  className="image-height"
                  />
                  <figcaption className='caption'>1234567687</figcaption>

                <img 
                  src="https://static.igem.wiki/teams/5378/sun2.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                
                <p>  </p>

                <p className="bold-font">(2) Community science outreach activities</p>
                <p className="indent">We also contacted a social work service station, and with their support, we went into the surrounding community together to promote science. By distributing pamphlets and giving on-site lectures, we popularised the knowledge of synthetic biology and introduced the topic of hepatic encephalopathy in detail to the community residents. This activity was widely recognised and supported by the community residents.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/social-work-station.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                
                <p>  </p>

                <p className="bold-font">(3) Popular science lectures for the elderly</p>
                <p className="indent">During the popularisation of the science, we found that adults are more concerned about their health compared to university students, especially the elderly who, as a vulnerable group to hepatic encephalopathy, show a keen interest in this disease.</p>
                <p className="indent">Therefore, we have specially arranged popularisation lectures on hepatic encephalopathy for the local elderly university. Through these lectures, we not only helped the elderly to better understand the causes, symptoms and prevention methods of hepatic encephalopathy, but also enhanced their understanding of the application of synthetic biology in the medical field.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/society.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                

                <p className="indent">Based on the previous popularisation campaigns in schools and the advice received, we have adjusted the narrative. These activities not only raised public health awareness, but also accumulated valuable experience for our popularisation work.  </p>
              </Element>

              <Element name="section6" className="element rounded-border" id='section6'>
                <h1>World Level - Extension Project</h1>
                <p className="bold-font">(1) Social media outreach</p>
                <p className="indent">After a series of missions, we thought we had better results, but realised the limitations of the platform.In order to further expand our influence, we published our results and iGEM news on social media platforms such as WeChat, Video and Xiaohongshu. As a newly established team, with strong support from the university and through the joint efforts of our instructors and students, we attracted a large audience on social media channels.</p>
                <p className="indent">As part of our initiative to make science more accessible, we run an account on Little Red Book that focuses on the field of hepatic encephalopathy. We publish fortnightly posts, which are written, edited and illustrated by our team themselves, and are designed to help the public better understand scientific issues.Through these posts, we hope to stimulate the curiosity of users on social media platforms about current scientific issues and attract the attention of professionals and students. We believe that it is important to keep abreast of current events and think critically about scientific issues in today's world. Therefore, we provide interesting reads that are relevant to life, combine social facts with scientific issues, and introduce scientific research in an easy-to-understand way.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/red-book.webp"
                  alt="example"
                  className="image-height"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                

                <p className="indent">Through these efforts, we have not only raised public awareness of synthetic biology and hepatic encephalopathy, but also established a platform for interaction with our audience and collected valuable feedback, which provides a basis for further optimisation of our science popularisation content. We believe that through continuous efforts, our popularisation of science will be able to better serve the community and enhance the public's scientific literacy and health awareness. </p>

                <p className="bold-font">(2) Remote Mountain Missions</p>
                <p className="indent">After receiving suggestions from social media users, we travelled to Sichuan Province to educate local residents about hepatic encephalopathy (HE), as detailed in inclusivity, and organised a number of seminars to raise awareness of hepatic encephalopathy and its prevention and treatment, emphasising the importance of early diagnosis and standardised treatment. These lectures not only disseminated scientific health knowledge, but also enhanced the villagers' ability in self-health management.</p>
                <p className="indent">Free health checks were provided during the event and a detailed health profile was created for each participant. For those who needed further treatment, professional medical advice was provided to ensure that they could receive the necessary support.</p>
                <p className="indent">Through these initiatives, we have effectively raised local residents' awareness of hepatic encephalopathy, promoted health management, and contributed positively to the improvement of public health in the area.</p>
              
                <p className="bold-font">(3) "Science+" Synthetic Biology Competition for Young Talents in Bright Science City</p>
                <p className="indent">Our team also participated in the 3rd Synthetic Biology Innovation Competition (SynBio Challenges) organised by the Synthetic Biology Branch of the Chinese Society of Bioengineering. Our project focuses on the use of synthetic biology technology to treat hepatic encephalopathy, which is a very challenging medical problem. At the conference, we detailed how to alleviate the symptoms of hepatic encephalopathy by means of gene editing and metabolic engineering.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/science-1.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                

                <p className="indent">The conference attracted 147 teams from more than 60 universities around the world, with more than 450 students interacting on site. Our presentations attracted a lot of attention, with over 100 audience members listening attentively to our presentations and engaging in lively discussions with us after the conference.</p>
                <p className="indent">This educational outreach not only demonstrated the great potential of synthetic biology in solving practical medical problems, but also stimulated the strong interest and enthusiasm of other young students in this field. We believe that through this two-way educational exchange, we can not only promote the development of synthetic biology, but also inject new vitality into the iGEM competition and research in related fields.</p>
                <div className='image-container'>
                <img 
                  src="https://static.igem.wiki/teams/5378/ed5600ea233495db9ea03688d34f64e.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                <img 
                  src="https://static.igem.wiki/teams/5378/9be818cffa6a960902ea3bacf9f6d7f.webp"
                  alt="example"
                  className="image-wide"
                  />
                  <figcaption className='caption'>1234567687</figcaption>
                </div>
                
                <p className="indent"></p>


                <p className="bold-font">(4) Production of a synthetic biology handbook</p>
                <p className="indent"> In order to expand our influence, we have participated in the joint editing of the Ethics Handbook for Synthetic Biology, led by CJHU-JLU-China, and the details of the handbook can be found in the collaboration. The Handbook, whose contents are described in detail in the Collaboration, emphasises the importance of future education and training, and advocates the promotion of ethical awareness among researchers and the general public through a variety of means, in order to promote the healthy development of the field of synthetic biology.</p>
                <p className="indent">Since its release, it has not only served as an important reference document for researchers and policy makers, but has also bridged the communication gap between the scientific community and the public, promoting public understanding and discussion of ethical issues in synthetic biology.</p>
              </Element>

              <Element name="section7" className="element rounded-border" id='section7'>
                <h1>Conclusions and outlook</h1>
                <p className="indent">Looking back on our educational outreach work in the past year, our team has achieved fruitful results in science publicity, patient care, school education, regional coverage and world outreach. We have not only spread the knowledge of synthetic biology and hepatic encephalopathy to the public through various channels, but also established a two-way communication and feedback mechanism to continuously optimise the educational content and methods to ensure their effectiveness and attractiveness.</p>
                <p className="indent">This two-way communication and feedback mechanism is the key to the development of our educational work, and it has also helped us to expand our influence. Through questionnaires and interviews, we have collected valuable feedback from different groups and adjusted the content of science popularisation and the form of activities based on such feedback; through social media platforms, we have established closer ties with the public and attracted the attention and participation of a wider audience. Meanwhile, we also actively participate in international exchange activities, sharing our research results and experiences with young scholars around the world and contributing to the development of synthetic biology.</p>
                <p className="indent">Looking ahead, we will continue to adhere to the educational concept of two-way feedback to continuously improve the quality and impact of our science popularisation work. We will further improve the educational content and develop more diversified and interactive science popularisation activities to meet the needs of different groups. At the same time, we will also strengthen our interaction with the public to collect more feedback and continuously improve our work based on such feedback.</p>
                <p className="indent">We believe that through continuous efforts, our educational work will be able to better serve the community, enhance the public's scientific literacy and health awareness, and make greater contributions to the development and popularisation of synthetic biology and hepatic encephalopathy.</p>
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
