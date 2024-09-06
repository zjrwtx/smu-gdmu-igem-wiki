// import { url } from "inspector";

export function Home() {
  

  return (
    <>
      <div className="container">
      <div className="row justify-content-center bg-victoria ">
        <div></div>




        <div className="col-md-8">
          <div className="row justify-content-center h1">Promotion Video</div>
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" controls>
                <source src={"https://static.igem.org/peertube/streaming-playlists/hls/b8667885-e1be-48b2-ab9b-d1aac71db0da/e35183e1-c8b5-45b0-a83a-d2b98dcb6996-480-fragmented.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
