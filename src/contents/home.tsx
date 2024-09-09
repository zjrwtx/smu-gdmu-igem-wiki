// import { url } from "inspector";

export function Home() {
  

  return (
    <>
      <div className="custom-header-home">
<h1 className="centered-title">HOME</h1>
</div>
      <div className="container-fluid">
      <div className="row justify-content-center bg-rice_yellow ">
        
        <div className="col-md-8 row justify-content-center ">
          <div className="row justify-content-center h1 full-height-element">
            Section 1
            <img
                src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                alt="dungreed"
                className="responsive-img"
              />
          </div>
          <div className="row justify-content-center h1 full-height-element">
            Section 2
            <img
                src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                alt="dungreed"
                className="responsive-img"
              />
          </div>
          <div className="row justify-content-center h1 full-height-element">
            Section 3
            <img
                src="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
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
