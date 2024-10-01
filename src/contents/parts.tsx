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
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Basice Parts</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Composite Parts</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Section 3</Nav.Link>
        <Nav.Link as={Link} to="section4" smooth={true} duration={500} className={activeLink === 'section4' ? 'active' : 'notActive'}>Section 4</Nav.Link>
        <Nav.Link as={Link} to="section5" smooth={true} duration={500} className={activeLink === 'section5' ? 'active' : 'notActive'}>Section 5</Nav.Link>
      </Nav>
    </div>
  );
};
// sidenavbar end 

type TableRowData = {
  id: string;
  type: string;
  description: string;
  class: string;
  link: string;
};

const basicParts: TableRowData[] = [
  { id: 'BBa_K5378000', type: 'Coding', description: 'GS',class:"table-element-yellow",link:'' },
  { id: 'BBa_K5378001', type: 'Coding', description: 'TPH1',class:"table-element-orange",link:''},
  { id: 'BBa_K5378006', type: 'Coding', description: 'tynA-G494S',class:"table-element-yellow",link:''},
  { id: 'BBa_K5378007', type: 'Coding', description: 'feaR-A81L',class:"table-element-orange",link:''},
  { id: 'BBa_K5378009', type: 'Promoter', description: 'PtynA',class:"table-element-yellow",link:''},
  { id: 'BBa_K5378011', type: 'Coding', description: 'CsgA',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378011'},
  { id: 'BBa_K5378012', type: 'Coding', description: 'TFF3',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378012'},
  { id: 'BBa_K5378016', type: 'RBS', description: 'RBS',class:"table-element-orange",link:''},
  
  { id: 'BBa_K5378007', type: 'Coding', description: 'GFP',class:"table-element-yellow table-bottom-line",link:''},

];
const compositeParts: TableRowData[] = [
  { id: 'BBa_K5378002', type: 'Composite', description: 'PtynA-RBS-TPH1',class:"table-element-yellow",link:'' },
  { id: 'BBa_K5378003', type: 'Composite', description: 'PtynA-RBS-GS',class:"table-element-orange",link:''},
  { id: 'BBa_K5378004', type: 'Composite', description: 'feaR-A81L-G494S-PtynA-GS',class:"table-element-yellow",link:''},
  { id: 'BBa_K5378005', type: 'Composite', description: 'feaR-A81L-G494S-PtynA-TPH1',class:"table-element-orange",link:''},
  { id: 'BBa_K5378010', type: 'Composite', description: 'PtynA-RBS-GFP',class:"table-element-yellow table-bottom-line",link:''},


];

export function parts() {
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
      <div className="custom-header-model">
                <h1 className="centered-title">
                <img
                        src="https://static.igem.wiki/teams/5378/header/parts.png"
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

        <div className='row bg-rice_yellow'>
        <div className="col-2">
            <SideNavbar activeLink={activeLink}          />
          </div>
          
          <div className="col-10">
            
                <Element name="section1" className="element rounded-border" id='section1'>
                   <h2>1. Basic Parts</h2>
                   <p>Content for section 1.</p>
                   <table className="three-line-table">
                      <thead>
                            <tr className='table-head-line'>
                                <th>Part Name</th>
                                <th>Type</th>
                                <th>Short Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basicParts.map((row) => (
                                <tr className={row.class} key={row.id}>
                                    <td><a href={row.link}>{row.id}</a></td>
                                    <td>{row.type}</td>
                                    <td>{row.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </Element>
            
  
                 <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
                
                <Element name="section2" className="element rounded-border" id='section2'>
                  <h2>2. Composite Parts</h2>
                  <p>Content for section 2.</p>
                  <table className="three-line-table">
                      <thead>
                            <tr className='table-head-line'>
                                <th >Part Name</th>
                                <th >Type</th>
                                <th >Short Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compositeParts.map((row) => (
                                <tr className={row.class} key={row.id}>
                                    <td><a href={row.link}>{row.id}</a></td>
                                    <td>{row.type}</td>
                                    <td>{row.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>                 
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

              <Element name="section5" className="element rounded-border" id='section5'>
              <h2>Section 5</h2>
              <p>Content for section 5.</p>
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