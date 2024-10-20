import React, { useState, useEffect } from 'react';
import './UpcommingEvent.css';

function UpComingEvent() {

  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('top');
  const [deadline, setDeadline] = useState('');
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '' || deadline === '') {
      alert('Please enter a task and select a deadline.');
      return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert('Please select an upcoming date for the deadline.');
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      priority,
      deadline,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
    setPriority('top');
    setDeadline('');
  };

  const markTaskDone = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'top':
        return 'red'; // or any color you prefer for top priority
      case 'middle':
        return 'orange'; // for middle priority
      case 'low':
        return 'green'; // for low priority
      default:
        return 'white'; // fallback color
    }
  };

  return (
    <div className='event-container'>
      <header className='event-header'>
        <h1>Upcoming Events</h1>
      </header>
      <main className='event-main'>
        <div className="task-form">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={addTask}>Add Event</button>
        </div>
        <div className="task-list">
          {tasks.map(task => (
            <div
              key={task.id}
              className="task"
              style={{ backgroundColor: task.completed ? '#f2f2f2' : 'white' }}
            >
              <p>{task.task}</p>
              <p style={{ backgroundColor: getPriorityColor(task.priority) }} className="priority">{task.priority}</p>
              <p>{task.deadline}</p>
              <button
                onClick={() => markTaskDone(task.id)}
                disabled={task.completed}
              >
                {task.completed ? 'Done' : 'Mark Done'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default UpComingEvent;
