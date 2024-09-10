// src/components/Loading.tsx

import './Loading.css'; // 你可以定义样式

export function Loading() {
    return (
        <div className='row bg-rice_yellow loading-overlay'>
            {/* loading-spinner是动画组件 */}
                <div className="loading-spinner">
                    {/* 你可以添加一个加载动画的样式或使用现成的 spinner */}
                </div>
        </div>
        
      );

}
  
