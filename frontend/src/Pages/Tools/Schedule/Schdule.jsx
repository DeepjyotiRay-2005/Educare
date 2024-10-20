import React, { useEffect, useState } from 'react';
import './Schdule.css';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'

import '@schedule-x/theme-default/dist/index.css'

function Schdule() {
  const [title, setTitle] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const plugins = [createEventsServicePlugin(), createDragAndDropPlugin(), createEventModalPlugin()]

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-10-20 09:00',
        end: '2024-10-20 10:00',
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2024-10-21 09:00',
        end: '2024-10-21 10:00',
      },
      {
        id: '3',
        title: 'Event 3',
        start: '2024-10-22 09:00',
        end: '2024-10-22 10:00',
      },
      {
        id: '4',
        title: 'Event 4',
        start: '2024-10-20 19:00',
        end: '2024-10-20 21:00',
      },
      {
        id: '5',
        title: 'Event 5',
        start: '2024-10-20 15:00',
        end: '2024-10-20 17:00',
      },
      {
        id: '6',
        title: 'Event 6',
        start: '2024-10-21 13:30',
        end: '2024-10-21 15:00',
      },
      {
        id: '7',
        title: 'Meeting with Client',
        start: '2024-10-23 11:00',
        end: '2024-10-23 12:00',
      },
      {
        id: '8',
        title: 'Project Review',
        start: '2024-10-23 14:00',
        end: '2024-10-23 15:30',
      },
      {
        id: '9',
        title: 'Team Standup',
        start: '2024-10-24 09:00',
        end: '2024-10-24 09:30',
      },
      {
        id: '10',
        title: 'Code Review',
        start: '2024-10-24 10:00',
        end: '2024-10-24 11:00',
      },
      {
        id: '11',
        title: 'Lunch with Team',
        start: '2024-10-24 12:30',
        end: '2024-10-24 13:30',
      },
      {
        id: '12',
        title: 'Webinar on React',
        start: '2024-10-25 10:00',
        end: '2024-10-25 12:00',
      },
      {
        id: '13',
        title: 'Client Feedback Session',
        start: '2024-10-25 15:00',
        end: '2024-10-25 16:00',
      },
      {
        id: '14',
        title: 'Internal Demo',
        start: '2024-10-26 09:00',
        end: '2024-10-26 10:30',
      },
      {
        id: '15',
        title: 'Release Planning',
        start: '2024-10-26 11:00',
        end: '2024-10-26 12:30',
      },
      {
        id: '16',
        title: 'Design Review Meeting',
        start: '2024-10-27 10:00',
        end: '2024-10-27 11:30',
      },
      {
        id: '17',
        title: 'Marketing Strategy Session',
        start: '2024-10-28 13:00',
        end: '2024-10-28 14:00',
      },
      {
        id: '18',
        title: 'Sprint Retrospective',
        start: '2024-10-29 09:00',
        end: '2024-10-29 10:00',
      },
      {
        id: '19',
        title: 'Customer Support Workshop',
        start: '2024-10-29 14:00',
        end: '2024-10-29 16:00',
      },
      {
        id: '20',
        title: 'Product Launch Preparation',
        start: '2024-10-30 11:00',
        end: '2024-10-30 12:30',
      },
    ]
    ,
  }, plugins)

  function convertToDateTimeFormat(datetime) {
    // Check if datetime is provided
    if (!datetime) return '';

    // Replace the 'T' with a space
    return datetime.replace('T', ' ');
  }


  const addTask = async () => {
    if (!title || !start || !end) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Convert the datetime-local format to the desired format
      const formattedStart = convertToDateTimeFormat(start);
      const formattedEnd = convertToDateTimeFormat(end);

      // Create a new event object
      const newEvent = {
        title,
        start: formattedStart,
        end: formattedEnd,
      };

      // Get existing events from localStorage or set an empty array
      const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
      const updatedEvents = [...existingEvents, newEvent];

      // Save the updated events array to localStorage
      localStorage.setItem('events', JSON.stringify(updatedEvents));

      // Add the new event using the eventsService provided by the calendar
      await calendar.eventsService.add(newEvent);

      // Clear input fields after adding the event
      setEnd('');
      setStart('');
      setTitle('');

    } catch (error) {
      console.error('Error adding new event:', error);
    }
  };



  useEffect(() => {
    const fetchEvents = async () => {
      const events = await calendar.eventsService.getAll();
    };
    fetchEvents();
  }, [calendar]);


  return (
    <div className='schdule-container'>
      <div className='addTask'>
        <input type="text" value={title} placeholder='Add a new task... ' onChange={(e) => setTitle(e.target.value)} />
        <input type="datetime-local" placeholder='Start time ' value={start} onChange={(e) => setStart(e.target.value)} />
        <input type="datetime-local" placeholder='End Time ' value={end} onChange={(e) => setEnd(e.target.value)} />
        <div>
          <button type="submit" value={'Add Task '} onClick={addTask}>ADD</button>
        </div>
      </div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}

export default Schdule;