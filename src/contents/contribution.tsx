import { Nav } from 'react-bootstrap';
import { Link,Element } from 'react-scroll';
import React,{useEffect,useState} from 'react';


// sidenavbar begin
interface SideNavbarProps {
  activeLink: string;
}

type TableRowData = {
    id: string;
    type: string;
    description: string;
    class: string;
    link: string;
  };

const SideNavbar: React.FC<SideNavbarProps> = ({ activeLink }) => {
  return (
    <div className="side-navbar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>Parts</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Model</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Product</Nav.Link>
   
        {/* 添加更多导航链接 */}
      </Nav>
    </div>
  );
};
// sidenavbar end 


const basicParts: TableRowData[] = [
  { id: 'BBa_K5378000', type: 'Coding', description: 'GS',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378000' },
  { id: 'BBa_K5378001', type: 'Coding', description: 'TPH1',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378001'},
  { id: 'BBa_K5378006', type: 'Coding', description: 'tynA-G494S',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378006'},
  { id: 'BBa_K5378007', type: 'Coding', description: 'feaR-A81L',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378007'},
  { id: 'BBa_K5378009', type: 'Promoter', description: 'PtynA',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378009'},
  { id: 'BBa_K5378011', type: 'Coding', description: 'CsgA',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378011'},
  { id: 'BBa_K5378012', type: 'Coding', description: 'TFF3',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378012'},
  { id: 'BBa_K5378016', type: 'RBS', description: 'RBS',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378016'},
  { id: 'BBa_K5378018', type: 'Coding', description: 'GFP',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378018' },
  { id: 'BBa_K5378020', type: 'Coding', description: '6xHis',class:"table-element-orange table-bottom-line",link:'https://parts.igem.org/partsdb/edit_seq.cgi?part=BBa_K5378020'},
];
const compositeParts: TableRowData[] = [
  { id: 'BBa_K5378002', type: 'Composite', description: 'PtynA-RBS-TPH1',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378002' },
  { id: 'BBa_K5378023', type: 'Composite', description: 'PtynA-RBS-GS',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378023'},
  { id: 'BBa_K5378004', type: 'Composite', description: 'feaR-A81L-G494S-PtynA-GS',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378004'},
  { id: 'BBa_K5378005', type: 'Composite', description: 'feaR-A81L-G494S-PtynA-TPH1',class:"table-element-orange",link:'https://parts.igem.org/Part:BBa_K5378005'},
  { id: 'BBa_K5378022', type: 'Composite', description: 'PtynA-RBS-GFP',class:"table-element-yellow",link:'https://parts.igem.org/Part:BBa_K5378022'},
  { id: 'BBa_K5378021', type: 'Composite', description: 'CsgA-6xHis-TFF3',class:"table-element-orange table-bottom-line",link:'https://parts.igem.org/Part:BBa_K5378021'},
];

export function Contribution() {



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
      <div className="custom-header-contribution">
      <h1 className="centered-title">
      <img 
                src="https://static.igem.wiki/teams/5378/header/contribution.png"
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
                <p className="indent">We have built several BioBricks, which cover all aspects throughout our projects, constituting our sensory module, metabolic module, and safety module.</p>
                   <h2>1.Our Basic Parts</h2>
                   <p className="indent">We designed six basic parts in total this year,you can click on the part to see details.</p>
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



         
                  <h2>2.Our Composite Parts</h2>
                  <p className="indent">We designed seven composite parts in total this year,you can click on the part to see details.</p>
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
         
                <h2> 3.Contribution</h2>
                <p className="indent">In addition, we have added content to the uploaded parts.</p>
                <p className="indent">We optimized the codon of <a href='https://parts.igem.org/Part:BBa_K3924011'>BBa_K3924011</a> and <a href='https://parts.igem.org/Part:BBa_K3924002'>BBa_K3924002</a>, and added two basic components accordingly, namely <a href='https://parts.igem.org/Part:BBa_K5378011'>BBa_K5378011</a> and <a href='https://parts.igem.org/Part:BBa_K5378012'>BBa_K5378012</a>.</p>
                <p className="indent">Moreover, we added information to an existing part created by iGEM21_Tsinghua, clearly documenting our Functional Verification on the Part's Main Page on the Registry. Here shows the link <a href='https://parts.igem.org/Part:BBa_K3924029'>BBa_K3924029</a>.And we also make our new composite part <a href='https://parts.igem.org/Part:BBa_K5378021'>BBa_K5378021</a>.</p>
                </Element>
                
                <Element name="section1" className="element rounded-border" id='section1'>
                   <h2>Section 1</h2>
                   <p>Content for section 1.</p>
                   <img 
                  src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                  alt="example"
                  className="responsive-img"
                />
                 </Element>
            
  
                 <div className="bd-callout bd-callout-info bg-gray">
                  <h1>What do we do to ...? See...</h1>
                </div>
                
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
                <h2>Product</h2>
                <p className="indent">Our improved probiotics not only respond to the concentration changes of phenylethylamine by degrading NH3 through the glutamine metabolic pathway, but also have distinct advantages in the safety module, capable of secreting protective proteins to prevent intestinal mucosal damage. </p>
                <p className="indent">They have high medicinal value, and therefore we have formulated them into medicinal capsules, allowing the probiotics to enter the intestines through oral administration and exert their therapeutic effects.</p>
                <p className="indent">In addition, our safety module is designed in a novel manner to control the survival or death of engineered bacteria by exogenous administration, both to avoid overpopulation and to kill the engineered bacteria quickly when it is not wanted, in a controllable, human-initiated manner. Its combination with a temperature-controlled suicide system allows the engineered bacteria to die immediately after being expelled from the body without polluting the environment. </p>
                <p className="indent">Thus, we have provided the iGEM community with new parts along with new ideas for safe genetic routes.</p>
                <p>The ideal process is as follows:</p>
                <div className="rounded-border">
                <h4 className="center-text">Air-dried microencapsulated substances</h4>
                <p className="indent">Air-dried microencapsulated substances can be used to encapsulate genetically engineered bacteria modified to express ammonia, enhancing the stability and application performance of drugs, extending the storage time to over 7 years.</p>
                <p className="indent">Here is a detailed explanation of our future research and development product, air-dried microencapsulated substances:</p>
                <p className="indent">Preparation technology: Air-dried microencapsulated substances are typically prepared using the spray drying method in physical mechanical processes. This method involves dispersing the core material in a molten coating material, then spraying it into a hot airflow for drying and solidification, forming microcapsules.</p>
                <p className="indent">Features and applications: Microencapsulation technology can mask unpleasant odors and tastes of drugs, improve drug stability, prevent inactivation of drugs in the stomach or reduce irritation to the stomach. At the same time, it utilizes a new type of multi-molecular nanocrosslinked shell that is easily absorbed and rich in various vitamins, improving the intestinal microecology of HE patients, achieving the goal of treating the disease at its root. It also preserves the vitality of the bacterial strains, has certain memory characteristics, and can release substances that regulate intestinal pH according to the state of the bacterial strains, allowing EcN to exert its enzymatic activity in the optimal environment, maximizing the function of ammonia degradation. This is our most distinctive innovation in the safety module, the moat of the product.</p>
                </div>
                </Element>

            
            
  
          </div>
          <div className="col-1"></div>
  
            
          
        </div>
      </>
    );
  }
