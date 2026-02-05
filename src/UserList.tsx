import React from "react";

interface User {
  id : number,
  name : string,
  role : string
}

interface UserListProps{
  users : User[];
  onUserSelect : ( userId : number) => void
}

// 🔹 COMPONENT receiving PROPS
const UserList : React.FC<UserListProps> = ({ users, onUserSelect }) =>{
  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 && <p>No users available</p>}

      <ul>
        {users.map(user => (
          <li
            key={user.id}
            style={{ cursor: "pointer" }}
            onClick={() => onUserSelect(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList
