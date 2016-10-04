import React from 'react';
import './GolMenu.sass';

const GolMenuHeader = function(props) {
  return (
    <div  className="header">
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        <h1>Game of Life</h1>
      </a>
      <hr />
    </div>
  );
};

const GolMenu = React.createClass({
  render: function() {
    return (
      <div className="GolMenu section">
        <GolMenuHeader />
      </div>
    );
  }
});

export default GolMenu;
