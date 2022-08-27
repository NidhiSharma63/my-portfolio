import React from 'react';
import wireFrame from '../assets/images/wireframe-1.jpg'

const Process = () => {
  return (
    <div className="container-4">
      <div className="process-wrapper">
        <div className="top-section">
          <p>Approach i generally used</p>
          <p>i like to use wireframes to so that i have a clear way what i have to do.</p>
        </div>
        <div className="bottom-section">
          <div className="image">
            <img src={wireFrame} alt="wireFrame"/>
          </div>
          <div className="image">
            <img src={wireFrame} alt="wireFrame" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process;