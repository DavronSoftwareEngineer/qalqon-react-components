import React from 'react'
import './main.css';

function DatePicker() {
  return (
    <div>
      <input type="date" 
        style={{backgroundColor: 'blue', 
          border: "none",
          padding: "5px",
          color: "#fff",
          fontSize: "18px",
          borderRadius: "5px",
        }}/>
      <input type="date" />
      <input type="time" />
    </div>
  )
}

export default DatePicker;