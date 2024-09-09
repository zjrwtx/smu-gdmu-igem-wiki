import React, { useState } from 'react';

interface CardProps {
  image1: string;
  image2: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
}

const Card: React.FC<CardProps> = ({ image1, image2, title1,title2, description1,description2 }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="card-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card">
        <img 
          src={hover ? image2 : image1} 
          alt={title1} 
          className="card-img-top"
        />
        <div className="card-body">

          <h5 className="card-title">{hover? title2:title1}</h5>
          <p className="card-text">{hover?description2:description1}</p>

        </div>
      </div>
    </div>
  );
};

export function Team() {
  
  return (
    <>
        <div className="custom-header-team">
        <h1 className="centered-title">TEAM</h1>
        </div>
      <div className="row bg-rice_yellow">
        <div className='row justify-content-center h1'>SMU&GDMU CREW</div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
          </div>
        
        <div className="col-1"></div>

        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
        </div>

        <div className="col-1"></div>

        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://static.igem.wiki/teams/5378/school-badge/smu.webp"
          image2= "https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
          title1="SMU" 
          title2='GDMU'
          description1="SMU Description."
          description2='GDMU Description'
          />
          <div className='row-custom-height-card-space'></div>
        </div>

        <div className="col-2"></div>
      </div>
        
      
    </>
  );
}
