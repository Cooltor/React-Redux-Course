import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Déclarer un tab d'etoiles vide
  const starList = [];

  // Stocker dans une variable le nombre d'etoiles pleines
  const starFillCount = Math.floor(rating);

  // Stocker dans une variable si oui ou non il y a une etoile a moitie pleine
  const hasStarHalf = rating - starFillCount >= 0.5;

  // Stocker dans une variable le nombre d'etoiles vides
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // Remplir le tab d'etoiles avec le nombre d'etoiles pleines
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} className={s.star} />);
  }

  // Remplir le tab d'etoiles avec le nombre d'etoiles a moitie pleines
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} className={s.star} />);
  }

  // Remplir le tab d'etoiles avec le nombre d'etoiles vides
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} className={s.star} />);
  }

  return <div>{starList}</div>;
}
