import css from "../Profile/Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt={name} width={300} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span className="label">Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className="label">Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className="label">Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
