import React from "react";

function ShowDate() {
  const data = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <strong>
        <span className="data-weekday">{`${weekday[data.getDay()]}, `}</span>
        {`${month[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`}
      </strong>
    </div>
  );
}

export default ShowDate;
