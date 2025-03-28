import React from "react";

function BanList({ banList, setBanList }) {
  const removeFromBanList = (indexToRemove) => {
    setBanList((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="ban-list-container">
      <h2>Banned Attributes:</h2>
      {banList.length > 0 && (
        <ul>
          {banList.map((ban, index) => (
            <li 
              key={index} 
              className="banned-item"
              onClick={() => removeFromBanList(index)}
              title="Click to unban"
            >
              <strong>{ban.attribute}:</strong> {ban.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BanList;
