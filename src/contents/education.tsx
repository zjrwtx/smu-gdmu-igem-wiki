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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>1.overview</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>2.Production of science brochures</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>3.Initial outreach on university campuses</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>4.Community involvement</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>5.High School Education</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>6.Mountain Mission</Nav.Link>
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
          
              
              <Element name="1.overview" className="element rounded-border" id='1.overview'>
                 <h4>1.overview</h4>
                 <p>This year, our team has devoted a great deal of effort to the field of education, as we are convinced that the development and popularisation of synthetic biology cannot be achieved without the broad participation and support of the public, which is at the heart of science education.</p>
                 <p>To this end, we have elaborated a series of promotional materials, taken the initiative to reach out to patient groups, carried out science popularisation activities in schools, and worked to expand our regional influence while actively speaking out on the international stage. At the local level, in particular, we are working hard to reach out to a wider range of people, with a view to creating a far-reaching social impact.</p>
                 <p>At the same time, we have established a systematic educational mechanism that aims to transform high school students from passive recipients of knowledge to active practitioners at the university level, thus forming a sustainable educational loop.</p>
               </Element>
          
               <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
          
              
              <Element name="Science Brochure - Foundation Project" className="element rounded-border" id='Science Brochure - Foundation Project'>
                <h2>Science Brochure - Foundation Project</h2>
                <p>In order to help you understand hepatic encephalopathy more easily and comprehensively, we have created the following science brochure. It begins with a brief introduction to the functions of the liver, followed by a brief disease overview of hepatic encephalopathy. After a brief understanding of hepatic encephalopathy, the causes, diagnosis and prevention of the disease are introduced to the public. For patients with hepatic encephalopathy, we also hope that by introducing the pathogenesis and staging of the disease, we can help them better understand their own situation and target their treatment and care, so as to mitigate the development of the disease and even achieve the effect of treatment and cure.</p>
                <p>This pamphlet will support a series of activities that we will follow up. Not only does it provide the public with easy-to-understand medical knowledge, it will also serve as an educational tool to complement our talks in schools, community centres and other venues. Through these activities, we can further expand the reach of our science outreach, ensure that more people have access to the necessary health information, and raise the level of awareness of hepatic encephalopathy in the community as a whole. </p>
                <img 
                src="https://static.igem.wiki/teams/5378/pdf/brochures1.webp"
                alt="example"
                className="responsive-img"
              />
                <img 
                src="https://static.igem.wiki/teams/5378/pdf/brochures2.webp"
                alt="example"
                className="responsive-img"
              />
              </Element>
          

              <Element name="Patient level - Care Project" className="element rounded-border" id='Patient level - Care Project'>
                <h2>Patient level - Care Project</h2>
                <p>In order to gain a deeper understanding of the actual needs of our patients, we plan to conduct an exhaustive interview with them. Our interview will cover a wide range of aspects such as disease experience, medical history, abdominal infections and personal feelings, aiming to gain a comprehensive understanding of the patient's life situation and treatment experience. Through this interview, we hope to not only educate patients on disease management and self-care, but also pay special attention to collecting feedback from patients on our existing services and to understand where they would like us to improve or provide additional support. </p>
                <p>In particular, we will introduce a new treatment option - the oral administration of yoghurt containing specific probiotics to help alleviate the condition and reduce inflammation - and ask patients about their expectations and suggestions for such new treatments. We expect that through this feedback, we will be able to more accurately meet the needs of our patients, improve our programme design, and enhance patient outcomes and quality of life.</p>
              </Element>


              <Element name="School level - Universalisation Project" className="element rounded-border" id='School level - Universalisation Project'>
                <h2>School level - Universalisation Project</h2>
                <h3>Lectures for high school students - recipients of knowledge</h3>
                <p>In order to promote the knowledge of synthetic biology and to enhance the interest of young people in this cutting-edge field of science and technology, we have successfully travelled to Xiangyin No. 1 High School in Hunan Province, China and Foshan High School in Guangdong Province to deliver in-school lectures. During this event, high school students showed great enthusiasm and curiosity as active absorbers of knowledge. The lectures focused on the basic concepts of synthetic biology and its applications, with a special introduction to our team's research project on tackling hepatic encephalopathy by means of synthetic biology.</p>
                <p>After the lecture, a questionnaire was distributed to the students to assess whether they had increased their understanding of the field and their interest in synthetic biology through the lecture. The questionnaire was designed to include questions of multiple dimensions, such as the understanding of the basic concepts of synthetic biology, the level of interest in the content of the lecture, and the willingness to participate in related activities in the future.</p>
                <img 
                  src="https://static.igem.wiki/teams/5378/social-work-station.webp"
                  alt="example"
                  className="responsive-img"
                />           
                <p>By collecting and analysing students' feedback, we can more accurately grasp the current situation of young people's knowledge of synthetic biology, and then adjust and improve the content of our lectures to ensure the effectiveness and attractiveness of our educational activities.</p>
                <p>This process is not only a one-way information transfer, but also a two-way communication and feedback mechanism. Based on the valuable feedback provided by students, we have optimised and adjusted some of the lectures, such as adding more illustrative examples and interactive sessions to enhance students' participation and depth of understanding.</p>

                <h3>University Lectures - Practitioners of Knowledge</h3>
                <p>After the completion of science education at the high school level, we further set our sights on university campuses, aiming to train university students to become practitioners of knowledge. We first distributed pamphlets about hepatic encephalopathy on campus, and at the same time, we distributed questionnaires to survey college students about their interest in synthetic biology and their current level of knowledge.</p>
                <p>The survey found that most university students have some basic knowledge about hepatic encephalopathy and synthetic biology, but it is not comprehensive and in-depth enough. Therefore, we have strengthened the popularisation of science in the publicity process to help people better understand these contents through in-depth explanations. This initiative was widely welcomed, with many students reporting a clearer understanding of these areas.</p>
                <p>In view of the keen interest shown by the university students, we organised a science talk dedicated to hepatic encephalopathy and synthetic biology, covering the basics, the latest research results and development trends. The lecture was well received by the participants, many of whom expressed that they had benefited from it and developed a deeper interest in the related fields.</p>
                <p>After the lecture, the participating members had an in-depth and friendly discussion and exchange with our team. Through this exchange, we clarified the interest points of university students and collected valuable suggestions and feedback. These feedbacks pointed out the direction for our subsequent educational work, and we will continue to optimise the content of science popularisation and enhance the interactivity, aiming to benefit more people.</p>
                
                <h3>Guided Laboratory Tours - A Two-Way Touch of Knowledge</h3>
                <p>We had the honour of inviting the iGEM team from Spirit Spider Labs to visit our Pathogenic Microbiology Laboratory and experience a number of fun lab activities first hand.</p>
                <p>Under our guidance, they had an initial training on mosquito rearing techniques and operations, covering the basics of mosquito biology, environmental settings and rearing management. Through this training, they gained a preliminary understanding of the full cycle of rearing techniques from egg hatching to adult, and mastered how to adjust the laboratory environment to suit the needs of different mosquitoes. Particularly worth mentioning is that we briefly introduced the basic concepts and tools of synthetic biology, such as CRISPR-Cas9 gene editing technology, which helped them understand how to optimise the rearing conditions of mosquitoes and improve their resistance to diseases through gene editing.</p>
                <p>Meanwhile, the iGEM team from Spirit Spider Lab also brought their latest research results and innovative ideas in the field of synthetic biology. They shared their experience in gene circuit design and biosensor development, which provided us with valuable reference and inspiration. This two-way communication not only enriches our research vision, but also promotes the deep integration of technology, methodology and concepts between both sides.</p>
                <p>Through this activity, we not only improved the professional and technical level of our team members, but also strengthened the two-way educational outreach between us and the iGEM team of Spirit Spider Labs. We believe that this two-way communication and educational outreach will make a greater contribution to promoting the development of synthetic biology and the level of iGEM competition.</p>


                <img 
                  src="https://static.igem.wiki/teams/5378/society.webp"
                  alt="example"
                  className="responsive-img"
                />
                <p>During this year's Mid-Autumn Festival, we followed the community volunteers and went to the front of the local mall, which has a high traffic flow, to follow them in the Mid-Autumn Cultural and Creative Sale. We combined the concept of synthetic biology in the artifacts we sold, and actively promoted synthetic biology and hepatic encephalopathy to the public in the process.</p>
                <img 
                  src="https://static.igem.wiki/teams/5378/sun1.webp"
                  alt="example"
                  className="responsive-img"
                />
                <img 
                  src="https://static.igem.wiki/teams/5378/sun2.webp"
                  alt="example"
                  className="responsive-img"
                />
              </Element>

              <Element name="5.High School Education" className="element rounded-border" id='5.High School Education'>
              <h2>5.High School Education</h2>
              <p className="indent">In order to further promote the knowledge of synthetic biology and hepatic encephalopathy prevention and treatment, we travelled to No.1 High School in Huizhou, Guangdong Province and conducted an educational activity. The activity included showing the project promotional video, introducing the basic knowledge of synthetic biology and hepatic encephalopathy, and interactive question and answer sessions. The application of synthetic biology in the diagnosis and treatment of hepatic encephalopathy was demonstrated through specific cases.</p>
              <p className="indent">After the activity, we conducted a questionnaire survey, and the results showed that the students' understanding of the relevant knowledge was significantly improved. Many students expressed a strong interest in synthetic biology, and some even expressed a desire to engage in related research in the future. Students also gained new knowledge about the prevention and treatment of hepatic encephalopathy, and some of them said they would share this knowledge with their family and friends. In addition, the students gave us valuable suggestions for more practical activities and in-depth lectures in the future to expand the scope of knowledge dissemination. Overall, through this educational activity in Huizhou No. 1 Middle School, we not only successfully popularised the knowledge of synthetic biology and hepatic encephalopathy among the students, but also stimulated their enthusiasm for scientific exploration, laying a foundation for training future scientists and technical talents.</p>
              </Element>

              <Element name="6. Mountain Mission" className="element rounded-border" id='6. Mountain Mission'>
              <h2>6. Mountain Mission</h2>
              <p className="indent">After accepting the students' suggestion, on 14 July 2024, we joined hands with a doctoral medical team from Southern Medical University to travel to Wari Town, Daofu County, Sichuan Province, a mountainous area at an altitude of 3,000 metres above sea level, to gain a deeper understanding of, and to help improve, the hepatic encephalopathy problem of the local population. In collaboration with the local health hospital, we organised interviews and panel discussions to collect valuable first-hand information. In addition, we provided free health checks, disseminated knowledge about the prevention and treatment of hepatic encephalopathy, improved the villagers' health records, and paid special attention to patients with more serious conditions to provide personalised support. Through these efforts, we raised local residents' awareness of hepatic encephalopathy and contributed to the promotion of public health in the area.</p>
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
