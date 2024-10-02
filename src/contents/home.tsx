import  {  useEffect, useState } from "react";
import { Element } from 'react-scroll';

export function Home() {
  const [activeLink, setActiveLink] = useState<string>('');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.element');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop > -section.clientHeight) {
          currentSection = section.id;
          console.log(currentSection)
        }
      });
      setActiveLink(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-rice_yellow">
      {/* 1 */}
      <div className="page-container-1">
      <div className="page-element-title">
        <img
            src="https://static.igem.wiki/teams/5378/home/guard.webp"
            alt="example"
            className="home-img-wide element-title-animation"
          />
        </div>
        <div className="page-element-0">
          <img
            src="https://static.igem.wiki/teams/5378/home/23.webp"
            alt="example"
            className="home-img-wide element-0-animation"
          />
        </div>
        <div className="page-element-1">
          <img
            src="https://static.igem.wiki/teams/5378/home/25.webp"
            alt="example"
            className="home-img-wide element-1-animation"
          />
        </div>
        <div className="page-element-2">
          <img
            src="https://static.igem.wiki/teams/5378/home/24.webp"
            alt="example"
            className="home-img-wide element-2-animation"
          />
        </div>
        <div className="page-element-3">
          <img
            src="https://static.igem.wiki/teams/5378/home/26.webp"
            alt="example"
            className="home-img-wide element-3-animation"
          />
        </div>
      </div>

      {/* 2 */}
      <div className="page-container-2">
        <div className="page-element-4p">
          <img
            src="https://static.igem.wiki/teams/5378/home/mortality.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-4p2">
          <img
            src="https://static.igem.wiki/teams/5378/home/earth.webp"
            alt="example"
            className="home-img-wide img-4p2"
          />
        </div>
        <div className="page-element-4p3">
          <img
            src="https://static.igem.wiki/teams/5378/home/d4.webp"
            alt="example"
            className="home-img-wide img-4p3"
          />
        </div>
        <div className="page-element-4p4">
          <img
            src="https://static.igem.wiki/teams/5378/home/orbit2.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>

      </div>


      {/* 3 */}
      <div className="page-container-3">

        <Element name="element-5" id="element-5" className='element page-element-5' >
          <img
            src="https://static.igem.wiki/teams/5378/home/girlroar.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-5' ? 'img-5-active' : 'img-5'}`}
          />
        </Element>
        
        
        <Element name="element-6" id="element-6" className="element page-element-6">
          <img
            src="https://static.igem.wiki/teams/5378/home/20.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-6' ? 'img-6-active' : 'img-6'}`}
          />
        </Element>
        </div>

      {/* 4 */}
      <div className="page-container-4">
        <Element name="element-7" id="element-7" className="element page-element-7">
          <img
            src="https://static.igem.wiki/teams/5378/home/21.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-7' ? 'img-7-active' : 'img-7'}`}
          />
        </Element>
      </div>
      {/* 5 */}
      <div className="page-container-5">
        <Element name="element-8" id="element-8" className="element page-element-8">
          <img
            src="https://static.igem.wiki/teams/5378/home/nh3.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-8' ? 'img-8-active' : 'img-8'}`}
          />
        </Element>
        <div className="page-element-9">
          <img
            src="https://static.igem.wiki/teams/5378/home/path.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <Element name="element-10" id="element-10" className="element page-element-10">
          <img
            src="https://static.igem.wiki/teams/5378/home/hepacry.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-10' ? 'img-10-active' : 'img-10'}`}
          />
        </Element>
        <Element name="element-11" id="element-11" className="element page-element-11">
          <img
            src="https://static.igem.wiki/teams/5378/home/gut.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-11' ? 'img-11-active' : 'img-11'}`}
          />
        </Element>
      </div>

      {/* 6 */}
      <div className="page-container-6">

        
        
        <Element name="element-15" id="element-15" className="element page-element-15-container">
          <img
            src="https://static.igem.wiki/teams/5378/home/boyhead.webp"
            alt="example"
            className={`home-img-wide page-element-15 img-15 ${activeLink === 'element-15' ? 'img-fade-in-active' : 'img-fade-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/boyinsanity.webp"
            alt="example"
            className={`home-img-wide page-element-14 ${activeLink === 'element-15' ? 'img-left-in-active' : 'img-left-in'}`}
          />

          <img
            src="https://static.igem.wiki/teams/5378/home/boyint.webp"
            alt="example"
            className={`home-img-wide page-element-13 ${activeLink === 'element-15' ? 'img-left-in-active' : 'img-left-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/boycoma.webp"
            alt="example"
            className={`home-img-wide page-element-12 ${activeLink === 'element-15' ? 'img-right-in-active' : 'img-right-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/d3.webp"
            alt="example"
            className={`home-img-wide page-element-15p ${activeLink === 'element-15' ? 'img-fade-in-active' : 'img-fade-in'}`}
          />
        </Element>

      </div>

      {/* 7 */}
      <div className="page-container-7">
        <Element name="element-16" id="element-16" className="element page-element-16">
          <img
            src="https://static.igem.wiki/teams/5378/home/boybigmouth.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-16' ? 'img-16-active' : 'img-16'}`}
          />
          <div className="page-element-16p">
          <img
            src="https://static.igem.wiki/teams/5378/home/words1.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-16' ? 'img-16p-active' : 'img-16p'}`}
          />
          </div>

        </Element>

        <Element name="element-17" id="element-17" className="element page-element-17">
          <img
            src="https://static.igem.wiki/teams/5378/home/girlfort.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-17' ? 'img-17-active' : 'img-17'}`}
          />
        </Element>
      </div>
      {/* 8 */}
      <div className="page-container-8">
        {/* <div className="page-element-18">
          <img
            src="https://static.igem.wiki/teams/5378/home/28.webp"
            alt="example"
            className="home-img-wide"
          />
        </div> */}
        
        
        <Element name="element-18p3" id="element-18p3" className="element element-18p3-container">
          <img
            src="https://static.igem.wiki/teams/5378/home/2.webp"
            alt="example"
            className={`home-img-wide page-element-21p ${activeLink === 'element-18p3' ? 'img-18p3-active' : 'img-18p3'}`}
          />
        <img
            src="https://static.igem.wiki/teams/5378/home/27.webp"
            alt="example"
            className={`home-img-wide page-element-19 ${activeLink === 'element-18p3' ? 'img-left-in-active' : 'img-left-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/dialog3.webp"
            alt="example"
            className={`home-img-wide page-element-18p3 ${activeLink === 'element-18p3' ? 'img-right-in-active' : 'img-right-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/smallgut.webp"
            alt="example"
            className={`home-img-wide page-element-18p ${activeLink === 'element-18p3' ? 'img-fade-in-active' : 'img-fade-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/inpill.webp"
            alt="example"
            className={`home-img-wide page-element-18p9 ${activeLink === 'element-18p3' ? 'img-18p9-active' : 'img-18p9'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/7.webp"
            alt="example"
            className={`home-img-wide page-element-18p9 ${activeLink === 'element-18p3' ? 'img-18p10-active' : 'img-18p10'}`}
          />
          
        </Element>
        {/* sensor */}
        <Element name="element-18p4" id="element-18p4" className="element page-element-18p4-container">
        <img
            src="https://static.igem.wiki/teams/5378/home/dialog2.webp"
            alt="example"
            className={`home-img-wide page-element-18p4 ${activeLink === 'element-18p4' ? 'img-left-in-active' : 'img-left-in'}`}
          />
        <img
          src="https://static.igem.wiki/teams/5378/home/4th/block.webp"
          alt="example"
          className={`home-img-wide page-element-18p2 ${activeLink === 'element-18p4' ? 'img-right-in-active' : 'img-right-in'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/pea.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p1 ${activeLink === 'element-18p4' ? 'img-18p2p1-active' : 'img-18p2p1'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/metabolic.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p2 ${activeLink === 'element-18p4' ? 'img-18p2p2-active' : 'img-18p2p2'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/pcon.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p3 ${activeLink === 'element-18p4' ? 'img-right-in-active' : 'img-right-in'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/pag.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p4 ${activeLink === 'element-18p4' ? 'img-18p2p4-active' : 'img-18p2p4'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/ptyna.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p5 ${activeLink === 'element-18p4' ? 'img-18p2p5-active' : 'img-18p2p5'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/tyna.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p6 ${activeLink === 'element-18p4' ? 'img-18p2p6-active' : 'img-18p2p6'}`}
        />
        <img
          src="https://static.igem.wiki/teams/5378/home/3rd/fearpag.webp"
          alt="example"
          className={`home-img-wide page-element-18p2p7 ${activeLink === 'element-18p4' ? 'img-18p2p7-active' : 'img-18p2p7'}`}
        />
        {/* https://static.igem.wiki/teams/5378/home/3rd/pag.webp
        https://static.igem.wiki/teams/5378/home/3rd/pcon.webp
        https://static.igem.wiki/teams/5378/home/3rd/metabolic.webp
        https://static.igem.wiki/teams/5378/home/3rd/pea.webp
        https://static.igem.wiki/teams/5378/home/3rd/ptyna.webp
        https://static.igem.wiki/teams/5378/home/3rd/tyna.webp
        https://static.igem.wiki/teams/5378/home/3rd/fearpag.webp */}
        </Element>

{/* meta */}
<Element name="element-18p6" id="element-18p6" className="element page-element-18p6-container">
          <img
            src="https://static.igem.wiki/teams/5378/home/dialog1.webp"
            alt="example"
            className={`home-img-wide page-element-18p5 ${activeLink === 'element-18p6' ? 'img-fade-in-active' : 'img-fade-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/board.webp"
            alt="example"
            className={`home-img-wide page-element-18p6 ${activeLink === 'element-18p6' ? 'img-left-in-active' : 'img-left-in'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/demonnh3.webp"
            alt="example"
            className={`home-img-wide page-element-18p6p ${activeLink === 'element-18p6' ? 'img-18p6p-active' : 'img-18p6p'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/angel.webp"
            alt="example"
            className={`home-img-wide page-element-18p6p2 ${activeLink === 'element-18p6' ? 'img-18p6p2-active' : 'img-18p6p2'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/gs.webp"
            alt="example"
            className={`home-img-wide page-element-18p6p3 ${activeLink === 'element-18p6' ? 'img-18p6p3-active' : 'img-18p6p3'}`}
          />
          <img
            src="https://static.igem.wiki/teams/5378/home/3rd/plasmid.webp"
            alt="example"
            className={`home-img-wide page-element-18p6p4 ${activeLink === 'element-18p6' ? 'img-18p6p4-active' : 'img-18p6p4'}`}
          />

</Element>
        
        
        {/* https://static.igem.wiki/teams/5378/home/3rd/board.webp
        https://static.igem.wiki/teams/5378/home/3rd/demonnh3.webp
        https://static.igem.wiki/teams/5378/home/3rd/angel.webp
        https://static.igem.wiki/teams/5378/home/3rd/gs.webp */}
        
        {/* safety */}
        <Element name="element-18p8" id="element-18p8" className="element page-element-18p8-container">
        <div className="page-element-18p7">
          <img
            src="https://static.igem.wiki/teams/5378/home/d1.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-18p8' ? 'img-left-in-active' : 'img-left-in'}`}
          />
        </div>
          
          <div className="page-element-18p8">
          <img
            src="https://static.igem.wiki/teams/5378/home/d2.webp"
            alt="example"
            className={`home-img-wide ${activeLink === 'element-18p8' ? 'img-right-in-active' : 'img-right-in'}`}
          />
          </div>
        </Element>


        {/* <div className="page-element-21">
          <img
            src="https://static.igem.wiki/teams/5378/home/4.webp"
            alt="example"
            className="home-img-wide"
          />
        </div> */}
        
      </div>

      {/* 9 */}
      <div className="page-container-9">
        <div className="page-element-22">
          <img
            src="https://static.igem.wiki/teams/5378/home/future2.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-23">
          <img
            src="https://static.igem.wiki/teams/5378/home/girlboy.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
      </div>
    </div>
  );
}
