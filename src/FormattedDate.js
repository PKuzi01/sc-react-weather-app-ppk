import React from 'react';

function FormattedDate (props) {
    console.log(props.date);

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = props.date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    return (
        <div>
            {day} {hour}:{minute}
        </div>
    );
}

export default FormattedDate;
