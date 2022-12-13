import React, { useRef, useState } from "react";
import "./answer.css";
export default function Answer({
  answers,
  setId,
  correct,
  id,
  score,
  setScore,
  setGameOver,
  setOverScore
}) {
  const checkAnswer = (isTrue) => {
    isTrue
      ? ( setId((id !== 4 ? id+= 1 : id-=1)), setScore((score += 500)))
      : (setGameOver(true), setScore(0),setOverScore(score));
  };
  return (
    <div className="answers">
      {answers.map((x) => {
        return (
          <div
            className="answer"
            onClick={(e) => {
              answers.indexOf(e.target.textContent) === correct
                ? checkAnswer(true)
                : checkAnswer(false);
            }}
          >
            {x}
          </div>
        );
      })}
    </div>
  );
}
