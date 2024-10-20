import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../image/feacture-img/calculator.jpg';
import image2 from '../../image/feacture-img/to-do.jpg';
import image3 from '../../image/feacture-img/event-mangement.jpg';
import image4 from '../../image/feacture-img/schdule-managment.jpg';
import image5 from '../../image/feacture-img/exam-counter.jpg';
import image6 from '../../image/feacture-img/notes-maker.jpg';
import image7 from '../../image/feacture-img/ask question.jpg';
import image8 from '../../image/feacture-img/join-community.jpg';
import './Feature.css';

const sections = [
    {
        title1: "Stay on top of your Academics !",
        description1: "Track your grades effortlessly and see how every effort impacts your final score. Your academic progress is now at your fingertips.",
        buttonText1: "Start tracking",
        imageUrl1: image1,
        link1: '/tools/cgpa-tracker',

        title2: "To-Do List",
        description2: "Stay productive and organized with our To-Do List feature. Keep track of your tasks, set priorities, and check off completed items to ensure you stay on top of your academic and personal responsibilities",
        buttonText2: "Add a task",
        imageUrl2: image2,
        link2: '/tools/to-do-list',
        // Replace with the image path
    },
    {
        title1: "Upcoming Event Management",
        description1: "Never miss an important deadline again! Our Upcoming Event Management feature keeps you updated on assignments, exams, and extracurricular activities, ensuring you stay organized throughout the semester.",
        buttonText1: "Start making Event",
        imageUrl1: image3, // Replace with the image path
        link1: '/tools/upcomming-event',

        title2: "Schedule Management",
        description2: "Manage your day-to-day activities efficiently with our Schedule Management tool. Create custom timetables, set reminders, and allocate time for study, projects, and relaxation to maintain a balanced academic life.",
        buttonText2: "Add a Schedule",
        imageUrl2: image4, // Replace with the image path
        link2: '/tools/schedule',
    },
    {
        title1: "Exam Counter",
        description1: "Stay prepared and stress-free by tracking your exam dates with our Exam Counter. The countdown feature ensures you know exactly how much time you have left to prepare, helping you prioritize your study schedule.",
        buttonText1: "Add Exam ",
        imageUrl1: image5, // Replace with the image path
        link1: '/tools/exam-counter',

        title2: "Notes Organization",
        description2: "Organize your study materials effortlessly with the Notes Organization feature. Store, categorize, and access all your notes in one place to keep your study sessions structured and efficient.",
        buttonText2: "Add notes",
        imageUrl2: image6, // Replace with the image path
        link2: '/tools/notes-organisation',
    },
    {
        title1: "Ask Question",
        description1: "Got a question? Use the Ask Question feature to seek help from fellow students and experts. Whether it's academic doubts or advice on student life, get quick answers from the community.",
        buttonText1: "Try",
        imageUrl1: image7, // Replace with the image path
        link1: '/community/ask-question',

        title2: "Community Forum",
        description2: "Join our vibrant community of students to ask questions, share thoughts, and seek advice. The EDUCARE Community Forum is a collaborative space where learners can connect, discuss ideas, and support one another throughout their academic journey.",
        buttonText2: "Join a Chat",
        imageUrl2: image8, // Replace with the image path
        link2: '/community/join-our-community',

    }

    // Add more sections as needed
];


const Section = ({ title1, description1, buttonText1, imageUrl1, link1, title2, description2, buttonText2, imageUrl2, link2 }) => (

    <div className='container'>
        <div className='section left'>
            <div className="image-content">
                <img src={imageUrl1} alt={title1} />
            </div>
            <div className="text-content">
                <h1>{title1}</h1>
                <p>{description1}</p>
                <Link to={link1}>
                    <button className="cta-button">{buttonText1}</button>
                </Link>
            </div>

        </div>

        <div className='section'>
            <div className="image-content">
                <img src={imageUrl2} alt={title2} />
            </div>

            <div className="text-content">
                <h1>{title2}</h1>
                <p>{description2}</p>
                <Link to={link2}>
                    <button className="cta-button">{buttonText2}</button>
                </Link>
            </div>



        </div>
    </div>
);


const Feature = () => {
    return (
        <div className="homepage">
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title1={section.title1}
                    description1={section.description1}
                    buttonText1={section.buttonText1}
                    imageUrl1={section.imageUrl1}
                    link1={section.link1}
                    title2={section.title2}
                    description2={section.description2}
                    buttonText2={section.buttonText2}
                    imageUrl2={section.imageUrl2}
                    link2={section.link2}
                />
            ))}
        </div>
    );
};



export default Feature;