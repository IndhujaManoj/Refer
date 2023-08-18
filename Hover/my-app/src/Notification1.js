import React, { useEffect, useState } from 'react';
// import AppHeader from './AppHeader';
import axios from 'axios';

const Notification1 = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    fetchNotificationCount();
  }, []);

  const fetchNotificationCount = async () => {
    try {
      const response = await axios.get('/api/notifications/count');
      const count = response.data.count; // Adjust the response structure based on your API
      setNotificationCount(count);
    } catch (error) {
      console.error('Error fetching notification count:', error);
    }
  };

  return (
    <div>
      {/* <AppHeader notificationCount={notificationCount} /> */}
      {/* Rest of your app */}
    </div>
  );
};

export default Notification1;
