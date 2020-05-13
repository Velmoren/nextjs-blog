import React from "react";

export default class Block extends React.Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://todo-a7861.firebaseio.com/todos.json"
    );
    const todos = await response.json();
    this.setState({ items: todos });
  }

  render() {
    return (
      <div>
        {this.state.items && this.state.items.length > 0 ? (
          this.state.items.map((item, i) => <div key={i}>{item.title}</div>)
        ) : (
          <div>asdasd</div>
        )}
      </div>
    );
  }
}
