import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const [mobile, setMobile] = useState(false);
    const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
    const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
    const auth = localStorage.getItem('user');
    const location = useLocation();
    const navigate = useNavigate();

    const toggleToolsDropdown = () => {
        setIsToolsDropdownOpen(!isToolsDropdownOpen);
        setIsCommunityDropdownOpen(false);
    };

    const toggleCommunityDropdown = () => {
        setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
        setIsToolsDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        // Close dropdowns if clicking outside
        if (
            event.target.closest('.dropdown') === null // Not inside any dropdown
        ) {
            setIsToolsDropdownOpen(false);
            setIsCommunityDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Add click listener when dropdown is open
        if (isToolsDropdownOpen || isCommunityDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isToolsDropdownOpen, isCommunityDropdownOpen]);

    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <nav className="navbar flex flex-sb">
            <div className="logo-wrapper">
                <h1 className="logo"><i className="fa-solid fa-graduation-cap"></i> Educare</h1>
            </div>

            <ul className={mobile ? "nav-item-list-toggle text-white" : "nav-item-list flex text-white"}>
                <Link to='/' className={` ${location.pathname === '/' ? 'text-white fs-22 fw-6 ls-1' : 'text-black'} `}>Home</Link>
                <Link to='/about-us' className={` ${location.pathname === '/about-us' ? 'text-white fs-22 fw-6 ls-1' : 'text-black'} `}>About Us</Link>

                <div className="dropdown">
                    <Link to='#' onClick={toggleToolsDropdown} className={` ${location.pathname === '/tools' ? 'text-white fs-22 fw-6 ls-1' : 'text-black'} `} >
                        Tools <i className={`${isToolsDropdownOpen ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'} `}></i>
                    </Link>
                    {isToolsDropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to='/tools/cgpa-tracker' className={` ${location.pathname === '/tools/cgpa-tracker' ? 'bg-white' : ''} `}>CGPA Tracker</Link>
                            <Link to='/tools/to-do-list' className={` ${location.pathname === '/tools/to-do-list' ? 'bg-white' : ''} `}>To-Do List</Link>
                            <Link to='/tools/upcomming-event' className={` ${location.pathname === '/tools/upcomming-event' ? 'bg-white' : ''} `}>Upcoming Event</Link>
                            <Link to='/tools/schedule' className={` ${location.pathname === '/tools/schedule' ? 'bg-white' : ''} `}>Schedule</Link>
                            <Link to='/tools/exam-counter' className={` ${location.pathname === '/tools/exam-counter' ? 'bg-white' : ''} `}>Exam CountDown</Link>
                            <Link to='/tools/notes-organisation' className={` ${location.pathname === '/tools/notes-organisation' ? 'bg-white' : ''} `}>Notes Organisation</Link>
                        </div>
                    )}
                </div>

                <div className="dropdown">
                    <Link to='#' onClick={toggleCommunityDropdown} className={` ${location.pathname === '/pages' ? 'text-white fs-22 fw-6 ls-1' : 'text-black'} `}>
                        Community <i className={`${isCommunityDropdownOpen ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'} `}></i>
                    </Link>
                    {isCommunityDropdownOpen && (
                        <div className="dropdown-menu">
                            <Link to='/community/join-our-community' className={` ${location.pathname === '/community/join-our-community' ? 'bg-white' : ''} `}>Join Our Community</Link>
                            <Link to='/community/ask-question' className={` ${location.pathname === '/community/ask-question' ? 'bg-white' : ''} `}>Ask Question</Link>
                        </div>
                    )}
                </div>

                {
                    auth ?
                        <button><Link to='/' onClick={logout}>Logout</Link></button> :
                        <>
                            <button><Link to='/signin'>Sign-in</Link></button>
                            <button><Link to='/login'>Login</Link></button>
                        </>
                }

            </ul>

            <button className='toggle' onClick={() => { setMobile(!mobile) }}>
                {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
    );
};

export default Nav;
