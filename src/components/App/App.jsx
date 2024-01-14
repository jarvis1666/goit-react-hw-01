
import './App.css'
import userData from '../../data/Profile.json'
import friends from "../../data/friends.json"
import transactions from '../../data/transactions.json'
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'

const App = () => {
    return (
      <>
        {
          userData.map((even, idx) =>(
            <Profile
              key={idx}
              name={even.username}
              tag={even.tag}
              location={even.location}
              image={even.avatar}
              stats={even.stats}
           />
        ))}
        <FriendList friends={friends} />
         <TransactionHistory items={transactions} />
      </>
    );
};
export default App;