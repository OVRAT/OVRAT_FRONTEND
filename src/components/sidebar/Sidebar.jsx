import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { allClassesArray } from "../../dummydata";
import HomeWidget from "../homeWidget/HomeWidget";
import "./style.scss";
import axios from "axios";
let array = []
const Sidebar = () => {
  const [date, setDate] = useState(new Date());
  const [get, setget] = useState(false);
  const onChange = (Date) => {
    setDate(Date);
  };

  const getData = async () => {
    axios.get("http://127.0.0.1:8000/api/categories/").then((res) => {
      // allClassesArray+ = res.data
      // console.log(res.data)
      if (get === true) {
        return
      }
      if (array.length > 0) {
        return
      }

      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];

        array.push({
          subject: element.name,
          teacher: "Samiran Pal",
          classTime: "9:30 am",
          bgColor: "rgba(94, 208, 88, 0.35)",
          textColor: "rgba(94, 208, 88, 1)",
        })
        console.log(element.name);
      }
      setget(true)
    })
    // setData(data);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="sidebar">
      <h2>Calendar</h2>
      <Calendar
        className="calendar"
        showWeekNumbers
        onChange={onChange}
        value={date}
      />
      <HomeWidget
        title="All Classes"
        type="all-classes"
        data={array}
        forLargeItems
        noSeeAll
      />
    </div>
  );
};

export default Sidebar;
