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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>1.Overview</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>2.Ethical Considerations</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>3.Collaboration</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>4.Questionnaire</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>5.STAKEHOLDER</Nav.Link>
        <Nav.Link as={Link} to="section6" smooth={true} duration={500} className={activeLink === 'section6' ? 'active' : 'notActive'}>6.Expert</Nav.Link>

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
            <p>Have a picture of what we did.</p>
  <div className="rounded-border">
    <h3 className="center-text">1.1 A Pillar of Our iGEM Project</h3>
    <p className='indent'>
      One of the pillars supporting a successful and responsible iGEM project is <span className='bold-font'>human practices</span>. We place great emphasis on human practices to ensure our product’s <span className='bold-font'>real-world applicability</span> and to assess its impact on <span className='bold-font'>Chinese society</span>, the <span className='bold-font'>global community</span>, and the <span className='bold-font'>scientific field</span>.
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '10px' }}>
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
            <h2>2. Ethical Considerations</h2>
            <p>Informed consent, privacy, fairness, non-harm, responsibility.</p>
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
            <h2>4 Questionnaire</h2>
            <p>What did we investigate.</p>
  <div className="rounded-border">
    <p className='indent'>
      During the development of our hepatic encephalopathy (<span className='bold-font'>HE</span>) project, we conducted extensive <span className='bold-font'>Human Practices (HP)</span> activities to understand the challenges and gather feedback from professionals and patients. Our HP work is divided into three key areas:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>Questionnaire-based research</span> to identify HE symptoms and their impact on <span className='bold-font'>quality of life</span>.</li>
      <li><span className='bold-font'>Interviews with doctors</span> and liver disease experts to explore the <span className='bold-font'>limitations</span> of current treatments and potential <span className='bold-font'>probiotic therapies</span>.</li>
      <li><span className='bold-font'>Patient and family feedback</span> to understand their expectations and concerns about new therapies.</li>
    </ul>

    <p className='indent'>
      We designed a comprehensive <span className='bold-font'>questionnaire</span> covering patient <span className='bold-font'>medical history</span>, <span className='bold-font'>current symptoms</span>, treatment experience, and awareness of <span className='bold-font'>new therapies</span> like probiotics. This allows us to collect <span className='bold-font'>real-world data</span> to further our research on HE.
    </p>
    <p className='indent'>
      The figure below shows how our HP activities integrate with <span className='bold-font'>lab work</span> and <span className='bold-font'>scientific exchange</span>. This collaboration helps us better understand the complexity of HE and provides a foundation for developing <span className='bold-font'>probiotic-based treatments</span>. By combining patient feedback with scientific research, our goal is to improve HE treatment and enhance <span className='bold-font'>patient quality of life</span>.
    </p>

    <h4 className="center-text">4.1 Basic Principles</h4>
    <p className='indent'>
      <span className='bold-font'>Hepatic encephalopathy (HE)</span> is a neurological disorder caused by liver dysfunction, with symptoms like <span className='bold-font'>cognitive impairment</span>, <span className='bold-font'>emotional instability</span>, and decreased <span className='bold-font'>social functioning</span>, all of which affect <span className='bold-font'>quality of life</span>. Many patients have <span className='bold-font'>low self-awareness</span> of their condition, delaying treatment and increasing psychological burden. Our goal is to explore why HE patients have low awareness of their symptoms and stress.
    </p>

    <h4 className="center-text">4.2 Method</h4>
    <p className='indent'>
      We designed a questionnaire in three parts:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>Symptom awareness</span>: Participants rated their symptoms and stress on a scale from 0 (no symptoms) to 100 (severe symptoms) to measure <span className='bold-font'>self-awareness</span>.</li>
      <li><span className='bold-font'>Clinical assessment</span>: Participants were guided through <span className='bold-font'>West Haven Criteria</span> to evaluate their actual condition.</li>
      <li><span className='bold-font'>Coping and understanding</span>: Focused on how participants manage stress and understand their condition.</li>
    </ul>
    <p className='indent'>
      The questionnaire was distributed online to HE patients in collaboration with hospitals to ensure <span className='bold-font'>diverse samples</span>.
    </p>

    <h4 className="center-text">4.3 Results</h4>
    <p className='indent'>
      We received <span className='bold-font'>725 responses</span>, including <span className='bold-font'>350 HE patients</span>. Only <span className='bold-font'>3.5%</span> could accurately recognize the severity of their condition, with most patients underestimating their symptoms. Comparisons with <span className='bold-font'>clinical assessments</span> showed that patients' self-reported symptoms were generally lower than professional evaluations. Over <span className='bold-font'>65%</span> of participants had never actively assessed their condition, despite some using mobile apps. These findings highlight the need to improve <span className='bold-font'>self-awareness</span> in HE patients, which is crucial for better treatment planning.
    </p>
  </div>
</Element>


          <div className="bd-callout bd-callout-info bg-gray">
            <h1>What do we do to ...? See...</h1>
          </div>

          <Element name="section5" className="element rounded-border" id='section5'>
            <h2>5. Stakeholder</h2>
            <p>Our stakeholders.</p>
            <div className="rounded-border">
              <h3 className="center-text">5.1 Stakeholder Identification</h3>
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

            <div className="rounded-border">
              <h3 className="center-text">5.2. Stakeholder Engagement</h3>
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


        <Element name="section5" className="element rounded-border" id='section5'>
        <h2>6. Expert Consultation</h2>
            <p>Explore what did we learn from experts.</p>
  <div className="rounded-border">
    
    <h4>February 2024 - Yang Xiaolin</h4>
    <p className='indent'>
      The application of <span className='bold-font'>probiotics</span> in treating <span className='bold-font'>hepatic encephalopathy (HE)</span> has sparked significant <span className='bold-font'>ethical discussions</span>. HE, a neurological complication caused by liver failure, severely affects patients' <span className='bold-font'>quality of life</span>. In addition to traditional treatments, probiotics regulate the <span className='bold-font'>intestinal microbiota</span>, improve <span className='bold-font'>intestinal barrier function</span>, reduce <span className='bold-font'>toxin absorption</span>, and alleviate symptoms. However, several ethical considerations arise when using probiotics for HE:
    </p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><span className='bold-font'>Safety and effectiveness</span>: Clinical research must strictly adhere to <span className='bold-font'>ethical standards</span>, ensure <span className='bold-font'>informed consent</span>, and thoroughly assess potential risks.</li>
      <li><span className='bold-font'>Patient autonomy</span>: Patients should freely decide whether to receive new treatments after understanding the risks and benefits.</li>
      <li><span className='bold-font'>Transparency</span>: It is our responsibility to provide clear information on the role of probiotics in the overall treatment plan.</li>
    </ul>

    <h4>February 2024 - Qiu Xinyuan</h4>
    <p className='indent'>
      Professor Qiu provided an overview of the <span className='bold-font'>iGEM competition</span> and shared experiences from the NUDT CHINA team, particularly from their 2022 project. We discussed using <span className='bold-font'>genetic engineering</span> to modify existing probiotic strains, introducing genes targeting <span className='bold-font'>ammonia metabolism</span>, and enhancing their functionality to reduce <span className='bold-font'>toxin accumulation</span> in HE patients. The conversation also focused on ensuring the <span className='bold-font'>safety and effectiveness</span> of these probiotics in clinical practice through <span className='bold-font'>synthetic biology</span> methods.
    </p>

    <h4>March 2024 - Zhu Bo</h4>
    <p className='indent'>
      Facing difficulties in finding suitable <span className='bold-font'>inducing promoters</span>, Professor Zhu from Sun Yat-sen University suggested using <span className='bold-font'>bile acid</span> as a biomarker. Bile acids not only have vital physiological roles but also reflect <span className='bold-font'>metabolic changes</span>. By building a bile acid-responsive system, gene expression can be more accurately regulated, leading to <span className='bold-font'>flexible experimental designs</span>. This strategy enhances both the <span className='bold-font'>operability</span> of the experiment and its relevance to <span className='bold-font'>clinical applications</span>.
    </p>

    <h4>May 2024 - He Xiaolong</h4>
    <p className='indent'>
      After consulting with HE expert Professor He Xiaolong, we were advised to replace bile acid markers with <span className='bold-font'>phenylethylamine (PEA)</span>. As a significant biogenic amine, PEA plays a role in <span className='bold-font'>nerve transmission</span> and physiological regulation. Using PEA as a response marker introduces a <span className='bold-font'>more flexible regulatory mechanism</span> and offers clearer insights into its role in various diseases. This shift provides a <span className='bold-font'>novel approach</span> to selecting inducing promoters and promotes <span className='bold-font'>deeper exploration</span> in related fields.
    </p>

    <h4>May 2024 - Zhou Hongwei and Chen Jin-Jun</h4>
    <p className='indent'>
      Dr. Zhou Hongwei from Shenzhen Hospital emphasized the need to solve complications during the <span className='bold-font'>design of the safety module</span>. Complications can greatly impact patient <span className='bold-font'>recovery</span> and <span className='bold-font'>quality of life</span>. Dean Zhou suggested <span className='bold-font'>real-time monitoring</span> of physiological indicators and drug responses to adjust treatment plans. This approach enhances <span className='bold-font'>medical care quality</span> and ensures patient safety, reflecting a <span className='bold-font'>people-centered medical philosophy</span>.
    </p>

    <h4>June 2024 - Du Chaochao</h4>
    <p className='indent'>
      In the preliminary design of the <span className='bold-font'>metabolic module</span>, we initially targeted <span className='bold-font'>monoamine oxidase B (MAOB)</span>. However, this conflicted with our sensing module. After consulting Teacher Du from Pearl River Hospital, we decided to adjust the direction and adopt a new <span className='bold-font'>metabolic pathway</span>. This adjustment optimized <span className='bold-font'>system compatibility</span> and improved the stability of its functions, laying a solid foundation for future experiments.
    </p>

    <h4>June 2024 - Chen Peng</h4>
    <p className='indent'>
      While studying <span className='bold-font'>Escherichia coli (EcN)</span> in chassis biology, we encountered issues with strain identification. After consulting Professor Chen Peng from Southern Medical University, we conducted <span className='bold-font'>mass spectrometry</span> and <span className='bold-font'>16S rRNA sequencing</span>, which revealed errors in our strain. Professor Chen emphasized the importance of accurately identifying chassis organisms and advised revisiting the experimental design to ensure reliability in future research.
    </p>

    <h4>September 2024 - Zheng Jusheng</h4>
    <p className='indent'>
      Our team consulted with Professor Zheng Jusheng on the <span className='bold-font'>clinical translation</span> of probiotics for HE treatment. The discussion focused on <span className='bold-font'>oral capsules</span>, a form of probiotic delivery that offers convenience, <span className='bold-font'>dosage control</span>, and high patient acceptance. Professor Zheng stressed the importance of conducting <span className='bold-font'>large-scale clinical trials</span> to assess safety and efficacy in real-world conditions. Additionally, the <span className='bold-font'>manufacturing process</span> should comply with <span className='bold-font'>GMP standards</span> to ensure product quality. We also explored <span className='bold-font'>microencapsulation technology</span> to protect probiotic viability, ensuring effective delivery to the intestines and enhancing therapeutic effects.
    </p>
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



    </div>
    </div>
    </>
  );
}
