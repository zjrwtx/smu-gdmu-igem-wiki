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
<h1 className="centered-title">DESCRIPTION</h1>
</div>
      <div className="row  bg-rice_yellow">
        <div className="col-3">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-8">
          
              
              <Element name="section1" className="element rounded-border" id='section1'>
                 <h2>Project Introduction</h2>
                 <h3>Global impact of the disease</h3>
                 <p>Hepatic encephalopathy (HE), also known as hepatic coma, is broadly defined as cerebral dysfunction caused by hepatic insufficiency and/or portal shunting, with a spectrum of impaired consciousness or neurological derangements ranging from a distinct subclinical state to coma. [1] The International Society for Hepatic Encephalopathy and Nitrogen Metabolism (ISHEN) agrees that disorientation or asterixis is the beginning of overt hepatic encephalopathy (grades II to IV), which includes neurological and psychiatric abnormalities that can be detected on bedside clinical examination, whereas occult hepatic encephalopathy (very mild and grade 1) can only be differentiated by specific psychometric tests as these patients have a normal mental and neurological status on clinical examination. [2]
The clinical manifestations of HE are very specific and are characterised by changes in the patient's personality, behavioural abnormalities, changes in habits, the appearance of hepatic odour, fluttering tremor, blurred consciousness, visual disturbances and coma.
According to epidemiological surveys, the incidence of hepatic encephalopathy is currently 11.6/100 person-years, which is expected to increase to 40% in 5 years. [3] Based on the presence of risk factors such as mHE, grade I hepatic encephalopathy, diabetes mellitus, hyponatraemia and hepatitis C, the risk of the first significant hepatic encephalopathy within 5 years of the diagnosis of cirrhosis is approximately 25%. [4] Despite standard treatment, patients with previous episodes of overt hepatic encephalopathy have a 42% risk of recurrence within 1 year, and patients with recurrent overt hepatic encephalopathy have a 46% risk of another episode within 6 months. [5] Compared with cirrhotic patients without hepatic encephalopathy, population-based cirrhotic patients with overt hepatic encephalopathy have a mean survival of only a few months and a twofold increased risk of death within 1 year. [6]
In former times, HE was defined simply as a disease caused by a metabolic disorder that could be cured by liver transplantation. However, numerous studies have shown that dominant HE is characterised by a pathology of neuroinflammation as well as extensive neuronal cell death, and that the cell death is irreversible, so that dominant HE may be permanent for the patient, and that the patient's suffering will not go away, but will continue to flare up after liver transplantation. [7] This leads to prolonged hospitalisation and repeated admissions, causing great physical and mental suffering to the patient and increasing the healthcare burden and costs associated with HE management to society.
Data show that the annual cost of patients with HE is 50% higher than that of patients with heart failure or chronic obstructive pulmonary disease (COPD). [8]
But even more important to our concern than the financial burden is the fact that it has now been demonstrated that hepatic encephalopathy is associated with a high mortality rate, regardless of its severity. [6] How to reduce mortality in patients with HE has become a very critical issue.</p>
                 <h3>Spark</h3>
                 <p>This year, our team felt a strong call to address global health issues that have far-reaching consequences for individuals and society. We are grateful to synthetic biology for providing a practical engineering approach that can combine modules with independent functions like a jigsaw puzzle to fulfil their joint functions. At the same time, we see great potential for synthetic biology to address this issue, and we hope to be able to provide a new line of therapeutic options for the treatment of hepatic encephalopathy through this work.</p>
                 <p>The pathogenesis of hepatic encephalopathy is not fully understood and possible hypotheses are as follows:</p>
                 <p>1.Ammonia Toxicity Theory</p>
                 <p>Several studies have elucidated that toxic levels of ammonia in the brain are one of the more prominent features, although the pathophysiology of HE is still not fully understood. [9] Ammonia is an important product of intestinal metabolic activity, and a healthy liver with an intact urea cycle is able to regulate ammonia in the body's circulation, thereby maintaining blood ammonia levels at low levels of 35-50 uM. However, in cirrhosis, factors and other molecules (e.g., ammonia) that are normally prevented by the body from crossing the blood-brain barrier are able to naturally cross the blood-brain barrier, fill the brain, and stimulate pathophysiological pathways with deleterious effects. Neurological damage and cognitive decline due to liver dysfunction are the result of blood-borne factors that affect blood-brain barrier permeability and/or alter blood-brain barrier integrity. [10] Normal ammonia concentrations can also be used to rule out the diagnosis of hepatic encephalopathy in patients with suspected overt hepatic encephalopathy because of the high negative predictive value of normal ammonia concentrations (0.81). [11]</p>
                 <p>2.Pseudo-neurotransmitter theory</p>
                 <p>The conduction of nerve impulses is accomplished by means of transmitters. Neurotransmitters are divided into two categories, excitatory and inhibitory, which maintain a physiological balance when normal. Excitatory neurotransmitters include dopamine and norepinephrine in catecholamines, acetylcholine, glutamate and menthionine; inhibitory neurotransmitters are formed only in the brain. Aromatic amino acids in food, such as tyrosine and phenylpropanoid amino acids, are converted to tyramine and phenylethylamine PEA, respectively, by the action of enterobacterial decarboxylase. In normal times, these two amines are cleared by monoamine oxidase in the liver, but when liver failure occurs, clearance is impaired, and these two amines can enter the brain tissue, where they are formed into amines (β-hydroxytyramine) and phenylethanolamine by β-hydroxylase, respectively. The latter two are similar in chemical structure to the normal neurotransmitter norepinephrine, but are unable to transmit nerve impulses or have very weak effects, and are therefore called pseudoneurotransmitters. When pseudoneurotransmitters are taken up by brain cells and replace normal transmitters in the synapses, nerve conduction is impaired, and excitatory impulses are not transmitted normally to the cerebral cortex, resulting in abnormal inhibition; impaired consciousness and coma occur. []</p>
                 <p>In an effort to find out more precisely what risk factors are associated with the development of HE, our team actively communicated with the PI and learned of a related, unpublished study that concluded that patients with higher baseline PEA levels (upper quartile) had a 6.95-fold higher risk of developing HE at 3 months than patients in the lower quartile (p = 0.0017) [].</p>
                 <h3>Current treatments</h3>
                 <p>1</p>
                 <p>1</p>
                 <p>1</p>
                 <p>1</p>
                 <p>1</p>
                 <p>1</p>
                 <h3>New treatments</h3>
                 <p>Content for section 1.</p>
                 <h3>foresight</h3>
                 <p>Content for section 1.</p>
                 <p>Content for section 1.</p>
                 <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
               </Element>
          

          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Our Solutions</h2>
                <p>Content for section 2.</p>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Outside the laboratory</h2>
              <p>Content for section 3.</p>
              <div className="rounded-border">
              <h4 className="center-text">Section 3</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section4" className="element rounded-border" id='section4'>
              <h2>future plans</h2>
              <p>Content for section 4.</p>
              <div className="rounded-border">
              <h4 className="center-text">我是大帅B</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              </div>
              </Element>

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>reference</h2>
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

{/* <div className="bd-callout bd-callout-info">
          Hepatic encephalopathy (HE) is a complication of cirrhosis characterized by neuropsychiatric and motor dysfunction. In 2023 it was estimated that there were 112 million individuals with liver cirrhosis worldwide, 40-60% of whom develop HE. Manifestations of HE can range from subtle (MHE) to severe (OHE) and even coma, which considerably affect the quality of life and even the survival of patients. Emerging data demonstrate the increased level of ammonia caused by liver dysfunction and overactivated microbiota in the context of cirrhosis plays an essential role in the pathogenesis of HE. Microbiome-targeted therapies for HE such as lactulose, rifaximin, probiotics, and FMT are showing promise. However, the resilience of the microbiome to sustainable change and unpredictable clinical outcomes from microbiota alterations remain challenging in the effective application of microbiome therapeutics in HE. In our project, we plan to design safe and controllable engineered bacteria that can metabolize the excessive accumulation of ammonia in the intestine of patients. We aim to improve the quality of life of patients with MHE, delaying their progression to OHE, and provide a novel idea for the microbial therapy of HE.
          </div> */}