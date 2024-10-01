import { Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import React, { useEffect, useState } from 'react';

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
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>5.STAKEHOLDER</Nav.Link>
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

export function HumanPractices() {
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
      <div className="custom-header-human-practices">
        <h1 className="centered-title">
          <img
            src="https://static.igem.wiki/teams/5378/header/human-practices.png"
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
          <SideNavbar activeLink={activeLink} />
        </div>

        <div className="col-10">


        <Element name="section1" className="element rounded-border" id='section1'>
  <div className="rounded-border">
    <h3>Overview</h3>
    <p className='indent'>
      One of the pillars supporting a successful and responsible iGEM project is <span className='bold-font'>human practices</span>. We place great emphasis on human practices to ensure our product’s <span className='bold-font'>real-world applicability</span> and to assess its impact on <span className='bold-font'>Chinese society</span>, the <span className='bold-font'>global community</span>, and the <span className='bold-font'>scientific field</span>.
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>How does our project impact the world around us?</span></li>
      <li><span className='bold-font'>How does the world influence our project?</span></li>
    </ul>
    <p className='indent'>
      Our objective is to gather <span className='bold-font'>diverse perspectives</span>, from the general public to patients, ensuring we consider all possible viewpoints that may shape the trajectory of our project.
    </p>
    </div>

    <div className="rounded-border">
    <h3>Understanding Hepatic Encephalopathy (HE)</h3>
    <p className='indent'>
      Hepatic encephalopathy, or <span className='bold-font'>HE</span>, is a syndrome resulting from <span className='bold-font'>central nervous system dysfunction</span> due to <span className='bold-font'>severe liver disease</span>. In this context, "hepatic" refers to the <span className='bold-font'>liver</span>, and "encephalopathy" refers to the <span className='bold-font'>brain</span>.
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>Mild HE patients</span> are typically characterized by a <span className='bold-font'>decline in cognitive function</span>, including <span className='bold-font'>coordination</span> and <span className='bold-font'>balance abilities</span>.</li>
      <li><span className='bold-font'>Moderate HE patients</span> may experience <span className='bold-font'>anxiety</span>, <span className='bold-font'>insomnia</span>, <span className='bold-font'>sudden personality changes</span>, and <span className='bold-font'>abnormal behavior</span>.</li>
      <li><span className='bold-font'>Severe HE cases</span> can lead to <span className='bold-font'>drowsiness</span>, <span className='bold-font'>coma</span>, and may even become <span className='bold-font'>life-threatening</span>.</li>
    </ul>
    <p className='indent'>
      HE is frequently seen in patients with <span className='bold-font'>advanced liver diseases</span> like <span className='bold-font'>cirrhosis</span> and <span className='bold-font'>liver failure</span>. Severe episodes of HE can be:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>Dangerous</span> and difficult to manage</li>
      <li>Prone to <span className='bold-font'>recurrence</span></li>
      <li>Likely to cause significant harm to a patient’s <span className='bold-font'>social functioning</span>, leading to a substantial burden on both the <span className='bold-font'>individual</span> and their <span className='bold-font'>family</span>.</li>
    </ul>
  </div>
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
            <h2>Section 3</h2>
            <p>Content for section 3.</p>
            <div className="rounded-border">
              <h4 className="center-text">Section 3</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>

          <Element name="section4" className="element rounded-border" id='section4'>
            <h2>Section 4</h2>
            <p>Content for section 4.</p>
            <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
            </div>
          </Element>

          <div className="bd-callout bd-callout-info bg-gray">
            <h1>What do we do to ...? See...</h1>
          </div>

          <Element name="section5" className="element rounded-border" id='section5'>
            <h2>5. STAKEHOLDER</h2>
            <p>Our stakeholders.</p>
            <div className="rounded-border">
              <h3 >5.1. Stakeholder Identification</h3>
              <p className='indent'>
                Our iGEM project, focusing on innovative treatment for hepatic encephalopathy (<span className='bold-font'>HE</span>), has identified key stakeholders critical to the success and real-world application of our research. These stakeholders include HE patients, medical professionals (doctors), pharmaceutical company representatives, research experts involved in HE-related studies, and the general public.
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li><span className='bold-font'>Patients</span>: Suffering from HE represent a primary stakeholder, as their quality of life directly depends on effective treatment options. </li>
                  <li><span className='bold-font'>Doctors</span>: Especially hepatologists and neurologists, are integral in diagnosing and treating HE, providing us with valuable insights into clinical needs. Pharmaceutical company representatives: They are vital for translating research into market-ready therapies, ensuring accessibility and scalability of our solutions.</li>
                  <li><span className='bold-font'>Researchers</span>: Including academics and specialists in liver disease, are critical for guiding the scientific direction of the project. </li>
                  <li><span className='bold-font'>General public</span>: As raising awareness and educating people about HE can significantly contribute to early diagnosis and treatment, ultimately benefiting the healthcare ecosystem as a whole.</li>
                </ul>
              </p>
            </div>
          </Element>
          <Element name="section5" className="element rounded-border" id='section5'>
            <div className="rounded-border">
              <h3>5.2. Stakeholder Engagement</h3>
              <p className='indent'>
                We reached out to the stakeholders for expert insights through structured interviews, following a comprehensive engagement process: Preparation, Contact, Content Development, Execution, Summary, Reflection, and Updates. This approach allowed us to better understand the specific needs and challenges faced by each stakeholder group. Their feedback provided critical insights that guided improvements to our project design, ensuring it addresses real-world issues effectively.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><span className='bold-font'>Prepare:</span> We researched stakeholder backgrounds to understand their relevance to our project.</li>
                <li><span className='bold-font'>Contact:</span> Initial outreach was made via email and phone calls.</li>
                <li><span className='bold-font'>Interview Content Construction:</span> We developed targeted questions focusing on hepatic encephalopathy.</li>
                <li><span className='bold-font'>Conduct Interview:</span> Interviews were held online or in person.</li>
                <li><span className='bold-font'>Summarization:</span> Key insights were documented.</li>
                <li><span className='bold-font'>Reflection:</span> We analyzed the feedback to refine our approach.</li>
                <li><span className='bold-font'>Update:</span> Stakeholder feedback was integrated into project updates.</li>
              </ul>
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
    </div>
    </>
  );
}
