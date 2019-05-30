import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        facing: "North",
        xCoord: 1,
        yCoord: 1
    };
  }

  rotateLeft = () => {
    this.setState({
      facing: "West"
    })
  } 

  rotateRight = () => {
    this.setState({
      facing: "East"
    })
  } 

  report = () => {
    console.log(this.state.report)
  }

  render() {
    var facing = this.state.facing;
    var report = `To the ${this.state.facing}, to the ${this.state.facing}.`

    return (
      <div className="main">
        <p>PAC-MAN 2: Return of Blinky and Clyde.</p>
        <div className="game">GAME STARTS HERE.</div>
        {/* Grid of 5 Squares: x = (0,1,2,3,4), y = (0,1,2,3,4) */}
        {/* Makie the style of the arcade PACMAN game. */}
        <div>COMMANDS</div>
        <button>PLACE</button>
        {/* Always first. */}
        {/* Type in x co-ord, y co-ord to dictate wher it lands. */}
        <button>MOVE</button>
        {/* Moves PAC 1 square where its facing. */}
        <button onClick={this.rotateLeft}>LEFT</button>
        {/* PAC rotates 90 degrees to the left. */}
        <button onClick={this.rotateRight}>RIGHT</button>
        {/* PAC rotates 90 degrees to the right. */}
        <button onClick={this.report}>REPORT</button>
        {/* Outputs x co-ord, y co-ord & whicg cardinal direction its facing. */}
        <p>PACMAN is facing {facing}.</p>
        <p>{report}</p>
      </div>
    );
  }
}

export default App;
