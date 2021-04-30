import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ totalCount }) => {
  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();

  const arrMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = arrMonths[today.getMonth()];

  const arrDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = arrDays[today.getDay()];

  return (
    <nav className={styles.navbar}>
      <div className={styles.todayInfo}>
        <div className={styles.todayInfoLeft}>
          <span className={styles.date}>{date}</span>
          <div className={styles.monthYear}>
            <div className={styles.month}>{month}</div>
            <div className={styles.year}>{year}</div>
          </div>
        </div>
        <span className={styles.day}>{day}</span>
      </div>
      <div className={styles.todayCount}>
        <span className={styles.title}>TO DO LIST</span>
        <span className={styles.count}>{totalCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
