import React from 'react';
import UserCard from './UserCard';

const userList = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    photo: 'path/to/photo1.jpg'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    photo: 'path/to/photo2.jpg'
  },
  // Add more user objects here
];

const App = () => {
  return (
    <div>
      <h2>User List</h2>
      {userList.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          photo={user.photo}
        />
      ))}
    </div>
  );
};

export default App;
