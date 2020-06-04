import React, { Component } from "react";
import "./App.css";
import Wrapper from "./Components/Wrapper";
import ApostleCard from "./Components/Apostle";
import apostle from "./apostles.json";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

class App extends Component {
  // setting states
  state = {
    score: 0,
    clicked: [],
    apostle
  };

  // Fisher-yates Shuffle
  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // handle increment

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
        score: 0
      });
    } else {
      console.log("aint this one yet");
      this.state.clicked.push(event.target.id);
      this.setState({ apostle: this.shuffleArray(this.state.apostle) });
      this.setState({ score: this.state.score + 1 });
    }
  };

  // render
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <Navbar score={this.state.score} />
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
