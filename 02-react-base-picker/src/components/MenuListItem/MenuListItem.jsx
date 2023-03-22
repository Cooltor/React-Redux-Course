import s from "./style.module.css";
import { useState } from "react";

export function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function getBackgroundColor() {
    if (isHovered) {
      return "#54F08A";
    } else if (isSelected) {
      return "#39A35E";
    } else {
      return "#eff0ef";
    }
  }

  return (
    <div
      onClick={() => onClick(difficulty)}
      style={{ backgroundColor: getBackgroundColor() }}
      className={s.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to: {difficulty}
    </div>
  );
}
