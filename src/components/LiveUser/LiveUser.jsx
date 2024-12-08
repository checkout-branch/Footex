// LiveUserCount.js
import  { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5173"); // Replace with your backend URL

function LiveUserCount() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Listen for the "userCount" event from the server
    socket.on("userCount", (count) => {
      setUserCount(count);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontSize: "24px" }}>
      <h1>Live Users on the Website</h1>
      <p>{userCount} user(s) currently online</p>
    </div>
  );
}

export default LiveUserCount;