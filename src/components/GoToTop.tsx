import  { useState, useEffect } from 'react';
import './GoToTop.css';  

export function GoToTop(){
  const [showButton, setShowButton] = useState(false);

  // 检测页面滚动
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // 当滚动超过300px时，显示按钮
      } else {
        setShowButton(false); // 滚动回顶部时隐藏按钮
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 点击按钮滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
  };

  return (
    <>
      {showButton && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          ↑ Go to Top
        </button>
      )}
    </>
  );
};


