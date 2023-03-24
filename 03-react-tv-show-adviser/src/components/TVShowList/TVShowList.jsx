import s from "./style.module.css";

export function TVShowList({ tvShows, onClick }) {
  return (
    <div className={s.container}>
      {tvShows.map((tvShow) => (
        <TVShowListItem onClick={onClick} key={tvShow.id} tvShow={tvShow} />
      ))}
    </div>
  );
}
