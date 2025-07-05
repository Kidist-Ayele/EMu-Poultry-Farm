import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.avif'
import program_icon_1 from '../../assets/program-1-icon.png'
import program_icon_2 from '../../assets/program-2-icon.png' 
import program_icon_3 from '../../assets/program-3-icon.png'   


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt=""/>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Eggs</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=""/>
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Chickens</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt=""/>
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Chicken Meat</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
