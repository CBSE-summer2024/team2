import React from 'react';

import '../../main.css';
import { Link } from 'react-router-dom';
import Slider from '../Slider/slider';
import Footer from '../Footer/footer';

function Homepage() {
    return (
        <>
            <Slider></Slider>
            <div className="home">
                <div className="H-content">
                    <div className='header-text' >
                        <h1>أهلا بكم في موقع التجارة الإلكترونية الأول في فلسطين </h1>
                    </div >

                    <div className='header-text' >
                        <h2 className='color'>  اكتشف عالمنا الجديد وابدأ رحلتك الآن مع موقعنا </h2>
                    </div >
                    <div className='header-text' >
                        <div className="contaner-button">
                            <Link to="/ProductList" className="button">عرض المنتجات</Link>
                        </div>
                    </div >
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Homepage;
