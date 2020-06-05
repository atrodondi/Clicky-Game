import React, { Component } from "react";
// import "./App.css";
import Wrapper from "./Components/Wrapper";
import ApostleCard from "./Components/Apostle";
import apostle from "./apostles.json";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

class App extends Component {
  // setting states
  state = {
    score: 0,
    topScore: 0,
    clicked: [],
    apostle,
    title: "Click a picture to start the game!"
  };

  // Fisher-yates Shuffle used to shuffle apostle array
  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // onload?
  componentDidMount() {
    this.setState({ apostle: this.shuffleArray(apostle) });
  }

  // picClicked
  picClicked = event => {
    console.log("id of pic", event.target.id);
    if (this.state.clicked.includes(event.target.id)) {
      console.log("this one be included");
      this.setState({
        apostle: this.shuffleArray(this.state.apostle),
        clicked: [],
        score: 0,
        title: "Incorrect Guess, Start Over by clicking another Picture!!"
      });
    } else {
      console.log("aint this one yet");
      this.state.clicked.push(event.target.id);
      if (this.state.score + 1 > this.state.topScore) {
        this.setState({
          apostle: this.shuffleArray(this.state.apostle),
          score: this.state.score + 1,
          title: "You Guessed Correctly!",
          topScore: this.state.score + 1
        });
      } else {
        this.setState({
          apostle: this.shuffleArray(this.state.apostle),
          score: this.state.score + 1,
          title: "You Guessed Correctly!"
        });
      }
    }
  };

  // render
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Navbar
          score={this.state.score}
          title={this.state.title}
          topScore={this.state.topScore}
        ></Navbar>
        {this.state.apostle.map(apostle => (
          <ApostleCard
            id={apostle.id}
            key={apostle.id}
            name={apostle.name}
            image={apostle.image}
            onclick={this.picClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
