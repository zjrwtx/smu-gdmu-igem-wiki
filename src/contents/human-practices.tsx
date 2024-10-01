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
        <h2>1. Overview</h2>
            <p>Our Picture.</p>
  <div className="rounded-border">
    <h3 className="center-text">1.1 A Pillar of Our iGEM Project</h3>
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
    <h3 className="center-text">1.2 Understanding Hepatic Encephalopathy (HE)</h3>
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
            <h2>2. Ethical considerations</h2>
            <p>Our stakeholders.</p>
  <div className="rounded-border">
  <h3 className="center-text">2.1Ethical and Safe Biotechnology Research</h3>
    <p className='indent'>
      Our project operates within the legal framework and adheres to strict <span className='bold-font'>laboratory safety regulations</span>. From an <span className='bold-font'>ethical standpoint</span>, responsible scientific research not only requires the involvement of <span className='bold-font'>experts</span>, but also must align with the values of <span className='bold-font'>citizens</span>, ensuring that our innovations address <span className='bold-font'>real-world challenges</span>.
    </p>
    <p className='indent'>
      We actively engage with <span className='bold-font'>schools</span>, <span className='bold-font'>hospitals</span>, and <span className='bold-font'>communities</span> through <span className='bold-font'>public outreach activities</span>, encouraging <span className='bold-font'>citizen participation</span>. By inviting people to share their suggestions, we are motivated to enhance <span className='bold-font'>scientific communication</span>. Through the <span className='bold-font'>popularization of science</span>, we aim to eliminate misconceptions about hepatic encephalopathy, thereby <span className='bold-font'>bridging the gap</span> between scientists and the public.
    </p>
    <h3>Informed Consent and Privacy Protection</h3>
    <p className='indent'>
      In our research, ensuring <span className='bold-font'>informed consent</span> and protecting <span className='bold-font'>patient information rights</span> are our top priorities. Participants will fully understand the experimental procedures, risks, and potential benefits before voluntarily signing an <span className='bold-font'>informed consent form</span>. We also commit to keeping all questionnaire content and <span className='bold-font'>participant privacy</span> strictly confidential.
    </p>
    <h3>Rigorous Safety Evaluation</h3>
    <p className='indent'>
      In terms of experimental design and implementation, we rigorously evaluate the safety of <span className='bold-font'>engineered bacteria</span> to minimize any <span className='bold-font'>health risks</span> to patients. <span className='bold-font'>Pre-experiments</span> and <span className='bold-font'>animal studies</span> are conducted to verify safety, while a thorough assessment of potential <span className='bold-font'>side effects</span> and <span className='bold-font'>adverse reactions</span> is performed, with contingency plans developed to manage any risks.
    </p>
    <h3 className="center-text">2.2Ethical Compliance</h3>
    <p className='indent'>
      We have held <span className='bold-font'>in-depth discussions with ethical experts</span>, conducted extensive literature reviews, and considered <span className='bold-font'>local customs</span> and <span className='bold-font'>moral standards</span> to ensure the ethical integrity of our research project.
    </p>
  </div>
</Element>



<Element name="section3" className="element rounded-border" id='section3'>
            <h2>3 Collaboration</h2>
            <p>Who are we connecting with.</p>
  <div className="rounded-border">
    <h3 className="center-text">3.1 Guidance and Cooperation</h3>
    <p className='indent'>
      Our team collaborates with the <span className='bold-font'>Liver Disease Center of Nanfang Hospital</span> and the <span className='bold-font'>Microecological Diagnosis and Treatment Center of Pearl River Hospital</span>.
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li>We collected <span className='bold-font'>preoperative serum samples</span> from cirrhosis patients undergoing <span className='bold-font'>TIPS</span>, conducted <span className='bold-font'>metabolomics testing</span>, and followed up with the patients for three months to monitor the occurrence of <span className='bold-font'>hepatic encephalopathy (HE)</span>.</li>
    </ul>

    <p className='indent'>
      The team participated in the <span className='bold-font'>South China Exchange Conference</span>, sharing project progress and experiences with institutions like <span className='bold-font'>Shenzhen University</span> and the <span className='bold-font'>Southern University of Science and Technology</span>.
    </p>
    <p className='indent'>
      We were invited to the <span className='bold-font'>China Regional Exchange Conference (CCIC)</span>, engaging in in-depth discussions with other teams to optimize and improve our project, enhancing <span className='bold-font'>collaboration abilities</span> and promoting mutual project development.
    </p>

    <p className='indent'>
      <span className='bold-font'>Professor Qiu Xinyuan</span> from the <span className='bold-font'>National University of Defense Technology</span> provided valuable team guidance, offering practical suggestions and insights to support our team’s growth.
    </p>

    <p className='indent'>
      We consulted with <span className='bold-font'>Dr. Liu</span>, a synthetic biology expert from the <span className='bold-font'>South China University of Technology</span>, to discuss the experimental content of our project, exchanging knowledge and experiences related to <span className='bold-font'>hepatic encephalopathy</span>.
    </p>

    <p className='indent'>
      Team members participated in the <span className='bold-font'>National Synthetic Biology Innovation Competition</span> at <span className='bold-font'>Shenzhen Guangming Tian'an Cloud Valley</span>, where they engaged in deep discussions and collaboration with iGEM teams from across the country, exchanging innovative ideas on a shared platform.
    </p>
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
