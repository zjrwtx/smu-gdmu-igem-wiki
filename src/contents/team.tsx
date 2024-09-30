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
      </div>
      {isHovered ? (  // 根据 isHovered 状态控制内容渲染
          <div className="card-body mt-5">
            <h5 className="card-title">{description1}</h5>
          </div>
        ) : (
          <div className="card-body mt-5">
            <h5 className="card-title">{title1}</h5>
          </div>
        )}
    </div>
  );
};

const StickyImageContainer: React.FC<{ image: string ,words: string ,names: string}> = ({ image,words,names }) => {
  return (
    <div className="sticky-container" >
      <h3 className='sticky-title center-text'>⭐{names}⭐</h3>
      <img src={image} alt="Sticky" className='sticky-img' />
      <p className='sticky-font sticky-description indent'>{words}</p>
    </div>
  );
};


// 下方定义重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
export function Team() {
  const [hoveredCardId, setHoveredCardId] = useState<"card1" | "card2" | "card3" | "card4" | "card5" | "card6" | "card7" | "card8" | "card9" | "card10" | "card11" | "card12" | "card13" | "card14" | "card15" | "card16" | "card17" | "card18" | "card19" | "card20" | "card21" | "card22" | "card23" | "card24" | "card25" | "card26" | "card27" | "card28" | "card29" | "card30" | "card31" | "card32" | "card33" | "card34" | "card35" | null>(null);


  // 定义每个卡片的图像，当悬浮时左侧显示相应的图像
  // 下方的定义重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  const images = {
    card1: 'https://static.igem.wiki/teams/5378/team-member/0101-1.webp',
    card2: 'https://static.igem.wiki/teams/5378/team-member/0201-1.webp',
    card3: 'https://static.igem.wiki/teams/5378/team-member/0301-1.webp',
    card4: 'https://static.igem.wiki/teams/5378/team-member/0401-1.webp',
    card5: 'https://static.igem.wiki/teams/5378/team-member/0501-1.webp',
    card6: 'https://static.igem.wiki/teams/5378/team-member/0601-1.webp',
    card7: 'https://static.igem.wiki/teams/5378/team-member/0701-1.webp',
    card8: 'https://static.igem.wiki/teams/5378/team-member/0801-1.webp',
    card9: 'https://static.igem.wiki/teams/5378/team-member/0901-1.webp',
    card10: 'https://static.igem.wiki/teams/5378/team-member/1001-1.webp',
    card11: 'https://static.igem.wiki/teams/5378/team-member/1101-1.webp',
    card12: 'https://static.igem.wiki/teams/5378/team-member/1201-1.webp',
    card13: 'https://static.igem.wiki/teams/5378/team-member/1301-1.webp',
    card14: 'https://static.igem.wiki/teams/5378/team-member/1401-1.webp',
    card15: 'https://static.igem.wiki/teams/5378/team-member/1501-1.webp',
    card16: 'https://static.igem.wiki/teams/5378/team-member/1601-1.webp',
    card17: 'https://static.igem.wiki/teams/5378/team-member/1701-1.webp',
    card18: 'https://static.igem.wiki/teams/5378/team-member/1801-1.webp',
    card19: 'https://static.igem.wiki/teams/5378/team-member/1901-1.webp',
    card20: 'https://static.igem.wiki/teams/5378/team-member/2001-1.webp',
    card21: 'https://static.igem.wiki/teams/5378/team-member/2101-1.webp',
    card22: 'https://static.igem.wiki/teams/5378/team-member/2201-1.webp',
    card23: 'https://static.igem.wiki/teams/5378/team-member/2301-1.webp',
    card24: 'https://static.igem.wiki/teams/5378/team-member/2401-1.webp',
    card25: 'https://static.igem.wiki/teams/5378/team-member/2501-1.webp',
    card26: 'https://static.igem.wiki/teams/5378/team-member/2601-1.webp',
    card27: 'https://static.igem.wiki/teams/5378/team-member/2701-1.webp',
    card28: 'https://static.igem.wiki/teams/5378/team-member/2801-1.webp',
    card29: 'https://static.igem.wiki/teams/5378/team-member/2901-1.webp',
    card30: 'https://static.igem.wiki/teams/5378/team-member/3001-1.webp',
    card31: 'https://static.igem.wiki/teams/5378/team-member/3101-1.webp',
    card32: 'https://static.igem.wiki/teams/5378/team-member/3201.webp',
    card33: 'https://static.igem.wiki/teams/5378/team-member/3301-1.webp',
    card34: 'https://static.igem.wiki/teams/5378/team-member/3401.webp',
    card35: 'https://placehold.co/600x800',
    card36: 'https://placehold.co/600x800',


  };

  const words = {
 
    card1: 'Remain passionate and embark on a journey across mountains and seas.',
    card2: 'Where there\'s a will, there\'s a way.',
    card3: 'Inperfection is beauty.',
    card4: '"In every job that must be done, there is an element of fun. You find the fun, and snap! The job is a game." Marry Poppins',
    card5: 'My name is Yuhao Lin. I majored pathobiology at Southern Medical University in China. My hobbies are fitness, playing video games, making models and so on. My credo is “the road stretches on as long as you keep moving.”',
    card6: 'Xiaolong He, principal investigator at the Microbiome Medicine Center, Zhujiang Hospital, Southern Medical University.Where there\'s a will, there\'s a way.',
    card7: 'Keep a single spark to start a prairie fire.',
    card8: 'The world is my oyster, which I with sword will open.',
    card9: 'Regardless of the twists and turn, but at the end.',
    card10: 'My name is Wen, a student majoring in psychiatry. To see the world, to unveil the mystery of brain, to feel, to find each other and draw closer. We are all explorers.',
    card11: 'Valar Dohaeris',
    card12: 'Don\'t worry,good things take time.',
    card13: 'The meaning of life is not in the outward search, but in the inward construction.',
    card14: 'Consider things from every angle.',
    card15: 'can it be a _?yes.',
    card16:'Hua Zhang, Dean of School of Medical Technology, Guangdong Medical University, China. Section editor of Biomarker Research, Research field: tumor pathogenesis.',
    card17: 'Better late than never .',
    card18: 'Nothing seek , nothing find.',
    card19: 'My name is Weihuan Li, my personality is quite extroverted. I love socializing people.',
    card20:'coder、enjoy making  AI products',
    card21: 'My name is TianFeier.I\'m from Guangdong Medical University, majoring in applied psychology. My favorite quote is “To live is to think.”',
    card22:'Second year in iGEM. Always chasing after thrilling knowledge about life. Hope everyone can enjoy this meaningful event and have fun with synthetic biology.',
    card23:'Dr. Kun Liu, Associated Researcher, Southern Medical University. My research interesting focuses on solving the key clinical issues by employing interdisciplinary techniques. “I think therefore I am.”',
    card24:'Inspire originality, ignite innovation.',
    card25: 'I am Jiajin Li, an MPH student at the University of Hongkong, focusing on epidemiology and biostatistics.',
    card26: 'Fortune favors the bold.',
    card27: 'Make magic happen.',
    card28: 'No need to hurry. No need to sparkle. No need to be anybody but oneself.',
    card29:'A creative students and adolescent,once iGEMer,always iGEMer!',
    card30: 'Alis volat propriis.',
    card31: 'Hi, I\'m Ying, your go-to sparkle for all things bright and informative!',
    card32: 'First year in iGem , once iGEMer , always iGEMer !',
    card33: 'Hello this is Tina from The University of Singapore. The best way to predict the future is to create it!',
    card34: 'Jian Sun, representative of the 14th National People\'s Congress of China, serving as the president, second-level professor and chief physician of Nanfang Hospital, Southern Medical University, Guangzhou. His research interests focus on the pathogenesis, diagnosis and treatment of chronic hepatitis B and other metabolic associtaed liver diseases.',
    card35: 'aminuosi',
    card36: 'aminuosi',

  };

  const names = {
    card1:'Keyi Zhan',
    card2:'Ming Zhu',
    card3:'Yihan Wu',
    card4:'Shenglin Chen',
    card5:'Yuhao lin',
    card6:'Xiaolong He',
    card7:'Jingxuan Duanyi',
    card8:'Luming Huang',
    card9:'Wan Li',
    card10:'Wenrong Wen',
    card11:'Ziyuan Liu',
    card12:'Pan Zhao',
    card13:'Wenyi Guan',
    card14:'Jianhua Zhang',
    card15:'Runze Wen',
    card16:'Hua Zhang',
    card17:'Guozhuo Cai',
    card18:'Yingying Yang',
    card19:'Weihuan Li',
    card20:'Yifeng Wang',
    card21:'Feier Tian',
    card22:'Zhixin Fang',
    card23:'Kun Liu',
    card24:'Ling Li',
    card25:'Jiajin Li',
    card26:'Kang Wang',
    card27:'Meitong Han',
    card28:'Yanqiu Cai',
    card29:'Junhao Li',
    card30:'Ke Liu',
    card31:'Yingying Chen',
    card32:'Xingan Zhao',
    card33:'Zhiling Wu',
    card34:'Jian Sun',
    card35:'Qingfeng Zhu',
    card36: 'Sheng Shen',
  }

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
          <img 
                src="https://static.igem.wiki/teams/5378/header/header-bar.webp"
                alt="safety header"
                className="header-bar"
              />
        </h1>
      </div>

      <div className="row bg-rice_yellow">
        {/* 左侧sticky容器 */}
        <div className="col-3">
          {/* 下方设置默认显示图像 */}
          <StickyImageContainer 
          image={hoveredCardId ? images[hoveredCardId] : 'https://placehold.co/600x800'} 
          words={hoveredCardId ? words[hoveredCardId] : "Glad to introduce our team to you!"} 
          names={hoveredCardId ? names[hoveredCardId] : "Our crew"}
          />
        </div>

        {/* 卡片区域 */}
        <div className="col-8">

          
          <div className='vh20'></div>
          <div className='row justify-content-center h1'>Student Leader</div>
          <div className="card-body">
            <div className="col-3">
            <Card
                id="card22"
                image1="https://static.igem.wiki/teams/5378/team-member/2201-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2202-1.webp"
                title1="Zhixin Fang"
                description1="STUDENT LEADER"
                onHover={handleCardHover}
              />
            </div>

          </div>

          <div className='row justify-content-center h1'>PRIMARY & Secondary PIs</div>
          <div className='row'>
            <div className='card-body'>
            <div className="col-3">
              <Card
                id="card34"
                image1="https://static.igem.wiki/teams/5378/team-member/3401.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/3402.webp"
                title1="Jian Sun"
                description1="PRIMARY PIs"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
            <Card
                id="card24"
                image1="https://static.igem.wiki/teams/5378/team-member/2401-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2402-1.webp"
                title1="Ling Li"
                description1="PRIMARY PIs"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
            <Card
                id="card16"
                image1="https://static.igem.wiki/teams/5378/team-member/1601-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1602-1.webp"
                title1="Hua Zhang"
                description1="Secondary PIs"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
            <Card
                id="card6"
                image1="https://static.igem.wiki/teams/5378/team-member/0601-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0602-1.webp"
                title1="Xiaolong He"
                description1="Secondary PIs"
                onHover={handleCardHover}
              />
            </div>

            </div>
          

          </div>

          <div className='row justify-content-center h1'>Instructors</div>
          <div className="row">
            <div className='card-body'>
            <div className="col-3 margin-20">
            <Card
                id="card35"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Qingfeng Zhu"
                description1="Instructors"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3 margin-20">
            <Card
                id="card36"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Sheng Shen"
                description1="Instructors"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3 margin-20">
            <Card
                id="card23"
                image1="https://static.igem.wiki/teams/5378/team-member/2301-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2302-1.webp"
                title1="Kun Liu"
                description1="Instructors"
                onHover={handleCardHover}
              />
            </div>
            </div>
          </div>

          <div className='row justify-content-center h1'>Advisor</div>
          <div className="row">
            <div className='card-body'>
            <div className="col-3 margin-20">
            <Card
                id="card10"
                image1="https://static.igem.wiki/teams/5378/team-member/1001-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1002-1.webp"
                title1="Wenrong Wen"
                description1="Advisors"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3 margin-20">       
            <Card
                id="card5"
                image1="https://static.igem.wiki/teams/5378/team-member/0501-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0502-1.webp"
                title1="Yuhao Lin"
                description1="Advisors"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3 margin-20">
            <Card
                id="card31"
                image1="https://static.igem.wiki/teams/5378/team-member/3101-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/3102-1.webp"
                title1="Yingying Chen"
                description1="Advisors"
                onHover={handleCardHover}
              />
            </div>
            </div>
          </div>

          <div className="row">
            <div className='card-body'>
            <div className="col-3 margin-20">
              <Card
                id="card25"
                image1="https://static.igem.wiki/teams/5378/team-member/2501-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2502-1.webp"
                title1="Jiajin Li"
                description1="Advisors"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3 margin-20">
            <Card
                id="card33"
                image1="https://static.igem.wiki/teams/5378/team-member/3301-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/3302-1.webp"
                title1="ZhiLing Wu"
                description1="Advisors"
                onHover={handleCardHover}
              />


            </div>
            </div>
          </div>

          <div className='row justify-content-center h1'>Student Member</div>

          <div className="row">
            <div className="col-3">
            <Card
                id="card29"
                image1="https://static.igem.wiki/teams/5378/team-member/2901-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2902-1.webp"
                title1="Junhao Li"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>

            <div className="col-3">
            <Card
                id="card1"
                image1="https://static.igem.wiki/teams/5378/team-member/0101-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0102-1.webp"
                title1="Keyi Zhan"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card7"
                image1="https://static.igem.wiki/teams/5378/team-member/0701-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0702-1.webp"
                title1="Yijingxuan Duan"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card8"
                image1="https://static.igem.wiki/teams/5378/team-member/0801-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0802-1.webp"
                title1="Luming Huang"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card13"
                image1="https://static.igem.wiki/teams/5378/team-member/1301-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1302-1.webp"
                title1="Wenyi Guan"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card14"
                image1="https://static.igem.wiki/teams/5378/team-member/1401-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1402-1.webp"
                title1="Jianhua Zhang"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card15"
                image1="https://static.igem.wiki/teams/5378/team-member/1501-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1502-1.webp"
                title1="Runze Wen"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              
            <Card
                id="card2"
                image1="https://static.igem.wiki/teams/5378/team-member/0201-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0202-1.webp"
                title1="Ming Zhu"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <Card
                id="card17"
                image1="https://static.igem.wiki/teams/5378/team-member/1701-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1702-1.webp"
                title1="Guozhuo Cai"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card18"
                image1="https://static.igem.wiki/teams/5378/team-member/1801-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1802-1.webp"
                title1="Yingying Yang"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card19"
                image1="https://static.igem.wiki/teams/5378/team-member/1901-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1902-1.webp"
                title1="Weihuan Li"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card20"
                image1="https://static.igem.wiki/teams/5378/team-member/2001-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2002-1.webp"
                title1="Yifeng Wang"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card21"
                image1="https://static.igem.wiki/teams/5378/team-member/2101-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2102-1.webp"
                title1="Feier Tian"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
            <Card
                id="card9"
                image1="https://static.igem.wiki/teams/5378/team-member/0901-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0902-1.webp"
                title1="Wan Li"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              
            <Card
                id="card3"
                image1="https://static.igem.wiki/teams/5378/team-member/0301-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0302-1.webp"
                title1="Yihan Wu"
                description1="Students"
                onHover={handleCardHover}
              />

            </div>
            <div className="col-3">
            <Card
                id="card4"
                image1="https://static.igem.wiki/teams/5378/team-member/0401-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/0402-1.webp"
                title1="Shenglin Chen"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            




            
            <div className="col-3">
              <Card
                id="card26"
                image1="https://static.igem.wiki/teams/5378/team-member/2601-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2602-1.webp"
                title1="Kang Wang"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card27"
                image1="https://static.igem.wiki/teams/5378/team-member/2701-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2702-1.webp"
                title1="Meitong Han"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card28"
                image1="https://static.igem.wiki/teams/5378/team-member/2801-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/2802-1.webp"
                title1="Yanqiu Cai"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card32"
                image1="https://static.igem.wiki/teams/5378/team-member/3201.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/3202.webp"
                title1="Xingan Zhao"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
            <Card
                id="card12"
                image1="https://static.igem.wiki/teams/5378/team-member/1201-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1202-1.webp"
                title1="Pan Zhao"
                description1="Students"
                onHover={handleCardHover}
              />
            

            </div>
            <div className="col-3">
              <Card
                id="card30"
                image1="https://static.igem.wiki/teams/5378/team-member/3001-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/3002-1.webp"
                title1="Ke Liu"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
            <Card
                id="card11"
                image1="https://static.igem.wiki/teams/5378/team-member/1101-1.webp"
                image2="https://static.igem.wiki/teams/5378/team-member/1102-1.webp"
                title1="Ziyuan Liu"
                description1="Students"
                onHover={handleCardHover}
              />
            </div>
            
          </div>

          <div className="row">
          <div className="col-3">
              
            </div>
            <div className="col-3">
              <Card
                id="card36"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Example"
                description1="Description."
                onHover={handleCardHover}
              />
            </div>
          </div>

          <div className='row justify-content-center h1'>External Member</div>
          <div className="row">
            <div className="col-3">
              <Card
                id="card37"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Example"
                description1="Description."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card38"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Example"
                description1="Description."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card39"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Example"
                description1="Description."
                onHover={handleCardHover}
              />
            </div>
            <div className="col-3">
              <Card
                id="card40"
                image1="https://placehold.co/600x800"
                image2="https://placehold.co/600x800"
                title1="Example"
                description1="Description."
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
