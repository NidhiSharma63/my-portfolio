import React from 'react';
import { projectData }  from '../data'

const Work = () => {
  return (
    <div className='container-5' id='Work'>
      <div className="work-wrapper">
        <div className="top-section">
          <p>My awesome projects</p>
          <p>here are some of my projects that i have build</p>
        </div>
        <div className="bottom-section">
          {
            projectData.map((item,index)=>(
              <div className='project' key={index}>
                <div className="project-images">
                  <img src={item.image1} alt="project" />
                  <img src={item.image2} alt="project" className='project-img2'/>
                </div>
                <div className="project-info">
                  <p>{item.projectName}</p>
                  <p>{item.projectDesc}</p>
                  <div className="project-buttons">
                    <div className="button">
                      <a target='blank' href={item.live}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        live
                      </a>
                    </div>
                    <div className="button">
                      <a target='blank' href={item.github}>
                        <i className="fa-brands fa-github"></i>
                        source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Work;