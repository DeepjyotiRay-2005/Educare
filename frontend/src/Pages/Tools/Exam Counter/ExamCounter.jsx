import React, { useState, useEffect } from 'react';
import './ExamCounter.css';

function ExamCounter() {
  const [examDate, setExamDate] = useState('');
  const [showCountdown, setShowCountdown] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Check if there's already an exam date stored in localStorage
    const storedDate = localStorage.getItem('examDate');
    if (storedDate) {
      setExamDate(storedDate);
      setShowCountdown(true);
    }
  }, []);

  const handleDateChange = (e) => {
    setExamDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (examDate) {
      setShowCountdown(true);
      localStorage.setItem('examDate', examDate); // Store exam date in localStorage
    }
  };

  const calculateTimeLeft = (endDate) => {
    const total = Date.parse(endDate) - Date.parse(new Date());
    if (total <= 0) {
      clearExamDate(); // If countdown is finished, clear everything
      return;
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const clearExamDate = () => {
    localStorage.removeItem('examDate'); // Clear exam date from localStorage
    setExamDate('');
    setShowCountdown(false);
  };

  useEffect(() => {
    let timer;
    if (showCountdown && examDate) {
      timer = setInterval(() => {
        calculateTimeLeft(examDate);
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup on unmount
  }, [showCountdown, examDate]);

  const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  if (!showCountdown) {
    return (
      <div className="date-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="exam-date">Enter Exam Date:</label>
          <input
            type="date"
            id="exam-date"
            value={examDate}
            onChange={handleDateChange}
            min={todayDate} // Disable past dates
            required
            disabled={localStorage.getItem('examDate') !== null} // Disable date picker if there's an ongoing countdown
          />
          <button type="submit" disabled={localStorage.getItem('examDate') !== null}>Start Countdown</button>
        </form>
      </div>
    );
  }

  return (
    <div className="counter">
      <div className="heading">
        <h3>Exam <span>Starts</span> IN</h3>
      </div>
      <div className="home">
        <div className="wrapper">
          <p className='value'>{days}</p>
          <div className="title">Days</div>
        </div>
        <div className="wrapper">
          <p className='value'>{hours}</p>
          <div className="title">Hours</div>
        </div>
        <div className="wrapper">
          <p className='value'>{minutes}</p>
          <div className="title">Minutes</div>
        </div>
        <div className="wrapper">
          <p className='value'>{seconds}</p>
          <div className="title">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default ExamCounter;
