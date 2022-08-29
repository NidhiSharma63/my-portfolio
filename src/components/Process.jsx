import React from 'react';
import wireFrame from '../assets/images/wfPC.jpg';
import wireFrame2 from '../assets/images/wfMB.jpg';


const Process = () => {
  return (
    <div className="container-4">
      <div className="process-wrapper">
        <div className="top-section">
          <p>Approach i generally used</p>
          <p>I like to use wireframes to make responsive websites. It helps me to get a clear idea of what I have to do.
          </p>
        </div>
        <div className="bottom-section">
          <div className="image">
            <img src={wireFrame} alt="wireFrame"/>
          </div>
          <div className="image">
            <img src={wireFrame2} alt="wireFrame" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;