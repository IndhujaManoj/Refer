import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const currentUser = userData.find((item) => item.userName === 'username'); // Replace 'username' with the actual username
    setUser(currentUser);
  }, []);

  const handleDelete = () => {
    localStorage.removeItem('userData');
    window.location.href = '/';
  };

  const handleEdit = () => {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const userIndex = userData.findIndex((item) => item.userName === user.userName);

    if (userIndex !== -1) {
      userData[userIndex] = user;

      localStorage.setItem('userData', JSON.stringify(userData));

      navigate('/register');
    }
  };

  const handleLogout = () => {

    window.location.href = '/';
  };

  return (
    <div>
      <h1>Welcome {user.userName}</h1>
      <p onClick={handleDelete}>Delete my account</p>
      <p onClick={handleEdit}>Edit my profile</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
