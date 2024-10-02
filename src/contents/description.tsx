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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Project Introduction</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Our Solutions</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Outside the laboratory</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Future plans</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Reference</Nav.Link>
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



export function Description() {



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
    <div className="custom-header-description">
<h1 className="centered-title">
<img 
                src="https://static.igem.wiki/teams/5378/header/description.png"
                alt="safety header"
                className="header-img"
              />
                            <img 
                src="https://static.igem.wiki/teams/5378/header/headerbar2.webp"
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
                 <h1>Abstract</h1>
               </Element>
              <Element name="section2" className="element rounded-border" id='section2'>
                <h1>Focusing on Hepatic Encephalopathy (HE)</h1>
              <p className='indent'>This year, our team felt a strong call to address global health issues that have far-reaching consequences for individuals and society. During our brainstorming process, we recognized the potential value of synthetic biology in medical treatments, particularly its applications in engineering probiotic therapy. Common chassis organisms like Escherichia coli Nissle 1917, which tend to thrive in low-oxygen environments and have been approved for clinical use, are well-suited for metabolic diseases caused by the lower digestive system. Additionally, various synthetic biology components allow us to assemble different control systems within these chassis organisms, much like building blocks, to achieve comprehensive and precise control over the treatment. These advantages are not typically found in simple surgical procedures or chemical drugs. As a result, we have tentatively selected engineering probiotic therapy as our project focus for this year.</p>
               <p className='indent'>In our research efforts, we turned our attention to hepatic encephalopathy (HE), also known as hepatic coma, which is broadly defined as cerebral dysfunction caused by hepatic insufficiency[1]. HE mainly develops from cirrhosis, caused by viral hepatitis, ethanol, non-alcoholic fatty liver diseases (NAFLD), and other disorders. Cirrhosis is a major cause of morbidity and mortality globally, and accounts for approximately 2 million deaths per year worldwide (Figure 1) [2-3]. Along with disease progression, up to 50-70% of liver cirrhosis patients develop HE, which leads to frequent re-hospitalization and increased mortality[4]. The clinical manifestations of HE are characterised by changes in the patient's personality, behavioural abnormalities, changes in habits, presence of hepatic odour, fluttering tremor, blurred consciousness, visual disturbances and even coma. Once cirrhosis patients develop HE, it would not only jeopardize patients' physical and mental health and reduce life quality, but also generate considerable medical costs, which aggravates the economic burden of both patients and society. </p>
                <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Figure 1. Global disease burden of HE</figcaption>
                </div>
              <p className='indent'>Although Rifaxim plus lactulose therapy has been proved to alleviate HE systoms after it happens with high quality of clinical evidence[5], there still lacks a long-term treatment with low side effects for cirrhosis patients with high risk of developing HE to prevent it from progression. Therefore, in our project, we endeavored to find a reliable risk factor of HE as a sensor to initiate the treating process of our engineered probiotic to prevent HE from an early stage.</p>
              <p className='indent'>Meanwhile, an enormous number of patients with liver diseases do not have a good understanding of the problem of developing cirrhosis and HE (see details in the <a href='https://2024.igem.wiki/smu-gdmu-china/human-practices'>questionnaire section of our iHP page</a>) and public awareness of liver health is relatively low, so we hope to raise awareness and educate the public about early liver disease screening and liver health through various means.</p>
               </Element>
          
               <Element name="section1" className="element rounded-border" id='section1'>
                 <h1>Current Situation</h1>
                 <h2>Pathogenic mechanism of HE</h2>
                 <p className='indent'>The pathogenesis of hepatic encephalopathy is not fully understood and possible hypotheses are as follows (Figure 2):</p>
                 <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Figure 2. Pathogenic mechanism of HE [5]</figcaption>
                </div>
              <h3>Ammonia Toxicity Theory</h3>
              <p className='indent'>A healthy liver is able to maintain blood ammonia levels at low levels of 35-50 uM through the urea cycle. However, in cirrhosis, factors and other molecules (e.g., ammonia) that are normally prevented by the body from crossing the blood-brain barrier are able to naturally cross the blood-brain barrier, fill the brain, and stimulate pathophysiological pathways that can have deleterious effects. Neurological damage and cognitive decline due to liver dysfunction are the result of blood-borne factors that affect blood-brain barrier permeability and/or alter blood-brain barrier integrity[7-8]. </p>
               <h3>False Neurotransmitter Theory</h3>
               <p className='indent'>Aromatic amino acids in food, such as tyrosine and phenylpropanoid amino acids, are converted to tyramine and phenylethylamine PEA, respectively, by the action of the decarboxylase enzyme of enterobacteria.</p>
               <p className='indent'>Normally, aromatic amino acids in food are metabolize by decarboxylase enzyme of enterobacteria into tyramine and <span className='bold-font'>phenylethylamine(PEA)</span> and cleared by monoamine oxidase in the liver. When liver failure occurs, the clearance process is impaired, and these two amines can enter the brain tissue, where they are formed into false neurotransmitters, amines (β-hydroxytyramine) and phenylethanolamine, which are similar in chemical structure to the normal neurotransmitter norepinephrine, but are unable to transmit nerve impulses or have very weak effects. When false neurotransmitters are taken up by brain cells and replace normal transmitters in the synapses, nerve conduction is impaired, and excitatory impulses are not transmitted normally to the cerebral cortex, resulting in abnormal inhibition; impaired consciousness and coma occur[8]. </p>
               <p className='indent'>Therefore, ammonia and PEA may serve as both sensor and treating target of HE.</p>
               
               
               
               </Element>

               <Element name="section1" className="element rounded-border" id='section1'>
                 <h1>Limitation of current treatments</h1>
                 <p className='indent'>The general pharmacological approach to treat HE included osmotic laxatives[8], anti-microbial agents[9], albumin and extracorporeal albumin dialysisprobiotics[10], L-Mentholated Ornithine (LOLA) [11]and so on. In recent years probiotic therapies have emerged as revolutionary treatment approaches. However, these conventional cancer treatment methods still exhibit several limitations (Table 1).</p>
                  <p>Table 1. Limitation of current HE therapy</p>
                  <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Table 1. Limitation of current HE therapy</figcaption>
                </div>
                <p className='indent'>In conclusion, there is great uncertainty and instability in the treatment of HE, and it is urgent to find more effective and safe treatment options in order to reduce the suffering of patients and the burden on the social healthcare system.</p>
                



               </Element>































              <Element name="section3" className="element rounded-border" id='section3'>
                <h1>Current Situation</h1>
                <h3>dry lab</h3>
                <p className="indent">model: We developed an ODE model for our iGEM project that simulates the biochemical reactions within Escherichia coli. This includes the diffusion of phenylethylamine, its enzymatic oxidation, and the subsequent metabolic pathways involving gene regulation and substrate interactions across cellular compartments, all modeled using Michaelis-Menten kinetics.</p>
                <p className="indent">wiki: The wiki team built a wiki page based on react and typescript, and wrote a wiki upload tutorial to help the team members present their work. When the team members encountered difficulties in uploading, the students in the wiki team gave them timely help and gradually improved the effect of the webpage. When the team members uploaded content to part.igem.org, the wiki team also provided the code framework and teaching support. In addition, the wiki team took on a certain amount of art design, providing inspiration for the experimental team's text script design and assisting the art team in turning their ideas into reality.</p>
                <h3>art team</h3>
                <p>In the past few months, the art team has actively carried out a series of art design work around the needs of the project. Our main tasks include but are not limited to the design of project team emblem, team flag and uniform, design of project academic posters, production of project periphery and creation of wiki related visual material.</p>
                <p>Through the efforts of the art team, the publicity and display of the project team have been significantly improved and improved, and the cooperation with other groups is more close, jointly improving the overall image and efficiency of the team.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/describe/art-work.webp"
                alt="art work"
                className="responsive-img"
              />
              <figcaption className='caption'>Fig.3: Work of the art team</figcaption>
              <h3>hp team</h3>
              <p>Cooperation and promotion are the main tone of hp's work, and internal and external communication is the foundation of hp's work. It carries out human practice, exchange and cooperation, education and publicity for the public, and is also responsible for outreach, reporting and other work within the team.</p>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>future plans</h2>
              <p>In our plan, we expect to complete the full build of the three functional modules. We may not be able to continue the subsequent animal validation experiments due to laboratory, funding, and personnel changes, but we hope to make further efforts in the following areas to make the project more complete:</p>
              <div className="rounded-border">
              <p className="bold-font">1.Safety:</p>
              <p>EcN is an internationally recognised harmless probiotic, but we have still added a controlled safety module to it to ensure that the modified EcN will not cause other unforeseen harm when it enters the human gut.</p>
              <p className="bold-font">2.Controllable:</p>
              <p>The three modules we constructed are precisely and minutely regulated, and are only allowed to be expressed when stimulated by the external environment, and to a controlled extent.</p>
              <p className="bold-font">3.Persistent:</p>
              <p>EcN is able to remain in the normal gut and the beneficial effects are long lasting.</p>
              <p className="bold-font">4.Convenient:</p>
              <p>Our modified EcN was encapsulated in a material that is resistant to stomach acid but not intestinal fluids to create an edible capsule that can be used as a convenient drug to improve hepatic encephalopathy.</p>
              </div>
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>reference</h2>
              <p>[1] Vilstrup H, Amodio P, Bajaj J, Cordoba J, Ferenci P, Mullen KD, et al. Hepatic encephalopathy in chronic liver disease: 2014 practice guideline by the American Association for the Study of Liver Diseases and the European Association for the Study of the Liver. Hepatology 2014;60:715–735.</p>
              <p>[2]Randolph C, Hilsabeck R, Kato A, et al. Neuropsychological assessment of hepatic encephalopathy: ISHEN practice guidelines. Liver Int. 2009;29:629-35.</p>
              <p>[3] Guevara M, Baccaro ME, Torre A, Gómez-Ansón B, Ríos J, Torres F, et al. Hyponatremia is a risk factor of hepatic encephalopathy in patients with cirrhosis: a prospective study with time-dependent analysis. Am J Gastroenterol 2009;104:1382–1389.</p>
              <p>[4] Sharma BC, Sharma P, Agrawal A, Sarin SK. Secondary prophylaxis of hepatic encephalopathy: an open-label randomized controlled trial of lactulose versus placebo. Gastroenterology 2009;137:885–891. 891.e1.</p>
              <p>[5] Cordoba J, Ventura-Cots M, Simón-Talero M, Amorós À, Pavesi M, Vilstrup H, et al. Characteristics, risk factors, and mortality of cirrhotic patients hospitalized for hepatic encephalopathy with and without acute-on-chronic liver failure (ACLF). J Hepatol 2014;60:275–281.</p>
              <p>[6] Sotil EU, Gottstein J, Ayala E, Randolph C, Blei AT. Impact of preoperative overt hepatic encephalopathy on neurocognitive function after liver transplantation. Liver Transpl 2009;15:184–192.</p>
              <p>[7] Keiding S, Sørensen M, Bender D, Munk OL, Ott P, Vilstrup H. Brain metabolism of 13N-ammonia during acute hepatic encephalopathy in cirrhosis measured by positron emission tomography. Hepatology 2006;43:42–50.</p>
              <p>[8] Rose CF, Amodio P, Bajaj JS, Dhiman RK, Montagnese S, Taylor-Robinson SD, Vilstrup H, Jalan R. Hepatic encephalopathy: Novel insights into classification, pathophysiology and therapy. J Hepatol. 2020 Dec;73(6):1526-1547. </p>
              <p>[9] ystems biology analysis of lactulose withdrawal in hepatic encephalopathy. Metab Brain Dis 2012;27:205–215.</p>
              <p>[10] Bass NM, Mullen KD, Sanyal A, Poordad F, Neff G, Leevy CB, et al. Rifaximin treatment in hepatic encephalopathy. N Engl J Med 2010;362:1071–1081.</p>
              <p>[11] Dalal R, McGee RG, Riordan SM, Webster AC. Probiotics for people with hepatic encephalopathy. Cochrane Database Syst Rev 2017;2:CD008716.</p>
              <p>[12] Simón-Talero M, García-Martínez R, Torrens M, Augustin S, Gómez S, Pereira G, et al. Effects of intravenous albumin in patients with cirrhosis and episodic hepatic encephalopathy: a randomized double-blind study. J Hepatol 2013;59:1184–1192.</p>
              <p>[13] Bai M, Yang Z, Qi X, Fan D, Han G. L-ornithine-L-aspartate for hepatic encephalopathy in patients with cirrhosis: a meta-analysis of randomized controlled trials. J Gastroenterol Hepatol 2013;28:783–792.</p>
              <p>[14] Rottinghaus A G, Xi C, Amrofell M B, et al. Engineering ligand-specific biosensors for aromatic amino acids and neurochemicals[J]. Cell systems, 2022, 13(3): 204-214. e4.</p>
              <p>[15] Hao DL, Zhou JY, Yang SY, Qi W, Yang KJ, Su YH. Function and Regulation of Ammonium Transporters in Plants. Int J Mol Sci. 2020 May 18;21(10):3557. </p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <div className="image">
                <img src="https://static.igem.wiki/teams/5378/project-description-section3/1280x1280.webp" alt="示例图片" />
              </div>

              <div className="image">
                <img src="https://static.igem.wiki/teams/5378/project-description-section3/project-description-section4/1280x1280-1.webp" alt="示例图片" />
              </div>


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

{/* <div className="bd-callout bd-callout-info">
          Hepatic encephalopathy (HE) is a complication of cirrhosis characterized by neuropsychiatric and motor dysfunction. In 2023 it was estimated that there were 112 million individuals with liver cirrhosis worldwide, 40-60% of whom develop HE. Manifestations of HE can range from subtle (MHE) to severe (OHE) and even coma, which considerably affect the quality of life and even the survival of patients. Emerging data demonstrate the increased level of ammonia caused by liver dysfunction and overactivated microbiota in the context of cirrhosis plays an essential role in the pathogenesis of HE. Microbiome-targeted therapies for HE such as lactulose, rifaximin, probiotics, and FMT are showing promise. However, the resilience of the microbiome to sustainable change and unpredictable clinical outcomes from microbiota alterations remain challenging in the effective application of microbiome therapeutics in HE. In our project, we plan to design safe and controllable engineered bacteria that can metabolize the excessive accumulation of ammonia in the intestine of patients. We aim to improve the quality of life of patients with MHE, delaying their progression to OHE, and provide a novel idea for the microbial therapy of HE.
          </div> */}