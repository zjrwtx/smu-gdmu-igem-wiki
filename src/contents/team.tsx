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
    card1: '张华Hua Zhang, Dean of School of Medical Technology, Guangdong Medical University, China. Section editor of Biomarker Research, Research field: tumor pathogenesis.',
    card2: '刘坤Dr. Kun Liu, Associated Researcher, Southern Medical University. My research interesting focuses on solving the key clinical issues by employing interdisciplinary techniques. “I think therefore I am.”',
    card3: '李凌Inspire originality, ignite innovation.',
    card4: '何肖龙Xiaolong He, principal investigator at the Microbiome Medicine Center, Zhujiang Hospital, Southern Medical University.Where there\'s a will, there\'s a way.',
    card5: '王译锋coder、enjoy making  AI products',
    card6: '方芷欣Second year in iGEM. Always chasing after thrilling knowledge about life. Hope everyone can enjoy this meaningful event and have fun with synthetic biology.',
    card7: '黎俊灏A creative students and adolescent，once iGEMer，always iGEMer！',
    card8: '詹可怡Remain passionate and embark on a journey across mountains and seas.',
    card9: '朱敏Where there\'s a will, there\'s a way.',
    card10: '吴奕翰Inperfection is beauty.',
    card11: '陈圣林"In every job that must be done, there is an element of fun. You find the fun, and snap! The job is a game." Marry Poppins',
    card12: '林裕豪My name is Yuhao Lin. I majored pathobiology at Southern Medical University in China. My hobbies are fitness, playing video games, making models and so on. My credo is “the road stretches on as long as you keep moving.”',
    card13: '段邑静萱Keep a single spark to start a prairie fire.',
    card14: '黄鹿鸣The world is my oyster, which I with sword will open.',
    card15: '李婉Regardless of the twists and turns， but at the end.',
    card16: '温文荣My name is Wen, a student majoring in psychiatry. To see the world, to unveil the mystery of brain, to feel, to find each other and draw closer. We are all explorers.',
    card17: '刘紫源Valar Dohaeris',
    card18: '赵攀Don’t worry,good things take time.',
    card19: '管文仪The meaning of life is not in the outward search, but in the inward construction.',
    card20: '张健华Consider things from every angle.',
    card21: '温润泽can it be a ＿？yes.',
    card22: '蔡国茁Better late than never .',
    card23: '杨莹蓥Nothing seek , nothing find.',
    card24: '李伟欢My name is Weihuan Li, my personality is quite extroverted. I love socializing people.',
    card25: '田菲儿My name is TianFeier.I\'m from Guangdong Medical University, majoring in applied psychology. My favorite quote is “To live is to think.”',
    card26: '黎嘉进I am Jiajin Li, an MPH student at the University of Hongkong, focusing on epidemiology and biostatistics.',
    card27: '王康Fortune favors the bold.',
    card28: '韩美彤Make magic happen.',
    card29: '蔡彦秋No need to hurry. No need to sparkle. No need to be anybody but oneself.',
    card30: '刘可Alis volat propriis.',
    card31: '陈莹莹Hi, I\'m Ying, your go-to sparkle for all things bright and informative!',
    card32: '赵兴安Shall we?',
    card33: '巫芷凌Hello this is Tina from The University of Singapore. The best way to predict the future is to create it!',
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
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card2"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card3"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card4"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x80"
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
                id="card5"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
              <Card
                id="card6"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card7"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card8"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
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
                id="card9"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card10"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card11"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card12"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
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
                id="card13"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card14"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card15"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card16"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <Card
                id="card17"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card18"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card19"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card20"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card21"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card22"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card23"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card24"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <Card
                id="card25"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card26"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card27"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card28"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <Card
                id="card29"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card30"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card31"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card32"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="SMU"
                description1="SMU Description."
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <Card
                id="card33"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card34"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card35"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card36"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
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
                id="card37"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Xingan Zhao"
                description1="Shall we?"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card38"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Yifeng Wang"
                description1="hahahahaahhahaha."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card39"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
                title1="Hermit Lee"
                description1="Genshin,launch!!"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card40"
                image1="https://placehold.co/600x80"
                image2="https://placehold.co/600x80"
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
