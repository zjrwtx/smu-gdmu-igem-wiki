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
<h1 className="centered-title">EDUCATION</h1>
</div>
      <div className="row  bg-rice_yellow">
        <div className="col-3">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-8">
          
              
              <Element name="1.overview" className="element rounded-border" id='1.overview'>
                 <h2>1.overview</h2>
                 <h4>Alone, we can do little, so little, together we can do so much.”——Helen Keller</h4>
                 <p>This year, our team has invested tremendous effort in education, as we all firmly believe that the promotion and advancement of synthetic biology cannot be achieved without the inclusion and participation of the public, and that this is the foundation for scientific collaboration. We have reached out to:</p>
                 <p>- Infrastructure work: Designing and producing pamphlets on knowledge of hepatic encephalopathy for popularization of the subject on campuses, hospitals and in the community.</p>
                 <p>- Initial rollout: Conducted scientific lectures on university campuses to promote knowledge of hepatic encephalopathy and synthetic biology among university students.</p>
                 <p>- Community involvement: Distribution of pamphlets in the community to sensitize the general public on science and technology</p>
                 <p>- Deepen education: Introduction to Synthetic Biology through science interaction and fun videos</p>
                 <p>- Wide dissemination: Traveled to marginalized mountainous areas of Sichuan to conduct in-depth interviews and panel discussions on “Hepatic Encephalopathy”. Provided more detailed care and support for the health of the local population.</p>
               </Element>
          

          
              
              <Element name="2.Production of science brochures" className="element rounded-border" id='2.Production of science brochures'>
                <h2>2.Production of science brochures</h2>
                <p>For better education, we design and produce scientific brochures on hepatic encephalopathy.</p>
                <p>In order to help you understand hepatic encephalopathy more easily and comprehensively, we have created the following brochure. It begins with a brief introduction to the functions of the liver, followed by a brief disease overview of hepatic encephalopathy. </p>
                <p>After a brief understanding of hepatic encephalopathy, we introduce it to the public in terms of the causes, diagnosis and prevention of the disease. For patients with hepatic encephalopathy, we also hope to help them better understand their own situation through the introduction of the pathogenesis and staging of the disease, and to do a targeted job of treatment and care, in an effort to mitigate the development of the disease, and even to achieve the effect of treatment and cure.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              </Element>
          

              <Element name="3.Initial outreach on university campuses" className="element rounded-border" id='3.Initial outreach on university campuses'>
                <h2>3.Initial outreach on university campuses</h2>
                <p>Since our team is made up of more college students, the educational modules are first conducted on our campuses.There are several options for educating university students, such as giving a lecture or a workshop. </p>
                <p>We first distributed science pamphlets in the crowded places in the campus to help people understand the related knowledge of hepatic encephalopathy, and at the same time, we distributed questionnaires to investigate the direction of college students' interest in synthetic biology.</p>
                <p>In the process of investigation and publicity, we found that college students have a basic knowledge and understanding of the concepts of hepatic encephalopathy and synthetic biology, but it is not comprehensive and profound. Therefore, we have strengthened the popularization of science in the process of publicity, hoping that through our publicity, we can help people better understand these contents.</p>
                <p>Not only that, we have learned that college students have a strong interest in both hepatic encephalopathy and synthetic biology. Therefore, we held a popularization seminar to introduce the related contents, which was well received by everyone.</p>
                <p>After the lecture, the participating members had an in-depth and friendly discussion and exchange with the team members, which helped us to recognize their interests and promote the subsequent educational work.</p>
              </Element>


              <Element name="4.Community involvement" className="element rounded-border" id='4.Community involvement'>
                <h2>4.Community involvement</h2>
                <p>After the education of university students, We think we are more effective, but the platform on campus is more limited. We published our results and iGEM news on our WeChat, Video and QQ pages. As a newly formed team, we were able to attract a large audience on social media channels with the strong support of the university and the publicity of our instructors and students.</p>
                <p>We contacted a social worker service station, and with their support, we went into the surrounding community with them to popularize synthetic biology and the topic of hepatic encephalopathy, and gained the public's recognition and support. </p>
                <img 
                  src="https://static.igem.wiki/teams/5378/social-work-station.webp"
                  alt="example"
                  className="responsive-img"
                />           
                <p>In the process of popularization, we found that adults, compared with college students, pay more attention to their own health, and the elderly, as a vulnerable group of hepatic encephalopathy, have a strong interest in this disease. At the same time, we also gave lectures on hepatic encephalopathy to the local senior university.</p>
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

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Section 5</h2>
              <p>Content for section 5.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
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
