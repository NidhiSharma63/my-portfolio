import React from 'react'

const Skills = () => {

  function SkillIcons () {
    let SkillIconsWrap = document.createElement('div');
    SkillIconsWrap.className='left-section'

    for(let i=0; i<6;i++){
      SkillIconsWrap.innerHTML+=`
        <div class='skill-icon'>
        hdejhjkh
        </div>
      `
    }
    console.log(typeof SkillIconsWrap)
    // return SkillIconsWrap;
  }

  return (
    <div className='container-3'>
    <div className="right-shadow"></div>
      <div className="skill-wrapper">
        
        <div className="left-shadow"></div>
        <div className="left-section">
          <div className='skill-icon'></div>
          <div className='skill-icon'></div>
          <div className='skill-icon'></div>
          <div className='skill-icon'></div>
          <div className='skill-icon'></div>
          <div className='skill-icon'></div>
        </div>
        <div className="right-section">
          <div className="heading">
            Here are my<br/> skills
          </div>
          <div className="skills-info">
            my skills are JavaScript, HTML, CSS. I have learned frameworks like Bootstrap,Material UI, Tailwind and also i have learned git and figma.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;