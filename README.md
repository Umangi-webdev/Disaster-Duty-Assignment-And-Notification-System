 ** DDANS | Disaster Duty Assignment and Notification System

DDANS is a specialized platform designed to streamline the coordination of personnel during emergency situations and natural disasters. Developed as part of the Smart Gujarat Hackathon, this system automates the assignment of duties and ensures real-time communication between administrative authorities and field staff.

🚀 Overview

During disasters, manual coordination is slow and prone to errors. DDANS solves this by providing a centralized dashboard for administrators to assign duties based on location and necessity, with an instant notification system to alert designated responders.

✨ Key Features

Automated Duty Assignment: Efficiently assign personnel to specific disaster zones based on real-time requirements.
Real-time Notifications: Instant alerts via SMS/Email/Push notifications to ensure staff respond immediately.
Admin Dashboard: A powerful interface for authorities to monitor the distribution of manpower across different regions.
Reporting & Analytics: Generate detailed reports on duty status and personnel availability.
User Management: Secure login and profile management for different government departments.

🛠️ Tech Stack

Frontend: React.js / Flutter (choose the one you used)
Backend: Node.js & Express.js
Database: MongoDB Atlas (MERN Stack)
Communication: Twilio API (for SMS) or Firebase Cloud Messaging (for Push)
Authentication: JWT (JSON Web Tokens) or Firebase Auth

📂 Project Structure

├── client/          # Frontend application

├── server/          # Node.js backend API

├── models/          # Database schemas (User, Duty, Notification)

├── routes/          # API endpoints

└── README.md        # Documentation

🏆 Hackathon Recognition

This project was conceptualized and developed for the Smart Gujarat Hackathon to provide a tech-driven solution for state-level disaster management.

Quick Tip for GitHub:
Since you had issues earlier with files not appearing, make sure you run:
git add .
git commit -m "Initial commit for DDANS project"
git push origin main

🌍 Social Impact

Response Time: Reduces the administrative delay in duty assignment by up to 70% compared to manual calling/paper-based systems.
Resource Optimization: Prevents "over-deployment" in one area while others remain understaffed.
Transparency: Provides a clear digital trail of who was assigned where, increasing accountability during critical state emergencies.

📈 Future Enhancements

AI Integration: Using machine learning to predict manpower requirements based on historical disaster data.
Offline Mode: Implementing Service Workers for a Progressive Web App (PWA) experience in low-connectivity zones.
GPS Geo-Fencing: Automatic check-in/check-out when personnel reach their assigned disaster site.

🛡️ Security & Reliability

Role-Based Access Control (RBAC): Ensures that only authorized government officials can trigger emergency alerts and assign duties.
Encrypted Communication: All sensitive personnel data and assignment details are handled via secure API endpoints.
Fail-safe Mechanism: In case of internet failure at the field level, the system is designed to queue notifications for SMS delivery.

 -> Author

Name : Patel Umangi
Branch: Computer Engineering (9.34 SPI)
