import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    file: undefined,
    message: '',
  }

  onMessageChange = e => {
    const { value: message } = e.target;
    this.setState({ message });
  }

  handleUpload = e => {
    this.setState({ file: e.target.files[0] });
  }

  onSubmit = e => {
    e.preventDefault();
    const { file } = this.state;
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
    }
    const text = reader.readAsDataURL(file);
    console.log(text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="message"
            onChange={this.onMessageChange}
          />
          <input
            type="file"
            name="file"
            onChange={this.handleUpload}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
