import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from session or cookies
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <button onClick={() => Router.push('/account-settings')}>Account Settings</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
