import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    console.log("inside square render() function")
    console.log(this.props)
    return (
      <button className="square" onClick={() => this.props.squareOnClick()}>
        {this.props.squareValue}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
    console.log("inside Board constructor()")

    super(); // what is super ????

    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    console.log("inside Board handleClick()")

    const squares = this.state.squares.slice();
    squares[i] = 'X';

    // setState will re-render the page
    this.setState({squares: squares});

    // if i instead manually set this.state.squares
    // the array will have the new value, but it won't be rendered
    // so i won't see the 'X' on the page
    // this.state.squares[i] = 'X'
    // console.log(this.state.squares)
  }

  renderSquare(i) {
    console.log(this.state.squares[i])

    return (
      <Square
        squareValue={this.state.squares[i]}
        squareOnClick={() => this.handleClick(i)}
        blah={() => this.something()}
      />
    );
  }

  render() {
    console.log("inside Board render()")

    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    console.log("inside Game render()")

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('jacinda_root')
);
