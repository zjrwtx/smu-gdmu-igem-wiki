import { Inspirations, InspirationLink } from "../components";

export function Description() {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
    { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
    { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
    { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
    { year: 2020, teamName: "St_Andrews", pageName: "Description" },
    { year: 2020, teamName: "MIT", pageName: "Description" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>利用基因工程细菌改善肝性脑病（Hepatic Encephalopathy, HE）</h4>
            <p>初步版本描述</p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>背景</h2>
          <hr />
          <ul>
            <li>HE是由肝功能不全引起的脑功能障碍。</li>
            <li>全球约有1.12亿代偿性肝硬化患者，其中40%-60%会发展成肝性脑病。</li>
          </ul>
          <h2>HE的流行病学和病因</h2>
          <hr />
          <ul>
            <li>HE患者体内氨水平异常。</li>
            <li>肝硬化患者体内过量的氨能穿过血脑屏障，导致神经功能障碍和认知能力下降。</li>
          </ul>
          <h2>当前HE的药物治疗</h2>
          <hr />
          <ul>
            <li>利福昔明（Rifaximin）：一种肠道吸收的广谱抗菌药物，对肠道细菌有活性，低风险诱导细菌耐药。</li>
            <li>乳果糖（Lactulose）：非吸收性药物，通过通便作用和改变结肠pH来减少氨吸收，但有胃肠副作用，患者依从性差。</li>
            <li>LOLA/支链氨基酸补充剂：减少假神经递质的产生。</li>
            <li>肠道微生物：显著改善HE的发展、生活质量和血浆氨浓度，但对死亡率无显著影响。</li>
          </ul>
          <h2>基因工程微生物（GEM）与HE的先前研究</h2>
          <hr />
          <ul>
            <li>氨主要在肠道作为蛋白质消化、氨基酸脱氨和细菌脲酶活动的最终产物产生。</li>
            <li>研究中的GEM使用Pfnrs作为启动子，厌氧条件作为激活条件，删除了编码精氨酸抑制因子ArgR的基因，整合了argA215基因，将肠道中的氨转化为L-精氨酸。</li>
          </ul>
          <h2>技术程序（新设计）</h2>
          <hr />
          <p>底盘：胆酸感应大肠杆菌Nissle 1917。</p>
          <p>模块（3部分）：感应/代谢/安全。</p>
          <h2>设计</h2>
          <hr />
          <h3>感应模块</h3>
          <p>肝硬化患者肝脏产生足够胆酸的能力受损，利用胆酸诱导启动子和NOT门设计感应模块。</p>
          <h3>代谢模块</h3>
          <ul>
            <li>氨摄取：使用高亲和力的Amt2和Rh蛋白促进NH3的双向流动。</li>
            <li>氨代谢：从氨氧化古菌中获得灵感，尝试将GS-GOGAT循环引入大肠杆菌，使用氨产生能量和氨基酸。</li>
            <li>实验验证：通过西方印迹法检测大肠杆菌中GS和GOGAT的表达，酚光度法测试培养基中氨的变化。</li>
          </ul>
          <h3>安全模块</h3>
          <p>使用厌氧启动子和可编程CAP表达系统，确保工程细菌只在肠道厌氧环境中发挥作用。</p>
          <h2>预期实验结果（结论）</h2>
          <hr />
          <ul>
            <li>开发出一种新型基因改造细菌E.Coli. BW25113，使用胆酸作为特定生物标记物，响应胆酸感应信号，触发增强的氨代谢。</li>
            <li>通过基因改造细菌E.Coli. BW25113的质粒整合，将氨转化为L-天冬氨酸和L-鸟氨酸，有效转化肠道中的氨，延缓肝性脑病的发作。</li>
            <li>通过体内实验探索基因改造细菌干预对氨代谢的影响，为肝性脑病的临床治疗提供新的研究思路。</li>
            <li>验证重组大肠杆菌E.Coli. BW25113与SYNB1020相比，在小鼠实验中产生较少的内毒素，对氨转化的响应速度更快，代谢过程更高，体内L-天冬氨酸和L-鸟氨酸水平升高，使其成为一种具有更高生物安全性的新型基因改造细菌。该实验设计遵循人道和伦理原则，预期结果是前所未有的、创新的和新颖的。</li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Some advice</h2>
          <hr />
          <p>
            We encourage you to put up a lot of information and content on your
            wiki, but we also encourage you to include summaries as much as
            possible. If you think of the sections in your project description
            as the sections in a publication, you should try to be concise,
            accurate, and unambiguous in your achievements. Your Project
            Description should include more information than your project
            abstract.
          </p>
        </div>
        <div className="col-lg-4">
          <h2>References</h2>
          <hr />
          <p>
            iGEM teams are encouraged to record references you use during the
            course of your research. They should be posted somewhere on your
            wiki so that judges and other visitors can see how you thought about
            your project and what works inspired you.
          </p>
        </div>
      </div>
    </>
  );
}
