import React from 'react';
import { Fade } from 'react-reveal';
import '../../main.css';
import { Link } from 'react-router-dom'; 
import Slider from '../Slider/slider'
function Homepage() {
    return (
    <>
    <Slider></Slider>
    <div className="home">
            <div className="H-content">
                <Fade top>
                    <h1>أهلا بكم في موقع التجارة الإلكترونية الأول في فلسطين </h1>
                </Fade>
                
                <Fade bottom delay={500}>
                    <h2 className='color'>  اكتشف عالمنا الجديد وابدأ رحلتك الآن مع موقعنا </h2>
                </Fade>
                <Fade bottom delay={1000}>
                    <div className="contaner-button">
                        <Link to="/ProductList" className="button">عرض المنتجات</Link>
                    </div>
                </Fade>
            </div>
        </div>
        </>
    );
}

export default Homepage;
