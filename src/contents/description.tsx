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
                 <p className='indent'>Hepatic encephalopathy (HE) , which develops from liver cirhosis, causes increasing mortality worldwide and places huge burden on patients and the society. However, preventing HE has been challenging, with medication mainly focus on alleviating syptoms after developing HE and have long-term side effects. Here, we demonstrate a synthetic biology-inspired probiotic therapeutic, <span className='bold-font'>Liver-Brain Guardian</span>, to automatically respond to the level of HE biomarker and initiate the degradation of HE pathogenic factor, and could improve intestinal barrier function and epithelial recovery. Our results showed that the engineered bacteira(EcN) can successfully sense the rising level of PEA, a reliable risk factor in HE patients , and activate the FeaR-TynA inducible promoter system to initiate the downstream metabolic module to degrade ammonia. Our approach offers an exciting and promising way to help cirrhosis patients with high risk of developing HE from progressing and start in-time treatment. </p>
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
          
               <Element name="section3" className="element rounded-border" id='section3'>
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

               <Element name="section4" className="element rounded-border" id='section4'>
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

               <Element name="section5" className="element rounded-border" id='section5'>
                 <h1>Project Goal and Design</h1>
                 <p className='indent bold-font'>Our project aims to provide in-time HE prevention and treatment for cirrhosis patients to improve their quality of life and lower their families' heavy burden.</p>
                  <h2>Design Overview</h2>
                  <p className='indent'>We recognise the potential advantage of synthetic biology in solving global health problems by enabling the tight integration of dispersed functional modules. As a result, we plan to take a new angle - <span className='bold-font'>sensing</span> phenylethylamine - to stimulate the expression of downstream <span className='bold-font'>metabolic</span> modules to degrade excess ammonia in the patient's body, thereby undoing the toxic effects of ammonia overload on the brain. At the same time, our <span className='bold-font'>safety</span> module operates at all times to reduce the level of intestinal inflammatory factors and maintain the stability of the intestinal barrier, ensuring the normal state of the metabolic and sensing modules.</p>
                  
                  <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Figure 3. Overall design of our project</figcaption>
                </div>
                <p className='indent'>In conclusion, there is great uncertainty and instability in the treatment of HE, and it is urgent to find more effective and safe treatment options in order to reduce the suffering of patients and the burden on the social healthcare system.</p>
               
               <h2>Sensing Module</h2>
               <p className='indent'>We conducted broad investigations into the determination of reliable risk factors as a proper sensor for our project and after 3 engineering cycles (see details of our design in <a href='https://2024.igem.wiki/smu-gdmu-china/model'><span className='bold-font'>Engineering Page</span></a> ) and successfully came to final design in <span className='bold-font'>Figure 4</span>.</p>
                <p className='indent'>Clinically, high baseline PEA levels were linked to a 7-folds increased risk of HE post-intrahepatic portosystemic shunt procedures, which was verified by our secondary PI in his recent work in submission. Here we introduce a TynA-FeaR system[12] to respond to the increased level of PEA and initiate the metabolic module downstream. TynA is a monoamine oxidase that can oxidize aromatic amines such as PEA to the corresponding aldehyde, PAG. In the presence of PAG, FeaR can induce PtynA promoter to activate downstream gene expression in an interlocking and sophisticated switch.</p>
              <h2>Metabolic Module</h2>
              <p className='indent'>We designed several ways to metabolize the pathogenic factors in HE but only succeeded in expressing GS enzyme to metabolic ammonia in this iGEM cycle this year (see details of our efforts in <a href='https://2024.igem.wiki/smu-gdmu-china/model'><span className='bold-font'>Engineering Page</span></a>) . </p>
              <p className='indent'>In humans and other mammals, ammonia is majorly digested by the Urea Cycle in the liver. However, as it is shown before, the liver functions are destroyed in HE patients, so the urea cycle is hard to use. So we move our sight to plants. Through literature reading, we found plants can utilize ammonium and metabolize via the glutamine synthetase-glutamate synthase (GS-GOGAT) pathway. This process wouldn't produce any harmful substance to the human body, so we tried to heterologously express GS as our metabolic module to reduce the level of ammonia.</p>
              <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Figure 5. GS-GOGAT Cycle in Liver-Brain Guardian design</figcaption>
                </div>

              <h2>Safety Module</h2>
              <p className='indent'>Although EcN has been shown to be a harmless strain, from the point of view of human health and environmental protection, we still need an absolute guarantee that the modified EcN will be able to function properly in the organism on demand, have a favourable impact, and even circumvent the intestinal inflammation that may occur as a result of treatment with drugs[14]. In this regard, we aim to develop an engineered bacterium capable of fighting inflammation and repairing the intestinal barrier.</p>
              <p className='indent'>TFF (Trefoil Factor Family proteins) are small 7-12 kDa proteins secreted by mucus-secreting cells on the surface of the gastrointestinal tract and other mucous membranes that primarily promote epithelial recovery[15]. In order to make therapeutic crimped fibres, we planned to attach TFF3 (Trefoil Factor 3) to the naturally secreted crimped fibres of E. coli to reduce the adhesion of TFF3 to the intestinal mucus layer. The gene fragment responsible for the expression of curly fibres was first attached to the PBbB8k plasmid, then a 6xHis-tagged linker was introduced to connect the curly fibres to TFF3, and finally the TFF3 gene fragment was added. This structure allows EcN to secrete and self-assemble the coiled fibres, linker and TFF3 upon arrival in the gut, forming an active domain layer on the gut surface. This will maximise the ability of TFF3 to repair the intestinal barrier and reduce inflammation, effectively preventing and treating abdominal infections in patients with liver disease, addressing dysbiosis, especially repairing common intestinal problems, and improving the safety and efficacy of the engineered bacterium while alleviating the complications of hepatic encephalopathy.</p>
              <div className='image-container'>
                  <img
                src=""
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Figure 6. Design of Safety module</figcaption>
                </div>
                </Element>


























              <Element name="section6" className="element rounded-border" id='section6'>
              <h1>future plans</h1>
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

              <Element name="section7" className="element rounded-border" id='section7'>
              <h2>reference</h2>
              <p>
[1]Vilstrup H, Amodio P, Bajaj J, Cordoba J, Ferenci P, Mullen KD, et al. Hepatic encephalopathy in chronic liver disease: 2014 practice guideline by the American Association for the Study of Liver Diseases and the European Association for the Study of the Liver. Hepatology 2014;60:715–735.
<br />[2]GBD 2017 Cirrhosis Collaborators. (2020). The global, regional, and national burden of cirrhosis by cause in 195 countries and territories, 1990-2017: a systematic analysis for the Global Burden of Disease Study 2017. Lancet. Gastroenterol. Hepatol. 5, 245-266. 10.1016/S2468-1253(19)30349-8.
<br />[3]Häussinger, D., Dhiman, R.K., Felipo, V., Görg, B., Jalan, R., Kircheis, G., Merli, M., Montagnese, S., Romero-Gomez, M., Schnitzler, A., et al. (2022). Hepatic encephalopathy. Nat. Rev. Dis. Primers. 8, 43. 10.1038/s41572-022-00366-6.
<br />[4]Morais, L.H., Schreiber, H.L. 4th, and Mazmanian, S.K. (2021). The gut microbiota-brain axis in behaviour and brain disorders. Nat Rev Microbiol. 19, 241-255. 10.1038/s41579-020-00460-0
<br />[5]Bass NM, Mullen KD, Sanyal A, Poordad F, Neff G, Leevy CB, et al. Rifaximin treatment in hepatic encephalopathy. N Engl J Med 2010;362:1071–1081.
<br />[6] Keiding S, Sørensen M, Bender D, Munk OL, Ott P, Vilstrup H. Brain metabolism of 13N-ammonia during acute hepatic encephalopathy in cirrhosis measured by positron emission tomography. Hepatology 2006;43:42–50.
<br />[7] Rose CF, Amodio P, Bajaj JS, Dhiman RK, Montagnese S, Taylor-Robinson SD, Vilstrup H, Jalan R. Hepatic encephalopathy: Novel insights into classification, pathophysiology and therapy. J Hepatol. 2020 Dec;73(6):1526-1547. 
<br />[8]Systems biology analysis of lactulose withdrawal in hepatic encephalopathy. Metab Brain Dis 2012;27:205–215.
<br />[9]Dalal R, McGee RG, Riordan SM, Webster AC. Probiotics for people with hepatic encephalopathy. Cochrane Database Syst Rev 2017;2:CD008716.
<br />[10]Simón-Talero M, García-Martínez R, Torrens M, Augustin S, Gómez S, Pereira G, et al. Effects of intravenous albumin in patients with cirrhosis and episodic hepatic encephalopathy: a randomized double-blind study. J Hepatol 2013;59:1184–1192.
<br />[11]Bai M, Yang Z, Qi X, Fan D, Han G. L-ornithine-L-aspartate for hepatic encephalopathy in patients with cirrhosis: a meta-analysis of randomized controlled trials. J Gastroenterol Hepatol 2013;28:783–792.
<br />[12]Rottinghaus A G, Xi C, Amrofell M B, et al. Engineering ligand-specific biosensors for aromatic amino acids and neurochemicals[J]. Cell systems, 2022, 13(3): 204-214. e4.
<br />[13]Hao DL, Zhou JY, Yang SY, Qi W, Yang KJ, Su YH. Function and Regulation of Ammonium Transporters in Plants. Int J Mol Sci. 2020 May 18;21(10):3557. 
<br />[14]Lachar, J., & Bajaj, J. S. (2016). Changes in the Microbiome in Cirrhosis and Relationship to Complications: Hepatic Encephalopathy, Spontaneous Bacterial Peritonitis, and Sepsis. Seminars in liver disease, 36(4), 327–330. https://doi.org/10.1055/s-0036-1593881
<br />[15]Girleanu, I., Trifan, A., Huiban, L., Muzica, C., Nemteanu, R., Teodorescu, A., Singeap, A. M., Cojocariu, C., Chiriac, S., Petrea, O., Zenovia, S., Nastasa, R., Cuciureanu, T., & Stanciu, C. (2021). The Risk of Clostridioides difficile Infection in Cirrhotic Patients Receiving Norfloxacin for Secondary Prophylaxis of Spontaneous Bacterial Peritonitis-A Real Life Cohort. Medicina (Kaunas, Lithuania), 57(9), 964. https://doi.org/10.3390/medicina57090964</p>
              {/* <p>[2]Randolph C, Hilsabeck R, Kato A, et al. Neuropsychological assessment of hepatic encephalopathy: ISHEN practice guidelines. Liver Int. 2009;29:629-35.</p>
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
              <p>[15] Hao DL, Zhou JY, Yang SY, Qi W, Yang KJ, Su YH. Function and Regulation of Ammonium Transporters in Plants. Int J Mol Sci. 2020 May 18;21(10):3557. </p> */}
              </Element>

           
          

        </div>

          
        
      </div>
    </>
  );
}

{/* <div className="bd-callout bd-callout-info">
          Hepatic encephalopathy (HE) is a complication of cirrhosis characterized by neuropsychiatric and motor dysfunction. In 2023 it was estimated that there were 112 million individuals with liver cirrhosis worldwide, 40-60% of whom develop HE. Manifestations of HE can range from subtle (MHE) to severe (OHE) and even coma, which considerably affect the quality of life and even the survival of patients. Emerging data demonstrate the increased level of ammonia caused by liver dysfunction and overactivated microbiota in the context of cirrhosis plays an essential role in the pathogenesis of HE. Microbiome-targeted therapies for HE such as lactulose, rifaximin, probiotics, and FMT are showing promise. However, the resilience of the microbiome to sustainable change and unpredictable clinical outcomes from microbiota alterations remain challenging in the effective application of microbiome therapeutics in HE. In our project, we plan to design safe and controllable engineered bacteria that can metabolize the excessive accumulation of ammonia in the intestine of patients. We aim to improve the quality of life of patients with MHE, delaying their progression to OHE, and provide a novel idea for the microbial therapy of HE.
          </div> */}