import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";


interface User{
  id: number;
  name: string;
  role: string;
}

const App : React.FC = () => {
  // 🔹 STATE
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);


  // 🔹 EFFECT (Lifecycle: componentDidMount)
  useEffect(() => {
    setLoading(true);

    // Simulating API call
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Amit", role: "Admin" },
        { id: 2, name: "Riya", role: "User" },
        { id: 3, name: "Karan", role: "Manager" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      {loading && <p>Loading users...</p>}

      {/* 🔹 PROPS */}
      <UserList
        users={users}
        onUserSelect={setSelectedUserId}
      />

      {/* 🔹 CONDITIONAL RENDER */}
      {selectedUserId && (
      <UserDetails user = {users.find(user => user.id === selectedUserId)!} />
      )}
    </div>
  );
}

export default App
