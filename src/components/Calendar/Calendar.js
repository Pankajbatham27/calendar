import classes from './Calendar.module.css';

import React from 'react';

const Calendar = (date) => {



    const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const month = date.date.toLocaleString('default', { month: 'long' });
    const year = date.date.getFullYear();

    const monthDaysCount = new Date(year, date.date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, date.date.getMonth(), 1).getDay();

    let currentDate = 0;

    if (date.firstInputDateRemember.getMonth() === date.date.getMonth() && date.firstInputDateRemember.getFullYear() === date.date.getFullYear()) {
        currentDate = date.firstInputDateRemember.getDate();
    }


    function handlePrevMonth() {
        date.preNextHandler('pre');
    }

    function handleNextMonth() {
        date.preNextHandler('next');
    }


    // date.firstInputDateRemember.getDate();

    // console.log(currentDate);
    // return false;


    // for (let i = 0; i < daysOfWeekShort.length; i++) {
    //     days.push(<div className='weekNames' key={`${i}`}>{daysOfWeekShort[i]}</div>);
    // }

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`altrataNone-${i}`} />);
    }
    for (let i = 1; i <= monthDaysCount; i++) {
        days.push(<div className={i === currentDate ? `${classes.active}` : `${classes.inactive}`} key={i}> {i} </div>);
    }

    return (
        <div className={classes.calendar}>
            <div className={classes.calendarHeader}>{`${month} ${year}`}</div>
            <div className={classes.calendarWeekNames}>{daysOfWeekShort.map((item) => (
                <div key={item}>{item}</div>
            ))}</div>
            <div className={classes.calendarDays}>{days}</div>
            <div className={classes.forButtonFlex}>
                <button onClick={handlePrevMonth}>Prev</button>
                <button onClick={handleNextMonth}>Next</button>
            </div>

        </div>
    );
}

export default Calendar;