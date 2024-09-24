import './wave.css'; // 引入样式

export function WaveAnimation() {
  return (
    <div className="transition">
      <div>
        <svg
          className="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="-2" className='wave1' fill="rgba(178,66,65,0.7)" />
            <use href="#gentle-wave" x="48" y="-1" className='wave2' fill="rgba(232,169,166,0.5)" />
            <use href="#gentle-wave" x="48" y="0" className='wave3' fill="rgba(205,68,50,0.3)" />
            <use href="#gentle-wave" x="48" y="2" className='wave6' fill="rgba(245, 245, 220,0.3)" />
            <use href="#gentle-wave" x="48" y="1" className='wave4' fill="rgba(135,31,35,1)" />
            <use href="#gentle-wave" x="48" y="2" className='wave5' fill="rgba(114, 47, 55, 1)" />
            
          </g>
        </svg>
      </div>
    </div>
  );
};
