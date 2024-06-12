import React, {useRef} from 'react';
import { Image } from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';
import './home.scss';
import cover from '../assets/cover.png';
import logo from '../assets/logo.png';
import apt1 from '../assets/apt1.png';
import apt2 from '../assets/apt2.jpg';
import bedroom from '../assets/bedroom.jpg';
import bathroom from '../assets/bathroom.jpg';
import shop from '../assets/shop.png';
import apt3 from '../assets/apt3.webp';
import apt4 from '../assets/apt4.jpg';
import apt5 from '../assets/apt5.png';

export const Home = () => {
    const ref = useRef(null);

    return (
        <div ref={ref} >
            <div className="parallax-container">
                <div className="parallax-layer parallax-layer-1">
                    <div className="cover-container">
                        <img className="cover" src={cover} alt="cover" />
                    </div>
                   
                </div>
                <div className="parallax-layer parallax-layer-2">
                    <span className='hero-text'>
                        <div className='hero-text-title'>
                            Reema Smith Studios
                        </div>
                        <div className='hero-text-subtitle'>
                        Our online interior design consulting service is available to everyone globally, at the convenience of your desk.
                        <div className='phone'>
                            (617) 704-2289
                        </div>   
                        </div>
                    </span>
                </div>
                <div className="parallax-layer parallax-layer-3">
                    <img className="logo" src={logo} alt="logo" />
                    <span className='actions'>
                        <a href="mailto:urbanroofs@gmail.com"><MailFilled /></a>
                    </span>
                    
                </div>
                <div className="parallax-layer parallax-layer-4">
                    <div className='title'>
                        Reema Smith Studios
                    </div>
                    <div className='flex-container'>
                        <div className='flex-item'>
                            <div className="flex-item-image">
                                <img className="apt1" src={apt1} alt="apt1" />
                            </div>
                            <div className='flex-item-title'>
                                My Goal
                            </div>
                            <div className='flex-item-text'>
                                Interior Design is about creating pleasant, safe and comfortable space for each individual and their families. It is also a reflection of your style, beliefs and personality. My goal is to help them achieve it.  
                            </div>
                        </div>
                        <div className='flex-item'>
                            <div className="flex-item-image">
                                <img className="bedroom" src={bedroom} alt="bedroom" />
                            </div>
                            <div className='flex-item-title'>
                                Online Design Consultation Service
                            </div>
                            <div className='flex-item-text'>
                            In today's fast-paced world, I understand the need for convenience and accessibility. That's why I'm excited to offer online consultation services, bringing my expertise and insights directly to you, wherever you may be. Whether you're embarking on a new project, seeking design advice, or simply looking to refresh your space, I'm here to help you every step of the way.                             </div>
                        </div>
                        <div className='flex-item'>
                            <div className="flex-item-image">
                                <img className=" apt1" src={apt1} alt="apt1" />
                            </div>
                            <div className='flex-item-title'>
                                Online Services
                            </div>
                            <div className='flex-item-text'>
                                <ul>
                                    <li>
                                        Please feel free to schedule a 30-minute consultation to explore the services I can offer.
                                    </li>
                                    <li>
                                        When you're ready to begin your design journey, each 30-minute meeting will be charged at USD 60 (covering discussion for one room at a time, with a size limit of 150 sq ft or smaller)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='gallery'>
                      <Image width={'25vw'} src={bathroom} />
                      <Image width={'25vw'} src={shop} />
                      <Image width={'25vw'} src={apt2} />
                      <Image width={'25vw'} src={apt3} />
                      <Image width={'33vw'} src={apt4} />
                      <Image width={'33vw'} src={apt1} />
                      <Image width={'33vw'} src={apt5} />
                    </div>
                    <div className='contact-container'>
                        <div className='title'>
                            Interior Design Consultation
                        </div>
                        <p>
                            Contact us to book an appointment for your free consultation. We will discuss your project, your goals, and your budget. We will also discuss the design process and how we can help you achieve your dream space. We look forward to working with you!
                        </p>
                        <h3><MailFilled /><a href="mailto:urbanroofs@gmail.com">urbanroofs@gmail.com</a></h3>
                        <h3><PhoneFilled /> (617) 704-2289</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
