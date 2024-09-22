import { Nav } from 'react-bootstrap';
import { Link,Element } from 'react-scroll';
import React,{useEffect,useState} from 'react';
import MathJax from 'react-mathjax';




// sidenavbar begin
interface SideNavbarProps {
  activeLink: string;
}
const SideNavbar: React.FC<SideNavbarProps> = ({ activeLink }) => {
  return (
    <div className="side-navbar">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="section1" smooth={true} duration={500} className={activeLink === 'section1' ? 'active' : 'notActive'}>ODE Model of Biochemical Reactions</Nav.Link>
        <Nav.Link as={Link} to="section2" smooth={true} duration={500} className={activeLink === 'section2' ? 'active' : 'notActive'}>Section 2</Nav.Link>
        <Nav.Link as={Link} to="section3" smooth={true} duration={500} className={activeLink === 'section3' ? 'active' : 'notActive'}>Section 3</Nav.Link>
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



  return (
    <>
    <div className="custom-header-model">
<h1 className="centered-title">
<img 
                src="https://static.igem.wiki/teams/5378/header/model.png"
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
              <Element name="section1" className="element rounded-border" id='section1'>
              <h2 className="center-text">Section 1  ODE Model of Biochemical Reactions</h2>
                 <h3>1.1 Oxidation of Phenylethylamine</h3>
                  <p>Firstly, phenylethylamine (PEA) diffuses through the outer membrane of <em>Escherichia coli</em> into the periplasmic space, where it interacts with TynA.</p>
              <MathJax.Provider>
                  <div className='indent formula_content' >
                      <MathJax.Node  formula={`{PEA_{gut}\\overset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\underset{k_{\\text{diff}}\\_{\\text{PEA}}}{\\rightleftharpoons}}  PEA_{peri}}`} />
                      <span className='formula_number'>1</span>
                  
                  </div>
              </MathJax.Provider>
              <p>According to the law of mass action, this process can be represented by an ordinary differential equation (ODE) as follows</p>
              <MathJax.Provider>
                  <div className='indent formula_content' >
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}] - [PEA_{peri}])`} />
                      <span className='formula_number'>2</span>

                  </div>

                  <div className='indent'>
                  formula 1.3: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}] - [PEA_{gut}])`} />                  

                  </div>
              </MathJax.Provider>

            <p>where <MathJax.Provider>
                  <span>
                      <MathJax.Node inline formula={`k_{\\mathrm{diff\\_PEA}}`} />
                  </span>
              </MathJax.Provider> represents the passive diffusion constant of phenylethylamine. The amount of substance passing through the membrane per unit time is equal to the product of the concentration difference across the membrane and the passive diffusion rate constant.</p>
          <p>Subsequently, monoamine oxidase TynA oxidizes phenylethylamine into phenylacetaldehyde (PA) and ammonia.</p>
          <MathJax.Provider>
                  <div className='indent'>
                      formula 1.4: 
                      <MathJax.Node formula={` PEA\\xrightarrow[K_{M\\_TynA},k_{cat\\_TynA}]{TynA} PA_{peri} + NH_{3\\_peri}`} />
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
                  <div className='indent'>
                      formula 1.5: 
                      <MathJax.Node formula={`{{E+S}\\overset{k_{f1}}{\\underset{k_{r1}}{\\rightleftharpoons}}  ES \\xrightarrow[]{k_{cat}}E + P}`} />
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
                  <div className='indent'>
                      formula 1.7: 
                      <MathJax.Node formula={`k_{f1}[E][S] = \\left( k_{r1} + k_{\\mathrm{cat}} \\right) [ES]`} />
                                  
                  </div>
                  <div className='indent'>
                  formula 1.8: 
                      <MathJax.Node formula={`[ES] = \\frac{ k_{f1}[E][S] }{ k_{r1} + k_{\\mathrm{cat}} }`} />                                      
                  </div>

              </MathJax.Provider>

<p>2. Total Enzyme Concentration: The total concentration of the enzyme is constant and can be expressed as the sum of free enzyme and enzyme bound in the enzyme-substrate complex.</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 1.9: 
                      <MathJax.Node formula={`[E_{\\text{total}}] = [E] + [ES]`} />               
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
                  <div className='indent'>
                      formula 1.10: 
                      <MathJax.Node formula={`[ES] = \\frac{[E_{\\text{total}}] [S]}{\\frac{k_{r1} + k_{\\text{cat}}}{k_{f1}} + [S]}`} />               
                  </div>
              </MathJax.Provider>    
<p>The Michaelis constant  <MathJax.Provider>
                  <span>
                      <MathJax.Node inline formula={`K_M`} />
                  </span>
              </MathJax.Provider> is defined as</p>
              <MathJax.Provider>
                  <div className='indent'>
                      formula 1.11: 
                      <MathJax.Node formula={`K_M = \\frac{k_{r1} + k_{\\text{cat}}}{k_{f1}}
`} />               
                  </div>
              </MathJax.Provider>  
<p>This simplifies the expression for  to</p>

<MathJax.Provider>
                  <div className='indent'>
                      formula 1.12: 
                      <MathJax.Node formula={`ES = \\frac{ {[E\\_total][S]} }{K_M + [S]}`} />               
                  </div>
              </MathJax.Provider>  

<p>The rate of product formation is 
</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 1.13: 
                      <MathJax.Node formula={`v_0 = k_{cat}[ES]`} />               
                  </div>
              </MathJax.Provider>  
<p>Substituting <MathJax.Provider>
                  <span>
                      <MathJax.Node inline formula={`[ES]`} />
                  </span>
              </MathJax.Provider> gives the Michaelis-Menten equation:</p>

              <MathJax.Provider>
                  <div className='indent'>
                      formula 1.14: 
                      <MathJax.Node formula={`v_0 = \\frac{V_{max}[s]}{K_M+[S]}`} />               
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
                  <div className='indent'>
                      formula 1.15: 
                      <MathJax.Node formula={`v_0 = \\frac{k{cat}[E_{total}][S]}{K_M +[S]}`} />               
                  </div>
              </MathJax.Provider>  
<p>This process can be described using Michaelis-Menten kinetics as follows</p>

<MathJax.Provider>
                  <div className='indent'>
                      formula 1.16: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} />
                                  
                  </div>
                  <div className='indent'>
                  formula 1.17: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 1.18: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} />                                      
                  </div>
              </MathJax.Provider>

<p>The phenylacetaldehyde and ammonia formed in this reaction cross the inner membrane into the cytoplasm, where they participate in further oxidation and metabolic processes.</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 1.19: 
                      <MathJax.Node formula={`PA_{peri}\\overset{}{\\underset{}{\\rightleftharpoons}}PA_{cyto}`} />
                                  
                  </div>
                  <div className='indent'>
                  formula 1.20: 
                      <MathJax.Node formula={`NH_{3\\_peri}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3\\_cyto}`} />                                      
                  </div>
              </MathJax.Provider>
<p>According to the law of mass action</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 1.21: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}])`} />
                                  
                  </div>
                  <div className='indent'>
                  formula 1.22: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}])`} />                                      
                  </div>
                  <div className='indent'>
                      formula 1.23: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}])`} />
                                  
                  </div>
                  <div className='indent'>
                  formula 1.24: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}])`} />                                      
                  </div>

              </MathJax.Provider>

              <h3>1.2 Production of GS and TPH1</h3>
<p>The process by which FeaR catalyzes the further oxidation of phenylacetaldehyde into phenylacetic acid (PAA) in the cytoplasm can be broken down into two steps according to the principles of Michaelis-Menten kinetics. The phenylacetic acid produced by the reaction then diffuses out of the cell.</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 2.1: 
                      <MathJax.Node formula={`FeaR+PA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}FearR-PA`} />

                  </div>
                  <div className='indent'>
                  formula 2.2: 
                      <MathJax.Node formula={`FeaR-PA\\xrightarrow{}FearR+PAA_{cyto}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.3: 
                      <MathJax.Node formula={`PAA_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}PAA_{gut}`} />                                      
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
                  <div className='indent'>
                      formula 2.4: 
                      <MathJax.Node formula={`K_M = \\frac{k_{r1}+k_{cat}}{k_{f1}}`} />

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
                  <div className='indent'>
                      formula 2.5: 
                      <MathJax.Node formula={`k_{f1} \\approx \\frac{k_{cat}}{K_m}`} />

                  </div>
              </MathJax.Provider>
<p>Based on the two-step reaction process described, we can establish the following system of ODEs.</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 2.6: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} />

                  </div>
                  <div className='indent'>
                  formula 2.7: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.8: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.9: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.10: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} />                                      
                  </div>

              </MathJax.Provider>

<p>The process by which the <MathJax.Provider>
                  <span>
                      <MathJax.Node inline formula={`FeaR-PA`} />
                  </span>
              </MathJax.Provider> complex activates the PTynA promoter upstream of GS or TPH1 can be described as follows</p>

              <MathJax.Provider>
                  <div className='indent'>
                      formula 2.11: 
                      <MathJax.Node formula={`P_{TynA\\_GS}+FeaR-PA\\overset{}{\\underset{}{\\rightleftharpoons}}P_{TynA\\_GS\\_active}`} />

                  </div>
                  <div className='indent'>
                  formula 2.12: 
                      <MathJax.Node formula={`P_{TynA\\_TPH1}+FeaR-PA\\overset{}{\\underset{}{\\rightleftharpoons}}P_{TynA\\_TPH1\\_active}`} />                                      
                  </div>


              </MathJax.Provider>

              
              <p>The corresponding set of ODEs is</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 2.13: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />

                  </div>
                  <div className='indent'>
                  formula 2.14: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.15: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.16: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.17: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
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
                  <div className='indent'>
                      formula 2.18: 
                      <MathJax.Node formula={`P_{TynA\\_GS\\_active}  \\rightarrow P_{TynA\\_GS\\_active} + mRNA_{GS}`} />

                  </div>
                  <div className='indent'>
                  formula 2.19: 
                      <MathJax.Node formula={`P_{TynA\\_TPH1\\_active} \\rightarrow  P_{TynA\\_TPH1\\_active}+mRNA_{TPH1}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.20: 
                      <MathJax.Node formula={`mRNA_{GS}\\rightarrow \\varnothing`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.21: 
                      <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow \\varnothing`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.22: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.23: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} />                                      
                  </div>
              </MathJax.Provider>
<p>Next is the process of translation and degradation of the target protein.</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 2.24: 
                      <MathJax.Node formula={`mRNA_{GS}\\rightarrow mRNA_{GS}+GS`} />

                  </div>
                  <div className='indent'>
                  formula 2.25: 
                      <MathJax.Node formula={`mRNA_{TPH1}\\rightarrow mRNA_{TPH1}+TPH1`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.26: 
                      <MathJax.Node formula={`GS\\rightarrow \\varnothing`} />                                      
                  </div>
                  <div className='indent'>
                  formula 2.27: 
                      <MathJax.Node formula={`TPH1\\rightarrow \\varnothing`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.28: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} />                                      
                  </div>

                  <div className='indent'>
                  formula 2.29: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} />                                      
                  </div>
              </MathJax.Provider>


              <h3>1.3 Metabolism of Ammonia and Tryptophan</h3>
                <p>Under the catalysis of GS, glutamate accepts ammonia and is converted into glutamine. Glutamate in the gut diffuses into the cytoplasm, where it is converted into glutamine. The glutamine then diffuses back into the gut, acting as a carrier molecule.</p>
                <MathJax.Provider>
                  <div className='indent'>
                      formula 3.1: 
                      <MathJax.Node formula={`Glu_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Glu_{cyto}`} />

                  </div>
                  <div className='indent'>
                  formula 3.2: 
                      <MathJax.Node formula={`NH_{3_{Peri}}\\overset{}{\\underset{}{\\rightleftharpoons}}NH_{3_{cyto}}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.3: 
                      <MathJax.Node formula={`Glu_{cyto}+ NH_{3\\_cyto}\\xrightarrow[] Gln_{cyto}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.4: 
                      <MathJax.Node formula={`Gln_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}} Gln_{gut}`} />                                      
                  </div>

              </MathJax.Provider>
              <p>For an enzyme-catalyzed reaction involving two substrates that form a single product, the Michaelis-Menten equation can be extended to account for the involvement of both substrates. The general reaction can be written as</p>
              <MathJax.Provider>
                  <div className='indent'>
                      formula 3.5: 
                      <MathJax.Node formula={`E+A+B\\overset{k_{f1}}{\\underset{k_{r1}}{\\rightleftharpoons}}EAB \\xrightarrow{k_{cat}}E+P]`} />

                  </div>
              </MathJax.Provider>
<p>The Michaelis-Menten equation is</p>
<MathJax.Provider>
                  <div className='indent'>
                      formula 3.6: 
                      <MathJax.Node formula={`v_0 = \\frac{V_{max} [A] [B]}{K_{M\\_A}[B] + K_{M\\_B}[A] + [A][B]}`} />

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
                  <div className='indent'>
                      formula 3.7: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{gut}}([Glu_{cyto}]-[Glu_{gut}])`} />

                  </div>
                  <div className='indent'>
                  formula 3.8: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.9: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.10: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.11: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} />                                      
                  </div>

              </MathJax.Provider>
<p>TPH1 converts tryptophan that enters the cytoplasm into 5-hydroxytryptophan, which is then transported from the cytoplasm into the gut. The corresponding reaction equations and ODEs are as follows</p>
               
<MathJax.Provider>
                  <div className='indent'>
                      formula 3.8: 
                      <MathJax.Node formula={`Trp_{gut}\\overset{}{\\underset{}{\\rightleftharpoons}}Trp_{cyto}`} />

                  </div>
                  <div className='indent'>
                  formula 3.9: 
                      <MathJax.Node formula={`Trp_{cyto}\\xrightarrow{TPH1}5-HTP_{cyto}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.10: 
                      <MathJax.Node formula={`5-HTP_{cyto}\\overset{}{\\underset{}{\\rightleftharpoons}}5-HTP_{gut}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.11: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.12: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.13: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 3.14: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} />                                      
                  </div>

              </MathJax.Provider>
              <h3>1.4 Full ODE Model</h3>
               
              <MathJax.Provider>
                  <div className='indent'>
                      formula 4.1: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{gut}}([PEA_{peri}]-[PEA_{gut}])`} />

                  </div>
                  <div className='indent'>
                  formula 4.2: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PEA_{peri}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PEA}}{V_{peri}}([PEA_{gut}]-[PEA_{peri}]) -\\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.3: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_PA}}{V_{peri}}([PA_{cyto}]-[PA_{peri}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.4: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_peri}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TynA}[TynA][PEA_{peri}]}{K_{M\\_TynA}+[PEA_{peri}]} + \\frac{k_{diff\\_NH3}}{V_{peri}}([NH_{3\\_cyto}]-[NH_{3\\_peri}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.5: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PA_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PA}}{V_{cyto}}([PA_{peri}]-[PA_{cyto}]) - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.6: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[NH_{3\\_cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_NH3}}{V_{cyto}}([NH_{3\\_peri}]-[NH_{3\\_cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.7: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{cyto}]}{\\mathrm{d}t} = k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] + \\frac{k_{diff\\_PAA}}{V_{cyto}}([PAA_{gut}]-[PAA_{cyto}])`} />                                      
                  </div>
                  <div className='indent'>
                      formula 4.8: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[PAA_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_PAA}}{V_{gut}}([PAA_{cyto}]-[PAA_{gut}])`} />

                  </div>
                  <div className='indent'>
                  formula 4.9: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.10: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1\\_active}]}{\\mathrm{d}t} = k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] - k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.11: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_GS}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.12: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[P_{TynA\\_TPH1}]}{\\mathrm{d}t} = -k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.13: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR]}{\\mathrm{d}t} = - \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} + k_{cat\\_FeaR}[FeaR\\mathrm{-}PA]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.14: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[FeaR\\mathrm{-}PA]}{\\mathrm{d}t} = \\frac{k_{cat\\_FeaR}[FeaR][PA_{cyto}]}{K_{M\\_FeaR}} - k_{cat\\_FeaR}[FeaR\\mathrm{-}PA] -k_{f\\_PtynA}[P_{TynA\\_GS}][FeaR\\mathrm{-}PA] - k_{f\\_PtynA}[P_{TynA\\_TPH1}][FeaR\\mathrm{-}PA] + k_{r\\_PtynA}[P_{TynA\\_GS\\_active}] + k_{r\\_PtynA}[P_{TynA\\_TPH1\\_active}]`} />                                      
                  </div>
                  <div className='indent'>
                      formula 4.15: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{GS}]}{\\mathrm{d}t} = k_{mRNA\\_GS}[P_{TynA\\_GS\\_active}] - d_{mRNA\\_GS}[mRNA_{GS}]`} />

                  </div>
                  <div className='indent'>
                  formula 4.16: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[mRNA_{TPH1}]}{\\mathrm{d}t} = k_{mRNA\\_TPH1}[P_{TynA\\_TPH1\\_active}] - d_{mRNA\\_TPH1}[mRNA_{TPH1}]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.17: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[GS]}{\\mathrm{d}t} = p_{GS}[mRNA_{GS}] - d_{GS}[GS]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.18: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[TPH1]}{\\mathrm{d}t} = p_{TPH1}[mRNA_{TPH1}] - d_{TPH1}[TPH1]`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.19: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{gut}}([Glu_{cyto}]-[Glu_{gut}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.20: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Glu_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Glu}}{V_{cyto}}([Glu_{gut}]-[Glu_{cyto}]) - \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.21: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_GS}[GS][Glu_{cyto}][NH_{3\\_cyto}]}{(K_{M\\_GS\\_Glu}+[Glu_{cyto}])(K_{M\\_GS\\_NH3}+[NH_{3\\_cyto}])} + \\frac{k_{diff\\_Gln}}{V_{cyto}}([Gln_{gut}]-[Gln_{cyto}])`} />                                      
                  </div>
                  <div className='indent'>
                      formula 4.22: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Gln_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Gln}}{V_{gut}}([Gln_{cyto}]-[Gln_{gut}])`} />

                  </div>
                  <div className='indent'>
                  formula 4.23: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{gut}}([Trp_{cyto}]-[Trp_{gut}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.24: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[Trp_{cyto}]}{\\mathrm{d}t} = \\frac{k_{diff\\_Trp}}{V_{cyto}}([Trp_{gut}]-[Trp_{cyto}]) - \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]}`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.25: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{cyto}]}{\\mathrm{d}t} = \\frac{k_{cat\\_TPH1}[TPH1][Trp_{cyto}]}{K_{M\\_TPH1}+[Trp_{cyto}]} - \\frac{k_{diff\\_5-HTP}}{V_{cyto}}([5\\mathrm{-}HTP_{gut}]-[5\\mathrm{-}HTP_{cyto}])`} />                                      
                  </div>
                  <div className='indent'>
                  formula 4.26: 
                      <MathJax.Node formula={`\\frac{\\mathrm{d}[5\\mathrm{-}HTP_{gut}]}{\\mathrm{d}t} = \\frac{k_{diff\\_5-HTP}}{V_{gut}}([5\\mathrm{-}HTP_{cyto}]-[5\\mathrm{-}HTP_{gut}])`} />                                      
                  </div>
                  </MathJax.Provider>
              <h3>Initial Conditions</h3>
<p>Except for the variables mentioned below, the initial values of all other variables are set to 0.</p>
<table>
    <tr>
        <td>Variable 变量名</td>
        <td>Value 数值</td>
        <td>Units 单位</td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[PEA_{gut}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[TynA]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[FeaR]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[P_{TynA\\_GS}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>$<MathJax.Node inline formula={`[P_{TynA\\_TPH1}]`} />$</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[Glu_{gut}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[Glu_{cyto}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[Gln_{gut}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[Gln_{cyto}]`} /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><MathJax.Node inline formula={`[Trp_{gut}]`} /></td>
        <td></td>
        <td></td>
    </tr>
</table>

               </Element>
       
          
              
              <Element name="section2" className="element rounded-border" id='section2'>
                <h2>Section 2</h2>
                <p>Content for section 2.</p>
                <MathJax.Provider>
                  <div className='indent'>
                      {/* 行内编辑数学公式，相比于下面那个方便一些。去掉inline的话效果就和下面那个一样了。 */}
                      This is an inline math formula: <MathJax.Node inline formula={`f(x) = \\int_{-\\infty}^\\infty
                                                                                    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
                                                                                    \\,d\\xi`} />
                                                                                    <MathJax.Node formula={`f(x) = \\int_{-\\infty}^\\infty
                                                                                    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
                                                                                    \\,d\\xi`} />
                  </div>
              </MathJax.Provider>
                <img 
                src="https://static.igem.wiki/teams/5378/school-badge/yanyintech.webp"
                alt="example"
                className="responsive-img"
              />
              </Element>
          

              <Element name="section3" className="element rounded-border" id='section3'>
              <h2>Section 3</h2>
              <p>Content for section 3.</p>
              <div className="rounded-border">
              <h4 className="center-text">Section 3</h4>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>
              <p className="indent">las ijffs aiskfd fskj iiwls asd.aass ffas awssd awus iisal fask.aisisad ksjdfkaf iwjasifjakdshf wijdfalksjf wiksjkfjksalhf, gsahfjhgejkfh  uhaejkfh sjdihgfuqiw jh sjiafhjsaj fh asd.</p>

              <MathJax.Provider>
                  <div className='indent'>
                      {/* 行内编辑数学公式，相比于下面那个方便一些。去掉inline的话效果就和下面那个一样了。 */}
                      This is an inline math formula: <MathJax.Node inline formula={`f(x) = \\int_{-\\infty}^\\infty
                                                                                    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
                                                                                    \\,d\\xi`} />
                  </div>
              </MathJax.Provider>
              </div>

              </Element>
          

        </div>
        <div className="col-1"></div>

          
        
      </div>
    </>
  );
}
