import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      <MenuListItem
        onClick={onItemClick}
        difficulty="low"
        isSelected={difficulty === "low"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="medium"
        isSelected={difficulty === "medium"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="high"
        isSelected={difficulty === "high"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="insane"
        isSelected={difficulty === "insane"}
      />
    </div>
  );
}
