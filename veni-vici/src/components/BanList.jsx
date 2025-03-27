import React from 'react';
import "../App.css";
function BanList({ banList }) {
  return (
    <div className="ban-list-container">
    <h2>Banned Attributes:</h2>
    <ul>
      {banList.map((ban, index) => (
        <li key={index}>
          <strong>{ban.attribute}:</strong> {ban.value}
        </li>
      ))}
    </ul>
  </div>  
  );
}
export default BanList;
