import dayjs from 'dayjs';
import moment from 'moment';
import React, { useState, useEffect, MouseEventHandler  } from 'react';
import './styles.css';
import buildCalendar from './build';
import dayStyles from './styles';

const Timetable = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value])

  function currMonthName() {
    return value.format('MMMM')
  }
  function currYear() {
    return value.format('YYYY')
  }

  const prevMonth = () => {
    return value.clone().subtract(1, 'month')
  }
  function nextMonth() {
    return value.clone().add(1, 'month')
  }

  return (
    <div className="calendar">
      <div
        className='calendar_header'
      >
        <div
          className='previous'
          onClick={()=>setValue(prevMonth())}
        >{String.fromCharCode(171)}
        </div>
        <div
          className='current'
        >{currMonthName()}{currYear()}</div>
        <div
          className='next'
          onClick={()=>setValue(nextMonth())}
        >{String.fromCharCode(187)}</div>
      </div>
      <div
        className='calendar_body'
      >
        {
          calendar.map(week => <div key={Math.random()}>
            {
              (week as any[]).map(day =>
                <div
                  onClick={() => setValue(day)}
                  className='day' key={Math.random()}>
                  <div
                    className={dayStyles(day, value)}
                  >{day.format('D').toString()}</div>
                </div>
              )
            }
          </div>)
        }
      </div>
    </div>
  )
}

export default Timetable;