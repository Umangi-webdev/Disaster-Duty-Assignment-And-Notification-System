import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Officer John Doe assigned duty at 10 AM", time: "10:00 AM" },
    { id: 2, message: "Officer Jane Smith assigned duty at 2 PM", time: "2:00 PM" },
    { id: 3, message: "Reminder: Duty starts in 30 minutes!", time: "4:30 PM" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="bg-gray-100 p-4 rounded shadow-md"
            >
              <p className="font-semibold">{notification.message}</p>
              <p className="text-gray-600 text-sm">{notification.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
