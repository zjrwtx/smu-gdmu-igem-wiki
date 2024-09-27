// import { url } from "inspector";
import React, { useRef } from "react";


export function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // 储存每个section的引用
    let currentPage = 0; // 当前页面索引
  
    const scrollToSection = (index: number) => {
      if (containerRef.current && sectionRefs.current[index]) {
        const target = sectionRefs.current[index];
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
          currentPage = index;
        }
      }
    };
  
    const handleScroll = (event: React.WheelEvent) => {
      if (event.deltaY > 0) {
        // 向下滚动
        if (currentPage < sectionRefs.current.length - 1) {
          scrollToSection(currentPage + 1);
        }
      } else {
        // 向上滚动
        if (currentPage > 0) {
          scrollToSection(currentPage - 1);
        }
      }
    };
  
    return (
      <div
        className="fullpage-container"
        ref={containerRef}
        onWheel={handleScroll}
      >
        <section className="section bg-rice_yellow" ref={(el) => (sectionRefs.current[0] = el as HTMLDivElement)}>
          <div className="row">

            <div className="col-3"></div>
            <div className="col-6">
              <div className="vh20"></div>
              <img
                src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                alt="zxa"
                className="responsive-img"
              />
            </div>
            <div className="col-3"></div>
          </div>
        </section>
        <section className="section bg-rice_yellow" ref={(el) => (sectionRefs.current[1] = el as HTMLDivElement)}>
        <div className="row">
                <div>我是小盒子</div>
                <div className="rounded-border">橙色</div>
                <p>大家好，我是文本</p>
                <h2 className="center-text">居中</h2>
                <p className="indent">大家好啊，我的开头有缩进</p>
                <p className="center-text">大家好！我是居中文本！</p>
                <p className="bold-font">粗粗的文本</p>
                <p className="red-font">红色的文本</p>
                <p className="green-font">绿色的文本</p>
                <p className="blue-font">蓝色的文本</p>
                <p className="red-font center-text">叠加了多种属性的文本，
                <span className="bold-font">插入了粗体</span>文字</p>
                <h1>一级标题</h1>
                <h2>二级标题</h2>
                <h3>三级标题</h3>
                <h4>四级标题</h4>
              </div>
        </section>

        <section className="section bg-rice_yellow" ref={(el) => (sectionRefs.current[2] = el as HTMLDivElement)}>
        <div className="row">
        <div className="col-3"></div>
        
             <div className="col-6 mb-5">
             <div className="vh20 row h1 justify-content-center">Stream our PV!!!</div>
                 <iframe 
                  title="SMU-GDMU-CHINA: Engineered bacterial therapeutics for Preventing Hepatic Encepha... (2024) - Project Promotion [English]"  
                  className="promotion-video"
                  src="https://video.igem.org/videos/embed/b8667885-e1be-48b2-ab9b-d1aac71db0da"  
                  allowFullScreen={true} 
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms">
                </iframe>
            </div>
            <div className="col-3"></div>
            </div>
        </section>
      </div>
    );
  }




//   return (
//     <>
//       <div className="custom-header-home">
// <h1 className="centered-title">HOME</h1>
// </div>
//       <div className="container-fluid">
//       <div className="row justify-content-center bg-rice_yellow ">
        
//         <div className="col-md-8 row justify-content-center ">
//           <div className="row justify-content-center h1 full-height-element">
//             Section 1
//             <img
//                 src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
//                 alt="dungreed"
//                 className="responsive-img"
//               />
//           </div>
//           <div className="row justify-content-center h1 full-height-element">
//             Section 2
            // <img
            //     src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
            //     alt="dungreed"
            //     className="responsive-img"
            //   />
//           </div>
//           <div className="row justify-content-center h1 full-height-element">
//             Section 3
//             <img
//                 src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
//                 alt="dungreed"
//                 className="responsive-img"
//               />
//           </div>

//           <div className="row justify-content-center h1 full-height-element">
          // <div className="row">
          //       <div>我是小盒子</div>
          //       <div className="rounded-border">有橙色边框的小盒子</div>
          //       <p>大家好，我是文本</p>
          //       <p className="indent">大家好啊，我的开头有缩进</p>
          //       <p className="center-text">大家好！我是居中文本！</p>
          //       <p className="bold-font">粗粗的文本</p>
          //       <p className="red-font">红色的文本</p>
          //       <p className="green-font">绿色的文本</p>
          //       <p className="blue-font">蓝色的文本</p>
          //       <p className="bold-font red-font center-text">叠加了多种属性的文本，
          //       <span className="bold-font">插入了粗体</span>文字</p>
          //     </div>
//           </div>

//           <div className="full-height-element">  
            // <h1>一级标题</h1>
            // <h2>二级标题</h2>
            // <h3>三级标题</h3>
            // <h4>四级标题</h4>
//           </div>

//           <div className="row full-height-element">
//             <p className="center-text h1 pb-0 mb-0">Stream our Promotion Video</p>
//             <div className="col-1"></div>
//             <div className="col-10 mb-5">
//                 <iframe 
//                   title="SMU-GDMU-CHINA: Engineered bacterial therapeutics for Preventing Hepatic Encepha... (2024) - Project Promotion [English]"  
//                   className="promotion-video"
//                   src="https://video.igem.org/videos/embed/b8667885-e1be-48b2-ab9b-d1aac71db0da"  
//                   allowFullScreen={true} 
//                   sandbox="allow-same-origin allow-scripts allow-popups allow-forms">
//                 </iframe>
//             </div>
//             <div className="col-1"></div>

//           </div>
            


          
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
