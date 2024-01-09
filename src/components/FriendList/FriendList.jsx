
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
         
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
