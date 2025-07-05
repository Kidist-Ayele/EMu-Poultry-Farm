import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn'  onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Lishan Bekele</h3>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            I've been buying chickens from EMU Poultry 
                            Farm for over a year now, and I am always impressed by the freshness and cleanliness. 
                            You can truly taste the difference! It's great knowing I am supporting a farm that 
                            cares about quality and ethical farming.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Kirubel Lemma</h3>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            As a restaurant owner, I need suppliers I can trust. 
                            EMU Poultry Farm delivers consistent, high-quality poultry 
                            that meets our hygiene standards every time. Their team is reliable, 
                            friendly, and professional.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Elsa Besufkad</h3>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            EMU Poultry Farm has made my poultry sales 
                            easier and better. Customers love the quality, 
                            and I appreciate how organized and punctual they 
                            are with deliveries. It is a partnership I truly value.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Ayele Mulat</h3>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                        <p>
                            It is inspiring to see a local farm doing things the 
                            right way. EMU Poultry Farm supports food security in our 
                            area and provides jobs for many families. They are more than 
                            a farm — they are a part of our community.</p>
                    </div>
                </li>
                
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
