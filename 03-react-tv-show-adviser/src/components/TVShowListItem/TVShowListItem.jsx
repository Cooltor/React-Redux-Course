import s from "./style.module.css";
import { SMALL_BACKDROP_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        src={`${SMALL_BACKDROP_BASE_URL}${tvShow.poster_path}`}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
