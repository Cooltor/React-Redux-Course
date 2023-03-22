import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constantes";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((item) => (
        <MenuListItem
          key={item}
          difficulty={item}
          isSelected={item === difficulty}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}
