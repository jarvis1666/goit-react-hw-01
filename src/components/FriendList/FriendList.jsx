import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map((even, idx) => (
        <li key={idx}>
          <FriendListItem
            avatar={even.avatar}
            name={even.name}
            isOnline={even.isOnline}
            id={even.id}
          />
        </li>
      ))}
    </ul>
  );
};
