import { Component } from "react";
import done from "./done.png";


export class ToDoList extends Component {
  state = {
    userInput: "",
    toDoList: [],
  };
  onChangeEvent(e) {
    this.setState({ userInput: e });
    console.log(e);
  }
  addItem(input) {
    if (input === "") {
      alert("Please enter an item");
    } else {
      let listArray = this.state.toDoList;
      listArray.push(input);
      this.setState({ toDoList: listArray, userInput: "" });
    }
  }
  deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({ toDoList: listArray });
  }
  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What do you want to do today?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              onClick={() => this.addItem(this.state.userInput)}
              className="btn add"
            >
              {" "}
              Add{" "}
            </button>
          </div>
          <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">
              Delete
            </button>
          </div>
          <ul>
            {this.state.toDoList.map((item, index) => (
              <li onClick={this.crossedWord} key={index} alt="done">
                <img src={done} width="20px" /> {item}
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}