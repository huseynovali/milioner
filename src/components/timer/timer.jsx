import React, { useEffect, useRef, useState } from "react";
import "./timer.css";
export default function Timer() {
 const time = useRef(90)
  return <div className="timer">0:{time.current}</div>;
}
