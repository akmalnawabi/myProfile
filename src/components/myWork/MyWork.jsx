import React from 'react'
import './myWork.css'
import theme_pattern from '../../assets/images/theme_pattern.svg'
import mywork_data from '../../assets/images/mywork_data.js'
import arrow_icon from '../../assets/images/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                  <a href={work.href}>
                    <img key={index} src={work.w_img} />
                  </a>
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork