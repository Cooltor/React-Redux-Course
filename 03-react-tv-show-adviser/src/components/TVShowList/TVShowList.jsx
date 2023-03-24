import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShows, onClickItem }) {
  return (
    <>
      <div className={s.title}>You may also like:</div>
      <div className={s.list}>
        {tvShows.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
