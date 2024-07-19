import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
    };
  }

  render() {
    const { name, email, phone } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <p>count1: {count}</p>
        <p>count2: {count2}</p>
        <button
          onClick={() => {
            this.setState({
              // NEVER MODIFY YOUR STATE VARIABLES DIRECTLY
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase Count
        </button>
        <h1>{name}</h1>
        <h3>{email} </h3>
        <h4>{phone}</h4>
      </div>
    );
  }
}

export default UserClass;
