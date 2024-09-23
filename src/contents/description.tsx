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
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Section 3</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Section 4</Nav.Link>
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
</h1>
</div>
      <div className="row  bg-rice_yellow">
        <div className="col-3">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-8">
          
              
        <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>

              <Element name="section1" className="element rounded-border" id='section1'>
                 <h2>Project Introduction</h2>
                 <h3>Global impact of the disease</h3>
                 <p>Hepatic encephalopathy (HE), also known as hepatic coma, is broadly defined as cerebral dysfunction caused by hepatic insufficiency and/or portal shunting, with a spectrum of impaired consciousness or neurological derangements ranging from a distinct subclinical state to coma. [1] The International Society for Hepatic Encephalopathy and Nitrogen Metabolism (ISHEN) agrees that disorientation or asterixis is the beginning of overt hepatic encephalopathy (grades II to IV), which includes neurological and psychiatric abnormalities that can be detected on bedside clinical examination, whereas occult hepatic encephalopathy (very mild and grade 1) can only be differentiated by specific psychometric tests as these patients have a normal mental and neurological status on clinical examination. [2]</p>
                 <p>The clinical manifestations of HE are very specific and are characterised by changes in the patient's personality, behavioural abnormalities, changes in habits, presence of hepatic odour, fluttering tremor, blurred consciousness, visual disturbances and coma.</p>
                 <p>Depending on the presence of risk factors such as mHE, grade I hepatic encephalopathy, diabetes mellitus, hyponatraemia, and hepatitis C, the risk of the first significant hepatic encephalopathy within 5 years of the diagnosis of cirrhosis is approximately 25%. [3] Despite standard treatment, patients with previous episodes of overt hepatic encephalopathy have a 42% risk of recurrence within 1 year, and patients with recurrent overt hepatic encephalopathy have a 46% risk of another episode within 6 months. [4] Compared with cirrhotic patients without hepatic encephalopathy, population-based cirrhotic patients with overt hepatic encephalopathy have a mean survival of only a few months and a twofold increased risk of death within 1 year. [5]</p>
                 <p>In former times, HE was defined simply as a disease caused by a metabolic disorder that could be cured by liver transplantation. However, numerous studies have shown that dominant HE is characterised by a pathology of neuroinflammation as well as extensive neuronal cell death, and that the cell death is irreversible, so that dominant HE may be permanent for the patient, and that the patient's suffering will not go away, but will continue to flare up after liver transplantation. [6] This leads to prolonged hospitalisation and repeated admissions, causing great physical and mental suffering to the patient and increasing the healthcare burden and costs associated with HE management to society.</p>
                 <p>But more importantly, it has been demonstrated that hepatic encephalopathy is associated with a high mortality rate, regardless of the severity of the disease. [5] How to reduce the mortality rate of HE patients has been a very critical issue.</p>
                 <h3>Spark</h3>
                 <p>This year, our team felt a strong call to address global health issues that have far-reaching consequences for individuals and society. We are grateful to synthetic biology for providing a practical engineering approach that can combine modules with independent functions like a jigsaw puzzle to fulfil their joint functions. At the same time, we see great potential for synthetic biology to address this issue, and we hope to be able to provide a new line of therapeutic options for the treatment of hepatic encephalopathy through this work.</p>
                 <p>The pathogenesis of hepatic encephalopathy is not fully understood and possible hypotheses are as follows:</p>
                 <p>1.Ammonia Toxicity Theory.</p>
                 <p>Several studies have elucidated that toxic levels of ammonia in the brain are one of the more prominent features, although the pathophysiology of he is still not fully understood. [7] A healthy liver is able to maintain blood ammonia levels at low levels of 35-50 uM through the urea cycle. However, in cirrhosis, factors and other molecules (e.g., ammonia) that are normally prevented by the body from crossing the blood-brain barrier are able to naturally cross the blood-brain barrier, fill the brain, and stimulate pathophysiological pathways that can have deleterious effects. Neurological damage and cognitive decline due to liver dysfunction are the result of blood-borne factors that affect blood-brain barrier permeability and/or alter blood-brain barrier integrity.[8]</p>
                 <p>2.Pseudo-neurotransmitter theory</p>
                 <p>The conduction of nerve impulses is accomplished by means of transmitters. There are two types of neurotransmitters, excitatory and inhibitory, which maintain a physiological balance when normal. Among them, inhibitory neurotransmitters are formed only in the brain. Aromatic amino acids in food, such as tyrosine and phenylpropanoid amino acids, are converted to tyramine and phenylethylamine PEA, respectively, by the action of the decarboxylase enzyme of enterobacteria.</p>
                 <p>Normally, these two amines are cleared by monoamine oxidase in the liver, but when liver failure occurs, clearance is impaired, and these two amines can enter the brain tissue, where they are formed into amines (β-hydroxytyramine) and phenylethanolamine, respectively, by β-hydroxylase. The latter two are similar in chemical structure to the normal neurotransmitter norepinephrine, but are unable to transmit nerve impulses or have very weak effects, and are therefore called pseudoneurotransmitters. When pseudoneurotransmitters are taken up by brain cells and replace normal transmitters in the synapses, nerve conduction is impaired, and excitatory impulses are not transmitted normally to the cerebral cortex, resulting in abnormal inhibition; impaired consciousness and coma occur. []</p>
                 <p>In an effort to find out more precisely what risk factors are associated with the development of HE, our team actively communicated with the PI and learned of a related, unpublished study that concluded that patients with higher baseline PEA levels (upper quartile) had a 6.95-fold higher risk of developing HE at 3 months than patients in the lower quartile (p = 0.0017) [].</p>
                 <h3>Current treatments</h3>
                 <p>Given the specificity of ammonia in the diagnosis and treatment of HE, the general pharmacological approach to HE is broadly directed towards ammonia.</p>
                 <p>1.Osmotic laxatives:Non-absorbable disaccharides, lactulose and sugar alcohols, are recommended as first-line treatment for HE. Lactulose is a laxative that has a negligible effect on the composition or function of the gut microbiota and may reduce ammonia production and absorption in the gut and increase intestinal excretion by increasing intestinal transport as well as acidification of the intestinal environment. [9]However, some studies have reported potential side effects of laxatives such as lactulose, including diarrhoea, nausea and bloating. Diarrhoea and vomiting can lead to electrolyte disturbances and even exacerbate HE.[8]</p>
                 <p>2.Anti-microbial agents:Rifaximin is a semi-synthetic non-aminoglycoside drug that fights Gram-positive, Gram-negative, aerobic and anaerobic enteric bacteria. The strongest evidence for the utility of rifaximin is the use of the drug as an add-on to lactulose for the prevention of hepatic encephalopathy recurrence. [10]However, clinical trials of rifaximin in combination with lactulose have rarely been reported and lack wide public acceptance.</p>
                 <p>3.Probiotics:Probiotics are live bacteria that are thought to improve intestinal ecological dysbiosis, help enhance ammonia metabolism, and reduce the burden of ammonia on the gut. However, to date, the quality of most clinical trials has been low, so the evidence remains unconvincing. [11]</p>
                 <p>4.Albumin and extracorporeal albumin dialysis (ECAD):The quantity and quality of albumin, a multifunctional protein synthesised in the liver, is significantly reduced in patients with cirrhosis. An early uncontrolled, non-randomised study suggested its potential role in the treatment of hepatic encephalopathy. [12] However, it was not confirmed in randomised controlled clinical trials.</p>
                 <p>5.L-Mentholated Ornithine (LOLA).A preliminary meta-analysis of eight randomised controlled trials comparing LOLA with placebo/no intervention control showed that intravenous LOLA improved significant hepatic atherosclerosis. [13] However, the effectiveness of oral LOLA has been the subject of debate, as the AASLD-EASL clinical guidelines suggest that oral supplementation with LOLA is ineffective. [1] Therefore, the potential benefits of LOLA remain uncertain.</p>
                 <p>In conclusion, there is great uncertainty and instability in the treatment of HE, and it is urgent to find more effective and safe treatment options in order to reduce the suffering of patients and the burden on the social healthcare system.</p>
                 <h3>New treatments</h3>
                 <p>We recognise the potential advantage of synthetic biology in solving global health problems by enabling the tight integration of dispersed functional modules. As a result, we plan to take a new angle - sensing phenylethylamine - to stimulate the expression of downstream metabolic modules to degrade excess ammonia in the patient's body, thereby undoing the toxic effects of ammonia overload on the brain. At the same time, our safety module operates at all times to reduce the level of intestinal inflammatory factors and maintain the stability of the intestinal barrier, ensuring the normal state of the metabolic and sensing modules.</p>
                 <h3>foresight</h3>
                 <p>Our goal: to design probiotics (EcN) based on PEA levels that, under the supervision of a safety module, are able to specifically sense PEA in the intestines of HE patients, rapidly degrade ammonia, and reduce the risk of HE development.</p>
                 <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               </Element>
        

          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Our Solutions</h2>
                <h3>sensor module</h3>
                <p>In a round of research work dedicated to phenylethylamine, we searched for a system that can sensitively sense aromatic amines using the TynA-FeaR system. [14] The authors of this paper screened for a mutant specific for phenylethylamine, TynA G494S-FeaR M83Y, by judiciously selecting and individually mutating amino acids in the monoamine oxidase TynA and the transcriptional regulator protein FeaR to adjust their sensitivities. In this case, the TynA enzyme converts extraplastidial amines to aldehydes, which are imported into the cytoplasm. In the presence of aldehydes, FeaR induces expression of the PtynA promoter, which activates downstream gene expression in an interlocking and sophisticated switch.</p>
                <h3>Metabolic model</h3>
                <p>The main task of the metabolic model is to metabolise, in the gut, the ammonia accumulated in patients with cirrhosis, in order to assist the liver in mitigating the neurotoxic effects of excess ammonia on the brain.</p>
                <p>Ammonia metabolism in the liver is essential to prevent severe clinical conditions such as hepatic encephalopathy. In cirrhosis, in addition to the urea cycle, two other enzymes are critical for maintaining ammonia homeostasis:glutamine synthetase (expressed primarily in the liver, muscle, and kidneys) and glutaminase (expressed primarily in the intestines, liver, and kidneys). Therefore, controlling GS and glutaminase, reducing ammonia production and preventing intestinal absorption of ammonia are all potential targets for reducing circulating ammonia levels. [8] We ultimately decided to mimic the GS-GOGAT cycle within the EcN to metabolise ammonia in HE patients. [15]</p>
                <h3>Safety model</h3>
                <p>Although EcN has been shown to be a harmless strain, from the point of view of human health and environmental protection, we still need an absolute guarantee that the modified EcN will be able to function properly in the organism on demand, have a favourable impact, and even circumvent the intestinal inflammation that may occur as a result of treatment with drugs. In this regard, we aim to develop an engineered bacterium capable of fighting inflammation and repairing the intestinal barrier.</p>
                <p>TFF (Trefoil Factor Family proteins) are small 7-12 kDa proteins secreted by mucus-secreting cells on the surface of the gastrointestinal tract and other mucous membranes that primarily promote epithelial recovery. In order to make therapeutic crimped fibres, we planned to attach TFF3 (Trefoil Factor 3) to the naturally secreted crimped fibres of E. coli to reduce the adhesion of TFF3 to the intestinal mucus layer. The gene fragment responsible for the expression of curly fibres was first attached to the PBbB8k plasmid, then a 6xHis-tagged linker was introduced to connect the curly fibres to TFF3, and finally the TFF3 gene fragment was added. This structure allows EcN to secrete and self-assemble the coiled fibres, linker and TFF3 upon arrival in the gut, forming an active domain layer on the gut surface. This will maximise the ability of TFF3 to repair the intestinal barrier and reduce inflammation, effectively preventing and treating abdominal infections in patients with liver disease, addressing dysbiosis, especially repairing common intestinal problems, and improving the safety and efficacy of the engineered bacterium while alleviating the complications of hepatic encephalopathy.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Outside the laboratory</h2>
              <h3>dry lab</h3>
              <p>Content for section 3.</p>
              <h3>art design</h3>
              <p>2</p>
              <h3>hp</h3>
              <p>3</p>
              <div className="rounded-border">
              <h4 className="center-text">Section 3</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>future plans</h2>
              <p>In our plan, we expect to complete the full build of the three functional modules. We may not be able to continue the subsequent animal validation experiments due to laboratory, funding, and personnel changes, but we hope to make further efforts in the following areas to make the project more complete:</p>
              <div className="rounded-border">
              <p className="indent">1.Safety: EcN is an internationally recognised harmless probiotic, but we have still added a controlled safety module to it to ensure that the modified EcN will not cause other unforeseen harm when it enters the human gut.</p>
              <p className="indent">2.Controllable: The three modules we constructed are precisely and minutely regulated, and are only allowed to be expressed when stimulated by the external environment, and to a controlled extent.</p>
              <p className="indent">3.Persistent: EcN is able to remain in the normal gut and the beneficial effects are long lasting.</p>
              <p className="indent">4.Convenient: Our modified EcN was encapsulated in a material that is resistant to stomach acid but not intestinal fluids to create an edible capsule that can be used as a convenient drug to improve hepatic encephalopathy.</p>
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

{/* <div className="bd-callout bd-callout-info">
          Hepatic encephalopathy (HE) is a complication of cirrhosis characterized by neuropsychiatric and motor dysfunction. In 2023 it was estimated that there were 112 million individuals with liver cirrhosis worldwide, 40-60% of whom develop HE. Manifestations of HE can range from subtle (MHE) to severe (OHE) and even coma, which considerably affect the quality of life and even the survival of patients. Emerging data demonstrate the increased level of ammonia caused by liver dysfunction and overactivated microbiota in the context of cirrhosis plays an essential role in the pathogenesis of HE. Microbiome-targeted therapies for HE such as lactulose, rifaximin, probiotics, and FMT are showing promise. However, the resilience of the microbiome to sustainable change and unpredictable clinical outcomes from microbiota alterations remain challenging in the effective application of microbiome therapeutics in HE. In our project, we plan to design safe and controllable engineered bacteria that can metabolize the excessive accumulation of ammonia in the intestine of patients. We aim to improve the quality of life of patients with MHE, delaying their progression to OHE, and provide a novel idea for the microbial therapy of HE.
          </div> */}