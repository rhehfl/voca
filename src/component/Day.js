import { useParams, useNavigate } from "react-router-dom";
import Word from "./Word";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
export default function Day() {
  //더미데이터의 단어

  //url 파람값 가져옴
  const { day } = useParams();
  //특정 날짜의 단어들 가져오기
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  const navigate = useNavigate();

  function beforeDay() {
    if (day - 1 >= 1) {
      navigate(`/day/${+day - 1}`);
    } else {
      alert("마지막 페이지 입니다.");
    }
  }
  function afterDay() {
    if (day + 1 >= 1) {
      navigate(`/day/${+day + 1}`);
    } else {
      alert("마지막 페이지 입니다.");
    }
  }

  return (
    <div className="list_day_word">
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading.... </span>}

      <table>
        <button className="the_day_before" onClick={beforeDay}>
          전날
        </button>
        <button className="the_day_after" onClick={afterDay}>
          다음날
        </button>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
