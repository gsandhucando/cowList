import React from "react";
import ReactDOM from "react-dom";
import CowList from "./components/cows";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cows: [],
                    name: '',
                    description: ''};
    this.takeInput = this.takeInput.bind(this);
  }
    componentDidMount() {
      fetch("/api/cows").then(response => {
        //calling the server for cows and then parsing into json object its a GET basiclly
          return response.json();
      }).then(data => {
          this.setState({ cows: data.cows })
      }).catch(err => {
          console.log(err);
      })
  }

  takeInput(e, type) {
      this.setState({[type]: e.target.value });
  }

  sendData() {
      let data = {
        name: this.state.name,
        description: this.state.description
      }
      fetch('/api/cows',
      { method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
            console.log(response)
          }).catch(err =>{
            console.log(err);
          })
  }

  render() {
    return (
        <div>
          <input type="text"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={(e) =>{ this.takeInput(e, 'name')}} />
          <input type="text"
                  placeholder="description"
                  value={this.state.description}
                  onChange={(e) =>{ this.takeInput(e, 'description')}} />
          <button type="button"
          onClick={ this.sendData.bind(this)} >Submit</button>
          <CowList cows={this.state.cows} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));