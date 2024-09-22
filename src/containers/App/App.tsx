// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap JavaScript
// import { Route, Routes, useLocation } from "react-router-dom";
// import { Footer, Header, Navbar, NotFound, Loading } from "../../components";
// import { getPathMapping, stringToSlug } from "../../utils";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import path from "path";

// const App = () => {
//   const pathMapping = getPathMapping();
//   const location = useLocation();
//   const currentPath =
//     location.pathname
//       .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
//       .pop() || "/";

//   // Set Page Title
//   const title =
//     currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";



//   useEffect(() => {
//     // document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
//     document.title = `${title}`;
//   }, [title]);

//   // 加载页面
//   const [loading, setLoading] = useState(true);

//   // 这是定时两秒动画
//   // useEffect(() => {
//   //   // 模拟加载过程
//   //   console.log(`https://${import.meta.env.VITE_TEAM_YEAR}.igem.wiki/${import.meta.env.VITE_TEAM_NAME}${location.pathname}`);
//   //   setLoading(true);
//   //   const timer = setTimeout(() => {
//   //     setLoading(false);
//   //   }, 2000); // 2秒后隐藏加载页面

//   //   return () => clearTimeout(timer);
//   // }, [location.pathname]); // 监听路由变化



//   // // 这是加载完成后0.5秒结束播放动画
//   useEffect(() => {
//     // 发起网络请求
//     console.log(`https://${import.meta.env.VITE_TEAM_YEAR}.igem.wiki/${import.meta.env.VITE_TEAM_NAME}${location.pathname}`);
//     axios.get(`https://${import.meta.env.VITE_TEAM_YEAR}.igem.wiki/${import.meta.env.VITE_TEAM_NAME}${location.pathname}`)
    
//       .then(response => {
//         // 处理响应数据
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       })
//       .finally(() => {
//         setLoading(true);
//         // 请求完成后隐藏加载动画
//         setTimeout(() => {
//         setLoading(false);
//       },500);

//       });
//   }, [location.pathname]);

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           {/* Navigation */}
//           <Navbar />

//           {/* Header and PageContent */}
//           <Routes>
//             {Object.entries(pathMapping).map(
//               ([path, { component: Component }]) => (
//                 <Route
//                   key={path}
//                   path={path}
//                   element={
//                     <>
//                       <div>
//                         <Component />
//                       </div>
//                     </>
//                   }
//                 />
//               ),
//             )}
//             <Route
//               path="*"
//               element={
//                 <>
//                   <Header
//                     title="Not Found"
//                     lead="The requested URL was not found on this server."
//                   />
//                   <NotFound />
//                 </>
//               }
//             />
//           </Routes>

//           {/* Footer */}
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default App;


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap JavaScript
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, Navbar, NotFound, Loading } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const pathMapping = getPathMapping();
  const location = useLocation();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    // 设置页面标题
    document.title = `${title}`;
  }, [title]);

  // 加载页面
  const [loading, setLoading] = useState(true);

  // 发起网络请求并且等待图像加载完毕
  useEffect(() => {
    // 发起网络请求
    console.log(`https://${import.meta.env.VITE_TEAM_YEAR}.igem.wiki/${import.meta.env.VITE_TEAM_NAME}${location.pathname}`);
    
    // 设置loading为true
    setLoading(true);

    // 发送axios请求
    axios.get(`https://${import.meta.env.VITE_TEAM_YEAR}.igem.wiki/${import.meta.env.VITE_TEAM_NAME}${location.pathname}`)
      .then(response => {
        // 处理响应数据
        console.log(response.data);

        // 在处理完数据后，检查所有图像是否加载完成
        const images = document.querySelectorAll('img');  // 获取所有页面上的图像
        let loadedImages = 0;
        
        if (images.length === 0) {
          // 如果没有图像，立即结束loading
          setLoading(false);
        } else {
          // 遍历每一个图像，监听其加载完成
          images.forEach((img) => {
            if (img.complete) {
              // 如果图像已经加载完毕，直接计数
              loadedImages++;
            } else {
              // 如果图像未加载完毕，监听它的onload事件
              img.onload = () => {
                loadedImages++;
                if (loadedImages === images.length) {
                  // 当所有图像加载完毕时，隐藏loading动画
                  setLoading(false);
                }
              };
              img.onerror = () => {
                // 即使加载失败，也需要继续隐藏loading动画
                loadedImages++;
                if (loadedImages === images.length) {
                  setLoading(false);
                }
              };
            }
          });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  // 即使发生错误，也应该结束loading
      });
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Navigation */}
          <Navbar />

          {/* Header and PageContent */}
          <Routes>
            {Object.entries(pathMapping).map(
              ([path, { component: Component }]) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <>
                      <div>
                        <Component />
                      </div>
                    </>
                  }
                />
              ),
            )}
            <Route
              path="*"
              element={
                <>
                  <Header
                    title="Not Found"
                    lead="The requested URL was not found on this server."
                  />
                  <NotFound />
                </>
              }
            />
          </Routes>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
