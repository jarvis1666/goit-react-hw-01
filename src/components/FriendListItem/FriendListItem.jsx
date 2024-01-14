import css from '../FriendListItem/FriendListItem.module.css'
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <div className={css.item} key={ id}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="90" />
        <p className={css.name}>{ name}</p>
        <p className={clsx(css.status,{[css.active]: isOnline, [css.retired]: !isOnline})}>{ isOnline? 'Online' : 'Ofline'}</p>
    </div>;
}