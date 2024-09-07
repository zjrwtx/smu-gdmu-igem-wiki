// import { url } from "inspector";

export function Home() {
  

  return (
    <>
      <div className="custom-header left-align"></div>
      <div className="container-fluid">
      <div className="row justify-content-center bg-rice_yellow ">
        
        <div className="col-md-8 row justify-content-center ">
          <div className="row justify-content-center h1 full-height-element">
            Section 1
            <img
                src="https://img0.baidu.com/it/u=351821279,2605385406&fm=253&fmt=auto&app=138&f=PNG?w=600&h=335"
                alt="dungreed"
                className="responsive-img"
              />
          </div>
          <div className="row justify-content-center h1 full-height-element">
            Section 2
            <img
                src="https://pic.3h3.com/up/2023/0915/20230915100746929.png"
                alt="dungreed"
                className="responsive-img"
              />
          </div>
          <div className="row justify-content-center h1 full-height-element">
            Section 3
            <img
                src="https://img0.baidu.com/it/u=3750079665,4155589639&fm=253&fmt=auto&app=138&f=PNG?w=600&h=338"
                alt="dungreed"
                className="responsive-img"
              />
          </div>
          <div className="row justify-content-center h1">Stream our Promotion Video</div>
            <div className="col-md-6 row justify-content-center mb-5">
              <iframe 
                title="SMU-GDMU-CHINA: Engineered bacterial therapeutics for Preventing Hepatic Encepha... (2024) - Project Promotion [English]"  
                className="promotion-video"
                src="https://video.igem.org/videos/embed/b8667885-e1be-48b2-ab9b-d1aac71db0da"  
                allowFullScreen={true} 
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms">
              </iframe>
            </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
