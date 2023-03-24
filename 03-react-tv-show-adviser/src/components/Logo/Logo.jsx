import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        <img src={image} className={s.img} />
        <div className={s.titleGroup}>
          <span className={s.title}>{title}</span>
          <span className={s.subtitle}>{subtitle}</span>
        </div>
      </div>
    </>
  );
}
