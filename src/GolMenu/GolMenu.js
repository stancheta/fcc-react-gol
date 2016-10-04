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
  handleButtonClick: function(evt) {
    const btn = evt.target;
    console.log(btn.value);
  },
  render: function() {
    return (
      <div className="GolMenu section">
        <GolMenuHeader />

        <h3>State:</h3>
        <button name='play-button' value='play' onClick={this.handleButtonClick}>
          Play
        </button>
        <button name='pause-button' value='pause' onClick={this.handleButtonClick}>
          Pause
        </button>
        <button name='clear-button' value='clear' onClick={this.handleButtonClick}>
          Clear
        </button>

        <h3>Board Size:</h3>
        <button name='small-button' value='small' onClick={this.handleButtonClick}>
          50x30
        </button>
        <button name='medium-button' value='medium' onClick={this.handleButtonClick}>
          70x50
        </button>
        <button name='large-button' value='large' onClick={this.handleButtonClick}>
          100x80
        </button>

        <h3>Simulation Speed:</h3>
        <button name='slow-button' value='slow' onClick={this.handleButtonClick}>
          Slow
        </button>
        <button name='medium-button' value='medium' onClick={this.handleButtonClick}>
          Medium
        </button>
        <button name='fast-button' value='fast' onClick={this.handleButtonClick}>
          Fast
        </button>
      </div>
    );
  }
});

export default GolMenu;
