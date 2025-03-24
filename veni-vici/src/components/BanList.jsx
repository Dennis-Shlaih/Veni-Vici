import React from 'react';
function BanList({ banList }) {
    return (
        <div>
          <h2>Banned Games:</h2>
          <ul>
            {banList.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
      );
    };
export default BanList;