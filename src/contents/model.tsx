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

type simdata = {
    id: string;
    col1: string;
    col2: string;
    col3: string;
}


const simresult: simdata[] = [
    { id: "[PEA_{gut}]", col1: "8.2522*10^{-4}", col2: "mmol/L", col3: "Wet Lab" },
    { id: "[TynA]", col1: "1.2*10^{-4}", col2: "mmol/L", col3: "Wet Lab" },
    { id: "[FeaR]", col1: "1.2*10^{-4}", col2: "mmol/L", col3: "Wet Lab" },
    { id: "[P_{TynA\\_GS}]", col1: "2*10^{-5}", col2: "mmol/L", col3: "Wet Lab" },
    { id: "[P_{TynA\\_TPH1}]", col1: "2*{10^-5}", col2: "mmol/L", col3: "Wet Lab" },
    { id: "[Glu_{gut}]", col1: "1*10^{-3}", col2: "mmol/L", col3: "Estimated" },
    { id: "[Trp_{gut}]", col1: "1*10^{-3}", col2: "mmol/L", col3: "Estimated" }
];

const simpara: formData[] = [
    { id: "k_{diff\\_PEA}", col1: "Rate constant for the permeation of phenethylamine", col2: "1*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_PA}", col1: "Rate constant for the permeation of phenylacetaldehyde", col2: "1*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_NH3}", col1: "Rate constant for the permeation of ammonia molecules", col2: "1.2*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_PAA}", col1: "Rate constant for the permeation of phenylacetic acid", col2: "1*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_Glu}", col1: "Rate constant for the permeation of glutamic acid", col2: "1*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_Gln}", col1: "Rate constant for the permeation of glutamine", col2: "1*10^{-13}", col3: "L/s", col4: "Estimated" },
    { id: "k_{diff\\_Trp}", col1: "Rate constant for the permeation of tryptophan", col2: "3.12828*10^{-13}", col3: "L/s", col4: "" },
    { id: "k_{diff\\_5-HTP}", col1: "Rate constant for the permeation of 5-hydroxytryptophan", col2: "9.33368*10^{-13}", col3: "L/s", col4: "" },
    { id: "V_{gut}", col1: "Volume of intestinal fluid near a single E. coli cell", col2: "1.65*10^{-13}", col3: "L", col4: "" },
    { id: "V_{peri}", col1: "Volume of fluid in the periplasmic space of E. coli", col2: "5.1*10^{-16}", col3: "L", col4: "" },
    { id: "V_{cyto}", col1: "Volume of fluid in the cytoplasm of E. coli", col2: "1.12*10^{-15}", col3: "L", col4: "" },
    { id: "K_{M\\_TynA}", col1: "Michaelis constant of TynA", col2: "0.082604", col3: "mmol/L", col4: "UniKP" },
    { id: "K_{M\\_FeaR}", col1: "Michaelis constant of FeaR", col2: "0.037102", col3: "mmol/L", col4: "UniKP" },
    { id: "K_{M\\_GS\\_Glu}", col1: "Michaelis constant of GS for glutamic acid", col2: "0.404939", col3: "mmol/L", col4: "UniKP" },
    { id: "K_{M\\_GS\\_NH3}", col1: "Michaelis constant of GS for ammonia", col2: "0.122951", col3: "mmol/L", col4: "UniKP" },
    { id: "K_{M\\_TPH1}", col1: "Michaelis constant of TPH1", col2: "0.034631", col3: "mmol/L", col4: "UniKP" },
    { id: "k_{cat\\_TynA}", col1: "Catalytic constant of TynA", col2: "11.28051", col3: "s^{-1}", col4: "UniKP" },
    { id: "k_{cat\\_FeaR}", col1: "Catalytic constant of FeaR", col2: "1.90971", col3: "s^{-1}", col4: "UniKP" },
    { id: "k_{cat\\_GS}", col1: "Catalytic constant of GS", col2: "26.61289", col3: "s^{-1}", col4: "UniKP" },
    { id: "k_{cat\\_TPH1}", col1: "Catalytic constant of TPH1", col2: "1.799936", col3: "s^{-1}", col4: "UniKP" },
    { id: "k_{f\\_PtynA}", col1: "Rate constant for the activation of the PtynA promoter", col2: "5*10^4", col3: "L/(mmol*s)", col4: "Estimated" },
    { id: "k_{r\\_PtynA}", col1: "Rate constant for the inactivation of the PtynA promoter", col2: "200", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{mRNA\\_GS}", col1: "Transcription rate constant for mRNA encoding GS", col2: "0.142146", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "k_{mRNA\\_TPH1}", col1: "Transcription rate constant for mRNA encoding TPH1", col2: "0.136054", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "d_{mRNA\\_GS}", col1: "Degradation rate constant for mRNA encoding GS", col2: "1.3*10^{-5}", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "d_{mRNA\\_TPH1}", col1: "Degradation rate constant for mRNA encoding TPH1", col2: "1.3*10^-5", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "p_{GS}", col1: "Translation rate constant for GS protein", col2: "2.55864*10^-4", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "p_{TPH1}", col1: "Translation rate constant for TPH1 protein", col2: "2.44898*10^-4", col3: "s^{-1}", col4: "2023 Toulouse INSA-UPS" },
    { id: "d_{GS}", col1: "Degradation rate constant for GS protein", col2: "1*10^-8", col3: "s^{-1}", col4: "Estimated" },
    { id: "d_{TPH1}", col1: "Degradation rate constant for TPH1 protein", col2: "1*10^-8", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{kfiC}", col1: "Rate constant for kfiC expression under IPTG activation", col2: "1*10^-4", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{nirB}", col1: "Rate constant for oxygen inhibition of kfiC expression", col2: "1*10^-4", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{f1\\_kfiC}", col1: "Rate constant for partial activation of the CAP-related promoter by kfiC", col2: "1*10^4", col3: "L/(mmol*s)", col4: "Estimated" },
    { id: "k_{f1\\_nirB}", col1: "Rate constant for partial activation of the CAP-related promoter by nirB", col2: "1*10^4", col3: "L/(mmol*s)", col4: "Estimated" },
    { id: "k_{r1\\_kfiC}", col1: "Rate constant for the dissociation of the partially activated CAP-related promoter from kfiC", col2: "100", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{r1\\_nirB}", col1: "Rate constant for the dissociation of the partially activated CAP-related promoter from nirB", col2: "100", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{f2\\_kfiC}", col1: "Rate constant for the complete activation of the partially activated CAP-related promoter by kfiC", col2: "1*10^4", col3: "L/(mmol*s)", col4: "Estimated" },
    { id: "k_{f2\\_nirB}", col1: "Rate constant for the complete activation of the partially activated CAP-related promoter by nirB", col2: "1*10^4", col3: "L/(mmol*s)", col4: "Estimated" },
    { id: "k_{r2\\_kfiC}", col1: "Rate constant for the dissociation of the fully activated CAP-related promoter from kfiC, leading to inactivation", col2: "100", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{r2\\_nirB}", col1: "Rate constant for the dissociation of the fully activated CAP-related promoter from nirB, leading to inactivation", col2: "100", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{CAP}", col1: "Synthesis rate constant of CAP", col2: "1", col3: "s^{-1}", col4: "Estimated" },
    { id: "k_{clr}", col1: "Rate constant for the enhancement of the clearance rate", col2: "1", col3: "s^{-1}", col4: "Estimated" },
    { id: "K_{IPTG}", col1: "Half-saturation constant for IPTG activation of kfiC expression", col2: "0.1", col3: "mmol/L", col4: "Estimated" },
    { id: "K_{O_2}", col1: "Half-saturation constant for oxygen inhibition of kfiC expression", col2: "0.1", col3: "mmol/L", col4: "Estimated" },
    { id: "K_{clr}", col1: "Half-saturation constant for the clearance process", col2: "0.1", col3: "mmol/L", col4: "Estimated" },
    { id: "\\delta_{kfiC}", col1: "Degradation rate constant for kfiC", col2: "1*10^-4", col3: "s^{-1}", col4: "Estimated" },
    { id: "\\delta_{nirB}", col1: "Degradation rate constant for nirB", col2: "1*10^-4", col3: "s^{-1}", col4: "Estimated" },
    { id: "\\delta_{CAP}", col1: "Degradation rate constant for CAP", col2: "1", col3: "s^{-1}", col4: "Estimated" },
    { id: "\\delta_{clr}", col1: "Decay rate constant for the clearance rate", col2: "1", col3: "s^{-1}", col4: "Estimated" },
    { id: "v_{nirB}", col1: "Generation rate of nirB under low oxygen conditions", col2: "1.5*10^{-6}", col3: "mmol/(L*s)", col4: "Estimated" },
    { id: "r", col1: "Intrinsic growth rate of EcN", col2: "2.78*10^-4", col3: "s^{-1}", col4: "Estimated" },
    { id: "K", col1: "Carrying capacity of EcN in the intestinal environment under non-immune clearance conditions", col2: "1*10^11", col3: "CFU/L", col4: "Estimated" }
];

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
                <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>protein-ligand docking and molecular dynamics simulation</Nav.Link>
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
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);


    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
    };

    const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
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
                        src="https://static.igem.wiki/teams/5378/header/header-bar.webp"
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
                       {/* <figcaption className='caption' style={{ paddingRight: '20%' }} >Placeholders</figcaption>*/}

                        <h3>1.1 Oxidation of Phenylethylamine</h3>

                        <p>Firstly, phenylethylamine (PEA) diffuses through the outer membrane of <em>Escherichia coli</em> into the periplasmic space, where it interacts with TynA.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content' >
                                <span className='formula_line'><MathJax.Node formula={`{PEA_{gut}\\overset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\underset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\rightleftharpoons}}  PEA_{peri}}`} /> </span>
                                <span className='formula_number'>(1)</span>
                            </div>
                        </MathJax.Provider>
                        <p>According to the law of mass action, this process can be represented by an ordinary differential equation (ODE) as follows</p>
                        <MathJax.Provider>
                            <div className='indent formula_content' >
                                <span className='formula_line'> <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}] - [PEA_{peri}])`} /> </span>
                                <span className='formula_number'>(2)</span>

                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'> <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}] - [PEA_{gut}])`} />   </span>
                                <span className='formula_number'>(3)</span>
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
                                <span className='formula_number'>(4)</span>
                            </div>
                        </MathJax.Provider>

                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion1}>
                                <h3>{isOpen1 ? 'Collapse' : 'Click here to see the derivation process of the Michaelis-Menten equation!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen1 ? 'open' : ''}`}>

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
                                        <span className='formula_number'>(5)</span>
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
                                        <span className='formula_number'>(6)</span>
                                    </div>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`[ES] = \\frac{ k_{f1}[E][S] }{ k_{r1} + k_{\\mathrm{cat}} }`} />  </span>
                                        <span className='formula_number'>(7)</span>
                                    </div>

                                </MathJax.Provider>

                                <p>2. Total Enzyme Concentration: The total concentration of the enzyme is constant and can be expressed as the sum of free enzyme and enzyme bound in the enzyme-substrate complex.</p>
                                <MathJax.Provider>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`[E_{\\text{total}}] = [E] + [ES]`} />  </span>
                                        <span className='formula_number'>(8)</span>
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
                                        <span className='formula_number'>(9)</span>
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
                                            <MathJax.Node formula={`K_M = \\frac{k_{r1} + k_{\\text{cat}}}{k_{f1}}`} />                </span>
                                        <span className='formula_number'>(10)</span>
                                    </div>
                                </MathJax.Provider>
                                <p>This simplifies the expression for  to</p>

                                <MathJax.Provider>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`ES = \\frac{ {[E\\_total][S]} }{K_M + [S]}`} />  </span>

                                        <span className='formula_number'>(11)</span>    </div>
                                </MathJax.Provider>

                                <p>The rate of product formation is
                                </p>
                                <MathJax.Provider>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`v_0 = k_{cat}[ES]`} />   </span>
                                        <span className='formula_number'>(12)</span>
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
                                        <span className='formula_number'>(13)</span>
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
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`v_0 = \\frac{k{cat}[E_{total}][S]}{K_M +[S]}`} /></span>
                                        <span className='formula_number'>(14)</span>
                                    </div>
                                </MathJax.Provider>
                            </div>
                        </div>


                        <p>This process can be described using Michaelis-Menten kinetics as follows</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /></span>
                                <span className='formula_number'>(15)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /> </span>
                                <span className='formula_number'>(16)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /></span>
                                <span className='formula_number'>(17)</span>

                            </div>
                        </MathJax.Provider>

                        <p>The phenylacetaldehyde and ammonia formed in this reaction cross the inner membrane into the cytoplasm, where they participate in further oxidation and metabolic processes.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`PA_{peri}\\overset{}{\\underset{}{\\rightleftharpoons}}PA_{cyto}`} /></span>
                                <span className='formula_number'>(18)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`NH_{3\\_peri}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3\\_cyto}`} /> </span>
                                <span className='formula_number'>(19)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`PA_{peri}\\overset{}{\\underset{}{\\rightleftharpoons}}PA_{gut}`} /></span>
                                <span className='formula_number'>(19)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`NH_{3\\_peri}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3\\_gut}`} />   </span>
                                <span className='formula_number'>(20)</span>
                            </div>


                        </MathJax.Provider>
                        <p>According to the law of mass action</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}])`} /></span>
                                <span className='formula_number'>(21)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}]) + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{gut}]-[PA_{peri}])`} />  </span>
                                <span className='formula_number'>(22)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{gut}}([PA_{peri}]-[PA_{gut}])`} /></span>
                                <span className='formula_number'>(23)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}])`} />  </span>
                                <span className='formula_number'>(24)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}]) + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_gut}]-[NH_{3\\_peri}])`} /></span>
                                <span className='formula_number'>(25)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{gut}}([NH_{3\\_peri}]-[NH_{3\\_gut}])`} />  </span>
                                <span className='formula_number'>(26)</span>
                            </div>


                        </MathJax.Provider>

                        <h3>1.2 Production of GS and TPH1</h3>
                        <p>The process by which FeaR catalyzes the further oxidation of phenylacetaldehyde into phenylacetic acid (PAA) in the cytoplasm can be broken down into two steps according to the principles of Michaelis-Menten kinetics. The phenylacetic acid produced by the reaction then diffuses out of the cell.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`FeaR+PA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}FearR-PA`} /></span>
                                <span className='formula_number'>(27)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`FeaR-PA\\xrightarrow{}FearR+PAA_{cyto}`} />     </span>
                                <span className='formula_number'>(28)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`PAA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}PAA_{gut}`} /></span>
                                <span className='formula_number'>(29)</span>

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
                                <span className='formula_number'>(30)</span>


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
                                <span className='formula_number'>(31)</span>


                            </div>
                        </MathJax.Provider>
                        <p>Based on the two-step reaction process described, we can establish the following system of ODEs.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} /></span>
                                <span className='formula_number'>(32)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} /> </span>
                                <span className='formula_number'>(33)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} /> </span>
                                <span className='formula_number'>(34)</span>
                            </div>
                            <div className='indent formula_content' id='long_formula'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} /> </span>
                                <span className='formula_number'>(35)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} />   </span>
                                <span className='formula_number'>(36)</span>
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
                                <span className='formula_number'>(37)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_TPH1}+FeaR-PA\\overset{}{\\underset{}{\\rightleftharpoons}}P_{TynA\\_TPH1\\_active}`} /> </span>
                                <span className='formula_number'>(38)</span>
                            </div>
                        </MathJax.Provider>
                        <p>The corresponding set of ODEs is</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /></span>
                                <span className='formula_number'>(39)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />  </span>
                                <span className='formula_number'>(40)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /></span>
                                <span className='formula_number'>(41)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>(42)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>(43)</span>
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
                                <span className='formula_number'>(44)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`P_{TynA\\_TPH1\\_active} \\rightarrow  P_{TynA\\_TPH1\\_active}+mRNA_{TPH1}`} />  </span>
                                <span className='formula_number'>(45)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{GS}\\rightarrow \\varnothing`} />  </span>
                                <span className='formula_number'>(46)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow \\varnothing`} /> </span>
                                <span className='formula_number'>(47)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} /> </span>
                                <span className='formula_number'>(48)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} /> </span>
                                <span className='formula_number'>(49)</span>
                            </div>
                        </MathJax.Provider>
                        <p>Next is the process of translation and degradation of the target protein.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{GS}\\rightarrow mRNA_{GS}+GS`} /></span>
                                <span className='formula_number'>(50)</span>

                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow mRNA_{TPH1}+TPH1`} /> </span>
                                <span className='formula_number'>(51)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`GS\\rightarrow \\varnothing`} /> </span>
                                <span className='formula_number'>(52)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`TPH1\\rightarrow \\varnothing`} />  </span>
                                <span className='formula_number'>(53)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} /> </span>
                                <span className='formula_number'>(54)</span>
                            </div>

                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} /> </span>
                                <span className='formula_number'>(55)</span>
                            </div>
                        </MathJax.Provider>


                        <h3>1.3 Metabolism of Ammonia and Tryptophan</h3>
                        <p>Under the catalysis of GS, glutamate accepts ammonia and is converted into glutamine. Glutamate in the gut diffuses into the cytoplasm, where it is converted into glutamine. The glutamine then diffuses back into the gut, acting as a carrier molecule.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Glu_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Glu_{cyto}`} /></span>
                                <span className='formula_number'>(56)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`NH_{3_{Peri}}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3_{cyto}}`} />   </span>
                                <span className='formula_number'>(57)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Glu_{cyto}+ NH_{3\\_cyto}\\xrightarrow[] Gln_{cyto}`} /> </span>
                                <span className='formula_number'>(58)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Gln_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}} Gln_{gut}`} />  </span>
                                <span className='formula_number'>(59)</span>
                            </div>

                        </MathJax.Provider>
                        <p>For an enzyme-catalyzed reaction involving two substrates that form a single product, the Michaelis-Menten equation can be extended to account for the involvement of both substrates. The general reaction can be written as</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`E+A+B\\overset{k_{f1}}{\\underset{k_{r1}}{\\rightleftharpoons}}EAB \\xrightarrow{k_{cat}}E+P]`} /></span>
                                <span className='formula_number'>(60)</span>
                            </div>
                        </MathJax.Provider>
                        <p>The Michaelis-Menten equation is</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`v_0 = \\frac{V_{max} [A] [B]}{K_{M\\_A}[B] + K_{M\\_B}[A] + [A][B]}`} /></span>
                                <span className='formula_number'>(61)</span>
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
                                <span className='formula_number'>(62)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /></span>
                                <span className='formula_number'>(63)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /> </span>
                                <span className='formula_number'>(64)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} /></span>
                                <span className='formula_number'>(65)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} /></span>
                                <span className='formula_number'>(66)</span>
                            </div>

                        </MathJax.Provider>
                        <p>TPH1 converts tryptophan that enters the cytoplasm into 5-hydroxytryptophan, which is then transported from the cytoplasm into the gut. The corresponding reaction equations and ODEs are as follows</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Trp_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Trp_{cyto}`} /></span>
                                <span className='formula_number'>(67)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`Trp_{cyto}\\xrightarrow{TPH1}5-HTP_{cyto}`} /></span>
                                <span className='formula_number'>(68)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`5-HTP_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}5-HTP_{gut}`} /></span>
                                <span className='formula_number'>(69)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} /> </span>
                                <span className='formula_number'>(70)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} /></span>
                                <span className='formula_number'>(71)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} /></span>
                                <span className='formula_number'>(72)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} /></span>
                                <span className='formula_number'>(73)</span>
                            </div>

                        </MathJax.Provider>
                        <h3>1.4 Suicidal System</h3>
                        <p>In this section, we utilize <b>kfiC</b> to sense IPTG and <b>nirB</b> to sense low-oxygen conditions, combining the two into an <b> "AND"</b> gate circuit. This setup ensures that <b>Escherichia coli</b> can only express the capsular polysaccharide CAP and survive in the low-oxygen environment of the patient's intestine while receiving regular oral doses of IPTG. If either condition is not met, the bacteria will lose the protective effect of CAP and subsequently die.</p>
                        <p>First, we knocked out the key gene kfiC that expresses the capsular polysaccharide on the surface of EcN, and then cloned kfiC under the control of the lac promoter, which responds to IPTG induction. Given the complexity of this mechanism, we simplify the process using a form similar to the Michaelis-Menten equation as follows:</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\lbrack kfiC\\rbrack}{\\mathrm{d}t} = k_{kfiC}  \\frac{\\left\\lbrack {IPTG} \\right\\rbrack}{K_{IPTG} + \\left\\lbrack {IPTG} \\right\\rbrack} - \\delta_{kfiC}  \\lbrack kfiC\\rbrack`} /></span>
                                <span className='formula_number'>(74)</span>
                            </div>

                        </MathJax.Provider>
                        <p>The rate of kfiC expression depends on IPTG concentration, where  <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{kfiC}`} />
                            </span>
                        </MathJax.Provider> represents the rate constant for the expression of kfiC under IPTG activation conditions.  <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_{IPTG}`} />
                                </span>
                            </MathJax.Provider> represents the half-saturation constant of IPTG, and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`\\delta_{kfiC}`} />
                                </span>
                            </MathJax.Provider>  is the degradation rate of kfiC.</p>

                        <p>Additionally, we utilised a synthetic nirB promoter that does not respond to chemical inducers (nitrite or nitrate) and only responds to induction by anaerobic conditions.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\left\\lbrack nirB \\right\\rbrack}{\\mathrm{d}t} = v_{nirB}-k_{nirB}  \\frac{\\left\\lbrack O_{2} \\right\\rbrack}{K_{O_{2}} + \\left\\lbrack O_{2} \\right\\rbrack} - \\delta_{nirB}  \\left\\lbrack nirB \\right\\rbrack`} /></span>
                                <span className='formula_number'>(75)</span>
                            </div>

                        </MathJax.Provider>
                        <p>Here, <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`v_{nirB}`} />
                            </span>
                        </MathJax.Provider> represents the generation rate of nirB under low-oxygen conditions, <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{nirB}`} />
                                </span>
                            </MathJax.Provider>  indicates the rate constant for the suppression of kfiC expression by oxygen, <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_{O_2}`} />
                                </span>
                            </MathJax.Provider> is the half-saturation inhibition constant for the nirB promoter, and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`\\delta_{nirB}`} />
                                </span>
                            </MathJax.Provider> is the degradation rate.</p>
                        <p>Neither kfiC nor nirB alone can fully activate the promoter  <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`P_{CAP}`} />
                            </span>
                        </MathJax.Provider> upstream of the genes associated with CAP production. However, when both kfiC and nirB simultaneously activate  <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`P_{CAP}`} />
                                </span>
                            </MathJax.Provider>, it triggers the production of CAP.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_kfic}]}{\\mathrm{d}t} = k_{f1\\_kfiC}[P_{CAP}][kfiC] - k_{r1\\_kfiC}[P_{CAP\\_kfiC}]+k_{r2\\_kfiC}[P_{CAP\\_kfiC\\_nirB}]`} /></span>
                                <span className='formula_number'>(76)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_nirB}]}{\\mathrm{d}t} = k_{f1\\_nirB}[P_{CAP}][nirB] - k_{r1\\_nirB}[P_{CAP\\_nirB}]+k_{r2\\_nirB}[P_{CAP\\_kfiC\\_nirB}]`} /> </span>
                                <span className='formula_number'>(77)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_kfiC\\_nirB}]}{\\mathrm{d}t} = k_{f2\\_nirB}[P_{CAP\\_kfiC}][nirB] + k_{f2\\_kfiC}[P_{CAP\\_nirB}][kfiC]-(k_{r2\\_kfiC}+k_{r2\\_nirB})[P_{CAP\\_kfiC\\_nirB}]`} /> </span>
                                <span className='formula_number'>(78)</span>
                            </div>
                        </MathJax.Provider>
                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{f1}`} />
                            </span>
                        </MathJax.Provider> represents the rate constant for the binding of a protein to the unactivated promoter, <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r1}`} />
                                </span>
                            </MathJax.Provider> indicates the rate constant for the dissociation of the protein from the partially activated promoter, leading to its inactivation.  <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{f2}`} />
                                </span>
                            </MathJax.Provider>denotes the rate constant for the binding of another protein to the partially activated promoter, resulting in full activation, while  <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`k_{r2}`} />
                                </span>
                            </MathJax.Provider>represents the rate constant for the loss of one protein from the fully activated promoter, causing it to become inactive.</p>

                        <p>In an aerobic environment <b>in vitro</b> or in the absence of IPTG within the gut, EcN is unable to express CAP. Under anaerobic conditions with the presence of IPTG, the fully activated  <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`P_{CAP}`} />
                            </span>
                        </MathJax.Provider> promoter initiates the production of CAP.</p>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\left\\lbrack {CAP} \\right\\rbrack}{\\mathrm{d}{t}} = k_{CAP}  \\left\\lbrack P_{CAP\\_kfiC\\_nirB} \\right\\rbrack - \\delta_{CAP}  \\left\\lbrack {CAP} \\right\\rbrack`} /></span>
                                <span className='formula_number'>(79)</span>
                            </div>

                        </MathJax.Provider>
                        <p>where <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`k_{CAP}`} />
                            </span>
                        </MathJax.Provider> is the synthesis rate constant of CAP, describing the rate of CAP production, and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`\\delta_{CAP}`} />
                                </span>
                            </MathJax.Provider> represents the degradation rate of CAP.</p>
                        <p>This approach enables increased CAP levels upon induction to control immune evasion and clearance</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\lbrack clr\\rbrack}{\\mathrm{d}t} = k_{clr} \\frac{K_{clr}}{K_{clr} + \\left\\lbrack {CAP} \\right\\rbrack} - \\delta_{clr}  \\lbrack clr\\rbrack`} /></span>
                                <span className='formula_number'>(80)</span>
                            </div>

                        </MathJax.Provider>
                        <p>where<MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`\\beta`} />
                            </span>
                        </MathJax.Provider> represents the enhancement rate of the clearance,<MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K_{clr}`} />
                                </span>
                            </MathJax.Provider>  is the half-saturation constant for the clearance process, and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`\\delta_{clr}`} />
                                </span>
                            </MathJax.Provider> is the decay rate of clearance.</p>
                        <p>Finally, we employed a logistic growth model to describe the growth of bacteria in the intestine under normal conditions, and then incorporated the effects of immune clearance.</p>
                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}N}{\\mathrm{d}t} = r N \\left( 1 - \\frac{N}{K} \\right) - N[clr]`} /></span>
                                <span className='formula_number'>(81)</span>
                            </div>

                        </MathJax.Provider>
                        <p>Here, <MathJax.Provider>
                            <span>
                                <MathJax.Node inline formula={`N`} />
                            </span>
                        </MathJax.Provider> signifies the bacterial count at time <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`t`} />
                                </span>
                            </MathJax.Provider> ,  <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`r`} />
                                </span>
                            </MathJax.Provider> is the intrinsic growth rate of the bacteria (growth rate constant), and <MathJax.Provider>
                                <span>
                                    <MathJax.Node inline formula={`K`} />
                                </span>
                            </MathJax.Provider> represents the carrying capacity of the intestinal environment in the absence of immune clearance, indicating the maximum bacterial count in the environment.

                        </p>
                        <h3>1.5 Full ODE Model</h3>

                        <MathJax.Provider>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}]-[PEA_{gut}])`} /></span>
                                <span className='formula_number'>(82)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}]-[PEA_{peri}]) -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} /> </span>
                                <span className='formula_number'>(83)</span>
                            </div>


                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}]) + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{gut}]-[PA_{peri}])`} /> </span>
                                <span className='formula_number'>(84)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}]) + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_gut}]-[NH_{3\\_peri}])`} />  </span>
                                <span className='formula_number'>(85)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{gut}}([PA_{peri}]-[PA_{gut}])`} /> </span>
                                <span className='formula_number'>(86)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{gut}}([NH_{3\\_peri}]-[NH_{3\\_gut}])`} /></span>
                                <span className='formula_number'>(87)</span>
                            </div>




                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}])`} /> </span>
                                <span className='formula_number'>(88)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}])`} />  </span>
                                <span className='formula_number'>(89)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}]) - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} /> </span>
                                <span className='formula_number'>(90)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /></span>
                                <span className='formula_number'>(91)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} /> </span>
                                <span className='formula_number'>(92)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} /></span>
                                <span className='formula_number'>(93)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} /> </span>
                                <span className='formula_number'>(94)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />   </span>
                                <span className='formula_number'>(95)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />  </span>
                                <span className='formula_number'>(96)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} /></span>
                                <span className='formula_number'>(97)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} />     </span>
                                <span className='formula_number'>(98)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />  </span>
                                <span className='formula_number'>(99)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} /></span>
                                <span className='formula_number'>(100)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} />  </span>
                                <span className='formula_number'>(101)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} />  </span>
                                <span className='formula_number'>(102)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} /> </span>
                                <span className='formula_number'>(103)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{gut}}([Glu_{cyto}]-[Glu_{gut}])`} /> </span>
                                <span className='formula_number'>(104)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} /> </span>
                                <span className='formula_number'>(105)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} /> </span>
                                <span className='formula_number'>(106)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} /></span>
                                <span className='formula_number'>(107)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} /></span>
                                <span className='formula_number'>(108)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} /></span>
                                <span className='formula_number'>(109)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} /> </span>
                                <span className='formula_number'>(110)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} /> </span>
                                <span className='formula_number'>(111)</span>
                            </div>



                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\lbrack kfiC\\rbrack}{\\mathrm{d}t} = k_{kfiC}  \\frac{\\left\\lbrack {IPTG} \\right\\rbrack}{K_{IPTG} + \\left\\lbrack {IPTG} \\right\\rbrack} - \\delta_{kfiC}  \\lbrack kfiC\\rbrack`} /> </span>
                                <span className='formula_number'>(112)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\left\\lbrack nirB \\right\\rbrack}{\\mathrm{d}t} = v_{nirB}-k_{nirB}  \\frac{\\left\\lbrack O_{2} \\right\\rbrack}{K_{O_{2}} + \\left\\lbrack O_{2} \\right\\rbrack} - \\delta_{nirB}  \\left\\lbrack nirB \\right\\rbrack`} /> </span>
                                <span className='formula_number'>(113)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_kfic}]}{\\mathrm{d}t} = k_{f1\\_kfiC}[P_{CAP}][kfiC] - k_{r1\\_kfiC}[P_{CAP\\_kfiC}]+k_{r2\\_kfiC}[P_{CAP\\_kfiC\\_nirB}]`} /> </span>
                                <span className='formula_number'>(114)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_nirB}]}{\\mathrm{d}t} = k_{f1\\_nirB}[P_{CAP}][nirB] - k_{r1\\_nirB}[P_{CAP\\_nirB}]+k_{r2\\_nirB}[P_{CAP\\_kfiC\\_nirB}]`} /></span>
                                <span className='formula_number'>(115)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{CAP\\_kfiC\\_nirB}]}{\\mathrm{d}t} = k_{f2\\_nirB}[P_{CAP\\_kfiC}][nirB] + k_{f2\\_kfiC}[P_{CAP\\_nirB}][kfiC]-(k_{r2\\_kfiC}+k_{r2\\_nirB})[P_{CAP\\_kfiC\\_nirB}]`} /></span>
                                <span className='formula_number'>(116)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\left\\lbrack {CAP} \\right\\rbrack}{\\mathrm{d}{t}} = k_{CAP}  \\left\\lbrack P_{CAP\\_kfiC\\_nirB} \\right\\rbrack - \\delta_{CAP}  \\left\\lbrack {CAP} \\right\\rbrack`} /></span>
                                <span className='formula_number'>(117)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}\\lbrack clr\\rbrack}{\\mathrm{d}t} = k_{clr} \\frac{K_{clr}}{K_{clr} + \\left\\lbrack {CAP} \\right\\rbrack} - \\delta_{clr}  \\lbrack clr\\rbrack`} /> </span>
                                <span className='formula_number'>(118)</span>
                            </div>
                            <div className='indent formula_content'>
                                <span className='formula_line'>
                                    <MathJax.Node formula={`\\frac{\\mathrm{d}N}{\\mathrm{d}t} = r N \\left( 1 - \\frac{N}{K} \\right) - N[clr]`} /> </span>
                                <span className='formula_number'>(119)</span>
                            </div>

                        </MathJax.Provider>
                        <h3>1.6 Simulation</h3>
                        <table className="model-table three-line-table">
                            <thead>
                                <tr className='table-head-line'>
                                    <th>Variable</th>
                                    <th>Value</th>
                                    <th>Units</th>
                                    <th>Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {simresult.map((row) => (
                                    <tr>
                                        <td>
                                            <div className="formula-scroll">
                                                <MathJax.Provider>
                                                    <MathJax.Node inline formula={row.id} />
                                                </MathJax.Provider>
                                            </div>

                                        </td>
                                        <td>                                           <div className="formula-scroll">
                                            <MathJax.Provider>
                                                <MathJax.Node inline formula={row.col1} />
                                            </MathJax.Provider>
                                        </div></td>
                                        <td>{row.col2}</td>
                                        <td>{row.col3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Except for the variables mentioned above, the initial values of all other variables are set to 0.</p>
                        <p>All differential equations were solved using Matlab SimBiology. To accelerate the computation, Sundials was used as the solver.</p>

                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion2}>
                                <h3>{isOpen2 ? 'Collapse' : 'Click here to see our parameters!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen2 ? 'open' : ''}`}>
                                <p style={{ color: '#656563' }} >Table S1: Parameters of the ODE model</p>
                                <table className="model-table three-line-table">

                                    <thead>
                                        <tr className='table-head-line'>
                                            <th>Parameter</th>
                                            <th>Description</th>
                                            <th>Value</th>
                                            <th>Units</th>
                                            <th>Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {simpara.map((row) => (
                                            <tr>
                                                <td>                   <td>
                                                    <div className="formula-scroll">
                                                        <MathJax.Provider>
                                                            <MathJax.Node inline formula={row.id} />
                                                        </MathJax.Provider>
                                                    </div>
                                                </td></td>
                                                <td>{row.col1}</td>
                                                <td>{row.col2}
                                                </td>
                                                <td>
                                                    <div className="formula-scroll">
                                                        <MathJax.Provider>
                                                            <MathJax.Node inline formula={row.col3} />
                                                        </MathJax.Provider>
                                                    </div>
                                                </td>
                                                <td>{row.col4}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>



                            </div>
                        </div>

                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion3}>
                                <h3>{isOpen3 ? 'Collapse' : 'Click here to see how we estimate the parameters!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen3 ? 'open' : ''}`}>
                                <h4>1. Estimating Michaelis constants and catalytic constants with UniKP</h4>
                                <p><b> UniKP</b> is a unified framework developed to predict enzyme kinetic parameters such as the Michaelis constant (Km), catalytic constant (kcat), and catalytic efficiency (kcat/Km). This framework accepts the amino acid sequence of the enzyme and the SMILES representation of the substrate as inputs, and then leverages pretrained language models to represent both enzyme sequences and substrate structures.</p>

                                <img src='https://static.igem.wiki/teams/5378/model/model5.webp' className='responsive-img' style={{ maxWidth: '90%', margin: '0 auto', paddingRight: '20%' }} />
                                <figcaption className='caption' style={{ paddingRight: '20%' }} >Figure S1: The model architecture of UniKP</figcaption>
                                <h5>1.1 Input Processing</h5>
                                <p><b>Enzyme Representation</b>: Protein sequences are encoded using the ProtT5-XL-UniRef50 model, which transforms each amino acid into a 1024-dimensional vector. Mean pooling is applied to generate a final per-protein representation</p>
                                <p><b>Substrate Representation</b>: Substrate structures are represented by converting their SMILES (Simplified Molecular Input Line Entry System) format into multiple 256-dimensional vectors, which is processed by a pretrained SMILES Transformer model. A 1024-dimensional vector is generated by concatenating outputs using mean and max pooling techniques.</p>
                                <h5>1.2  Extra Trees Model</h5>
                                <p>Subsequently, the pretrained Extra Trees model accepts two 1024-dimensional vectors generated from the encoded protein sequence and substrate structure. Depending on the loaded model, it outputs one of the following kinetic parameters: the catalytic constant (kcat), the Michaelis constant (Km), or the catalytic efficiency (kcat/Km).</p>
                                <p><b>Extra Trees</b> is an ensemble learning method that fits multiple decision trees on various sub-samples of the dataset and aggregates their predictions to improve accuracy and robustness. It is similar to **Random Forests** but with some key differences in how trees are constructed.</p>
                                <p>Unlike Random Forests, where the best split is chosen based on a criterion like Gini impurity or information gain, the Extree model introduces additional randomness by selecting split points **randomly** from a set of possible thresholds when constructing each decision tree. This increases diversity among the trees and helps prevent overfitting.</p>
                                <h5>1.3 Model Refinement</h5>
                                <p>For better accuracy in high-value kinetic parameter predictions, re-weighting techniques adjust the sample distributions during training. Besides, if environmental factors like pH and temperature are provided, the prediction process is refined using a two-layer model that takes these conditions into account.</p>
                                <h4>2. Prediction of Transcription and Translation Rate Constants</h4>
                                <p>To estimate our transcription and translation rate constants, we referenced the results of the 2023 Toulouse INSA-UPS team.</p>
                                <p>The expressions for their transcription and translation rate constants are as follows</p>
                                <MathJax.Provider>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`k_{ts} = \\frac{v_{polymerase}}{L_{mRNA}}[polymerase]`} /> </span>
                                        <span className='formula_number'>(96)</span>
                                    </div>
                                    <div className='indent formula_content'>
                                        <span className='formula_line'>
                                            <MathJax.Node formula={`k_{tl} = \frac{v_{ribosome}}{L_{protein}}[ribosome]`} /> </span>
                                        <span className='formula_number'>(96)</span>
                                    </div>

                                </MathJax.Provider>

                                <p>where  <MathJax.Provider>
                                    <span>
                                        <MathJax.Node inline formula={`k_{ts}`} />
                                    </span>
                                </MathJax.Provider> represents the transcription rate constant, <MathJax.Provider>
                                        <span>
                                            <MathJax.Node inline formula={`k_{tl}`} />
                                        </span>
                                    </MathJax.Provider> represents the translation rate constant,  <MathJax.Provider>
                                        <span>
                                            <MathJax.Node inline formula={`v_{polymerase}`} />
                                        </span>
                                    </MathJax.Provider> represents the transcription rate of RNA polymerase, and  <MathJax.Provider>
                                        <span>
                                            <MathJax.Node inline formula={`v_{ribosome}`} />
                                        </span>
                                    </MathJax.Provider> represents the translation rate of ribosomes. Additionally, <MathJax.Provider>
                                        <span>
                                            <MathJax.Node inline formula={`L_{mRNA}`} />
                                        </span>
                                    </MathJax.Provider>  and  <MathJax.Provider>
                                        <span>
                                            <MathJax.Node inline formula={`L_{protein} `} />
                                        </span>
                                    </MathJax.Provider> represent the length of the mRNA (in base pairs) and the length of the protein (in amino acids), respectively
                                </p>
                                <p>They also provided specific rate data: under a T7 RNA polymerase concentration of 100 nmol/L, the transcription rate is approximately <b>2.2 bp/s</b>, and the translation rate is about <b>0.03 amino acids/s</b>  per ribosome. This provides an important basis for estimating our rate constants. However, since their reaction environment was in liposomes, where substrates and enzymes for transcription and translation were limited, they modeled the transcription and translation processes using a Michaelis-Menten-like approach. In contrast, our reaction environment is the cytoplasm, where substrates and enzymes are more abundant. To simplify the model, we employed first-order reaction kinetics to model the transcription and translation processes, and the rate constants estimated using the above method are also applicable in our model.</p>
                                <p>Other parameters were obtained through wet lab experiments, consultations with experienced physicians and laboratory technicians, as well as our own estimations.</p>
                            </div>
                        </div>


                        <h4>Simulation of the Sensory Module and the Metabolic Module</h4>
                        <img src='https://static.igem.wiki/teams/5378/model/model6.webp' className='responsive-img' style={{ maxWidth: '90%', margin: '0 auto', paddingRight: '20%' }} />
                        <figcaption className='caption' style={{ paddingRight: '20%' }} >Figure 3 Overview of Simulation Results for the Sensory Module and the Metabolic Module</figcaption>
                        <ul><li>
                            Panels
                            <ul><li>PEA: Time Course of Concentrations of Various Substances in the PEA Metabolic Pathway</li>
                                <li>Trp/5-HTP: Time Course of Concentrations of Various Substances in the Trp/5-HTP Metabolic Pathway</li>
                                <li>Promoter: Time Course of Concentration of Activated PtynA Promoter</li>
                                <li>mRNA: Time Course of Concentrations of mRNA Encoding GS and TPH1</li>
                                <li>Enzyme: Time Course of Concentrations of GS and TPH1 Enzymes</li>
                            </ul>
                        </li></ul>
                        <p>Numerical solutions to the ODEs provided the time-dependent dynamics of all metabolites involved in the metabolic process, including substrates, products, promoters, mRNA, and enzymes. The results indicate that our model successfully activated the PtynA promoter, initiating the transcription and translation of downstream genes, which led to the expression of two key enzymes: glutamine synthetase and tryptophan hydroxylase. Additionally, the model successfully degraded phenylethylamine (PEA) and tryptophan (Trp), producing metabolites such as phenylacetic acid, glutamine, and 5-hydroxytryptophan, which can be absorbed and metabolized by the human body. The ammonia generated during this process was bound to glutamate by the action of glutamine synthetase, thereby reducing its potential harm to the body.</p>
                        <img src='https://static.igem.wiki/teams/5378/model/model7.webp' className='responsive-img' style={{ maxWidth: '90%', margin: '0 auto', paddingRight: '20%' }} />
                        <figcaption className='caption' style={{ paddingRight: '20%' }} >Figure 4 Concentration of phenylethylamine and Ammonia, 0-24h</figcaption>
                        <p>Phenylethylamine (PEA) and ammonia are two key pathogenic metabolites in hepatic encephalopathy, and their accumulation may worsen the patient's condition, significantly affecting prognosis. Therefore, we conducted further analysis of these metabolites. Simulation results show that when the initial concentration of PEA is 8.25 × 10^-4 mmol/L (100 ng/μL), after 10 hours, the PEA concentration decreases to 1.34 × 10^-4 mmol/L (16.24 ng/μL), and by the 24th hour, it decreases to approximately 1 × 10^-5 mmol/L. At this point, however, ammonia concentration rises to 7.76 × 10^-4 mmol/L, which aligns with our experimental results, confirming the model's validity and demonstrating the efficiency of our strategy in degrading PEA.</p>
                        <p>However, the increase in ammonia is concerning. Given that PEA intake occurs with daily meals, ammonia levels in the human gut would remain elevated, which could negatively impact the prognosis of hepatic encephalopathy. Further model analysis revealed that the primary factors influencing ammonia metabolism are the plasmid concentration carrying the GS gene and the enzyme activity of GS. Thus, future strain development should focus on increasing the plasmid copy number of GS within the bacteria and enhancing GS enzyme activity through protein engineering. Additionally, prior to strain-based therapy, patients' ammonia metabolism should be assessed, and during treatment, close monitoring is required. If early signs of ammonia toxicity appear, the engineered bacteria treatment should be immediately discontinued, and appropriate medical intervention should be administered.</p>

                        <h4>Simulation of the Safety Module</h4>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-23.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 5: Growth curve of EcN under anaerobic conditions with IPTG present.</figcaption></p>
                        </div>

                        <p>For the safety module, we first simulated the growth of EcN in an anaerobic environment with IPTG. The results showed that the growth curve of EcN followed the characteristics of a logistic curve, indicating that the growth of the strain slowed over time and reached saturation after approximately 3000 hours (125 days). This suggests that our strain can grow normally in the anaerobic environment of the gut while the patient regularly consumes IPTG.</p>

                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-24.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 6: Growth curve of EcN under aerobic conditions and/or in the absence of IPTG.</figcaption></p>
                        </div>
                        <p>Subsequently, we simulated the growth of EcN in the absence of IPTG, in aerobic conditions, and in the absence of IPTG in aerobic conditions. The results indicated that the strain's growth was suppressed in all scenarios, ultimately leading to its extinction, with the absence of IPTG having a more significant impact on growth. This implies that if EcN exits the gut into the external environment, or if the patient ends the treatment and stops taking IPTG, the EcN population will decline within a few days, effectively preventing environmental contamination and potential adverse effects on the human body.</p>
                        <p>In summary, our system of ordinary differential equations (ODEs) successfully simulated the temporal changes in various metabolites during the therapeutic function of the strain, as well as the gradual extinction of the strain when treatment ends or when it exits the body. This provides valuable insights for disease treatment, minimizing side effects, and preventing biological contamination.</p>
                    </Element>
                    <Element name="section2" className="element" id='section2'>
                        <h2>PART2 Metabolic Engineering Strategy to Reduce Ammonia Production</h2>
                        <h3>2.1 Goals</h3>
                        <p>In Escherichia coli Nissle 1917, various metabolic processes, such as amino acid deamination and urea metabolism, generate ammonia, which may pose potential risks to patients undergoing treatment with engineered bacteria. In our wet lab experiments, we utilized M9 medium to reduce ammonia production; however, it is crucial to decrease the strain's intrinsic ammonia production through methods such as gene knockout for strains intended for therapeutic use.</p>
                        <p>Our goal is to identify the key genes influencing ammonia production and uptake, and to perform knockouts based on their effects on ammonia metabolism. This approach aims to simulate the overall impact of these modifications on ammonia metabolism in Escherichia coli, thereby providing genetic targets for future production of therapeutic strains. To achieve this objective, we utilized a genome-scale metabolic model (GEM) of Escherichia coli Nissle 1917, a flux balance analysis (FBA) computational framework, and the OptGene gene optimization strategy. The GEM was provided by Hof et al., the FBA computational framework was supplied by COBRApy, and the OptGene algorithm was sourced from the Cameo library.</p>
                        <h3>2.2 Identification of Ammonia-Related Reactions and Flux</h3>
                        <p>First, we loaded the genome-scale metabolic model <strong>iDK1463</strong>  for Escherichia coli Nissle 1917, which includes <strong>1,464</strong>  genes,<b>2,112</b> metabolites, and <b>2,984</b> reactions based on genomic annotations and experimental data. Subsequently, we employed the flux balance analysis (FBA) method to calculate the steady-state metabolic fluxes (i.e., reaction rates) for various metabolic reactions in the wild-type strain.</p>
                        <div className="accordion">
                            <div className="accordion-header" onClick={toggleAccordion4}>
                                <h3>{isOpen4 ? 'Collapse' : 'Click here to see the details of FBA method!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen4 ? 'open' : ''}`}>
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
                            <div className="accordion-header" onClick={toggleAccordion5}>
                                <h3>{isOpen5 ? 'Collapse' : 'Click here to see the details of OptGene algorithm!'} ......</h3>
                            </div>

                            <div className={`accordion-content-model ${isOpen5 ? 'open' : ''}`}>
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
                        <h2 className="center-text mt-5">Part 3  protein-ligand docking and molecular dynamics simulation</h2>
                        <p>Molecular docking and molecular dynamics (MD) are powerful tools for investigating protein–ligand interactions. Molecular docking programs can predict the binding modes and affinities of protein–ligand complexes, while molecular dynamics simulations analyze the behavior of molecular systems over time by calculating the trajectories of molecules in phase space. This approach provides further insights into the dynamics and stability of protein–ligand binding. Our project encompasses numerous protein–ligand complexes, and the simulation and analysis of these complexes will enhance our understanding of the reaction processes and inform the design of experimental strategies. Specifically, for the dynamics studies, we primarily utilize protein molecular dynamics simulations based on GROMACS. The relevant workflow is illustrated in the figure below.</p>

                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-flow-pic.png' className='responsive-img' style={{ maxWidth: '60%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 1 Protein-Ligand Complex - Molecular Dynamics Simulation with GROMACS</figcaption></p>
                        </div>

                        <p>The protein molecules used in this section were obtained from the RCSB PDB database and the AlphaFold Protein Structure Database, while the small molecule ligands were retrieved from the PubChem database. The version of GROMACS employed was GROMACS 2024.1, and AutoDockTools version 1.5.7 was utilized.</p>
                        <h3>3.1 Molecular simulation of TynA-PEA</h3>
                        <p>In the reaction involving the TynA enzyme and phenethylamine, molecular dynamics provides a deeper understanding of the intermediate details of the reaction process. After obtaining the relevant molecular PDB files from databases, preprocessing was conducted to prepare the topology files and select the appropriate force field. Specifically, Sobtop was used for generating the small molecule topologies, and the Amber99sb-ildn force field was selected. Subsequently, a simulation box was constructed, and solvent was added (water was used to simplify the model). After charge equilibration, an energy minimization procedure was performed, resulting in the figure below:</p>

                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-8.webp' className='responsive-img' style={{ maxWidth: '60%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 2 Schematic diagram of energy minimization curve</figcaption></p>
                        </div>
                        <p>It can be observed that the energy continuously decreases and eventually stabilizes over time, indicating that this step was performed correctly and is feasible.</p>
                        <p>After completing the NVT/NPT equilibration, the final production simulation was conducted. Subsequently, we performed Root Mean Square Deviation (RMSD) analyses for both the protein and the ligand molecules. By examining the trends in RMSD values, we can determine whether the system has achieved equilibrium.</p>

                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-9.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 3 RMSD analysis of ligands</figcaption></p>
                        </div>
                        <p>As illustrated in the figure, the curve initially rises and then gradually levels off over time. Although there are slight fluctuations, it remains essentially stable around 0.56 nm. This indicates that the movement of the small molecule ligand relative to the protein becomes progressively stable.</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model-10.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 4 RMSD analysis of proteins</figcaption></p>
                        </div>
                        <p>As shown in the figure, the curve initially increases and then gradually levels off over time, ultimately stabilizing around 0.25 nm. This indicates that the protein conformation becomes progressively stable. It is noteworthy that, when analyzing RMSD, longer simulation times may be necessary, where feasible, to enhance the reliability and accuracy of the results.</p>
                        <p>Finally, we also obtained the system's total potential energy:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model11.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 5 Total potential energy change of the system</figcaption></p>
                        </div>
                        <p>During the docking process, although the system's total potential energy exhibits significant fluctuations, it remains generally stable within a defined range. This indicates that variations in the system's parameters have minimal overall impact throughout the entire simulation. The schematic diagram of the TynA-PEA docking obtained is shown below:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model12.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 6 TynA-PEA interconnection structure</figcaption></p>
                        </div>
                        <h3>3.2 Molecular simulation of TPH1-Trp</h3>
                        <p>For the TPH1 enzyme and tryptophan, we conducted the same procedures as outlined in Section 3.1 and obtained the following results:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model13.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 7 Simulated box and solvent addition</figcaption></p>
                        </div>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model14.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure. 8 Schematic diagram of energy minimization curve</figcaption></p>
                        </div>
                        <p>Similarly, as time progresses, the energy continuously decreases and eventually stabilizes. After performing NVT/NPT equilibration and the subsequent dynamics simulations, the trends in RMSD values can be analyzed to determine whether the system has achieved equilibrium.</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model15.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 9 RMSD analysis of protein-ligand</figcaption></p>
                        </div>
                        <p>As illustrated in the figure, the curve initially rises and then gradually levels off over time. Although there are slight fluctuations, it remains essentially stable around 0.42 nm. This indicates that the movements within the system become progressively stable.</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model16.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 10 Total potential energy change of the system</figcaption></p>
                        </div>
                        <p>Similarly to Section 3.1, during the docking process, the system's total potential energy exhibits significant fluctuations but remains generally stable within a defined range. This indicates that variations in the system's parameters have minimal overall impact throughout the entire simulation. The schematic diagram of the TPH1-Trp docking obtained is shown below:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model17.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 11 TynA-PEA interconnection structure</figcaption></p>
                        </div>
                        <h3>3.3 Molecular simulation of FeaR-Phenylacetaldehyde and GS-GA</h3>
                        <h4>3.3.1 FeaR-Phenylacetaldehyde</h4>
                        <p>Regarding the docking scenarios and binding sites, we also performed simulations using AutoDock Vina. For the FeaR enzyme and benzaldehyde, the docking results obtained with AutoDock Vina and AutoDockTools are presented below:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model18.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 12 Simulation of FeaR-Phenylacetaldehyde docking</figcaption></p>
                        </div>
                        <p>We simulated the potential interactions that may occur when the two molecules bind during the reaction process and obtained the following results:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model19.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 13 Interactions between moleculesg</figcaption></p>
                        </div>
                        <p>From the simulation schematic, it is evident that the binding energy of the docking interaction is –4.6 kcal/mol. Additionally, lysine residues within the protein form hydrogen bonds with the ligand, indicating that the docking complex is relatively stable.</p>
                        <h4>3.3.2 GS-GA</h4>
                        <p>For the GS enzyme and glutamate, the docking results obtained using AutoDock Vina and AutoDockTools are presented below:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model20.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 14 GS-GA docking simulation diagram</figcaption></p>
                        </div>
                        <p>We simulated the potential interaction forces that may arise when the two molecules bind during the reaction process and obtained:</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model21.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 15 Interactions between molecules</figcaption></p>
                        </div>
                        <p>From the simulation schematic, it is evident that the binding energy of the docking interaction is –4.6 kcal/mol. Glutamine, glutamate, and histidine residues within the protein form hydrogen bonds with the ligand, indicating that the docking complex is stable and that the docking simulation results are reliable.</p>
                        <p>In addition to the aforementioned sections, we appropriately utilized the AlphaFold Server to assist in molecular design. For example, the design of the CsgA-TFF3 construct is illustrated in the figure below.</p>
                        <div>
                            <img src='https://static.igem.wiki/teams/5378/model/model22.webp' className='responsive-img' style={{ maxWidth: '70%', margin: '0 auto', display: 'block', paddingRight: '20%' }} />
                            <p><figcaption className='caption' >Figure 16 AlphaFold Server simulates CsgA-TFF3 combination</figcaption></p>
                        </div>
                        <p style={{ marginTop: '50px' }} > In conclusion, the efficiency and stability of a system are critical considerations in the project design approach. By employing molecular docking and molecular dynamics simulations, we obtained more detailed information on protein–ligand binding, enhancing the efficiency of our molecule screening process and providing valuable insights for the development of other model components.</p>
                    </Element>

                </div>
            </div>
        </>
    );
}
