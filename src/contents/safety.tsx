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
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Safe Project Design</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Safe Lab Work</Nav.Link>
        {/* 添加更多导航链接 */}
      </Nav>
    </div>
  );
};
// sidenavbar end 


export function Safety() {
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
    <div className="custom-header-safety">

              <img 
                src="https://static.igem.wiki/teams/5378/header/headerbar2.webp"
                alt="safety header"
                className="header-bar"
              />

<h1 className="centered-title">
  
  <img 
    src="https://static.igem.wiki/teams/5378/header/safety.png"
    alt="safety header"
    className="header-img"
  />
</h1>

</div>
      <div className="row  bg-rice_yellow">
        <div className="col-2">
          <SideNavbar activeLink={activeLink}          />
        </div>
        
        <div className="col-10">
          
              
              <Element name="section1" className="element rounded-border" id='section1'>
              <h2 className="center-text">Overview</h2>
              <p className="indent">Members of SMU-GDMU attach great importance to all safety issues involved in the project progress process and implement effective and feasible solutions to the safety issues faced, including project design safety, experimental safety, and biosafety.
The next page details the security measures and considerations our team has taken into account for this iGEM project.</p>
               </Element>
          
              <Element name="section2" className="element rounded-border" id='section2'>
              <h2 className="center-text">Safe Project Design</h2>
                <h3>2.1Chassis Safety</h3>
                <p className="indent">Our project design took safety into account and ultimately chose E. coli Nissle 1917 as our chassis, which was included in the white list and classified as Biosafety Level 1 (BSL-1).</p>
                <p className="indent">Escherichia coli Nissle 1917 is an oral probiotic commonly used to treat various gastrointestinal diseases, including diarrhea, ulcerative colitis, etc.</p>
                <h3>2.2Safety Module</h3>
                <p className="indent">From both environmental and human health protection perspectives, the design of the safety module aims to detect environmental variations inside and outside the human body, such as temperature and oxygen concentration, to induce bacterial death. This ensures that the bacteria do not cause environmental pollution after being expelled.</p>
                <p className="indent">Conversely, there is a risk of excessive proliferation of the engineered E. coli within the human body, necessitating the development of controllable switches to regulate bacterial growth and death effectively. </p>
                <p className="indent">Additionally, we recognize that abdominal infections are a significant cause of recurrent hepatic encephalopathy and can lead to death. In response, we aim to develop an engineered bacterium capable of resisting inflammation and repairing the intestinal barrier. </p>
                <p className="indent">Insights from discussions with the Peking University Medical School team have inspired our approach to utilizing curli fibers.And we referred to a study published in Nature Communications And the PATCH system was used for plasmid design. </p>
                <p className="indent">In the end, the safety module we designed can effectively prevent and treat abdominal infection in patients with liver disease, solve intestinal flora disorders, support intestinal barrier function repair and alleviate complications of hepatic encephalopathy.</p>
                <p className="indent">For details, you can see our safety module design section.</p>
                <p className="indent">
  For details, you can see our 
  <Link to="/safety">safety module design section</Link>.
</p>
                <div className='image-container'>
                <img 
                src="https://static.igem.wiki/teams/5378/safety/2.webp"
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>Safety module design ideas</figcaption>
                </div>
                
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2 className="center-text">Safe Lab Work</h2>
              
              <div className="rounded-border">
              <h3>3.1  Laboratory</h3>
              {/* <h4 className="center-text">3.1Laboratory</h4> */}
              <p className="indent">Our experiment was conducted by the iGEM laboratory of Southern Medical University. It is a laboratory with a biosafety protection level of Level 2 (BSL-II), which complies with the provisions of the Biosafety Law of the People's Republic of China and the General Biosafety Guidelines for Pathogenic Microbial Laboratories.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/safety/03-1.webp"
                alt="example"
                className="image-wide"
              />
              <div className='row'>
              <div className='col-6'>
              <img 
                src="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                alt="example"
                className="responsive-img"
              />

              </div>
              <div className='col-6'>
              <img 
                src="https://static.igem.wiki/teams/5378/safety/03-111.webp"
                alt="example"
                className="responsive-img"
              />
              </div>
              </div>
                <figcaption className='caption'>Laboratory Safety</figcaption>
              </div>
              
              
              
              <h4>Experimental equipment</h4>
              <p className="indent">The biosafety cabinet is the most important safety equipment and the main protective barrier. The laboratory should be equipped with a secondary biosafety cabinet as required. All related operations must be carried out inside the biosafety cabinet.Fill in the registration form consciously every time you use it.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/safety/03-12.webp"
                alt="example"
                className="image-wide"
              />
              <figcaption className='caption'>biosafety cabinet</figcaption>
              </div>
              
              <p className="indent">The laboratory is equipped with a ventilation system with exhaust purification devices and other equipment that does not allow microorganisms to escape to ensure safety.</p>
              <p className="indent">The laboratory is equipped with high-pressure sterilization equipment.</p>
              <div className='image-container'>
              <img 
                src="https://static.igem.wiki/teams/5378/safety/03-122.webp"
                alt="example"
                className="image-height"
              />
              <figcaption className='caption'>high-pressure sterilization equipment</figcaption>
              </div>
              

              <p className="indent">Various equipment in the laboratory will undergo regular maintenance and be promptly shut down after use.</p>
<h3>3.2  safety principles</h3>
<p className="indent">Throughout the experiment, our team members who conducted the experiment always followed the basic principles of laboratory bioprotection.</p>
<h4>3.2.1  General provisions</h4>
<p className="indent">The content of laboratory biosafety protection includes safety equipment, personal protective devices and measures (first-level protection), special design and construction requirements of the laboratory (second-level protection), strict management systems and standardized operating procedures and regulations.</p>
<p className="indent">Our laboratory has a dedicated biosafety officer.</p>
<h4>3.2.2  Personal protective</h4>
<p className="indent">Personal protective equipment cannot reduce the concentration of harmful substances in the workplace, nor can it eliminate the harmful substances present in the workplace. However, it is the last barrier to protect people from harm. As an auxiliary preventive measure, correct use of personal protective equipment can prevent or reduce the occurrence of safety accidents, etc.</p>
<p className="indent">Therefore, in the daily work of the laboratory, the importance of personal protective equipment is self-evident. Among them, hand protection is of utmost importance, because our hands are the most frequently used parts in experimental operations. Gloves can protect our hands from burns, punctures, and vibration injuries, and can also avoid direct contact with chemicals on the skin of our hands.</p>
<p className="indent">Laboratory members also need to be equipped with other necessary personal protective equipment, such as wearing white coats and masks.</p>
<img 
                src="https://static.igem.wiki/teams/5378/safety/03-2-2.webp"
                alt="example"
                className="responsive-img"
              />
              <figcaption className='caption'>The team members are conducting experiments</figcaption>
<h4>3.2.3  Laboratory safety</h4>
<p className="indent">The building where the laboratory is located has emergency passages, fire exits, fire equipment, and emergency lighting devices; and our colleagues in the Experimental Group also remember how to quickly escape from the scene when any safety accident occurs to ensure their own safety;There is also a first aid medicine storage area in the corridor for easy use when necessary.</p>   
<img 
                src="https://static.igem.wiki/teams/5378/safety/03-2-3.webp"
                alt="example"
                className="responsive-img"
              />
              <figcaption className='caption'>Fire safety management</figcaption>
<h4>3.2.4Laboratory waste treatment</h4>
<p className="indent">According to the "Regulations on the Management of Medical Waste" of the State Council and the "Measures for the Management of Medical Waste in Medical and Health Institutions" of the former Ministry of Health, we manage laboratory waste from the following aspects: ① Designate a dedicated person in the laboratory to be responsible for and coordinate the management of various types of waste; ② Establish waste classification, isolation, packaging, transportation, storage, and disposal procedures in the laboratory; ③ Members of the Experimental Group should correctly dispose of waste to their respective garbage bins, and all solutions and plates should be marked; ④ Strictly follow the waste disposal system and procedures, and have processing records.</p>
<p className="indent">We also have a special waste treatment process for bacteria and other microorganisms, as shown in the figure:</p>             
<img 
                src="https://static.igem.wiki/teams/5378/safety/03-2-4.webp"
                alt="example"
                className="responsive-img"
              />
              <figcaption className='caption'>waste treatment process</figcaption>
<h4>3.2.5Management and security system</h4>
<h5>Laboratory layout and access</h5>              
<p className="indent">Clean areas, semi-contaminated areas, and contaminated areas should be reasonably set up in the main laboratory.</p>    
<p className="indent">Non-experimental personnel and items are not allowed to enter the laboratory.</p>
<p className="indent">Do not eat or drink in the laboratory, or engage in other activities unrelated to the experiment</p>          
<h5>Training of experimental members</h5> 
<p className="indent">Members of our Experimental Group have received professional experimental guidance under the guidance of our advisor.</p>             
<p className="indent">Members of the Experimental Group always comply with all regulations, rules, and operating procedures of the laboratory.</p> 
<p className="indent">All members of the Experimental Group have passed the assessment of experimental skills and safety.</p>              
<h3>3.2.6Principles for handling special situations in the laboratory</h3> 
<p className="indent">In order to avoid and handle accidents caused by unsafe operations, the following principles must be strictly implemented:</p>             
<p className="indent">a)Design safe work procedures for possible risk factors.</p>              
<p className="indent">b)Conduct effective training and simulation training beforehand.</p>              
<p className="indent">c)For accidents, measures including emergency assistance or professional health treatment should be provided to cope with emergencies.</p>             
<p className="indent">d)Laboratory Accident Handling: Accidents that occur during the operation of experimental members, such as needle punctures and cuts, skin contamination, infectious specimens and body surfaces and inside the mouth, nose, and eyes, clothing contamination, contamination of the test bench, etc., are all considered safety accidents. Emergency treatment should be carried out immediately depending on the type of accident and other situations. At the same time of emergency treatment, it is necessary to report to the instructor and record the specific location and degree of the accident and injury in detail. Medical personnel will evaluate whether preventive treatment is needed.</p>             
<img 
                src="https://static.igem.wiki/teams/5378/safety/2-666666.webp"
                alt="example"
                className="responsive-img"
              />
              <figcaption className='caption'>Medical first aid items</figcaption>            
              </div>
              </Element>

        </div>

          
        
      </div>
    </>
  );
}
