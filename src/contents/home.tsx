import  {  useEffect, useState } from "react";
import { Element } from 'react-scroll';

export function Home() {
  const [activeLink, setActiveLink] = useState<string>('');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.element');
      let currentSection = '';
      console.log(sections)
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
        <div className="page-element-8">
          <img
            src="https://static.igem.wiki/teams/5378/home/nh3.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-9">
          <img
            src="https://static.igem.wiki/teams/5378/home/path.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-10">
          <img
            src="https://static.igem.wiki/teams/5378/home/hepacry.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-11">
          <img
            src="https://static.igem.wiki/teams/5378/home/gut.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
      </div>

      {/* 6 */}
      <div className="page-container-6">
        <div className="page-element-12">
          <img
            src="https://static.igem.wiki/teams/5378/home/boycoma.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-13">
          <img
            src="https://static.igem.wiki/teams/5378/home/boyint.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-14">
          <img
            src="https://static.igem.wiki/teams/5378/home/boyinsanity.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-15">
          <img
            src="https://static.igem.wiki/teams/5378/home/boyhead.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-15p">
          <img
            src="https://static.igem.wiki/teams/5378/home/d3.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
      </div>

      {/* 7 */}
      <div className="page-container-7">
        <div className="page-element-16">
          <img
            src="https://static.igem.wiki/teams/5378/home/boybigmouth.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-16p">
          <img
            src="https://static.igem.wiki/teams/5378/home/words1.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-17">
          <img
            src="https://static.igem.wiki/teams/5378/home/girlfort.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
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
        <div className="page-element-18p">
          <img
            src="https://static.igem.wiki/teams/5378/home/smallgut.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p2">
          <img
            src="https://static.igem.wiki/teams/5378/home/pathway.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p3">
          <img
            src="https://static.igem.wiki/teams/5378/home/dialog3.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p4">
          <img
            src="https://static.igem.wiki/teams/5378/home/dialog2.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p5">
          <img
            src="https://static.igem.wiki/teams/5378/home/dialog1.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p6">
          <img
            src="https://static.igem.wiki/teams/5378/home/devil.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p7">
          <img
            src="https://static.igem.wiki/teams/5378/home/d1.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-18p8">
          <img
            src="https://static.igem.wiki/teams/5378/home/d2.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        <div className="page-element-19">
          <img
            src="https://static.igem.wiki/teams/5378/home/27.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
        {/* <div className="page-element-21">
          <img
            src="https://static.igem.wiki/teams/5378/home/4.webp"
            alt="example"
            className="home-img-wide"
          />
        </div> */}
        <div className="page-element-21p">
          <img
            src="https://static.igem.wiki/teams/5378/home/2.webp"
            alt="example"
            className="home-img-wide"
          />
        </div>
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
