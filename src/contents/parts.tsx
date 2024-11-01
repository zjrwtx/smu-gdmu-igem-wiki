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
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Contribution</Nav.Link>
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
      <div className="custom-header-parts">
                <h1 className="centered-title">
                <img
                        src="https://static.igem.wiki/teams/5378/header/parts.png"
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

        <div className='row bg-rice_yellow'>
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
                 </Element>

                <Element name="section2" className="element rounded-border" id='section2'>
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
                </Element>
            
  
                <Element name="section3" className="element rounded-border" id='section3'>
                <h2> 3.Contribution</h2>
                <p className="indent">In addition, we have added content to the uploaded parts.</p>
                <p className="indent">We optimized the codon of <a href='https://parts.igem.org/Part:BBa_K3924011'>BBa_K3924011</a> and <a href='https://parts.igem.org/Part:BBa_K3924002'>BBa_K3924002</a>, and added two basic components accordingly, namely <a href='https://parts.igem.org/Part:BBa_K5378011'>BBa_K5378011</a> and <a href='https://parts.igem.org/Part:BBa_K5378012'>BBa_K5378012</a>.</p>
                <p className="indent">Moreover, we added information to an existing part created by iGEM21_Tsinghua, clearly documenting our Functional Verification on the Part's Main Page on the Registry. Here shows the link <a href='https://parts.igem.org/Part:BBa_K3924029'>BBa_K3924029</a>.And we also make our new composite part <a href='https://parts.igem.org/Part:BBa_K5378021'>BBa_K5378021</a>.</p>
                </Element>

              
          </div>
        </div>
        
      </>
    );
  }