import React from 'react';
import './About.css';
import image7 from '../../image/site demo img/cg-calculator-phoneview.png';
import image6 from '../../image/site demo img/main page.png';
import image2 from '../../image/site demo img/to-do-list.png';
import image1 from '../../image/site demo img/adfasdf.png';
import image4 from '../../image/site demo img/counter.png';


function About() {
    return (
        <>
            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                    <div className="responsive-container-block leftSide">
                        <p className="text-blk heading">
                            Meet Our Creative Team
                        </p>
                        <p className="text-blk subHeading">
                            <span> EDUCARE </span> is a comprehensive online platform designed to support students in managing and optimizing their academic journey. With features like a future CG manager to track academic performance, upcoming event management to stay organized, schedule management for better time allocation, an exam countdown to help you prepare efficiently, and a vibrant community space to ask questions and share insights, EDUCARE is your go-to resource for academic success and collaboration.  
                        </p>
                    </div>
                    <div className="responsive-container-block rightSide">
                        <img className="number1img" src={image4} alt='image1' />
                        <img className="number2img" src={image2} alt='image2' />
                        <img className="number3img" src={image7} alt='image3' />
                        <img className="number5img" src={image1} alt='image4' />
                        <iframe title='youtube-link' allowFullScreen="allowFullScreen" className="number4vid" poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png" src="https://www.youtube.com/embed/svg%3E?">
                        </iframe>
                        <img className="number7img" src={image7} alt='image5' />
                        <img className="number6img" src={image6} alt='image6' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About