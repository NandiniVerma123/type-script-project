import React, { useEffect, useState } from "react";

interface User{
    id : number;
    name : string;
    role : string;
}

//props Type 
interface UserDetailsProps{
    user : User
}

// 🔹 COMPONENT with STATE + EFFECT
const UserDetails : React.FC<UserDetailsProps> = ({ user }) =>{
  const [lastViewed, setLastViewed] = useState<string | null>(null)

  // 🔹 EFFECT (Lifecycle: componentDidUpdate)
  useEffect(() => {
    setLastViewed(new Date().toLocaleTimeString());

    // 🔹 CLEANUP example (componentWillUnmount)
    return () => {
      console.log("UserDetails unmounted");
    };
  }, [user]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Last Viewed:</strong> {lastViewed}</p>
    </div>
  );
}

export default UserDetails;