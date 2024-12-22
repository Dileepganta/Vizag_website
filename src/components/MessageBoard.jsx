import React from 'react';
import '../styles/Message.css'
function MessageBoard() {
  const notifications = [
    "NOTIFICATION & APPLICATION FOR THE POST OF E - DIVISIONAL MANAGER",
    "Requirement stalls details",
    "List of Applicants for allotment of RBZ stalls from 2019-till date",
    "Notification for the Post of DPA at O/o DWCW",
    "Facilitation Centre and Command Control Room on Sand at Collectorate, Visakhapatnam",
    "RBI Quiz",
    "GSWS VACANCY POSTIONS ASR AKP VSP",
    "Paper publication Tender",
    "List of Lorries Permitted for Transport of Sand...",
    "District Local Complaints Committee under sexual harrasment on women at workplace",
    "Mandal Level Nodal Officers for internal complaints committee under sexual harrasment at workplace",
    "సుభాష్ చంద్రబోస్ ఆజాద్ ట్రైనింగ్ ఫౌండేషన్‌కి దరఖాస్తుల ఆహ్వానం",
    "Election Commission of India- Understanding the Polling Process ( YOUTUBE Videos )",
    "Election Commission of India- Voter Guide(English and Telugu)",
    "AWW,AWH Notification",
    "DSR Visakhapatnam Report",
    "BLO Training Manual"
  ];

  return (
    <div className="message-board">
      <h3 className="board-title">
        <i className="fas fa-clipboard-list"></i> Message Board
      </h3>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <i className="fas fa-chevron-right"></i>
            <span>{notification}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;