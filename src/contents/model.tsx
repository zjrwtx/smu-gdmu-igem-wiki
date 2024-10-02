import { Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import MathJax from 'react-mathjax';




type formData = {
    id: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
};
const table1: formData[] = [
    { id: 'CBMKr', col1: 'Carbamate kinase', col2: 'atp_c + co2_c + nh4_c <=> adp_c + cbp_c + 2.0 h_c', col3: '0.551604', col4: 'Maximize' },
    { id: 'GMPS', col1: 'GMP synthase', col2: 'atp_c + nh4_c + xmp_c --> amp_c + gmp_c + 2.0 h_c + ppi_c', col3: '0.214121', col4: 'Maximize' },
    { id: 'ASNS2', col1: 'Asparagine synthetase', col2: 'asp\\_\\_L_c + atp_c + nh4_c --> amp_c + asn\\_\\_L_c + h_c + ppi_c', col3: '0.212208', col4: 'Maximize' },
    { id: 'GLYCL', col1: 'Glycine Cleavage System', col2: 'gly_c + nad_c + thf_c --> co2_c + mlthf_c + nadh_c + nh4_c', col3: '0.047647', col4: 'Minimize' },
    { id: 'TRPAS2', col1: 'Tryptophanase (L-tryptophan)', col2: 'h2o_{c} + trp\\_\\_L_{c} <=> indole_{c} + nh4_{c} +  pyr_{c}', col3: '-0.050040', col4: 'Minimize' },
    { id: 'GLUDy', col1: 'Glutamate dehydrogenase (NADP)', col2: 'glu\\_\\_L_c + h2o_c + nadp_c <=> akg_c + h_c + nadph_c + nh4_c', col3: '-7.527480', col4: 'Minimize' }
];


const table2: formData[] = [
    { id: 'GLYCL', col1: 'ATPS4rpp', col2: 'ECOLIN_RS21500, ECOLIN_RS21495, ECOLIN_RS21480, ECOLIN_RS21490, ECOLIN_RS21485, ECOLIN_RS21470', col3: '0', col4: '0.313876' },
    { id: 'GLYCL', col1: 'GHMT2r, THFAT', col2: 'ECOLIN_RS14440', col3: '0', col4: '0.859271' },
    { id: 'GLYCL', col1: 'GLYCL', col2: 'ECOLIN_RS16175, ECOLIN_RS16165', col3: '0', col4: '0.880005' },
    { id: 'GLYCL', col1: 'PSERT, OHPBAT', col2: 'ECOLIN_RS04805', col3: '0', col4: '0.838756' },
    { id: 'GLYCL', col1: 'PSP_L', col2: 'ECOLIN_RS25185', col3: '0', col4: '0.847929' },
    { id: 'GLUDy', col1: '4HTHRA', col2: 'ECOLIN_RS04630', col3: '-7.528802', col4: '0.880325' },
    { id: 'GLUDy', col1: 'DSERt2pp, ALAt2pp_copy1, DALAt2pp, BALAt2pp, GLYt2pp', col2: 'ECOLIN_RS24450', col3: '-7.538280', col4: '0.880164' },
    { id: 'GLUDy', col1: 'ENO', col2: 'ECOLIN_RS15500', col3: '-13.732623', col4: '0.704571' },
    { id: 'GLUDy', col1: 'TRPAS2', col2: 'ECOLIN_RS21355', col3: '-7.572622', col4: '0.879762' }
];



const table3: formData[] = [
    { id: 'None (WT)', col1: '0.880331', col2: '10.799070', col3: "1", col4: "1" },
    { id: 'ECOLIN_RS15500', col1: '0.704571', col2: '1.992122', col3: '80.034818', col4: '18.447165' },
    { id: 'ECOLIN_RS04630, ECOLIN_RS15500', col1: '0.704571', col2: '1.919909', col3: '80.034818', col4: '17.778463' },
    { id: 'ECOLIN_RS15500, ECOLIN_RS21355', col1: '0.704571', col2: '1.919909', col3: '80.034818', col4: '17.778463' },
    { id: 'ECOLIN_RS04630, ECOLIN_RS15500, ECOLIN_RS21355', col1: '0.704571', col2: '1.883483', col3: '80.034818', col4: '17.441162' },
    { id: 'ECOLIN_RS16175, ECOLIN_RS15500, ECOLIN_RS21355', col1: '0.703909', col2: '1.883483', col3: '79.959584', col4: '17.441162' },
    { id: 'ECOLIN_RS16175, ECOLIN_RS16165, ECOLIN_RS15500, ECOLIN_RS21355', col1: '0.703909', col2: '1.876610', col3: '79.959584', col4: '17.377514' }
];



// sidenavbar begin
interface SideNavbarProps {
    activeLink: string;
}
const SideNavbar: React.FC<SideNavbarProps> = ({ activeLink }) => {
    return (
        <div className="side-navbar">
            <Nav className="flex-column">
                <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>ODE Model of Biochemical Reactions</Nav.Link>
                <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Metabolic Engineering Strategy to Reduce Ammonia Production</Nav.Link>
                <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>part3</Nav.Link>
                {/* 添加更多导航链接 */}
            </Nav>
        </div>
    );
};
// sidenavbar end 

export function Model() {
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

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };



    return (
        <>

            <div className="custom-header-model">
                <h1 className="centered-title">
                    <img
                        src="https://static.igem.wiki/teams/5378/header/model.png"
                        alt="safety header"
                        className="header-img"
                    />
                    <img
                        src="https://static.igem.wiki/teams/5378/header/header-bar2.webp"
                        alt="safety header"
                        className="header-bar"
                    />
                    {/* <img
                        src="https://static.igem.wiki/teams/5378/model/model-page.webp"
                        alt="safety header"
                        className="header-bar"
                        style={{ opacity: 0.7 }}
                    /> */}
                </h1>
            </div>
            <div className="row  bg-rice_yellow">
                <div className="col-2 model-nav">
                    <SideNavbar activeLink={activeLink} />
                </div>

                <div className="col-10 model-font">
                    <Element name="section1" className="element" id='section1'>
                        <h2 className="center-text mt-5">1. ODE Model of Biochemical Reactions</h2>
                        <img src='https://static.igem.wiki/teams/5378/model/model-page.webp' className='responsive-img' style={{ maxWidth: '60%', margin: '0 auto', paddingRight: '20%' }} />
                        <figcaption className='caption' style={{ paddingRight: '20%' }} >Placeholders</figcaption>

                        <h3>1.1 Oxidation of Phenylethylamine</h3>

                        <p>Firstly, phenylethylamine (PEA) diffuses through the outer membrane of <em>Escherichia coli</em> into the periplasmic space, where it interacts with TynA.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content' >
                                <span className='formula_line'><MathJax.Node formula={`{PEA_{gut}\\overset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\underset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\rightleftharpoons}}  PEA_{peri}}`} /> </span>
                                <span className='formula_number'>1</span>
                            </div>
                        </MathJax.Provider>
                        <p>According to the law of mass action, this process can be represented by an ordinary differential equation (ODE) as follows</p>
                        <MathJax.Provider>
                            <div className='indent formula_content' >
                                <span className='formula_line'> <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}] - [PEA_{peri}])`} /> </span>
                                <span className='formula_number'>2</span>

                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'> <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}] - [PEA_{gut}])`} />   </span>
                                <span className='formula_number'>3</span>
                            </div>
                        </MathJax.Provider>

                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{\\mathrm{diff\\_PEA}}`} />
                            </span>
                        </MathJax.Provider> represents the passive diffusion constant of phenylethylamine. The amount of substance passing through the membrane per unit time is equal to the product of the concentration difference across the membrane and the passive diffusion rate constant.</p>
                        <p>Subsequently, monoamine oxidase TynA oxidizes phenylethylamine into phenylacetaldehyde (PA) and ammonia.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'><MathJax.Node formula={` PEA\\xrightarrow[K_{M\\_TynA},k_{cat\\_TynA}]{TynA} PA_{peri} + NH_{3\\_peri}`} /> </span>
                                <span className='formula_number'>4</span>
                            </div>
                        </MathJax.Provider>
                        <p>The Michaelis-Menten mechanism describes the enzymatic conversion of a substrate <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`S`} />
                            </span>
                        </MathJax.Provider> into a product <MathJax.Provider>
                                <MathJax.Node inline formula={`P`} />
                            </MathJax.Provider> via an enzyme <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`E`} />
                                </span>
                            </MathJax.Provider>, through the formation of an enzyme-substrate complex <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`ES`} />
                                </span>
                            </MathJax.Provider>. The basic reaction scheme is:</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'><MathJax.Node formula={`{{E+S}\\overset{k_{f1}}{\\underset{k_{r1}}{\\rightleftharpoons}}  ES \\xrightarrow[]{k_{cat}}E + P}`} /> </span>
                                <span className='formula_number'>5</span>
                            </div>
                        </MathJax.Provider>
                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{f1}`} />
                            </span>
                        </MathJax.Provider> is the rate constant for the formation of the enzyme-substrate complex, <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r1}`} />
                                </span>
                            </MathJax.Provider> is the rate constant for the dissociation of the complex back to free enzyme and substrate, and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{cat}`} />
                                </span>
                            </MathJax.Provider> is the rate constant for the conversion of the enzyme-substrate complex into product and free enzyme.</p>

                        <p>The derivation relies on two main assumptions:</p>

                        <p>1. Steady-State Approximation: The concentration of the enzyme-substrate complex remains constant during the reaction because its formation and breakdown reach a dynamic equilibrium</p>

                        <p>Thus, the rate of formation of <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`ES`} />
                            </span>
                        </MathJax.Provider> equals its breakdown</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`k_{f1}[E][S] = \\left( k_{r1} + k_{\\mathrm{cat}} \\right) [ES]`} /> </span>
                                <span className='formula_number'>6</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`[ES] = \\frac{ k_{f1}[E][S] }{ k_{r1} + k_{\\mathrm{cat}} }`} />  </span>
                                <span className='formula_number'>7</span>
                            </div>

                        </MathJax.Provider>

                        <p>2. Total Enzyme Concentration: The total concentration of the enzyme is constant and can be expressed as the sum of free enzyme and enzyme bound in the enzyme-substrate complex.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`[E_{\\text{total}}] = [E] + [ES]`} />  </span>
                                <span className='formula_number'>8</span>
                            </div>
                        </MathJax.Provider>
                        <p>Substitute <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`[E] = [E_{\\text{total}}] - [ES]
`} />
                            </span>
                        </MathJax.Provider>into the steady-state equation and solve for <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`[ES]
`} />
                                </span>
                            </MathJax.Provider></p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`[ES] = \\frac{[E_{\\text{total}}] [S]}{\\frac{k_{r1} + k_{\\text{cat}}}{k_{f1}} + [S]}`} />  </span>
                                <span className='formula_number'>9</span>
                            </div>
                        </MathJax.Provider>
                        <p>The Michaelis constant  <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`K_M`} />
                            </span>
                        </MathJax.Provider> is defined as</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`K_M = \\frac{k_{r1} + k_{\\text{cat}}}{k_{f1}}
`} />                </span>
                                <span className='formula_number'>10</span>
                            </div>
                        </MathJax.Provider>
                        <p>This simplifies the expression for  to</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`ES = \\frac{ {[E\\_total][S]} }{K_M + [S]}`} />  </span>

                                <span className='formula_number'>11</span>    </div>
                        </MathJax.Provider>

                        <p>The rate of product formation is
                        </p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`v_0 = k_{cat}[ES]`} />   </span>
                                <span className='formula_number'>12</span>
                            </div>
                        </MathJax.Provider>
                        <p>Substituting <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`[ES]`} />
                            </span>
                        </MathJax.Provider> gives the Michaelis-Menten equation:</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`v_0 = \\frac{V_{max}[s]}{K_M+[S]}`} />  </span>
                                <span className='formula_number'>13</span>
                            </div>
                        </MathJax.Provider>

                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`V_{max} = k_{cat}[E_{total}]`} />
                            </span>
                        </MathJax.Provider> </p>

                        <p>Considering that <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{cat}`} />
                            </span>
                        </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_M`} />
                                </span>
                            </MathJax.Provider> are more readily available, we use them to express the Michaelis-Menten equation</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>

                                <MathJax.Node formula={`v_0 = \\frac{k{cat}[E_{total}][S]}{K_M +[S]}`} />
                            </div>
                        </MathJax.Provider>
                        <p>This process can be described using Michaelis-Menten kinetics as follows</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /></span>
                                <span className='formula_number'>14</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /> </span>
                                <span className='formula_number'>15</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /></span>
                                <span className='formula_number'>16</span>

                            </div>
                        </MathJax.Provider>

                        <p>The phenylacetaldehyde and ammonia formed in this reaction cross the inner membrane into the cytoplasm, where they participate in further oxidation and metabolic processes.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`PA_{peri}\\overset{}{\\underset{}{\\rightleftharpoons}}PA_{cyto}`} /></span>
                                <span className='formula_number'>17</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`NH_{3\\_peri}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3\\_cyto}`} />   </span>
                                <span className='formula_number'>18</span>

                            </div>
                        </MathJax.Provider>
                        <p>According to the law of mass action</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}])`} /></span>
                                <span className='formula_number'>19</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}])`} />  </span>
                                <span className='formula_number'>20</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}])`} /></span>
                                <span className='formula_number'>21</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}])`} />  </span>
                                <span className='formula_number'>22</span>

                            </div>

                        </MathJax.Provider>

                        <h3>1.2 Production of GS and TPH1</h3>
                        <p>The process by which FeaR catalyzes the further oxidation of phenylacetaldehyde into phenylacetic acid (PAA) in the cytoplasm can be broken down into two steps according to the principles of Michaelis-Menten kinetics. The phenylacetic acid produced by the reaction then diffuses out of the cell.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`FeaR+PA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}FearR-PA`} /></span>
                                <span className='formula_number'>23</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`FeaR-PA\\xrightarrow{}FearR+PAA_{cyto}`} />     </span>
                                <span className='formula_number'>24</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`PAA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}PAA_{gut}`} /></span>
                                <span className='formula_number'>25</span>

                            </div>
                        </MathJax.Provider>
                        <p>The FeaR-phenylacetaldehyde complex can bind and activate the PTynA promoter. In this case, the concentration of the enzyme-substrate complex <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`[FeaR-PA]`} />
                            </span>
                        </MathJax.Provider> is no longer constant, violating the two main assumptions of the Michaelis-Menten equation. However, the relationship between <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_M`} />
                                </span>
                            </MathJax.Provider> and the rate constants <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{f1}`} />
                                </span>
                            </MathJax.Provider>, <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r1}`} />
                                </span>
                            </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{cat}`} />
                                </span>
                            </MathJax.Provider> still holds.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`K_M = \\frac{k_{r1}+k_{cat}}{k_{f1}}`} /></span>
                                <span className='formula_number'>26</span>


                            </div>
                        </MathJax.Provider>
                        <p>Since the constants depend only on the intrinsic properties of the enzyme and substrate, we can use the values of <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`K_M`} />
                            </span>
                        </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{cat}`} />
                                </span>
                            </MathJax.Provider> to solve for <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{f1}`} />
                                </span>
                            </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r1}`} />
                                </span>
                            </MathJax.Provider>. </p>


                        <p>If we assume that the <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`FeaR-PA`} />
                            </span>
                        </MathJax.Provider> complex is unlikely to dissociate back into <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`FeaR`} />
                                </span>
                            </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`PA`} />
                                </span>
                            </MathJax.Provider> after formation, i.e., <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r1}\\approx 0`} />
                                </span>
                            </MathJax.Provider>, then we have</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`k_{f1} \\approx \\frac{k_{cat}}{K_m}`} /></span>
                                <span className='formula_number'>27</span>


                            </div>
                        </MathJax.Provider>
                        <p>Based on the two-step reaction process described, we can establish the following system of ODEs.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} /></span>
                                <span className='formula_number'>28</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} /> </span>
                                <span className='formula_number'>29</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} /> </span>
                                <span className='formula_number'>30</span>
                            </div>
                            <div className='indent formula_content' id='long_formula'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} /> </span>
                                <span className='formula_number'>31</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} />   </span>
                                <span className='formula_number'>32</span>
                            </div>

                        </MathJax.Provider>

                        <p>The process by which the <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`FeaR-PA`} />
                            </span>
                        </MathJax.Provider> complex activates the PTynA promoter upstream of GS or TPH1 can be described as follows</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_GS}+FeaR-PA\\overset{}{\\underset{}{\\rightleftharpoons}}P_{TynA\\_GS\\_active}`} /></span>
                                <span className='formula_number'>33</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_TPH1}+FeaR-PA\\overset{}{\\underset{}{\\rightleftharpoons}}P_{TynA\\_TPH1\\_active}`} /> </span>
                                <span className='formula_number'>34</span>
                            </div>
                        </MathJax.Provider>
                        <p>The corresponding set of ODEs is</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /></span>
                                <span className='formula_number'>35</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />  </span>
                                <span className='formula_number'>36</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /></span>
                                <span className='formula_number'>37</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>38</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>39</span>
                            </div>

                        </MathJax.Provider>
                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{f\\_PtynA}`} />
                            </span>
                        </MathJax.Provider> is the rate constant for the binding of <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`FeaR-PA`} />
                                </span>
                            </MathJax.Provider> to the PTynA promoter and the formation of the activated promoter state, while <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r_PtynA}`} />
                                </span>
                            </MathJax.Provider> is the rate constant for the dissociation of the activated promoter and its inactivation.</p>

                        <p>The activated promoter initiates the transcription of downstream genes, producing the corresponding mRNA, while we also take into account the process of mRNA degradation.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_GS\\_active}  \\rightarrow P_{TynA\\_GS\\_active} + mRNA_{GS}`} /></span>
                                <span className='formula_number'>40</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_TPH1\\_active} \\rightarrow  P_{TynA\\_TPH1\\_active}+mRNA_{TPH1}`} />  </span>
                                <span className='formula_number'>41</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{GS}\\rightarrow \\varnothing`} />  </span>
                                <span className='formula_number'>42</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow \\varnothing`} /> </span>
                                <span className='formula_number'>43</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} /> </span>
                                <span className='formula_number'>44</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} /> </span>
                                <span className='formula_number'>45</span>
                            </div>
                        </MathJax.Provider>
                        <p>Next is the process of translation and degradation of the target protein.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{GS}\\rightarrow mRNA_{GS}+GS`} /></span>
                                <span className='formula_number'>46</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow mRNA_{TPH1}+TPH1`} /> </span>
                                <span className='formula_number'>48</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`GS\\rightarrow \\varnothing`} /> </span>
                                <span className='formula_number'>49</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`TPH1\\rightarrow \\varnothing`} />  </span>
                                <span className='formula_number'>50</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} /> </span>
                                <span className='formula_number'>51</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} /> </span>
                                <span className='formula_number'>52</span>
                            </div>
                        </MathJax.Provider>


                        <h3>1.3 Metabolism of Ammonia and Tryptophan</h3>
                        <p>Under the catalysis of GS, glutamate accepts ammonia and is converted into glutamine. Glutamate in the gut diffuses into the cytoplasm, where it is converted into glutamine. The glutamine then diffuses back into the gut, acting as a carrier molecule.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Glu_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Glu_{cyto}`} /></span>
                                <span className='formula_number'>53</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`NH_{3_{Peri}}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3_{cyto}}`} />   </span>
                                <span className='formula_number'>54</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Glu_{cyto}+ NH_{3\\_cyto}\\xrightarrow[] Gln_{cyto}`} /> </span>
                                <span className='formula_number'>55</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Gln_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}} Gln_{gut}`} />  </span>
                                <span className='formula_number'>56</span>
                            </div>

                        </MathJax.Provider>
                        <p>For an enzyme-catalyzed reaction involving two substrates that form a single product, the Michaelis-Menten equation can be extended to account for the involvement of both substrates. The general reaction can be written as</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`E+A+B\\overset{k_{f1}}{\\underset{k_{r1}}{\\rightleftharpoons}}EAB \\xrightarrow{k_{cat}}E+P]`} /></span>
                                <span className='formula_number'>57</span>
                            </div>
                        </MathJax.Provider>
                        <p>The Michaelis-Menten equation is</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`v_0 = \\frac{V_{max} [A] [B]}{K_{M\\_A}[B] + K_{M\\_B}[A] + [A][B]}`} /></span>
                                <span className='formula_number'>58</span>
                            </div>
                        </MathJax.Provider>
                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`V_{max}`} />
                            </span>
                        </MathJax.Provider> is the maximum reaction velocity, given by <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`V_{max}=k_{cat}[E_{total}]`} />
                                </span>
                            </MathJax.Provider>, while <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_{M\\_A}`} />
                                </span>
                            </MathJax.Provider> and<MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_{M\\_B}`} />
                                </span>
                            </MathJax.Provider> are the Michaelis constant for substrate<MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`A`} />
                                </span>
                            </MathJax.Provider> and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`B`} />
                                </span>
                            </MathJax.Provider> respectively. </p>

                        <p>the corresponding set of ODEs is</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{gut}}([Glu_{cyto}]-[Glu_{gut}])`} /></span>
                                <span className='formula_number'>59</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /></span>
                                <span className='formula_number'>60</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /> </span>
                                <span className='formula_number'>61</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} /></span>
                                <span className='formula_number'>62</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} /></span>
                                <span className='formula_number'>63</span>
                            </div>

                        </MathJax.Provider>
                        <p>TPH1 converts tryptophan that enters the cytoplasm into 5-hydroxytryptophan, which is then transported from the cytoplasm into the gut. The corresponding reaction equations and ODEs are as follows</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Trp_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Trp_{cyto}`} /></span>
                                <span className='formula_number'>64</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Trp_{cyto}\\xrightarrow{TPH1}5-HTP_{cyto}`} /></span>
                                <span className='formula_number'>65</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`5-HTP_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}5-HTP_{gut}`} /></span>
                                <span className='formula_number'>66</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} /> </span>
                                <span className='formula_number'>67</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} /></span>
                                <span className='formula_number'>68</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} /></span>
                                <span className='formula_number'>69</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} /></span>
                                <span className='formula_number'>70</span>
                            </div>

                        </MathJax.Provider>
                        <h3>1.4 Full ODE Model</h3>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}]-[PEA_{gut}])`} /></span>
                                <span className='formula_number'>71</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}]-[PEA_{peri}]) -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /> </span>
                                <span className='formula_number'>72</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}])`} /> </span>
                                <span className='formula_number'>73</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}])`} />  </span>
                                <span className='formula_number'>74</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}]) - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} /> </span>
                                <span className='formula_number'>75</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /></span>
                                <span className='formula_number'>76</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} /> </span>
                                <span className='formula_number'>77</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} /></span>
                                <span className='formula_number'>78</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /> </span>
                                <span className='formula_number'>79</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />   </span>
                                <span className='formula_number'>80</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />  </span>
                                <span className='formula_number'>81</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>82</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} />     </span>
                                <span className='formula_number'>83</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />  </span>
                                <span className='formula_number'>84</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} /></span>
                                <span className='formula_number'>85</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} />  </span>
                                <span className='formula_number'>86</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} />  </span>
                                <span className='formula_number'>87</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} /> </span>
                                <span className='formula_number'>88</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{gut}}([Glu_{cyto}]-[Glu_{gut}])`} /> </span>
                                <span className='formula_number'>89</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /> </span>
                                <span className='formula_number'>90</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} /> </span>
                                <span className='formula_number'>91</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} /></span>
                                <span className='formula_number'>92</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} /></span>
                                <span className='formula_number'>93</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} /></span>
                                <span className='formula_number'>94</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} /> </span>
                                <span className='formula_number'>95</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} /> </span>
                                <span className='formula_number'>96</span>
                            </div>
                        </MathJax.Provider>
                        <h3>Initial Conditions</h3>
                        <p>Except for the variables mentioned below, the initial values of all other variables are set to 0.</p>

                        <p>Placeholders</p>
                    </Element>
                    <Element name="section2" className="element" id='section2'>
                        <h2>PART2 Metabolic Engineering Strategy to Reduce Ammonia Production</h2>
                        <h3>2.1 Goals</h3>
                        <p>In Escherichia coli Nissle 1917, various metabolic processes, such as amino acid deamination and urea metabolism, generate ammonia, which may pose potential risks to patients undergoing treatment with engineered bacteria. In our wet lab experiments, we utilized M9 medium to reduce ammonia production; however, it is crucial to decrease the strain's intrinsic ammonia production through methods such as gene knockout for strains intended for therapeutic use.</p>
                        <p>Our goal is to identify the key genes influencing ammonia production and uptake, and to perform knockouts based on their effects on ammonia metabolism. This approach aims to simulate the overall impact of these modifications on ammonia metabolism in Escherichia coli, thereby providing genetic targets for future production of therapeutic strains. To achieve this objective, we utilized a genome-scale metabolic model (GEM) of Escherichia coli Nissle 1917, a flux balance analysis (FBA) computational framework, and the OptGene gene optimization strategy. The GEM was provided by Hof et al., the FBA computational framework was supplied by COBRApy, and the OptGene algorithm was sourced from the Cameo library.</p>
                        <h3>2.2 Identification of Ammonia-Related Reactions and Flux</h3>
                        <p>First, we loaded the genome-scale metabolic model <strong>iDK1463</strong>  for Escherichia coli Nissle 1917, which includes <strong>1,464</strong>  genes,<b>2,112</b> metabolites, and <b>2,984</b> reactions based on genomic annotations and experimental data. Subsequently, we employed the flux balance analysis (FBA) method to calculate the steady-state metabolic fluxes (i.e., reaction rates) for various metabolic reactions in the wild-type strain.</p>
                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion1}>
                                <h3>{isOpen1 ? 'Collapse' : 'Click here to see the details of FBA method!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen1 ? 'open' : ''}`}>
                                <p>FBA is a constraint-based reconstruction and analysis (COBRA) method that requires input data including all reactions involved in the metabolic processes, the upper and lower bounds for the flux of each reaction, and the weights for each reaction in the optimization objective. This framework allows for the systematic evaluation of metabolic network behavior under specified constraints, enabling the identification of optimal flux distributions that align with the chosen objectives.</p>
                                <p>The basic mathematical model of FBA can be expressed in the following linear programming form</p>
                                <MathJax.Provider>
                                    <div className='indent formula_content' >
                                        <span className='formula_line'><MathJax.Node formula={`\\begin{align*}&\\max  \\quad  \\mathbf{c}^T \\mathbf{v}\\\\&\\begin{array}{r@{\\quad}l@{}l@{\\quad}l}\\text{s.t.}  \\quad & \\mathbf{S} \\mathbf{v} = \\mathbf{0}\\\\&\\mathbf{v}_{\\text{min}} \\leq \\mathbf{v} \\leq \\mathbf{v}_{\\text{max}}\\end{array} \\end{align*}`} /> </span>
                                        <span className='formula_number'>1</span>
                                    </div>
                                </MathJax.Provider>
                                <p>Where:</p>
                                <ul><li><MathJax.Provider>
                                    <MathJax.Node inline formula={`v`} />
                                </MathJax.Provider> is the <strong>flux vector</strong> , with each value representing the rate of a specific reaction.</li>
                                    <li><MathJax.Provider>
                                        <MathJax.Node inline formula={`c`} />
                                    </MathJax.Provider> is the <strong>coefficient vector</strong>  of the objective function, which includes the weight values for each reaction in the optimization objective. Typically, the goal is to maximize the biomass reaction to promote the fastest growth of the organism, with the weight of the biomass reaction set to 1 and all other reactions set to 0.</li>
                                    <li><MathJax.Provider>
                                        <MathJax.Node inline formula={`S`} />
                                    </MathJax.Provider> is the <strong>stoichiometric matrix</strong> of the metabolic network, where rows represent metabolites and columns represent reactions. The values indicate the stoichiometric coefficients of metabolites in the reactions, with substrates represented as negative and products as positive.</li>
                                    <li><MathJax.Provider>
                                        <MathJax.Node inline formula={`v_{min}`} />
                                    </MathJax.Provider> and <MathJax.Provider>
                                            <MathJax.Node inline formula={`v_{max}`} />
                                        </MathJax.Provider> are the <strong>lower and upper bounds</strong>  on the fluxes, respectively.</li>
                                </ul>
                                <p>In other words, the goal of FBA is to maximize the flux of the objective reaction (typically the biomass reaction) under the constraints of balanced input-output fluxes and ensuring that the fluxes of each reaction remain within their specified bounds</p>
                                <p>In COBRApy, the default unit for flux is mmol/(gDW*hr), which represents the millimoles of a substance produced or consumed per gram dry cell weight per hour.</p>
                            </div>
                        </div>
                        <p>To identify knockout targets, we ran FBA optimization on iDK1463, yielding the flux values for various metabolic reactions in the optimized strain. Next, we filtered out the reactions related to ammonia, excluding those with a flux of zero under normal physiological conditions. The biomass reaction and reactions linearly related to it were considered essential and not selected as targets. Ultimately, among the <b>6 reactions identified</b>, the flux of ammonia-producing reactions will be minimized, while the flux of ammonia-consuming reactions will be maximized.</p>
                        <p style={{ color: '#656563' }} >Table 1: Identified knockout target reactions</p>

                        <table className="model-table three-line-table">

                            <thead>
                                <tr className='table-head-line'>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Formula</th>
                                    <th>Flux [mmol/(gDW*hr)]</th>
                                    <th>Strategy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table1.map((row) => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.col1}</td>
                                        <td>
                                            <div className="formula-scroll">
                                                <MathJax.Provider>
                                                    <MathJax.Node inline formula={row.col2} />
                                                </MathJax.Provider>
                                            </div>
                                        </td>
                                        <td>{row.col3}</td>
                                        <td>{row.col4}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>



                        <h3>2.3 Target Gene Search Based on Evolutionary Algorithms</h3>
                        <p>After identifying the ammonia-related reactions, the next objective is to search for target genes that can reduce ammonia production while increasing its consumption. For this purpose, we employed the OptGene algorithm proposed by Patil et al.
                        </p>
                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion2}>
                                <h3>{isOpen2 ? 'Collapse' : 'Click here to see the details of OptGene algorithm!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen2 ? 'open' : ''}`}>
                                <p>OptGene is a target gene search algorithm based on genetic algorithms (GA), which utilize the principles of Darwinian evolution to search for global optimal solutions. The basic workflow is outlined as follows:</p>
                                <ol><li><b>Population Initialization</b> : A specified number of solutions are randomly generated, where each solution is represented as a one-hot encoded gene "switch" vector. In this vector, a gene marked as "on" has a value of 1, indicating normal expression, while a gene marked as "off" has a value of 0, indicating that the gene is knocked out. Each solution is referred to as an individual.</li>
                                    <li><b>Fitness Calculation</b> : The fitness (objective function value) of each individual is calculated, taking into account three factors: the biomass should be maximized, ammonia production should be minimized (or ammonia consumption should be maximized), and the number of genes knocked out should be minimized. Biomass, ammonia production, and ammonia consumption will be computed using the FBA method.</li>
                                    <li><b>Termination Check</b>: Verify if the termination criteria are met. If they are, return the results; if not, proceed to the next step.</li>
                                    <li><b>Adjustment of Individuals</b>: Each individual undergoes adjustment, which includes crossover and mutation. Crossover, akin to chromosomal crossover, involves exchanging segments of data between two individuals. Mutation entails modifying a specific point in an individual's data (e.g., marking a gene as "off"). Individuals with higher fitness scores have a greater probability of being adjusted.</li>
                                    <li><b>Return to Step 2</b>: Repeat the fitness calculation and subsequent steps.</li></ol>
                                <p>For genes marked as "off", these genes are considered inactive, and the upper and lower bounds for the corresponding reactions are both set to 0, effectively achieving the knockout of that gene.</p>
                                <p>The process of the algorithm and the representation method of query phenotype are shown in the following two figures:</p>
                                <div>
                                    < img src='https://static.igem.wiki/teams/5378/model/model1.webp' className='responsive-img' />
                                    <figcaption className='caption'>Figure S1:  Schematic overview of the OptGene algorithm</figcaption>

                                    < img src='https://static.igem.wiki/teams/5378/model/model2.webp' className='responsive-img' />
                                    <figcaption className='caption'>Figure S2: Representation of the metabolic genotype</figcaption>
                                </div>
                            </div>
                        </div>
                        <p>Based on the OptGene algorithm, we identified two valuable target reactions: <b>Glycine Cleavage System (GLYCL)</b> and <b>Glutamate Dehydrogenase (NADP, GLUDy)</b>. The main reactions involved, the candidate knockout targets, and the effects of their knockout on flux are summarized in the table below:</p>
                        <p style={{ color: '#656563' }} >Table 2: Candidate knockout target genes identified by OptGene</p>
                        <table className="model-table three-line-table">
                            <caption></caption>
                            <thead>
                                <tr className='table-head-line'>
                                    <th>Target Reaction</th>
                                    <th>Related Reactions</th>
                                    <th>Genes</th>
                                    <th>Target Flux [mmol/(gDW*hr)]</th>
                                    <th>Biomass Flux [mmol/(gDW*hr)]</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table2.map((row) => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.col1}</td>
                                        <td>{row.col2}</td>
                                        <td>{row.col3}</td>
                                        <td>{row.col4}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p>Subsequently, we evaluated the potential impact of <b>15 candidate genes</b> resulting in <b>32,767 knockout combinations</b> on the growth and ammonia production of the strain using FBA. The results indicated that enhancing the reverse reaction of GLUDy is a key factor in reducing ammonia production, while the knockout of the <b>ECOLIN_RS15500</b> gene (corresponding to the ENO reaction) is a crucial step toward achieving this goal. Although the knockout of the GLYCL reaction can also reduce ammonia production to a small extent, it is not a primary factor. Additionally, different knockout schemes significantly affect the strain's growth, specifically the biomass flux.</p>
                        <p>Considering that excessive knockouts may impair the strain's normal physiological functions and increase operational complexity, we ultimately identified <b>6 alternative knockout schemes</b> that balance ammonia production and biomass:</p>
                        <p style={{ color: '#656563' }} >Table 3: Knockout schemes we ultimately selected.</p>
                        <table className="model-table three-line-table">
                            <thead>
                                <tr className='table-head-line'>
                                    <th>Target Genes for Knockout</th>
                                    <th>Biomass Flux [mmol/(gDW*hr)]</th>
                                    <th>Ammonia Production Unit Biomass [mmol/(gDW*hr)]</th>
                                    <th>Biomass Ratio Compared to WT (%)</th>
                                    <th>Ammonia Production Ratio Compared to WT (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table3.map((row) => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.col1}</td>
                                        <td>{row.col2}</td>
                                        <td>{row.col3}</td>
                                        <td>{row.col4}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>The table displays the biomass flux and ammonia production per unit biomass for the wild-type strain and various knockout strains, along with the percentage of these values compared to the wild-type strain.</p>
                        < img src='https://static.igem.wiki/teams/5378/model/model4.webp' className='responsive-img' style={{ maxWidth: '60%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                        <figcaption className='caption' style={{ paddingRight: '20%' }} >Figure 1: Growth of Escherichia coli Nissle 1917 in M9 and LB Medium</figcaption>

                        <p>We compared the changes in biomass flux before and after gene knockouts predicted by the model with the growth characteristics of *Escherichia coli* Nissle 1917 in M9 and LB media obtained from wet experiments. After gene knockout, the biomass flux of the strain reached <b>80.03%</b>of its pre-knockout level under optimal conditions. In the M9 medium, which inhibits ammonia production, the growth rate of the strain was approximately <b> 81.77%</b> of that in LB medium. This validates the model's calculations and demonstrates that merely inhibiting ammonia production does not significantly affect the strain's growth, indicating the feasibility of the gene knockout strategy.</p>

                        <p>In summary, our metabolic engineering analysis provided multiple knockout schemes, including single and multi-gene knockouts. Through gene knockout, ammonia production can be reduced to approximately <b>18% </b>of the wild-type levels, while the growth rate of the strain can be maintained at about <b>80%</b> of the wild-type. This finding offers significant directions for genetic modifications in the development of engineered strains intended for in vivo therapy.</p>
                    </Element>
                    <Element name="section3" className="element " id='section3'>
                        <h2 className="center-text mt-5">part3 Placeholders</h2>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-flow-pic.png' className='responsive-img' style={{ maxWidth: '60%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Protein-Ligand Complex - Molecular Dynamics Simulation with GROMACS</figcaption></p>
                        </div>


                        <img src='https://static.igem.wiki/teams/5378/model/model3.webp' className='responsive-img' />
                        <p><figcaption className='caption' >Placeholders</figcaption></p>

                    </Element>

                </div>
            </div>
        </>
    );
}
