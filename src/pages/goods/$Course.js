import React, { Component } from 'react';


export default class SomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <div>
        课程：{this.props.match.params.Course}
      </div>
    );
  }


}

