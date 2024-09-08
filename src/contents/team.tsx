import React, { useState } from 'react';

interface CardProps {
  image1: string;
  image2: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image1, image2, title, description }) => {
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
          alt={title} 
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export function Team() {
  
  return (
    <>
      <div className="custom-header-team">
        <h1 className='center-text'>TEAM</h1>
      </div>
      <div className="row bg-rice_yellow">
        <div className='row justify-content-center h1'>SMU&GDMU CREW</div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1= "https://img0.baidu.com/it/u=45513050,3171194851&fm=253&fmt=auto&app=138&f=JPEG?w=885&h=500"
          image2= "https://img1.baidu.com/it/u=455465338,4231697526&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
          title="yujiro" 
          description="Strongest man."
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1="https://via.placeholder.com/300x200.png?text=Image+1" 
          image2="https://via.placeholder.com/300x200.png?text=Image+2" 
          title="Card Title" 
          description="Card description goes here."
          />
          <div className='row-custom-height-card-space'></div>
          </div>
        
        <div className="col-1"></div>

        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1="https://via.placeholder.com/300x200.png?text=Image+1" 
          image2="https://via.placeholder.com/300x200.png?text=Image+2" 
          title="Card Title" 
          description="Card description goes here."
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1="https://via.placeholder.com/300x200.png?text=Image+1" 
          image2="https://via.placeholder.com/300x200.png?text=Image+2" 
          title="Card Title" 
          description="Card description goes here."
          />
          <div className='row-custom-height-card-space'></div>
        </div>

        <div className="col-1"></div>

        <div className="col-2">
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1="https://via.placeholder.com/300x200.png?text=Image+1" 
          image2="https://via.placeholder.com/300x200.png?text=Image+2" 
          title="Card Title" 
          description="Card description goes here."
          />
          <div className='row-custom-height-card-space'></div>
          <Card 
          image1="https://via.placeholder.com/300x200.png?text=Image+1" 
          image2="https://via.placeholder.com/300x200.png?text=Image+2" 
          title="Card Title" 
          description="Card description goes here."
          />
          <div className='row-custom-height-card-space'></div>
        </div>

        <div className="col-2"></div>
      </div>
        
      
    </>
  );
}
