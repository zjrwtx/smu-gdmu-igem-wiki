import React, { useState } from 'react';

interface CardProps {
  image1: string;
  image2: string;
  title1: string;
  description1: string;
  id: string;
  onHover: (id: string, isHovered: boolean) => void; // 添加回调函数，用于父组件通知悬浮状态
}

const Card: React.FC<CardProps> = ({ image1, image2, title1,  description1,  id, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card-container"
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(id, true)
      }} // 鼠标悬浮时触发
      onMouseLeave={() => {
        setIsHovered(false)
        onHover(id, false)
      }} // 鼠标离开时触发
    >
      <div className="card">
        <img
          src={isHovered ? image2 : image1}
          alt={title1}
          className="card-img-top"
        />
        {isHovered ? (  // 根据 isHovered 状态控制内容渲染
          <div className="card-body">
            <h5 className="card-title">{description1}</h5>
          </div>
        ) : (
          <div className="card-body">
            <h5 className="card-title">{title1}</h5>
          </div>
        )}
        
      </div>
    </div>
  );
};

const StickyImageContainer: React.FC<{ image: string ,words: string}> = ({ image,words }) => {
  return (
    <div className="sticky-container" >
      <img src={image} alt="Sticky" className='sticky-img' />
      <p className='sticky-words'>{words}</p>
    </div>
  );
};


// 下方定义重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
export function Team() {
  const [hoveredCardId, setHoveredCardId] = useState<"card1" | "card2" | "card3" | "card4" | "card5" | "card6" | "card7" | "card8" | "card9" | "card10" | "card11" | "card12" | "card13" | "card14" | "card15" | "card16" | "card17" | "card18" | "card19" | "card20" | "card21" | "card22" | "card23" | "card24" | "card25" | "card26" | "card27" | "card28" | "card29" | "card30" | "card31" | "card32" | "card33" | "card34" | "card35" | null>(null);


  // 定义每个卡片的图像，当悬浮时左侧显示相应的图像
  // 下方的定义重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  const images = {
    card1: 'https://static.igem.wiki/teams/5378/school-badge/smu.webp',
    card2: 'https://static.igem.wiki/teams/5378/school-badge/gdmu.webp',
    card3: 'https://static.igem.wiki/teams/5378/image/zxa-tp.webp',
    card4: 'https://static.igem.wiki/teams/5378/safety/03-111.webp',
    card5: 'https://placehold.co/600x800',
    card6: 'https://placehold.co/600x800',
    card7: 'https://placehold.co/600x800',
    card8: 'https://placehold.co/600x800',
    card9: 'https://placehold.co/600x800',
    card10: 'https://placehold.co/600x800',
    card11: 'https://placehold.co/600x800',
    card12: 'https://placehold.co/600x800',
    card13: 'https://placehold.co/600x800',
    card14: 'https://placehold.co/600x800',
    card15: 'https://placehold.co/600x800',
    card16: 'https://placehold.co/600x800',
    card17: 'https://placehold.co/600x800',
    card18: 'https://placehold.co/600x800',
    card19: 'https://placehold.co/600x800',
    card20: 'https://placehold.co/600x800',
    card21: 'https://placehold.co/600x800',
    card22: 'https://placehold.co/600x800',
    card23: 'https://placehold.co/600x800',
    card24: 'https://placehold.co/600x800',
    card25: 'https://placehold.co/600x800',
    card26: 'https://placehold.co/600x800',
    card27: 'https://placehold.co/600x800',
    card28: 'https://placehold.co/600x800',
    card29: 'https://placehold.co/600x800',
    card30: 'https://placehold.co/600x800',
    card31: 'https://placehold.co/600x800',
    card32: 'https://placehold.co/600x800',
    card33: 'https://placehold.co/600x800',
    card34: 'https://placehold.co/600x800',
    card35: 'https://placehold.co/600x800',


  };

  const words = {
    card1: '大家好啊，我是zxa，asdasdsadasdsasdadwdawdawdasdawdawsdaw附件格式艰苦虎骨酒扣税的哎u了如何改进南方灯具开关哎u人身攻击喀什地方韩国u爱我人员孤独和干部埃卢瑞干哈及时答复客户给',
    card2: '我是wyf，地地道道的地地道道的地对地导弹顶顶顶顶',
    card3: '我是leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    card4: '',
    card5: '',
    card6: '',
    card7: '',
    card8: '',
    card9: '',
    card10: '',
    card11: '',
    card12: '',
    card13: '',
    card14: '',
    card15: '',
    card16: '',
    card17: '',
    card18: '',
    card19: '',
    card20: '',
    card21: '',
    card22: '',
    card23: '',
    card24: '',
    card25: '',
    card26: '',
    card27: '',
    card28: '',
    card29: '',
    card30: '',
    card31: '',
    card32: '',
    card33: '',
    card34: '',
    card35: '',

  };

  // 下方定义重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  const handleCardHover = (id: string, isHovered: boolean) => {
    if (isHovered) {
      setHoveredCardId(id as "card1" | "card2" | "card3" | "card4" | "card5" | "card6" | "card7" | "card8" | "card9" | "card10" | "card11" | "card12" | "card13" | "card14" | "card15" | "card16" | "card17" | "card18" | "card19" | "card20" | "card21" | "card22" | "card23" | "card24" | "card25" | "card26" | "card27" | "card28" | "card29" | "card30" | "card31" | "card32" | "card33" | "card34" | "card35");
    } else {
      setHoveredCardId(null);
    }
  };

  return (
    <>
      <div className="custom-header-team">
        <h1 className="centered-title">
          <img 
            src="https://static.igem.wiki/teams/5378/header/team.png"
            alt="team header"
            className="header-img"
          />
        </h1>
      </div>

      <div className="row bg-rice_yellow">
        {/* 左侧sticky容器 */}
        <div className="col-4">
          {/* 下方设置默认显示图像 */}
          <StickyImageContainer image={hoveredCardId ? images[hoveredCardId] : 'https://placehold.co/600x800'} words={hoveredCardId ? words[hoveredCardId] : "Good to see you here!!"} />
        </div>

        {/* 卡片区域 */}
        <div className="col-8">

          <div className='row justify-content-center h1'>Instructor</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card1"
                image1="https://placehold.co/600x800"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card2"
                image1="https://placehold.co/600x800"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card3"
                image1="https://placehold.co/600x800"
                image2="https://static.igem.wiki/teams/5378/lesser-panda/smal.webp"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card4"
                image1="https://placehold.co/600x800"
                image2="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>

          </div>

          <div className='row justify-content-center h1'>Student Leader</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card1"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card2"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card3"
                image1="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                image2="https://static.igem.wiki/teams/5378/lesser-panda/smal.webp"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card4"
                image1="https://static.igem.wiki/teams/5378/safety/03-111.webp"
                image2="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>

          </div>

          <div className='row justify-content-center h1'>Advisor</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card1"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card2"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card3"
                image1="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                image2="https://static.igem.wiki/teams/5378/lesser-panda/smal.webp"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card4"
                image1="https://static.igem.wiki/teams/5378/safety/03-111.webp"
                image2="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>

          </div>

          <div className='row justify-content-center h1'>Student Member</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card1"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card2"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card3"
                image1="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                image2="https://static.igem.wiki/teams/5378/lesser-panda/smal.webp"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card4"
                image1="https://static.igem.wiki/teams/5378/safety/03-111.webp"
                image2="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>

          </div>

          <div className='row justify-content-center h1'>External Member</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card1"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card2"
                image1="https://static.igem.wiki/teams/5378/school-badge/smu.webp"
                image2="https://static.igem.wiki/teams/5378/school-badge/gdmu.webp"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card3"
                image1="https://static.igem.wiki/teams/5378/image/zxa-tp.webp"
                image2="https://static.igem.wiki/teams/5378/lesser-panda/smal.webp"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card4"
                image1="https://static.igem.wiki/teams/5378/safety/03-111.webp"
                image2="https://static.igem.wiki/teams/5378/safety/03-11.webp"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>

          </div>

        </div>


          



          
        

        
          
        

        
          
        

        {/* <div className="col-2"></div> */}
      </div>
    </>
  );
}
